"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/reveal-text";

const testimonials = [
  {
    quote:
      "On a gagné 12h par semaine sur le reporting. L'équipe peut enfin se concentrer sur le terrain.",
    name: "Directeur des opérations",
    company: "LCT Investissements",
    role: "Réseau de 30 magasins BPA",
    badge: "Automatisation reporting + dashboard",
  },
  {
    quote:
      "Advisia a livré notre site en 5 semaines. Rapide, propre, et on peut tout modifier nous-mêmes.",
    name: "Fondateur",
    company: "Mes Halles",
    role: "E-commerce alimentaire",
    badge: "Site vitrine Next.js",
  },
  {
    quote:
      "Ils ont compris notre métier en une heure de call. Pas besoin de tout réexpliquer à chaque étape.",
    name: "CEO",
    company: "Bring",
    role: "Startup logistique",
    badge: "Automatisation + intégration outils",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [paused, next]);

  // Position: 0 = center (featured), 1 = right (behind), 2 = left (behind)
  const getStyle = (index: number) => {
    const diff = (index - active + testimonials.length) % testimonials.length;
    if (diff === 0)
      return { x: 0, scale: 1, opacity: 1, zIndex: 10 };
    if (diff === 1)
      return { x: 420, scale: 0.85, opacity: 0.35, zIndex: 5 };
    return { x: -420, scale: 0.85, opacity: 0.35, zIndex: 5 };
  };

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{ background: "transparent" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="section-label mb-6">● Ce que disent nos clients</div>
        </ScrollReveal>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 lg:mb-14 max-w-[800px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>Des résultats concrets. Des clients qui en parlent.</RevealText>
        </h2>

        {/* Carousel — 3 cards, 1 featured center */}
        <div className="relative flex items-center justify-center" style={{ minHeight: "260px" }}>
          {testimonials.map((t, i) => {
            const s = getStyle(i);
            const isFeatured = (i - active + testimonials.length) % testimonials.length === 0;
            return (
              <motion.div
                key={i}
                className="absolute cursor-pointer select-none"
                onClick={() => setActive(i)}
                animate={{
                  x: s.x,
                  scale: s.scale,
                  opacity: s.opacity,
                  zIndex: s.zIndex,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ width: "min(500px, 80vw)" }}
              >
                <div
                  className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-500"
                  style={{
                    background: isFeatured
                      ? "rgba(15,15,22,0.95)"
                      : "var(--bg-card)",
                    border: isFeatured
                      ? "1px solid rgba(201,254,110,0.25)"
                      : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: isFeatured
                      ? "0 8px 40px rgba(0,0,0,0.5)"
                      : "none",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{
                      background: isFeatured
                        ? "rgba(201,254,110,0.5)"
                        : "rgba(124,58,237,0.3)",
                    }}
                  />

                  {/* Quote */}
                  <p
                    className="text-base lg:text-lg leading-relaxed mb-6"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                  </p>

                  {/* Author + badge */}
                  <div className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                        {t.name}
                      </p>
                      <p className="text-sm font-medium" style={{ color: "var(--ad-1)" }}>
                        {t.company}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {t.role}
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: "rgba(201,254,110,0.08)",
                        border: "1px solid rgba(201,254,110,0.2)",
                        color: "#c9fe6e",
                      }}
                    >
                      {t.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                background: i === active ? "#c9fe6e" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
