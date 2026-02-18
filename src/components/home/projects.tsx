import { sanityFetch } from "@/sanity/lib/live";
import { allProjectsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { RevealText } from "../reveal-text";
import { RiArrowRightLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import ProjectsGrid from "./projects-grid";

export default async function ProjectsSection() {
  const { data: projects } = await sanityFetch({ query: allProjectsQuery });

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section
      className="relative z-[2] py-16 lg:py-32 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-12 lg:mb-16 max-w-4xl">
          <div className="section-label mb-6">● Études de cas</div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <RevealText>
              Nous avons transformé leurs objectifs en résultats
            </RevealText>
          </h2>
        </div>

        {/* Projects Grid */}
        <ProjectsGrid projects={projects} />

        {/* CTA */}
        <div className="flex justify-center mt-16 relative group w-fit mx-auto">
          <div className="absolute -inset-1 -z-10 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-500 bg-[radial-gradient(#C6F471_1px,transparent_1px)] [background-size:4px_4px]" />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="relative !border-white/20 !text-white !bg-[var(--bg-primary)] hover:!bg-[var(--bg-secondary)] hover:!text-[var(--ad-1)] hover:!border-[var(--ad-1)] rounded-full px-16 py-6 text-sm font-mono uppercase tracking-widest transition-all duration-300"
          >
            <Link href="/projets" className="flex items-center gap-3">
              <span className="mt-[1px]">Voir tous nos projets</span>
              <RiArrowRightLine
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
