"use client";

import HoverExpandColumns from "@/components/hover-expand-columns";
import { Check, UserRoundCheck, Users, ArrowUpRight } from "lucide-react";
import OfferDetailLink from "@/components/offer-detail-link";
import { useDrawer } from "@/lib/drawer-store";

export default function AccompagnementFormations() {
  const { openDrawer } = useDrawer();

  const workshopSlot = (
    <div className="flex flex-col h-full rounded-xl p-10 transition-all duration-300" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)" }}>
          <UserRoundCheck size={20} style={{ color: "var(--violet)" }} />
        </div>
        <span
          className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "var(--violet)" }}
        >
          Dirigeants
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Workshop IA Dirigeants
      </h3>
      <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: "var(--text-secondary)" }}>
        Une demi-journée pour comprendre les enjeux, les opportunités et les risques de l&apos;IA pour votre secteur. Format interactif, cas concrets de votre métier.
      </p>
      <div className="flex items-baseline gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <p className="text-3xl font-bold" style={{ color: "#c9fe6e" }}>490 &euro;</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Prix fixe</p>
        </div>
        <div className="border-l pl-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm font-semibold">Demi-journée</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Durée</p>
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {[
          "Panorama IA appliqué à votre secteur",
          "Identification des cas d'usage prioritaires",
          "Feuille de route personnalisée",
          "Format groupe ou individuel",
        ].map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--violet)" }} />
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={() => openDrawer("workshop-ia-dirigeants")}
        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
        style={{ background: "#c9fe6e", color: "#000" }}
      >
        Réserver ce workshop <ArrowUpRight size={13} />
      </button>
      <OfferDetailLink slug="workshop-ia-dirigeants" />
    </div>
  );

  const formationEquipesSlot = (
    <div className="flex flex-col h-full rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)" }}>
          <Users size={20} style={{ color: "var(--violet)" }} />
        </div>
        <span
          className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "var(--violet)" }}
        >
          Équipes
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Formation Équipes
      </h3>
      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>
        Formation opérationnelle de vos équipes sur les outils IA déployés ou sur les bonnes pratiques IA au quotidien. De 1 à 3 jours selon le périmètre.
      </p>
      <div className="flex items-baseline gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <p className="text-2xl font-bold" style={{ color: "#c9fe6e" }}>990 &euro; &ndash; 2 500 &euro;</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Prix fixe</p>
        </div>
        <div className="border-l pl-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm font-semibold">1 à 3 jours</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Durée</p>
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {[
          "Formation sur vos outils IA déployés",
          "Bonnes pratiques prompting & usage",
          "Exercices pratiques sur vos cas métier",
          "Support & documentation inclus",
        ].map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--violet)" }} />
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={() => openDrawer("formation-equipes")}
        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
        style={{ border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }}
      >
        Demander un devis formation <ArrowUpRight size={13} />
      </button>
      <OfferDetailLink slug="formation-equipes" />
    </div>
  );

  return (
    <HoverExpandColumns
      leftSlot={workshopSlot}
      rightSlot={formationEquipesSlot}
      leftBg="transparent"
      rightBg="transparent"
      leftHoveredBg="rgba(255,255,255,0.02)"
      rightHoveredBg="rgba(255,255,255,0.02)"
      minHeight="360px"
    />
  );
}
