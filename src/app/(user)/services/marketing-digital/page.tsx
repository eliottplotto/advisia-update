import React from "react";
import Footer from "@/components/footer";
import FAQFloatingButton from "@/components/faq-floating-button";
import {
  RiCornerDownRightLine,
  RiSearchLine,
  RiGoogleFill,
  RiMegaphoneFill,
  RiFileTextFill,
  RiCompass3Fill,
  RiRocketFill,
  RiLineChartFill,
  RiBarChartBoxFill,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/ui/tracked-link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import GraphReveal from "@/components/hero-animations/GraphReveal";
import ServiceCards from "@/components/ui/sections/service-cards";
import Steps1 from "@/components/ui/sections/steps-1";
import FAQCenter from "@/components/ui/sections/faq-center";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import MidPageCTA from "@/components/ui/sections/mid-page-cta";
import PageTestimonial from "@/components/page-testimonial";

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
      icon: <RiCompass3Fill size={40} />,
    },
    {
      title: "Lancement",
      subtitle:
        "Mise en place des campagnes, tracking, attribution.",
      icon: <RiRocketFill size={40} />,
    },
    {
      title: "Optimisation",
      subtitle:
        "A/B tests, ajustement budgets, amélioration continue chaque semaine.",
      icon: <RiLineChartFill size={40} />,
    },
    {
      title: "Reporting",
      subtitle:
        "Dashboard en temps réel, call mensuel, recommandations actionnables.",
      icon: <RiBarChartBoxFill size={40} />,
    },
  ];

  return (
    <>
      <main className="relative">
        <VerticalFlowLine waypoints={SERVICE_WAYPOINTS} dotFractions={SERVICE_DOT_FRACTIONS} />
        {/* 1. Hero */}
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex flex-col justify-center gap-6 w-full">
              <BulletHeadline as="p">Marketing Digital</BulletHeadline>
              <GraphReveal
                text="Plus de trafic. Plus de demandes clients. Moins de budget gaspillé."
                className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
              />

                <p className="max-w-xl text-muted-foreground">
                  SEO, Google Ads, Meta Ads, LinkedIn Ads : on met en place
                  votre acquisition digitale et on l&apos;optimise chaque
                  semaine, data à l&apos;appui.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <TrackedLink href="/contact?besoin=marketing-digital" trackingLabel="analyser_besoin" trackingPage="marketing-digital">
                      Analyser mon besoin — gratuit <RiCornerDownRightLine />
                    </TrackedLink>
                  </Button>
                  <div className="flex gap-4 lg:gap-8 wrap">
                    <div className="w-max">
                      <p className="text-2xl">&times;3</p>
                      <p className="text-sm ">ROI moyen sur les campagnes</p>
                    </div>
                    <div className="w-max border-l pl-4 lg:pl-8">
                      <p className="text-2xl">+150%</p>
                      <p className="text-sm ">Trafic organique en 6 mois</p>
                    </div>
                    <div className="hidden sm:block w-max border-l pl-4 lg:pl-8">
                      <p className="text-2xl">-40%</p>
                      <p className="text-sm ">Coût par lead</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* 2. Logos confiance */}
        <LogosConfiance />

        {/* 4. Contenu spécifique */}
        <ServiceCards
          label="● Nos leviers"
          heading="4 leviers pour votre acquisition."
          cards={[
            {
              icon: <RiSearchLine size={24} />,
              title: "SEO",
              description:
                "Audit technique, stratégie de contenu, netlinking. On vous fait monter dans Google durablement, pas avec des hacks.",
              number: "01",
            },
            {
              icon: <RiGoogleFill size={24} />,
              title: "Google Ads (SEA)",
              description:
                "Campagnes sur Google : recherche, produits, visibilité maximale. Budget optimisé, reporting transparent.",
              number: "02",
            },
            {
              icon: <RiMegaphoneFill size={24} />,
              title: "Social Ads",
              description:
                "Meta, LinkedIn, TikTok Ads. Ciblage précis, visuels qui convertissent, montée en puissance progressive.",
              number: "03",
            },
            {
              icon: <RiFileTextFill size={24} />,
              title: "Stratégie de contenu",
              description:
                "Calendriers éditoriaux, articles SEO, posts LinkedIn, newsletters. Du contenu qui attire et qui convertit.",
              number: "04",
            },
          ]}
        />

        {/* 6. Méthode */}
        <Steps1
          title="Notre méthode"
          steps={processSteps}
        />

        {/* 7. NOS OFFRES + PROCHAINES ÉTAPES */}
        <section
          className="py-10 lg:py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <p className="section-label mb-8">● Nos offres marketing</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Audit Visibilité", price: "490 €", delay: "48–72h", href: "/tarifs?category=diagnostics&offre=audit-visibilite" },
                { title: "Accompagnement Marketing", price: "Sur devis", delay: "", href: "/contact?besoin=marketing-digital" },
              ].map((offer, i) => (
                <a
                  key={i}
                  href={offer.href}
                  className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] hover:border-[#c9fe6e]"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <h3 className="font-bold text-white">{offer.title}</h3>
                  <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>{offer.price}</p>
                  {offer.delay && <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{offer.delay}</p>}
                  <div className="flex justify-end mt-auto pt-2">
                    <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>Voir le détail →</span>
                  </div>
                </a>
              ))}
            </div>
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

        {/* 8. Témoignages */}
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

        {/* 9. MidPageCTA */}
        <MidPageCTA
          title="Vous investissez en pub sans savoir ce que ça rapporte vraiment ?"
          subtitle="On audite ça."
          buttonText="Demander un audit gratuit"
        />

        {/* 11. FAQ */}
        <div id="faq">
          <FAQCenter title={"On répond à vos questions"} questions={questions} />
        </div>

        {/* 12. Formulaire contact */}
        <SectionCTAForm
          title={
            <>
              Prêts à attirer plus de{" "}
              <span className="text-nowrap text-highlight">clients ?</span>
            </>
          }
        />
      </main>
      <Footer />
      <FAQFloatingButton />
    </>
  );
}
