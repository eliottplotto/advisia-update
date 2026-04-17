"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useDrawer } from "@/lib/drawer-store";

const offers = [
  {
    title: "Audit Visibilité",
    price: "490 €",
    delay: "48–72h",
    slug: "audit-visibilite",
  },
  {
    title: "Accompagnement Marketing",
    price: "Sur devis",
    delay: "Contrat mensuel",
    slug: "accompagnement-marketing",
  },
];

export default function OffresMarketingGrid() {
  const { openDrawer } = useDrawer();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {offers.map((offer, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] hover:border-[#c9fe6e]"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <h3 className="font-bold text-white">{offer.title}</h3>
          <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>
            {offer.price}
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {offer.delay}
          </p>
          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() => openDrawer(offer.slug)}
              className="inline-flex items-center justify-center gap-1.5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 hover:-translate-y-[1px]"
              style={{ background: "#c9fe6e", color: "#000" }}
            >
              Demander cette offre <ArrowUpRight size={13} />
            </button>
            <Link
              href={`/offres/${offer.slug}`}
              className="group inline-flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-[0.1em] transition-all duration-200 hover:gap-2.5"
              style={{ color: "rgba(201,254,110,0.85)" }}
            >
              Retrouver le détail
              <ArrowUpRight
                size={12}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
