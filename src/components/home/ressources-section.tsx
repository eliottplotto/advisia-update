import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResourceCTA from "@/components/lead-magnets/resource-cta";

export default function RessourcesSection() {
  return (
    <section
      className="relative z-[2] py-16 md:py-20 px-4 md:px-8 lg:px-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="section-label mb-4">● Ressources gratuites</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[720px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pas encore prêt&nbsp;? Commencez par les checklists.
            </h2>
            <p
              className="mt-4 max-w-[560px] text-base md:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              3 guides PDF actionnables pour vous situer avant toute démarche. Rédigés par Advisia, livrés par email en 30 secondes.
            </p>
          </div>
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] transition-colors duration-300 hover:text-white whitespace-nowrap"
            style={{ color: "var(--text-secondary)" }}
          >
            Toutes les ressources
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ResourceCTA slug="checklist-cession-reprise" variant="inline" />
          <ResourceCTA slug="10-automatisations-ia-pme" variant="inline" />
          <ResourceCTA slug="checklist-seo-local" variant="inline" />
        </div>
      </div>
    </section>
  );
}
