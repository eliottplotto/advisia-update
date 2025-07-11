import Link from "next/link";
import Image from "next/image";
// Data
import { urlFor } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import type { Project } from "@/types/sanity";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
// Components
import { BulletHeadline } from "@/components/ui/bullet-headline";
import { Button } from "@/components/ui/button";
import { RiArrowRightFill } from "@remixicon/react";

const options = { next: { revalidate: 60 } };

export default async function Projets() {
  const projets: Project[] = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <section className="dark bg-secondary text-foreground">
      <div className="container-md">
        <div className="global-padding-x py-8 lg:py-16 space-y-8 lg:space-y-16">
          <div className="space-y-6">
            <BulletHeadline as="p">Études de cas</BulletHeadline>
            <h2 className="text-4xl md:text-6xl max-w-4xl">
              Nous avons transformé leurs objectifs en résultats
            </h2>
          </div>

          <ul>
            {projets.map((projet) => (
              <li
                key={projet._id}
                className="group relative overflow-hidden not-first:hidden bg-background rounded-lg border hover:border-muted-foreground"
              >
                <div className="absolute z-1 left-0 bottom-0 bg-secondary w-full h-0 group-hover:h-full transition-width ease-(--my-ease) duration-400"></div>

                <Link
                  className="relative z-1 group global-padding grid grid-cols-1 lg:grid-cols-2 items-end gap-4 md:gap-6 lg:gap-8"
                  href={`/projets/${projet?.slug?.current}`}
                >
                  <div className="w-full aspect-3/2 overflow-hidden rounded-xs">
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
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-scale duration-400 ease-(--ease)"
                        priority
                        sizes="(max-width: 768px) 100vw, 1920px"
                        width={1920}
                        height={1080}
                        quality={60}
                      />
                    )}
                  </div>
                  <div className="h-full flex flex-col justify-between lg:items-end text-center lg:text-left">
                    <div className="w-full">
                      <h2 className="font-mono text-sm uppercase mb-4 text-muted-foreground">
                        {projet.client}
                      </h2>
                      <p className="text-2xl xl:text-4xl">{projet.headline}</p>
                    </div>
                    <Button variant={"link"} className="mt-8" size={"lg"}>
                      Voir le projet <RiArrowRightFill />
                    </Button>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Button size={"lg"} asChild className="flex w-max mx-auto">
            <Link href="/projets">Découvrir nos cas clients</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
