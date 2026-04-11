"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

const teamBubbles = [
  {
    src: "/eliott-plotto.jpeg",
    alt: "Eliott Plotto",
    name: "Eliott",
    role: "Tech · 5 ans d'expérience en e-commerce & IA",
    tooltipSide: "right" as const,
    animation: { y: [0, -12, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 0 },
  },
  {
    src: "/julien.jpeg",
    alt: "Julien C.",
    name: "Julien",
    role: "Stratégie · Expert en scalabilité & croissance",
    tooltipSide: "left" as const,
    animation: { y: [0, -8, 0] },
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 },
  },
];

export default function AgenceHero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="pt-[95px] pb-6 md:pb-8 px-4 md:px-8 lg:px-12"
      style={{ background: "rgba(10,10,15,0.85)" }}
    >
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Floating photo bubbles */}
        <div className="flex justify-center items-center gap-8 mb-10 mt-8">
          {teamBubbles.map((bubble, index) => (
            <div key={index} className="relative">
              <span className="sr-only">{index === 0 ? "Eliott Plotto — Stratégie & Business Dev" : "Julien Camy — Tech & IA Dev"}</span>
              <motion.div
                animate={bubble.animation}
                transition={bubble.transition}
                className="relative w-[96px] h-[96px] rounded-full overflow-hidden flex-shrink-0 cursor-pointer"
                style={{
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() =>
                  setHoveredIndex((prev) => (prev === index ? null : index))
                }
              >
                <Image
                  src={bubble.src}
                  alt={bubble.alt}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
                {/* Green pulse dot */}
                <span
                  className="absolute bottom-1 right-1 w-[10px] h-[10px] rounded-full animate-pulse"
                  style={{ background: "#c9fe6e" }}
                />
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, x: bubble.tooltipSide === "right" ? -4 : 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: bubble.tooltipSide === "right" ? -4 : 4 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute z-10 whitespace-nowrap px-4 py-2 rounded-xl text-center ${
                      bubble.tooltipSide === "right"
                        ? "left-full top-1/2 -translate-y-1/2 ml-3"
                        : "right-full top-1/2 -translate-y-1/2 mr-3"
                    }`}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <p className="text-sm font-medium text-white">
                      {bubble.name}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {bubble.role}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[700px] mx-auto mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>On a créé Advisia pour que les PME arrêtent de subir leur digital.</RevealText>
        </h1>

        {/* Description */}
        <ScrollReveal delay={0.1}>
          <p
            className="text-base md:text-lg leading-relaxed max-w-[600px] mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            On est convaincus que dans 5 ans, les PME qui auront automatisé
            intelligemment auront une longueur d&apos;avance décisive. On est là
            pour que vous en fassiez partie.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
