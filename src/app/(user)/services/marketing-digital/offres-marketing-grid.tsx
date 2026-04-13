"use client";

import Link from "next/link";
import { useDrawer } from "@/lib/drawer-store";

export default function OffresMarketingGrid() {
  const { openDrawer } = useDrawer();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <button
        onClick={() => openDrawer("audit-visibilite")}
        className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] hover:border-[#c9fe6e] text-left"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        <h3 className="font-bold text-white">Audit Visibilité</h3>
        <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>
          490 €
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          48–72h
        </p>
        <div className="flex justify-end mt-auto pt-2">
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
            Voir le détail →
          </span>
        </div>
      </button>

      <Link
        href="/contact?besoin=marketing-digital"
        className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] hover:border-[#c9fe6e]"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        <h3 className="font-bold text-white">Accompagnement Marketing</h3>
        <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>
          Sur devis
        </p>
        <div className="flex justify-end mt-auto pt-2">
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
            Voir le détail →
          </span>
        </div>
      </Link>
    </div>
  );
}
