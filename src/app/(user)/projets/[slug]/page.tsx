import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: projet } = await sanityFetch({
    query: PROJECT_QUERY,
    params: await params,
  });

  if (!projet) {
    notFound();
  }

  const { client, coverImage, alt, headline, content, date, review, services } =
    projet;

  const projectImageUrl = coverImage
    ? urlFor(coverImage)?.width(1280).height(720).url()
    : null;
  const projectDate = new Date(date).toDateString();

  return (
    <main className="main-wrapper">
      <section className="bg-secondary">
        <Image
          src={projectImageUrl || "https://placehold.co/1280x720/png"}
          alt={alt || "Projet Advisia"}
          className="w-full object-cover object-center h-[50dvh]"
          priority
          width={1280}
          height={720}
        />
        <div className="container-md py-16 md:py-24">
          <div className="grid grid-col-1 lg:grid-cols-[3fr_2fr] gap-x-[5%]">
            <div>
              <h1 className="mb-5 md:mb-6 text-4xl md:text-6xl">{headline}</h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8 self-start">
              <dl>
                <dt className="text-muted-foreground">Client</dt>
                <dd>{client}</dd>
              </dl>
              <dl>
                <dt className="text-muted-foreground">Date</dt>
                <dd>{projectDate}</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
