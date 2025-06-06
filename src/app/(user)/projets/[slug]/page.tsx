import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({
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

  return (
    <main className="main-wrapper">
      <section className="container flex flex-col gap-6 p-12">
        <Link href="/projets">Retour aux projets</Link>
        <h1 className="text-4xl">{projet?.title}</h1>
      </section>
    </main>
  );
}
