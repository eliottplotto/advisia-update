import Footer from "@/components/footer";
import { RevealText } from "@/components/reveal-text";
import ScrollReveal from "@/components/ui/scroll-reveal";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TarifsTabs from "./tarifs-tabs";
import FAQCenter from "@/components/ui/sections/faq-center";
import { Suspense } from "react";
import SeoFooterText from "@/components/seo-footer-text";

export const metadata = {
  title: "Tarifs agence IA & digitale pour PME | Advisia",
  description:
    "Tous nos prix en transparence : diagnostics, IA & automatisation, web, formation et partenariat mensuel. Prix fixes, sans surprise.",
  alternates: {
    canonical: "https://advisia.agency/tarifs",
  },
  openGraph: {
    title: "Tarifs agence IA & digitale pour PME | Advisia",
    description:
      "Tous nos prix en transparence : diagnostics, IA & automatisation, web, formation et partenariat mensuel.",
    url: "https://advisia.agency/tarifs",
    siteName: "Advisia",
    type: "website",
  },
};

export default function TarifsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Offres et Tarifs Advisia",
    description: "Tous nos prix en transparence : diagnostics, IA & automatisation, web, formation et partenariat mensuel. Prix fixes, sans surprise.",
    provider: { "@type": "Organization", name: "Advisia", url: "https://advisia.agency" },
    areaServed: "France",
    serviceType: "Agence IA et Digitale",
    url: "https://advisia.agency/tarifs",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://advisia.agency" },
      { "@type": "ListItem", position: 2, name: "Tarifs", item: "https://advisia.agency/tarifs" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-ce qu'on sera dépendants de vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. On forme vos équipes et on documente tout. L'objectif est que vous soyez autonomes. Si vous souhaitez continuer avec nous, c'est votre choix, pas une obligation.",
        },
      },
      {
        "@type": "Question",
        name: "Les prix sont fixes ou peuvent changer ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les prix affichés sont fermes et définitifs. Pas de mauvaise surprise en cours de mission. Si un devis est établi, il vous est présenté avant toute facturation.",
        },
      },
      {
        "@type": "Question",
        name: "On peut commencer par une petite mission ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. La plupart de nos clients commencent par un diagnostic à 490€ ou une automatisation unitaire. Pas besoin de s'engager sur un grand projet dès le départ.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="relative" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <VerticalFlowLine
          waypoints={[
            { x: 50, y: 0 }, { x: 70, y: 0.10 }, { x: 30, y: 0.22 },
            { x: 70, y: 0.38 }, { x: 30, y: 0.55 }, { x: 70, y: 0.72 },
            { x: 30, y: 0.88 }, { x: 50, y: 1.0 },
          ]}
          dotFractions={[0, 0.12, 0.25, 0.38, 0.52, 0.65, 0.78, 0.92, 1.0]}
        />
        {/* HERO */}
        <section
          className="w-full overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)" }}
        >
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-10 lg:py-16 flex flex-col gap-6 max-w-3xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl">
                <RevealText>Des prix clairs. Sans surprise.</RevealText>
              </h1>
              <h2 className="sr-only">
                Tarifs d&apos;une agence IA et digitale pour PME en France :
                diagnostics dès 490€, automatisations dès 390€, sites web dès
                690€, formation et partenariat mensuel.
              </h2>
              <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Toutes nos offres en un seul endroit. Prix fixes affichés, délais indiqués. Pas de devis opaque, pas d&apos;engagement caché.
              </p>

              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { label: "Prix fixe affiché", sub: "Pas de surprise" },
                  { label: "Devis en 48h", sub: "Pour les projets sur mesure" },
                  { label: "Sans engagement", sub: "Sauf partenariat mensuel" },
                ].map((item, i) => (
                  <div key={i} className={i > 0 ? "border-l pl-6" : ""} style={{ borderColor: "var(--border)" }}>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.sub}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                  style={{ background: "#c9fe6e", color: "#0a0a0f" }}
                >
                  Demander un devis sur mesure <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* EXEMPLES BUDGETS */}
        <section className="py-10 lg:py-14" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-md global-padding-x">
            {/* Bannière "Différenciant marché" — preuve de transparence avant budgets */}
            <div
              className="flex items-start md:items-center gap-3 md:gap-4 px-5 py-4 rounded-xl max-w-3xl mb-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,254,110,0.08), rgba(124,58,237,0.05))",
                border: "1px solid rgba(201,254,110,0.25)",
              }}
            >
              <span
                className="inline-block flex-shrink-0 w-2 h-2 rounded-full mt-[0.55rem] md:mt-0"
                style={{ background: "#c9fe6e" }}
              />
              <div>
                <p
                  className="font-semibold text-sm md:text-base"
                  style={{ color: "rgba(255,255,255,0.95)" }}
                >
                  On affiche tout. Ça n&apos;existe nulle part ailleurs sur le marché français de l&apos;IA.
                </p>
                <p
                  className="text-xs md:text-sm mt-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Après analyse de 5 agences IA concurrentes (NoCode Factory, Optimia, IA Agency, MayaIA, Sia Partners) : <strong style={{ color: "#c9fe6e" }}>aucune n&apos;affiche ses prix publiquement</strong>.
                </p>
              </div>
            </div>
            <div className="section-label mb-6">● Exemples de budgets types</div>
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                {[
                  {
                    label: "PME qui veut automatiser",
                    lines: ["Diagnostic 490 €", "+ Automatisation 1 990 €"],
                    total: "= 2 480 € total",
                    detail: "3–4 semaines",
                  },
                  {
                    label: "PME qui veut un site pro",
                    lines: ["Site vitrine"],
                    total: "1 990 – 4 990 €",
                    detail: "2–4 semaines",
                  },
                  {
                    label: "PME qui veut être accompagnée",
                    lines: ["Partenariat Business"],
                    total: "990 €/mois",
                    detail: "Sans engagement",
                  },
                ].map((ex, i) => (
                  <div key={i} className="p-6 flex flex-col gap-3">
                    <p className="text-xs font-mono uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.6)" }}>{ex.label}</p>
                    <div>
                      {ex.lines.map((l, j) => (
                        <p key={j} className="text-sm" style={{ color: "var(--text-secondary)" }}>{l}</p>
                      ))}
                    </div>
                    <p className="text-xl font-bold" style={{ color: "#c9fe6e" }}>{ex.total}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{ex.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TABS + OFFRES */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-8">● Toutes nos offres</div>
            </ScrollReveal>
            <Suspense fallback={<div style={{ color: "var(--text-secondary)" }}>Chargement...</div>}>
              <TarifsTabs />
            </Suspense>
          </div>
        </section>

        {/* PARCOURS TYPE */}
        <section className="py-10 lg:py-14" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-md global-padding-x">
            <div className="section-label mb-8">● Le parcours type de nos clients</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {[
                {
                  num: "01",
                  title: "Diagnostic",
                  price: "490 €",
                  desc: "Comprendre où vous en êtes",
                  detail: "2–3 jours",
                },
                {
                  num: "02",
                  title: "Premier projet",
                  price: "1 990 – 4 990 €",
                  desc: "Automatisation ou site",
                  detail: "2–4 semaines",
                },
                {
                  num: "03",
                  title: "Partenariat",
                  price: "490 – 1 990 €/mois",
                  desc: "Évolutions continues",
                  detail: "Mensuel",
                },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col gap-3 p-6 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="font-mono font-bold text-6xl leading-none select-none absolute top-4 right-4" style={{ color: "rgba(201,254,110,0.08)" }}>{step.num}</div>
                  <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(201,254,110,0.6)" }}>{step.num}</p>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                  <p className="text-xl font-bold" style={{ color: "#c9fe6e" }}>{step.price}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQCenter
          title="Vos questions sur nos tarifs"
          questions={[
            {
              id: "q1",
              question: "Est-ce qu'on sera dépendants de vous ?",
              answer: "Non. On forme vos équipes et on documente tout. L'objectif est que vous soyez autonomes. Si vous souhaitez continuer avec nous, c'est votre choix, pas une obligation.",
            },
            {
              id: "q2",
              question: "Les prix sont fixes ou peuvent changer ?",
              answer: "Les prix affichés sont fermes et définitifs. Pas de mauvaise surprise en cours de mission. Si un devis est établi, il vous est présenté avant toute facturation.",
            },
            {
              id: "q3",
              question: "On peut commencer par une petite mission ?",
              answer: "Oui. La plupart de nos clients commencent par un diagnostic à 490€ ou une automatisation unitaire. Pas besoin de s'engager sur un grand projet dès le départ.",
            },
          ]}
        />
        {/* CTA FINALE */}
        <section
          className="py-10 lg:py-16 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(10,10,15,0.6)" }}
        >
          <div className="container-md global-padding-x max-w-xl mx-auto">
            <ScrollReveal>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Besoin d&apos;un devis sur mesure&nbsp;?
              </h2>
              <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
                Pour les projets complexes ou multi-services, on prépare un devis clair en 48h.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                style={{ background: "#c9fe6e", color: "#0a0a0f" }}
              >
                Demander un devis <ArrowUpRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <SeoFooterText
          text="Advisia affiche des prix fixes et transparents pour toutes ses offres : diagnostics, automatisation, développement web, formation, partenariat. Pas de devis opaque. Pas d'engagement caché. Des tarifs clairs pour des PME qui veulent investir en connaissance de cause."
        />
      </main>
      <Footer />
    </>
  );
}
