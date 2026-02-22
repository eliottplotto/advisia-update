"use client";

import Link from "next/link";
import { RevealText } from "@/components/reveal-text";
import {
  RiCodeSSlashLine,
  RiRobot2Line,
  RiPaletteLine,
  RiMegaphoneLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Services() {
  const expertises = [
    {
      title: "IA & Automatisation",
      description:
        "Agents IA, workflows n8n et Make, extraction de données, chatbots : on automatise les tâches qui vous coûtent 10h par semaine.",
      icon: RiRobot2Line,
      link: "/services/automatisations-ia",
      number: "01",
    },
    {
      title: "Développement Web",
      description:
        "Sites Next.js, applications SaaS, intranets sur-mesure : rapides à charger, simples à maintenir, conçus pour durer.",
      icon: RiCodeSSlashLine,
      link: "/services/agence-web",
      number: "02",
    },
    {
      title: "Product Design",
      description:
        "Interfaces pensées pour convertir. Parcours utilisateurs optimisés, prototypage Figma, design systems réutilisables.",
      icon: RiPaletteLine,
      link: "/services/product-design",
      number: "03",
    },
    {
      title: "Marketing Digital",
      description:
        "SEO, Google Ads, Meta Ads : on met en place votre acquisition et on la pilote avec vous, data à l'appui.",
      icon: RiMegaphoneLine,
      link: "/services/marketing-digital",
      number: "04",
    },
  ];

  return (
    <section
      className="relative z-10 py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{ background: "rgba(10,10,15,0.85)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="section-label mb-6">● Nos Expertises</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Ce qu&apos;on sait faire. Concrètement.
          </RevealText>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertises.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link href={item.link} className="group block h-full">
                <div
                  className="relative h-full rounded-[20px] p-5 lg:p-6 transition-all duration-500 overflow-hidden expertise-card-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_var(--violet-dim)] hover:border-[rgba(124,58,237,0.25)] hover:bg-[rgba(124,58,237,0.05)]"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Number */}
                  <div
                    className="font-mono text-[0.7rem] mb-4 transition-colors duration-300 group-hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 transition-all duration-300 group-hover:text-[#c9fe6e] group-hover:border-[rgba(124,58,237,0.3)] group-hover:shadow-[0_0_30px_var(--accent-dim)] group-hover:scale-105"
                    style={{
                      background: "var(--violet-dim)",
                      border: "1px solid rgba(124,58,237,0.15)",
                    }}
                  >
                    <item.icon size={24} />
                  </div>

                  {/* Text */}
                  <h3
                    className="text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--ad-1)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base leading-relaxed transition-colors duration-300 group-hover:text-white/80"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 opacity-100 transition-colors duration-300 text-white/40 group-hover:text-[#c9fe6e]">
                    <RiArrowRightUpLine size={24} />
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
