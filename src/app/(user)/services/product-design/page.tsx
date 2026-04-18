import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import FAQFloatingButton from "@/components/faq-floating-button";
import {
  CornerDownRight,
  SearchCheck,
  PenLine,
  Palette,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/ui/tracked-link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import SketchReveal from "@/components/hero-animations/SketchReveal";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import MidPageCTA from "@/components/ui/sections/mid-page-cta";
import PageTestimonial from "@/components/page-testimonial";
import ExpertiseCarousel from "@/components/services/product-design/expertise-carousel";
import SeoFooterText from "@/components/seo-footer-text";
import OffresDesignGrid from "./offres-design-grid";
import SeoH2 from "@/components/seo-h2";

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

const methodSteps = [
  {
    number: "01",
    title: "Analyse & Audit",
    description:
      "Analyse de l'existant, interviews utilisateurs, benchmark concurrentiel. On comprend avant de dessiner.",
    icon: <SearchCheck size={20} />,
  },
  {
    number: "02",
    title: "Maquettes fonctionnelles & Prototypage",
    description:
      "Architecture de l'information, wireframes basse fidélité, prototypes interactifs Figma.",
    icon: <PenLine size={20} />,
  },
  {
    number: "03",
    title: "UI Design",
    description:
      "Design system cohérent, composants réutilisables, responsive. Chaque pixel a une raison d'être.",
    icon: <Palette size={20} />,
  },
  {
    number: "04",
    title: "Tests & Ajustements",
    description:
      "Tests utilisateurs, A/B testing, analytics. On mesure et on améliore en continu.",
    icon: <FlaskConical size={20} />,
  },
];

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
        {/* 1. Hero — layout 60/40 */}
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="relative container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 w-full">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left 60% */}
                <div className="flex flex-col gap-6 lg:w-[60%]">
                  <BulletHeadline as="p">Design d&apos;Interface</BulletHeadline>
                  <SketchReveal
                    text="Des interfaces que vos utilisateurs comprennent. Du premier clic."
                    className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
                  />
                  <SeoH2>
                    Agence UX/UI design pour PME et startups françaises : audit
                    UX, maquettes Figma, design system, prototypage et tests
                    utilisateurs.
                  </SeoH2>
                  <p className="max-w-xl text-muted-foreground">
                    UI/UX Design centré sur la conversion. On ne fait pas du joli
                    pour faire du joli — on conçoit des parcours qui transforment
                    vos visiteurs en clients.
                  </p>
                  <Button size="lg" asChild className="w-max">
                    <TrackedLink href="/contact?besoin=product-design" trackingLabel="analyser_besoin" trackingPage="product-design">
                      Analyser mon besoin — gratuit <CornerDownRight />
                    </TrackedLink>
                  </Button>
                </div>

                {/* Right 40% — small KPI cards */}
                <div className="flex flex-row lg:flex-col gap-3 lg:w-[40%] lg:pt-4 flex-wrap items-start lg:items-end">
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>+10</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Interfaces designées</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>&times;2</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Taux de conversion moyen</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>100%</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Adoption utilisateur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Logos confiance */}
        <LogosConfiance />

        {/* 3. Expertise carousel (3A) */}
        <ExpertiseCarousel />

        {/* 4. Méthode — 2 colonnes alternées (3B) */}
        <section
          className="relative z-[2] py-12 md:py-16 px-4 md:px-8 lg:px-12"
          style={{ background: "transparent" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="section-label mb-6">&#9679; Notre approche</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 max-w-[700px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Du problème utilisateur à l&apos;interface finale.
            </h2>

            <div className="flex flex-col">
              {methodSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={i}>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
                      style={{ padding: "48px 0" }}
                    >
                      {/* Number + title */}
                      <div
                        className={`flex flex-col gap-3 ${isEven ? "md:order-1" : "md:order-2"}`}
                      >
                        <span
                          className="font-mono text-xs font-medium"
                          style={{ color: "#c9fe6e" }}
                        >
                          {step.number}
                        </span>
                        <h3
                          className="text-2xl md:text-3xl font-bold text-white"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <div
                        className={`flex items-center ${isEven ? "md:order-2" : "md:order-1"}`}
                      >
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {i < methodSteps.length - 1 && (
                      <div
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. NOS OFFRES */}
        <section
          className="py-10 lg:py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <p className="section-label mb-8">● Nos offres design</p>
            <OffresDesignGrid />
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

        {/* 6. Témoignages */}
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

        {/* 7. MidPageCTA */}
        <MidPageCTA
          title="Votre interface est peu utilisée ou mal comprise ?"
          subtitle="C'est un problème de design, pas de technologie."
          buttonText="En parler avec un expert"
        />

        {/* 8. FAQ */}
        <div id="faq">
          <FAQCenter title={"On répond à vos questions"} questions={questions} />
        </div>

        {/* 9. Formulaire contact */}
        <SectionCTAForm
          title={
            <>
              Vous avez{" "}
              <span className="text-nowrap text-highlight">un produit</span> à
              concevoir, améliorer ou repenser ?
            </>
          }
        />

        <SeoFooterText
          text="Advisia conçoit des interfaces et expériences utilisateur pour les PME et startups françaises. Recherche utilisateur, maquettes Figma, design system, tests A/B. On design des produits que vos utilisateurs comprennent et adoptent."
        />
      </main>
      <Footer />
      <FAQFloatingButton />
    </>
  );
}
