import MarketingLandingTemplate, {
  type MarketingLandingContent,
} from "@/components/marketing-landing/template";
import { seoSiloSeo } from "@/lib/seo-silo-content";

export const metadata = {
  title:
    "SEO pour PME | Advisia — Référencement naturel qui génère des leads",
  description:
    "Audit SEO, stratégie de contenu, netlinking. On vous fait monter sur Google durablement. Agence SEO pour PME en France.",
  alternates: {
    canonical: "https://advisia.agency/services/marketing-digital/seo",
  },
  openGraph: {
    title:
      "SEO pour PME | Advisia — Référencement naturel qui génère des leads",
    description:
      "Audit SEO, stratégie de contenu, netlinking. On vous fait monter sur Google durablement. Agence SEO pour PME en France.",
    url: "https://advisia.agency/services/marketing-digital/seo",
    siteName: "Advisia",
    type: "website",
  },
};

const content: MarketingLandingContent = {
  heroTag: "SEO & Référencement naturel",
  heroH1: "Vos concurrents sont en première page. Vous méritez d'y être aussi.",
  heroSubtitle:
    "Audit technique, stratégie de mots-clés, contenu optimisé. On construit votre visibilité sur Google sur le long terme — pas avec des hacks.",
  stats: [
    {
      value: "68%",
      label:
        "des PME françaises génèrent moins de 5 contacts qualifiés / mois via leur site (France Num 2025)",
    },
    {
      value: "53%",
      label: "des clics vont aux 3 premiers résultats Google",
    },
    {
      value: "12 mois",
      label:
        "délai moyen pour voir une progression significative avec une stratégie SEO sérieuse",
    },
  ],
  editorialTitle:
    "Le SEO n'est pas une dépense. C'est un actif qui prend de la valeur.",
  editorialText:
    "Contrairement à la publicité qui s'arrête dès que vous coupez le budget, le SEO construit une présence organique qui dure. Un article bien optimisé peut générer des leads pendant 3 ans sans dépense supplémentaire. Pour une PME, c'est le levier le plus rentable sur le long terme — à condition d'avoir la bonne stratégie et de s'y tenir.",
  process: [
    {
      title: "Audit SEO complet",
      text: "Analyse technique, audit de contenu, analyse de vos concurrents. On identifie pourquoi vous ne rankez pas et quoi corriger en priorité.",
    },
    {
      title: "Stratégie de mots-clés",
      text: "On identifie les requêtes que tapent vos clients potentiels. Focus sur la longue traîne — moins de concurrence, plus de conversion.",
    },
    {
      title: "Production de contenu",
      text: "Articles de fond, pages de service optimisées, FAQ enrichies. Du contenu que Google et les moteurs IA veulent citer.",
    },
    {
      title: "Suivi mensuel",
      text: "Rapport de positions, analyse du trafic, ajustements. On optimise ce qui monte et on renforce ce qui stagne.",
    },
  ],
  pourVousSi:
    "Vous n'apparaissez pas sur Google pour les recherches liées à votre métier. Si vos concurrents occupent les premières places et captent vos clients potentiels. Si vous avez un site mais qu'il ne génère pas de contacts organiques. Si vous voulez réduire votre dépendance aux campagnes publicitaires payantes.",
  faqItems: [
    {
      question: "Combien de temps pour voir des résultats ?",
      answer:
        "3 à 6 mois pour les premiers signaux, 12 mois pour une progression significative. Le SEO est un investissement long terme, pas un levier d'urgence.",
    },
    {
      question: "Vous écrivez le contenu vous-mêmes ?",
      answer:
        "Oui. On produit les articles, pages et contenus optimisés. Vous validez avant publication.",
    },
    {
      question: "C'est quoi la différence avec Google Ads ?",
      answer:
        "Google Ads génère des résultats immédiats mais s'arrête quand vous coupez le budget. Le SEO prend plus de temps mais génère du trafic gratuit et durable.",
    },
    {
      question: "Est-ce que ça marche pour une PME locale ?",
      answer:
        "Oui, et c'est même plus facile. Le SEO local (Google Business, requêtes géolocalisées) est moins concurrentiel et très efficace pour les PME régionales.",
    },
  ],
  ctaTitle: (
    <>
      Prêts à monter sur{" "}
      <span className="text-nowrap text-highlight">Google ?</span>
    </>
  ),
  seoFooter:
    "Advisia conçoit et pilote des stratégies SEO pour les PME françaises : audit technique, mots-clés longue traîne, production de contenu optimisé, netlinking et suivi mensuel des positions. Notre approche est durable — pas de raccourcis qui se retournent au prochain update Google. Basés en France, on accompagne des PME de tous secteurs : commerce, services aux entreprises, santé, industrie, tourisme.",
  seoSilo: seoSiloSeo,
};

export default function MarketingDigitalSeoPage() {
  return <MarketingLandingTemplate content={content} />;
}
