"use client";

import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    quote:
      "On a gagné 12h par semaine sur le reporting. L'équipe peut enfin se concentrer sur le terrain.",
    name: "Directeur des opérations",
    company: "LCT Investissements",
    role: "Réseau de 20 magasins SFR",
  },
  {
    quote:
      "Advisia a livré notre site en 5 semaines. Rapide, propre, et on peut tout modifier nous-mêmes.",
    name: "Fondateur",
    company: "Mes Halles",
    role: "E-commerce alimentaire",
  },
  {
    quote:
      "Pour une fois, on travaille directement avec les gens qui codent. Pas de téléphone arabe.",
    name: "CEO",
    company: "Bring",
    role: "Startup logistique",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="section-label mb-6">● Ce que disent nos clients</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12 max-w-[800px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Des résultats concrets. Des clients qui en parlent.
          </RevealText>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div
                className="group relative h-full flex flex-col rounded-2xl p-8 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Violet top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(124,58,237,0.4)]"
                  style={{ background: "rgba(124,58,237,0.4)" }}
                />

                {/* Quote */}
                <p
                  className="text-base lg:text-lg leading-relaxed flex-1 mb-6"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </p>

                {/* Author */}
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--ad-1)" }}
                  >
                    {t.company}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
