"use client";

import { useState } from "react";
import { trackCTAClick, trackLeadMagnetRequest } from "@/lib/analytics";

type Props = {
  slug: string;
  title: string;
  accent: "violet" | "lime" | "blue";
  onSuccess: (email: string) => void;
};

const ACCENT_COLORS = {
  violet: { main: "#7c3aed", light: "rgba(124,58,237,0.15)", border: "rgba(124,58,237,0.35)" },
  lime: { main: "#c9fe6e", light: "rgba(201,254,110,0.12)", border: "rgba(201,254,110,0.35)" },
  blue: { main: "#60a5fa", light: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.35)" },
};

export default function GateForm({ slug, title, accent, onSuccess }: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const colors = ACCENT_COLORS[accent];

  // Récupère la source (utm_source) ou referrer pour tracker d'où vient le lead
  const getSource = (): string => {
    if (typeof window === "undefined") return "direct";
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    if (utmSource) return utmSource;
    const ref = document.referrer;
    if (!ref) return "direct";
    try {
      const refHost = new URL(ref).hostname.replace(/^www\./, "");
      const currentHost = window.location.hostname.replace(/^www\./, "");
      if (refHost === currentHost) return "internal";
      if (refHost.includes("linkedin")) return "linkedin";
      if (refHost.includes("google")) return "google";
      if (refHost.includes("facebook")) return "facebook";
      if (refHost.includes("twitter") || refHost.includes("x.com")) return "twitter";
      return refHost;
    } catch {
      return "direct";
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setErrorMsg("Merci d'accepter la politique de confidentialité.");
      return;
    }
    setStatus("loading");
    setErrorMsg(null);
    const source = getSource();
    try {
      const res = await fetch("/api/ressources/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, firstName, email, company, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erreur serveur");
      }
      trackCTAClick(`lead_magnet_${slug}`, "ressources");
      trackLeadMagnetRequest(slug, source);
      onSuccess(email);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl p-6 md:p-8 max-w-md w-full"
      style={{
        background: colors.light,
        border: `1px solid ${colors.border}`,
      }}
    >
      <h3
        className="text-xl md:text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        Recevez {title}
      </h3>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Lien de consultation envoyé par email en moins de 30 secondes. Format PDF imprimable, désinscription en 1 clic.
      </p>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Prénom"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="px-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--text-primary)",
          }}
        />
        <input
          type="email"
          placeholder="Email professionnel"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--text-primary)",
          }}
        />
        <input
          type="text"
          placeholder="Entreprise (facultatif)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="px-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--text-primary)",
          }}
        />

        <label className="flex items-start gap-2 text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5"
          />
          <span>
            J&apos;accepte de recevoir ce document et des emails occasionnels d&apos;Advisia.
            Voir notre{" "}
            <a
              href="/politique-de-confidentialite"
              target="_blank"
              className="underline"
            >
              politique de confidentialité
            </a>
            .
          </span>
        </label>

        {errorMsg && (
          <p className="text-xs" style={{ color: "#ff6b6b" }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: colors.main,
            color: accent === "lime" ? "#0a0a0f" : "#fff",
          }}
        >
          {status === "loading" ? "Envoi en cours..." : "Recevoir le document par email →"}
        </button>
      </div>
    </form>
  );
}
