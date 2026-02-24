"use client";

import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "On analyse votre activité, vos outils, vos points de friction. Gratuit, 30 min.",
  },
  {
    number: "02",
    title: "Cadrage & devis",
    description:
      "Specs fonctionnelles, planning, budget : tout est posé avant de coder une seule ligne.",
  },
  {
    number: "03",
    title: "Build en sprints",
    description:
      "On construit par itérations de 2 semaines. Vous testez et validez à chaque étape.",
  },
  {
    number: "04",
    title: "Livraison & support",
    description:
      "Mise en prod, formation de vos équipes, et support continu si besoin.",
  },
];

export default function Process() {
  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
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
          Un process transparent. Vous voyez tout, vous validez tout.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line — desktop only */}
          <div
            className="hidden lg:block absolute top-[60px] left-0 right-0 h-[1px]"
            style={{ background: "rgba(201,254,110,0.15)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.12} className="h-full">
                <div className="group relative h-full flex flex-col">
                  {/* Number circle */}
                  <div className="relative z-[1] flex items-center justify-center w-[48px] h-[48px] rounded-full mb-6 font-mono text-sm font-bold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(201,254,110,0.3)] group-hover:scale-110"
                    style={{
                      background: "rgba(201,254,110,0.1)",
                      border: "2px solid #c9fe6e",
                      color: "#c9fe6e",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-6 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <h4
                      className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[#c9fe6e]"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "#fff",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
