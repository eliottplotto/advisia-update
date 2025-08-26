// Global
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

// Data
import {
  projectQuery,
  getServicesByIds,
  getReviewById,
  getAllProjectSlugs,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";

// Components
import Footer from "@/components/footer";
import Testimonial1 from "@/components/ui/sections/testimonial-1";
import { Button } from "@/components/ui/button";
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
    // Metadata should never contain stega
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];

  if (!project) {
    return {
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas.",
      openGraph: {
        images: project?.coverImage
          ? [project?.coverImage, ...previousImages]
          : previousImages,
      },
    };
  }

  return {
    title: `${project.client} · Étude de cas Advisia`,
    description: project.contexte ? project.contexte : project.headline,
  } satisfies Metadata;
}

// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  // Retourne un tableau d'objets, où chaque objet contient le paramètre de la route
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

  // Récupération des données liées en parallèle
  const [services, review] = await Promise.all([
    project.services ? getServicesByIds(project.services) : Promise.resolve([]),
    project.review ? getReviewById(project.review) : Promise.resolve(null),
  ]);

  return (
    <main>
      <section className="dark bg-background text-foreground border-b">
        <div className="container-md pt-[95px]">
          <div className="global-padding-x py-8 lg:py-16 flex flex-col gap-8">
            <Button variant="secondary" className="w-fit" asChild>
              <Link href="/projets">
                <RiArrowLeftLine />
                Tous les projets
              </Link>
            </Button>
            <div>
              <p className="text-2xl lg:text-4xl xl:text-6xl text-ad-1">
                {project.client}
              </p>
              <h1 className="text-2xl lg:text-4xl xl:text-6xl max-w-6xl">
                <RevealText>{project.headline}</RevealText>
              </h1>
              {services.length > 0 && (
                <ul className="mt-8 flex items-center justify-center gap-1 flex-wrap">
                  {services.map((service) => (
                    <li
                      key={service._id}
                      className="bg-secondary py-1 px-2 mb-0 rounded-sm"
                    >
                      <p className="text-sm font-mono uppercase">
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

      <div className="dark bg-background border-b">
        {project.contexte && (
          <Header1
            heading="Le contexte"
            dark={true}
            layout="imgLeft"
            description={project.contexte}
            image={{
              src:
                urlFor(project.contextImage).width(600).url() ||
                "https://placehold.co/600x600/png",
              alt:
                project.contextImage.alt ||
                `Image de couverture pour ${project.headline}`,
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
              src:
                urlFor(project.impactImage).width(600).url() ||
                "https://placehold.co/600x600/png",
              alt:
                project.impactImage.alt ||
                `Image de couverture pour ${project.headline}`,
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
              src:
                urlFor(project.resultatsImage).width(600).url() ||
                "https://placehold.co/600x600/png",
              alt:
                project.resultatsImage.alt ||
                `Image de couverture pour ${project.headline}`,
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
