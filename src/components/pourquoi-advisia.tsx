"use client";

import {
  RiCodeSSlashLine,
  RiSparklingLine,
  RiBarChartBoxLine,
  RiEyeLine,
} from "@remixicon/react";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function PourquoiAdvisia() {
  const features = [
    {
      title: "Tech-first, pas bullshit",
      description:
        "On code nous-mêmes. Pas de sous-traitance offshore, pas de slides sans fin. Du code, du résultat.",
      icon: RiCodeSSlashLine,
      index: "01",
    },
    {
      title: "L'IA dans notre ADN",
      description:
        "L'IA n'est pas un buzzword chez nous. On l'utilise dans nos propres process et on la déploie chez chaque client.",
      icon: RiSparklingLine,
      index: "02",
    },
    {
      title: "Des KPIs, pas des promesses",
      description:
        "Objectifs chiffrés dès le kick-off. On mesure tout : temps gagné, coût réduit, conversions générées.",
      icon: RiBarChartBoxLine,
      index: "03",
    },
    {
      title: "Votre projet, en temps réel",
      description:
        "Call hebdo, accès au backlog, démos en continu. Vous voyez l'avancement à chaque étape.",
      icon: RiEyeLine,
      index: "04",
    },
  ];

  return (
    <section
      className="relative z-10 py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="section-label mb-6">● Pourquoi nous choisir</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Pourquoi les PME{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c9fe6e, #a8e063)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              nous choisissent.
            </span>
          </RevealText>
        </h2>
        <p
          className="text-base md:text-lg mb-8 lg:mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Ce qu&apos;on fait différemment des autres agences.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div
                className="group relative h-full flex flex-col rounded-2xl p-8 text-center transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Green top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(201,254,110,0.4)]"
                  style={{ background: "#c9fe6e" }}
                />

                {/* Watermark number */}
                <div
                  className="absolute top-4 right-4 font-mono font-bold select-none pointer-events-none"
                  style={{
                    fontSize: "4rem",
                    lineHeight: 1,
                    opacity: 0.08,
                    color: "#fff",
                  }}
                >
                  {feature.index}
                </div>

                {/* Icon */}
                <div className="relative z-[1] mb-6">
                  <feature.icon
                    size={28}
                    className="mx-auto transition-colors duration-300"
                    style={{ color: "#c9fe6e" }}
                  />
                </div>

                {/* Title */}
                <h4
                  className="relative z-[1] text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[#c9fe6e]"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#fff",
                  }}
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p
                  className="relative z-[1] text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
