import Link from "next/link";
import Image from "next/image";
// Data
import { urlFor } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import type { Project } from "@/types/sanity";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
// Components
import { RevealText } from "@/components/RevealText";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import { Button } from "@/components/ui/button";

const options = { next: { revalidate: 60 } };

export default async function Projets() {
  const projets: Project[] = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <section className="bg-secondary">
      <div className="container-md">
        <div className="global-padding-x py-16">
          <BulletHeadline as="p">Études de cas</BulletHeadline>
          <RevealText
            as="h1"
            className="text-4xl md:text-6xl xl:text-7xl max-w-4xl my-8"
          >
            Nous avons transformé leurs objectifs en{" "}
            <span className="underline">résultats</span>
          </RevealText>
          <ul className="space-y-8">
            {projets.map((projet) => (
              <li
                key={projet._id}
                className="group relative overflow-hidden not-first:hidden bg-background"
              >
                <div className="absolute z-1 left-0 bottom-0 bg-ad-3 w-full h-0 group-hover:h-full transition-width ease-(--my-ease) duration-400"></div>

                <Link
                  className="relative z-1 group global-padding grid grid-cols-1 lg:grid-cols-2 items-end gap-4 md:gap-6 lg:gap-8"
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
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-scale duration-400 ease-(--ease)"
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
                      <h2 className="text-muted-foreground group-hover:text-foreground group-hover:underline">
                        {projet.client}
                      </h2>
                      <p>{projet.headline}</p>
                    </div>
                    <Button className="mt-6" size={"lg"}>
                      Voir le projet
                    </Button>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Button className="mt-4" variant={"outline"} size={"lg"} asChild>
            <Link href="/projets">Découvrir nos projets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
