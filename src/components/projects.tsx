import { sanityFetch } from "@/sanity/lib/live";
import { allProjectsQuery } from "@/sanity/lib/queries";
import ProjectsCarousel from "./projects-carousel";
import type { AllProjectsQueryResult } from "@/types/sanity";

export default async function Projects() {
  const { data } = await sanityFetch({ query: allProjectsQuery });

  if (!data || data.length === 0) {
    return null;
  }

  const projects = data.filter(
    (p: AllProjectsQueryResult[number]) => p.slug?.current
  );

  return <ProjectsCarousel projects={projects} />;
}
