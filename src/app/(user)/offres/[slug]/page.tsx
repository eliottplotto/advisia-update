import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { offersContent } from "@/lib/offers-drawer-content";
import Footer from "@/components/footer";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import ScrollReveal from "@/components/ui/scroll-reveal";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import FAQCenter from "@/components/ui/sections/faq-center";
import { TrendingUp, CheckCircle, Clock, Shield, Users } from "lucide-react";
import OfferForm from "./offer-form";

const CANONICAL_SLUGS = [
  "diagnostic-digital-ia",
  "audit-securite",
  "audit-visibilite",
  "audit-e-reputation",
  "audit-cession-reprise",
  "pack-audit-general",
  "pack-audit-correction",
  "automatisation-unitaire",
  "pack-automatisation",
  "assistant-ia-standard",
  "assistant-ia-avance",
  "landing-page",
  "site-vitrine",
  "site-ecommerce",
  "workshop-ia-dirigeants",
  "formation-equipes",
  "partenaire-essentiel",
  "partenaire-business",
  "partenaire-strategique",
  "pack-valorisation-cession",
  "pack-transformation-post-reprise",
  "pack-transformation-ia-metier",
];

const ALIAS_TO_CANONICAL: Record<string, string> = {
  "audit-ereputation": "audit-e-reputation",
  "audit-maturite-cession": "audit-cession-reprise",
  "audit-pre-acquisition": "audit-cession-reprise",
  "auto-unitaire": "automatisation-unitaire",
  "pack-auto": "pack-automatisation",
  "workshop-ia": "workshop-ia-dirigeants",
  "pack-modernisation": "pack-valorisation-cession",
  "pack-transformation": "pack-transformation-post-reprise",
  "valorisation-complete": "pack-transformation-post-reprise",
  "pack-ia-metier": "pack-transformation-ia-metier",
};

type OfferType = "diagnostic" | "auto" | "web" | "formation" | "partenariat" | "cession";

function getOfferType(slug: string): OfferType {
  if (slug.includes("audit") || slug.includes("diagnostic")) return "diagnostic";
  if (slug.includes("partenaire")) return "partenariat";
  if (slug.includes("workshop") || slug.includes("formation")) return "formation";
  if (slug.includes("landing") || slug.includes("site") || slug.includes("ecommerce")) return "web";
  if (slug.includes("valorisation") || slug.includes("transformation") || slug.includes("cession")) return "cession";
  return "auto";
}

function getHowWeWorkSteps(type: OfferType): string[] {
  switch (type) {
    case "diagnostic":
      return [
        "On commence par un call de 30 min pour comprendre votre contexte",
        "On analyse vos outils, votre infrastructure ou votre visibilité selon le diagnostic choisi",
        "On rédige un rapport clair de 3 à 5 pages avec des recommandations actionnables",
        "Pas de jargon, pas de PowerPoint de 80 slides. Du concret.",
      ];
    case "auto":
      return [
        "On identifie la tâche qui vous coûte le plus de temps",
        "On conçoit l'automatisation et on la teste avec vous",
        "On la déploie dans votre environnement sans perturber votre quotidien",
        "On forme votre équipe et on documente le fonctionnement",
        "Support inclus pendant 30 jours après livraison",
      ];
    case "web":
      return [
        "On cadre le projet ensemble : nombre de pages, fonctionnalités, objectifs",
        "On vous propose un design que vous validez avant le développement",
        "On développe en Next.js pour la performance et le SEO",
        "On vous forme à l'administration du site",
        "Score Lighthouse 95+ garanti",
      ];
    case "formation":
      return [
        "On évalue le niveau de vos équipes avant la session",
        "On adapte le contenu à votre secteur et vos outils",
        "On alterne théorie et pratique avec des exercices sur vos cas réels",
        "On reste disponibles 30 jours après la formation pour les questions",
      ];
    case "partenariat":
      return [
        "Chaque mois, on fait le point sur vos systèmes",
        "On identifie les optimisations et on les déploie",
        "Vous avez un interlocuteur dédié qui connaît votre contexte",
        "Pas d'engagement de durée. Vous arrêtez quand vous voulez.",
      ];
    case "cession":
      return [
        "On commence par évaluer la maturité digitale sur 5 axes",
        "On identifie les quick wins de valorisation réalisables en quelques semaines",
        "On documente tout pour que les acquéreurs aient confiance",
        "Confidentialité totale. Aucune information partagée avec des tiers.",
      ];
  }
}

function getHowWeWorkTitle(type: OfferType): string {
  switch (type) {
    case "diagnostic": return "Comment on travaille sur un diagnostic";
    case "auto": return "Comment on travaille sur une automatisation";
    case "web": return "Comment on travaille sur votre projet web";
    case "formation": return "Comment on travaille sur une formation";
    case "partenariat": return "Comment on travaille en partenariat";
    case "cession": return "Comment on travaille sur un projet cession";
  }
}

function getWhyAdvisiaTitle(type: OfferType): string {
  switch (type) {
    case "diagnostic": return "Pourquoi choisir Advisia pour votre diagnostic";
    case "auto": return "Pourquoi choisir Advisia pour votre automatisation";
    case "web": return "Pourquoi choisir Advisia pour votre projet web";
    case "formation": return "Pourquoi choisir Advisia pour votre formation";
    case "partenariat": return "Pourquoi choisir Advisia pour votre partenariat";
    case "cession": return "Pourquoi choisir Advisia pour votre cession";
  }
}

function getConcretExample(type: OfferType): string {
  switch (type) {
    case "diagnostic":
      return "PME de 35 salariés dans le transport. Le diagnostic a identifié 5 automatisations. ROI du premier quick win remboursé le diagnostic en 2 semaines.";
    case "auto":
      return "Réseau de 20 magasins. 12h par semaine récupérées sur le reporting grâce à 3 automatisations interconnectées.";
    case "web":
      return "E-commerce alimentaire. Site livré en 5 semaines. Score Lighthouse 98/100. Triplement des demandes de contact en 2 mois.";
    case "formation":
      return "Dirigeant d'un cabinet comptable. Après le workshop, a identifié 3 cas d'usage IA applicables immédiatement. Gain estimé 6 mois.";
    case "partenariat":
      return "Cabinet d'expertise comptable. 8 mois de partenariat Business. Chaque mois une amélioration concrète. Ne pourraient plus s'en passer.";
    case "cession":
      return "PME services B2B. L'audit a révélé un potentiel de valorisation de 15% supplémentaires grâce à la maturité digitale.";
  }
}

function getFAQItems(type: OfferType): { id: string; question: string; answer: string }[] {
  switch (type) {
    case "diagnostic":
      return [
        {
          id: "q1",
          question: "Ce diagnostic m'engage-t-il à travailler avec vous ?",
          answer:
            "Non. Le rapport vous appartient entièrement. Vous pouvez l'utiliser avec nous ou avec quelqu'un d'autre — aucun engagement n'est requis.",
        },
        {
          id: "q2",
          question: "Combien de temps ça prend de notre côté ?",
          answer:
            "30 à 60 minutes pour le call de cadrage, le reste c'est nous. Vous n'avez pas à préparer de dossier particulier.",
        },
        {
          id: "q3",
          question: "Qu'est-ce que je reçois concrètement ?",
          answer:
            "Un rapport actionnable de 3 à 5 pages avec des recommandations chiffrées, priorisées et directement applicables à votre situation.",
        },
      ];
    case "auto":
      return [
        {
          id: "q1",
          question: "Quel est le délai de livraison ?",
          answer:
            "De 2-3 jours pour une automatisation unitaire à 4 semaines pour un pack complet ou un assistant IA avancé.",
        },
        {
          id: "q2",
          question: "Faut-il se former pour utiliser l'automatisation ?",
          answer:
            "Une formation est incluse dans chaque livraison. Vos équipes sont autonomes et opérationnelles dès le premier jour.",
        },
        {
          id: "q3",
          question: "Quels outils peut-on connecter ?",
          answer:
            "On s'adapte à votre stack existante — Notion, Airtable, Google Workspace, CRM, ERP et plus encore.",
        },
      ];
    case "web":
      return [
        {
          id: "q1",
          question: "Quel est le délai de livraison ?",
          answer:
            "De 3-5 jours pour une landing page à 8 semaines pour un e-commerce complet.",
        },
        {
          id: "q2",
          question: "Pourrai-je modifier le site sans faire appel à un développeur ?",
          answer:
            "Oui. On intègre un CMS simple ou on documente les modifications courantes pour que vos équipes soient totalement autonomes.",
        },
        {
          id: "q3",
          question: "Le SEO est-il inclus ?",
          answer:
            "Oui. Le SEO technique et on-page est inclus nativement dans chaque projet web livré par Advisia.",
        },
      ];
    case "formation":
      return [
        {
          id: "q1",
          question: "La formation se passe en présentiel ou en visio ?",
          answer:
            "Les deux sont possibles. On s'adapte à votre organisation et à votre localisation.",
        },
        {
          id: "q2",
          question: "Faut-il des prérequis techniques ?",
          answer:
            "Aucun. La formation est adaptée au niveau réel de vos équipes, évalué lors du cadrage initial.",
        },
        {
          id: "q3",
          question: "Y a-t-il un suivi après la formation ?",
          answer:
            "Oui. 30 jours de suivi sont inclus pour s'assurer que l'adoption tient dans le temps.",
        },
      ];
    case "partenariat":
      return [
        {
          id: "q1",
          question: "Quel est l'engagement minimum ?",
          answer:
            "Nos partenariats sont mensuels sans durée minimum. Vous êtes libre.",
        },
        {
          id: "q2",
          question: "Comment se passe la résiliation ?",
          answer:
            "À tout moment, sans frais ni préavis. Vous envoyez un email, c'est terminé.",
        },
        {
          id: "q3",
          question: "Qu'est-ce qui est inclus exactement ?",
          answer:
            "Tout est détaillé dans la fiche de l'offre. Pas de surprise — ce qui est affiché est exactement ce que vous recevez.",
        },
      ];
    case "cession":
      return [
        {
          id: "q1",
          question: "Les informations restent-elles confidentielles ?",
          answer:
            "Oui, confidentialité totale. Aucune information n'est partagée avec des tiers sans votre accord explicite.",
        },
        {
          id: "q2",
          question: "Combien de temps dure la mission ?",
          answer:
            "De 48-72h pour un audit à 8-12 semaines pour un pack de transformation complet selon l'offre choisie.",
        },
        {
          id: "q3",
          question: "Ça m'engage à vendre ou à acheter ?",
          answer:
            "Non. Notre mission est d'évaluer et de préparer. La décision de cession ou d'acquisition reste entièrement la vôtre.",
        },
      ];
  }
}

export function generateStaticParams() {
  return CANONICAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = ALIAS_TO_CANONICAL[slug] ?? slug;
  const content = offersContent[canonicalSlug];
  if (!content) return {};
  return {
    title: `${content.offerName} | Advisia`,
    description: content.offerContext.slice(0, 160),
    alternates: {
      canonical: `https://advisia.agency/offres/${canonicalSlug}`,
    },
  };
}

export default async function OfferPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (ALIAS_TO_CANONICAL[slug]) {
    redirect(`/offres/${ALIAS_TO_CANONICAL[slug]}`);
  }

  const content = offersContent[slug];
  if (!content) notFound();

  const offerType = getOfferType(slug);
  const faqItems = getFAQItems(offerType);
  const includesTwoCol = content.offerIncludes.length > 4;

  const howWeWorkSteps = getHowWeWorkSteps(offerType);
  const howWeWorkTitle = getHowWeWorkTitle(offerType);
  const whyAdvisiaTitle = getWhyAdvisiaTitle(offerType);
  const concretExample = getConcretExample(offerType);

  const pageWaypoints = [
    { x: 50, y: 0 },
    { x: 70, y: 0.15 },
    { x: 30, y: 0.32 },
    { x: 70, y: 0.52 },
    { x: 30, y: 0.72 },
    { x: 50, y: 1.0 },
  ];
  const pageDotFractions = [0, 0.15, 0.32, 0.52, 0.72, 0.88, 1.0];

  return (
    <>
      <main
        className="relative"
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <VerticalFlowLine waypoints={pageWaypoints} dotFractions={pageDotFractions} />

        {/* HERO */}
        <section
          className="w-full overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)" }}
        >
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-10 lg:py-20 max-w-4xl flex flex-col gap-6">
              <BulletHeadline as="p">{content.offerName}</BulletHeadline>
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {content.offerName}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
                  style={{
                    background: "rgba(201,254,110,0.12)",
                    color: "#c9fe6e",
                    border: "1px solid rgba(201,254,110,0.3)",
                  }}
                >
                  {content.offerPrice}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Clock size={14} />
                  {content.offerDelay}
                </span>
              </div>
              <p
                className="text-lg max-w-2xl leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {content.offerContext}
              </p>
            </div>
          </div>
        </section>

        {/* CE QUE CA CHANGE */}
        <section
          className="py-10 lg:py-16"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="container-md global-padding-x max-w-4xl">
            <ScrollReveal>
              <div className="section-label mb-6">● Bénéfices concrets</div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ce que ça change pour vous
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.offerBenefits.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                    className="rounded-xl p-6 h-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <TrendingUp size={20} className="mb-4" style={{ color: "#c9fe6e" }} />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {benefit}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUI EST INCLUS */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x max-w-4xl">
            <ScrollReveal>
              <div className="section-label mb-6">● Détail de l&apos;offre</div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ce qui est inclus
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <ul
                className={`grid gap-4 ${
                  includesTwoCol ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                } max-w-2xl`}
              >
                {content.offerIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                      style={{ color: "#c9fe6e" }}
                    />
                    <span
                      className="text-base"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* COMMENT ON TRAVAILLE */}
        <section
          className="py-10 lg:py-16"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="container-md global-padding-x max-w-4xl">
            <ScrollReveal>
              <div className="section-label mb-6">● Méthode</div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {howWeWorkTitle}
              </h2>
            </ScrollReveal>
            <div className="flex flex-col max-w-xl">
              {howWeWorkSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-5 pb-7 relative">
                    {i < howWeWorkSteps.length - 1 && (
                      <div
                        className="absolute left-5 top-9 w-[1px] h-full"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      />
                    )}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold font-mono relative z-10"
                      style={{
                        background: "rgba(201,254,110,0.1)",
                        border: "1px solid rgba(201,254,110,0.3)",
                        color: "#c9fe6e",
                      }}
                    >
                      0{i + 1}
                    </div>
                    <p
                      className="pt-2.5 text-base leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {step}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGE */}
        {content.testimonial && (
          <section
            className="py-10 lg:py-14"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div className="container-md global-padding-x max-w-4xl">
              <ScrollReveal>
                <p className="section-label mb-8">● Ce que disent nos clients</p>
                <blockquote
                  className="rounded-2xl p-8"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    className="text-xl italic leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    &laquo;&nbsp;{content.testimonial}&nbsp;&raquo;
                  </p>
                </blockquote>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* COMMENT CA SE PASSE */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x max-w-4xl">
            <ScrollReveal>
              <div className="section-label mb-6">● Process</div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Comment ça se passe
              </h2>
            </ScrollReveal>
            <div className="flex flex-col max-w-xl">
              {[
                "Vous nous contactez via le formulaire ci-dessous",
                "Eliott ou Julien vous répond sous 48h avec une première analyse",
                "On planifie un appel de 30 min pour cadrer le projet",
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-5 pb-8 relative">
                    {i < 2 && (
                      <div
                        className="absolute left-5 top-10 w-[1px] h-full"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      />
                    )}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold font-mono relative z-10"
                      style={{
                        background: "rgba(201,254,110,0.1)",
                        border: "1px solid rgba(201,254,110,0.3)",
                        color: "#c9fe6e",
                      }}
                    >
                      0{i + 1}
                    </div>
                    <p
                      className="pt-2.5 text-base leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {step}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* POUR QUI */}
        <section
          className="py-10 lg:py-16"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="container-md global-padding-x max-w-4xl">
            <ScrollReveal>
              <div className="section-label mb-6">● Cible</div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                C&apos;est pour vous si&nbsp;…
              </h2>
              <p
                className="text-base leading-relaxed max-w-2xl"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {content.offerContext}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* POURQUOI ADVISIA */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x max-w-4xl">
            <ScrollReveal>
              <div className="section-label mb-6">● Pourquoi nous</div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyAdvisiaTitle}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield size={20} />,
                  title: "Pas de sous-traitance",
                  desc: "Les experts qui conseillent sont ceux qui livrent",
                },
                {
                  icon: <Clock size={20} />,
                  title: "Délais courts",
                  desc: `Première livraison en ${content.offerDelay}`,
                },
                {
                  icon: <Users size={20} />,
                  title: "Formation incluse",
                  desc: "Vos équipes sont autonomes après la livraison",
                },
              ].map(({ icon, title, desc }, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                    className="rounded-xl p-6 h-full"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="mb-4" style={{ color: "#c9fe6e" }}>{icon}</div>
                    <p className="font-semibold text-white mb-2">{title}</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CAS CONCRET */}
        <section
          className="py-10 lg:py-14"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="container-md global-padding-x max-w-4xl">
            <ScrollReveal>
              <div className="section-label mb-6">● Exemple concret</div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Un exemple concret
              </h2>
              <div
                className="max-w-2xl rounded-xl p-6 pl-6"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderLeft: "2px solid #c9fe6e",
                  paddingLeft: "1.5rem",
                }}
              >
                <p
                  className="text-base italic leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {concretExample}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <FAQCenter
          title={`Questions sur ${content.offerName}`}
          questions={faqItems}
        />

        {/* FORMULAIRE DEMANDE */}
        <section
          className="py-14 lg:py-20"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "#0D0D14",
          }}
        >
          <div className="container-md global-padding-x max-w-2xl mx-auto">
            <ScrollReveal>
              <OfferForm slug={slug} offerName={content.offerName} />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
