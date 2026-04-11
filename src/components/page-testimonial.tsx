"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  detail?: string;
}

interface PageTestimonialProps {
  testimonials: Testimonial[];
}

export default function PageTestimonial({ testimonials }: PageTestimonialProps) {
  const isSingle = testimonials.length === 1;

  return (
    <section
      className="py-10 lg:py-14 px-4 md:px-8 lg:px-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container-md global-padding-x max-w-5xl">
        <p className="section-label mb-8">● Ce que disent nos clients</p>
        <div className={isSingle ? "" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <blockquote
                className="rounded-2xl p-8 h-full flex flex-col justify-between"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  className={`italic leading-relaxed mb-6 ${isSingle ? "text-xl lg:text-2xl" : "text-base lg:text-lg"}`}
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </p>
                <footer>
                  <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    {t.author}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--ad-1)" }}>
                    {t.company}
                  </p>
                  {t.detail && (
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {t.detail}
                    </p>
                  )}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
