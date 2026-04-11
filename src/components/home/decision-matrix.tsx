"use client";

import Link from "next/link";
import { useQuiz } from "@/components/quiz-provider";
import { RevealText } from "@/components/reveal-text";

export default function DecisionMatrix() {
  const { setIsQuizOpen } = useQuiz();

  return (
    <section className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[700px] mx-auto text-center">
        <h2
          className="text-xl md:text-2xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          <RevealText>Vous ne savez pas par où commencer&nbsp;?</RevealText>
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
          Répondez à 2 questions, on vous oriente vers la bonne offre.
        </p>

        <div
          className="inline-block rounded-2xl px-6 py-8 w-full"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <button
            onClick={() => setIsQuizOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.3)] hover:scale-[1.03]"
            style={{ background: "#c9fe6e", color: "#0a0a0f" }}
          >
            Trouver ma solution en 30 secondes →
          </button>

          <div className="flex flex-wrap justify-center gap-4 mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Ou explorez directement :</span>
            <Link
              href="/diagnostics"
              className="text-xs font-mono transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Nos diagnostics
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <Link
              href="/tarifs"
              className="text-xs font-mono transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Nos tarifs
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <Link
              href="/services/agence-web"
              className="text-xs font-mono transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Nos expertises
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
