import React from "react";
import Footer from "@/components/footer";
import {
  RiCornerDownRightLine,
  RiSearchEyeFill,
  RiDraftFill,
  RiPaletteFill,
  RiTestTubeFill,
  RiWindow2Fill,
  RiDashboardFill,
  RiSmartphoneFill,
  RiLayoutGridFill,
  RiCursorFill,
  RiUserSearchFill,
  RiFlowChart,
  RiFlagFill,
  RiSettings3Fill,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import { RevealText } from "@/components/reveal-text";
import ServiceCards from "@/components/ui/sections/service-cards";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import DesignExpertiseGrid from "@/components/ui/sections/design-expertise-grid";

export const metadata = {
  title: "Product Design & UX/UI · Agence Advisia",
  description:
    "Parcours utilisateurs, maquettes Figma, tests UX : on conçoit des interfaces qui convertissent. De l'idée au prototype en 3 semaines.",
  keywords: [
    "agence product design UX UI",
    "design interface application",
    "UX design PME",
    "maquettes Figma agence",
  ],
  openGraph: {
    title: "Product Design & UX/UI · Agence Advisia",
    description:
      "Parcours utilisateurs, maquettes Figma, tests UX : on conçoit des interfaces qui convertissent. De l'idée au prototype en 3 semaines.",
    url: "https://advisia.agency/services/product-design",
    siteName: "Advisia",
    type: "website",
  },
};

const SERVICE_WAYPOINTS = [
  { x: 50, y: 0 },
  { x: 70, y: 0.12 },
  { x: 30, y: 0.28 },
  { x: 70, y: 0.44 },
  { x: 30, y: 0.60 },
  { x: 70, y: 0.78 },
  { x: 50, y: 1.0 },
];

const SERVICE_DOT_FRACTIONS = [0, 0.14, 0.28, 0.44, 0.60, 0.78, 0.92, 1.0];

export default function ProductDesign() {
  const questions = [
    {
      id: "q1",
      question: "Qu'est-ce que le Product Design ?",
      answer:
        "Le Product Design regroupe toutes les étapes de conception d'un produit digital : de la recherche utilisateur jusqu'au design de l'interface. L'objectif est de créer une solution utile, intuitive et alignée avec vos enjeux business.",
    },
    {
      id: "q2",
      question: "Quelle est la différence entre UX Design et UI Design ?",
      answer:
        "L'UX Design (expérience utilisateur) s'intéresse aux parcours, à la structure et à la logique d'usage. L'UI Design (interface utilisateur) se concentre sur le visuel : boutons, couleurs, typographie… Les deux sont complémentaires.",
    },
    {
      id: "q3",
      question: "Pourquoi investir dans le Product Design ?",
      answer:
        "Un bon design améliore la conversion, réduit les frictions et fidélise les utilisateurs. C'est aussi un gain de temps pour vos équipes techniques, qui partent d'une base claire et validée.",
    },
    {
      id: "q4",
      question:
        "Travaillez-vous avec des startups ou des grandes entreprises ?",
      answer:
        "Les deux. Nous adaptons notre accompagnement à la taille du projet et à votre niveau de maturité produit, que vous lanciez un MVP ou que vous optimisiez une plateforme existante.",
    },
    {
      id: "q5",
      question: "Combien de temps prend un projet de Product Design ?",
      answer:
        "Cela dépend de la complexité du produit. En moyenne, un sprint de design complet (recherche, parcours, maquettes) prend entre 3 et 6 semaines.",
    },
    {
      id: "q6",
      question:
        "Peut-on travailler uniquement sur l'UX ou uniquement sur l'UI ?",
      answer:
        "Oui, c'est possible. Mais nous conseillons toujours une phase d'audit ou d'analyse pour garantir la cohérence globale.",
    },
    {
      id: "q7",
      question:
        "Est-ce que vous testez les maquettes avec de vrais utilisateurs ?",
      answer:
        "Oui. Nous organisons des tests utilisateurs pour valider nos choix avant le développement, ce qui limite les erreurs coûteuses.",
    },
    {
      id: "q8",
      question: "Pourquoi choisir Advisia pour votre design produit ?",
      answer:
        "Parce que nos projets sont pilotés par de vrais experts en UX et Product Design. Pas de raccourcis : on applique des méthodes éprouvées, centrées sur l'utilisateur, pour concevoir des produits clairs, utiles et alignés avec vos objectifs. On challenge les idées, on teste, on améliore. Le tout avec une équipe impliquée, réactive et orientée résultats.",
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
                <BulletHeadline as="p">Product Design</BulletHeadline>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
                  <RevealText>
                    Des interfaces que vos utilisateurs comprennent. Du premier clic.
                  </RevealText>
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  UI/UX Design centré sur la conversion. On ne fait pas du joli
                  pour faire du joli — on conçoit des parcours qui transforment
                  vos visiteurs en clients.
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
                      <p className="text-sm ">Interfaces designées</p>
                    </div>
                    <div className="w-max border-l pl-4 lg:pl-8">
                      <p className="text-2xl">&times;2</p>
                      <p className="text-sm ">Taux de conversion moyen</p>
                    </div>
                    <div className="hidden sm:block w-max border-l pl-4 lg:pl-8">
                      <p className="text-2xl">100%</p>
                      <p className="text-sm ">Adoption utilisateur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LogosConfiance />

        {/* === Expertise Design Grid === */}
        <DesignExpertiseGrid
          label="● Nos expertises"
          heading="Ce qu'on maîtrise en Product Design."
          cards={[
            {
              icon: <RiCursorFill size={22} />,
              title: "UX/UI Design",
              description:
                "Des interfaces pensées pour être simples à comprendre et rapides à utiliser.",
              illustration: "/services/product-design/ux-ui-design.svg",
              illustrationAlt: "UX/UI Design",
            },
            {
              icon: <RiUserSearchFill size={22} />,
              title: "Recherche utilisateur",
              description:
                "Comprendre vos utilisateurs pour concevoir ce dont ils ont vraiment besoin.",
              illustration: "/services/product-design/ux-research.svg",
              illustrationAlt: "Recherche utilisateur",
            },
            {
              icon: <RiFlowChart size={22} />,
              title: "User flows & Wireframes",
              description:
                "Visualisation claire des parcours et priorisation des interactions clés.",
              illustration:
                "/services/product-design/ux-ui-user-flow-wireframe.svg",
              illustrationAlt: "User flows & Wireframes",
            },
            {
              icon: <RiFlagFill size={22} />,
              title: "Prototypage",
              description:
                "Tester vos idées avant d'engager du temps et du budget dans le développement.",
              illustration: "/services/product-design/ux-ui-prototypage.svg",
              illustrationAlt: "Prototypage",
            },
            {
              icon: <RiTestTubeFill size={22} />,
              title: "Tests utilisateurs",
              description:
                "Validez les hypothèses et identifier les vrais irritants pour faire évoluer le produit dans le bon sens.",
              illustration:
                "/services/product-design/ux-ui-test-utilisateur.svg",
              illustrationAlt: "Tests utilisateurs",
            },
            {
              icon: <RiSettings3Fill size={22} />,
              title: "Design System",
              description:
                "Assurer la cohérence, accélérer la production et préparer la croissance de votre produit.",
              illustration:
                "/services/product-design/ux-ui-design-system.svg",
              illustrationAlt: "Design System",
            },
          ]}
        />

        <ServiceCards
          label="● Notre approche"
          heading="Du problème utilisateur à l'interface finale."
          cards={[
            {
              icon: <RiSearchEyeFill size={24} />,
              title: "Research & Audit",
              description:
                "Analyse de l'existant, interviews utilisateurs, benchmark concurrentiel. On comprend avant de dessiner.",
              number: "01",
            },
            {
              icon: <RiDraftFill size={24} />,
              title: "Wireframes & Prototypage",
              description:
                "Architecture de l'information, wireframes basse fidélité, prototypes interactifs Figma.",
              number: "02",
            },
            {
              icon: <RiPaletteFill size={24} />,
              title: "UI Design",
              description:
                "Design system cohérent, composants réutilisables, responsive. Chaque pixel a une raison d'être.",
              number: "03",
            },
            {
              icon: <RiTestTubeFill size={24} />,
              title: "Tests & Itération",
              description:
                "Tests utilisateurs, A/B testing, analytics. On mesure et on améliore en continu.",
              number: "04",
            },
          ]}
        />

        <ServiceCards
          label="● Ce qu'on design"
          heading="Des produits digitaux qui convertissent."
          cards={[
            {
              icon: <RiWindow2Fill size={24} />,
              title: "Sites web & landing pages",
              description:
                "Des pages qui convertissent, pas juste qui sont belles.",
              number: "01",
            },
            {
              icon: <RiDashboardFill size={24} />,
              title: "Applications SaaS",
              description:
                "Dashboards complexes rendus simples. Ergonomie pensée pour l'usage quotidien.",
              number: "02",
            },
            {
              icon: <RiSmartphoneFill size={24} />,
              title: "Applications mobiles",
              description:
                "Design natif iOS/Android ou responsive web app.",
              number: "03",
            },
            {
              icon: <RiLayoutGridFill size={24} />,
              title: "Design systems",
              description:
                "Bibliothèques de composants documentées, scalables, cohérentes.",
              number: "04",
            },
          ]}
        />

        <FAQCenter title={"On répond à vos questions"} questions={questions} />
        <SectionCTAForm
          title={
            <>
              Vous avez{" "}
              <span className="text-nowrap text-highlight">un produit</span> à
              concevoir, améliorer ou repenser ?
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
