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
        "Optimisez vos process et gagnez du temps grâce à des agents IA sur-mesure et des workflows intelligents.",
      icon: RiRobot2Line,
      link: "/services/automatisations-ia",
      number: "01",
    },
    {
      title: "Développement Web",
      description:
        "Sites vitrines, e-commerce ou SaaS : des architectures robustes, rapides et scalables.",
      icon: RiCodeSSlashLine,
      link: "/services/agence-web",
      number: "02",
    },
    {
      title: "Product Design",
      description:
        "UI/UX Design centré utilisateur pour transformer vos visiteurs en clients fidèles.",
      icon: RiPaletteLine,
      link: "/services/product-design",
      number: "03",
    },
    {
      title: "Marketing Digital",
      description:
        "Stratégies d'acquisition SEO/SEA pour booster votre visibilité et votre ROI.",
      icon: RiMegaphoneLine,
      link: "/services/marketing-digital",
      number: "04",
    },
  ];

  return (
    <section
      className="relative z-[2] py-16 lg:py-32 px-4 md:px-8 lg:px-12"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="section-label mb-6">● Nos Expertises</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 lg:mb-16 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Développez tout le potentiel de votre activité.
          </RevealText>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertises.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link href={item.link} className="group block h-full">
                <div
                  className="relative h-full rounded-[20px] p-8 lg:p-10 transition-all duration-500 overflow-hidden expertise-card-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_var(--violet-dim)] hover:border-[rgba(124,58,237,0.25)] hover:bg-[rgba(124,58,237,0.05)]"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Number */}
                  <div
                    className="font-mono text-[0.7rem] mb-8 transition-colors duration-300 group-hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-[var(--ad-1)] group-hover:text-black group-hover:border-[var(--ad-1)] group-hover:shadow-[0_0_30px_var(--accent-dim)] group-hover:scale-105"
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
                  <div className="absolute bottom-8 right-8 opacity-0 translate-y-2 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[var(--ad-1)]">
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
