import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { getLeadMagnetBySlug } from "@/lib/lead-magnets/data";

const ACCENT = {
  violet: {
    bg: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(124,58,237,0.04))",
    border: "rgba(124,58,237,0.3)",
    text: "var(--violet-light)",
    cta: "var(--violet)",
    ctaText: "#fff",
  },
  lime: {
    bg: "linear-gradient(135deg, rgba(201,254,110,0.1), rgba(201,254,110,0.03))",
    border: "rgba(201,254,110,0.3)",
    text: "#c9fe6e",
    cta: "#c9fe6e",
    ctaText: "#0a0a0f",
  },
  blue: {
    bg: "linear-gradient(135deg, rgba(96,165,250,0.1), rgba(96,165,250,0.03))",
    border: "rgba(96,165,250,0.3)",
    text: "#60a5fa",
    cta: "#60a5fa",
    ctaText: "#0a0a0f",
  },
} as const;

type Variant = "inline" | "banner";

type Props = {
  slug: "checklist-cession-reprise" | "10-automatisations-ia-pme" | "checklist-seo-local";
  variant?: Variant;
  customLabel?: string;
  className?: string;
};

/**
 * CTA intégrable sur une page service / article / diagnostic
 * pour rediriger vers un lead magnet pertinent.
 *
 * variant:
 *  - "inline" (default): bloc compact, ~50% largeur, à intégrer dans une colonne
 *  - "banner": pleine largeur, mis en avant
 */
export default function ResourceCTA({ slug, variant = "inline", customLabel, className = "" }: Props) {
  const magnet = getLeadMagnetBySlug(slug);
  if (!magnet) return null;

  const accent = ACCENT[magnet.accent];
  const href = `/ressources/${slug}`;
  const itemsLabel = `${magnet.items.length} points actionnables`;

  if (variant === "banner") {
    return (
      <Link
        href={href}
        className={`group block rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] ${className}`}
        style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 text-xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {magnet.icon}
            </span>
            <div>
              <div
                className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-2 flex items-center gap-2"
                style={{ color: accent.text }}
              >
                <FileDown size={12} />
                Ressource gratuite · PDF
              </div>
              <h3
                className="text-lg md:text-xl font-bold leading-tight mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {customLabel || magnet.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {itemsLabel} · Livré par email en 30 secondes
              </p>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.03] self-start md:self-auto"
            style={{ background: accent.cta, color: accent.ctaText }}
          >
            Télécharger gratuitement
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    );
  }

  // inline
  return (
    <Link
      href={href}
      className={`group block rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
    >
      <div
        className="font-mono text-[0.6rem] uppercase tracking-[0.15em] mb-2 flex items-center gap-2"
        style={{ color: accent.text }}
      >
        <FileDown size={11} />
        Ressource gratuite
      </div>
      <p
        className="text-base font-bold leading-tight mb-1"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        {customLabel || magnet.title}
      </p>
      <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
        {itemsLabel} · PDF par email, gratuit
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-0.5"
        style={{ color: accent.text }}
      >
        Télécharger <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}
