"use client";

import {
  RiSparklingLine,
  RiBarChartBoxLine,
  RiEyeLine,
} from "@remixicon/react";
import { HeartHandshake } from "lucide-react";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function PourquoiAdvisia() {
  const features = [
    {
      title: "L'IA dans notre ADN",
      description:
        "On utilise l'IA dans notre propre fonctionnement avant de la déployer chez vous.",
      icon: RiSparklingLine,
      index: "01",
    },
    {
      title: "Des KPIs, pas des promesses",
      description:
        "Objectifs chiffrés dès le premier jour. On mesure tout : temps gagné, coût réduit, conversions générées.",
      icon: RiBarChartBoxLine,
      index: "02",
    },
    {
      title: "Votre projet, en temps réel",
      description:
        "Point hebdomadaire, accès à l'avancement en temps réel, démonstrations à chaque étape. Zéro effet tunnel.",
      icon: RiEyeLine,
      index: "03",
    },
    {
      title: "On reste après la livraison.",
      description:
        "Votre outil évolue avec votre entreprise. On reste disponibles, on ajuste, on améliore. Pas de contrat qui s'arrête le jour de la mise en service. 92% de nos clients renouvellent.",
      icon: HeartHandshake,
      index: "04",
    },
  ];

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="section-label mb-6">● Ce qui fait la différence</div>
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
              nous font confiance.
            </span>
          </RevealText>
        </h2>
        <p
          className="text-base md:text-lg mb-8 lg:mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Vos experts du début à la fin. Des résultats mesurés. Zéro sous-traitance.
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
