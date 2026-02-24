"use client";

import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { RiCloseLine } from "@remixicon/react";

export function StorySection() {
  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="section-label mb-6">● Notre histoire</div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <RevealText>
                Pourquoi on a créé{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #c9fe6e, #a8e063)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Advisia.
                </span>
              </RevealText>
            </h2>
          </div>
          <div className="space-y-5">
            <ScrollReveal>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                On a vu trop de PME se faire vendre des solutions digitales à
                20&nbsp;000€ qui ne fonctionnent pas. Des agences qui
                sous-traitent à l&apos;autre bout du monde. Des
                &quot;experts&quot; qui disparaissent après la signature.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                On a créé Advisia pour faire l&apos;inverse : des outils qui
                marchent, livrés par les gens qui les conçoivent, à des prix qui
                ont du sens. Pas de commercial. Pas d&apos;intermédiaire. Vous
                parlez directement aux experts.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Basés à Tarbes dans les Hautes-Pyrénées, on travaille avec des
                PME et ETI partout en France. Notre spécialité : intégrer
                l&apos;IA et l&apos;automatisation dans vos process existants
                pour vous faire gagner du temps, réduire les erreurs et
                augmenter votre rentabilité.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManifestoSection() {
  const dontDo = [
    {
      text: "Pas de devis à rallonge. On chiffre en 48h, clair et définitif.",
    },
    {
      text: "Pas de slides avant d'avoir compris votre problème.",
    },
    {
      text: "Pas de sous-traitance offshore. On fait le travail nous-mêmes.",
    },
    {
      text: "Pas de jargon pour justifier nos prix. Si on ne peut pas l'expliquer simplement, c'est qu'on ne l'a pas compris.",
    },
    {
      text: "Pas de projet sans objectif mesurable. On définit les KPIs avant de commencer.",
    },
    {
      text: "Pas de disparition après la livraison. On reste disponibles.",
    },
  ];

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="section-label mb-6">● Ce qu&apos;on ne fait pas</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-[700px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>Notre manifeste.</RevealText>
        </h2>
        <p
          className="text-base md:text-lg mb-8 lg:mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          On préfère vous dire ce qu&apos;on ne fait PAS. C&apos;est plus
          honnête.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dontDo.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div
                className="flex items-start gap-3 rounded-xl p-5 transition-all duration-300 hover:border-[rgba(239,68,68,0.2)]"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <RiCloseLine size={14} style={{ color: "#ef4444" }} />
                </div>
                <p
                  className="text-sm leading-relaxed"
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
