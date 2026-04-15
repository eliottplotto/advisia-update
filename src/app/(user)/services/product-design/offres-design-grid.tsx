"use client";

import { useDrawer } from "@/lib/drawer-store";

const offers = [
  {
    title: "Audit UX",
    price: "À partir de 990 €",
    delay: "1-2 semaines",
    slug: "audit-ux",
  },
  {
    title: "Refonte interface complète",
    price: "Sur devis",
    delay: "4-8 semaines",
    slug: "refonte-interface",
  },
];

export default function OffresDesignGrid() {
  const { openDrawer } = useDrawer();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {offers.map((offer, i) => (
        <button
          key={i}
          onClick={() => openDrawer(offer.slug)}
          className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] hover:border-[#c9fe6e] text-left"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <h3 className="font-bold text-white">{offer.title}</h3>
          <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>
            {offer.price}
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {offer.delay}
          </p>
          <div className="flex justify-end mt-auto pt-2">
            <span
              className="text-xs font-mono"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Voir le détail →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
