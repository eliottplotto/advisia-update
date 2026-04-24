import { type NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getLeadMagnetBySlug } from "@/lib/lead-magnets/data";
import { createToken } from "@/lib/lead-magnets/token";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const FALLBACK_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://advisia.agency";

// Template IDs créés dans Brevo (cf. /v3/smtp/templates)
const TEMPLATES = {
  immediate: 6, // J+0 : livraison du document
  j1: 7, // J+1 : "comment tirer le max de votre guide"
  j3: 8, // J+3 : "l'erreur n°1 qu'on voit chez les PME"
  j7: 9, // J+7 : "et si on regardait votre cas précisément"
  j14: 10, // J+14 : "dernier check-in"
} as const;

// Scheduling immédiat des 2 premières relances via Brevo scheduledAt.
// Brevo limite scheduledAt à 72h max — donc J+7 et J+14 sont gérés par le cron Vercel
// (voir /api/cron/nurturing) qui tourne quotidiennement.
const NURTURING_SCHEDULE_IMMEDIATE = [
  { templateId: TEMPLATES.j1, delayHours: 24 },
  { templateId: TEMPLATES.j3, delayHours: 72 },
];

// Titre court pour l'objet d'email
const SHORT_TITLES: Record<string, string> = {
  "checklist-cession-reprise": "Checklist Cession-Reprise",
  "10-automatisations-ia-pme": "10 Automatisations IA",
  "checklist-seo-local": "Checklist SEO Local",
};

// Détecte l'origine réelle (localhost en dev, advisia.agency en prod)
function resolveSiteUrl(request: NextRequest): string {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = forwardedHost || request.headers.get("host");
  if (host) {
    const proto =
      forwardedProto ||
      (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
    return `${proto}://${host}`;
  }
  return FALLBACK_SITE_URL;
}

// batchId déterministe par (email × slug) — si le même lead retélécharge le même guide
// dans les 14j, Brevo dédupera via cet identifiant et n'enverra pas de doublons.
function buildBatchId(email: string, slug: string): string {
  return crypto
    .createHash("sha1")
    .update(`${email.toLowerCase().trim()}:${slug}`)
    .digest("hex")
    .slice(0, 16);
}

type EmailParams = {
  PRENOM: string;
  TITRE: string;
  TITRE_COURT: string;
  SLUG: string;
  URL: string;
};

async function sendBrevoEmail(
  apiKey: string,
  to: { email: string; name: string },
  templateId: number,
  params: EmailParams,
  scheduledAt?: Date,
  batchId?: string
): Promise<{ ok: boolean; status: number; error?: string }> {
  const body: Record<string, unknown> = {
    to: [to],
    templateId,
    params,
  };
  if (scheduledAt) body.scheduledAt = scheduledAt.toISOString();
  if (batchId) body.batchId = batchId;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (res.ok) return { ok: true, status: res.status };

  let errData: { message?: string } = {};
  try {
    const text = await res.text();
    if (text) errData = JSON.parse(text);
  } catch {}
  return { ok: false, status: res.status, error: errData.message };
}

export async function POST(request: NextRequest) {
  try {
    const { slug, firstName, email, company, source } = await request.json();

    if (!slug || !firstName || !email) {
      return NextResponse.json(
        { error: "Slug, prénom et email requis" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Format d'email invalide" }, { status: 400 });
    }

    const magnet = getLeadMagnetBySlug(slug);
    if (!magnet) {
      return NextResponse.json({ error: "Ressource inconnue" }, { status: 404 });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedName = firstName.trim();

    // Token signé pour le lien dans l'email
    const token = createToken(normalizedEmail, slug);
    const siteUrl = resolveSiteUrl(request);
    const unlockUrl = `${siteUrl}/ressources/${slug}?t=${encodeURIComponent(token)}`;

    // Fallback dev : pas de clé Brevo → on renvoie le lien direct
    if (!BREVO_API_KEY) {
      console.warn(
        "[lead-magnet] BREVO_API_KEY missing — dev fallback. Unlock URL:",
        unlockUrl
      );
      return NextResponse.json({
        success: true,
        devMode: true,
        devUnlockUrl: unlockUrl,
      });
    }

    const cleanApiKey = BREVO_API_KEY.trim();
    const batchId = buildBatchId(normalizedEmail, slug);

    // 1) Ajout / mise à jour du contact dans la liste dédiée
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": cleanApiKey,
      },
      body: JSON.stringify({
        email: normalizedEmail,
        attributes: {
          PRENOM: normalizedName,
          COMPANY: company?.trim() || "",
          LEAD_MAGNET: slug,
          LEAD_SOURCE: source || "direct",
          DOWNLOADED_AT: new Date().toISOString(),
          NURTURING_J7_SENT: false,
          NURTURING_J14_SENT: false,
        },
        listIds: [magnet.brevoListId],
        updateEnabled: true,
      }),
    });

    if (![201, 204].includes(contactRes.status)) {
      let brevoData: { code?: string; message?: string } = {};
      try {
        const text = await contactRes.text();
        if (text) brevoData = JSON.parse(text);
      } catch {}
      if (brevoData.code !== "duplicate_parameter") {
        console.error("[lead-magnet] Brevo contact error:", contactRes.status, brevoData);
        return NextResponse.json(
          { error: brevoData.message || "Erreur lors de l'inscription" },
          { status: contactRes.status }
        );
      }
    }

    const emailParams: EmailParams = {
      PRENOM: normalizedName,
      TITRE: magnet.title,
      TITRE_COURT: SHORT_TITLES[slug] || magnet.title,
      SLUG: slug,
      URL: unlockUrl,
    };
    const recipient = { email: normalizedEmail, name: normalizedName };

    // 2) Envoi immédiat du document (template J+0)
    const immediate = await sendBrevoEmail(
      cleanApiKey,
      recipient,
      TEMPLATES.immediate,
      emailParams
    );
    if (!immediate.ok) {
      console.error("[lead-magnet] Immediate email failed:", immediate.status, immediate.error);
      return NextResponse.json(
        { error: "L'email n'a pas pu être envoyé. Vérifiez votre adresse ou réessayez." },
        { status: 500 }
      );
    }

    // 3) Scheduling des relances J+1 et J+3 via Brevo scheduledAt
    // (J+7 et J+14 sont gérés par le cron quotidien /api/cron/nurturing)
    const now = Date.now();
    const schedulingResults = await Promise.all(
      NURTURING_SCHEDULE_IMMEDIATE.map(({ templateId, delayHours }) =>
        sendBrevoEmail(
          cleanApiKey,
          recipient,
          templateId,
          emailParams,
          new Date(now + delayHours * 3600 * 1000),
          batchId
        )
      )
    );

    const scheduledCount = schedulingResults.filter((r) => r.ok).length;
    const scheduledErrors = schedulingResults
      .map((r, i) => (!r.ok ? { step: i, status: r.status, error: r.error } : null))
      .filter(Boolean);
    if (scheduledErrors.length) {
      console.warn("[lead-magnet] Some nurturing emails failed to schedule:", scheduledErrors);
    }

    return NextResponse.json({
      success: true,
      message: "Document envoyé par email",
      scheduled: scheduledCount,
    });
  } catch (error) {
    console.error("[lead-magnet] Server error:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
