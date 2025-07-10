import Link from "next/link";
import Image from "next/image";
// Data
import { urlFor } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import type { Project } from "@/types/sanity";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
// Components
import Footer from "@/components/footer";
import SectionCTASmall from "@/components/section-cta-small";
import { Button } from "@/components/ui/button";

const options = { next: { revalidate: 60 } };

export default async function Projets() {
  const projets: Project[] = await client.fetch(PROJECTS_QUERY, {}, options);

  const profils = [
    {
      alt: "Eliott P.",
      src: "/eliott-plotto.jpeg",
    },
    {
      alt: "Julien C.",
      src: "/julien.jpeg",
    },

    {
      alt: "Enzo F.",
      src: "/pp1.jpg",
    },
  ];

  return (
    <>
      <section className="dark bg-background text-foreground">
        <div className="container-md pt-[95px]">
          <div className="global-padding-x pt-8 lg:pt-16 space-y-8 lg:space-y-16">
            <div className="space-y-6">
              <div className="bg-background rounded-sm bg-secondary pr-2 pl-1 py-1 flex items-center gap-2 w-fit">
                <div className="flex items-center">
                  {profils.map((profil, index) => (
                    <img
                      key={index}
                      src={profil.src}
                      alt={profil.alt}
                      className="inline-block not-first:-ml-2 w-6 w-6 rounded-full"
                    />
                  ))}
                </div>

                <p className="text-sm font-mono uppercase ">
                  +20 clients accompagnés
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl xl:text-7xl max-w-4xl">
                Nous avons transformé leurs objectifs en{" "}
                <span className="text-highlight">résultats</span>
              </h1>
            </div>

            <ul className="space-y-4 lg:space-y-8">
              {projets.map((projet) => (
                <li key={projet._id}>
                  <Link
                    className="bg-secondary group global-padding grid grid-cols-1 lg:grid-cols-2 items-end gap-4 md:gap-6 lg:gap-8 rounded-sm overflow-hidden"
                    href={`/projets/${projet?.slug?.current}`}
                  >
                    <div className="w-full aspect-3/2 overflow-hidden">
                      {projet.coverImage && (
                        <Image
                          src={
                            urlFor(projet.coverImage).width(1920).url() ||
                            "https://placehold.co/1280x720/png" ||
                            "/placeholder.svg"
                          }
                          alt={
                            projet.coverImage.alt ||
                            `Image de couverture pour ${projet.headline}`
                          }
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-scale duration-400 ease-(--ease) rounded-xs"
                          priority
                          sizes="(max-width: 768px) 100vw, 1920px"
                          width={1920}
                          height={1080}
                          quality={60}
                        />
                      )}
                    </div>
                    <div className="h-full flex flex-col justify-between items-start">
                      <div className="text-2xl xl:text-4xl">
                        <h2 className="text-muted-foreground">
                          {projet.client}
                        </h2>
                        <p>{projet.headline}</p>
                      </div>
                      <Button variant={"link"} className="mt-6" size={"lg"}>
                        Voir le projet
                      </Button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionCTASmall />
      <Footer />
    </>
  );
}
