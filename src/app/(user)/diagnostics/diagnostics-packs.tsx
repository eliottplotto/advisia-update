"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowUpRight, Check } from "lucide-react";
import { useDrawer } from "@/lib/drawer-store";
import OfferDetailLink from "@/components/offer-detail-link";

const packs = [
  {
    name: "Audit Général",
    price: "1990 €",
    priceBarred: "2500 €",
    delay: "2-3 semaines",
    slug: "pack-audit-general",
    featured: false,
    items: [
      "4 diagnostics combinés",
      "Rapport consolidé",
      "Roadmap 6-12 mois",
      "Restitution direction",
    ],
  },
  {
    name: "Audit + Correction",
    price: "3490 €",
    priceBarred: "4500 €",
    delay: "3-4 semaines",
    slug: "pack-audit-correction",
    featured: true,
    items: [
      "Tout le pack Audit",
      "Patches sécurité appliqués",
      "Corrections SEO",
      "1 automatisation déployée",
    ],
  },
];

export default function DiagnosticsPacks() {
  const { openDrawer } = useDrawer();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {packs.map((pack, i) => (
        <ScrollReveal key={i} delay={i * 0.1} className="h-full">
          <div
            className="group flex flex-col h-full rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9fe6e]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {pack.featured && (
              <div className="mb-4">
                <span
                  className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "#c9fe6e", color: "#000" }}
                >
                  Le plus demandé
                </span>
              </div>
            )}
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {pack.name}
            </h3>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-3xl font-bold" style={{ color: "#c9fe6e" }}>
                {pack.price}
              </span>
              <span
                className="text-sm line-through"
                style={{ color: "var(--text-secondary)" }}
              >
                {pack.priceBarred}
              </span>
            </div>
            <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
              Délai : {pack.delay}
            </p>
            <div className="flex-1 mb-8">
              <p
                className="font-mono text-[0.65rem] uppercase tracking-wider mb-3"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Inclus
              </p>
              <ul className="space-y-2">
                {pack.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Check
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#c9fe6e" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openDrawer(pack.slug)}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
              style={
                pack.featured
                  ? { background: "#c9fe6e", color: "#000" }
                  : {
                      background: "transparent",
                      color: "var(--text-primary)",
                      border: "1px solid rgba(124,58,237,0.4)",
                    }
              }
            >
              Demander le pack <ArrowUpRight size={14} />
            </button>
            <OfferDetailLink slug={pack.slug} />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
