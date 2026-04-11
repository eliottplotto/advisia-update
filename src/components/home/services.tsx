"use client";

import Link from "next/link";
import { RevealText } from "@/components/reveal-text";
import {
  RiCodeSSlashLine,
  RiRobot2Line,
  RiPaletteLine,
  RiMegaphoneLine,
  RiArrowRightUpLine,
  RiSearchEyeFill,
  RiBuildingFill,
} from "@remixicon/react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Services() {
  const expertises = [
    {
      title: "IA & Automatisation",
      description:
        "Outils intelligents, automatisations, chatbots : on supprime les tâches qui vous coûtent 10h par semaine. Souvent couplé avec un site ou un dashboard sur mesure.",
      icon: RiRobot2Line,
      link: "/services/automatisations-ia",
      number: "01",
    },
    {
      title: "Développement Web",
      description:
        "Sites vitrines, boutiques en ligne, apps métier : rapides à charger, simples à maintenir, conçus pour durer.",
      icon: RiCodeSSlashLine,
      link: "/services/agence-web",
      number: "02",
    },
    {
      title: "Design d'Interface",
      description:
        "Interfaces pensées pour convertir. Parcours utilisateurs optimisés, maquettes validées avant de développer, interfaces cohérentes, faciles à faire évoluer.",
      icon: RiPaletteLine,
      link: "/services/product-design",
      number: "03",
    },
    {
      title: "Marketing Digital",
      description:
        "SEO, Google Ads, Social Ads : on met en place votre acquisition et on l'optimise chaque semaine, data à l'appui.",
      icon: RiMegaphoneLine,
      link: "/services/marketing-digital",
      number: "04",
    },
    {
      title: "Diagnostics & Audits",
      description:
        "Sécurité, visibilité, e-réputation, maturité IA : on analyse votre situation en 48-72h. Rapport actionnable, prix fixe, zéro engagement.",
      icon: RiSearchEyeFill,
      link: "/diagnostics",
      number: "05",
    },
    {
      title: "Cession & Reprise",
      description:
        "Votre entreprise vaut plus si elle est numériquement mature. On évalue, améliore et prouve la valeur numérique aux acquéreurs.",
      icon: RiBuildingFill,
      link: "/cession-reprise",
      number: "06",
    },
  ];

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{ background: "transparent" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="section-label mb-6">● Vos solutions</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Comment on résout vos problèmes.
          </RevealText>
        </h2>

        {/* Row 1 — 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {expertises.slice(0, 2).map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link href={item.link} className="group block h-full">
                <div
                  className="relative h-full rounded-[20px] p-7 lg:p-10 transition-all duration-500 overflow-hidden expertise-card-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_var(--violet-dim)] hover:border-[rgba(124,58,237,0.25)] hover:bg-[rgba(124,58,237,0.05)]"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    minHeight: "260px",
                  }}
                >
                  <div
                    className="font-mono text-[0.7rem] mb-5 transition-colors duration-300 group-hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.number}
                  </div>
                  <div
                    className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 transition-all duration-300 group-hover:text-[#c9fe6e] group-hover:border-[rgba(124,58,237,0.3)] group-hover:shadow-[0_0_30px_var(--accent-dim)] group-hover:scale-105"
                    style={{
                      background: "var(--violet-dim)",
                      border: "1px solid rgba(124,58,237,0.15)",
                    }}
                  >
                    <item.icon size={28} />
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--ad-1)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white/80"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                  <div className="absolute bottom-6 right-6 opacity-100 transition-colors duration-300 text-white/40 group-hover:text-[#c9fe6e]">
                    <RiArrowRightUpLine size={26} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2 — 4 compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {expertises.slice(2).map((item, index) => (
            <ScrollReveal key={index + 2} delay={(index + 2) * 0.1}>
              <Link href={item.link} className="group block h-full">
                <div
                  className="relative h-full rounded-[16px] p-5 transition-all duration-500 overflow-hidden expertise-card-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_var(--violet-dim)] hover:border-[rgba(124,58,237,0.25)] hover:bg-[rgba(124,58,237,0.05)]"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="font-mono text-[0.65rem] mb-3 transition-colors duration-300 group-hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.number}
                  </div>
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-3 transition-all duration-300 group-hover:text-[#c9fe6e] group-hover:border-[rgba(124,58,237,0.3)] group-hover:shadow-[0_0_30px_var(--accent-dim)] group-hover:scale-105"
                    style={{
                      background: "var(--violet-dim)",
                      border: "1px solid rgba(124,58,237,0.15)",
                    }}
                  >
                    <item.icon size={20} />
                  </div>
                  <h3
                    className="text-base font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--ad-1)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                  <div className="absolute bottom-4 right-4 opacity-100 transition-colors duration-300 text-white/40 group-hover:text-[#c9fe6e]">
                    <RiArrowRightUpLine size={20} />
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
