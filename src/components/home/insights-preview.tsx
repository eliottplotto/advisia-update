import { sanityFetch } from "@/sanity/lib/live";
import { latestArticlesQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { RevealText } from "../reveal-text";
import { RiArrowRightLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/insights/article-card";

export default async function InsightsPreview() {
  const { data: articles } = await sanityFetch({ query: latestArticlesQuery });

  if (!articles || articles.length === 0) return null;

  return (
    <section
      className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-8 lg:mb-12 max-w-4xl">
          <div className="section-label mb-6">● Insights</div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <RevealText>On partage ce qu&apos;on apprend.</RevealText>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard
              key={article._id}
              title={article.title || ""}
              slug={article.slug || { current: "" }}
              excerpt={article.excerpt || ""}
              category={article.category || "guide"}
              coverImage={article.coverImage}
              publishedAt={article.publishedAt || ""}
              readTime={article.readTime}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 relative group w-fit mx-auto">
          <div className="absolute -inset-1 -z-10 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-500 bg-[radial-gradient(#C6F471_1px,transparent_1px)] [background-size:4px_4px]" />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="relative !border-white/20 !text-white !bg-[var(--bg-primary)] hover:!bg-[var(--bg-secondary)] hover:!text-[var(--ad-1)] hover:!border-[var(--ad-1)] rounded-full px-16 py-6 text-sm font-mono uppercase tracking-widest transition-all duration-300"
          >
            <Link href="/insights" className="flex items-center gap-3">
              <span className="mt-[1px]">Voir tous les articles</span>
              <RiArrowRightLine
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
