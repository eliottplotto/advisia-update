"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "advisia-cookie-consent-v1";

type ConsentState = "accepted" | "rejected" | "customized" | null;

type ConsentDetails = {
  state: ConsentState;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Petit délai pour ne pas afficher le banner au-dessus du FOUC
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (state: ConsentState, analyticsVal: boolean, marketingVal: boolean) => {
    const data: ConsentDetails = {
      state,
      analytics: analyticsVal,
      marketing: marketingVal,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // noop
    }
    // Événement custom pour que GA/Meta puissent écouter et activer/désactiver
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("advisia:consent-updated", { detail: data }));
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[440px] z-[90] rounded-2xl p-5 md:p-6"
      style={{
        background: "rgba(10,10,15,0.96)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      <button
        onClick={() => save("rejected", false, false)}
        aria-label="Refuser et fermer"
        className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        <X size={14} />
      </button>

      <div className="flex items-start gap-3 mb-3">
        <span
          className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[0.55rem]"
          style={{ background: "#c9fe6e" }}
        />
        <h2
          className="text-base md:text-lg font-bold leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.95)" }}
        >
          On utilise quelques cookies.
        </h2>
      </div>

      <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.68)" }}>
        Cookies techniques pour faire tourner le site (toujours actifs) et, si vous acceptez,
        mesure d&apos;audience pour comprendre ce qui marche. Pas de pub, pas de revente de données.{" "}
        <Link
          href="/politique-de-confidentialite"
          className="underline underline-offset-2 hover:text-white transition-colors"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          En savoir plus
        </Link>
        .
      </p>

      {showPrefs && (
        <div className="mb-5 space-y-3 text-sm">
          <label className="flex items-start gap-3 cursor-not-allowed opacity-70">
            <input
              type="checkbox"
              checked
              disabled
              className="mt-1 accent-[#c9fe6e]"
            />
            <div>
              <p className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                Techniques (obligatoires)
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Sécurité, préférences, session.
              </p>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1 accent-[#c9fe6e]"
            />
            <div>
              <p className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                Mesure d&apos;audience
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Statistiques de navigation (pages vues, temps passé).
              </p>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-1 accent-[#c9fe6e]"
            />
            <div>
              <p className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                Marketing
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Retargeting publicitaire (Meta, LinkedIn).
              </p>
            </div>
          </label>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => save("accepted", true, true)}
          className="flex-1 min-w-[120px] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "#c9fe6e", color: "#0a0a0f" }}
        >
          Tout accepter
        </button>
        <button
          onClick={() => save("rejected", false, false)}
          className="flex-1 min-w-[100px] px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-white/5"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Refuser
        </button>
        {!showPrefs ? (
          <button
            onClick={() => setShowPrefs(true)}
            className="w-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Personnaliser
          </button>
        ) : (
          <button
            onClick={() => save("customized", analytics, marketing)}
            className="w-full px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider"
            style={{
              background: "rgba(201,254,110,0.08)",
              border: "1px solid rgba(201,254,110,0.25)",
              color: "#c9fe6e",
            }}
          >
            Enregistrer mes choix
          </button>
        )}
      </div>
    </div>
  );
}
