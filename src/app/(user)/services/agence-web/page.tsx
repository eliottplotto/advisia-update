import React from "react";
import Footer from "@/components/footer";
import FAQFloatingButton from "@/components/faq-floating-button";
import {
  RiCornerDownRightLine,
  RiCompass3Fill,
  RiPaletteFill,
  RiHandHeartFill,
  RiCodeBoxFill,
  RiWindow2Fill,
  RiShoppingCart2Fill,
  RiDashboardFill,
  RiBuilding2Fill,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/ui/tracked-link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import CodeCompile from "@/components/hero-animations/CodeCompile";
import ServiceCards from "@/components/ui/sections/service-cards";
import TechStack from "@/components/services/agence-web/tech-stack";
import OffresWebGrid from "./offres-web-grid";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import MidPageCTA from "@/components/ui/sections/mid-page-cta";
import PageTestimonial from "@/components/page-testimonial";

export const metadata = {
  title: "Création de Site Web Professionnel · Agence Advisia",
  description:
    "Sites vitrines, e-commerce et applications sur mesure. À partir de 1 000€. Livré en 4 à 8 semaines. Modifiable par vos équipes sans développeur.",
  keywords: [
    "création site web professionnel",
    "agence création site internet",
    "développeur web PME",
    "site e-commerce sur mesure",
  ],
  alternates: {
    canonical: "https://advisia.agency/services/agence-web",
  },
  openGraph: {
    title: "Création de Site Web Professionnel · Agence Advisia",
    description:
      "Sites vitrines, e-commerce et applications sur mesure. À partir de 1 000€. Livré en 4 à 8 semaines. Modifiable par vos équipes sans développeur.",
    url: "https://advisia.agency/services/agence-web",
    siteName: "Advisia",
    type: "website",
  },
};

const SERVICE_WAYPOINTS = [
  { x: 50, y: 0 },
  { x: 70, y: 0.10 },
  { x: 30, y: 0.22 },
  { x: 70, y: 0.35 },
  { x: 30, y: 0.48 },
  { x: 70, y: 0.62 },
  { x: 30, y: 0.78 },
  { x: 50, y: 1.0 },
];

const SERVICE_DOT_FRACTIONS = [0, 0.12, 0.25, 0.38, 0.52, 0.65, 0.78, 0.92, 1.0];

export default function SiteWeb() {
  const processSteps = [
    {
      title: "Cadrage",
      subtitle:
        "On comprend votre besoin, votre cible, vos contraintes.",
      icon: <RiCompass3Fill size={40} />,
    },
    {
      title: "Design",
      subtitle:
        "Maquettes Figma, parcours utilisateur, validation avant le code.",
      icon: <RiPaletteFill size={40} />,
    },
    {
      title: "Développement",
      subtitle:
        "Sprints de 2 semaines, démos régulières, code propre.",
      icon: <RiCodeBoxFill size={40} />,
    },
    {
      title: "Livraison",
      subtitle:
        "Mise en service, formation, documentation, support.",
      icon: <RiHandHeartFill size={40} />,
    },
  ];

  const questions = [
    {
      id: "q1",
      question: "Combien coûte la création d'un site internet ?",
      answer:
        "Le prix dépend de plusieurs facteurs : le type de site (vitrine, e-commerce, sur-mesure), le nombre de pages, les fonctionnalités attendues ou encore le niveau de personnalisation. Chez Advisia, les projets démarrent autour de 1 000€ pour un site vitrine one-page. Un devis précis est toujours réalisé avant de démarrer.",
    },
    {
      id: "q2",
      question: "Quel est le délai pour créer un site web professionnel ?",
      answer:
        "En moyenne, un projet prend entre 4 et 8 semaines. Cela dépend de la complexité, du niveau de contenu fourni et de la réactivité des échanges. Nous établissons ensemble un calendrier réaliste dès le départ, avec des étapes claires.",
    },
    {
      id: "q3",
      question: "Pourquoi passer par une agence web ?",
      answer:
        "Une agence vous apporte une vision stratégique, un accompagnement global, et une exécution professionnelle. Vous gagnez du temps, évitez les erreurs coûteuses, et obtenez un résultat sur-mesure, fiable et évolutif.",
    },
    {
      id: "q4",
      question:
        "Quelle est la différence entre un site vitrine et un site e-commerce ?",
      answer:
        "Un site vitrine présente votre activité, vos services et vos coordonnées. Il sert principalement à informer et à générer des prises de contact. Un site e-commerce, lui, permet la vente directe en ligne, avec un panier, des fiches produits et un système de paiement sécurisé.",
    },
    {
      id: "q5",
      question: "Puis-je modifier moi-même le contenu de mon site ?",
      answer:
        "Oui, bien sûr. Tous nos sites sont livrés avec un CMS adapté à votre niveau de compétence. Vous pouvez facilement modifier textes, images, créer des pages ou ajouter des articles. Une formation est toujours prévue à la fin du projet.",
    },
    {
      id: "q6",
      question: "Comment assurer un bon référencement naturel ?",
      answer:
        "Le référencement naturel repose sur trois piliers : la qualité du contenu, la performance technique du site, et la popularité (liens externes). Dès la conception, nous optimisons votre site pour Google : structure logique, balises sémantiques, chargement rapide, responsive design… Et nous vous donnons les bonnes pratiques pour maintenir et améliorer votre positionnement.",
    },
    {
      id: "q7",
      question: "Est-ce que vous proposez la maintenance de site ?",
      answer:
        "Oui. Nous proposons des offres de maintenance adaptées à vos besoins : mises à jour, sauvegardes, surveillance de sécurité, accompagnement pour faire évoluer le site. Vous choisissez le niveau d'accompagnement selon vos attentes.",
    },
    {
      id: "q8",
      question: "Pourquoi choisir Advisia pour créer mon site web ?",
      answer:
        "Parce qu'on va à l'essentiel : un site efficace, bien conçu, pensé pour durer. Notre équipe est réactive, impliquée et humaine. On construit des systèmes solides, pas juste de jolis sites. Et les résultats se voient dès les premières semaines.",
    },
  ];

  return (
    <>
      <main className="relative">
        <VerticalFlowLine waypoints={SERVICE_WAYPOINTS} dotFractions={SERVICE_DOT_FRACTIONS} />
        {/* 1. Hero */}
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="relative container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex flex-col justify-center gap-6 w-full">
              <div className="flex items-center gap-4 flex-wrap">
                <BulletHeadline as="p">Développement Web</BulletHeadline>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  À partir de <span style={{ color: "#c9fe6e" }}>690 €</span>
                </span>
              </div>
              <CodeCompile
                text="Des sites qui chargent en moins d'une seconde. Et qui convertissent."
                className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
              />

                <p className="max-w-xl text-muted-foreground">
                  Sites vitrines, boutiques en ligne, apps métier : on construit
                  des outils web qui vont vite, qui durent, et que vous pouvez
                  gérer vous-même.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <TrackedLink href="/contact?besoin=site-web" trackingLabel="analyser_besoin" trackingPage="agence-web">
                      Analyser mon besoin — gratuit <RiCornerDownRightLine />
                    </TrackedLink>
                  </Button>
                  <div className="flex gap-4 lg:gap-8 wrap">
                    <div className="w-max">
                      <p className="text-2xl">+10</p>
                      <p className="text-sm ">Projets réalisés</p>
                    </div>
                    <div className="w-max border-l pl-4 lg:pl-8">
                      <p className="text-2xl">98/100</p>
                      <p className="text-sm ">Score Lighthouse</p>
                    </div>
                    <div className="hidden sm:block w-max border-l pl-4 lg:pl-8">
                      <p className="text-2xl">&lt;1s</p>
                      <p className="text-sm ">Temps de chargement</p>
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
          label="● Ce qu'on construit"
          heading="Du site vitrine au SaaS complet."
          cards={[
            {
              icon: <RiWindow2Fill size={24} />,
              title: "Sites vitrines",
              description:
                "Votre vitrine en ligne, optimisée SEO, rapide, responsive. De la landing page au site corporate multi-pages.",
              number: "01",
            },
            {
              icon: <RiShoppingCart2Fill size={24} />,
              title: "E-commerce",
              description:
                "Shopify, WooCommerce ou sur-mesure. Catalogues produits, paiement, gestion de stock, analytics intégrés.",
              number: "02",
            },
            {
              icon: <RiDashboardFill size={24} />,
              title: "Applications SaaS",
              description:
                "Dashboards, portails clients, outils métier. Architecture évolutive, accès sécurisé, données synchronisées en temps réel.",
              number: "03",
            },
            {
              icon: <RiBuilding2Fill size={24} />,
              title: "Intranets & outils internes",
              description:
                "Centraliser vos données, piloter vos équipes, automatiser vos reportings. Comme celui qu'on a construit pour LCT.",
              number: "04",
            },
          ]}
        />

        <TechStack />

        {/* 6. Méthode */}
        <Steps1
          title="Notre méthode de développement"
          steps={processSteps}
        />

        {/* 7. NOS OFFRES + PROCHAINES ÉTAPES */}
        <section
          className="py-10 lg:py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <p className="section-label mb-8">● Nos offres web</p>
            <OffresWebGrid />
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/tarifs?category=web" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:border-[#c9fe6e] hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                Voir tous nos tarifs web →
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
              quote: "Advisia a livré notre site en 5 semaines. Rapide, propre, et on peut tout modifier nous-mêmes.",
              author: "Fondateur",
              company: "Mes Halles",
              detail: "E-commerce alimentaire",
            },
            {
              quote: "Notre ancien site mettait 8 secondes à charger. Le nouveau charge en moins d'une seconde et on a triplé nos demandes de contact en 2 mois.",
              author: "Thomas R., Gérant",
              company: "Cabinet de conseil RH (15 salariés)",
            },
          ]}
        />

        {/* 9. MidPageCTA */}
        <MidPageCTA
          title="Vous avez un projet web en tête ?"
          subtitle="On vous chiffre en 48h."
          buttonText="Demander une estimation"
        />

        {/* 11. FAQ */}
        <div id="faq">
          <FAQCenter title={"On répond à vos questions"} questions={questions} />
        </div>

        {/* 12. Formulaire contact */}
        <SectionCTAForm
          title={
            <>
              Prêts à lancer votre{" "}
              <span className="text-nowrap text-highlight">projet web ?</span>
            </>
          }
        />
      </main>
      <Footer />
      <FAQFloatingButton />
    </>
  );
}
