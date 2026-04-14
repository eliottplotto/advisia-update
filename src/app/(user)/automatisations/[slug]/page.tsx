import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { automatisationsContent } from "@/lib/automatisations-content";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import OfferForm from "@/app/(user)/offres/[slug]/offer-form";
import OfferFaq from "@/app/(user)/offres/[slug]/offer-faq";

const SLUGS = [
  "prospection",
  "relation-client",
  "reporting",
  "veille",
  "documents",
  "marketing",
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = automatisationsContent[slug];
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://advisia.agency/automatisations/${slug}`,
    },
  };
}

export default async function AutomatisationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = automatisationsContent[slug];
  if (!content) notFound();

  return (
    <>
      <main style={{ background: "#0A0A0F", color: "#fff" }}>

        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
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
                  href="#automatisation-form"
                  className="inline-flex items-center mt-2 px-6 py-3 rounded-full text-sm font-semibold text-black"
                  style={{ background: "#c9fe6e" }}
                >
                  Démarrer cette automatisation
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── 2. STAT BREAK ────────────────────────────────────────────── */}
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
                      style={{ color: "#c9fe6e", fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-sm leading-relaxed max-w-[240px]"
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

        {/* ─── 3. TEXTE ÉDITORIAL ───────────────────────────────────────── */}
        <section className="py-10">
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div style={{ width: 60, height: 2, background: "#c9fe6e", marginBottom: 24 }} />
              <h2
                className="text-2xl lg:text-3xl font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {content.editorialTitle}
              </h2>
              <p
                className="text-base max-w-3xl"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8,
                }}
              >
                {content.editorialText}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── 4. CHIFFRE IMMERSIF ─────────────────────────────────────── */}
        <section
          className="py-12"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="text-center max-w-md mx-auto">
                <p
                  className="text-5xl lg:text-6xl font-black leading-none mb-4"
                  style={{ color: "#c9fe6e", fontFamily: "var(--font-display)" }}
                >
                  {content.bigNumber}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {content.bigNumberLabel}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── 5. PROCESSUS ────────────────────────────────────────────── */}
        <section className="py-10">
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

        {/* ─── 6. POUR VOUS SI ─────────────────────────────────────────── */}
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
              <div className="max-w-3xl">
                <div className="mb-5" style={{ color: "#c9fe6e" }}>
                  <BulletHeadline as="p">C&apos;est pour vous si</BulletHeadline>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}
                >
                  {content.pourVousSi}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── 7. FAQ ───────────────────────────────────────────────────── */}
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

        {/* ─── 8. FORMULAIRE ────────────────────────────────────────────── */}
        <section
          id="automatisation-form"
          className="py-10"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="container-md global-padding-x">
            <div className="max-w-2xl mx-auto">
              <OfferForm
                slug={`automatisation-${slug}`}
                offerName={`Automatisation ${content.heroTag.split("—")[1]?.trim() ?? slug}`}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
