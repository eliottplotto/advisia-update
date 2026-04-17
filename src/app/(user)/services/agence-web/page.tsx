import React from "react";
import Footer from "@/components/footer";
import FAQFloatingButton from "@/components/faq-floating-button";
import {
  CornerDownRight,
  Compass,
  Palette,
  HandHeart,
  Code2,
  AppWindow,
  ShoppingCart,
  LayoutDashboard,
  Building2,
} from "lucide-react";
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
import SeoFooterText from "@/components/seo-footer-text";

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
      icon: <Compass size={40} />,
    },
    {
      title: "Design",
      subtitle:
        "Maquettes Figma, parcours utilisateur, validation avant le code.",
      icon: <Palette size={40} />,
    },
    {
      title: "Développement",
      subtitle:
        "Sprints de 2 semaines, démos régulières, code propre.",
      icon: <Code2 size={40} />,
    },
    {
      title: "Livraison",
      subtitle:
        "Mise en service, formation, documentation, support.",
      icon: <HandHeart size={40} />,
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
        {/* 1. Hero — layout 60/40 */}
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="relative container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 w-full">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left 60% */}
                <div className="flex flex-col gap-6 lg:w-[60%]">
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
                  <Button size="lg" asChild className="w-max">
                    <TrackedLink href="/contact?besoin=site-web" trackingLabel="analyser_besoin" trackingPage="agence-web">
                      Analyser mon besoin — gratuit <CornerDownRight />
                    </TrackedLink>
                  </Button>
                </div>

                {/* Right 40% — small KPI cards */}
                <div className="flex flex-row lg:flex-col gap-3 lg:w-[40%] lg:pt-4 flex-wrap items-start lg:items-end">
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>+10</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Projets réalisés</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>98/100</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Score Lighthouse</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>&lt;1s</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Temps de chargement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Logos confiance */}
        <LogosConfiance />

        {/* 3. Ce qu'on construit — cards cliquables + texte SEO */}
        <ServiceCards
          label="● Ce qu'on construit"
          heading="Du site vitrine au SaaS complet."
          subtitle="Un site web réussi, ce n'est pas un produit générique. C'est une infrastructure digitale calibrée pour votre modèle économique. Voici ce qu'on construit, et pour qui."
          cards={[
            {
              icon: <AppWindow size={24} />,
              title: "Sites vitrines",
              description:
                "Présence en ligne rapide, référencée, modifiable sans développeur. Idéal pour une PME qui veut être trouvée sur Google et inspirer confiance dès le premier clic.",
              number: "01",
              href: "/offres/site-vitrine",
              linkLabel: "Voir les sites vitrines →",
            },
            {
              icon: <ShoppingCart size={24} />,
              title: "E-commerce",
              description:
                "Boutique en ligne avec paiement, gestion des stocks et tunnel optimisé pour la conversion. Pour les commerçants et marques qui veulent vendre 24h/24 sans friction technique.",
              number: "02",
              href: "/offres/site-ecommerce",
              linkLabel: "Voir les e-commerces →",
            },
            {
              icon: <LayoutDashboard size={24} />,
              title: "Applications SaaS",
              description:
                "Outil métier sur mesure, dashboards de pilotage, interfaces client. Pour les PME qui veulent industrialiser un process ou lancer un produit digital propre.",
              number: "03",
              href: "/contact?besoin=site-app",
              linkLabel: "Parler de mon projet SaaS →",
            },
            {
              icon: <Building2 size={24} />,
              title: "Intranets & outils internes",
              description:
                "Centralisation des données, automatisation des flux opérationnels, accès contrôlé. Pour les équipes qui passent trop de temps sur des fichiers Excel mal partagés.",
              number: "04",
              href: "/contact?besoin=site-app",
              linkLabel: "Parler de mon intranet →",
            },
          ]}
        />

        {/* 3bis. Comment on construit — texte SEO approfondi */}
        <section
          className="py-16 lg:py-20 px-4 md:px-8 lg:px-12"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              ● Comment on construit
            </p>
            <h2
              className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-10"
              style={{
                fontFamily: "var(--font-display)",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              Un site qui charge vite, qui convertit et qui tient dans le temps.
            </h2>

            <div className="space-y-10">
              <div>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4 flex items-baseline gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#c9fe6e" }}
                  />
                  Performance : viser le &lt;1s sur mobile
                </h3>
                <p
                  className="text-base leading-[1.8]"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  Un site qui charge en plus de 3 secondes perd la moitié de ses
                  visiteurs mobiles avant même d&apos;afficher son contenu
                  (Google, 2024). On construit sur{" "}
                  <span style={{ color: "#c9fe6e", fontWeight: 500 }}>
                    Next.js
                  </span>{" "}
                  avec rendu statique et incrémental, images servies en WebP et
                  AVIF, polices préchargées, et découpage du JavaScript par
                  route. Résultat mesurable : score Lighthouse mobile au-delà
                  de 90/100, LCP sous la barre des 1,8 s, CLS à zéro.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4 flex items-baseline gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#c9fe6e" }}
                  />
                  SEO natif, pas un plugin bolt-on
                </h3>
                <p
                  className="text-base leading-[1.8]"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  Chaque page est livrée avec ses balises HTML sémantiques, un
                  balisage Schema.org (Organization, FAQPage, Service,
                  BreadcrumbList), un sitemap généré automatiquement et des
                  métadonnées uniques par page. Les articles de blog sont
                  structurés pour être cités par les moteurs de recherche IA
                  (ChatGPT Search, Perplexity, Google AI Overviews) via le{" "}
                  <span style={{ color: "#c9fe6e", fontWeight: 500 }}>
                    GEO
                  </span>{" "}
                  — un format answer-first avec définitions courtes et données
                  sourcées.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4 flex items-baseline gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#c9fe6e" }}
                  />
                  CMS modifiable sans développeur
                </h3>
                <p
                  className="text-base leading-[1.8]"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  On livre tous nos sites avec un CMS headless (Sanity par
                  défaut) où vos équipes peuvent modifier les textes, les
                  images, les articles de blog et les pages produits sans
                  jamais toucher au code. Formation incluse — une session d&apos;1 h
                  suffit à rendre votre équipe autonome.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4 flex items-baseline gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#c9fe6e" }}
                  />
                  Infrastructure qui scale sans exploser la facture
                </h3>
                <p
                  className="text-base leading-[1.8]"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  Hébergement sur Vercel (Edge Network mondial), base de données
                  Supabase (Postgres managé), monitoring et alertes sur les
                  erreurs critiques. Vos coûts d&apos;hébergement sont prévisibles
                  et tiennent même si votre trafic triple. On vous remet les
                  accès complets — aucun lock-in technique.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4 flex items-baseline gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#c9fe6e" }}
                  />
                  Pourquoi on fait ça comme ça
                </h3>
                <p
                  className="text-base leading-[1.8] mb-3"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  La majorité des sites de PME qu&apos;on reprend ont le même
                  problème : un CMS WordPress lourd, des plugins qui cassent à
                  chaque mise à jour, un chargement à 5 s sur mobile, et
                  personne dans l&apos;entreprise qui peut toucher quoi que ce
                  soit sans devoir repayer le dev d&apos;origine.
                </p>
                <p
                  className="text-base leading-[1.8]"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  Notre stack (Next.js + Sanity + Vercel) résout ça en amont :
                  performance native, architecture découplée, écosystème stable.
                  C&apos;est plus coûteux à l&apos;initial qu&apos;un template
                  WordPress à 200 €, mais le coût total de possession sur 5 ans
                  est divisé par 2 ou 3, et vos équipes sont autonomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Méthode */}
        <Steps1
          title="Notre méthode de développement"
          steps={processSteps}
        />

        {/* 5. NOS OFFRES + PROCHAINES ÉTAPES */}
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

        {/* 6. Témoignages */}
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

        {/* 7. MidPageCTA */}
        <MidPageCTA
          title="Vous avez un projet web en tête ?"
          subtitle="On vous chiffre en 48h."
          buttonText="Demander une estimation"
        />

        {/* 8. Stack technique — déplacé en bas */}
        <div>
          <p className="text-xs text-center pt-8 pb-0 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
            Pour ceux qui veulent les détails techniques
          </p>
          <TechStack />
        </div>

        {/* 9. FAQ */}
        <div id="faq">
          <FAQCenter title={"On répond à vos questions"} questions={questions} />
        </div>

        {/* 10. Formulaire contact */}
        <SectionCTAForm
          title={
            <>
              Prêts à lancer votre{" "}
              <span className="text-nowrap text-highlight">projet web ?</span>
            </>
          }
        />

        <SeoFooterText
          text="Advisia conçoit et développe des sites web et applications pour les PME françaises. Stack Next.js, performances optimisées, SEO natif, CMS Sanity pour une autonomie totale. On livre des sites qui chargent en moins d'une seconde et génèrent des contacts qualifiés — pas des vitrines statiques."
        />
      </main>
      <Footer />
      <FAQFloatingButton />
    </>
  );
}
