import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import { LEAD_MAGNETS, getLeadMagnetBySlug } from "@/lib/lead-magnets/data";
import { verifyToken } from "@/lib/lead-magnets/token";
import LeadMagnetPageClient from "./page-client";

export async function generateStaticParams() {
  return LEAD_MAGNETS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const magnet = getLeadMagnetBySlug(slug);
  if (!magnet) return {};
  return {
    title: `${magnet.title} | Ressource gratuite Advisia`,
    description: magnet.teaser,
    alternates: { canonical: `https://advisia.agency/ressources/${slug}` },
    openGraph: {
      title: magnet.title,
      description: magnet.teaser,
      url: `https://advisia.agency/ressources/${slug}`,
      siteName: "Advisia",
      type: "article",
    },
  };
}

export default async function LeadMagnetPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ t?: string }>;
}) {
  const { slug } = await params;
  const { t } = await searchParams;
  const magnet = getLeadMagnetBySlug(slug);
  if (!magnet) notFound();

  const tokenValid = t ? verifyToken(t, slug).valid : false;

  return (
    <main
      className="relative"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <VerticalFlowLine />
      <LeadMagnetPageClient magnet={magnet} initialUnlocked={tokenValid} />
      <Footer />
    </main>
  );
}
