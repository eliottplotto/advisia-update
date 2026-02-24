"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
  guide: {
    label: "Guide pratique",
    color: "#000",
    bg: "var(--ad-1)",
  },
  veille: {
    label: "Veille IA",
    color: "#fff",
    bg: "var(--violet)",
  },
  "etude-de-cas": {
    label: "Étude de cas",
    color: "#000",
    bg: "#f59e0b",
  },
};

interface ArticleCardProps {
  title: string;
  slug: { current?: string } | null;
  excerpt: string;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage: (SanityImageSource & { alt?: string | null }) | null;
  publishedAt: string;
  readTime: number | null;
  index?: number;
}

export default function ArticleCard({
  title,
  slug,
  excerpt,
  category,
  coverImage,
  publishedAt,
  readTime,
  index = 0,
}: ArticleCardProps) {
  const cat = categoryConfig[category] || categoryConfig.guide;
  const date = new Date(publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/insights/${slug?.current || ""}`} className="block h-full">
        <article
          className="h-full rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_var(--violet-dim)]"
          style={{
            background: "var(--bg-card, rgba(15,15,24,0.8))",
            border: "1px solid var(--border)",
          }}
        >
          {/* Cover image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: "var(--bg-secondary)" }}
            />
            {coverImage && (
              <Image
                src={urlFor(coverImage).width(600).height(338).url()}
                alt={(coverImage as { alt?: string | null }).alt || title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span
                className="inline-block px-3 py-1 rounded-full font-mono text-[0.65rem] font-semibold uppercase tracking-wider"
                style={{ color: cat.color, background: cat.bg }}
              >
                {cat.label}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3
              className="text-lg font-semibold leading-tight line-clamp-2 transition-colors duration-300 group-hover:text-[var(--ad-1)]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              {title}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--text-muted)" }}
            >
              {excerpt}
            </p>
            <div
              className="mt-4 flex items-center gap-3 text-xs font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              <span>{date}</span>
              {readTime && (
                <>
                  <span style={{ color: "var(--border)" }}>|</span>
                  <span>{readTime} min de lecture</span>
                </>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
