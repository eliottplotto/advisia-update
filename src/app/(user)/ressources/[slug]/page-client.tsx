"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import type { LeadMagnet } from "@/lib/lead-magnets/types";
import GateForm from "@/components/lead-magnets/gate-form";
import DocumentView from "@/components/lead-magnets/document-view";

const ACCENT_BADGE = {
  violet: { bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.3)", color: "var(--violet-light)" },
  lime: { bg: "rgba(201,254,110,0.1)", border: "rgba(201,254,110,0.3)", color: "#c9fe6e" },
  blue: { bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.3)", color: "#60a5fa" },
};

type UIState = "form" | "submitted" | "unlocked";

export default function LeadMagnetPageClient({
  magnet,
  initialUnlocked = false,
}: {
  magnet: LeadMagnet;
  initialUnlocked?: boolean;
}) {
  const [state, setState] = useState<UIState>(initialUnlocked ? "unlocked" : "form");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const badge = ACCENT_BADGE[magnet.accent];

  // État : document débloqué (via token valide dans l'URL)
  if (state === "unlocked") {
    return (
      <section className="pt-[110px] pb-16 px-4 md:px-8 lg:px-12 print:pt-0 print:pb-0">
        <div className="container-md">
          <div className="mb-6 print:hidden">
            <Link
              href="/ressources"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={16} />
              Toutes les ressources
            </Link>
          </div>
          <DocumentView magnet={magnet} />
        </div>
      </section>
    );
  }

  // État : formulaire soumis, l'utilisateur doit aller voir son email
  if (state === "submitted") {
    return (
      <section className="w-full overflow-hidden" style={{ background: "rgba(10,10,15,0.85)" }}>
        <div className="container-md pt-[95px]">
          <div className="global-padding-x py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{
                  background: "rgba(201,254,110,0.12)",
                  border: "1px solid rgba(201,254,110,0.35)",
                }}
              >
                <CheckCircle2 size={32} style={{ color: "#c9fe6e" }} />
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4">
                Votre document arrive par email.
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Nous venons d&apos;envoyer <strong style={{ color: "var(--text-primary)" }}>{magnet.title}</strong> à{" "}
                {submittedEmail ? (
                  <strong style={{ color: "var(--text-primary)" }}>{submittedEmail}</strong>
                ) : (
                  "votre adresse"
                )}
                . Le lien de consultation est personnel et valable 30 jours.
              </p>

              <div
                className="rounded-2xl p-6 mb-8 text-left"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Étapes suivantes
                </p>
                <ol className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 font-mono text-xs font-bold"
                      style={{ background: "rgba(201,254,110,0.15)", color: "#c9fe6e" }}
                    >
                      1
                    </span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Ouvrez votre boîte mail</strong>{" "}
                      — l&apos;email arrive dans les 30 secondes, expéditeur{" "}
                      <em>hello@advisia.agency</em>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 font-mono text-xs font-bold"
                      style={{ background: "rgba(201,254,110,0.15)", color: "#c9fe6e" }}
                    >
                      2
                    </span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>
                        Cliquez sur « Consulter mon document »
                      </strong>{" "}
                      dans l&apos;email pour accéder au PDF.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 font-mono text-xs font-bold"
                      style={{ background: "rgba(201,254,110,0.15)", color: "#c9fe6e" }}
                    >
                      3
                    </span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>
                        Pas reçu dans 2 min ?
                      </strong>{" "}
                      Vérifiez vos spams. Sinon{" "}
                      <button
                        onClick={() => setState("form")}
                        className="underline transition-colors hover:text-white"
                        style={{ color: "var(--text-secondary)", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                      >
                        renvoyer à une autre adresse
                      </button>
                      .
                    </span>
                  </li>
                </ol>
              </div>

              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                <Mail size={12} className="inline mr-1" />
                En cas de problème, écrivez à hello@advisia.agency
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // État par défaut : formulaire d'accès
  return (
    <section className="w-full overflow-hidden" style={{ background: "rgba(10,10,15,0.85)" }}>
      <div className="container-md pt-[95px]">
        <div className="global-padding-x py-12 lg:py-16">
          <div className="mb-6">
            <Link
              href="/ressources"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={16} />
              Toutes les ressources
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            {/* Left : pitch */}
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-6"
                style={{
                  background: badge.bg,
                  border: `1px solid ${badge.border}`,
                  color: badge.color,
                }}
              >
                <span>{magnet.icon}</span>
                Ressource gratuite
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4">
                {magnet.title}
              </h1>
              <p
                className="text-lg md:text-xl mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {magnet.subtitle}
              </p>

              <div
                className="rounded-2xl p-6 mb-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Dans ce document
                </p>
                <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-3">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.45rem]"
                      style={{ background: "#c9fe6e" }}
                    />
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>
                        {magnet.items.length} points auto-évaluables
                      </strong>{" "}
                      — chacun avec le pourquoi, le comment, le signal d&apos;alarme et
                      l&apos;effort nécessaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.45rem]"
                      style={{ background: "#c9fe6e" }}
                    />
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Un scoring final</strong>{" "}
                      pour vous situer et savoir quelles actions prioriser.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.45rem]"
                      style={{ background: "#c9fe6e" }}
                    />
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>
                        {magnet.inTwoMinutes.readingTime.split(".")[0]} de lecture
                      </strong>{" "}
                      — format imprimable, PDF A4.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-6 mb-2">
                {[
                  { label: "Livraison", sub: "Par email, instantané" },
                  { label: "Prix", sub: "Gratuit" },
                  { label: "Engagement", sub: "Désinscription 1 clic" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "border-l pl-6" : ""}
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right : gate form */}
            <div className="lg:sticky lg:top-24">
              <GateForm
                slug={magnet.slug}
                title={magnet.title}
                accent={magnet.accent}
                onSuccess={(email) => {
                  setSubmittedEmail(email);
                  setState("submitted");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
