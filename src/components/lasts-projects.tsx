import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { LASTS_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/types/sanity";

import { Button } from "./ui/button";
import { RiFolderFill, RiFolderOpenFill } from "@remixicon/react";

const options = { next: { revalidate: 60 } };

export default async function LastProjectScreen() {
  const projects: Project[] = await client.fetch(
    LASTS_PROJECTS_QUERY,
    {},
    options
  );

  return (
    <section className="bg-background text-foreground pt-10 pb-4 md:pb-6 lg:pb-8">
      <div className="container-md">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl">
            Nos projets à succès
          </h2>
          <Button variant={"secondary"} asChild>
            <Link href="/projets">Tout voir</Link>
          </Button>
        </div>

        <ul className="flex flex-col md:flex-row justify-between gap-2">
          {projects.map((project) => (
            <li key={project._id} className="group w-full bg-secondary">
              <Link
                href={`/projets/${project?.slug?.current}`}
                className="flex w-full"
              >
                <div className="aspect-square overflow-hidden w-[25%]">
                  <Image
                    src={project.coverImage.asset.url}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                  ></Image>
                </div>
                <div className="relative w-[75%] p-3 flex flex-col justify-between items-end gap-2 grow overflow-hidden">
                  <div className="absolute z-0 left-0 top-full group-hover:top-0 bg-blue-600 w-full h-full transition-top ease-(--my-ease) duration-400"></div>
                  <RiFolderFill className="relative z-1 group-hover:hidden" />
                  <RiFolderOpenFill className="hidden group-hover:block relative z-1" />
                  <div className="w-full relative z-1">
                    <h3 className="text-xl">{project.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground">
                      IA & Automatisation, Site Web
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
