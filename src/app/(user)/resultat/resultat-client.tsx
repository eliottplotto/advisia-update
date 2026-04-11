"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { RESULTS } from "@/data/quiz-results";

export default function ResultatClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q") ?? "";
  const recommendation = RESULTS[q] ?? null;

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [devisForm, setDevisForm] = useState({
    email: "",
    company: "",
    taille: "",
    precisions: "",
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!devisForm.email.trim() || !devisForm.company.trim()) return;
    setSubmitting(true);
    try {
      const messageParts = [
        `Demande de devis via quiz — ${recommendation?.title ?? ""}`,
        devisForm.taille ? `Taille : ${devisForm.taille}` : "",
        devisForm.precisions ? `Précisions : ${devisForm.precisions}` : "",
      ].filter(Boolean);
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "",
          lastName: "",
          company: devisForm.company,
          email: devisForm.email,
          message: messageParts.join("\n"),
          besoin: q || undefined,
          taille: devisForm.taille || undefined,
        }),
      });
      setSubmitted(true);
    } catch {
      // silent — still show confirmation
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  // Fallback — no result found
  if (!recommendation) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
        style={{ background: "#0A0A0F" }}
      >
        <p className="text-white/50 text-sm mb-2 uppercase tracking-widest font-mono">
          Résultat introuvable
        </p>
        <h1
          className="text-2xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pas de résultat trouvé
        </h1>
        <p className="text-white/50 text-sm mb-8 max-w-xs">
          Le paramètre de quiz est absent ou invalide. Refaites le quiz pour
          obtenir votre recommandation personnalisée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "#c9fe6e" }}
        >
          Refaire le quiz
        </Link>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-6 py-16 md:py-24"
      style={{ background: "#0A0A0F" }}
    >
      <div className="mx-auto max-w-[720px] space-y-10">
        {/* SECTION 1 — RECAP */}
        <section className="space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(201,254,110,0.12)", color: "#c9fe6e", border: "1px solid rgba(201,254,110,0.25)" }}>
            <CheckCircle size={13} />
            Votre recommandation personnalisée
          </div>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {recommendation.title}
          </h1>

          {/* Problème */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(239,68,68,0.06)",
              borderLeft: "3px solid rgba(239,68,68,0.45)",
            }}
          >
            <p
              className="text-[11px] uppercase tracking-widest font-mono mb-2"
              style={{ color: "rgba(239,68,68,0.7)" }}
            >
              Le problème identifié
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              {recommendation.problem}
            </p>
          </div>

          {/* Solution */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(201,254,110,0.04)",
              borderLeft: "3px solid #c9fe6e",
            }}
          >
            <p
              className="text-[11px] uppercase tracking-widest font-mono mb-2"
              style={{ color: "rgba(201,254,110,0.7)" }}
            >
              Ce qu&apos;on fait pour vous
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              {recommendation.solution}
            </p>
          </div>
        </section>

        {/* SECTION 2 — CE QUI EST INCLUS */}
        <section
          className="rounded-xl p-6"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-[11px] uppercase tracking-widest font-mono mb-4"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Ce qui est inclus
          </p>
          <ul className="space-y-3">
            {recommendation.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <CheckCircle
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#c9fe6e" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION 3 — PRIX ET DÉLAI */}
        <section className="grid grid-cols-2 gap-4">
          <div
            className="rounded-xl p-6 flex flex-col gap-1"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p
              className="text-[11px] uppercase tracking-widest font-mono"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Prix
            </p>
            <p className="text-2xl font-bold" style={{ color: "#c9fe6e" }}>
              {recommendation.price}
            </p>
          </div>
          <div
            className="rounded-xl p-6 flex flex-col gap-1"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p
              className="text-[11px] uppercase tracking-widest font-mono"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Délai
            </p>
            <p className="text-2xl font-bold text-white">{recommendation.delay}</p>
          </div>
        </section>

        {/* SECTION 4 — TÉMOIGNAGE */}
        {recommendation.testimonial && (
          <section
            className="rounded-xl p-6"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-sm italic leading-relaxed mb-3"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              &laquo;&nbsp;{recommendation.testimonial.quote}&nbsp;&raquo;
            </p>
            <p className="text-xs font-semibold" style={{ color: "rgba(201,254,110,0.8)" }}>
              — {recommendation.testimonial.author}
            </p>
          </section>
        )}

        {/* SECTION 5 — FORMULAIRE ULTRA-SIMPLIFIÉ */}
        <section
          className="rounded-2xl p-7 space-y-5"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <p
              className="text-[11px] uppercase tracking-widest font-mono mb-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Prochaine étape
            </p>
            <h2
              className="text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              On vous recontacte sous 48h avec une première analyse gratuite.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            {/* Option A */}
            {!showEmailForm && !submitted && (
              <button
                onClick={() => setShowEmailForm(true)}
                className="rounded-full px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "#c9fe6e" }}
              >
                Recevoir un devis par email
              </button>
            )}

            {/* Option B */}
            {!submitted && (
              <Link
                href="/prendre-rendez-vous"
                className="rounded-full px-6 py-3 text-sm font-semibold text-white text-center transition-all duration-200 hover:scale-[1.02]"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Réserver un appel de 15 min
              </Link>
            )}
          </div>

          {/* Devis form */}
          {showEmailForm && !submitted && (
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={devisForm.email}
                  onChange={(e) => setDevisForm((p) => ({ ...p, email: e.target.value }))}
                  className="rounded-lg px-4 py-2.5 text-sm text-white outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#c9fe6e")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                />
                <input
                  type="text"
                  required
                  placeholder="Nom de l'entreprise"
                  value={devisForm.company}
                  onChange={(e) => setDevisForm((p) => ({ ...p, company: e.target.value }))}
                  className="rounded-lg px-4 py-2.5 text-sm text-white outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#c9fe6e")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>
              <select
                value={devisForm.taille}
                onChange={(e) => setDevisForm((p) => ({ ...p, taille: e.target.value }))}
                className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", colorScheme: "dark" }}
              >
                <option value="" style={{ background: "#0A0A0F" }}>Nombre de salariés (optionnel)</option>
                <option value="1-10" style={{ background: "#0A0A0F" }}>1 – 10</option>
                <option value="10-50" style={{ background: "#0A0A0F" }}>10 – 50</option>
                <option value="50-200" style={{ background: "#0A0A0F" }}>50 – 200</option>
                <option value="200+" style={{ background: "#0A0A0F" }}>200+</option>
              </select>
              <textarea
                rows={2}
                placeholder="Décrivez en une phrase votre situation (optionnel)"
                value={devisForm.precisions}
                onChange={(e) => setDevisForm((p) => ({ ...p, precisions: e.target.value }))}
                className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none transition-all resize-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#c9fe6e")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] disabled:opacity-60"
                style={{ background: "#c9fe6e" }}
              >
                {submitting ? "Envoi…" : "Recevoir mon devis sous 48h"}
              </button>
            </form>
          )}

          {/* Confirmation */}
          {submitted && (
            <div
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ background: "rgba(201,254,110,0.06)", border: "1px solid rgba(201,254,110,0.2)" }}
            >
              <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#c9fe6e" }} />
              <p className="text-sm font-medium text-white">
                On vous recontacte sous 48h avec une première analyse gratuite.
              </p>
            </div>
          )}

          {/* Option C */}
          <Link
            href={recommendation.cta2Href}
            className="text-sm underline-offset-2 hover:underline block"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {recommendation.cta2Label} →
          </Link>
        </section>

        {/* SECTION 6 — RÉASSURANCE */}
        <section className="flex flex-wrap justify-center gap-3">
          {["Réponse sous 48h", "Estimation chiffrée offerte", "Zéro engagement"].map((label) => (
            <span
              key={label}
              className="rounded-full px-4 py-2 text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {label}
            </span>
          ))}
        </section>

        {/* Back to home */}
        <div className="text-center pb-4">
          <button
            onClick={() => router.push("/")}
            className="text-xs transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)")}
          >
            ← Retour à l&apos;accueil
          </button>
        </div>
      </div>
    </main>
  );
}
