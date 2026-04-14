"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AccompagnementFormations from "./accompagnement-formations";
import AccompagnementPartenariats from "./accompagnement-partenariats";

type Choice = "formation" | "partenariat";

export default function FormationPartenariatToggle() {
  const [choice, setChoice] = useState<Choice>("formation");

  return (
    <div>
      {/* Question + 2 boutons-choix */}
      <div className="text-center mb-10 lg:mb-14">
        <p
          className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          ● Quelle est votre situation ?
        </p>
        <h2
          className="text-2xl lg:text-3xl font-bold mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Qu&apos;est-ce que vous voulez faire ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
          <ChoiceCard
            active={choice === "formation"}
            onClick={() => setChoice("formation")}
            label="Je veux former mes équipes"
            sub="Workshop dirigeants, formation ops, bonnes pratiques IA."
          />
          <ChoiceCard
            active={choice === "partenariat"}
            onClick={() => setChoice("partenariat")}
            label="Je veux être accompagné dans la durée"
            sub="Suivi mensuel, évolutions, support technique dédié."
          />
        </div>
      </div>

      {/* Contenu dynamique */}
      <AnimatePresence mode="wait">
        <motion.div
          key={choice}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {choice === "formation" ? (
            <div>
              <div className="mb-8">
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Vos équipes maîtrisent-elles déjà l&apos;IA ?
                </h3>
                <p className="max-w-xl" style={{ color: "var(--text-secondary)" }}>
                  Des formats courts et opérationnels pour que vos dirigeants et
                  équipes comprennent et utilisent l&apos;IA au quotidien.
                </p>
              </div>
              <AccompagnementFormations />
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c9fe6e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="11" x="5" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                  </svg>
                  <span className="text-sm" style={{ color: "#c9fe6e" }}>
                    Mensuel, résiliable à tout moment.
                  </span>
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Vos outils sont en place. Et après ?
                </h3>
                <p
                  className="mb-3 max-w-2xl"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Vous avez un site, des automatisations ou des outils IA — que
                  ce soit nous qui les ayons construits ou non. Le partenariat,
                  c&apos;est quelqu&apos;un qui les surveille, les fait évoluer
                  et vous conseille. Sans que vous ayez à gérer la technique.
                </p>
                <p
                  className="text-sm max-w-2xl"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Contrats mensuels, sans engagement de durée. Vous arrêtez
                  quand vous voulez.
                </p>
              </div>
              <AccompagnementPartenariats />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ChoiceCard({
  active,
  onClick,
  label,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  sub: string;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: active ? "rgba(201,254,110,0.08)" : "rgba(255,255,255,0.03)",
        border: active
          ? "1px solid rgba(201,254,110,0.4)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: active
          ? "0 10px 30px rgba(201,254,110,0.08)"
          : "none",
      }}
    >
      <p
        className="text-base font-semibold mb-1"
        style={{
          fontFamily: "var(--font-display)",
          color: active ? "#c9fe6e" : "var(--text-primary)",
        }}
      >
        {label}
      </p>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
        {sub}
      </p>
    </button>
  );
}
