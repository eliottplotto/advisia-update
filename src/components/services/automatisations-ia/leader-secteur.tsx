"use client";

import { useState } from "react";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { RevealText } from "@/components/reveal-text";
import { ChevronDown } from "lucide-react";
import {
  Target,
  MessageCircle,
  BarChart2,
  Search,
  FileText,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Target,
  MessageCircle,
  BarChart2,
  Search,
  FileText,
  Megaphone,
};

type SectionProps = {
  image?: string;
  icon?: string;
  heading: string;
  description: string;
};

type Props = {
  dark: boolean;
  heading: string;
  subheading?: string;
  sections: SectionProps[];
};

export type LeaderSecteurProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LeaderSecteur = (props: LeaderSecteurProps) => {
  const { dark, heading, subheading, sections } = {
    ...LeaderSecteurDefaults,
    ...props,
  };

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const renderDescription = (description: string) => {
    if (description.includes("→ ")) {
      const parts = description.split("→ ");
      return (
        <>
          {parts[0]}
          <span style={{ color: "#c9fe6e", fontWeight: 600 }}>
            → {parts[1]}
          </span>
        </>
      );
    }
    return description;
  };

  return (
    <section
      className={`${dark ? "dark" : ""} text-foreground py-8 lg:py-16`}
      style={{ background: "rgba(10,10,15,0.85)" }}
    >
      <div className="container-md global-padding-x">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto">
            <RevealText>{heading}</RevealText>
          </h2>
          {subheading && (
            <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
              {subheading}
            </p>
          )}
        </div>

        {/* Hint */}
        <p className="text-center text-sm text-muted-foreground/60 mb-4 flex items-center justify-center gap-1.5">
          <span className="hidden lg:inline">Passez la souris sur ce qui vous coûte le plus de temps</span>
          <span className="lg:hidden">Touchez ce qui vous coûte le plus de temps</span>
          <ChevronDown size={14} className="animate-bounce" />
        </p>

        {/* Grid — unified for desktop & mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {sections.map((section, index) => {
            const isOpen = expandedIndex === index;
            const Icon = section.icon ? iconMap[section.icon] : null;

            return (
              <div
                key={index}
                className="rounded-md border cursor-pointer select-none overflow-hidden transition-colors duration-300"
                style={{
                  background: isOpen
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(255,255,255,0.03)",
                  borderColor: isOpen
                    ? "rgba(201,254,110,0.3)"
                    : "rgba(255,255,255,0.08)",
                }}
                onClick={() => toggleCard(index)}
                onMouseEnter={() => {
                  // Desktop hover: only on lg+
                  if (window.innerWidth >= 1024) {
                    setExpandedIndex(index);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    setExpandedIndex(null);
                  }
                }}
              >
                {/* Collapsed state — always visible */}
                <div className="flex flex-col items-center justify-center px-3 py-6 lg:py-8 gap-2">
                  {Icon && (
                    <Icon
                      size={32}
                      style={{ color: isOpen ? "#c9fe6e" : "rgba(255,255,255,0.5)" }}
                      className="transition-colors duration-300"
                    />
                  )}
                  <h3 className="text-sm lg:text-base font-medium text-center leading-tight">
                    {section.heading}
                  </h3>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {renderDescription(section.description)}
                        </p>
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
};

export const LeaderSecteurDefaults: Props = {
  dark: false,
  heading: "Long heading is what you see here in this feature section",
  sections: [
    {
      heading: "Section 1",
      description: "Default description text.",
    },
    {
      heading: "Section 2",
      description: "Default description text.",
    },
    {
      heading: "Section 3",
      description: "Default description text.",
    },
    {
      heading: "Section 4",
      description: "Default description text.",
    },
  ],
};
