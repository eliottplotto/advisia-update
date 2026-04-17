"use client";

import Link from "next/link";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowUpRight, Clock, ShieldCheck, HandHeart } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

const pillars = [
  { icon: Clock, label: "Devis en 48h" },
  { icon: ShieldCheck, label: "Zéro surprise" },
  { icon: HandHeart, label: "Sans engagement" },
];

export default function PricingOverview() {
  return (
    <section
      className="relative z-[2] overflow-hidden"
    >
      <div
        className="relative py-20 md:py-28 px-4 md:px-8 lg:px-12"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.08) 0%, transparent 70%), rgba(10,10,15,0.92)",
        }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <div className="section-label mb-6 justify-center">
              ● Comment on travaille
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold leading-tight mb-5"
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
              className="text-base md:text-lg mb-10 max-w-[500px] mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Vous décrivez votre besoin, on revient avec un cadrage clair,
              un planning et un prix. Pas de devis-surprise, pas d&#39;engagement.
            </p>
          </ScrollReveal>

          {/* 3 pillars — compact inline */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p.icon size={18} style={{ color: "#c9fe6e" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.25}>
            <Link
              href="/contact"
              onClick={() => {
                trackCTAClick("analyser_besoin", "pricing");
              }}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
              style={{
                background: "#c9fe6e",
                color: "#0a0a0f",
              }}
            >
              Analyser mon besoin — gratuit
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
