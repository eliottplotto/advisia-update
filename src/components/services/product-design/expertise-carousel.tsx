"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  MousePointer2,
  UserSearch,
  Workflow,
  Flag,
  FlaskConical,
  Settings,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: MousePointer2,
    title: "UX/UI Design",
    desc: "Des interfaces pensées pour être simples à comprendre et rapides à utiliser.",
    illustration: "/services/product-design/ux-ui-design.svg",
    illustrationAlt: "UX/UI Design",
  },
  {
    icon: UserSearch,
    title: "Recherche utilisateur",
    desc: "Comprendre vos utilisateurs pour concevoir ce dont ils ont vraiment besoin.",
    illustration: "/services/product-design/ux-research.svg",
    illustrationAlt: "Recherche utilisateur",
  },
  {
    icon: Workflow,
    title: "User flows & Wireframes",
    desc: "Visualisation claire des parcours et priorisation des interactions clés.",
    illustration: "/services/product-design/ux-ui-user-flow-wireframe.svg",
    illustrationAlt: "User flows & Wireframes",
  },
  {
    icon: Flag,
    title: "Prototypage",
    desc: "Tester vos idées avant d'engager du temps et du budget dans le développement.",
    illustration: "/services/product-design/ux-ui-prototypage.svg",
    illustrationAlt: "Prototypage",
  },
  {
    icon: FlaskConical,
    title: "Tests utilisateurs",
    desc: "Validez les hypothèses et identifiez les vrais irritants pour faire évoluer le produit.",
    illustration: "/services/product-design/ux-ui-test-utilisateur.svg",
    illustrationAlt: "Tests utilisateurs",
  },
  {
    icon: Settings,
    title: "Design System",
    desc: "Assurer la cohérence, accélérer la production et préparer la croissance.",
    illustration: "/services/product-design/ux-ui-design-system.svg",
    illustrationAlt: "Design System",
  },
];

export default function ExpertiseCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = cards.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [paused, next]);

  // diff 0 = center (featured), diff 1 = right, diff total-1 = left, rest = hidden
  const getStyle = (index: number) => {
    const diff = (index - active + total) % total;
    if (diff === 0) return { x: 0, scale: 1, opacity: 1, zIndex: 10 };
    if (diff === 1) return { x: 440, scale: 0.85, opacity: 0.35, zIndex: 5 };
    if (diff === total - 1) return { x: -440, scale: 0.85, opacity: 0.35, zIndex: 5 };
    return { x: diff < total / 2 ? 880 : -880, scale: 0.7, opacity: 0, zIndex: 1 };
  };

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{ background: "transparent" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-start justify-between mb-8 lg:mb-12 gap-6">
          <div>
            <div className="section-label mb-6">&#9679; Nos expertises</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[700px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce qu&apos;on maîtrise en Product Design.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 shrink-0 pt-2">
            <button
              onClick={() => { setActive((a) => (a - 1 + total) % total); setPaused(true); }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#c9fe6e]"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
              aria-label="Précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => { next(); setPaused(true); }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#c9fe6e]"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
              aria-label="Suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel — 1 featured center, others behind */}
        <div className="relative flex items-center justify-center" style={{ minHeight: "400px" }}>
          {cards.map((card, i) => {
            const s = getStyle(i);
            const Icon = card.icon;
            const isFeatured = (i - active + total) % total === 0;
            return (
              <motion.div
                key={i}
                className="absolute cursor-pointer select-none"
                onClick={() => setActive(i)}
                animate={{ x: s.x, scale: s.scale, opacity: s.opacity, zIndex: s.zIndex }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ width: "min(400px, 80vw)" }}
              >
                <div
                  className="relative rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-500"
                  style={{
                    background: "var(--bg-card)",
                    border: isFeatured
                      ? "1px solid rgba(201,254,110,0.25)"
                      : "1px solid var(--border)",
                    boxShadow: isFeatured ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
                  }}
                >
                  <div className="p-5 lg:p-6 space-y-3">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center"
                      style={{
                        background: "var(--violet-dim)",
                        border: "1px solid rgba(124,58,237,0.15)",
                        color: isFeatured ? "#c9fe6e" : "var(--ad-1)",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3
                      className="text-xl lg:text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm lg:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {card.desc}
                    </p>
                  </div>
                  <div className="relative w-full mt-auto">
                    <Image
                      src={card.illustration}
                      alt={card.illustrationAlt}
                      width={400}
                      height={280}
                      className="w-full h-auto object-contain opacity-60"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                background: i === active ? "#c9fe6e" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
