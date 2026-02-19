"use client";

import {
  RiNextjsFill,
  RiReactjsFill,
  RiBracesFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiVercelFill,
  RiDatabase2Fill,
  RiTerminalBoxFill,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

const techs: { name: string; icon: RemixiconComponentType }[] = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React", icon: RiReactjsFill },
  { name: "TypeScript", icon: RiBracesFill },
  { name: "Supabase", icon: RiSupabaseFill },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Vercel", icon: RiVercelFill },
  { name: "PostgreSQL", icon: RiDatabase2Fill },
  { name: "Prisma", icon: RiTerminalBoxFill },
];

export default function TechStack() {
  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="section-label mb-6">&#9679; Notre stack</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>Les technos qu&apos;on ma&icirc;trise.</RevealText>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div
                className="group flex flex-col items-center gap-3 rounded-[16px] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)]"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <tech.icon
                  size={36}
                  className="transition-colors duration-300 group-hover:text-[#c9fe6e]"
                  style={{ color: "var(--text-secondary)" }}
                />
                <span
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {tech.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
