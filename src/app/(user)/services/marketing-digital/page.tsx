import React from "react";
import Footer from "@/components/footer";
import FAQFloatingButton from "@/components/faq-floating-button";
import {
  CornerDownRight,
  Compass,
  Rocket,
  LineChart,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/ui/tracked-link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import GraphReveal from "@/components/hero-animations/GraphReveal";
import Steps1 from "@/components/ui/sections/steps-1";
import FAQCenter from "@/components/ui/sections/faq-center";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import MidPageCTA from "@/components/ui/sections/mid-page-cta";
import PageTestimonial from "@/components/page-testimonial";
import OffresMarketingGrid from "./offres-marketing-grid";
import LeviersAccordion from "@/components/services/marketing-digital/leviers-accordion";
import SeoFooterText from "@/components/seo-footer-text";
import SeoH2 from "@/components/seo-h2";
import ResourceCTA from "@/components/lead-magnets/resource-cta";

export const metadata = {
  title: "Marketing Digital & SEO pour PME | Agence Advisia",
  description:
    "SEO, Google Ads, Social Ads : on génère du trafic et des demandes clients pour les PME. ROI mesuré, budget optimisé. À partir de 500€/mois.",
  keywords: [
    "agence marketing digital PME",
    "agence SEO PME",
    "Google Ads PME",
    "acquisition digitale entreprise",
  ],
  alternates: {
    canonical: "https://advisia.agency/services/marketing-digital",
  },
  openGraph: {
    title: "Marketing Digital & SEO pour PME | Agence Advisia",
    description:
      "SEO, Google Ads, Social Ads : on génère du trafic et des demandes clients pour les PME. ROI mesuré, budget optimisé. À partir de 500€/mois.",
    url: "https://advisia.agency/services/marketing-digital",
    siteName: "Advisia",
    type: "website",
  },
};

const SERVICE_WAYPOINTS = [
  { x: 50, y: 0 },
  { x: 70, y: 0.12 },
  { x: 30, y: 0.30 },
  { x: 70, y: 0.50 },
  { x: 30, y: 0.70 },
  { x: 50, y: 1.0 },
];

const SERVICE_DOT_FRACTIONS = [0, 0.15, 0.32, 0.52, 0.72, 0.90, 1.0];

export default function MarketingDigital() {
  const questions = [
    {
      id: "q1",
      question: "Combien de temps pour voir des résultats en SEO ?",
      answer:
        "Le SEO est un investissement moyen/long terme. Premiers résultats en 2-3 mois, résultats significatifs en 6 mois. Le SEA produit des résultats dès le premier jour.",
    },
    {
      id: "q2",
      question: "Quel budget prévoir pour les campagnes Ads ?",
      answer:
        "Ça dépend de votre marché et vos objectifs. On travaille avec des budgets à partir de 500€/mois. L'important c'est le ROI, pas le budget.",
    },
    {
      id: "q3",
      question: "Vous gérez quelles plateformes ?",
      answer:
        "Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, TikTok Ads. On vous conseille les plateformes les plus pertinentes pour votre cible.",
    },
    {
      id: "q4",
      question: "Comment mesurez-vous les résultats ?",
      answer:
        "Dashboard en temps réel avec vos KPIs : trafic, leads, coût par lead, ROI. Call mensuel pour analyser et ajuster.",
    },
    {
      id: "q5",
      question: "Quelle différence entre SEO et SEA ?",
      answer:
        "Le SEO c'est le référencement naturel (gratuit, long terme). Le SEA c'est la publicité payante (résultats immédiats, tant que vous payez). Idéalement, on combine les deux.",
    },
  ];

  const processSteps = [
    {
      title: "Audit & Stratégie",
      subtitle:
        "Analyse de votre marché, vos concurrents, votre positionnement actuel.",
      icon: <Compass size={40} />,
    },
    {
      title: "Lancement",
      subtitle:
        "Mise en place des campagnes, tracking, attribution.",
      icon: <Rocket size={40} />,
    },
    {
      title: "Optimisation",
      subtitle:
        "A/B tests, ajustement budgets, amélioration continue chaque semaine.",
      icon: <LineChart size={40} />,
    },
    {
      title: "Reporting",
      subtitle:
        "Dashboard en temps réel, call mensuel, recommandations actionnables.",
      icon: <BarChart3 size={40} />,
    },
  ];

  return (
    <>
      <main className="relative">
        <VerticalFlowLine waypoints={SERVICE_WAYPOINTS} dotFractions={SERVICE_DOT_FRACTIONS} />
        {/* 1. Hero — layout 60/40 */}
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="relative container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 w-full">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left 60% */}
                <div className="flex flex-col gap-6 lg:w-[60%]">
                  <BulletHeadline as="p">Marketing Digital</BulletHeadline>
                  <GraphReveal
                    text="Plus de trafic. Plus de demandes clients. Moins de budget gaspillé."
                    className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
                  />
                  <SeoH2>
                    Agence marketing digital pour PME en France : référencement
                    SEO, Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads et
                    stratégie de contenu (GEO).
                  </SeoH2>
                  <p className="max-w-xl text-muted-foreground">
                    SEO, Google Ads, Meta Ads, LinkedIn Ads : on met en place
                    votre acquisition digitale et on l&apos;optimise chaque
                    semaine, data à l&apos;appui.
                  </p>
                  <Button size="lg" asChild className="w-max">
                    <TrackedLink href="/contact?besoin=marketing-digital" trackingLabel="analyser_besoin" trackingPage="marketing-digital">
                      Analyser mon besoin — gratuit <CornerDownRight />
                    </TrackedLink>
                  </Button>
                </div>

                {/* Right 40% — small KPI cards */}
                <div className="flex flex-row lg:flex-col gap-3 lg:w-[40%] lg:pt-4 flex-wrap items-start lg:items-end">
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>&times;3</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>ROI moyen sur les campagnes</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>+150%</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Trafic organique en 6 mois</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>-40%</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Coût par lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Logos confiance */}
        <LogosConfiance />

        {/* 3. Leviers accordion (4A) */}
        <LeviersAccordion />

        {/* 4. Méthode */}
        <Steps1
          title="Notre méthode"
          steps={processSteps}
        />

        {/* 5. NOS OFFRES */}
        <section
          className="py-10 lg:py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <p className="section-label mb-8">● Nos offres marketing</p>
            <OffresMarketingGrid />
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/tarifs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:border-[#c9fe6e] hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                Voir tous nos tarifs →
              </a>
              <a href="/diagnostics" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:border-[#c9fe6e] hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                Faire un diagnostic →
              </a>
            </div>
          </div>
        </section>

        {/* 6. Témoignages */}
        <PageTestimonial
          testimonials={[
            {
              quote: "On dépensait 2000 € par mois en Google Ads sans savoir ce qui marchait. En 3 semaines ils ont restructuré nos campagnes et on a divisé notre coût par lead par 2.",
              author: "Marc D., Directeur commercial",
              company: "PME industrielle (35 salariés)",
            },
            {
              quote: "On est passés de la page 4 à la page 1 sur nos mots-clés principaux en 4 mois. Et ça tient.",
              author: "Julie L., Fondatrice",
              company: "E-commerce mode éthique",
            },
          ]}
        />

        {/* 7. MidPageCTA */}
        <MidPageCTA
          title="Vous investissez en pub sans savoir ce que ça rapporte vraiment ?"
          subtitle="On audite ça."
          buttonText="Demander un audit gratuit"
        />

        {/* Ressource gratuite — Lead magnet SEO local */}
        <section className="py-10 lg:py-16 global-padding-x">
          <div className="max-w-[1400px] mx-auto">
            <ResourceCTA slug="checklist-seo-local" variant="banner" />
          </div>
        </section>

        {/* 8. FAQ */}
        <div id="faq">
          <FAQCenter title={"On répond à vos questions"} questions={questions} />
        </div>

        {/* 9. Formulaire contact */}
        <SectionCTAForm
          title={
            <>
              Prêts à attirer plus de{" "}
              <span className="text-nowrap text-highlight">clients ?</span>
            </>
          }
        />

        <SeoFooterText
          text="Advisia gère les campagnes digitales des PME françaises : SEO, Google Ads, Meta Ads, LinkedIn Ads, stratégie de contenu et GEO. On pilote vos leviers d'acquisition avec reporting transparent chaque semaine. L'objectif : des leads qualifiés au bon coût, pas des impressions."
        />
      </main>
      <Footer />
      <FAQFloatingButton />
    </>
  );
}
