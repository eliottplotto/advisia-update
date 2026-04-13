export interface OfferDrawerContent {
  offerName: string;
  offerPrice: string;
  offerDelay: string;
  offerContext: string;
  offerBenefits: string[];
  offerIncludes: string[];
  testimonial?: string;
}

const content: Record<string, OfferDrawerContent> = {
  "diagnostic-digital-ia": {
    offerName: "Diagnostic Digital & IA",
    offerPrice: "490 €",
    offerDelay: "48-72h",
    offerContext:
      "Vous avez l'impression de passer du temps sur des tâches qui pourraient être automatisées. Vous ne savez pas par où commencer ni quels outils investir en priorité. Ce diagnostic est fait pour clarifier votre situation.",
    offerBenefits: [
      "Vous savez exactement quelles tâches peuvent être automatisées dans votre entreprise",
      "Vous repartez avec un plan ROI chiffré sur 5 actions prioritaires",
      "Vous évitez d'investir dans les mauvais outils IA",
    ],
    offerIncludes: [
      "Analyse de vos outils et processus actuels",
      "Identification des tâches automatisables",
      "Top 5 actions ROI chiffrées",
      "Rapport actionnable 3-5 pages",
      "Call de restitution 30 min",
    ],
    testimonial:
      "Le diagnostic a révélé 5 automatisations qu'on n'avait même pas envisagées. Le ROI du premier quick win a remboursé le diagnostic en 2 semaines.",
  },

  "audit-securite": {
    offerName: "Audit Sécurité",
    offerPrice: "490 €",
    offerDelay: "24-48h",
    offerContext:
      "Vous avez un site ou une application en production mais vous n'avez jamais fait auditer votre sécurité. Vous ne savez pas si votre code expose des données clients. Ce scan identifie vos vulnérabilités avant qu'elles vous coûtent cher.",
    offerBenefits: [
      "Vous connaissez précisément les failles qui exposent votre entreprise",
      "Chaque vulnérabilité est classée par niveau de risque avec le correctif recommandé",
      "Vous dormez tranquille — vous savez ce qui est sécurisé et ce qui ne l'est pas encore",
    ],
    offerIncludes: [
      "Scan complet code & infrastructure",
      "Rapport des vulnérabilités (CVSS)",
      "Scoring par niveau de risque",
      "Correctifs recommandés par faille",
      "Accès requis : repo + serveur",
    ],
  },

  "audit-visibilite": {
    offerName: "Audit Visibilité & SEO",
    offerPrice: "490 €",
    offerDelay: "48-72h",
    offerContext:
      "Vos concurrents apparaissent avant vous sur Google. Vous avez du mal à comprendre pourquoi, et vous ne savez pas sur quel canal investir. Cet audit analyse votre visibilité sur tous les canaux et vous dit exactement où agir.",
    offerBenefits: [
      "Vous comprenez pourquoi vos concurrents vous devancent sur Google",
      "Vous identifiez les quick wins qui vont générer du trafic rapidement",
      "Vous avez un plan d'action priorisé par canal (SEO, SEA, GEO)",
    ],
    offerIncludes: [
      "Scoring SEO / SEM / GEO",
      "Benchmark 3-5 concurrents",
      "Quick wins identifiés",
      "Plan d'action par canal",
      "Call de restitution 30 min",
    ],
  },

  "audit-e-reputation": {
    offerName: "Audit E-réputation & Sémantique",
    offerPrice: "990 €",
    offerDelay: "1-2 semaines",
    offerContext:
      "Vous voulez savoir ce que le marché dit vraiment de vous, identifier les angles inexploités et comprendre les intentions de recherche de vos clients. Une analyse sémantique approfondie qui va bien au-delà d'un simple audit SEO.",
    offerBenefits: [
      "Vous découvrez ce que le marché dit de vous et les angles que vos concurrents n'ont pas pris",
      "Vous identifiez les mots-clés à forte intention d'achat que personne n'occupe encore",
      "Vous obtenez une cartographie complète de votre écosystème sémantique",
    ],
    offerIncludes: [
      "Extraction textuelle multi-sources",
      "Graphe sémantique de votre marché",
      "Mots-clés classés par intention",
      "Poches de croissance identifiées",
      "Export CSV structuré",
    ],
  },

  "audit-cession-reprise": {
    offerName: "Audit Maturité Cession & Reprise",
    offerPrice: "990 €",
    offerDelay: "48-72h",
    offerContext:
      "Vous cédez ou reprenez une entreprise et vous avez besoin d'évaluer objectivement sa maturité digitale. Ce rapport chiffré est un argument de négociation concret pour valoriser votre cession ou éviter les mauvaises surprises à la reprise.",
    offerBenefits: [
      "Vous obtenez un scoring digital sur 5 axes avec une estimation chiffrée de l'impact sur la valorisation",
      "Vous avez les 10 quick wins pour valoriser rapidement avant la cession",
      "Vous repartez avec un rapport que vous pouvez présenter aux acquéreurs ou aux banques",
    ],
    offerIncludes: [
      "Scoring maturité digitale sur 5 axes",
      "Top 10 actions quick wins",
      "Estimation du gain de valorisation",
      "Entretien de cadrage 1h",
      "Rapport de restitution complet",
    ],
    testimonial:
      "L'audit a révélé que notre maturité digitale était un argument de vente qu'on n'exploitait pas. On a négocié 15% de plus sur le prix de cession.",
  },

  "pack-audit-general": {
    offerName: "Pack Audit Général",
    offerPrice: "1 990 €",
    offerDelay: "2-3 semaines",
    offerContext:
      "Vous avez plusieurs angles à couvrir en même temps — digital, sécurité, visibilité, e-réputation — et vous voulez une vision globale avec une roadmap prête à exécuter. Ce pack combine 4 diagnostics en un rapport consolidé.",
    offerBenefits: [
      "Vision complète sur tous vos axes digitaux en un seul rapport",
      "Roadmap de transformation chiffrée sur 6-12 mois, prête à exécuter",
      "Vous économisez 510 € par rapport aux diagnostics pris séparément",
    ],
    offerIncludes: [
      "4 diagnostics combinés (Digital & IA, Sécurité, Visibilité, E-réputation)",
      "Rapport consolidé cross-analyses",
      "Roadmap chiffrée 6-12 mois",
      "Restitution direction",
      "Économie de 510 € vs. prix séparés",
    ],
  },

  "pack-audit-correction": {
    offerName: "Pack Audit + Correction",
    offerPrice: "3 490 €",
    offerDelay: "3-4 semaines",
    offerContext:
      "Vous ne voulez pas juste un rapport — vous voulez que les problèmes soient réglés. Ce pack inclut tout l'Audit Général plus les corrections appliquées directement sur votre site et votre infrastructure.",
    offerBenefits: [
      "On ne fait pas que diagnostiquer — on corrige directement dans votre code et vos outils",
      "Vous repartez avec des patches sécurité appliqués, des corrections SEO en place et une automatisation déployée",
      "Résultats mesurables dès la livraison, pas juste une liste de recommandations",
    ],
    offerIncludes: [
      "Tout le Pack Audit Général inclus",
      "Patches sécurité appliqués",
      "Corrections SEO techniques",
      "1 automatisation déployée",
      "Documentation complète",
    ],
  },

  "automatisation-unitaire": {
    offerName: "Automatisation Unitaire",
    offerPrice: "390 – 990 €",
    offerDelay: "2-3 jours",
    offerContext:
      "Il y a une tâche précise dans votre équipe qui se répète chaque jour et qui mobilise du temps. Vous voulez que ça s'arrête, vite. Une automatisation ciblée, déployée en quelques jours.",
    offerBenefits: [
      "Une tâche manuelle récurrente disparaît du quotidien de vos équipes",
      "Déployé en 2-3 jours, vos équipes peuvent utiliser l'automatisation dès la semaine suivante",
      "Formation incluse — vos équipes sont autonomes dès la livraison",
    ],
    offerIncludes: [
      "Analyse du processus ciblé",
      "Conception & déploiement de l'automatisation",
      "Tests & validation",
      "Documentation + guide d'usage",
      "Formation à l'utilisation (1h)",
    ],
  },

  "pack-automatisation": {
    offerName: "Pack Automatisation",
    offerPrice: "1 990 – 3 500 €",
    offerDelay: "1-2 semaines",
    offerContext:
      "Vous avez identifié un processus métier entier qui fonctionne encore manuellement — facturation, onboarding, reporting, gestion des leads. Vous voulez automatiser l'ensemble de bout en bout.",
    offerBenefits: [
      "Un processus métier entier tourne sans intervention humaine",
      "3 à 5 automatisations interconnectées déployées en 1-2 semaines",
      "Vos équipes libèrent plusieurs heures par semaine sur ce processus",
    ],
    offerIncludes: [
      "Audit des processus inclus",
      "3 à 5 automatisations déployées",
      "Formation équipes (1h)",
      "Documentation complète",
      "Support 30 jours",
    ],
    testimonial:
      "On avait 3 personnes à temps plein sur la saisie de données. Aujourd'hui c'est automatisé, et elles font du commercial.",
  },

  "assistant-ia-standard": {
    offerName: "Assistant IA Standard",
    offerPrice: "1 990 – 4 990 €",
    offerDelay: "2-4 semaines",
    offerContext:
      "Vos équipes perdent du temps à chercher des informations dans vos documents, procédures et bases de connaissances. Un assistant IA connecté à vos documents internes leur répond en 10 secondes au lieu de 20 minutes.",
    offerBenefits: [
      "Vos équipes trouvent en 10 secondes ce qui prenait 20 minutes de recherche",
      "L'assistant connaît votre métier et répond avec le contexte de votre entreprise",
      "Accès multi-utilisateurs — toute votre équipe en bénéficie dès le premier jour",
    ],
    offerIncludes: [
      "Intégration 50 à 200 documents",
      "Interface de chat dédiée",
      "Base de connaissances structurée",
      "Formation à l'usage",
      "Accès multi-utilisateurs",
    ],
  },

  "assistant-ia-avance": {
    offerName: "Assistant IA Avancé",
    offerPrice: "5 000 – 15 000 €",
    offerDelay: "4-8 semaines",
    offerContext:
      "Vous voulez un système qui lit vos documents en temps réel, se connecte à votre ERP, CRM et base de données, et gère les permissions par utilisateur. Une intelligence centrale pour toute votre organisation.",
    offerBenefits: [
      "Toute la connaissance de votre entreprise est accessible instantanément à chaque collaborateur",
      "Le système se met à jour automatiquement — vos données sont toujours fraîches",
      "Gestion fine des permissions par utilisateur et par département",
    ],
    offerIncludes: [
      "Connexion multi-sources (ERP, CRM, docs)",
      "Mise à jour automatique des données",
      "Gestion des permissions par utilisateur",
      "Interface aux couleurs de votre charte",
      "Formation complète + documentation",
    ],
  },

  "landing-page": {
    offerName: "Landing Page",
    offerPrice: "690 – 1 490 €",
    offerDelay: "3-5 jours",
    offerContext:
      "Vous lancez un produit, une campagne Ads ou un nouveau service et vous avez besoin d'une page de conversion optimisée rapidement. Design personnalisé, SEO natif, tracking configuré.",
    offerBenefits: [
      "Une page qui transforme vos visiteurs en contacts qualifiés en moins d'une semaine",
      "Optimisée pour convertir — chaque élément a été pensé pour guider vers le CTA",
      "SEO on-page natif et tracking analytics configuré dès la mise en ligne",
    ],
    offerIncludes: [
      "Design & développement Next.js",
      "Responsive mobile-first",
      "SEO on-page natif",
      "Tracking analytics configuré",
      "Formulaire & CTA optimisés",
    ],
  },

  "site-vitrine": {
    offerName: "Site Vitrine",
    offerPrice: "1 990 – 4 990 €",
    offerDelay: "2-4 semaines",
    offerContext:
      "Votre site actuel ne donne pas envie de vous contacter, charge lentement ou ne peut pas être mis à jour sans appeler un développeur. Un site professionnel, rapide et modifiable par vous-même.",
    offerBenefits: [
      "Un site qui charge en moins d'une seconde et convainc dès les premières secondes",
      "Modifiable sans développeur — vos équipes gèrent le contenu elles-mêmes",
      "SEO technique complet intégré dès la conception",
    ],
    offerIncludes: [
      "Design & développement Next.js (4-8 pages)",
      "Lighthouse 95+ sur tous les indicateurs",
      "SEO complet (technique + contenu)",
      "Formulaire avec notifications",
      "Formation admin + documentation",
    ],
    testimonial:
      "Advisia a livré notre site en 5 semaines. Rapide, propre, et on peut tout modifier nous-mêmes.",
  },

  "site-ecommerce": {
    offerName: "Site E-commerce",
    offerPrice: "4 990 – 12 000 €",
    offerDelay: "4-8 semaines",
    offerContext:
      "Vous avez des produits à vendre en ligne et vous avez besoin d'une boutique sérieuse — catalogue, panier, paiement sécurisé, gestion des commandes. Un e-commerce fait pour durer.",
    offerBenefits: [
      "Vos produits sont en vente 24h/24 avec paiement sécurisé et SEO produit optimisé",
      "Gestion des commandes intégrée — vous pilotez tout depuis une interface simple",
      "Performance technique au niveau des meilleurs sites e-commerce",
    ],
    offerIncludes: [
      "Catalogue produits illimité",
      "Panier & paiement Stripe",
      "Gestion des commandes",
      "SEO produit optimisé",
      "Formation & documentation",
    ],
  },

  "workshop-ia-dirigeants": {
    offerName: "Workshop IA Dirigeants",
    offerPrice: "490 €",
    offerDelay: "Demi-journée",
    offerContext:
      "Vous entendez parler de l'IA partout mais vous ne savez pas concrètement ce que ça change pour votre secteur. Une demi-journée suffit pour comprendre les enjeux et repartir avec un plan d'action.",
    offerBenefits: [
      "En une demi-journée vous savez comment l'IA s'applique à votre métier",
      "Vous identifiez les 3 cas d'usage prioritaires pour votre entreprise",
      "Vous repartez avec une feuille de route concrète",
    ],
    offerIncludes: [
      "Session 2-4h (présentiel ou visio)",
      "Cas d'usage adaptés à votre secteur",
      "Démos live d'outils IA",
      "Session Q&A dédiée",
      "Slides + ressources + replay",
    ],
    testimonial:
      "Le workshop m'a fait gagner 6 mois. J'ai compris en 3 heures ce que j'aurais mis des mois à découvrir seul.",
  },

  "formation-equipes": {
    offerName: "Formation Équipes",
    offerPrice: "990 – 2 500 €",
    offerDelay: "1-3 jours",
    offerContext:
      "Vous avez déployé des outils IA mais vos équipes ne les utilisent pas vraiment. Ou vous voulez les former aux bonnes pratiques IA avant même de déployer quoi que ce soit. Une formation sur mesure, sur vos outils réels.",
    offerBenefits: [
      "Vos équipes utilisent les outils IA de façon autonome après la formation",
      "Formation sur vos cas métier réels — pas des exercices théoriques",
      "Suivi à 30 jours pour s'assurer que l'adoption tient dans le temps",
    ],
    offerIncludes: [
      "Audit du niveau & des besoins",
      "Sessions sur mesure (1 à 3 jours)",
      "Supports pédagogiques personnalisés",
      "Exercices sur vos outils réels",
      "Suivi à 30 jours",
    ],
  },

  "partenaire-essentiel": {
    offerName: "Partenariat Essentiel",
    offerPrice: "490 €/mois",
    offerDelay: "Sans engagement",
    offerContext:
      "Vous avez un site ou des outils digitaux en production et vous voulez qu'ils soient surveillés sans y penser. Maintenance, support et veille mensuelle inclus. Résiliable à tout moment.",
    offerBenefits: [
      "Vos systèmes tournent sans que vous ayez à vous en préoccuper",
      "En cas de problème, quelqu'un s'en occupe — pas besoin de chercher un prestataire en urgence",
      "1 call mensuel pour faire le point et prioriser les prochaines actions",
    ],
    offerIncludes: [
      "Maintenance & monitoring",
      "Support email 48h",
      "Veille technologique mensuelle",
      "1 call de suivi par mois",
      "Rapport mensuel d'usage",
    ],
  },

  "partenaire-business": {
    offerName: "Partenariat Business",
    offerPrice: "990 €/mois",
    offerDelay: "Sans engagement",
    offerContext:
      "Vous voulez que votre digital évolue en continu chaque mois sans effort de votre part. Évolutions mensuelles, support prioritaire 24h et reporting performances. Idéal pour les entreprises en croissance.",
    offerBenefits: [
      "Votre outil évolue chaque mois — une amélioration concrète livrée sans que vous ayez à demander",
      "Interlocuteur dédié joignable en 24h pour toute question",
      "Reporting performances mensuel avec recommandations actionnables",
    ],
    offerIncludes: [
      "Tout le Partenariat Essentiel",
      "1 optimisation/automatisation par mois",
      "Reporting performances mensuel",
      "Support prioritaire 24h",
      "Accès direct à l'équipe",
    ],
    testimonial:
      "Ça fait 8 mois qu'on est en partenariat Business. Chaque mois il y a une amélioration concrète. On ne pourrait plus s'en passer.",
  },

  "partenaire-strategique": {
    offerName: "Partenariat Stratégique",
    offerPrice: "1 990 €/mois",
    offerDelay: "Sans engagement",
    offerContext:
      "Vous avez besoin d'un directeur technique sans le recruter. Accès illimité à l'équipe, arbitrages d'architecture, participation au comité de direction. La direction tech externalisée pour les PME ambitieuses.",
    offerBenefits: [
      "Un directeur technique dédié à votre entreprise sans le coût d'un CDI",
      "Décisions tech prises par quelqu'un qui connaît vraiment votre contexte",
      "Évolutions illimitées — on avance tant qu'il y a des choses à améliorer",
    ],
    offerIncludes: [
      "Tout le Partenariat Business",
      "Direction technique externalisée",
      "Arbitrages architecture & outils",
      "Accès prioritaire illimité à l'équipe",
      "Participation au comité direction",
    ],
  },

  "pack-valorisation-cession": {
    offerName: "Pack Valorisation Cession",
    offerPrice: "3 500 – 6 000 €",
    offerDelay: "3-4 semaines",
    offerContext:
      "Vous avez une cession en vue dans les prochains mois et vous voulez augmenter la valeur perçue de votre entreprise avant la transaction. Refonte des outils clés, automatisations ciblées, documentation des processus.",
    offerBenefits: [
      "Votre entreprise est plus attractive pour les acquéreurs en quelques semaines",
      "Les outils clés modernisés prouvent aux acheteurs une gestion saine et scalable",
      "La documentation des processus réduit le risque perçu par les acquéreurs",
    ],
    offerIncludes: [
      "Audit maturité digitale",
      "Refonte site ou outils clés",
      "2-3 automatisations ciblées",
      "Documentation processus",
    ],
  },

  "pack-transformation-post-reprise": {
    offerName: "Pack Transformation Post-Reprise",
    offerPrice: "8 000 – 15 000 €",
    offerDelay: "6-8 semaines",
    offerContext:
      "Vous venez de reprendre une entreprise et vous devez moderniser rapidement les outils digitaux. Refonte complète, assistant IA métier, formation des équipes, accompagnement sur 3 mois.",
    offerBenefits: [
      "L'entreprise reprise tourne sur des bases modernes et efficaces en 6-8 semaines",
      "Vos équipes sont formées et autonomes sur les nouveaux outils",
      "Accompagnement 3 mois pour s'assurer que la transformation tient dans le temps",
    ],
    offerIncludes: [
      "Tout Pack Valorisation inclus",
      "Refonte complète des outils digitaux",
      "Assistant IA métier",
      "Formation équipes",
      "Accompagnement 3 mois",
    ],
    testimonial:
      "Avant de signer, on voulait savoir dans quoi on mettait les pieds. Le diagnostic nous a évité une mauvaise surprise sur l'infrastructure.",
  },

  "pack-transformation-ia-metier": {
    offerName: "Pack Transformation + IA Métier",
    offerPrice: "18 000 – 35 000 €",
    offerDelay: "8-12 semaines",
    offerContext:
      "Vous reprenez une entreprise et vous voulez en faire un acteur digital de premier plan. Transformation complète + agent IA avancé sur mesure, intégrations ERP/CRM complètes, roadmap IA 12 mois.",
    offerBenefits: [
      "Avantage compétitif durable avec une entreprise entièrement transformée par l'IA",
      "Agent IA sur mesure connecté à tous vos systèmes internes",
      "Roadmap IA 12 mois pour continuer à creuser l'écart après la mission",
    ],
    offerIncludes: [
      "Tout Pack Transformation Post-Reprise",
      "Agent IA avancé sur mesure",
      "Intégrations ERP/CRM complètes",
      "Roadmap IA 12 mois",
    ],
  },
};

// Aliases
content["audit-ereputation"] = content["audit-e-reputation"];
content["audit-maturite-cession"] = content["audit-cession-reprise"];
content["audit-pre-acquisition"] = content["audit-cession-reprise"];
content["auto-unitaire"] = content["automatisation-unitaire"];
content["pack-auto"] = content["pack-automatisation"];
content["workshop-ia"] = content["workshop-ia-dirigeants"];
content["pack-modernisation"] = content["pack-valorisation-cession"];
content["pack-transformation"] = content["pack-transformation-post-reprise"];
content["valorisation-complete"] = content["pack-transformation-post-reprise"];
content["pack-ia-metier"] = content["pack-transformation-ia-metier"];

export const offersContent = content;
