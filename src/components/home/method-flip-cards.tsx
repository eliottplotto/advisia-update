"use client";

import { useState } from "react";
import { Phone, FileText, Layers, Rocket, LucideIcon } from "lucide-react";
import Link from "next/link";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Step = {
  number: string;
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  backDescription: string;
  cta?: { label: string; href: string };
};

const steps: Step[] = [
  {
    number: "01",
    Icon: Phone,
    title: "Audit Flash",
    subtitle: "Gratuit 30 min",
    backDescription:
      "On analyse votre activité, vos outils et vos points de friction. Gratuit, sans engagement.",
    cta: { label: "Réserver mon Audit Flash", href: "/prendre-rendez-vous" },
  },
  {
    number: "02",
    Icon: FileText,
    title: "Cadrage et devis",
    subtitle: "Périmètre précis",
    backDescription:
      "Périmètre précis, planning, budget : tout est posé avant de coder. Devis ferme, sans surprise.",
  },
  {
    number: "03",
    Icon: Layers,
    title: "Avancement par étapes",
    subtitle: "Itérations de 2 semaines",
    backDescription:
      "On construit par itérations. Vous testez et validez à chaque étape. Pas de livraison surprise.",
  },
  {
    number: "04",
    Icon: Rocket,
    title: "Livraison et support",
    subtitle: "Mise en service",
    backDescription:
      "Mise en service, formation de vos équipes et support continu. On ne disparaît pas après la livraison.",
  },
];

export default function MethodFlipCards() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  return (
    <section className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-label mb-6">● Notre méthode</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            De votre idée à votre outil.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c9fe6e, #a8e063)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              En 4 semaines.
            </span>
          </RevealText>
        </h2>
        <p
          className="text-base md:text-lg mb-8 lg:mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Une méthode transparente. Vous voyez tout, vous validez tout.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              {/* Mobile: stacked recto + verso */}
              <div className="md:hidden flex flex-col gap-3">
                <div
                  className="rounded-xl p-5 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    position: "relative",
                  }}
                >
                  <span
                    className="absolute top-2 right-3 font-mono font-bold select-none pointer-events-none"
                    style={{
                      fontSize: "60px",
                      lineHeight: 1,
                      color: "#c9fe6e",
                      opacity: 0.15,
                    }}
                  >
                    {step.number}
                  </span>
                  <step.Icon
                    size={22}
                    color="#c9fe6e"
                    style={{ marginBottom: "12px" }}
                  />
                  <p className="font-bold text-white text-base mb-1">
                    {step.title}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {step.subtitle}
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 flex flex-col gap-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(201,254,110,0.3)",
                  }}
                >
                  <p className="text-sm font-bold text-white">{step.title}</p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {step.backDescription}
                  </p>
                  {step.cta && (
                    <Link
                      href={step.cta.href}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg w-fit transition-opacity hover:opacity-80"
                      style={{
                        background: "linear-gradient(90deg, #c9fe6e, #a8e063)",
                        color: "#0a0a0a",
                      }}
                    >
                      {step.cta.label}
                    </Link>
                  )}
                </div>
              </div>

              {/* Desktop / Tablet: flip card */}
              <div
                className="hidden md:block"
                style={{ perspective: "1000px", height: "220px" }}
                onMouseEnter={() =>
                  setFlipped((prev) => ({ ...prev, [idx]: true }))
                }
                onMouseLeave={() =>
                  setFlipped((prev) => ({ ...prev, [idx]: false }))
                }
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transform: flipped[idx]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                    transition: "transform 500ms ease",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl p-5 flex flex-col justify-between overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <span
                      className="absolute top-2 right-3 font-mono font-bold select-none pointer-events-none"
                      style={{
                        fontSize: "64px",
                        lineHeight: 1,
                        color: "#c9fe6e",
                        opacity: 0.15,
                      }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <step.Icon
                        size={24}
                        color="#c9fe6e"
                        style={{ marginBottom: "12px" }}
                      />
                      <p className="font-bold text-white text-base leading-tight mb-1">
                        {step.title}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      Survoler pour le détail →
                    </p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-xl p-5 flex flex-col justify-between overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(201,254,110,0.3)",
                    }}
                  >
                    <div>
                      <p className="text-xs font-bold text-white mb-3">
                        {step.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        {step.backDescription}
                      </p>
                    </div>
                    {step.cta && (
                      <Link
                        href={step.cta.href}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg w-fit transition-opacity hover:opacity-80"
                        style={{
                          background:
                            "linear-gradient(90deg, #c9fe6e, #a8e063)",
                          color: "#0a0a0a",
                        }}
                      >
                        {step.cta.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
