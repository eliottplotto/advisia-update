"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, Chrome, Megaphone, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Levier {
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  blogHref: string;
  blogLabel: string;
  number: string;
}

const leviers: Levier[] = [
  {
    icon: Search,
    title: "SEO",
    number: "01",
    shortDesc: "Référencement naturel durable sur Google.",
    fullDesc:
      "Audit technique, stratégie de contenu, netlinking. On vous fait monter dans Google durablement, pas avec des hacks. Résultat : un trafic qualifié qui grandit chaque mois sans que vous payiez au clic.",
    blogHref: "/services/marketing-digital/seo",
    blogLabel: "En savoir plus sur le SEO →",
  },
  {
    icon: Chrome,
    title: "Google Ads (SEA)",
    number: "02",
    shortDesc: "Campagnes Ads optimisées, reporting transparent.",
    fullDesc:
      "Campagnes sur Google : recherche, shopping, display. Budget optimisé semaine par semaine, reporting transparent. Vous savez exactement ce que chaque euro rapporte.",
    blogHref: "/services/marketing-digital/sea",
    blogLabel: "En savoir plus sur le SEA →",
  },
  {
    icon: Megaphone,
    title: "Social Ads",
    number: "03",
    shortDesc: "Meta, LinkedIn, TikTok — ciblage précis.",
    fullDesc:
      "Meta, LinkedIn, TikTok Ads. Ciblage précis, visuels qui convertissent, montée en puissance progressive. On teste, on mesure, on double ce qui marche.",
    blogHref: "/services/marketing-digital/social-ads",
    blogLabel: "En savoir plus sur les Social Ads →",
  },
  {
    icon: FileText,
    title: "Stratégie de contenu / GEO",
    number: "04",
    shortDesc: "Calendriers éditoriaux, articles SEO, newsletters.",
    fullDesc:
      "Calendriers éditoriaux, articles SEO, posts LinkedIn, newsletters. Du contenu qui attire et qui convertit. Chaque contenu est pensé pour votre cible et optimisé pour votre positionnement — y compris pour les moteurs IA (GEO).",
    blogHref: "/services/marketing-digital/geo",
    blogLabel: "En savoir plus sur le GEO →",
  },
];

export default function LeviersAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{ background: "transparent" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="section-label mb-6">&#9679; Nos leviers</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          4 leviers pour votre acquisition.
        </h2>

        <div className="flex flex-col gap-2">
          {leviers.map((levier, i) => {
            const Icon = levier.icon;
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background: isOpen
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.05)",
                  borderLeft: isOpen
                    ? "2px solid #c9fe6e"
                    : "2px solid transparent",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
                onClick={() => toggle(i)}
              >
                {/* Header */}
                <div className="flex items-center gap-4 px-5 py-4">
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {levier.number}
                  </span>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: isOpen
                        ? "rgba(201,254,110,0.12)"
                        : "rgba(255,255,255,0.07)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: isOpen ? "#c9fe6e" : "rgba(255,255,255,0.55)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white">
                      {levier.title}
                    </h3>
                    {!isOpen && (
                      <p
                        className="text-sm truncate"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {levier.shortDesc}
                      </p>
                    )}
                  </div>
                  <span
                    className="text-lg transition-transform duration-300 shrink-0"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </div>

                {/* Expanded */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                          {levier.fullDesc}
                        </p>
                        <a
                          href={levier.blogHref}
                          className="inline-flex items-center text-xs font-mono hover:opacity-80"
                          style={{ color: "#c9fe6e" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {levier.blogLabel}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
