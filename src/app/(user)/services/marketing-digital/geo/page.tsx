import MarketingLandingTemplate, {
  type MarketingLandingContent,
} from "@/components/marketing-landing/template";

export const metadata = {
  title:
    "GEO & Stratégie de contenu PME | Advisia — Apparaître sur les moteurs IA",
  description:
    "Référencement IA (GEO), stratégie de contenu SEO pour PME. Apparaissez sur ChatGPT, Perplexity et Google AI. Agence GEO en France.",
  alternates: {
    canonical: "https://advisia.agency/services/marketing-digital/geo",
  },
  openGraph: {
    title:
      "GEO & Stratégie de contenu PME | Advisia — Apparaître sur les moteurs IA",
    description:
      "Référencement IA (GEO), stratégie de contenu SEO pour PME. Apparaissez sur ChatGPT, Perplexity et Google AI. Agence GEO en France.",
    url: "https://advisia.agency/services/marketing-digital/geo",
    siteName: "Advisia",
    type: "website",
  },
};

const content: MarketingLandingContent = {
  heroTag: "GEO & Stratégie de contenu",
  heroH1:
    "ChatGPT répond à vos prospects. Est-ce qu'il cite votre entreprise ?",
  heroSubtitle:
    "Le GEO (Generative Engine Optimization) est le référencement des moteurs IA. On optimise votre présence pour être cité quand vos prospects posent des questions à l'IA.",
  stats: [
    {
      value: "15-20%",
      label:
        "des recherches Google affichent maintenant une réponse IA (AI Overviews) avant les liens",
    },
    {
      value: "1 M",
      label:
        "de nouveaux utilisateurs par semaine sur Perplexity en 2025",
    },
    {
      value: "3",
      label:
        "sources maximum citées par les moteurs IA dans leurs réponses — être dans ces 3, c'est l'enjeu",
    },
  ],
  editorialTitle:
    "Le SEO classique ne suffit plus. Les moteurs IA changent les règles.",
  editorialText:
    "Quand quelqu'un demande à ChatGPT « quelle agence IA choisir pour ma PME en France », il n'obtient pas une liste de liens. Il obtient une réponse synthétisée qui cite 2 ou 3 sources. Si votre site n'est pas optimisé pour être cette source, vous n'existez pas dans cette réponse. Le GEO complète le SEO classique : même fondation (contenu structuré, données sourcées, autorité thématique) mais avec de nouvelles règles de mise en forme et de signaux d'autorité.",
  process: [
    {
      title: "Audit GEO",
      text: "On analyse votre présence actuelle sur ChatGPT, Perplexity et Google AI Overviews. On identifie les requêtes pour lesquelles vous devriez être cité mais ne l'êtes pas.",
    },
    {
      title: "Stratégie de contenu GEO-optimisé",
      text: "On produit du contenu structuré pour être cité par les moteurs IA : définitions claires, données sourcées, format FAQ, études de cas chiffrées.",
    },
    {
      title: "Distribution et autorité",
      text: "Publication sur votre blog, sur LinkedIn, dans des médias sectoriels. Plus votre contenu est cité ailleurs, plus les moteurs IA vous citent.",
    },
    {
      title: "Mesure et optimisation",
      text: "Suivi mensuel de votre présence sur les moteurs IA. On ajuste la stratégie selon les nouvelles requêtes détectées.",
    },
  ],
  pourVousSi:
    "Vous êtes invisible sur les moteurs IA alors que vos concurrents y apparaissent. Si vos prospects utilisent ChatGPT ou Perplexity pour trouver des prestataires. Si vous voulez anticiper les changements algorithmiques avant qu'ils impactent votre trafic. Si vous avez déjà du contenu mais il n'est pas structuré pour être cité par l'IA.",
  faqItems: [
    {
      question: "C'est quoi exactement le GEO ?",
      answer:
        "Generative Engine Optimization — l'ensemble des pratiques pour être cité par les moteurs IA (ChatGPT Search, Perplexity, Google AI Overviews) quand ils répondent à des questions liées à votre secteur.",
    },
    {
      question: "Est-ce que le GEO remplace le SEO ?",
      answer:
        "Non, il le complète. Un contenu bien optimisé SEO est aussi bien optimisé GEO. Les pratiques convergent sur les fondamentaux : structure, données, autorité.",
    },
    {
      question: "Comment on mesure la présence sur les moteurs IA ?",
      answer:
        "Manuellement (on pose les questions aux moteurs et on vérifie les citations) et via des outils d'analyse GEO émergents. C'est encore un domaine en construction.",
    },
    {
      question: "Combien de temps pour apparaître sur ChatGPT ou Perplexity ?",
      answer:
        "3 à 6 mois avec une stratégie de contenu sérieuse. Les moteurs IA réindexent régulièrement.",
    },
  ],
  ctaTitle: (
    <>
      Prêts à exister sur les{" "}
      <span className="text-nowrap text-highlight">moteurs IA ?</span>
    </>
  ),
  seoFooter:
    "Advisia accompagne les PME françaises sur le GEO (Generative Engine Optimization) et la stratégie de contenu : audit de présence sur ChatGPT, Perplexity et Google AI Overviews, production de contenu structuré pour les moteurs IA, distribution multi-canaux et mesure mensuelle. Le GEO est un levier émergent — agir maintenant donne une avance considérable sur des concurrents qui n'ont pas encore commencé.",
};

export default function MarketingDigitalGeoPage() {
  return <MarketingLandingTemplate content={content} />;
}
