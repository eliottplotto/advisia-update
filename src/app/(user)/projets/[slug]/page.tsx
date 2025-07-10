// Global
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Data
import {
  getProjectBySlug,
  getServicesByIds,
  getReviewById,
  getAllProjectSlugs,
} from "@/sanity/lib/queries";
import type { Project } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/client";

// Components
import Footer from "@/components/footer";
import Testimonial1 from "@/components/ui/sections/testimonial-1";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "@remixicon/react";
import SectionCTASmall from "@/components/section-cta-small";
import { Header1 } from "@/components/ui/sections/header-1";

// Types mis à jour pour Next.js 15
type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  // Await des params dans Next.js 15
  const params = await props.params;
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${project.client} · Étude de cas Advisia`,
    description: project.contexte ? project.contexte : project.headline,
  };
}

// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  // Retourne un tableau d'objets, où chaque objet contient le paramètre de la route
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectDetailPage(props: { params: Params }) {
  // Await des params dans Next.js 15
  const params = await props.params;
  const project: Project | null = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Récupération des données liées en parallèle
  const [services, review] = await Promise.all([
    project.services ? getServicesByIds(project.services) : Promise.resolve([]),
    project.review ? getReviewById(project.review) : Promise.resolve(null),
  ]);

  return (
    <main>
      <section className="dark bg-background text-foreground">
        <div className="container-md pt-[95px]">
          <div className="global-padding flex flex-col justify-between items-center text-center gap-8 lg:gap-16">
            <Button variant="secondary" className="w-fit" asChild>
              <Link href="/projets">
                <RiArrowLeftLine />
                Tous les projets
              </Link>
            </Button>
            <div>
              <p className="text-4xl md:text-6xl text-ad-1">{project.client}</p>
              <h1 className="text-4xl md:text-6xl max-w-4xl">
                {project.headline}
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

            {project.coverImage && (
              <Image
                src={
                  urlFor(project.coverImage).width(1920).url() ||
                  "https://placehold.co/1280x720/png" ||
                  "/placeholder.svg"
                }
                alt={
                  project.coverImage.alt ||
                  `Image de couverture pour ${project.headline}`
                }
                className="w-full aspect-16/9 object-cover object-center rounded-sm"
                priority
                sizes="(max-width: 768px) 100vw, 1920px"
                width={1920}
                height={1080}
                quality={60}
              />
            )}
          </div>
        </div>
      </section>

      <div>
        {project.contexte && (
          <Header1
            heading="Le contexte"
            dark={true}
            layout="imgLeft"
            description={project.contexte}
            image={{ src: "/bg5.webp", alt: "placeholder" }}
          />
        )}
        {project.impact && (
          <Header1
            heading="Notre impact"
            dark={true}
            layout="imgRight"
            description={project.impact}
            image={{ src: "/bg1.webp", alt: "placeholder" }}
          />
        )}
        {project.resultats && (
          <Header1
            heading="Les résultats"
            dark={true}
            layout="imgLeft"
            description={project.resultats}
            image={{ src: "/bg2.webp", alt: "placeholder" }}
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
