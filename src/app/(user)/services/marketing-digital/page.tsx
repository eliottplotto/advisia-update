import React from "react";
import Footer from "@/components/footer";
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
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import { RevealText } from "@/components/reveal-text";
import ServiceCards from "@/components/ui/sections/service-cards";
import Steps1 from "@/components/ui/sections/steps-1";
import FAQCenter from "@/components/ui/sections/faq-center";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";

export const metadata = {
  title: "Marketing Digital & SEO pour PME | Agence Advisia",
  description:
    "SEO, Google Ads, Social Ads : on génère du trafic et des leads pour les PME. ROI mesuré, budget optimisé. À partir de 500€/mois.",
  keywords: [
    "agence marketing digital PME",
    "agence SEO PME",
    "Google Ads PME",
    "acquisition digitale entreprise",
  ],
  openGraph: {
    title: "Marketing Digital & SEO pour PME | Agence Advisia",
    description:
      "SEO, Google Ads, Social Ads : on génère du trafic et des leads pour les PME. ROI mesuré, budget optimisé. À partir de 500€/mois.",
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
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex justify-start items-end">
              <div className="flex flex-col justify-end gap-6">
                <BulletHeadline as="p">Marketing Digital</BulletHeadline>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
                  <RevealText>
                    Plus de trafic. Plus de leads. Moins de budget gaspillé.
                  </RevealText>
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  SEO, Google Ads, Meta Ads, LinkedIn Ads : on met en place
                  votre acquisition digitale et on l&apos;optimise chaque
                  semaine, data à l&apos;appui.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <Link href="/prendre-rendez-vous">
                      Demander une estimation <RiCornerDownRightLine />
                    </Link>
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
          </div>
        </section>
        <LogosConfiance />

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
                "Campagnes Search, Shopping, Performance Max. Budget optimisé, reporting transparent.",
              number: "02",
            },
            {
              icon: <RiMegaphoneFill size={24} />,
              title: "Social Ads",
              description:
                "Meta, LinkedIn, TikTok Ads. Ciblage précis, créas qui convertissent, scaling progressif.",
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

        <Steps1
          title="Notre méthode"
          steps={processSteps}
        />

        <FAQCenter title={"On répond à vos questions"} questions={questions} />

        <SectionCTAForm
          title={
            <>
              Prêts à booster votre{" "}
              <span className="text-nowrap text-highlight">acquisition ?</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
