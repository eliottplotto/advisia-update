import { sanityFetch } from "@/sanity/lib/live";
import { allProjectsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { AllProjectsQueryResult } from "@/types/sanity";
import { Button } from "./ui/button";
import { RiCornerDownRightLine } from "@remixicon/react";

type ProjectItem = AllProjectsQueryResult[number];

const Project = ({ project }: { project: ProjectItem }) => {
  if (!project.slug?.current) {
    return null;
  }

  return (
    <article
      key={project._id}
      className="group relative overflow-hidden bg-background rounded-lg border hover:border-muted-foreground"
    >
      <div className="absolute z-1 left-0 bottom-0 bg-secondary w-full h-0 group-hover:h-full transition-width ease-(--my-ease) duration-400"></div>

      <Link
        className="relative z-1 group global-padding grid grid-cols-1 lg:grid-cols-2 items-end gap-4 md:gap-6 lg:gap-8"
        href={`/projets/${project.slug.current}`}
      >
        <div className="w-full aspect-3/2 overflow-hidden rounded-xs">
          {project.coverImage && (
            <Image
              src={
                urlFor(project.coverImage).width(800).url() ||
                "/placeholders/800x600.jpg"
              }
              alt={
                project.coverImage?.alt ||
                `Image de couverture pour ${project.headline}`
              }
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-scale duration-400 ease-(--ease)"
              priority
              sizes="(max-width: 768px) 100vw, 1920px"
              width={800}
              height={600}
              quality={100}
            />
          )}
        </div>
        <div className="h-full flex flex-col justify-between lg:items-end text-center lg:text-left">
          <div className="w-full">
            <h2 className="font-mono text-sm uppercase mb-4 text-muted-foreground">
              {project.client}
            </h2>
            <p className="text-2xl xl:text-4xl">{project.headline}</p>
          </div>
          <Button variant={"link"} className="mt-8" size={"lg"}>
            Voir le projet <RiCornerDownRightLine />
          </Button>
        </div>
      </Link>
    </article>
  );
};

export default async function Projects() {
  const { data } = await sanityFetch({ query: allProjectsQuery });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 lg:space-y-8">
      {data.map((project: ProjectItem) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  );
}
