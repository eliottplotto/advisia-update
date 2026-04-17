"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { useDrawer } from "@/lib/drawer-store";
import OfferDetailLink from "@/components/offer-detail-link";

type Profile = "cedant" | "repreneur";

const packsCedant = [
  {
    name: "Audit Maturité Digitale",
    price: "990 €",
    delay: "48-72h",
    featured: false,
    slug: "audit-cession-reprise",
    items: [
      "Scoring 5 axes",
      "Top 10 actions quick wins",
      "Estimation impact valorisation",
    ],
  },
  {
    name: "Modernisation Express",
    price: "3 500 - 6 000 €",
    delay: "3-4 semaines",
    featured: true,
    slug: "pack-valorisation-cession",
    items: [
      "Site moderne",
      "CRM basique",
      "2-3 automatisations",
      "Formation dirigeant",
    ],
  },
  {
    name: "Valorisation Complète",
    price: "8 000 - 15 000 €",
    delay: "6-8 semaines",
    featured: false,
    slug: "pack-transformation-post-reprise",
    items: [
      "Transformation complète",
      "Preuve documentée pour les acquéreurs",
    ],
  },
];

const packsRepreneur = [
  {
    name: "Audit Pré-acquisition",
    price: "990 €",
    delay: "48-72h",
    featured: false,
    slug: "audit-cession-reprise",
    items: [
      "Audit complet état digital",
      "Levier de négociation",
      "Zéro surprise avant signature",
    ],
  },
  {
    name: "Modernisation Post-Reprise",
    price: "8 000 - 15 000 €",
    delay: "6-8 semaines",
    featured: true,
    slug: "pack-transformation-post-reprise",
    items: [
      "CRM structuré",
      "5-10 automatisations",
      "Dashboard de pilotage",
      "2 formations équipe",
    ],
  },
  {
    name: "Transformation + IA Métier",
    price: "18 000 - 35 000 €",
    delay: "8-12 semaines",
    featured: false,
    slug: "pack-transformation-ia-metier",
    items: [
      "Tout Pack 2 inclus",
      "Assistant IA sur documents internes",
      "Stratégie 12 mois",
      "4 formations",
    ],
  },
];

export default function PacksToggle() {
  const [profile, setProfile] = useState<Profile>("cedant");
  const { openDrawer } = useDrawer();
  const packs = profile === "cedant" ? packsCedant : packsRepreneur;

  return (
    <>
      {/* Toggle */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setProfile("cedant")}
          className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
          style={
            profile === "cedant"
              ? { background: "#c9fe6e", color: "#000" }
              : {
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                }
          }
        >
          Je cède
        </button>
        <button
          onClick={() => setProfile("repreneur")}
          className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
          style={
            profile === "repreneur"
              ? { background: "#c9fe6e", color: "#000" }
              : {
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                }
          }
        >
          Je reprends
        </button>
      </div>

      {/* Packs */}
      <AnimatePresence mode="wait">
        <motion.div
          key={profile}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col md:flex-row gap-4 items-stretch"
        >
          {packs.map((pack, i) => (
            <div
              key={`${profile}-${i}`}
              className={`flex-none ${pack.featured ? "md:w-[40%]" : "md:w-[30%]"}`}
            >
              <div
                className={`flex flex-col h-full rounded-xl p-8 transition-all duration-300 ${
                  pack.featured
                    ? "hover:-translate-y-2 shadow-[0_8px_40px_rgba(201,254,110,0.08)]"
                    : "hover:-translate-y-1"
                }`}
                style={{
                  background: pack.featured
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.02)",
                  border: pack.featured
                    ? "2px solid #c9fe6e"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {pack.featured && (
                  <div className="mb-4">
                    <span
                      className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: "#c9fe6e", color: "#000" }}
                    >
                      Le plus choisi
                    </span>
                  </div>
                )}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pack.name}
                </h3>
                <p className="text-2xl font-bold mb-1" style={{ color: "#c9fe6e" }}>
                  {pack.price}
                </p>
                <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
                  Délai : {pack.delay}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {pack.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: pack.featured ? "#c9fe6e" : "var(--violet)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openDrawer(pack.slug)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
                  style={
                    pack.featured
                      ? { background: "#c9fe6e", color: "#000" }
                      : { border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }
                  }
                >
                  Demander ce pack <ArrowUpRight size={14} />
                </button>
                <OfferDetailLink slug={pack.slug} />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
