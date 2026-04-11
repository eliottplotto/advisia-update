"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

const storyBubbles = [
  {
    text: "Des dizaines d'heures perdues chaque semaine sur des tâches qu'une machine peut faire en secondes.",
    type: "problem" as const,
  },
  {
    text: "L'IA transforme les grandes entreprises depuis 5 ans. Les PME attendaient encore leur tour.",
    type: "problem" as const,
  },
  {
    text: "On a d'abord automatisé notre propre agence. On applique maintenant les mêmes systèmes chez nos clients.",
    type: "solution" as const,
  },
  {
    text: "Les outils des grands groupes, accessibles aux PME. Sans les budgets ni la complexité.",
    type: "solution" as const,
  },
];

export function StorySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative z-[2] py-16 md:py-24 px-4 md:px-8 lg:px-12"
      style={{
        background: "transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Desktop layout */}
        <div
          className="relative flex flex-col items-center justify-center min-h-[340px]"
          onMouseEnter={() => {
            if (window.innerWidth >= 1024) setIsOpen(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 1024) setIsOpen(false);
          }}
        >
          {/* Central question */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center cursor-pointer select-none relative z-10"
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <RevealText>Pourquoi on a créé Advisia ?</RevealText>
          </h2>
          <p
            className="text-sm mt-3 text-center"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <span className="hidden lg:inline">Survolez pour découvrir</span>
            <span className="lg:hidden">Touchez pour découvrir</span>
          </p>

          {/* Desktop bubbles — absolute positioned */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Left bubbles (problems) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="hidden lg:block absolute left-0 top-[10%] max-w-[280px] p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(239,68,68,0.25)",
                  }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {storyBubbles[0].text}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.08 }}
                  className="hidden lg:block absolute left-[5%] bottom-[5%] max-w-[280px] p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(239,68,68,0.25)",
                  }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {storyBubbles[1].text}
                  </p>
                </motion.div>

                {/* Right bubbles (solutions) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
                  className="hidden lg:block absolute right-0 top-[10%] max-w-[280px] p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(201,254,110,0.25)",
                  }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {storyBubbles[2].text}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.12 }}
                  className="hidden lg:block absolute right-[5%] bottom-[5%] max-w-[280px] p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(201,254,110,0.25)",
                  }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {storyBubbles[3].text}
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Mobile answers — vertical list */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden w-full overflow-hidden mt-8"
              >
                <div className="flex flex-col gap-4">
                  {storyBubbles.map((bubble, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold"
                        style={{
                          background: bubble.type === "problem" ? "rgba(239,68,68,0.15)" : "rgba(201,254,110,0.12)",
                          color: bubble.type === "problem" ? "#ef4444" : "#c9fe6e",
                        }}
                      >
                        {bubble.type === "problem" ? "✕" : "✓"}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                        {bubble.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function ManifestoSection() {
  const engagements = [
    { text: "Devis clair en 48h, ferme et définitif." },
    { text: "On comprend d'abord. On propose ensuite." },
    { text: "On vous forme pour que vous n'ayez plus besoin de nous." },
    { text: "Si on ne peut pas l'expliquer simplement, c'est qu'on ne l'a pas compris." },
    { text: "Chaque projet démarre avec des indicateurs de réussite définis." },
    { text: "On reste disponibles après la mise en service." },
  ];

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{
        background: "transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="section-label mb-6">● Notre engagement</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>Notre engagement.</RevealText>
        </h2>
        <p
          className="text-base md:text-lg mb-8 lg:mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Six promesses. Pas une de plus.
        </p>
        <div
          className="flex flex-col"
          style={{ borderLeft: "1px dashed rgba(201,254,110,0.3)", paddingLeft: "2rem" }}
        >
          {engagements.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.07}>
              <div
                className="group flex items-start gap-6 py-5 transition-all duration-200"
                style={{ borderBottom: idx < engagements.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
              >
                <span
                  className="font-mono font-bold text-lg flex-shrink-0 transition-colors duration-200 group-hover:text-[#c9fe6e]"
                  style={{ color: "rgba(201,254,110,0.4)", minWidth: "2.5rem" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-base leading-relaxed transition-colors duration-200 group-hover:text-[#c9fe6e]"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
