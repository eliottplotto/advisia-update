import Footer from "@/components/footer";
import SectionCTAForm from "@/components/section-cta-form";
import SeoFooterText from "@/components/seo-footer-text";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import FAQCenter from "@/components/ui/sections/faq-center";
import {
  AgenceHero,
  EditorialBlock,
  ApprocheSection,
  ConvictionsSection,
  PourQuiSection,
  ChiffresSection,
  CtaFinal,
} from "./agence-client";

export const metadata = {
  title: "À propos d'Advisia | Agence IA et digitale pour PME",
  description:
    "Advisia construit l'infrastructure IA et digitale des dirigeants de PME qui veulent des résultats mesurables. Automatisation, web, marketing digital, diagnostics. Partout en France.",
  keywords: [
    "agence IA PME France",
    "agence digitale PME",
    "automatisation PME",
    "transformation digitale PME",
  ],
  alternates: {
    canonical: "https://advisia.agency/agence",
  },
  openGraph: {
    title: "À propos d'Advisia | Agence IA et digitale pour PME",
    description:
      "Advisia construit l'infrastructure IA et digitale des dirigeants de PME qui veulent des résultats mesurables.",
    url: "https://advisia.agency/agence",
    siteName: "Advisia",
    type: "website",
  },
};

const PAGE_WAYPOINTS = [
  { x: 50, y: 0 },
  { x: 70, y: 0.12 },
  { x: 30, y: 0.28 },
  { x: 70, y: 0.44 },
  { x: 30, y: 0.60 },
  { x: 70, y: 0.76 },
  { x: 50, y: 1.0 },
];
const PAGE_DOT_FRACTIONS = [0, 0.14, 0.28, 0.44, 0.60, 0.76, 0.92, 1.0];

const faqQuestions = [
  {
    id: "q1",
    question: "Comment ça se passe concrètement si on travaille ensemble ?",
    answer:
      "On commence par un échange de 30 minutes pour comprendre votre besoin. On vous envoie un cadrage et un devis clair sous 48h. Si c'est OK, on démarre en sprints de 2 semaines avec un point hebdo. Vous validez à chaque étape.",
  },
  {
    id: "q2",
    question: "Vous travaillez avec quel type d'entreprise ?",
    answer:
      "Des PME de 5 à 200 salariés partout en France. Commerce, industrie, services B2B, santé, logistique, e-commerce, transmission d'entreprise. Ce qui compte, c'est un projet concret avec un résultat mesurable.",
  },
  {
    id: "q3",
    question: "Je n'y connais rien en tech, c'est un problème ?",
    answer:
      "C'est justement notre métier de traduire. On vous explique tout simplement, on vous forme sur les outils livrés, et on reste disponibles après. Vous gardez le contrôle sans avoir besoin d'être technique.",
  },
  {
    id: "q4",
    question: "Vous êtes basés où ?",
    answer:
      "Dans les Hautes-Pyrénées. On travaille avec des clients partout en France — en visio, Slack ou téléphone. La proximité est dans la réactivité, pas forcément dans la géographie.",
  },
  {
    id: "q5",
    question: "Combien coûte une première mission ?",
    answer:
      "Nos tarifs sont affichés publiquement. Un diagnostic démarre à 490 €. Une automatisation unitaire à 390 €. Un site vitrine à 1 000 €. Tout est visible sur la page Tarifs, sans devis opaque.",
  },
];

export default function Agence() {
  return (
    <>
      <main className="relative" style={{ background: "#0A0A0F", color: "#fff" }}>
        <VerticalFlowLine waypoints={PAGE_WAYPOINTS} dotFractions={PAGE_DOT_FRACTIONS} />

        <AgenceHero />
        <EditorialBlock />
        <ApprocheSection />
        <ConvictionsSection />
        <PourQuiSection />
        <ChiffresSection />
        <FAQCenter title="Vos questions" questions={faqQuestions} />
        <CtaFinal />
        <SectionCTAForm />
        <SeoFooterText
          text="Advisia est une agence IA et digitale qui accompagne les PME françaises dans leur transformation numérique. Automatisation des processus, développement web sur mesure, marketing digital, diagnostics et audits : on construit l'infrastructure qui fait gagner du temps et augmente la marge. Nos clients sont des dirigeants de 5 à 200 salariés, partout en France, dans tous les secteurs."
        />
      </main>
      <Footer />
    </>
  );
}
