import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import FAQFloatingButton from "@/components/faq-floating-button";
import {
  RiCornerDownRightLine,
  RiSearchEyeFill,
  RiDraftFill,
  RiPaletteFill,
  RiTestTubeFill,
  RiCursorFill,
  RiUserSearchFill,
  RiFlowChart,
  RiFlagFill,
  RiSettings3Fill,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/ui/tracked-link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import SketchReveal from "@/components/hero-animations/SketchReveal";
import ServiceCards from "@/components/ui/sections/service-cards";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import MidPageCTA from "@/components/ui/sections/mid-page-cta";
import PageTestimonial from "@/components/page-testimonial";
import DesignExpertiseGrid from "@/components/ui/sections/design-expertise-grid";

export const metadata = {
  title: "Design d'Interface et UX · Agence Advisia",
  description:
    "Parcours utilisateurs, maquettes Figma, tests UX : on conçoit des interfaces qui convertissent. De l'idée au prototype en 3 semaines.",
  keywords: [
    "agence design interface UX UI",
    "design interface application",
    "UX design PME",
    "maquettes Figma agence",
  ],
  alternates: {
    canonical: "https://advisia.agency/services/product-design",
  },
  openGraph: {
    title: "Design d'Interface et UX · Agence Advisia",
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
        {/* 1. Hero */}
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex flex-col justify-center gap-6 w-full">
              <BulletHeadline as="p">Design d&apos;Interface</BulletHeadline>
              <SketchReveal
                text="Des interfaces que vos utilisateurs comprennent. Du premier clic."
                className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
              />

                <p className="max-w-xl text-muted-foreground">
                  UI/UX Design centré sur la conversion. On ne fait pas du joli
                  pour faire du joli — on conçoit des parcours qui transforment
                  vos visiteurs en clients.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <TrackedLink href="/contact?besoin=product-design" trackingLabel="analyser_besoin" trackingPage="product-design">
                      Analyser mon besoin — gratuit <RiCornerDownRightLine />
                    </TrackedLink>
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
        </section>

        {/* 2. Logos confiance */}
        <LogosConfiance />

        {/* 4. Contenu spécifique — Expertise Grid */}
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
              title: "Parcours d'utilisation & Maquettes fonctionnelles",
              description:
                "Visualisation claire des parcours et priorisation des interactions clés.",
              illustration:
                "/services/product-design/ux-ui-user-flow-wireframe.svg",
              illustrationAlt: "Parcours d'utilisation & Maquettes fonctionnelles",
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

        {/* 6. Méthode */}
        <ServiceCards
          label="● Notre approche"
          heading="Du problème utilisateur à l'interface finale."
          cards={[
            {
              icon: <RiSearchEyeFill size={24} />,
              title: "Analyse & Audit",
              description:
                "Analyse de l'existant, interviews utilisateurs, benchmark concurrentiel. On comprend avant de dessiner.",
              number: "01",
            },
            {
              icon: <RiDraftFill size={24} />,
              title: "Maquettes fonctionnelles & Prototypage",
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
              title: "Tests & Ajustements",
              description:
                "Tests utilisateurs, A/B testing, analytics. On mesure et on améliore en continu.",
              number: "04",
            },
          ]}
        />

        {/* 7. NOS OFFRES + PROCHAINES ÉTAPES */}
        <section
          className="py-10 lg:py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <p className="section-label mb-8">● Nos offres design</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Audit UX", price: "À partir de 990 €", href: "/contact?besoin=product-design" },
                { title: "Refonte interface complète", price: "Sur devis", href: "/contact?besoin=product-design" },
              ].map((offer, i) => (
                <a
                  key={i}
                  href={offer.href}
                  className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] hover:border-[#c9fe6e]"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <h3 className="font-bold text-white">{offer.title}</h3>
                  <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>{offer.price}</p>
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
              <Link href="/projets" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:border-[#c9fe6e] hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                Voir nos réalisations →
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Témoignages */}
        <PageTestimonial
          testimonials={[
            {
              quote: "Ils ont compris notre métier en une heure de call. Pas besoin de tout réexpliquer à chaque étape.",
              author: "CEO",
              company: "Bring",
              detail: "Startup logistique",
            },
            {
              quote: "On avait un outil interne que personne n'utilisait. Advisia l'a repensé avec nos équipes, et maintenant c'est le premier truc qu'on ouvre le matin.",
              author: "Pauline G., Responsable opérations",
              company: "SaaS B2B (25 salariés)",
            },
          ]}
        />

        {/* 9. MidPageCTA */}
        <MidPageCTA
          title="Votre interface est peu utilisée ou mal comprise ?"
          subtitle="C'est un problème de design, pas de technologie."
          buttonText="En parler avec un expert"
        />

        {/* 11. FAQ */}
        <div id="faq">
          <FAQCenter title={"On répond à vos questions"} questions={questions} />
        </div>

        {/* 12. Formulaire contact */}
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
      <FAQFloatingButton />
    </>
  );
}
