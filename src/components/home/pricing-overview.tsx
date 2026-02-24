"use client";

import Link from "next/link";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

const plans = [
  {
    title: "Audit & Diagnostic",
    price: "Gratuit",
    description:
      "30 min pour analyser vos process et identifier les gains rapides.",
    cta: "Réserver un audit",
    href: "/prendre-rendez-vous",
  },
  {
    title: "Automatisation IA",
    price: "À partir de 2 500€",
    description:
      "Agent IA ou workflow automatisé. Déployé en 2 à 4 semaines.",
    cta: "En savoir plus",
    href: "/services/automatisations-ia",
  },
  {
    title: "Site web / App",
    price: "À partir de 1 000€",
    description:
      "Site vitrine, e-commerce ou app métier. Livré en 4 à 8 semaines.",
    cta: "En savoir plus",
    href: "/services/agence-web",
  },
];

export default function PricingOverview() {
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
        <div className="section-label mb-6">● Nos tarifs</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Des tarifs clairs. Pas de surprise.
          </RevealText>
        </h2>
        <p
          className="text-base md:text-lg mb-8 lg:mb-12 max-w-[550px]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Chaque projet est chiffré avant de démarrer. Voici nos fourchettes
          indicatives.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div
                className="group relative h-full flex flex-col rounded-2xl p-8 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
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

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-4 transition-colors duration-300 group-hover:text-[#c9fe6e]"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#fff",
                  }}
                >
                  {plan.title}
                </h3>

                {/* Price */}
                <p
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--ad-1)",
                  }}
                >
                  {plan.price}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {plan.description}
                </p>

                {/* CTA link */}
                <Link
                  href={plan.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:text-[#c9fe6e]"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {plan.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
