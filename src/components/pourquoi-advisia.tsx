"use client";

import {
  RiShieldCheckLine,
  RiSparklingLine,
  RiFocus3Line,
  RiHandHeartLine,
} from "@remixicon/react";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function PourquoiAdvisia() {
  const features = [
    {
      title: "Expertise certifiée",
      description:
        "Une équipe experte, des outils maîtrisés, et une approche testée sur le terrain.",
      icon: RiShieldCheckLine,
      index: "01",
    },
    {
      title: "Solutions modernes",
      description:
        "Technologies fiables et durables grâce à une veille constante du marché.",
      icon: RiSparklingLine,
      index: "02",
    },
    {
      title: "Résultats garantis",
      description:
        "KPIs définis dès le kick-off ; livrables alignés sur vos objectifs business.",
      icon: RiFocus3Line,
      index: "03",
    },
    {
      title: "Transparence totale",
      description:
        "Suivi hebdo, accès au backlog, feedback continu : vous restez maître du projet.",
      icon: RiHandHeartLine,
      index: "04",
    },
  ];

  return (
    <section
      className="relative z-[2] py-16 lg:py-32 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="section-label mb-6">● Pourquoi nous choisir</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 lg:mb-16 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>L&apos;excellence à chaque étape.</RevealText>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div
                className="relative rounded-2xl p-8 text-center transition-all duration-500 overflow-hidden why-card-glow hover:-translate-y-1 hover:border-[rgba(124,58,237,0.2)] hover:bg-[rgba(124,58,237,0.04)]"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Number */}
                <div
                  className="font-mono text-3xl font-bold mb-4 opacity-40 gradient-text transition-opacity duration-300"
                  style={{ opacity: undefined }}
                >
                  <span className="gradient-text opacity-40 group-hover:opacity-80 transition-opacity">
                    {feature.index}
                  </span>
                </div>

                {/* Title */}
                <h4
                  className="text-lg font-bold mb-3 transition-colors duration-300 hover:text-[var(--ad-1)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
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
