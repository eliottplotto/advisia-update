"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/reveal-text";

interface ExpertiseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  illustration: string;
  illustrationAlt: string;
}

interface DesignExpertiseGridProps {
  label?: string;
  heading: string;
  cards: ExpertiseCard[];
}

export default function DesignExpertiseGrid({
  label,
  heading,
  cards,
}: DesignExpertiseGridProps) {
  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {label && <div className="section-label mb-6">{label}</div>}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>{heading}</RevealText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="group h-full">
                <div
                  className="relative h-full rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-500 expertise-card-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_var(--violet-dim)] hover:border-[rgba(124,58,237,0.25)] hover:bg-[rgba(124,58,237,0.05)]"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Texte */}
                  <div className="p-5 lg:p-6 space-y-3">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:text-[#c9fe6e] group-hover:scale-105"
                      style={{
                        background: "var(--violet-dim)",
                        border: "1px solid rgba(124,58,237,0.15)",
                        color: "var(--ad-1)",
                      }}
                    >
                      {card.icon}
                    </div>
                    <h3
                      className="text-xl lg:text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--ad-1)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm lg:text-base leading-relaxed transition-colors duration-300 group-hover:text-white/80"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="relative w-full mt-auto">
                    <Image
                      src={card.illustration}
                      alt={card.illustrationAlt}
                      width={442}
                      height={323}
                      className="w-full h-auto object-contain opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
