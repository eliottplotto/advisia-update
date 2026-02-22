import React from "react";
import Footer from "@/components/footer";
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
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import { RevealText } from "@/components/reveal-text";
import ServiceCards from "@/components/ui/sections/service-cards";
import TechStack from "@/components/services/agence-web/tech-stack";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";

export const metadata = {
  title: "Création de Site Web Professionnel · Agence Advisia",
  description:
    "Sites vitrines et e-commerce performants, optimisés SEO et accessibles. Conception sur mesure, contenus clairs et mesures d'impact pour convertir durablement.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Création de Site Web Professionnel · Agence Advisia",
    description:
      "Sites vitrines et e-commerce performants, optimisés SEO et accessibles. Conception sur mesure, contenus clairs et mesures d'impact pour convertir durablement.",
    url: "https://advisia.agency",
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
        "Mise en prod, formation, documentation, support.",
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
        <div className="relative z-10">
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="relative container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex justify-start items-end">
              <div className="flex flex-col justify-end gap-6">
                <BulletHeadline as="p">Développement Web</BulletHeadline>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
                  <RevealText>
                    Des sites qui chargent en moins d&apos;une seconde. Et qui convertissent.
                  </RevealText>
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  Sites vitrines, e-commerce, SaaS, intranets : on construit des
                  applications web modernes avec Next.js, React et Supabase.
                  Rapides, maintenables, pensées pour durer.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <Link href="/prendre-rendez-vous">
                      Demander une estimation <RiCornerDownRightLine />
                    </Link>
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
          </div>
        </section>
        <LogosConfiance />

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
                "Dashboards, portails clients, outils métier. Architecture scalable, auth, API, base de données temps réel.",
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

        <Steps1
          title="Notre méthode de développement"
          steps={processSteps}
        />

        <FAQCenter title={"On répond à vos questions"} questions={questions} />
        <SectionCTAForm
          title={
            <>
              Prêts à lancer votre{" "}
              <span className="text-nowrap text-highlight">projet web ?</span>
            </>
          }
        />
        </div>
      </main>
      <Footer />
    </>
  );
}
