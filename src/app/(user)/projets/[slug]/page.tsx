// Global
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
// Data
import { getProjectBySlug, getAllProjectSlugs } from "@/sanity/lib/queries";
import type { Project } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/client";
// Components
import Footer from "@/components/footer";
import { Header1 } from "@/components/ui/sections/header-1";
import Testimonial1 from "@/components/ui/sections/testimonial-1";

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
    <main className="main-wrapper">
      <section className="bg-secondary">
        {project.coverImage && (
          <Image
            src={
              urlFor(project.coverImage).width(1200).url() ||
              "https://placehold.co/1280x720/png"
            }
            alt={
              project.coverImage.alt ||
              `Image de couverture pour ${project.headline}`
            }
            className="w-full object-cover object-center max-h-[50dvh]"
            priority // Charge l'image en priorité pour le LCP
            sizes="(max-width: 768px) 100vw, 1200px"
            width={1280}
            height={720}
          />
        )}
        <div className="container-md py-16 md:py-24">
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
        </div>
        {project.contexte && (
          <Header1
            heading="Le contexte"
            layout="imgLeft"
            description={project.contexte}
            image={{ src: "https://placehold.co/600x400", alt: "placeholder" }}
          />
        )}
        {project.impact && (
          <Header1
            heading="Notre impact"
            description={project.impact}
            image={{ src: "https://placehold.co/600x400", alt: "placeholder" }}
          />
        )}
        {project.resultats && (
          <Header1
            heading="Les résultats"
            layout="imgLeft"
            description={project.resultats}
            image={{ src: "https://placehold.co/600x400", alt: "placeholder" }}
          />
        )}
        {project.review && <Testimonial1 testimonial={project.review} />}
      </section>
      <Footer />
    </main>
  );
}

export const dynamic = "force-static";
