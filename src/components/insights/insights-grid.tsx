"use client";

import { useState } from "react";
import ArticleCard from "./article-card";

const filters = [
  { label: "Tout", value: "all" },
  { label: "Guides", value: "guide" },
  { label: "Veille IA", value: "veille" },
  { label: "Études de cas", value: "etude-de-cas" },
];

interface Article {
  _id: string;
  title: string | null;
  slug: { current?: string } | null;
  excerpt: string | null;
  category: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage: any;
  publishedAt: string | null;
  readTime: number | null;
}

interface InsightsGridProps {
  articles: Article[];
}

export default function InsightsGrid({ articles }: InsightsGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className="px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300"
            style={{
              background:
                activeFilter === f.value
                  ? "var(--ad-1)"
                  : "rgba(255,255,255,0.05)",
              color: activeFilter === f.value ? "#000" : "var(--text-secondary)",
              border:
                activeFilter === f.value
                  ? "1px solid var(--ad-1)"
                  : "1px solid var(--border)",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article, index) => (
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

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p style={{ color: "var(--text-secondary)" }}>
            Aucun article dans cette catégorie pour le moment.
          </p>
        </div>
      )}
    </>
  );
}
