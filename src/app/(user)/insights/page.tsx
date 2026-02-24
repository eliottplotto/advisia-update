import { sanityFetch } from "@/sanity/lib/live";
import { allArticlesQuery } from "@/sanity/lib/queries";
import { RevealText } from "@/components/reveal-text";
import Footer from "@/components/footer";
import InsightsGrid from "@/components/insights/insights-grid";

export const metadata = {
  title: "Insights IA — Guides, veille et études de cas · Advisia",
  description:
    "On partage ce qu'on apprend, ce qu'on teste et ce qui marche vraiment pour les PME. Guides pratiques, veille IA et retours terrain.",
  openGraph: {
    title: "Insights IA — Guides, veille et études de cas · Advisia",
    description:
      "On partage ce qu'on apprend, ce qu'on teste et ce qui marche vraiment pour les PME.",
    url: "https://advisia.agency/insights",
    siteName: "Advisia",
    type: "website",
  },
};

export default async function InsightsPage() {
  const { data: articles } = await sanityFetch({ query: allArticlesQuery });

  return (
    <main className="relative">
      {/* Hero */}
      <section
        className="relative z-[2] pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8 lg:px-12"
        style={{
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="section-label mb-6">● Insights</div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <RevealText>
              L&apos;IA décryptée. Guides, veille et retours terrain.
            </RevealText>
          </h1>
          <p
            className="mt-4 text-base md:text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            On partage ce qu&apos;on apprend, ce qu&apos;on teste et ce qui
            marche vraiment pour les PME.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section
        className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
        style={{ background: "rgba(10,10,15,0.85)" }}
      >
        <div className="max-w-[1400px] mx-auto">
          {articles && articles.length > 0 ? (
            <InsightsGrid articles={articles} />
          ) : (
            <div className="text-center py-20">
              <p
                className="text-xl mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                Nos premiers articles arrivent bientôt.
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Restez connectés — on prépare du contenu solide.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
