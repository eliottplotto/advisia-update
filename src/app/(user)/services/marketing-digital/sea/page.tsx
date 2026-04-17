import MarketingLandingTemplate, {
  type MarketingLandingContent,
} from "@/components/marketing-landing/template";
import { seoSiloSea } from "@/lib/seo-silo-content";

export const metadata = {
  title: "Agence Google Ads pour PME | Advisia",
  description:
    "Gestion Google Ads pour PME. Setup, optimisation hebdomadaire, reporting transparent. Agence SEA pour PME en France.",
  alternates: {
    canonical: "https://advisia.agency/services/marketing-digital/sea",
  },
  openGraph: {
    title:
      "Google Ads PME | Advisia — Campagnes qui génèrent des leads rentables",
    description:
      "Gestion Google Ads pour PME. Setup, optimisation hebdomadaire, reporting transparent. Agence SEA pour PME en France.",
    url: "https://advisia.agency/services/marketing-digital/sea",
    siteName: "Advisia",
    type: "website",
  },
};

const content: MarketingLandingContent = {
  heroTag: "Google Ads & SEA",
  heroH1:
    "Vos prospects cherchent ce que vous vendez. Soyez là quand ils cherchent.",
  heroSubtitle:
    "Campagnes Google Ads configurées et optimisées chaque semaine. Budget maîtrisé, reporting transparent, zéro gaspillage.",
  stats: [
    {
      value: "Top 3",
      label:
        "des annonces Google captent 46% des clics sur la page de résultats",
    },
    {
      value: "3,8x",
      label:
        "ROI moyen des campagnes Google Ads bien optimisées (Google Economic Impact)",
    },
    {
      value: "48h",
      label:
        "pour avoir les premières données et commencer à optimiser",
    },
  ],
  editorialTitle:
    "La publicité Google n'est pas chère. Mal configurée, elle l'est.",
  editorialText:
    "Le problème de la plupart des PME avec Google Ads n'est pas le budget — c'est la configuration. Mots-clés trop larges, annonces génériques, trafic envoyé vers la homepage au lieu d'une landing page dédiée : autant de raisons pour lesquelles l'argent part sans retour. On configure les campagnes correctement dès le départ, on installe le suivi des conversions, et on optimise chaque semaine selon les données réelles — pas les impressions.",
  process: [
    {
      title: "Audit ou setup initial",
      text: "Si vous avez déjà des campagnes, on les audite. Si vous partez de zéro, on construit la structure optimale.",
    },
    {
      title: "Configuration et ciblage",
      text: "Mots-clés exacts, mots-clés négatifs, extensions d'annonce. Suivi des conversions installé avant le premier euro dépensé.",
    },
    {
      title: "Lancement et optimisation hebdomadaire",
      text: "Analyse des termes de recherche réels, ajustement des enchères, tests d'annonces. On optimise chaque semaine, pas chaque mois.",
    },
    {
      title: "Reporting transparent",
      text: "Vous voyez exactement où va votre budget et ce qu'il génère. Coût par lead, taux de conversion, ROI calculé — pas des vanity metrics.",
    },
  ],
  pourVousSi:
    "Vous avez besoin de leads rapidement (Google Ads génère des résultats dès la première semaine). Si vous avez déjà lancé des campagnes sans résultat et vous voulez comprendre pourquoi. Si vous voulez externaliser la gestion à quelqu'un qui rend des comptes sur des vrais chiffres. Si vous êtes dans un secteur où vos clients cherchent activement sur Google.",
  faqItems: [
    {
      question: "Quel budget minimum pour démarrer ?",
      answer:
        "300 à 600 €/mois pour un secteur local, 600 à 1 500 €/mois pour le B2B. En dessous, pas assez de données pour optimiser.",
    },
    {
      question: "Vous gérez le budget publicitaire ?",
      answer:
        "Non. Le budget média va directement à Google depuis votre compte. On gère la stratégie et l'optimisation.",
    },
    {
      question: "C'est quoi vos frais de gestion ?",
      answer:
        "Forfait mensuel fixe selon le périmètre. Pas de commission sur le budget média.",
    },
    {
      question: "Est-ce qu'on peut arrêter quand on veut ?",
      answer:
        "Oui. Pas d'engagement minimum. Vous arrêtez à la fin de n'importe quel mois.",
    },
  ],
  ctaTitle: (
    <>
      Prêts à lancer une{" "}
      <span className="text-nowrap text-highlight">campagne ?</span>
    </>
  ),
  seoFooter:
    "Advisia gère les campagnes Google Ads des PME françaises : audit, structuration, optimisation hebdomadaire et reporting transparent. Notre forfait de gestion est fixe, sans commission sur le budget média. Le compte Google Ads et le budget restent toujours chez vous. On travaille avec des PME locales, B2B, e-commerce et services dans toute la France.",
  seoSilo: seoSiloSea,
};

export default function MarketingDigitalSeaPage() {
  return <MarketingLandingTemplate content={content} />;
}
