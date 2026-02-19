/* eslint-disable @typescript-eslint/no-explicit-any */
// Global
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

// Data
import {
  projectQuery,
  getReviewById,
  getAllProjectSlugs,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";

// Components
import Footer from "@/components/footer";
import Testimonial1 from "@/components/ui/sections/testimonial-1";
import { RiArrowLeftLine } from "@remixicon/react";
import SectionCTASmall from "@/components/section-cta-small";
import { Header1 } from "@/components/ui/sections/header-1";
import { RevealText } from "@/components/reveal-text";

// Types mis à jour pour Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const { data: project } = await sanityFetch({
    query: projectQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];

  if (!project) {
    return {
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas.",
      openGraph: {
        images: previousImages,
      },
    };
  }

  const ogImage = project.coverImage
    ? urlFor(project.coverImage).width(1200).height(630).url()
    : null;

  return {
    title: `${project.client} · Étude de cas Advisia`,
    description: project.contexte ? project.contexte : project.headline,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function projectPage(props: Props) {
  const params = await props.params;
  const [{ data: project }] = await Promise.all([
    sanityFetch({ query: projectQuery, params }),
  ]);

  if (!project?._id) {
    return notFound();
  }

  const services = project.services || [];

  let review = null;
  if (project.review && project.review._id) {
    review = await getReviewById({ _ref: project.review._id });
  }

  return (
    <main>
      <section
        style={{
          background: "rgba(10,10,15,0.85)",
          color: "var(--text-primary)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-[1400px] mx-auto pt-[95px]">
          <div className="px-4 md:px-8 lg:px-12 py-12 lg:py-20 flex flex-col gap-8">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-[rgba(124,58,237,0.15)] w-fit"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
                color: "var(--text-primary)",
              }}
            >
              <RiArrowLeftLine size={16} />
              Tous les projets
            </Link>
            <div>
              <p
                className="text-2xl lg:text-4xl xl:text-6xl"
                style={{ color: "var(--ad-1)" }}
              >
                {project.client}
              </p>
              <h1
                className="text-2xl lg:text-4xl xl:text-6xl max-w-6xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <RevealText>{project.headline}</RevealText>
              </h1>
              {services.length > 0 && (
                <ul className="mt-8 flex items-center gap-2 flex-wrap">
                  {services.map((service: any) => (
                    <li
                      key={service._id}
                      className="py-1.5 px-3 rounded-full"
                      style={{
                        background: "rgba(124,58,237,0.08)",
                        border: "1px solid rgba(124,58,237,0.15)",
                      }}
                    >
                      <p
                        className="text-xs font-mono uppercase tracking-[0.15em]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {service.title}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "rgba(10,10,15,0.85)", borderBottom: "1px solid var(--border)" }}>
        {project.contexte && (
          <Header1
            heading="Le contexte"
            dark={true}
            layout="imgLeft"
            description={project.contexte}
            image={{
              src: project.contextImage
                ? urlFor(project.contextImage).width(600).url()
                : "https://placehold.co/600x600/png",
              alt:
                project.contextImage?.alt ||
                `Image de contexte pour ${project.headline}`,
            }}
          />
        )}
        {project.impact && (
          <Header1
            heading="Notre impact"
            dark={true}
            layout="imgRight"
            description={project.impact}
            image={{
              src: project.impactImage
                ? urlFor(project.impactImage).width(600).url()
                : "https://placehold.co/600x600/png",
              alt:
                project.impactImage?.alt ||
                `Image d'impact pour ${project.headline}`,
            }}
          />
        )}
        {project.resultats && (
          <Header1
            heading="Les résultats"
            dark={true}
            layout="imgLeft"
            description={project.resultats}
            image={{
              src: project.resultatsImage
                ? urlFor(project.resultatsImage).width(600).url()
                : "https://placehold.co/600x600/png",
              alt:
                project.resultatsImage?.alt ||
                `Image de résultats pour ${project.headline}`,
            }}
          />
        )}
      </div>

      {review && <Testimonial1 testimonial={review} />}

      <SectionCTASmall />

      <Footer />
    </main>
  );
}

export const dynamic = "force-static";
