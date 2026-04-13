export interface OfferDrawerContent {
  offerName: string;
  offerPrice: string;
  offerDelay: string;
  offerContext: string;
  offerBenefits: string[];
  offerIncludes: string[];
  testimonial?: string;
  // Editorial fields
  metaTitle: string;
  metaDescription: string;
  heroTag: string;
  heroH1: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];
  editorialTitle: string;
  editorialText: string;
  bigNumber: string;
  bigNumberLabel: string;
  process: { title: string; text: string }[];
  pourVousSi: string;
  faqItems: { question: string; answer: string }[];
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
    metaTitle: "Diagnostic Digital & IA pour PME | Advisia",
    metaDescription:
      "En 48h, identifiez vos 5 priorités ROI et sachez exactement quoi automatiser en premier. Rapport actionnable livré avec session de restitution.",
    heroTag: "DIAGNOSTICS & AUDITS",
    heroH1: "Vous investissez dans le digital sans savoir par où commencer.",
    heroSubtitle:
      "En 48h, on identifie vos 5 priorités ROI et on vous dit exactement quoi faire en premier.",
    stats: [
      { value: "48%", label: "des PME françaises constatent des gains IA (IBM 2025)" },
      { value: "5%", label: "seulement des TPE/PME automatisent réellement (France Num 2025)" },
      { value: "159.8%", label: "ROI médian documenté sur 12 mois (L'Agence Sauvage 2025)" },
    ],
    editorialTitle: "Le problème n'est pas le manque d'outils. C'est le manque de clarté.",
    editorialText:
      "Chaque semaine de nouveaux outils IA sortent. Chaque semaine des dirigeants de PME investissent dans des solutions qui ne s'adaptent pas à leur contexte. Le résultat : des budgets gaspillés, des équipes déstabilisées, aucun gain mesurable. Notre diagnostic change ça. En 48h, vous savez exactement où vous en êtes et quoi faire ensuite.",
    bigNumber: "28%",
    bigNumberLabel:
      "des dirigeants consacrent au moins 2 jours par semaine aux tâches administratives (CPME 2025)",
    process: [
      {
        title: "Brief 30 min gratuit",
        text: "Un call pour comprendre votre contexte, vos outils actuels et vos priorités. Aucune préparation requise de votre côté.",
      },
      {
        title: "Analyse 24-48h",
        text: "On cartographie vos processus, on identifie les tâches automatisables et on chiffre le ROI de chaque action prioritaire.",
      },
      {
        title: "Rapport livré + session de restitution",
        text: "Un rapport actionnable de 3 à 5 pages avec vos 5 priorités chiffrées. Session de restitution de 30 min pour répondre à vos questions.",
      },
    ],
    pourVousSi:
      "Ce diagnostic est fait pour vous si vous pilotez une PME de 5 à 200 salariés et vous avez l'impression de perdre du temps sans savoir exactement où. Si vous avez déjà testé des outils IA sans obtenir de résultats concrets. Si vous voulez un plan d'action clair avant d'investir davantage.",
    faqItems: [
      {
        question: "Ce diagnostic m'engage-t-il à travailler avec vous ?",
        answer:
          "Non. Le rapport vous appartient entièrement. Vous pouvez l'utiliser avec nous ou avec quelqu'un d'autre — aucun engagement n'est requis.",
      },
      {
        question: "Combien de temps ça prend de notre côté ?",
        answer:
          "30 à 60 minutes pour le call de cadrage, le reste c'est nous. Vous n'avez pas à préparer de dossier particulier.",
      },
      {
        question: "Qu'est-ce que je reçois concrètement ?",
        answer:
          "Un rapport actionnable de 3 à 5 pages avec des recommandations chiffrées, priorisées et directement applicables à votre situation.",
      },
      {
        question: "Et si je veux aller plus loin après le diagnostic ?",
        answer:
          "On peut enchaîner sur une automatisation unitaire ou un pack complet. Le montant du diagnostic est alors déduit de la prestation suivante.",
      },
    ],
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
    metaTitle: "Audit Sécurité Web & Code | Advisia",
    metaDescription:
      "Scan complet de votre code et infrastructure en 24h. Vulnérabilités classées par risque avec correctifs recommandés. Dormez tranquille. 490€.",
    heroTag: "DIAGNOSTICS & AUDITS",
    heroH1: "Votre code est-il exposé ? On le sait en 24h.",
    heroSubtitle:
      "Un scan complet identifie vos failles avant qu'elles vous coûtent cher — avec le correctif recommandé pour chacune.",
    stats: [
      { value: "43%", label: "des PME ont subi au moins une cyberattaque (CESIN 2024)" },
      { value: "21 jours", label: "délai moyen de détection d'une intrusion (IBM Security)" },
      { value: "4.45M€", label: "coût moyen d'une violation de données (IBM 2023)" },
    ],
    editorialTitle: "Une faille non détectée ne coûte pas rien. Elle coûte plus tard.",
    editorialText:
      "La plupart des PME ne font auditer leur sécurité qu'après un incident. À ce moment, il est trop tard — données exposées, réputation entamée, clients inquiets. Notre audit inverse la logique : on cherche les failles avant qu'elles deviennent des incidents. Chaque vulnérabilité est classée par niveau de risque CVSS et accompagnée d'un correctif précis.",
    bigNumber: "60%",
    bigNumberLabel: "des PME n'ont pas de plan de réponse aux incidents de sécurité (ANSSI 2024)",
    process: [
      {
        title: "Accès sécurisé fourni",
        text: "Vous nous donnez accès à votre repo et votre serveur. Tout est traité de façon confidentielle — NDA disponible sur demande.",
      },
      {
        title: "Scan complet 24h",
        text: "Analyse statique du code, scan des dépendances, test des headers HTTP, analyse de la configuration serveur.",
      },
      {
        title: "Rapport de vulnérabilités",
        text: "Chaque faille est listée avec son score CVSS, son niveau de risque et le correctif technique recommandé.",
      },
    ],
    pourVousSi:
      "Cet audit est fait pour vous si vous avez un site ou une application en production que vous n'avez jamais fait auditer. Si vous traitez des données clients et voulez être certain qu'elles sont protégées. Si un partenaire ou client vous demande des garanties de sécurité.",
    faqItems: [
      {
        question: "Mes données sont-elles en sécurité pendant l'audit ?",
        answer:
          "Oui. On signe un NDA avant tout accès. Vos données ne sont jamais stockées sur nos serveurs — on travaille directement sur votre infrastructure.",
      },
      {
        question: "Que se passe-t-il si des failles critiques sont trouvées ?",
        answer:
          "On vous alerte immédiatement par téléphone avec les priorités à traiter en urgence, avant même le rapport final.",
      },
      {
        question: "Pouvez-vous aussi corriger les failles trouvées ?",
        answer:
          "Oui, le Pack Audit + Correction inclut les corrections appliquées directement dans votre code.",
      },
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
    metaTitle: "Audit Visibilité SEO & SEM | Advisia",
    metaDescription:
      "Comprenez pourquoi vos concurrents vous devancent sur Google. Plan d'action priorisé par canal en 48h. SEO, SEM, GEO. 490€.",
    heroTag: "DIAGNOSTICS & AUDITS",
    heroH1: "Vos concurrents apparaissent avant vous sur Google.",
    heroSubtitle:
      "On analyse votre visibilité sur tous les canaux et on vous dit exactement où agir en premier.",
    stats: [
      { value: "75%", label: "des clics vont aux 3 premiers résultats Google (SparkToro 2024)" },
      { value: "68%", label: "des expériences en ligne commencent par un moteur de recherche" },
      { value: "47%", label: "des PME n'ont aucune stratégie SEO documentée (France Num 2024)" },
    ],
    editorialTitle: "Être invisible sur Google n'est pas une fatalité. C'est un problème de méthode.",
    editorialText:
      "Vos concurrents ne sont pas forcément meilleurs que vous. Ils ont juste optimisé des choses que vous n'avez pas encore regardées. Notre audit analyse votre positionnement SEO, vos campagnes SEM et votre présence GEO en les comparant à 3 à 5 de vos concurrents directs. Résultat : une liste de quick wins classés par impact potentiel.",
    bigNumber: "4x",
    bigNumberLabel:
      "plus de trafic pour les entreprises qui corrigent leurs 3 premiers défauts SEO",
    process: [
      {
        title: "Collecte des données",
        text: "On analyse votre domaine, vos mots-clés actuels et l'ensemble de vos concurrents identifiés en 24h.",
      },
      {
        title: "Benchmarking concurrentiel",
        text: "Comparaison point par point avec 3 à 5 concurrents directs sur SEO, SEM et GEO.",
      },
      {
        title: "Plan d'action priorisé",
        text: "Rapport avec quick wins classés par impact et facilité de mise en œuvre. Call de restitution de 30 min inclus.",
      },
    ],
    pourVousSi:
      "Cet audit est fait pour vous si vous investissez en publicité sans comprendre pourquoi votre organique ne décolle pas. Si des concurrents plus petits vous dépassent sur Google. Si vous n'avez jamais fait d'audit SEO ou si le dernier date de plus de 18 mois.",
    faqItems: [
      {
        question: "Qu'est-ce que le GEO et pourquoi c'est important ?",
        answer:
          "Le GEO (Generative Engine Optimization) désigne l'optimisation pour les moteurs de recherche IA comme ChatGPT et Perplexity. En 2025, ils représentent une part croissante du trafic entrant.",
      },
      {
        question: "Combien de temps pour voir des résultats après les corrections ?",
        answer:
          "Les quick wins techniques (balises, vitesse, structure) montrent des résultats en 4 à 8 semaines. Le contenu prend 3 à 6 mois.",
      },
      {
        question: "L'audit inclut-il des recommandations de contenu ?",
        answer:
          "Oui. On identifie les sujets à couvrir en priorité et les intentions de recherche non occupées par vos concurrents.",
      },
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
    metaTitle: "Audit E-réputation & Sémantique | Advisia",
    metaDescription:
      "Découvrez ce que le marché dit de vous. Analyse sémantique multi-sources, graphe de votre écosystème, mots-clés à haute intention. 990€.",
    heroTag: "DIAGNOSTICS & AUDITS",
    heroH1: "Ce que le marché dit de vous.",
    heroSubtitle:
      "Une analyse sémantique multi-sources qui révèle les angles inexploités et les intentions d'achat que vos concurrents n'occupent pas encore.",
    stats: [
      { value: "87%", label: "des acheteurs B2B lisent des avis avant de contacter un fournisseur" },
      { value: "3x", label: "plus d'impact sur la conversion avec une e-réputation maîtrisée" },
      { value: "1 étoile", label: "de plus sur Google = 5 à 9% de CA supplémentaire (Harvard Business School)" },
    ],
    editorialTitle: "Votre réputation se construit sans vous. Autant la piloter.",
    editorialText:
      "Forums, réseaux sociaux, comparateurs, Google My Business — votre entreprise est mentionnée partout, souvent sans que vous le sachiez. Notre analyse extrait ces données, les structure et les cartographie pour vous donner une vision claire de votre positionnement perçu. On identifie aussi les angles sémantiques que vos concurrents n'ont pas pris et qui sont autant de portes ouvertes.",
    bigNumber: "62%",
    bigNumberLabel: "des clients changent d'avis sur un achat après une recherche en ligne",
    process: [
      {
        title: "Extraction multi-sources",
        text: "On collecte les mentions de votre marque sur tous les canaux : avis, forums, médias, réseaux sociaux, résultats de recherche.",
      },
      {
        title: "Analyse sémantique",
        text: "On structure les données en graphe sémantique : perception, intentions de recherche, territoires concurrentiels.",
      },
      {
        title: "Rapport & export",
        text: "Rapport avec graphe sémantique, mots-clés classés par intention d'achat et liste des poches de croissance. Export CSV inclus.",
      },
    ],
    pourVousSi:
      "Cet audit est fait pour vous si vous vous demandez pourquoi vous perdez des deals sans raison apparente. Si votre marque génère des mentions que vous ne contrôlez pas. Si vous cherchez des angles de contenu différenciants que vos concurrents n'exploitent pas.",
    faqItems: [
      {
        question: "Quelle est la différence avec un audit SEO classique ?",
        answer:
          "L'audit e-réputation va bien au-delà du SEO. On analyse ce que les gens disent de vous, pas seulement comment ils vous trouvent. Le graphe sémantique révèle des insights qu'un audit SEO ne capte pas.",
      },
      {
        question: "Sur quelles sources portez-vous l'analyse ?",
        answer:
          "Google, TrustPilot, LinkedIn, forums sectoriels, comparateurs B2B, médias en ligne et résultats de recherche générés par IA.",
      },
      {
        question: "Le rapport est-il confidentiel ?",
        answer:
          "Oui. Toutes nos analyses sont couvertes par une confidentialité stricte. Aucune donnée n'est partagée avec des tiers.",
      },
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
    metaTitle: "Audit Maturité Digitale Cession & Reprise | Advisia",
    metaDescription:
      "Scoring digital sur 5 axes en 48-72h. Chiffrez le gain de valorisation et identifiez 10 quick wins avant la transaction. 990€.",
    heroTag: "CESSION & REPRISE",
    heroH1: "Votre maturité digitale a une valeur. On la chiffre.",
    heroSubtitle:
      "En 48-72h, un rapport de scoring sur 5 axes que vous présentez aux acquéreurs ou aux banques.",
    stats: [
      { value: "15%", label: "de valorisation supplémentaire avec une maturité digitale documentée" },
      { value: "68%", label: "des cédants sous-estiment le temps de préparation numérique (BPI France 2024)" },
      { value: "43%", label: "des acquéreurs font désormais un audit digital avant de signer (Ernst & Young 2024)" },
    ],
    editorialTitle: "La maturité digitale est devenue un critère de valorisation. Peu de dirigeants le savent.",
    editorialText:
      "Les acquéreurs regardent les outils en place, les processus documentés, la visibilité en ligne et la capacité à passer à l'échelle sans recruter. Une entreprise bien outillée digitalement inspire confiance et se valorise mieux. Notre audit quantifie cet avantage — ou identifie ce qu'il faut corriger avant la transaction.",
    bigNumber: "3 mois",
    bigNumberLabel:
      "suffisent pour améliorer significativement le score de maturité digitale avant une cession",
    process: [
      {
        title: "Entretien de cadrage 1h",
        text: "On comprend le contexte de la transaction, les axes prioritaires et la temporalité. Confidentialité totale garantie.",
      },
      {
        title: "Évaluation sur 5 axes",
        text: "Analyse de vos outils, processus, sécurité, visibilité et maturité IA. Chaque axe est scoré et contextualisé.",
      },
      {
        title: "Rapport de restitution complet",
        text: "Scoring chiffré, estimation du gain de valorisation, top 10 quick wins et recommandations pour la data room.",
      },
    ],
    pourVousSi:
      "Cet audit est fait pour vous si vous envisagez une cession dans les 6 à 18 mois. Si vous reprenez une entreprise et voulez évaluer son potentiel digital avant de signer. Si vos conseils vous ont signalé que le digital était un point à travailler dans la négociation.",
    faqItems: [
      {
        question: "Les informations restent-elles confidentielles ?",
        answer:
          "Oui, confidentialité totale. Aucune information n'est partagée avec des tiers sans votre accord explicite. Un NDA peut être signé.",
      },
      {
        question: "Ça m'engage à vendre ou à acheter ?",
        answer:
          "Non. Notre mission est d'évaluer et de préparer. La décision de cession ou d'acquisition reste entièrement la vôtre.",
      },
      {
        question: "Peut-on corriger les points faibles avant la transaction ?",
        answer:
          "Oui. Le Pack Valorisation Cession prend le relais sur la correction des points identifiés dans l'audit.",
      },
    ],
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
    metaTitle: "Pack Audit Général Digital | Advisia",
    metaDescription:
      "Vision complète sur 4 axes digitaux en un rapport consolidé. Roadmap 6-12 mois prête à exécuter. 510€ économisés vs diagnostics séparés. 1 990€.",
    heroTag: "DIAGNOSTICS & AUDITS",
    heroH1: "Vision complète sur 4 axes. Roadmap 6-12 mois.",
    heroSubtitle:
      "Quatre diagnostics combinés en un rapport consolidé. Une roadmap prête à exécuter, sans vous éparpiller.",
    stats: [
      { value: "85%", label: "des budgets digitaux PME sont alloués sans audit préalable (France Num 2025)" },
      { value: "72%", label: "des dirigeants ayant réalisé un audit complet ont déployé leur roadmap dans les 6 mois (Gartner 2024)" },
      { value: "2,4x", label: "plus de ROI sur les investissements digitaux précédés d'un diagnostic structuré (McKinsey 2024)" },
    ],
    editorialTitle: "Le problème avec les diagnostics partiels, c'est qu'ils créent des angles morts.",
    editorialText:
      "Un audit SEO sans audit de sécurité peut vous pousser à investir sur un site vulnérable. Un audit IA sans analyse e-réputation peut vous faire passer à côté d'un problème d'image qui tue la conversion. Le Pack Audit Général croise les quatre analyses pour donner une vision cohérente et des priorités qui tiennent compte de votre situation globale.",
    bigNumber: "40%",
    bigNumberLabel: "des projets de transformation digitale échouent faute de diagnostic initial (Standish Group 2024)",
    process: [
      {
        title: "Cadrage initial",
        text: "Un call de 45 min pour comprendre vos priorités, votre secteur et les enjeux spécifiques à votre entreprise.",
      },
      {
        title: "4 analyses en parallèle",
        text: "Digital & IA, Sécurité, Visibilité SEO/SEM, E-réputation — menées simultanément sur 2 à 3 semaines.",
      },
      {
        title: "Rapport consolidé + roadmap",
        text: "Un rapport cross-analyses avec les priorités croisées et une roadmap exécutable sur 6 à 12 mois. Session de restitution direction incluse.",
      },
    ],
    pourVousSi:
      "Ce pack est fait pour vous si vous n'avez jamais fait d'audit complet et voulez une vision globale avant de prioriser. Si vous préparez un budget digital pour l'année à venir. Si vous voulez présenter une roadmap structurée à vos actionnaires ou à votre comité de direction.",
    faqItems: [
      {
        question: "Peut-on commander seulement certains diagnostics ?",
        answer:
          "Oui. Chaque diagnostic est disponible séparément. Le pack vous fait économiser 510€ et garantit une analyse croisée plus pertinente.",
      },
      {
        question: "Qui reçoit le rapport de restitution ?",
        answer:
          "La session de restitution est prévue pour la direction. Elle peut se faire en présence de plusieurs interlocuteurs en visio.",
      },
      {
        question: "La roadmap est-elle exécutable sans vous mandater ?",
        answer:
          "La roadmap est indépendante. Vous pouvez l'exécuter avec vos équipes, avec un autre prestataire ou avec nous — votre choix.",
      },
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
    metaTitle: "Pack Audit + Correction Appliquée | Advisia",
    metaDescription:
      "On diagnostique et on corrige dans la foulée. Patches sécurité, corrections SEO, automatisation déployée. Résultats à la livraison. 3 490€.",
    heroTag: "DIAGNOSTICS & AUDITS",
    heroH1: "On diagnostique. Et on corrige dans la foulée.",
    heroSubtitle:
      "Plus qu'un rapport — les corrections sont appliquées directement dans votre code et vos outils à la livraison.",
    stats: [
      { value: "67%", label: "des recommandations d'audit restent non implémentées un an après livraison (Gartner 2023)" },
      { value: "4x", label: "plus rapide avec un prestataire qui corrige vs une équipe interne (McKinsey 2024)" },
      { value: "2,4M€", label: "coût moyen des incidents dus à des correctifs non appliqués (IBM 2024)" },
    ],
    editorialTitle: "Un rapport de 80 slides sans mise en œuvre coûte plus cher qu'un rapport avec correction.",
    editorialText:
      "La plupart des audits se terminent par une liste de recommandations que personne n'implémente faute de temps ou de ressources. Le Pack Audit + Correction casse ce schéma : on diagnostique, on priorise et on corrige dans la même mission. À la livraison, les patches sécurité sont en place, les corrections SEO sont déployées et une première automatisation tourne.",
    bigNumber: "6 sem.",
    bigNumberLabel: "délai moyen entre un audit et le début des corrections quand les équipes internes prennent en charge (Gartner 2023)",
    process: [
      {
        title: "Pack Audit Général intégral",
        text: "Les 4 diagnostics sont réalisés en parallèle sur 2 semaines. Rapport consolidé + roadmap livré à mi-parcours.",
      },
      {
        title: "Corrections en parallèle",
        text: "Pendant la restitution, on démarre les corrections : patches sécurité critiques, optimisations SEO techniques, première automatisation.",
      },
      {
        title: "Livraison + documentation",
        text: "Tout est livré avec documentation complète : ce qui a été fait, comment ça fonctionne et ce qu'il reste à faire.",
      },
    ],
    pourVousSi:
      "Ce pack est fait pour vous si vous voulez des résultats, pas juste un rapport. Si vous n'avez pas d'équipe technique pour implémenter les recommandations. Si vous avez une deadline — événement commercial, audit partenaire, levée de fonds — et devez être en ordre rapidement.",
    faqItems: [
      {
        question: "Comment choisissez-vous quoi corriger en priorité ?",
        answer:
          "On priorise selon l'impact ROI et le niveau de risque. Les failles de sécurité critiques sont corrigées en premier, puis le SEO à fort impact, puis l'automatisation la plus rentable.",
      },
      {
        question: "Peut-on voir ce qui a été corrigé ?",
        answer:
          "Oui. Chaque correction est documentée avec un before/after mesurable. Vous avez une visibilité totale sur ce qui a changé.",
      },
      {
        question: "Est-ce que ça perturbe nos systèmes en production ?",
        answer:
          "Non. On travaille sur des branches de développement et on déploie en dehors des heures de pointe avec roll-back possible.",
      },
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
    metaTitle: "Automatisation Unitaire de Tâche | Advisia",
    metaDescription:
      "Une tâche récurrente éliminée en 2-3 jours. Déployé dans votre stack existante, formation incluse dès la livraison. 390 à 990€.",
    heroTag: "AUTOMATISATION",
    heroH1: "Une tâche mange 5h par semaine à vos équipes. On l'élimine en 3 jours.",
    heroSubtitle:
      "Une automatisation ciblée, déployée dans votre environnement, avec formation incluse dès la livraison.",
    stats: [
      { value: "33%", label: "d'augmentation de productivité en moyenne (McKinsey)" },
      { value: "51h", label: "perdues par an par salarié sur des tâches manuelles (Teamleader)" },
      { value: "45%", label: "des tâches répétitives sont automatisables sans infrastructure technique lourde (McKinsey 2023)" },
    ],
    editorialTitle: "L'automatisation ne commence pas par une refonte. Elle commence par une tâche.",
    editorialText:
      "On ne vous demande pas de transformer votre entreprise d'un coup. On identifie la tâche qui coûte le plus de temps à vos équipes et on l'automatise en 2 à 3 jours. Ça peut être un reporting, une saisie, une relance, un transfert de données entre deux outils. Peu importe la tâche — si elle se répète, elle peut être automatisée.",
    bigNumber: "80%",
    bigNumberLabel: "des demandes récurrentes peuvent être traitées automatiquement",
    process: [
      {
        title: "Identification de la tâche cible",
        text: "On analyse vos processus et on identifie la tâche avec le meilleur ratio temps économisé / complexité d'automatisation.",
      },
      {
        title: "Conception & déploiement",
        text: "On conçoit l'automatisation, on la teste avec vous et on la déploie dans votre environnement sans perturber votre quotidien.",
      },
      {
        title: "Formation & documentation",
        text: "Vos équipes sont formées en 1h. Elles peuvent modifier les paramètres elles-mêmes. Support inclus 30 jours.",
      },
    ],
    pourVousSi:
      "Cette offre est faite pour vous si vous avez une tâche précise qui se répète chaque jour et que vous avez toujours voulu automatiser. Si vous n'avez pas de DSI et avez besoin que ça soit simple et déployé vite. Si vous voulez tester l'automatisation avant de vous engager sur un pack complet.",
    faqItems: [
      {
        question: "Quels outils peut-on connecter ?",
        answer:
          "On s'adapte à votre stack — Notion, Airtable, Google Workspace, Microsoft 365, Slack, CRM, ERP et plus de 5 000 autres via Zapier, Make ou n8n.",
      },
      {
        question: "Faut-il être technique pour maintenir l'automatisation ?",
        answer:
          "Non. On documente tout et on forme vos équipes. La majorité des modifications courantes se font sans aucune compétence technique.",
      },
      {
        question: "Que se passe-t-il si l'automatisation tombe en panne ?",
        answer:
          "Le support est inclus pendant 30 jours. Après, on peut vous accompagner via un partenariat mensuel ou former quelqu'un en interne.",
      },
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
    metaTitle: "Pack Automatisation de Process Métier | Advisia",
    metaDescription:
      "Un process entier automatisé de bout en bout en 1 à 2 semaines. 3 à 5 automatisations interconnectées. ROI documenté à 240% sur 6 mois. 1 990 à 3 500€.",
    heroTag: "AUTOMATISATION",
    heroH1: "Votre process métier tourne seul. Vos équipes font autre chose.",
    heroSubtitle:
      "De 3 à 5 automatisations interconnectées déployées en 1 à 2 semaines. Un process entier libéré.",
    stats: [
      { value: "40%", label: "du temps admin éliminé en moyenne (cas PME Lyon)" },
      { value: "240%", label: "ROI à 6 mois documenté" },
      { value: "1h30", label: "économisée par collaborateur par jour (Gartner 2024)" },
    ],
    editorialTitle: "Automatiser une tâche c'est bien. Automatiser un process c'est transformant.",
    editorialText:
      "La vraie valeur de l'automatisation ne vient pas d'une tâche isolée. Elle vient du moment où les tâches sont interconnectées — quand la saisie déclenche la facture qui déclenche la relance qui déclenche le reporting. C'est ce que déploie le Pack Automatisation : un process entier, de bout en bout, sans intervention humaine.",
    bigNumber: "23%",
    bigNumberLabel: "d'augmentation du CA sans recrutement supplémentaire après automatisation complète d'un process (Salesforce 2024)",
    process: [
      {
        title: "Audit du processus cible",
        text: "On cartographie toutes les étapes du processus, les outils impliqués et les points de friction. On propose l'architecture d'automatisation optimale.",
      },
      {
        title: "Déploiement des automatisations",
        text: "3 à 5 automatisations interconnectées déployées en parallèle, testées en conditions réelles avant mise en production.",
      },
      {
        title: "Formation équipes + support",
        text: "Formation collective de 1h. Documentation complète. Support de 30 jours pour que l'adoption soit réelle.",
      },
    ],
    pourVousSi:
      "Ce pack est fait pour vous si vous avez identifié un processus entier — facturation, onboarding, reporting, gestion des leads — qui fonctionne encore manuellement. Si vous avez plusieurs automatisations unitaires en tête et voulez les connecter. Si vous voulez un ROI mesurable sur 3 à 6 mois.",
    faqItems: [
      {
        question: "Comment mesure-t-on le ROI après le déploiement ?",
        answer:
          "On met en place des indicateurs avant le déploiement — temps passé par tâche, nombre d'erreurs. 30 jours après, on mesure l'écart.",
      },
      {
        question: "Que se passe-t-il si nos outils changent après le déploiement ?",
        answer:
          "Les automatisations sont documentées et modulaires. Une modification d'outil nécessite généralement moins d'1h de reconfiguration.",
      },
      {
        question: "Peut-on commencer par une automatisation unitaire puis passer au pack ?",
        answer:
          "Oui. Le montant de l'automatisation unitaire est déduit du pack si vous enchaînez dans les 3 mois.",
      },
    ],
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
    metaTitle: "Assistant IA d'Entreprise Standard | Advisia",
    metaDescription:
      "Un assistant IA connecté à vos documents internes. Réponses en 10 secondes au lieu de 20 minutes. Multi-utilisateurs, sécurisé. 1 990 à 4 990€.",
    heroTag: "INTELLIGENCE ARTIFICIELLE",
    heroH1: "20 minutes pour trouver une info. On réduit ça à 10 secondes.",
    heroSubtitle:
      "Un assistant IA connecté à vos documents internes répond en temps réel avec le contexte de votre entreprise.",
    stats: [
      { value: "20%", label: "du temps de travail perdu en recherche d'information (McKinsey)" },
      { value: "65%", label: "des employés disent perdre du temps à chercher des infos déjà disponibles en interne (IDC 2023)" },
      { value: "3h/sem.", label: "économisées par collaborateur avec un assistant IA dédié (Salesforce State of AI 2024)" },
    ],
    editorialTitle: "L'information est dans vos documents. Le problème c'est qu'on ne peut pas tout lire.",
    editorialText:
      "Chaque semaine vos équipes passent des heures à chercher dans des dossiers partagés, des emails et des procédures pour trouver une information qu'elles ont déjà traitée. Un assistant IA connecté à vos documents internes répond en 10 secondes avec la bonne information, avec le bon contexte, dans la formulation de votre entreprise.",
    bigNumber: "120h",
    bigNumberLabel: "par collaborateur par an économisées sur la recherche d'information",
    process: [
      {
        title: "Collecte & structuration",
        text: "On intègre vos documents — procédures, fiches produits, guides, emails types — dans une base de connaissances structurée.",
      },
      {
        title: "Déploiement de l'assistant",
        text: "Interface de chat dédiée, accessible depuis le navigateur. Multi-utilisateurs, accès sécurisé par identifiant.",
      },
      {
        title: "Formation & adoption",
        text: "Formation de vos équipes à l'usage. L'assistant s'améliore au fil des questions — plus il est utilisé, plus il est pertinent.",
      },
    ],
    pourVousSi:
      "Cet assistant est fait pour vous si vos équipes perdent du temps à chercher des informations dans vos documents internes. Si vous avez des procédures importantes que personne ne retrouve quand il en a besoin. Si vous intégrez régulièrement de nouveaux collaborateurs qui doivent monter en compétence rapidement.",
    faqItems: [
      {
        question: "Quelle est la différence avec ChatGPT ?",
        answer:
          "ChatGPT ne connaît pas votre entreprise. Notre assistant est alimenté uniquement par vos documents et répond avec le contexte de votre organisation. Aucune donnée n'est utilisée pour entraîner des modèles tiers.",
      },
      {
        question: "Que se passe-t-il si on ajoute de nouveaux documents ?",
        answer:
          "On peut intégrer de nouveaux documents à tout moment. La mise à jour prend généralement moins d'une journée.",
      },
      {
        question: "L'assistant est-il accessible depuis le mobile ?",
        answer:
          "Oui. L'interface est responsive et accessible depuis n'importe quel appareil avec une connexion internet.",
      },
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
    metaTitle: "Assistant IA Avancé Multi-Sources | Advisia",
    metaDescription:
      "IA connectée à vos ERP, CRM et documents. Mise à jour automatique, permissions fines par utilisateur. L'intelligence centrale de votre organisation. 5 000 à 15 000€.",
    heroTag: "INTELLIGENCE ARTIFICIELLE",
    heroH1: "Toute la connaissance de votre entreprise. Accessible instantanément.",
    heroSubtitle:
      "Un système IA connecté à vos ERP, CRM et documents. Mis à jour en temps réel. Permissions fines par utilisateur.",
    stats: [
      { value: "32%", label: "de productivité gagnée sur les équipes commerciales avec une IA connectée au CRM (Salesforce 2024)" },
      { value: "6h/sem.", label: "économisées par manager sur la recherche de données opérationnelles (McKinsey 2024)" },
      { value: "70%", label: "des décisions métier prises sur des données périmées sans synchronisation temps réel (Gartner 2024)" },
    ],
    editorialTitle: "Un assistant IA qui ne sait pas ce qu'il s'est passé hier est inutile.",
    editorialText:
      "L'assistant IA standard fonctionne sur des documents figés. L'assistant avancé se connecte à vos systèmes en temps réel — votre ERP, votre CRM, vos bases de données — et répond avec des informations actualisées à la minute. Un commercial peut demander le stock disponible. Un manager peut demander les KPIs de la semaine. Tout ça sans quitter l'interface.",
    bigNumber: "15 000+",
    bigNumberLabel: "requêtes traitées par mois dans les déploiements avancés",
    process: [
      {
        title: "Cartographie des sources",
        text: "On identifie tous vos systèmes de données — ERP, CRM, docs, emails — et on conçoit l'architecture de connexion.",
      },
      {
        title: "Intégrations & permissions",
        text: "On connecte chaque source avec les droits appropriés. Chaque utilisateur ne voit que ce qu'il est autorisé à voir.",
      },
      {
        title: "Déploiement & formation",
        text: "Interface aux couleurs de votre charte. Formation complète de vos équipes. Documentation technique pour votre IT.",
      },
    ],
    pourVousSi:
      "Cet assistant est fait pour vous si vous avez plusieurs systèmes qui ne se parlent pas et dont vos équipes doivent jongler. Si vous avez besoin d'une intelligence opérationnelle qui répond sur des données en temps réel. Si vous voulez créer un avantage compétitif durable par la maîtrise de vos données.",
    faqItems: [
      {
        question: "Nos données restent-elles dans nos systèmes ?",
        answer:
          "Oui. L'architecture privilégie la consultation des sources en temps réel plutôt que la copie. Vos données ne quittent pas vos systèmes.",
      },
      {
        question: "Est-ce compatible avec nos outils Microsoft / Google ?",
        answer:
          "Oui. On intègre nativement Microsoft 365, Google Workspace, Salesforce, HubSpot, les principaux ERP du marché et des API personnalisées.",
      },
      {
        question: "Que se passe-t-il si un système source tombe en panne ?",
        answer:
          "L'assistant reste opérationnel sur les autres sources. Chaque connexion est monitorée et une alerte est envoyée automatiquement.",
      },
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
    metaTitle: "Création Landing Page Haute Conversion | Advisia",
    metaDescription:
      "Une page de conversion optimisée en 3 à 5 jours. Design sur mesure, SEO natif, tracking configuré. Prête pour vos campagnes Ads. 690 à 1 490€.",
    heroTag: "CRÉATION WEB",
    heroH1: "Une page qui convertit les visiteurs en contacts. En moins d'une semaine.",
    heroSubtitle:
      "Design personnalisé, SEO on-page natif, tracking configuré — prête à recevoir vos campagnes Ads dès la livraison.",
    stats: [
      { value: "2-3x", label: "taux de conversion amélioré vs une page générique (Unbounce 2024)" },
      { value: "80%", label: "du budget Ads gaspillé si la landing page n'est pas optimisée pour la conversion (Google 2024)" },
      { value: "1,1s", label: "de temps de chargement max avant que le taux de conversion chute de 38% (Deloitte)" },
    ],
    editorialTitle: "Une landing page qui ne convertit pas, c'est de la publicité qui part à la poubelle.",
    editorialText:
      "Chaque visiteur qui arrive sur votre page a un coût — Ads, SEO, temps commercial. Une page mal conçue gaspille ces efforts. On conçoit chaque landing page en partant de la conversion : quel message accroche, quel CTA déclenche, quelle preuve sociale convainc. Design, copywriting et technique sont alignés vers un seul objectif : générer des contacts.",
    bigNumber: "48h",
    bigNumberLabel: "après la livraison, votre landing page est indexée et prête à recevoir du trafic",
    process: [
      {
        title: "Brief & architecture",
        text: "On cadre votre objectif de conversion, votre audience et votre offre. On propose une architecture de page validée en 24h.",
      },
      {
        title: "Design & développement",
        text: "Design personnalisé, développement Next.js, responsive mobile-first. Tracking analytics et formulaire configurés.",
      },
      {
        title: "Livraison & optimisation",
        text: "Score Lighthouse 95+ garanti. SEO on-page en place. 14 jours de support pour ajuster après les premiers tests.",
      },
    ],
    pourVousSi:
      "Cette landing page est faite pour vous si vous lancez une campagne Ads et avez besoin d'une page dédiée qui convertit. Si vous avez une nouvelle offre à présenter rapidement. Si votre site actuel ne génère pas assez de leads et vous voulez tester une approche différente.",
    faqItems: [
      {
        question: "Peut-on faire évoluer la landing page après la livraison ?",
        answer:
          "Oui. On vous documente les modifications courantes. Pour des changements structurels, on est disponibles à la journée.",
      },
      {
        question: "Le texte de la page est-il inclus ?",
        answer:
          "On vous propose une structure de copywriting. Si vous avez du contenu existant, on l'adapte. Le copywriting complet est en option.",
      },
      {
        question: "Peut-on connecter la landing page à notre CRM ?",
        answer:
          "Oui. On connecte le formulaire à votre CRM, votre outil d'emailing ou votre Google Sheet selon votre workflow.",
      },
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
    metaTitle: "Création Site Vitrine Professionnel | Advisia",
    metaDescription:
      "Un site professionnel livré en 2 à 4 semaines. Lighthouse 95+, SEO complet, modifiable sans développeur. Next.js. 1 990 à 4 990€.",
    heroTag: "CRÉATION WEB",
    heroH1: "Un site qui charge en moins d'une seconde. Et qui génère des contacts.",
    heroSubtitle:
      "Design sur mesure, Lighthouse 95+, SEO complet intégré. Modifiable sans développeur dès la livraison.",
    stats: [
      { value: "68%", label: "des PME génèrent moins de 5 contacts/mois via leur site (France Num 2025)" },
      { value: "1 sec", label: "de retard au chargement = 7% de conversions en moins (Google 2024)" },
      { value: "53%", label: "des visiteurs quittent un site lent avant de lire une ligne (Google)" },
    ],
    editorialTitle: "Votre site est votre commercial le plus disponible.",
    editorialText:
      "Un site lent perd plus de la moitié de ses visiteurs avant qu'ils aient lu une ligne. Un site qui n'est pas référencé n'est visité que par ceux qui vous connaissent déjà. On conçoit des sites qui chargent en moins d'une seconde, qui apparaissent sur Google et qui guident les visiteurs vers une prise de contact. Sans jargon technique, sans maintenance complexe.",
    bigNumber: "88%",
    bigNumberLabel: "des utilisateurs ne reviennent jamais après une mauvaise première expérience sur un site web (Google UX Research)",
    process: [
      {
        title: "Brief & maquette",
        text: "On cadre le nombre de pages, les objectifs et votre identité visuelle. Maquette soumise à validation avant le développement.",
      },
      {
        title: "Développement Next.js",
        text: "Développement avec les meilleurs standards de performance. Score Lighthouse 95+ garanti sur desktop et mobile.",
      },
      {
        title: "SEO & formation",
        text: "SEO technique et on-page intégré nativement. Formation à l'administration du site. Documentation complète.",
      },
    ],
    pourVousSi:
      "Ce site est fait pour vous si votre site actuel est lent, vieillissant ou s'il n'est pas référencé sur les requêtes clés de votre secteur. Si vous ne pouvez pas le mettre à jour sans passer par un développeur. Si vous perdez des leads parce que votre présence en ligne ne convainc pas.",
    faqItems: [
      {
        question: "Pourquoi Next.js plutôt que WordPress ?",
        answer:
          "Next.js est nativement plus rapide et plus sécurisé que WordPress. On garantit un score Lighthouse 95+ que WordPress ne peut pas atteindre nativement. Et zéro faille de plugin.",
      },
      {
        question: "Puis-je modifier le contenu moi-même ?",
        answer:
          "Oui. On intègre un CMS headless simple ou on documente les modifications courantes pour que vous soyez totalement autonome.",
      },
      {
        question: "Le site est-il hébergé par Advisia ?",
        answer:
          "Non. Vous choisissez votre hébergeur. On recommande Vercel pour la performance et la simplicité, mais on s'adapte à votre infrastructure.",
      },
    ],
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
    metaTitle: "Création Site E-commerce Performant | Advisia",
    metaDescription:
      "Boutique en ligne sur mesure. Catalogue illimité, paiement Stripe, SEO produit. Score Lighthouse 98+. Livré en 4 à 8 semaines. 4 990 à 12 000€.",
    heroTag: "CRÉATION WEB",
    heroH1: "Vos produits en vente 24h/24.",
    heroSubtitle:
      "Un e-commerce construit pour durer — performance technique, SEO produit, gestion des commandes intégrée.",
    stats: [
      { value: "26%", label: "du CA e-commerce mondial généré sur mobile (Statista 2024)" },
      { value: "0.1s", label: "d'amélioration de vitesse = 1% de conversion en plus (Deloitte)" },
      { value: "69%", label: "des paniers abandonnés pourraient être récupérés avec une meilleure UX mobile (Baymard 2024)" },
    ],
    editorialTitle: "Un e-commerce lent perd de l'argent. Un e-commerce non référencé vend peu.",
    editorialText:
      "Chaque seconde de temps de chargement supplémentaire coûte des ventes. Chaque produit non optimisé SEO est invisible. On conçoit des boutiques e-commerce rapides, bien référencées et simples à gérer. Catalogue illimité, paiement sécurisé via Stripe, gestion des commandes intégrée — tout ce qu'il faut pour vendre sérieusement en ligne.",
    bigNumber: "4x",
    bigNumberLabel: "plus de CA annuel pour les e-commerces dans le top 10% de vitesse de chargement vs la médiane (Deloitte 2024)",
    process: [
      {
        title: "Cadrage catalogue & UX",
        text: "On structure votre catalogue, votre tunnel d'achat et vos besoins de gestion. Architecture validée avant le développement.",
      },
      {
        title: "Développement & intégrations",
        text: "Catalogue produits, panier, paiement Stripe, gestion des commandes, notifications automatiques.",
      },
      {
        title: "SEO & formation",
        text: "SEO produit et catégorie optimisé nativement. Formation à la gestion quotidienne. Documentation complète.",
      },
    ],
    pourVousSi:
      "Cet e-commerce est fait pour vous si vous vendez des produits physiques ou numériques et avez besoin d'une boutique professionnelle. Si votre boutique actuelle est lente ou génère peu de ventes. Si vous voulez reprendre le contrôle sur votre canal de vente en ligne.",
    faqItems: [
      {
        question: "Peut-on connecter notre système de gestion de stock ?",
        answer:
          "Oui. On connecte votre ERP ou logiciel de gestion de stock existant via API pour synchroniser les niveaux de stock automatiquement.",
      },
      {
        question: "Quelles méthodes de paiement sont supportées ?",
        answer:
          "Stripe est intégré nativement — carte bancaire, Apple Pay, Google Pay. On peut ajouter PayPal ou virement selon vos besoins.",
      },
      {
        question: "Peut-on gérer plusieurs devises ou langues ?",
        answer:
          "Oui. L'internationalisation est une option disponible sur devis selon la complexité de votre catalogue.",
      },
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
    metaTitle: "Workshop IA pour Dirigeants de PME | Advisia",
    metaDescription:
      "En une demi-journée, comprenez ce que l'IA change pour votre secteur. Cas d'usage sur mesure, démos live, feuille de route actionnelle. 490€.",
    heroTag: "FORMATION & WORKSHOP",
    heroH1: "En une demi-journée, vous savez ce que l'IA peut faire pour vous.",
    heroSubtitle:
      "Une session sur mesure adaptée à votre secteur. Cas d'usage concrets, démos live, feuille de route actionnelle.",
    stats: [
      { value: "72%", label: "des dirigeants estiment ne pas savoir déployer l'IA (Bpifrance 2025)" },
      { value: "4x", label: "plus de ROI sur les projets IA précédés d'une phase de cadrage stratégique (Deloitte 2024)" },
      { value: "58%", label: "des dirigeants PME craignent d'être distancés par leurs concurrents sur l'IA (CPME 2025)" },
    ],
    editorialTitle: "L'IA n'est pas un sujet technique. C'est un sujet stratégique.",
    editorialText:
      "Trop de dirigeants abordent l'IA par les outils plutôt que par les enjeux métier. On inverse la logique : on commence par votre secteur, vos processus et vos priorités, puis on identifie les cas d'usage qui créent de la valeur pour vous spécifiquement. En 2 à 4 heures, vous avez une vision claire et un plan d'action sans avoir passé 6 mois à vous former.",
    bigNumber: "45%",
    bigNumberLabel: "des investissements IA en PME n'atteignent pas leurs objectifs faute de vision stratégique claire (McKinsey 2024)",
    process: [
      {
        title: "Brief secteur & contexte",
        text: "On analyse votre secteur, vos concurrents et vos enjeux spécifiques avant la session pour adapter 100% du contenu.",
      },
      {
        title: "Session 2-4h",
        text: "Présentation des enjeux IA pour votre secteur, démos live d'outils, identification de vos 3 cas d'usage prioritaires.",
      },
      {
        title: "Feuille de route + replay",
        text: "Slides personnalisées, ressources sectorielles, feuille de route avec prochaines étapes. Replay vidéo si en visio.",
      },
    ],
    pourVousSi:
      "Ce workshop est fait pour vous si vous êtes dirigeant ou membre du comité de direction et voulez comprendre l'IA sans vous noyer dans le technique. Si vous avez des décisions à prendre sur des investissements IA et voulez un éclairage stratégique. Si vos concurrents bougent sur l'IA et vous voulez savoir où vous positionner.",
    faqItems: [
      {
        question: "Le workshop peut-il se faire pour plusieurs dirigeants ?",
        answer:
          "Oui. On peut animer la session pour jusqu'à 10 participants. Idéal pour aligner un comité de direction sur la stratégie IA.",
      },
      {
        question: "Faut-il des prérequis techniques ?",
        answer:
          "Aucun. Ce workshop est conçu pour des dirigeants sans background technique. Le jargon est banni.",
      },
      {
        question: "Le workshop donne-t-il accès à des tarifs préférentiels ?",
        answer:
          "Oui. Les participants au workshop bénéficient de 10% de réduction sur toute prestation Advisia dans les 3 mois suivants.",
      },
    ],
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
    metaTitle: "Formation IA pour Équipes PME | Advisia",
    metaDescription:
      "Formation IA sur mesure sur vos outils réels. 1 à 3 jours, suivi à 30 jours. Vos équipes vraiment autonomes après la formation. 990 à 2 500€.",
    heroTag: "FORMATION & WORKSHOP",
    heroH1: "Vos équipes utilisent l'IA. Vraiment.",
    heroSubtitle:
      "Formation sur vos cas métier réels, avec vos outils. Pas d'exercices théoriques — de la pratique sur ce que vous faites au quotidien.",
    stats: [
      { value: "38%", label: "des salariés n'utilisent pas les outils IA mis à disposition faute de formation" },
      { value: "4,5x", label: "de ROI sur les formations pratiques vs les formations théoriques (Josh Bersin 2024)" },
      { value: "62%", label: "des responsables RH citent l'upskilling IA comme priorité n°1 pour 2025 (LinkedIn Learning 2025)" },
    ],
    editorialTitle: "Déployer un outil IA sans former les équipes, c'est gaspiller l'investissement.",
    editorialText:
      "La plupart des projets IA échouent non pas à cause de la technologie, mais à cause de l'adoption. Vos équipes ont besoin de comprendre pourquoi l'outil existe, comment il s'intègre à leur quotidien et comment le maîtriser sur leurs cas métier réels. On évalue leur niveau avant, on adapte le contenu à leurs usages et on reste disponibles 30 jours après pour ancrer les habitudes.",
    bigNumber: "3x",
    bigNumberLabel: "plus d'adoption des outils IA après formation sur cas métier réels vs formation théorique",
    process: [
      {
        title: "Audit du niveau & des besoins",
        text: "Questionnaire et entretiens avec quelques collaborateurs pour calibrer la session au bon niveau et aux bons cas d'usage.",
      },
      {
        title: "Sessions sur mesure",
        text: "1 à 3 jours de formation sur vos outils réels. Alternance théorie et pratique. Exercices sur vos propres données et processus.",
      },
      {
        title: "Suivi à 30 jours",
        text: "Une session de suivi collective 30 jours après pour ancrer les habitudes, répondre aux questions et mesurer l'adoption réelle.",
      },
    ],
    pourVousSi:
      "Cette formation est faite pour vous si vous avez déployé des outils IA que vos équipes n'utilisent pas ou peu. Si vous préparez un déploiement IA et voulez maximiser l'adoption dès le départ. Si vous avez un turnover important et avez besoin d'un programme de formation reproductible.",
    faqItems: [
      {
        question: "La formation peut-elle se faire à distance ?",
        answer:
          "Oui. On anime les formations en visio avec les mêmes outils de collaboration qu'en présentiel. Le présentiel reste possible selon votre localisation.",
      },
      {
        question: "Combien de personnes peut-on former en une session ?",
        answer:
          "On recommande des groupes de 6 à 12 personnes pour garder l'interactivité. Pour des équipes plus grandes, on organise plusieurs sessions.",
      },
      {
        question: "Les supports de formation nous appartiennent-ils ?",
        answer:
          "Oui. Tous les supports pédagogiques sont personnalisés à votre entreprise et vous appartiennent intégralement.",
      },
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
    metaTitle: "Partenariat Digital Mensuel Essentiel | Advisia",
    metaDescription:
      "Maintenance, monitoring et veille mensuelle pour vos systèmes digitaux. 490€/mois, sans engagement, résiliable à tout moment par email.",
    heroTag: "PARTENARIAT",
    heroH1: "Vos systèmes surveillés. Sans que vous y pensiez.",
    heroSubtitle:
      "Maintenance, monitoring et 1 call mensuel. Vos outils tournent — vous, vous faites votre métier.",
    stats: [
      { value: "€12 000", label: "coût moyen d'une heure d'indisponibilité pour une PME (Gartner 2024)" },
      { value: "80%", label: "des pannes système découvertes par les clients avant les équipes internes (ServiceNow 2024)" },
      { value: "3x", label: "plus d'incidents en production pour les systèmes sans maintenance préventive (IBM 2024)" },
    ],
    editorialTitle: "Un outil digital non maintenu se dégrade. En silence.",
    editorialText:
      "Les dépendances se périment, les performances baissent, les failles de sécurité apparaissent. Sans surveillance active, vous découvrez le problème quand il coûte déjà cher à résoudre. Le Partenariat Essentiel, c'est une surveillance proactive de vos systèmes, une veille technologique mensuelle et un interlocuteur réactif quand quelque chose nécessite votre attention.",
    bigNumber: "47%",
    bigNumberLabel: "des incidents informatiques en PME auraient pu être évités avec un monitoring préventif (ANSSI 2024)",
    process: [
      {
        title: "Onboarding & audit initial",
        text: "On fait un état des lieux complet de vos systèmes. On configure le monitoring. On définit les priorités de maintenance.",
      },
      {
        title: "Surveillance mensuelle",
        text: "Monitoring continu, mises à jour préventives, veille technologique. Rapport mensuel d'état automatiquement envoyé.",
      },
      {
        title: "Call mensuel",
        text: "30 min par mois pour faire le point, prioriser et décider des actions du mois suivant. Vous restez aux commandes.",
      },
    ],
    pourVousSi:
      "Ce partenariat est fait pour vous si vous avez un site ou des outils en production que vous voulez surveiller sans y consacrer de temps. Si vous n'avez pas d'équipe technique interne. Si vous avez eu des incidents dans le passé et voulez éviter les mauvaises surprises.",
    faqItems: [
      {
        question: "Que couvre exactement la maintenance ?",
        answer:
          "Mises à jour des dépendances, monitoring des performances, vérification des sauvegardes, correctifs préventifs et alertes en cas d'anomalie.",
      },
      {
        question: "Comment se passe la résiliation ?",
        answer:
          "Un email suffit. Pas de préavis, pas de frais. Vous êtes libre à tout moment.",
      },
      {
        question: "Puis-je évoluer vers le Partenariat Business ?",
        answer:
          "Oui. La transition se fait en douceur — on additionne simplement les services supplémentaires sans période de transition.",
      },
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
    metaTitle: "Partenariat Business Digital Mensuel | Advisia",
    metaDescription:
      "Une optimisation déployée chaque mois. Support prioritaire 24h, reporting performances. Pour entreprises en croissance. 990€/mois sans engagement.",
    heroTag: "PARTENARIAT",
    heroH1: "Vos outils évoluent chaque mois. Sans que vous ayez à le gérer.",
    heroSubtitle:
      "Une optimisation concrète livrée chaque mois. Un interlocuteur dédié joignable en 24h. Un reporting qui montre les progrès.",
    stats: [
      { value: "58%", label: "des dirigeants PME considèrent l'IA comme enjeu de survie (BPI France 2025)" },
      { value: "3x", label: "plus de revenus sur 5 ans pour les entreprises qui améliorent leur digital en continu (MIT Sloan 2024)" },
      { value: "67%", label: "des PME qui stagnent digitalement perdent des parts de marché dans les 18 mois (Gartner 2024)" },
    ],
    editorialTitle: "La transformation digitale ne s'arrête pas à la livraison.",
    editorialText:
      "Un site livré, une automatisation déployée — et ensuite ? Les entreprises qui progressent le plus sont celles qui améliorent en continu. Le Partenariat Business garantit qu'une amélioration concrète est déployée chaque mois : une optimisation de performance, une automatisation supplémentaire, une amélioration UX. Vous avancez sans avoir à y penser.",
    bigNumber: "22%",
    bigNumberLabel: "de croissance annuelle supplémentaire pour les PME qui améliorent leur digital en continu vs celles qui stagnent (McKinsey 2024)",
    process: [
      {
        title: "Kick-off & roadmap",
        text: "On définit ensemble les 12 prochaines améliorations prioritaires. La roadmap est ajustée chaque trimestre selon vos besoins.",
      },
      {
        title: "Livraison mensuelle",
        text: "Chaque mois, une optimisation concrète est livrée, testée et documentée. Vous êtes informé à chaque étape.",
      },
      {
        title: "Reporting & pilotage",
        text: "Rapport mensuel de performances avec les indicateurs qui comptent pour vous. Call de pilotage mensuel de 30 min.",
      },
    ],
    pourVousSi:
      "Ce partenariat est fait pour vous si votre digital est en place mais stagne et ne s'améliore pas d'un mois sur l'autre. Si vous avez une croissance rapide et des besoins évolutifs. Si vous voulez un interlocuteur qui connaît votre contexte et anticipe vos besoins.",
    faqItems: [
      {
        question: "Qu'est-ce qui est livré chaque mois concrètement ?",
        answer:
          "Ça dépend de votre roadmap : optimisation de performance, nouvelle automatisation, amélioration UX, intégration d'outil. On vous propose, vous validez.",
      },
      {
        question: "Peut-on accumuler des livrables d'un mois à l'autre ?",
        answer:
          "Oui. Si un mois est moins actif, les crédits sont reportés sur le mois suivant jusqu'à un maximum de 3 mois.",
      },
      {
        question: "Y a-t-il un engagement minimum de durée ?",
        answer:
          "Non. Partenariat mensuel, résiliable à tout moment par email.",
      },
    ],
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
    metaTitle: "Partenariat Stratégique CTO Externalisé | Advisia",
    metaDescription:
      "Direction technique externalisée pour PME. Arbitrages architecture, accès illimité, participation comité de direction. 1 990€/mois sans engagement.",
    heroTag: "PARTENARIAT",
    heroH1: "Direction technique externalisée. Sans recruter un CTO.",
    heroSubtitle:
      "Arbitrages d'architecture, accès illimité à l'équipe, participation au comité de direction. La direction tech pour les PME ambitieuses.",
    stats: [
      { value: "100-180k€", label: "coût annuel d'un CTO en CDI (salaire + charges)" },
      { value: "63%", label: "des PME en croissance rapide n'ont pas les moyens d'un CTO interne (BPI France 2024)" },
      { value: "2x", label: "moins de prestataires mal choisis avec une direction technique dédiée (Forrester 2024)" },
    ],
    editorialTitle: "Recruter un CTO prend 6 mois. En avoir un opérationnel, ça peut être demain.",
    editorialText:
      "Les PME ambitieuses ont besoin de direction technique — pour arbitrer les choix d'architecture, anticiper les risques, piloter les prestataires et aligner le digital avec la stratégie. Mais recruter un CTO prend 6 mois et coûte 150k€ par an minimum. Le Partenariat Stratégique vous donne ce niveau de service pour 1 990€/mois, sans les contraintes du recrutement.",
    bigNumber: "9 mois",
    bigNumberLabel: "en moyenne pour recruter et rendre opérationnel un CTO de qualité (Michael Page 2024)",
    process: [
      {
        title: "Immersion & audit",
        text: "On fait le tour de votre stack, vos prestataires et vos enjeux tech. On rédige une cartographie et des recommandations stratégiques.",
      },
      {
        title: "Pilotage continu",
        text: "Arbitrages d'architecture, sélection de prestataires, participation aux rituels d'équipe. Accès illimité à l'équipe Advisia.",
      },
      {
        title: "Reporting direction",
        text: "Participation mensuelle au comité de direction avec un point tech clair, actionnable et aligné sur vos objectifs business.",
      },
    ],
    pourVousSi:
      "Ce partenariat est fait pour vous si vous grandissez rapidement et avez besoin de décisions tech de qualité sans pouvoir vous payer un CTO en CDI. Si vous avez des prestataires tech à piloter et manquez de repères pour évaluer leur travail. Si vous préparez une levée de fonds ou une cession et avez besoin de documentation technique solide.",
    faqItems: [
      {
        question: "Intervient-on aussi en dehors des réunions mensuelles ?",
        answer:
          "Oui. L'accès est illimité — Slack, email ou appel selon l'urgence. On répond en moins de 4h en jours ouvrés.",
      },
      {
        question: "Peut-on piloter des prestataires techniques tiers ?",
        answer:
          "Oui. C'est une des valeurs ajoutées principales — on évalue, sélectionne et pilote vos prestataires techniques comme un CTO le ferait.",
      },
      {
        question: "La confidentialité est-elle garantie ?",
        answer:
          "Oui. On signe un accord de confidentialité complet couvrant tous les aspects de la mission.",
      },
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
    metaTitle: "Pack Valorisation Digitale avant Cession | Advisia",
    metaDescription:
      "Modernisez vos outils clés avant la cession pour valoriser jusqu'à 15% de plus. Refonte ciblée, automatisations, documentation. 3 500 à 6 000€.",
    heroTag: "CESSION & REPRISE",
    heroH1: "Votre entreprise vaut plus si elle est numériquement mature.",
    heroSubtitle:
      "En 3 à 4 semaines, on modernise les outils clés et documente les processus pour maximiser votre valorisation.",
    stats: [
      { value: "78%", label: "des acquéreurs incluent désormais un audit digital dans leur due diligence (Ernst & Young 2024)" },
      { value: "+15%", label: "de valorisation supplémentaire avec une maturité digitale documentée (Roland Berger)" },
      { value: "4 mois", label: "gagnés en moyenne sur la durée de transaction avec une data room digitale prête" },
    ],
    editorialTitle: "Les acquéreurs regardent les outils. Ils rachètent la scalabilité, pas les problèmes.",
    editorialText:
      "Un acquéreur qui trouve des processus manuels, un site vieillissant et aucune documentation technique voit du risque — et négocie en conséquence. En modernisant les points critiques avant la transaction, vous prouvez que l'entreprise peut passer à l'échelle sans recrutement. C'est un argument de valorisation concret, pas une promesse.",
    bigNumber: "6x",
    bigNumberLabel: "plus de chances de finaliser une cession dans les délais avec une data room digitale complète (Roland Berger 2024)",
    process: [
      {
        title: "Audit maturité & priorisation",
        text: "On commence par l'audit de maturité digitale. On identifie les 5 points qui impactent le plus la valorisation perçue.",
      },
      {
        title: "Modernisation ciblée",
        text: "Refonte du site ou des outils clés, déploiement de 2 à 3 automatisations qui prouvent la scalabilité.",
      },
      {
        title: "Documentation & data room",
        text: "Documentation complète des processus et des outils pour la data room. Présentation standardisée pour les acquéreurs.",
      },
    ],
    pourVousSi:
      "Ce pack est fait pour vous si vous avez une cession en vue dans les 3 à 12 mois. Si votre conseiller M&A vous a signalé que le digital était un point à travailler. Si vous voulez maximiser votre valorisation sans attendre.",
    faqItems: [
      {
        question: "Combien de temps avant la cession faut-il démarrer ?",
        answer:
          "Idéalement 3 à 6 mois avant. En dessous de 6 semaines, on peut agir sur un périmètre réduit mais les impacts sont moins visibles.",
      },
      {
        question: "Le rapport peut-il être intégré à la data room ?",
        answer:
          "Oui. On vous livrons un rapport structuré et une documentation technique directement intégrable dans votre data room.",
      },
      {
        question: "La mission est-elle confidentielle vis-à-vis des équipes ?",
        answer:
          "Oui. On peut travailler de façon discrète. Le niveau de communication interne est défini avec vous en amont.",
      },
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
    metaTitle: "Pack Transformation Digitale Post-Reprise | Advisia",
    metaDescription:
      "Modernisation complète après une reprise d'entreprise. Outils, assistant IA métier, formation équipes, accompagnement 3 mois. 8 000 à 15 000€.",
    heroTag: "CESSION & REPRISE",
    heroH1: "Vous venez de reprendre. On modernise.",
    heroSubtitle:
      "Refonte complète des outils digitaux, assistant IA métier, formation des équipes, accompagnement sur 3 mois.",
    stats: [
      { value: "40%", label: "des reprises d'entreprise échouent dans les 3 ans à cause de difficultés de transformation (BPI France 2024)" },
      { value: "3x", label: "plus de turnover dans les 12 mois post-reprise sans modernisation des outils (Roland Berger 2024)" },
      { value: "87%", label: "des repreneurs sous-estiment l'état réel des outils digitaux avant la signature (CCI France 2024)" },
    ],
    editorialTitle: "Les 100 premiers jours d'une reprise définissent les 3 premières années.",
    editorialText:
      "Reprendre une entreprise, c'est hériter d'un historique technologique que vous n'avez pas choisi : ERP dépassé, processus non documentés, site vieillissant. Sans intervention rapide, ces frictions coûtent en turnover, en erreurs opérationnelles et en crédibilité client. On modernise l'ensemble en 6 à 8 semaines — site, outils métiers, assistant IA, formation équipes — pour que vos 100 premiers jours envoient le bon signal à vos équipes et à votre marché.",
    bigNumber: "18 mois",
    bigNumberLabel: "délai moyen avant que les équipes d'une entreprise reprise retrouvent leur niveau de productivité sans accompagnement (BCG 2024)",
    process: [
      {
        title: "Diagnostic & roadmap",
        text: "On évalue l'état des lieux digital, on définit les priorités et on établit la roadmap des 6 premières semaines avec vous.",
      },
      {
        title: "Refonte & déploiement",
        text: "Modernisation du site, outils clés, déploiement de l'assistant IA métier et automatisations prioritaires.",
      },
      {
        title: "Formation & accompagnement",
        text: "Formation complète des équipes sur les nouveaux outils. Accompagnement de 3 mois pour ancrer les changements.",
      },
    ],
    pourVousSi:
      "Ce pack est fait pour vous si vous venez de reprendre une entreprise et devez moderniser rapidement sans déstabiliser les équipes. Si l'entreprise reprise tourne encore sur des outils legacy. Si vous voulez créer une dynamique positive dès les premiers mois de votre reprise.",
    faqItems: [
      {
        question: "Comment gérez-vous la résistance au changement des équipes ?",
        answer:
          "On implique les équipes dès le départ dans la définition des besoins. La formation est centrale — pas imposée. Le changement doit être vécu comme une opportunité.",
      },
      {
        question: "Peut-on phaser la mission pour ne pas tout moderniser d'un coup ?",
        answer:
          "Oui. On peut prioriser les outils critiques en premier et avancer par vagues sur les 6 mois suivants.",
      },
      {
        question: "Que couvre l'accompagnement de 3 mois ?",
        answer:
          "Support illimité pour les questions d'usage, ajustements des automatisations et de l'assistant IA, et une session collective mensuelle.",
      },
    ],
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
    metaTitle: "Pack Transformation IA Métier Complète | Advisia",
    metaDescription:
      "Transformation digitale et IA complète post-reprise. Agent IA avancé, intégrations ERP/CRM, roadmap IA 12 mois. 18 000 à 35 000€.",
    heroTag: "CESSION & REPRISE",
    heroH1: "Transformation complète. IA métier déployée.",
    heroSubtitle:
      "Pour les reprises ambitieuses : agent IA sur mesure, intégrations ERP/CRM, roadmap IA 12 mois. L'entreprise reprise devient un acteur digital de premier plan.",
    stats: [
      { value: "65%", label: "des acteurs digitaux natifs déploient une IA métier dans les 12 mois suivant leur lancement (CB Insights 2024)" },
      { value: "3,5x", label: "de valorisation supplémentaire pour les entreprises avec une feuille de route IA sur 12 mois (Deloitte 2024)" },
      { value: "82%", label: "des PME transformées par l'IA devancent leurs concurrents sur la rentabilité à 3 ans (Accenture 2024)" },
    ],
    editorialTitle: "Reprendre une entreprise, c'est hériter d'un passé. Transformer, c'est décider de l'avenir.",
    editorialText:
      "Les entreprises reprises qui n'intègrent pas l'IA dans leur transformation restent des PME classiques face à des concurrents nativement digitaux. Celles qui le font dès les premières semaines créent un avantage que leurs concurrents mettront des années à rattraper. On déploie un agent IA connecté à vos ERP, CRM et données opérationnelles — un cerveau central qui accélère chaque décision, chaque processus, chaque interaction client — avec une roadmap IA structurée pour les 12 mois suivants.",
    bigNumber: "34%",
    bigNumberLabel: "de marge opérationnelle supplémentaire pour les entreprises qui déploient une IA métier dans les 2 ans post-reprise (McKinsey 2024)",
    process: [
      {
        title: "Tout le Pack Post-Reprise",
        text: "Refonte complète, assistant IA standard, formation équipes et accompagnement 3 mois inclus intégralement.",
      },
      {
        title: "Agent IA avancé sur mesure",
        text: "Conception et déploiement d'un agent IA connecté à tous vos systèmes — ERP, CRM, documents, données opérationnelles.",
      },
      {
        title: "Roadmap IA 12 mois",
        text: "Feuille de route détaillée pour les 12 mois suivants : automatisations avancées, cas d'usage IA métier, intégrations complémentaires.",
      },
    ],
    pourVousSi:
      "Ce pack est fait pour vous si vous reprenez une entreprise avec l'ambition d'en faire un acteur digital de premier plan dans votre secteur. Si vous avez une vision de transformation ambitieuse et voulez l'exécuter vite. Si vous avez accès à des données riches que l'IA pourrait exploiter pour créer un avantage concurrentiel durable.",
    faqItems: [
      {
        question: "Quelle est la différence avec le Pack Post-Reprise ?",
        answer:
          "Le Pack Post-Reprise modernise l'existant. Le Pack IA Métier crée un avantage compétitif par l'IA — agent avancé multi-sources, intégrations ERP/CRM complètes et roadmap 12 mois.",
      },
      {
        question: "Peut-on financer ce pack via des aides ?",
        answer:
          "Oui. Selon votre région et votre secteur, des aides peuvent financer jusqu'à 50% de la prestation. On vous aide à identifier les dispositifs applicables.",
      },
      {
        question: "Combien de personnes sont impliquées côté Advisia ?",
        answer:
          "Une équipe de 2 à 3 personnes dédiées à votre projet : un chef de projet, un développeur IA et un expert process.",
      },
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
