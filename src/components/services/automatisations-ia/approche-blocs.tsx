"use client";

import { useDrawer } from "@/lib/drawer-store";
import { RevealText } from "@/components/reveal-text";

const blocs = [
  {
    tag: "VOUS VOULEZ AUTOMATISER UNE TÂCHE",
    title: "On déploie une automatisation ciblée",
    desc: "Relances, saisies, rapports en 2-3 jours",
    cta: "Je veux automatiser une tâche",
    offerId: "automatisation-unitaire",
  },
  {
    tag: "VOUS VOULEZ AUTOMATISER UN PROCESS COMPLET",
    title: "On construit un système interconnecté",
    desc: "3 à 5 automatisations interconnectées en 2 semaines",
    cta: "Je veux automatiser un process",
    offerId: "pack-automatisation",
  },
  {
    tag: "VOUS VOULEZ UN ASSISTANT IA SUR VOS DONNÉES",
    title: "On déploie un assistant qui connaît votre métier",
    desc: "Info en 10 secondes au lieu de 20 min",
    cta: "Je veux un assistant IA",
    offerId: "assistant-ia-standard",
  },
];

export default function ApprochBlocs() {
  const { openDrawer } = useDrawer();

  return (
    <section
      className="py-10 lg:py-16"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-md global-padding-x">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            <RevealText>On choisit l&apos;approche selon votre besoin</RevealText>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
            Pas de jargon. On vous dit ce qu&apos;on va faire et pourquoi.
          </p>
        </div>

        <div
          className="flex flex-col lg:flex-row"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {blocs.map((bloc, i) => (
            <div
              key={i}
              className="flex-1 px-6 py-8 lg:py-10 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRight:
                  i < blocs.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                borderBottom:
                  i < blocs.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <p
                className="text-xs font-mono uppercase tracking-widest leading-relaxed"
                style={{ color: "#c9fe6e" }}
              >
                {bloc.tag}
              </p>
              <h3 className="text-xl font-bold text-white leading-snug">
                {bloc.title}
              </h3>
              <p className="text-sm text-muted-foreground">{bloc.desc}</p>
              <button
                onClick={() => openDrawer(bloc.offerId)}
                className="mt-auto text-sm font-semibold px-5 py-3 text-center transition-all duration-200 hover:opacity-80"
                style={{
                  background: "rgba(201,254,110,0.08)",
                  color: "#c9fe6e",
                  border: "1px solid rgba(201,254,110,0.2)",
                }}
              >
                {bloc.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
