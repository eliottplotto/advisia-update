// Global
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// Data
import { getProjectBySlug, getAllProjectSlugs } from "@/sanity/lib/queries";
import type { Project } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/client";
// Components
import Footer from "@/components/footer";
import { Header2 } from "@/components/ui/sections/header-2";
import Testimonial1 from "@/components/ui/sections/testimonial-1";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "@remixicon/react";
import { RevealText } from "@/components/RevealText";
import SectionCTASmall from "@/components/section-cta-small";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
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

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project: Project | null = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="main-layout dark text-foreground bg-background">
        <div></div>
        <div className="lg:border-x">
          <div className="global-padding flex flex-col justify-between mt-20">
            <Button variant="link" className="mb-32 lg:mb-64 w-fit" asChild>
              <Link href="/projets">
                <RiArrowLeftLine />
                Tous les projets
              </Link>
            </Button>
            <div>
              <p className="text-xl mb-8">{project.client}</p>
              <RevealText as="h1" className="mb-8 text-4xl md:text-6xl">
                {project.headline}
              </RevealText>
            </div>

            {project.services && (
              <ul className="w-fit mt-16">
                {project.services.map((service) => (
                  <li key={service._id} className="border-t last:border-b">
                    {service.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/*
            {project.logo && (
              <div className="w-fit p-8 mt-8 ml-auto mr-0 bg-background">
                <Image
                  src={urlFor(project.logo).width(80).url()}
                  alt={`Logo ${project.client}`}
                  priority // Charge l'image en priorité pour le LCP
                  sizes="(max-width: 768px) 100vw, 80px"
                  width={80}
                  height={80}
                />
              </div>
            )}*/}
        </div>
      </div>
      <div>
        {project.coverImage && (
          <Image
            src={
              urlFor(project.coverImage).width(1920).url() ||
              "https://placehold.co/1280x720/png"
            }
            alt={
              project.coverImage.alt ||
              `Image de couverture pour ${project.headline}`
            }
            className="w-full"
            priority // Charge l'image en priorité pour le LCP
            sizes="(max-width: 768px) 100vw, 1920px"
            width={1920}
            height={1080}
            quality={60}
          />
        )}
      </div>

      {/* <div className="container-md py-16 md:py-24">
          <div className="grid grid-col-1 lg:grid-cols-[3fr_2fr] gap-x-[5%]">
            <div>
              <h1 className="mb-5 md:mb-6 text-4xl md:text-6xl">
                {project.headline}
              </h1>
              {project.services && (
                <ul className="flex gap-3 wrap">
                  {project.services.map((service) => (
                    <li
                      key={service._id}
                      className="group font-mono uppercase text-sm flex items-center no-wrap gap-3"
                    >
                      {service.title}
                      <div className="inline-block group-last:hidden w-2 h-2 bg-foreground rounded-full"></div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8 self-start">
              <dl>
                <dt className="text-muted-foreground">Client</dt>
                <dd>{project.client}</dd>
              </dl>
              <dl>
                <dt className="text-muted-foreground">Date</dt>
                <dd>{project.date}</dd>
              </dl>
            </div>
          </div>
        </div>*/}
      <div>
        {project.contexte && (
          <Header2
            heading="Le contexte"
            layout="imgLeft"
            description={project.contexte}
            image={{ src: "/placeholder.jpg", alt: "placeholder" }}
            number={1}
          />
        )}
        {project.impact && (
          <Header2
            heading="Notre impact"
            description={project.impact}
            image={{ src: "/placeholder.jpg", alt: "placeholder" }}
            number={2}
          />
        )}
        {project.resultats && (
          <Header2
            heading="Les résultats"
            layout="imgLeft"
            description={project.resultats}
            image={{ src: "/placeholder.jpg", alt: "placeholder" }}
            number={3}
          />
        )}
      </div>

      {project.review && <Testimonial1 testimonial={project.review} />}
      <SectionCTASmall />
      <Footer />
    </main>
  );
}

export const dynamic = "force-static";
