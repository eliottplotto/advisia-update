import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import type { Project } from "@/types/sanity"; // Ajout de l'import du type
import Footer from "@/components/footer";
import SectionCTASmall from "@/components/section-cta-small";
import { RevealText } from "@/components/RevealText";
import { BulletHeadline } from "@/components/ui/bullet-headline";

const options = { next: { revalidate: 60 } };

export default async function Projets() {
  const projets: Project[] = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <>
      <section data-theme="light">
        <div className="main-layout">
          <div></div>
          <div className="global-padding min-h-[50dvh] flex flex-col justify-end lg:border-x">
            <BulletHeadline as="p">Études de cas</BulletHeadline>
            <RevealText
              as="h1"
              className="text-4xl md:text-6xl xl:text-7xl max-w-4xl mt-8"
            >
              Nous avons transformé leurs objectifs en{" "}
              <span className="underline">résultats</span>
            </RevealText>
          </div>
        </div>
      </section>

      <div className="h-1 bg-primary"></div>

      <section className="main-layout" data-theme="light">
        <div></div>
        <ul className="global-padding lg:border-x grid grid-cols-1 divide-y divide-blue-100">
          {projets.map((projet) => (
            <li key={projet._id}>
              <Link
                className="block p-4 hover:text-blue-500"
                href={`/projets/${projet?.slug?.current}`}
              >
                {projet.headline}
              </Link>
            </li>
          ))}
        </ul>
        <div></div>
      </section>

      <SectionCTASmall />
      <Footer />
    </>
  );
}
