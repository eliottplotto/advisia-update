import MarketingLandingTemplate, {
  type MarketingLandingContent,
} from "@/components/marketing-landing/template";
import { seoSiloSocialAds } from "@/lib/seo-silo-content";

export const metadata = {
  title: "Agence Social Ads pour PME (Meta, LinkedIn) | Advisia",
  description:
    "Gestion Meta Ads et LinkedIn Ads pour PME. Ciblage précis, créatives qui convertissent, reporting hebdomadaire. Agence Social Ads en France.",
  alternates: {
    canonical: "https://advisia.agency/services/marketing-digital/social-ads",
  },
  openGraph: {
    title:
      "Social Ads PME | Advisia — Meta Ads et LinkedIn Ads qui convertissent",
    description:
      "Gestion Meta Ads et LinkedIn Ads pour PME. Ciblage précis, créatives qui convertissent, reporting hebdomadaire. Agence Social Ads en France.",
    url: "https://advisia.agency/services/marketing-digital/social-ads",
    siteName: "Advisia",
    type: "website",
  },
};

const content: MarketingLandingContent = {
  heroTag: "Social Ads & Meta LinkedIn",
  heroH1:
    "Vos clients sont sur Instagram, Facebook et LinkedIn. Vos annonces aussi.",
  heroSubtitle:
    "Campagnes Meta Ads et LinkedIn Ads conçues pour convertir, pas juste pour être vues. Ciblage précis, créatives testées, budget optimisé.",
  stats: [
    {
      value: "3,8 Mrd",
      label: "d'utilisateurs actifs sur Meta en 2025 — dont 38 M en France",
    },
    {
      value: "4x",
      label:
        "plus de leads qualifiés en B2B avec LinkedIn Ads vs autres canaux sociaux",
    },
    {
      value: "2,1%",
      label:
        "taux de conversion moyen des campagnes Meta Ads bien optimisées",
    },
  ],
  editorialTitle:
    "Les réseaux sociaux ne vendent pas. Les bonnes annonces au bon moment, si.",
  editorialText:
    "La différence entre une campagne Social Ads qui gaspille le budget et une qui génère des leads tient à trois choses : le ciblage, la créative et la page de destination. On travaille les trois ensemble. Le ciblage identifie exactement qui vous voulez toucher (secteur, poste, comportement, lookalike de vos clients existants). La créative arrête le scroll. La landing page convertit. Sans les trois, l'argent part en impressions.",
  process: [
    {
      title: "Stratégie et ciblage",
      text: "On définit vos audiences cibles. Lookalike de vos clients, ciblage par poste ou secteur sur LinkedIn, comportements d'achat sur Meta.",
    },
    {
      title: "Production des créatives",
      text: "Visuels, textes d'annonce, formats (image, vidéo, carrousel). On teste plusieurs angles dès le lancement.",
    },
    {
      title: "Lancement et optimisation",
      text: "Budget distribué selon les performances en temps réel. On coupe ce qui ne convertit pas, on scale ce qui marche.",
    },
    {
      title: "Retargeting",
      text: "On reciblage les visiteurs de votre site qui n'ont pas converti. C'est souvent le levier le plus rentable de la campagne.",
    },
  ],
  pourVousSi:
    "Vos clients sont sur les réseaux sociaux mais vous ne savez pas comment les atteindre efficacement. Si vous voulez créer de la demande plutôt que la capter (contrairement à Google Ads). Si vous avez un produit ou service qui se vend bien avec du visuel. Si vous voulez cibler des profils très spécifiques (poste, secteur, taille d'entreprise).",
  faqItems: [
    {
      question: "Meta Ads ou LinkedIn Ads ?",
      answer:
        "Meta pour le B2C et le B2B avec large audience. LinkedIn pour le B2B avec ciblage précis par poste. Souvent les deux en parallèle.",
    },
    {
      question: "Vous produisez les visuels ?",
      answer:
        "Oui. Design des créatives inclus dans la gestion. Vous validez avant diffusion.",
    },
    {
      question: "Quel budget minimum ?",
      answer:
        "400 €/mois sur Meta, 800 €/mois sur LinkedIn. En dessous, les audiences sont trop petites pour optimiser.",
    },
    {
      question: "C'est quoi le retargeting ?",
      answer:
        "On installe le pixel Meta et le tag LinkedIn sur votre site. Les visiteurs qui n'ont pas converti voient vos annonces sur les réseaux. Taux de conversion souvent 3x supérieur.",
    },
  ],
  ctaTitle: (
    <>
      Prêts à toucher{" "}
      <span className="text-nowrap text-highlight">vos clients ?</span>
    </>
  ),
  seoFooter:
    "Advisia conçoit et gère les campagnes Meta Ads (Facebook, Instagram) et LinkedIn Ads pour les PME françaises. Production des créatives, ciblage précis (poste, secteur, comportement, lookalike), optimisation hebdomadaire et reporting transparent. On accompagne PME B2B, e-commerce, formation, services. Pas d'engagement minimum, vous arrêtez à la fin de n'importe quel mois.",
  seoSilo: seoSiloSocialAds,
};

export default function MarketingDigitalSocialAdsPage() {
  return <MarketingLandingTemplate content={content} />;
}
