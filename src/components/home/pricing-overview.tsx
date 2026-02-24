"use client";

import Link from "next/link";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function PricingOverview() {
  const offers = [
    {
      title: "Audit & Diagnostic",
      badge: "Gratuit · 30 min",
      description:
        "On analyse vos process, vos outils et vos points de friction. Vous repartez avec des pistes concrètes, que vous travailliez avec nous ou non.",
      link: "/prendre-rendez-vous",
      cta: "Réserver un audit",
    },
    {
      title: "Automatisation & IA",
      badge: "Devis sous 48h",
      description:
        "Agent IA, chatbot, workflow automatisé, connexion d'outils : chaque projet est chiffré sur mesure selon la complexité et vos objectifs.",
      link: "/services/automatisations-ia",
      cta: "En savoir plus",
    },
    {
      title: "Site web / App / Design",
      badge: "Devis sous 48h",
      description:
        "Site vitrine, e-commerce, app métier, refonte UX : on cadre le besoin, on chiffre, et on livre. Pas de surprise en cours de route.",
      link: "/services/agence-web",
      cta: "En savoir plus",
    },
  ];

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="section-label mb-6">● Comment on travaille</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Un devis clair en{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c9fe6e, #a8e063)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              48h.
            </span>
          </RevealText>
        </h2>
        <p
          className="text-base md:text-lg mb-8 lg:mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Chaque projet est différent. On chiffre sur mesure, sans surprise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {offers.map((offer, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <Link href={offer.link} className="group block h-full">
                <div
                  className="relative h-full flex flex-col rounded-2xl p-8 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
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

                  {/* Badge */}
                  <div
                    className="inline-block w-fit font-mono text-[0.65rem] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-5"
                    style={{
                      color: "#c9fe6e",
                      background: "rgba(201,254,110,0.08)",
                      border: "1px solid rgba(201,254,110,0.15)",
                    }}
                  >
                    {offer.badge}
                  </div>

                  {/* Title */}
                  <h4
                    className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#c9fe6e]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#fff",
                    }}
                  >
                    {offer.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {offer.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-[#c9fe6e]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {offer.cta}
                    <RiArrowRightUpLine size={14} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
