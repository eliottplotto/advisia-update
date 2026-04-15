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
import ArticleEnhancements from "./article-enhancements";

const categoryConfig: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  guide: { label: "Guide pratique", color: "#000", bg: "var(--ad-1)" },
  veille: { label: "Veille IA", color: "#fff", bg: "var(--violet)" },
  "etude-de-cas": { label: "Étude de cas", color: "#000", bg: "#f59e0b" },
};

/** Detect if a paragraph starts with a number/percentage → render as callout */
function isStatParagraph(children: React.ReactNode): boolean {
  const text = extractTextFromChildren(children);
  // Match "68 %", "68%", "68 % des", "3,8Mrd", etc. at the start
  return /^[\d][\d\s,.]*\s*(%|Mrd|Md|€|k€|M€|h|min|sem|mois|x\b)/i.test(
    text.trim()
  );
}

function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children))
    return children.map(extractTextFromChildren).join("");
  if (
    children &&
    typeof children === "object" &&
    "props" in children &&
    children.props &&
    typeof children.props === "object" &&
    "children" in children.props
  ) {
    return extractTextFromChildren(
      (children.props as { children: React.ReactNode }).children
    );
  }
  return "";
}

/** Detect a markdown-like table flattened into a paragraph and parse it */
function parseMarkdownTable(
  text: string
): { headers: string[]; rows: string[][] } | null {
  const trimmed = text.trim();
  if (!trimmed.startsWith("|")) return null;
  const pipeCount = (trimmed.match(/\|/g) || []).length;
  if (pipeCount < 6) return null;

  const rawRows = trimmed
    .split(/\|\s*\|/)
    .map((r) => r.replace(/^\s*\|/, "").replace(/\|\s*$/, "").trim())
    .filter((r) => r.length > 0);

  const rows = rawRows
    .map((r) => r.split("|").map((c) => c.trim()))
    .filter((cells) => !cells.every((c) => /^[-:\s]*$/.test(c)));

  if (rows.length < 2) return null;

  const [headers, ...body] = rows;
  return { headers, rows: body };
}

function StyledTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div
      className="my-10 overflow-x-auto rounded-xl"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <table className="w-full border-collapse">
        <thead
          style={{
            background:
              "linear-gradient(135deg, rgba(201,254,110,0.06), rgba(124,58,237,0.04))",
            borderBottom: "1px solid rgba(201,254,110,0.2)",
          }}
        >
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-5 py-4 text-xs font-mono uppercase tracking-[0.1em] font-semibold"
                style={{ color: "#c9fe6e" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                borderTop:
                  i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-5 py-4 text-sm leading-[1.6] align-top"
                  style={{
                    color:
                      j === 0
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.75)",
                    fontWeight: j === 0 ? 600 : 400,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-12 -mx-4 md:mx-0">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || "Image de l'article"}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
        {value.caption && (
          <figcaption
            className="text-sm italic mt-3 text-center"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-4 decoration-2 decoration-[rgba(201,254,110,0.5)] hover:decoration-[#c9fe6e] transition-colors"
        style={{ color: "#c9fe6e" }}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong
        className="font-semibold"
        style={{ color: "rgba(255,255,255,1)" }}
      >
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  block: {
    h1: ({ children }) => (
      <h1
        className="text-3xl md:text-4xl lg:text-[2.6rem] font-black mt-16 mb-6 leading-[1.1] tracking-[-0.02em]"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgba(255,255,255,1)",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="scroll-mt-24 relative text-[1.65rem] md:text-[2rem] lg:text-[2.3rem] font-black mt-20 mb-6 leading-[1.15] tracking-[-0.02em] pt-8"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgba(255,255,255,1)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span
          aria-hidden
          className="absolute top-0 left-0 h-[2px]"
          style={{
            width: 48,
            background: "#c9fe6e",
          }}
        />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="flex items-baseline gap-3 text-xl md:text-2xl lg:text-[1.7rem] font-bold mt-12 mb-5 leading-[1.2]"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgba(255,255,255,0.98)",
        }}
      >
        <span
          className="inline-block flex-shrink-0 w-2 h-2 rounded-full mt-2"
          style={{ background: "#c9fe6e" }}
        />
        <span>{children}</span>
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className="text-lg md:text-xl font-bold mt-10 mb-3"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgba(255,255,255,0.96)",
        }}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-12 relative px-8 md:px-12 py-8 md:py-10 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,254,110,0.04), rgba(124,58,237,0.03))",
          border: "1px solid rgba(201,254,110,0.18)",
        }}
      >
        <span
          aria-hidden
          className="absolute -top-3 left-6 md:left-10 font-black select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "4rem",
            color: "rgba(201,254,110,0.5)",
            lineHeight: 0.6,
          }}
        >
          &ldquo;
        </span>
        <p
          className="text-lg md:text-xl lg:text-[1.4rem] italic leading-[1.55] font-light"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(255,255,255,0.92)",
          }}
        >
          {children}
        </p>
      </blockquote>
    ),
    normal: ({ children }) => {
      const text = extractTextFromChildren(children);

      // Flattened markdown table → render as proper styled table
      const table = parseMarkdownTable(text);
      if (table) {
        return <StyledTable headers={table.headers} rows={table.rows} />;
      }

      // Stat callout : paragraph that starts with a number/stat
      if (isStatParagraph(children)) {
        return (
          <p
            className="my-8 px-6 py-5 rounded-xl text-lg md:text-xl leading-[1.55] font-medium"
            style={{
              background: "rgba(201,254,110,0.06)",
              borderLeft: "3px solid #c9fe6e",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            {children}
          </p>
        );
      }
      return (
        <p
          className="mb-7 text-[1.075rem] md:text-[1.15rem] leading-[1.8] article-paragraph"
          style={{ color: "rgba(255,255,255,0.86)" }}
        >
          {children}
        </p>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-8 space-y-3 pl-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-8 space-y-3 pl-0 counter-reset-[li]">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        className="flex gap-4 text-[1.05rem] md:text-[1.1rem] leading-[1.75]"
        style={{ color: "rgba(255,255,255,0.86)" }}
      >
        <span
          className="inline-block flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[0.72rem]"
          style={{ background: "#c9fe6e" }}
        />
        <span className="flex-1">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li
        className="text-[1.05rem] md:text-[1.1rem] leading-[1.75] ml-6 list-decimal list-outside"
        style={{ color: "rgba(255,255,255,0.86)" }}
      >
        {children}
      </li>
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
    alternates: {
      canonical: `https://advisia.agency/insights/${slug}`,
    },
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

  const { data: relatedArticles } = await sanityFetch({
    query: relatedArticlesQuery,
    params: { category: article.category, currentId: article._id },
  });

  return (
    <main className="relative">
      <ArticleEnhancements />

      <article>
        {/* ─── HERO ARTICLE — MAGAZINE STYLE ───────────────────── */}
        <section
          className="relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-16 px-4 md:px-8 lg:px-12"
          style={{ background: "var(--bg-primary)" }}
        >
          {/* Ambient gradient */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 20% 30%, rgba(201,254,110,0.04), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 70%, rgba(124,58,237,0.05), transparent 60%)",
            }}
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb + category pill */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <nav
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <Link
                  href="/insights"
                  className="hover:text-white transition-colors"
                >
                  Insights
                </Link>
                <span>—</span>
                <span
                  className="inline-block px-3 py-1 rounded-full font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: cat.color, background: cat.bg }}
                >
                  {cat.label}
                </span>
              </nav>
            </div>

            {/* Title */}
            <h1
              className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] font-black leading-[1.05] tracking-[-0.025em] mb-8 max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p
                className="text-lg md:text-xl lg:text-[1.35rem] font-light italic leading-[1.4] mb-10 max-w-3xl"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {article.excerpt}
              </p>
            )}

            {/* Meta row */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {article.author && (
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-xs uppercase tracking-[0.12em]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Par
                  </span>
                  <span
                    className="font-semibold text-sm"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {article.author}
                  </span>
                </div>
              )}
              {date && (
                <span
                  className="text-sm font-mono"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {date}
                </span>
              )}
              {article.readTime && (
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(201,254,110,0.08)",
                    border: "1px solid rgba(201,254,110,0.2)",
                    color: "#c9fe6e",
                  }}
                >
                  ● {article.readTime} min de lecture
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ─── COVER IMAGE ─────────────────────────────────────── */}
        {article.coverImage && (
          <section
            className="relative z-[2] px-4 md:px-8 lg:px-12 pb-12 md:pb-16"
            style={{ background: "var(--bg-primary)" }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={urlFor(article.coverImage).width(1600).height(900).url()}
                  alt={article.coverImage.alt || article.title || ""}
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* ─── BODY ─────────────────────────────────────────────── */}
        <section
          className="relative z-[2] pb-20 md:pb-28 px-4 md:px-8 lg:px-12"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="article-body max-w-[740px] mx-auto">
            {article.body && (
              <PortableText
                value={article.body}
                components={portableTextComponents}
              />
            )}
          </div>

          {/* Separator décoratif fin d'article */}
          <div className="max-w-[740px] mx-auto mt-16 flex items-center justify-center gap-4">
            <div
              className="h-[1px] flex-1"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#c9fe6e" }}
            />
            <div
              className="h-[1px] flex-1"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
          </div>
        </section>
      </article>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section
        className="relative z-[2] py-20 md:py-28 px-4 md:px-8 lg:px-12 text-center overflow-hidden"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,254,110,0.06), transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "rgba(201,254,110,0.7)" }}
          >
            ● On en parle ?
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Un projet en tête ?
          </h2>
          <p
            className="text-base md:text-lg mb-10"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Premier échange gratuit de 30 minutes. Zéro engagement, zéro jargon.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(201,254,110,0.3)]"
            style={{ background: "#c9fe6e", color: "#0a0a0f" }}
          >
            Parlons-en
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ────────────────────────────────── */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section
          className="relative z-[2] py-16 md:py-20 px-4 md:px-8 lg:px-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              ● À lire aussi
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-black mb-10 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dans la même veine.
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

      <Footer />
    </main>
  );
}
