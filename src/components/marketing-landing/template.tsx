import Footer from "@/components/footer";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import ScrollReveal from "@/components/ui/scroll-reveal";
import SectionCTAForm from "@/components/section-cta-form";
import OfferFaq from "@/app/(user)/offres/[slug]/offer-faq";
import SeoFooterText from "@/components/seo-footer-text";

export interface MarketingLandingContent {
  heroTag: string;
  heroH1: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];
  editorialTitle: string;
  editorialText: string;
  process: { title: string; text: string }[];
  pourVousSi: string;
  faqItems: { question: string; answer: string }[];
  ctaTitle: React.ReactNode;
  seoFooter?: string;
}

export default function MarketingLandingTemplate({
  content,
}: {
  content: MarketingLandingContent;
}) {
  return (
    <>
      <main style={{ background: "#0A0A0F", color: "#fff" }}>
        {/* 1. HERO */}
        <section className="pt-[95px]">
          <div className="container-md global-padding-x">
            <div className="py-8 lg:py-12 max-w-3xl">
              <ScrollReveal>
                <div className="mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <BulletHeadline as="p">{content.heroTag}</BulletHeadline>
                </div>
                <h1
                  className="text-4xl lg:text-5xl font-black leading-[1.1] mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {content.heroH1}
                </h1>
                <p
                  className="text-base lg:text-lg max-w-xl leading-relaxed mb-6"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {content.heroSubtitle}
                </p>
                <a
                  href="#cta-form"
                  className="inline-flex items-center mt-2 px-6 py-3 rounded-full text-sm font-semibold text-black"
                  style={{ background: "#c9fe6e" }}
                >
                  Analyser mon besoin — gratuit
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 2. STAT BREAK */}
        <section
          className="py-10"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-md global-padding-x">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center">
              {content.stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center">
                    <p
                      className="text-4xl lg:text-5xl font-black mb-3 leading-none"
                      style={{
                        color: "#c9fe6e",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-sm leading-relaxed max-w-[260px]"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TEXTE ÉDITORIAL */}
        <section className="py-10">
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div
                style={{
                  width: 60,
                  height: 2,
                  background: "#c9fe6e",
                  marginBottom: 24,
                }}
              />
              <h2
                className="text-2xl lg:text-3xl font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {content.editorialTitle}
              </h2>
              <p
                className="text-base max-w-3xl"
                style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}
              >
                {content.editorialText}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. PROCESSUS */}
        <section
          className="py-10"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Comment ça se passe
              </h2>
            </ScrollReveal>
            <div className="max-w-3xl">
              {content.process.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div
                    className="py-6"
                    style={{
                      borderBottom:
                        i < content.process.length - 1
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "none",
                    }}
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="font-mono text-sm font-medium shrink-0"
                        style={{ color: "#c9fe6e" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {step.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. POUR VOUS SI */}
        <section className="py-10">
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="max-w-3xl">
                <div className="mb-5" style={{ color: "#c9fe6e" }}>
                  <BulletHeadline as="p">C&apos;est pour vous si</BulletHeadline>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                  }}
                >
                  {content.pourVousSi}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 6. FAQ */}
        <section
          className="py-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Questions fréquentes
              </h2>
            </ScrollReveal>
            <div className="max-w-3xl">
              <OfferFaq items={content.faqItems} />
            </div>
          </div>
        </section>

        {/* 7. FORMULAIRE */}
        <div id="cta-form">
          <SectionCTAForm title={content.ctaTitle} />
        </div>

        {/* 8. SEO FOOTER TEXT */}
        {content.seoFooter && <SeoFooterText text={content.seoFooter} />}
      </main>
      <Footer />
    </>
  );
}
