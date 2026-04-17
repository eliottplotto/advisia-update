import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Lien secondaire "Retrouver le détail de cette offre →" à afficher
 * juste sous un CTA primaire (Demander / Choisir / Sélectionner cette offre).
 * Mène vers la page éditoriale complète /offres/[slug].
 */
export default function OfferDetailLink({
  slug,
  label = "Retrouver le détail de cette offre",
  className = "",
  align = "center",
}: {
  slug: string;
  label?: string;
  className?: string;
  align?: "center" | "left" | "right";
}) {
  const justify =
    align === "center"
      ? "justify-center"
      : align === "right"
        ? "justify-end"
        : "justify-start";
  return (
    <Link
      href={`/offres/${slug}`}
      className={`group inline-flex items-center gap-1.5 mt-3 text-xs font-mono uppercase tracking-[0.1em] transition-all duration-200 hover:gap-2.5 w-full ${justify} ${className}`}
      style={{ color: "rgba(201,254,110,0.85)" }}
    >
      {label}
      <ArrowUpRight
        size={12}
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
