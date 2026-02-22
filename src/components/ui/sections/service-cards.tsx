"use client";

import type { ReactNode } from "react";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
  number?: string;
}

interface ServiceCardsProps {
  label?: string;
  heading: string;
  subtitle?: string;
  cards: ServiceCard[];
}

export default function ServiceCards({
  label,
  heading,
  subtitle,
  cards,
}: ServiceCardsProps) {
  return (
    <section
      className="relative z-10 py-12 md:py-16 px-4 md:px-8 lg:px-12"
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
        {subtitle && (
          <p
            className="max-w-2xl mb-8 lg:mb-12 -mt-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group">
                <div
                  className="relative h-full rounded-[20px] p-5 lg:p-6 transition-all duration-500 overflow-hidden expertise-card-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_var(--violet-dim)] hover:border-[rgba(124,58,237,0.25)] hover:bg-[rgba(124,58,237,0.05)]"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {card.number && (
                    <div
                      className="font-mono text-[0.7rem] mb-4 transition-colors duration-300 group-hover:text-[var(--violet-light)]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {card.number}
                    </div>
                  )}

                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 transition-all duration-300 group-hover:text-[#c9fe6e] group-hover:border-[rgba(124,58,237,0.3)] group-hover:shadow-[0_0_30px_var(--accent-dim)] group-hover:scale-105"
                    style={{
                      background: "var(--violet-dim)",
                      border: "1px solid rgba(124,58,237,0.15)",
                    }}
                  >
                    {card.icon}
                  </div>

                  <h3
                    className="text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--ad-1)]"
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
