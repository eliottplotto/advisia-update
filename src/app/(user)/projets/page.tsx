import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Footer from "@/components/footer";

const options = { next: { revalidate: 60 } };

type Projet = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: {
    asset: {
      url: string;
    };
  };
};

export default async function Projets() {
  const projets: Projet[] = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <main className="main-wrapper">
      <section className="min-h-[50dvh] flex flex-col justify-end p-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl max-w-6xl">
          Nous avons transformé leurs objectifs en résultats.
        </h1>
      </section>
      <section className="bg-blue-600 container h-screen flex items-center">
        <ul className="grid grid-cols-1 divide-y divide-blue-100">
          {projets.map((projet) => (
            <li key={projet._id}>
              <Link
                className="block p-4 hover:text-blue-500"
                href={`/projets/${projet?.slug?.current}`}
              >
                {projet?.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
