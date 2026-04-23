import crypto from "crypto";

const SECRET = process.env.LEAD_MAGNET_SECRET || "";
const TTL_DAYS = 30;

type Payload = {
  e: string; // email
  s: string; // slug
  x: number; // expiry epoch seconds
};

function b64urlEncode(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function b64urlDecode(str: string): Buffer {
  const pad = str.length % 4 === 0 ? "" : "=".repeat(4 - (str.length % 4));
  return Buffer.from(
    str.replace(/-/g, "+").replace(/_/g, "/") + pad,
    "base64"
  );
}

function sign(payloadB64: string): string {
  return crypto.createHmac("sha256", SECRET).update(payloadB64).digest("hex");
}

export function createToken(email: string, slug: string): string {
  if (!SECRET) throw new Error("LEAD_MAGNET_SECRET is not configured");
  const payload: Payload = {
    e: email.toLowerCase().trim(),
    s: slug,
    x: Math.floor(Date.now() / 1000) + TTL_DAYS * 24 * 3600,
  };
  const payloadB64 = b64urlEncode(Buffer.from(JSON.stringify(payload)));
  const sig = sign(payloadB64);
  return `${payloadB64}.${sig}`;
}

export function verifyToken(
  token: string,
  expectedSlug: string
): { valid: boolean; email?: string; reason?: string } {
  if (!SECRET) return { valid: false, reason: "secret_missing" };
  if (!token || typeof token !== "string") return { valid: false, reason: "no_token" };

  const parts = token.split(".");
  if (parts.length !== 2) return { valid: false, reason: "malformed" };

  const [payloadB64, sig] = parts;
  const expectedSig = sign(payloadB64);

  // timing-safe compare
  if (sig.length !== expectedSig.length) return { valid: false, reason: "bad_signature" };
  if (!crypto.timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expectedSig, "hex"))) {
    return { valid: false, reason: "bad_signature" };
  }

  let payload: Payload;
  try {
    payload = JSON.parse(b64urlDecode(payloadB64).toString("utf-8"));
  } catch {
    return { valid: false, reason: "malformed_payload" };
  }

  if (payload.s !== expectedSlug) return { valid: false, reason: "slug_mismatch" };
  if (Math.floor(Date.now() / 1000) > payload.x)
    return { valid: false, reason: "expired" };

  return { valid: true, email: payload.e };
}
