import Footer from "@/components/footer";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import ScrollReveal from "@/components/ui/scroll-reveal";
import ScanReveal from "@/components/hero-animations/ScanReveal";
import SectionCTAForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import PageTestimonial from "@/components/page-testimonial";
import DiagnosticsGrid from "./diagnostics-grid";
import DiagnosticsPacks from "./diagnostics-packs";
import SeoFooterText from "@/components/seo-footer-text";
import SeoSiloSection from "@/components/seo-silo-section";
import { seoSiloDiagnostics } from "@/lib/seo-silo-content";
import SeoH2 from "@/components/seo-h2";

export const metadata = {
  title: "Diagnostics et Audits pour PME | Advisia",
  description:
    "Analysez votre maturité digitale, sécurité, visibilité et potentiel IA en 48-72h. Rapports actionnables, prix fixes, zéro engagement.",
  alternates: {
    canonical: "https://advisia.agency/diagnostics",
  },
  openGraph: {
    title: "Diagnostics et Audits pour PME | Advisia",
    description:
      "Analysez votre maturité digitale, sécurité, visibilité et potentiel IA en 48-72h. Rapports actionnables, prix fixes, zéro engagement.",
    url: "https://advisia.agency/diagnostics",
    siteName: "Advisia",
    type: "website",
  },
};

const diagnostics = [
  {
    badge: "Digital & IA",
    icon: "SearchCheck",
    title: "Diagnostic Digital & IA",
    description:
      "On analyse vos outils, vos tâches et votre potentiel d'automatisation. Vous repartez avec vos 5 actions ROI prioritaires, chiffrées.",
    price: "490 €",
    delay: "48-72h",
    livrables: ["Rapport 3-5 pages", "Top 5 actions", "Chiffrage inclus"],
    slug: "diagnostic-digital-ia",
    pourQui:
      "Pour les dirigeants qui veulent identifier leurs priorités IA avant d'investir.",
  },
  {
    badge: "Sécurité",
    icon: "ShieldCheck",
    title: "Audit Sécurité",
    description:
      "Scan de votre code et infrastructure. Chaque vulnérabilité est classée par niveau de risque avec le correctif recommandé.",
    price: "490 €",
    delay: "24-48h",
    livrables: ["Rapport vulnérabilités", "Scoring risque", "Correctifs recommandés"],
    slug: "audit-securite",
    pourQui:
      "Pour les PME qui ont un site ou une app et n'ont jamais vérifié leur exposition aux failles.",
  },
  {
    badge: "Visibilité",
    icon: "BarChart3",
    title: "Audit Visibilité : êtes-vous visible sur Google ?",
    description:
      "Votre présence sur Google, les moteurs IA et les Ads. Scoring par canal, benchmark concurrents, plan d'action priorisé.",
    price: "490 €",
    delay: "48-72h",
    livrables: ["Scoring SEO/SEM/GEO", "Quick wins", "Benchmark concurrents"],
    slug: "audit-visibilite",
    pourQui:
      "Pour ceux qui ne comprennent pas pourquoi leurs concurrents apparaissent avant eux sur Google.",
  },
  {
    badge: "E-réputation",
    icon: "Sparkles",
    title: "Audit E-réputation : que dit-on de vous en ligne ?",
    description:
      "Cartographie de ce qui se dit sur vous et votre marché. Clusters sémantiques, poches de croissance, analyse concurrentielle approfondie.",
    price: "990 €",
    delay: "1-2 semaines",
    livrables: ["Graphe sémantique", "Mots-clés classés", "CSV structurés"],
    slug: "audit-e-reputation",
    pourQui:
      "Pour les dirigeants qui veulent savoir ce que le marché dit d'eux.",
  },
  {
    badge: "Cession & Reprise",
    icon: "Building2",
    title: "Audit Cession et Reprise : votre entreprise est-elle prête ?",
    description:
      "Scoring digital sur 5 axes, quick wins de valorisation, estimation chiffrée de l'impact sur le prix de cession. Pour les cédants et les repreneurs.",
    price: "990 €",
    delay: "48-72h",
    livrables: ["Scoring 5 axes", "Top 10 actions", "Estimation gain valorisation"],
    slug: "audit-maturite-cession",
    pourQui:
      "Pour ceux qui préparent une cession ou évaluent une acquisition.",
  },
];


export default function DiagnosticsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://advisia.agency" },
      { "@type": "ListItem", position: 2, name: "Diagnostics & Audits", item: "https://advisia.agency/diagnostics" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-ce que le diagnostic m'engage à travailler avec vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Le rapport vous appartient entièrement. Vous pouvez l'utiliser comme bon vous semble, avec nous ou avec quelqu'un d'autre. Aucun engagement n'est requis.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps ça prend de notre côté ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "30 à 60 minutes pour le call de cadrage, le reste c'est nous. Vous n'avez pas à préparer de dossier particulier.",
        },
      },
      {
        "@type": "Question",
        name: "On n'est pas très avancés digitalement. Est-ce utile quand même ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est même là que l'impact est le plus fort. Plus votre maturité digitale est faible, plus les gains potentiels sont importants. Le diagnostic sert justement à les quantifier.",
        },
      },
    ],
  };

  const pageWaypoints = [
    { x: 50, y: 0 }, { x: 70, y: 0.10 }, { x: 30, y: 0.22 },
    { x: 70, y: 0.38 }, { x: 30, y: 0.55 }, { x: 70, y: 0.72 },
    { x: 30, y: 0.88 }, { x: 50, y: 1.0 },
  ];
  const pageDotFractions = [0, 0.12, 0.25, 0.38, 0.52, 0.65, 0.78, 0.92, 1.0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diagnostics et Audits PME",
    description: "Analysez votre maturité digitale, sécurité, visibilité et potentiel IA en 48-72h. Rapports actionnables, prix fixes, zéro engagement.",
    provider: { "@type": "Organization", name: "Advisia", url: "https://advisia.agency" },
    areaServed: "France",
    serviceType: "Audit et Diagnostic Digital",
    url: "https://advisia.agency/diagnostics",
    offers: { "@type": "Offer", price: "490", priceCurrency: "EUR", description: "Diagnostic Digital & IA" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="relative" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <VerticalFlowLine waypoints={pageWaypoints} dotFractions={pageDotFractions} />
        {/* HERO */}
        <section
          className="w-full overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)" }}
        >
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex flex-col justify-center gap-6 w-full">
              <BulletHeadline as="p">Diagnostics & Audits</BulletHeadline>
              <ScanReveal
                text="Avant de construire, on analyse."
                className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
              />
              <SeoH2>
                Diagnostics et audits digitaux pour PME en France : audit SEO,
                audit sécurité, diagnostic maturité IA, audit e-réputation,
                audit de cession-reprise.
              </SeoH2>
              <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Advisia, agence IA pour PME en France, vous livre en 48-72h un état précis de votre situation et les actions prioritaires à mener. Pas de PowerPoint. Un rapport actionnable.
              </p>

              {/* Stats */}
              <div className="flex gap-6 lg:gap-10 flex-wrap pt-2">
                <div>
                  <p className="text-2xl font-bold">48-72h</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Délai de livraison</p>
                </div>
                <div className="border-l pl-6 lg:pl-10" style={{ borderColor: "var(--border)" }}>
                  <p className="text-2xl font-bold">À partir de 490 €</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Prix fixe</p>
                </div>
                <div className="border-l pl-6 lg:pl-10" style={{ borderColor: "var(--border)" }}>
                  <p className="text-2xl font-bold">100% actionnable</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Pas de théorie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIT FLASH BANNER */}
        <section className="py-8 lg:py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div
                className="rounded-xl p-8 flex flex-col sm:flex-row sm:items-center gap-6"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,254,110,0.2)",
                }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar size={20} style={{ color: "#c9fe6e", flexShrink: 0 }} />
                    <h2 className="text-xl lg:text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      Commencez par un Audit Flash — toujours gratuit.
                    </h2>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    30 minutes pour comprendre votre situation, identifier vos priorités et voir comment on peut vous aider. Sans engagement. Sans livrable à payer.
                  </p>
                </div>
                <Link
                  href="/prendre-rendez-vous"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                  style={{ background: "#c9fe6e", color: "#0a0a0f" }}
                >
                  Réserver mon Audit Flash gratuit <ArrowUpRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DIAGNOSTICS CARDS — compact + expand on click */}
        <section className="py-10 lg:py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-4">● Nos diagnostics</div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quel point faible voulez-vous résoudre&nbsp;?
              </h2>
            </ScrollReveal>
            <DiagnosticsGrid diagnostics={diagnostics} />
          </div>
        </section>

        {/* PACKS COMBINÉS */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0D0D14" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-4">● Packs combinés</div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Plusieurs angles à couvrir en même temps&nbsp;?
              </h2>
              <p className="text-base mb-12 max-w-xl" style={{ color: "var(--text-secondary)" }}>
                4 diagnostics combinés, rapport consolidé, roadmap de transformation chiffrée sur 6-12 mois.
              </p>
            </ScrollReveal>

            <DiagnosticsPacks />
          </div>
        </section>

        <PageTestimonial
          testimonials={[
            {
              quote: "Le diagnostic a révélé 5 automatisations qu'on n'avait même pas envisagées. Le ROI du premier quick win a remboursé le diagnostic en 2 semaines.",
              author: "Antoine B., DAF",
              company: "Groupe immobilier (80 salariés)",
            },
            {
              quote: "On pensait être à jour. Le rapport nous a montré qu'on avait 3 ans de retard sur nos concurrents. Ça pique mais c'est exactement ce qu'il fallait entendre.",
              author: "Claire V., Directrice générale",
              company: "Réseau de cliniques vétérinaires",
            },
          ]}
        />

        {/* APRÈS LE DIAGNOSTIC */}
        <section className="py-10 lg:py-14">
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h2
                  className="text-2xl lg:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Et après le diagnostic&nbsp;?
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Le rapport vous appartient. Si vous voulez aller plus loin, voici ce qu&apos;on peut faire ensemble.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Automatiser", desc: "On déploie les automatisations identifiées dans le diagnostic.", href: "/services/automatisations-ia" },
                  { title: "Construire", desc: "On crée le site, l'app ou le dashboard dont vous avez besoin.", href: "/services/agence-web" },
                  { title: "Voir les tarifs", desc: "Toutes nos offres avec prix et délais affichés.", href: "/tarifs" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9fe6e]"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#c9fe6e] transition-colors" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                    <p className="text-sm flex-1" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                    <span className="mt-4 text-xs font-mono uppercase tracking-wider group-hover:text-[#c9fe6e] transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Découvrir →
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <FAQCenter
          title="Vos questions sur les diagnostics"
          questions={[
            {
              id: "q1",
              question: "Est-ce que le diagnostic m'engage à travailler avec vous ?",
              answer: "Non. Le rapport vous appartient entièrement. Vous pouvez l'utiliser comme bon vous semble, avec nous ou avec quelqu'un d'autre. Aucun engagement n'est requis.",
            },
            {
              id: "q2",
              question: "Combien de temps ça prend de notre côté ?",
              answer: "30 à 60 minutes pour le call de cadrage, le reste c'est nous. Vous n'avez pas à préparer de dossier particulier.",
            },
            {
              id: "q3",
              question: "On n'est pas très avancés digitalement. Est-ce utile quand même ?",
              answer: "C'est même là que l'impact est le plus fort. Plus votre maturité digitale est faible, plus les gains potentiels sont importants. Le diagnostic sert justement à les quantifier.",
            },
          ]}
        />
        {/* CTA FINALE */}
        <section
          className="py-10 lg:py-16 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x max-w-2xl mx-auto">
            <ScrollReveal>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Pas sûr par où commencer&nbsp;?
              </h2>
              <p className="mb-8 text-lg" style={{ color: "var(--text-secondary)" }}>
                On fait le point ensemble en 30 minutes. Gratuit, sans engagement.
              </p>
              <Link
                href="/prendre-rendez-vous"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                style={{ background: "#c9fe6e", color: "#0a0a0f" }}
              >
                Réserver mon appel gratuit <ArrowUpRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <SectionCTAForm />

        <SeoSiloSection content={seoSiloDiagnostics} />

        <SeoFooterText
          text="Advisia réalise des diagnostics digitaux pour les PME françaises. Audit SEO, audit sécurité, diagnostic IA, audit e-réputation : des rapports actionnables livrés en 48-72h à prix fixe. Avant d'investir, sachez où vous en êtes."
        />
      </main>
      <Footer />
    </>
  );
}
