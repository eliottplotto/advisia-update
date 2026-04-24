"use client";

import { useEffect, useRef } from "react";
import { Printer } from "lucide-react";
import type { LeadMagnet } from "@/lib/lead-magnets/types";
import {
  trackLeadMagnetDownload,
  trackLeadMagnetUnlock,
  getNurturingStep,
} from "@/lib/analytics";

export default function DocumentView({ magnet }: { magnet: LeadMagnet }) {
  // Capture le step à l'arrivée (utm_content) pour l'attacher à tous les events
  const stepRef = useRef<string>("direct");

  useEffect(() => {
    stepRef.current = getNurturingStep();
    trackLeadMagnetUnlock(magnet.slug, stepRef.current);
  }, [magnet.slug]);

  const handlePrint = () => {
    trackLeadMagnetDownload(magnet.slug, stepRef.current);
    if (typeof window !== "undefined") window.print();
  };

  return (
    <>
      {/* Top bar — not printed */}
      <div
        className="print:hidden sticky top-20 z-10 flex items-center justify-between px-4 md:px-8 py-3 mb-6 rounded-xl"
        style={{
          background: "rgba(201,254,110,0.08)",
          border: "1px solid rgba(201,254,110,0.3)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="font-mono text-[0.7rem] uppercase tracking-[0.15em]"
          style={{ color: "#c9fe6e" }}
        >
          ✓ Document débloqué — imprimez-le ou sauvegardez-le en PDF
        </span>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "#c9fe6e", color: "#0a0a0f" }}
        >
          <Printer size={14} />
          Télécharger en PDF
        </button>
      </div>

      {/* Printable document */}
      <article className="lead-magnet-doc mx-auto" style={{ maxWidth: "760px" }}>
        <header className="mb-10">
          <div
            className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "#c9fe6e" }}
          >
            {magnet.icon} Ressource Advisia
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {magnet.title}
          </h1>
          <p className="text-lg md:text-xl" style={{ color: "var(--text-secondary)" }}>
            {magnet.subtitle}
          </p>
          <p
            className="mt-4 text-sm italic"
            style={{ color: "var(--text-muted)", maxWidth: "600px" }}
          >
            Rédigé par Advisia, agence digitale française. Prix fixes affichés, zéro sous-traitance,
            zéro jargon.
          </p>
        </header>

        <hr className="my-8" style={{ borderColor: "rgba(255,255,255,0.08)" }} />

        {/* En 2 minutes */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            En 2 minutes
          </h2>
          <dl className="space-y-3 text-[15px]" style={{ color: "var(--text-secondary)" }}>
            <div>
              <dt className="font-semibold" style={{ color: "var(--text-primary)" }}>
                Pour qui c&apos;est.
              </dt>
              <dd>{magnet.inTwoMinutes.forWho}</dd>
            </div>
            <div>
              <dt className="font-semibold" style={{ color: "var(--text-primary)" }}>
                Pour qui ce n&apos;est PAS.
              </dt>
              <dd>{magnet.inTwoMinutes.notForWho}</dd>
            </div>
            <div>
              <dt className="font-semibold" style={{ color: "var(--text-primary)" }}>
                Ce que vous aurez à la fin.
              </dt>
              <dd>{magnet.inTwoMinutes.outcome}</dd>
            </div>
            <div>
              <dt className="font-semibold" style={{ color: "var(--text-primary)" }}>
                Temps de lecture.
              </dt>
              <dd>{magnet.inTwoMinutes.readingTime}</dd>
            </div>
          </dl>
        </section>

        <hr className="my-8" style={{ borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Intro */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Introduction
          </h2>
          {magnet.introParagraphs.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-[15px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {p}
            </p>
          ))}
        </section>

        <hr className="my-8" style={{ borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Checklist */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {magnet.checklistLabel}
          </h2>
          <div className="space-y-8">
            {magnet.items.map((item) => (
              <div
                key={item.number}
                className="pb-6 checklist-item"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3
                  className="text-lg md:text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  <span style={{ color: "#c9fe6e" }}>{item.number}.</span> {item.title}
                </h3>
                <div className="space-y-2 text-[14px] leading-relaxed">
                  <p style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>
                      Pourquoi c&apos;est important.
                    </strong>{" "}
                    {item.why}
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>
                      Comment faire concrètement.
                    </strong>{" "}
                    {item.how}
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>Signal d&apos;alarme.</strong>{" "}
                    {item.alarm}
                  </p>
                  <p
                    className="font-mono text-xs mt-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    ⏱ {item.effort}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {magnet.evaluation.title}
          </h2>
          <p className="mb-5 text-[15px]" style={{ color: "var(--text-secondary)" }}>
            {magnet.evaluation.intro}
          </p>
          <ul className="space-y-3">
            {magnet.evaluation.tiers.map((tier, i) => (
              <li
                key={i}
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="font-semibold text-[15px] mb-1"
                  style={{ color: "#c9fe6e" }}
                >
                  {tier.range}
                </p>
                <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                  {tier.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bonus (optional) */}
        {magnet.bonus && (
          <section className="mb-10">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {magnet.bonus.title}
            </h2>
            <ul className="space-y-3">
              {magnet.bonus.items.map((item, i) => (
                <li
                  key={i}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="font-semibold text-[15px] mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* What now */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Et maintenant ?
          </h2>
          <ol className="space-y-4 list-decimal list-inside">
            {magnet.whatNow.options.map((opt, i) => (
              <li key={i} className="text-[15px]" style={{ color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>{opt.label}</strong> {opt.text}
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section
          className="mt-12 p-5 rounded-xl"
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <h3
            className="text-base font-bold mb-2 font-mono uppercase tracking-[0.15em]"
            style={{ color: "var(--violet-light)" }}
          >
            À propos d&apos;Advisia
          </h3>
          <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
            {magnet.aboutAdvisia}
          </p>
        </section>
      </article>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 14mm 14mm 14mm 14mm;
          }
          html, body {
            background: #fff !important;
            color: #111 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          body * {
            visibility: hidden;
          }
          .lead-magnet-doc,
          .lead-magnet-doc * {
            visibility: visible !important;
          }
          .lead-magnet-doc {
            position: static !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 10.5pt !important;
            line-height: 1.45 !important;
            color: #111 !important;
            background: #fff !important;
          }
          .lead-magnet-doc * {
            color: #111 !important;
            background: transparent !important;
            border-color: #ccc !important;
            box-shadow: none !important;
          }
          .lead-magnet-doc h1,
          .lead-magnet-doc h2,
          .lead-magnet-doc h3,
          .lead-magnet-doc strong {
            color: #000 !important;
          }
          .lead-magnet-doc h1 {
            font-size: 19pt !important;
            line-height: 1.2 !important;
            margin: 0 0 4mm 0 !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .lead-magnet-doc h2 {
            font-size: 14pt !important;
            line-height: 1.25 !important;
            margin: 6mm 0 3mm 0 !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .lead-magnet-doc h3 {
            font-size: 12pt !important;
            line-height: 1.3 !important;
            margin: 0 0 2mm 0 !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .lead-magnet-doc header {
            display: block !important;
            margin: 0 0 6mm 0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .lead-magnet-doc section {
            display: block !important;
            margin: 0 0 4mm 0 !important;
            page-break-inside: auto !important;
          }
          .lead-magnet-doc p {
            margin: 0 0 2.5mm 0 !important;
            orphans: 3;
            widows: 3;
          }
          .lead-magnet-doc hr {
            border: 0 !important;
            border-top: 1px solid #ccc !important;
            margin: 4mm 0 !important;
            page-break-after: avoid !important;
          }
          .lead-magnet-doc dl {
            margin: 0 !important;
          }
          .lead-magnet-doc dl > div {
            margin: 0 0 2.5mm 0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .lead-magnet-doc li {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          /* Reset space-y-* margin conflicts */
          .lead-magnet-doc .space-y-8 > * + *,
          .lead-magnet-doc .space-y-4 > * + *,
          .lead-magnet-doc .space-y-3 > * + * {
            margin-top: 0 !important;
          }
          .checklist-item {
            display: block !important;
            margin: 0 0 5mm 0 !important;
            padding: 0 0 3mm 0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            border-bottom: 1px solid #ddd !important;
          }
          .checklist-item * {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .lead-magnet-doc a {
            color: #111 !important;
            text-decoration: underline;
          }
          /* Print-only visible element to restore visibility for non-doc elements that shouldn't be hidden — none right now */
        }
      `}</style>
    </>
  );
}
