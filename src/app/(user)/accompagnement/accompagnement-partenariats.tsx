"use client";

import { RiCheckLine, RiArrowRightUpLine } from "@remixicon/react";
import { useDrawer } from "@/lib/drawer-store";

const partenariats = [
  {
    name: "Essentiel",
    price: "490 €/mois",
    slug: "partenaire-essentiel",
    featured: false,
    items: [
      "On surveille que tout tourne — si ça casse, on répare",
      "1h par mois pour faire le point et prioriser",
      "Une question ? Réponse sous 48h",
      "Rapport mensuel sur l'usage de vos outils",
    ],
  },
  {
    name: "Business",
    price: "990 €/mois",
    slug: "partenaire-business",
    featured: true,
    items: [
      "Chaque mois, un process de plus qui tourne sans vous",
      "Vos outils évoluent en continu sans effort de votre part",
      "Une question ? Réponse sous 24h",
      "2h de suivi bimensuel pour piloter les priorités",
      "Rapport de performance mensuel",
    ],
  },
  {
    name: "Stratégique",
    price: "1990 €/mois",
    slug: "partenaire-strategique",
    featured: false,
    items: [
      "Évolutions illimitées — on avance tant qu'il y a des choses à améliorer",
      "Un directeur technique dédié, sans le recruter",
      "Accès à toutes les expertises Advisia (IA, web, data, marketing)",
      "Support dédié, réponse en 4h",
      "Comité direction mensuel pour arbitrer les priorités",
    ],
  },
];

export default function AccompagnementPartenariats() {
  const { openDrawer } = useDrawer();

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden md:flex items-stretch divide-x"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {partenariats.map((p, i) => (
          <div
            key={i}
            className="flex-1 p-8 flex flex-col transition-all duration-300 hover:bg-white/[0.02]"
            style={{
              background: p.featured ? "rgba(255,255,255,0.04)" : "transparent",
              borderRight: i < partenariats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <div
              className="font-mono font-bold text-5xl leading-none mb-6"
              style={{ color: "rgba(201,254,110,0.3)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            {p.featured && (
              <div className="mb-3">
                <span
                  className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "var(--violet)", color: "#fff" }}
                >
                  Recommandé
                </span>
              </div>
            )}
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
              {p.name}
            </h3>
            <p className="text-xl font-bold mb-6" style={{ color: "#c9fe6e" }}>
              {p.price}
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {p.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <RiCheckLine
                    size={13}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: p.featured ? "#c9fe6e" : "var(--violet)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openDrawer(p.slug)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
              style={
                p.featured
                  ? { background: "var(--ad-1)", color: "#000" }
                  : { border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }
              }
            >
              Choisir {p.name} <RiArrowRightUpLine size={13} />
            </button>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-4">
        {partenariats.map((p, i) => (
          <div
            key={i}
            className="flex flex-col p-6"
            style={{
              borderLeft: "3px solid rgba(201,254,110,0.4)",
              background: p.featured ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <div
              className="font-mono font-bold text-3xl leading-none mb-4"
              style={{ color: "rgba(201,254,110,0.3)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            {p.featured && (
              <div className="mb-2">
                <span
                  className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "var(--violet)", color: "#fff" }}
                >
                  Recommandé
                </span>
              </div>
            )}
            <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
              {p.name}
            </h3>
            <p className="text-xl font-bold mb-4" style={{ color: "#c9fe6e" }}>
              {p.price}
            </p>
            <ul className="space-y-2 mb-6">
              {p.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <RiCheckLine
                    size={13}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: p.featured ? "#c9fe6e" : "var(--violet)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openDrawer(p.slug)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
              style={
                p.featured
                  ? { background: "var(--ad-1)", color: "#000" }
                  : { border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }
              }
            >
              Choisir {p.name} <RiArrowRightUpLine size={13} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
