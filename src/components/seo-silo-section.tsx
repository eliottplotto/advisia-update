import Link from "next/link";
import OfferFaq from "@/app/(user)/offres/[slug]/offer-faq";
import type { SeoSiloContent } from "@/lib/seo-silo-content";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function SeoSiloSection({ content }: { content: SeoSiloContent }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      className="py-16 lg:py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* FAQ structured data for SEO / GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Title + intro */}
        <div className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            ● Pour aller plus loin
          </p>
          <h2
            className="text-2xl lg:text-3xl font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            {content.title}
          </h2>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {content.intro}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 lg:space-y-14 mb-14">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h3
                className="text-xl lg:text-2xl font-semibold leading-snug mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {section.h3}
              </h3>
              <div className="space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-base leading-[1.75]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {section.bullets.map((b, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.55rem]"
                        style={{ background: "#c9fe6e" }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h3
            className="text-xl lg:text-2xl font-semibold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Questions fréquentes
          </h3>
          <OfferFaq items={content.faq.map((f) => ({ question: f.q, answer: f.a }))} />
        </div>

        {/* Internal links — "À lire aussi" */}
        {content.internalLinks.length > 0 && (
          <div>
            <h3
              className="text-xl lg:text-2xl font-semibold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "rgba(255,255,255,0.88)",
              }}
            >
              À lire aussi
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.internalLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      className="text-sm leading-snug flex-1"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {link.label}
                    </span>
                    <RiArrowRightUpLine
                      size={14}
                      className="flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 mt-1"
                      style={{ color: "#c9fe6e" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
