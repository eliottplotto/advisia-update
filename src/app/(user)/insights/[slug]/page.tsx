import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/live";
import {
  articleBySlugQuery,
  relatedArticlesQuery,
  getAllArticleSlugs,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/components/footer";
import ArticleCard from "@/components/insights/article-card";

const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
  guide: { label: "Guide pratique", color: "#000", bg: "var(--ad-1)" },
  veille: { label: "Veille IA", color: "#fff", bg: "var(--violet)" },
  "etude-de-cas": { label: "Étude de cas", color: "#000", bg: "#f59e0b" },
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || "Image de l'article"}
          width={1200}
          height={675}
          className="w-full h-auto rounded-xl"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[var(--violet)] underline-offset-2 hover:text-[var(--ad-1)] transition-colors"
      >
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1
        className="text-3xl md:text-4xl font-bold mt-10 mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-2xl md:text-3xl font-bold mt-8 mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-xl md:text-2xl font-semibold mt-6 mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mt-5 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-6 pl-5 italic"
        style={{
          borderLeft: "3px solid var(--violet)",
          color: "var(--text-secondary)",
        }}
      >
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {children}
      </p>
    ),
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: article } = await sanityFetch({
    query: articleBySlugQuery,
    params: { slug },
  });

  if (!article) return { title: "Article non trouvé" };

  return {
    title: article.seo?.metaTitle || `${article.title} · Advisia Insights`,
    description:
      article.seo?.metaDescription || article.excerpt || undefined,
    openGraph: {
      title: article.seo?.metaTitle || article.title || undefined,
      description: article.seo?.metaDescription || article.excerpt || undefined,
      type: "article",
      publishedTime: article.publishedAt || undefined,
      authors: article.author ? [article.author] : undefined,
      images: article.coverImage
        ? [{ url: urlFor(article.coverImage).width(1200).height(630).url() }]
        : undefined,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const { data: article } = await sanityFetch({
    query: articleBySlugQuery,
    params: { slug },
  });

  if (!article) notFound();

  const cat = categoryConfig[article.category || "guide"] || categoryConfig.guide;
  const date = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  // Fetch related articles
  const { data: relatedArticles } = await sanityFetch({
    query: relatedArticlesQuery,
    params: { category: article.category, currentId: article._id },
  });

  return (
    <main className="relative">
      <article>
        {/* Header */}
        <section
          className="relative z-[2] pt-32 pb-8 md:pt-40 md:pb-12 px-4 md:px-8 lg:px-12"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              <Link href="/insights" className="hover:text-white transition-colors">
                Insights
              </Link>
              <span>/</span>
              <span style={{ color: cat.bg === "var(--ad-1)" ? "var(--ad-1)" : cat.bg }}>
                {cat.label}
              </span>
            </nav>

            {/* Category badge + title */}
            <span
              className="inline-block px-3 py-1 rounded-full font-mono text-[0.65rem] font-semibold uppercase tracking-wider mb-5"
              style={{ color: cat.color, background: cat.bg }}
            >
              {cat.label}
            </span>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.title}
            </h1>

            {/* Meta */}
            <div
              className="mt-5 flex flex-wrap items-center gap-4 text-sm font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              {article.author && <span>Par {article.author}</span>}
              {date && <span>{date}</span>}
              {article.readTime && <span>{article.readTime} min de lecture</span>}
            </div>
          </div>
        </section>

        {/* Cover image */}
        {article.coverImage && (
          <section
            className="relative z-[2] px-4 md:px-8 lg:px-12 pb-8"
            style={{ background: "var(--bg-primary)" }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full max-h-[400px] overflow-hidden rounded-xl">
                <Image
                  src={urlFor(article.coverImage).width(1400).height(600).url()}
                  alt={article.coverImage.alt || article.title || ""}
                  width={1400}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        <section
          className="relative z-[2] py-8 md:py-12 px-4 md:px-8 lg:px-12"
          style={{
            background: "var(--bg-primary)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            {article.body && (
              <PortableText
                value={article.body}
                components={portableTextComponents}
              />
            )}
          </div>
        </section>
      </article>

      {/* Related articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section
          className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
          style={{
            background: "rgba(10,10,15,0.85)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="max-w-[1400px] mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              À lire aussi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related, index) => (
                <ArticleCard
                  key={related._id}
                  title={related.title || ""}
                  slug={related.slug || { current: "" }}
                  excerpt={related.excerpt || ""}
                  category={related.category || "guide"}
                  coverImage={related.coverImage}
                  publishedAt={related.publishedAt || ""}
                  readTime={related.readTime}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="relative z-[2] py-16 md:py-20 px-4 md:px-8 lg:px-12 text-center"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Un projet en tête ?
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Parlons-en et voyons comment on peut vous aider.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 font-mono text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_40px_var(--accent-glow)]"
            style={{
              background: "var(--ad-1)",
              color: "#000",
              boxShadow: "0 0 20px var(--accent-dim)",
            }}
          >
            Parlons-en →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
