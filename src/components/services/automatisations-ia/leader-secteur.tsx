"use client";

import React from "react";
import { RevealText } from "@/components/reveal-text";
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
  link?: string;
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

  return (
    <section
      className={`${dark ? "dark" : ""} text-foreground py-8 lg:py-16`}
      style={{ background: "rgba(10,10,15,0.85)" }}
    >
      <div className="container-md global-padding-x">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto">
            <RevealText>{heading}</RevealText>
          </h2>
          {subheading && (
            <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
              {subheading}
            </p>
          )}
        </div>

        {/* Grid — each card shows title + short description + pill CTA always visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sections.map((section, index) => {
            const Icon = section.icon ? iconMap[section.icon] : null;

            return (
              <div
                key={index}
                className="group rounded-md border overflow-hidden transition-all duration-300 flex flex-col p-5 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {Icon && (
                  <div className="mb-3">
                    <Icon
                      size={26}
                      style={{ color: "#c9fe6e" }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <h3 className="text-base lg:text-lg font-medium leading-tight mb-2 text-white">
                  {section.heading}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {section.description}
                </p>
                {section.link && (
                  <a
                    href={section.link}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium w-max transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "#c9fe6e",
                      color: "#0a0a0f",
                    }}
                  >
                    Découvrir →
                  </a>
                )}
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
