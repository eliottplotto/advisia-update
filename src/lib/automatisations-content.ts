export interface AutomatisationContent {
  slug: string;
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

export const automatisationsContent: Record<string, AutomatisationContent> = {
  prospection: {
    slug: "prospection",
    metaTitle: "Automatisation Prospection & Acquisition IA | Advisia",
    metaDescription:
      "Vos commerciaux prospectent, l'IA qualifie, enrichit et relance. Déployé en 2-3 jours. Multipliez votre volume de prospects qualifiés sans recruter.",
    heroTag: "AUTOMATISATION IA — PROSPECTION",
    heroH1: "Vos commerciaux prospectent. L'IA qualifie, enrichit et relance.",
    heroSubtitle:
      "Fini les listes de contacts froids et les relances manuelles. On automatise la qualification et le suivi pour que vos commerciaux ne parlent qu'aux bons interlocuteurs.",
    stats: [
      { value: "40%", label: "du temps commercial perdu sur des tâches administratives (McKinsey)" },
      { value: "3×", label: "plus de prospects qualifiés traités sans embauche supplémentaire" },
      { value: "2-3j", label: "délai de déploiement de la première automatisation" },
    ],
    editorialTitle: "Le problème : vos commerciaux passent plus de temps à chercher qu'à vendre.",
    editorialText:
      "Identifier les prospects chauds, enrichir les fiches contacts, envoyer les bonnes relances au bon moment — tout ça prend des heures que vos équipes n'ont pas. Le résultat : des opportunités manquées, des leads qui refroidissent, et des commerciaux frustrés. On automatise cette chaîne. Détection automatique des signaux d'achat, enrichissement des données, séquences de relances personnalisées. Vos commerciaux arrivent en réunion préparés, pas épuisés.",
    bigNumber: "40%",
    bigNumberLabel: "du temps commercial est consacré à des tâches non-commerciales. On récupère ça.",
    process: [
      {
        title: "Audit de votre process de prospection actuel",
        text: "On cartographie votre funnel existant, vos sources de leads, vos outils CRM et vos séquences de relances pour identifier les frictions.",
      },
      {
        title: "Configuration des automatisations de qualification",
        text: "On met en place la détection des signaux d'intention, l'enrichissement automatique des fiches contacts et le scoring IA.",
      },
      {
        title: "Déploiement des séquences de relance",
        text: "Emails personnalisés, relances LinkedIn, alertes commerciales — tout se déclenche automatiquement selon le comportement du prospect.",
      },
      {
        title: "Formation et remise en main",
        text: "Vos commerciaux apprennent à piloter le système, ajuster les séquences et lire les tableaux de bord. On reste disponibles.",
      },
    ],
    pourVousSi:
      "Vous avez une équipe commerciale qui passe plus de temps à qualifier des leads qu'à vendre. Vous utilisez un CRM mais vos données sont rarement à jour. Vous avez des séquences de relances mais elles sont envoyées manuellement. Vous voulez multiplier votre volume de prospects traités sans recruter.",
    faqItems: [
      {
        question: "Est-ce que ça fonctionne avec mon CRM actuel ?",
        answer:
          "Oui. On intègre l'automatisation à votre CRM existant (Salesforce, HubSpot, Pipedrive, Notion, Airtable…). Pas de migration, pas de rupture.",
      },
      {
        question: "Les prospects savent-ils qu'ils reçoivent des relances automatisées ?",
        answer:
          "Non, sauf si vous le souhaitez. Les messages sont personnalisés avec leurs informations réelles et envoyés depuis votre adresse habituelle.",
      },
      {
        question: "Combien de temps avant les premiers résultats ?",
        answer:
          "Les premières automatisations sont en production en 2-3 jours. Les premiers résultats mesurables apparaissent dans les 2-3 semaines.",
      },
      {
        question: "Que se passe-t-il si un prospect répond ?",
        answer:
          "Les réponses humaines sont détectées automatiquement et la séquence s'arrête. Le commercial reçoit une alerte pour reprendre la main.",
      },
    ],
  },

  "relation-client": {
    slug: "relation-client",
    metaTitle: "Automatisation Relation Client & Support IA | Advisia",
    metaDescription:
      "80% des demandes clients traitées automatiquement. Sans embaucher. Satisfaction client améliorée, équipes libérées pour les cas complexes.",
    heroTag: "AUTOMATISATION IA — RELATION CLIENT",
    heroH1: "80% des demandes clients traitées. Sans embaucher.",
    heroSubtitle:
      "Réponses automatiques 24h/24, escalade humaine uniquement si nécessaire. Votre service client scale sans que vos effectifs bougent.",
    stats: [
      { value: "80%", label: "des demandes clients traitées automatiquement" },
      { value: "1h30", label: "économisées par jour et par agent de support" },
      { value: "45%", label: "d'amélioration de la satisfaction client mesurée (CSAT)" },
    ],
    editorialTitle: "Les mêmes questions reviennent. Chaque jour. Sans exception.",
    editorialText:
      "Horaires d'ouverture, suivi de commande, politique de retour, état de la demande — vos équipes répondent aux mêmes questions en boucle. Pendant ce temps, les cas complexes s'accumulent. On identifie les 20% de questions qui représentent 80% du volume, on automatise les réponses, et on libère vos équipes pour ce qui nécessite vraiment leur expertise. Le tout sans changer vos outils existants.",
    bigNumber: "80%",
    bigNumberLabel: "des tickets support sont des questions récurrentes. On les automatise toutes.",
    process: [
      {
        title: "Analyse de vos tickets et demandes entrantes",
        text: "On étudie 3 mois de tickets pour identifier les typologies, les volumes et les réponses types.",
      },
      {
        title: "Construction de la base de connaissance",
        text: "On structure vos réponses, vos politiques et vos procédures pour alimenter l'assistant IA.",
      },
      {
        title: "Déploiement et intégration",
        text: "L'assistant est intégré à votre canal de contact (email, chat, formulaire) et connecté à vos outils (CRM, ticketing).",
      },
      {
        title: "Calibration et amélioration continue",
        text: "On suit les taux de résolution, les escalades et les feedbacks pour améliorer les réponses chaque semaine.",
      },
    ],
    pourVousSi:
      "Votre équipe support répond aux mêmes questions chaque jour. Vous avez des délais de réponse trop longs aux heures de pointe. Vous perdez des clients par manque de réactivité. Vous ne pouvez pas vous permettre d'embaucher pour faire face à la croissance du volume.",
    faqItems: [
      {
        question: "Comment l'assistant sait-il quand escalader à un humain ?",
        answer:
          "On configure des règles précises : sentiment négatif, mots-clés sensibles, questions hors périmètre. Dans ces cas, le ticket est immédiatement transféré avec le contexte complet.",
      },
      {
        question: "Sur quels canaux peut-on déployer ça ?",
        answer:
          "Email, chat web, formulaire de contact, WhatsApp Business, et via API sur tout canal qui le supporte.",
      },
      {
        question: "L'assistant peut-il accéder aux données de nos clients ?",
        answer:
          "Oui, si vous le souhaitez. On le connecte à votre CRM ou base de données pour qu'il puisse répondre avec les informations spécifiques du client (statut commande, historique, etc.).",
      },
      {
        question: "Comment mesure-t-on l'impact ?",
        answer:
          "Tableau de bord : taux de résolution automatique, délai de réponse moyen, taux d'escalade, CSAT. Vous voyez l'impact en temps réel.",
      },
    ],
  },

  reporting: {
    slug: "reporting",
    metaTitle: "Automatisation Reporting & Pilotage IA | Advisia",
    metaDescription:
      "Votre reporting se génère seul, chaque matin, sans Excel. Données fraîches, alertes en temps réel, décisions plus rapides.",
    heroTag: "AUTOMATISATION IA — REPORTING",
    heroH1: "Votre reporting se génère seul. Chaque matin. Sans Excel.",
    heroSubtitle:
      "Fini les tableaux croisés dynamiques et les données à 3 jours de retard. Votre dashboard s'actualise tout seul et vous alerte quand quelque chose déraille.",
    stats: [
      { value: "28%", label: "des dirigeants de PME prennent des décisions sans données fiables (Bpifrance)" },
      { value: "2j", label: "de retard moyen dans la remontée des données business" },
      { value: "33%", label: "de gain de temps sur les tâches de reporting et de consolidation" },
    ],
    editorialTitle: "Vous pilotez votre entreprise avec des données qui ont 3 jours de retard.",
    editorialText:
      "Chaque lundi matin, quelqu'un passe 2 heures à consolider les chiffres de la semaine dans un fichier Excel. Le résultat arrive le mardi. Les décisions se prennent sur des données froides. On automatise toute cette chaîne. Les données remontent automatiquement depuis vos sources (CRM, ERP, Google Analytics, comptabilité…), se consolident et génèrent votre rapport chaque matin à 8h. Vous arrivez avec les chiffres d'hier, pas d'avant-hier.",
    bigNumber: "2j",
    bigNumberLabel: "de retard moyen dans la remontée des données. On réduit ça à zéro.",
    process: [
      {
        title: "Audit de vos sources de données",
        text: "On identifie où vivent vos données (CRM, ERP, tableurs, outils métier) et comment elles circulent actuellement.",
      },
      {
        title: "Conception du modèle de données unifié",
        text: "On structure un flux automatique qui collecte, nettoie et consolide vos données depuis toutes les sources.",
      },
      {
        title: "Création des tableaux de bord automatisés",
        text: "Vos KPIs s'affichent en temps réel. Les rapports hebdomadaires et mensuels se génèrent et s'envoient automatiquement.",
      },
      {
        title: "Configuration des alertes",
        text: "Vous êtes alerté dès qu'un indicateur sort des seuils normaux — avant que ça devienne un problème.",
      },
    ],
    pourVousSi:
      "Quelqu'un dans votre équipe passe plusieurs heures par semaine à consolider des données manuellement. Vous n'avez pas de vision temps réel sur vos indicateurs clés. Vos décisions se prennent souvent sur des intuitions faute de données fiables. Vous utilisez Excel comme principal outil de reporting.",
    faqItems: [
      {
        question: "Avec quels outils ça fonctionne ?",
        answer:
          "On se connecte à la quasi-totalité des outils : Salesforce, HubSpot, Stripe, QuickBooks, Pennylane, Google Analytics, Shopify, etc. Si votre outil a une API, on peut s'y connecter.",
      },
      {
        question: "Peut-on personnaliser les rapports selon les destinataires ?",
        answer:
          "Oui. Le DAF reçoit le rapport financier, le directeur commercial reçoit les KPIs de vente, les opérations reçoivent les indicateurs terrain — chacun reçoit ce qui le concerne.",
      },
      {
        question: "Que se passe-t-il si une source de données tombe ?",
        answer:
          "Une alerte est envoyée automatiquement et le rapport signale clairement que la donnée est manquante. Pas de chiffres silencieusement incorrects.",
      },
      {
        question: "Est-ce qu'on garde la main sur les définitions des KPIs ?",
        answer:
          "Absolument. Vous définissez vos KPIs, vos seuils d'alerte, vos préférences de présentation. On configure, vous pilotez.",
      },
    ],
  },

  veille: {
    slug: "veille",
    metaTitle: "Automatisation Veille Concurrentielle IA | Advisia",
    metaDescription:
      "Votre veille concurrentielle synthétisée chaque matin par l'IA. Détection en 24h, synthèse automatique, aucune heure perdue.",
    heroTag: "AUTOMATISATION IA — VEILLE",
    heroH1: "Votre veille concurrentielle synthétisée chaque matin par l'IA.",
    heroSubtitle:
      "Surveillance automatique de vos concurrents, de votre marché, de vos mots-clés. La synthèse arrive dans votre boîte mail avant votre premier café.",
    stats: [
      { value: "3h", label: "passées par semaine en veille manuelle dans une PME moyenne" },
      { value: "73%", label: "des dirigeants déclarent manquer d'informations sur leurs concurrents (OpinionWay)" },
      { value: "24h", label: "délai de détection des signaux faibles grâce à la surveillance automatique" },
    ],
    editorialTitle: "Vous découvrez ce que font vos concurrents trop tard.",
    editorialText:
      "Un concurrent lance une promotion, change son pricing, ouvre un nouveau marché ou publie du contenu qui attire vos prospects — et vous l'apprenez par hasard, souvent trop tard pour réagir. La veille manuelle prend du temps, se fait de manière discontinue, et rate l'essentiel. Notre automatisation surveille en continu vos concurrents, votre secteur, vos mots-clés et vos médias spécialisés. Chaque matin, vous recevez une synthèse IA des signaux importants — avec les liens, les sources, et l'analyse du contexte.",
    bigNumber: "73%",
    bigNumberLabel: "des dirigeants manquent d'infos sur leurs concurrents. On règle ça.",
    process: [
      {
        title: "Définition du périmètre de veille",
        text: "On identifie avec vous les concurrents à surveiller, les mots-clés stratégiques, les sources pertinentes et les signaux qui comptent.",
      },
      {
        title: "Configuration de la surveillance automatique",
        text: "Scraping web, flux RSS, réseaux sociaux, presse spécialisée — on met en place la collecte automatique 24h/24.",
      },
      {
        title: "Construction de la synthèse IA",
        text: "L'IA analyse, filtre les doublons, évalue la pertinence et génère un brief lisible en 5 minutes.",
      },
      {
        title: "Livraison et ajustement",
        text: "Vous recevez la synthèse chaque matin. On affine les filtres selon vos retours jusqu'à ce que le signal/bruit soit parfait.",
      },
    ],
    pourVousSi:
      "Vous avez régulièrement l'impression de découvrir les évolutions de vos concurrents trop tard. Votre veille se fait de manière occasionnelle faute de temps. Vous voulez réagir rapidement aux opportunités et menaces de votre marché. Votre équipe perd plusieurs heures par semaine à surveiller manuellement des sources éparpillées.",
    faqItems: [
      {
        question: "Quelles sources pouvez-vous surveiller ?",
        answer:
          "Sites web, blogs, LinkedIn, Twitter/X, presse en ligne, forums spécialisés, offres d'emploi (signal de stratégie), appels d'offres, brevets. On personnalise selon votre secteur.",
      },
      {
        question: "La synthèse est-elle fiable ?",
        answer:
          "La synthèse IA est générée à partir des sources réelles que vous avez validées. Chaque information est sourcée avec le lien original. Vous pouvez toujours vérifier.",
      },
      {
        question: "Peut-on recevoir des alertes en temps réel pour certains signaux ?",
        answer:
          "Oui. Pour les signaux prioritaires (lancement d'un concurrent, mention de votre marque, etc.) on peut configurer des alertes immédiates par email ou Slack.",
      },
      {
        question: "Combien de concurrents peut-on surveiller ?",
        answer:
          "Autant que nécessaire. En pratique, on commence par 5-10 concurrents directs et on élargit ensuite selon les besoins.",
      },
    ],
  },

  documents: {
    slug: "documents",
    metaTitle: "Automatisation Traitement Documents IA | Advisia",
    metaDescription:
      "Vos équipes saisissent les mêmes données dans 3 outils différents. On arrête ça. 85% d'erreurs en moins, déployé en 2-3 jours.",
    heroTag: "AUTOMATISATION IA — DOCUMENTS",
    heroH1: "Vos équipes saisissent les mêmes données dans 3 outils différents. On arrête ça.",
    heroSubtitle:
      "Extraction automatique, saisie zéro, synchronisation entre vos logiciels. Devis, factures, contrats — tout circule sans intervention manuelle.",
    stats: [
      { value: "85%", label: "de réduction des erreurs de saisie après automatisation du traitement documentaire" },
      { value: "51h", label: "perdues par an et par collaborateur en double saisie (McKinsey)" },
      { value: "2-3j", label: "délai de déploiement de la première automatisation documentaire" },
    ],
    editorialTitle: "Vos données existent déjà dans un document. Pourquoi les ressaisir ?",
    editorialText:
      "Un devis arrive par email. Quelqu'un le ressaisit dans le CRM. Puis dans l'ERP. Puis dans le tableau de suivi. Trois saisies, trois risques d'erreur, des dizaines de minutes perdues — pour une information qui existait déjà. On automatise l'extraction des données depuis vos documents (PDF, emails, formulaires) et leur synchronisation directe dans vos outils. La donnée entre une fois, se propage partout.",
    bigNumber: "51h",
    bigNumberLabel: "perdues par collaborateur et par an en double saisie. On les récupère.",
    process: [
      {
        title: "Cartographie de vos flux documentaires",
        text: "On identifie vos types de documents (devis, factures, bons de commande, contrats) et leurs parcours entre vos outils.",
      },
      {
        title: "Configuration de l'extraction IA",
        text: "L'IA apprend à lire vos formats de documents et à extraire les données structurées avec une précision de plus de 95%.",
      },
      {
        title: "Connexion à vos systèmes",
        text: "Les données extraites sont injectées automatiquement dans votre CRM, ERP, comptabilité ou tout autre outil cible.",
      },
      {
        title: "Validation et go-live",
        text: "On teste sur un volume réel, on valide la précision avec vous, puis on met en production avec un suivi des premiers jours.",
      },
    ],
    pourVousSi:
      "Des informations sont saisies manuellement dans plusieurs outils différents. Vous avez des erreurs de saisie régulières qui créent des problèmes en aval. Vos équipes passent du temps sur des tâches à faible valeur ajoutée. Vous recevez des volumes importants de documents (devis, factures, commandes, contrats) à traiter.",
    faqItems: [
      {
        question: "Ça fonctionne avec des documents PDF scannés ?",
        answer:
          "Oui, y compris avec des scans de qualité variable. L'IA de reconnaissance documentaire (OCR + LLM) gère la majorité des formats.",
      },
      {
        question: "Que faire si un document ne rentre pas dans le format standard ?",
        answer:
          "On configure un flux d'exception : les documents non reconnus sont mis en attente et signalés pour traitement humain. Pas de donnée silencieusement perdue.",
      },
      {
        question: "Mes données sont-elles en sécurité ?",
        answer:
          "Oui. Les documents sont traités dans un environnement sécurisé, les données ne sont pas conservées après traitement sauf si vous le demandez explicitement.",
      },
      {
        question: "Peut-on automatiser la génération de documents aussi ?",
        answer:
          "Oui. On peut aussi automatiser la génération de devis, contrats et rapports depuis vos données existantes — les deux sens du flux.",
      },
    ],
  },

  marketing: {
    slug: "marketing",
    metaTitle: "Automatisation Marketing & Contenu IA | Advisia",
    metaDescription:
      "Votre présence digitale publie, relance et mesure sans que vous y pensiez. 30% d'engagement en plus, 4h économisées par semaine.",
    heroTag: "AUTOMATISATION IA — MARKETING",
    heroH1: "Votre présence digitale publie, relance et mesure. Sans que vous y pensiez.",
    heroSubtitle:
      "Calendrier éditorial automatisé, emails personnalisés envoyés au bon moment, campagnes qui tournent sans intervention — votre marketing travaille pendant que vous faites autre chose.",
    stats: [
      { value: "30%", label: "d'amélioration de l'engagement sur les contenus automatisés et optimisés IA" },
      { value: "4h", label: "économisées par semaine sur les tâches de création et de publication de contenu" },
      { value: "72%", label: "des marketeurs constatent une amélioration après adoption de l'automatisation (HubSpot)" },
    ],
    editorialTitle: "Votre marketing se lance rarement parce que ça prend trop de temps à préparer.",
    editorialText:
      "Un post LinkedIn, une newsletter, une campagne email — chaque prise de parole demande du temps de rédaction, de validation, de mise en forme, de planification et de publication. Résultat : votre entreprise communique trop peu, de manière irrégulière, et perd en visibilité. On automatise la chaîne : génération de contenu depuis vos données, planification intelligente, personnalisation à grande échelle, mesure automatique des performances. Votre marque est présente, régulière et cohérente — sans que vous ayez à y penser chaque semaine.",
    bigNumber: "4h",
    bigNumberLabel: "économisées par semaine sur le marketing de contenu. Réinvesties ailleurs.",
    process: [
      {
        title: "Audit de votre présence et de vos canaux",
        text: "On analyse votre audience, vos performances actuelles, vos concurrents et vos opportunités de contenu.",
      },
      {
        title: "Construction du calendrier éditorial automatisé",
        text: "On définit les thèmes, les formats et les fréquences, puis on configure la génération et la planification automatique.",
      },
      {
        title: "Mise en place des séquences d'emails",
        text: "Nurturing, relances, newsletters, onboarding — chaque séquence se déclenche au bon moment selon le comportement de vos contacts.",
      },
      {
        title: "Tableau de bord de performance",
        text: "Taux d'ouverture, engagement, conversions — tout est suivi automatiquement avec des recommandations d'amélioration hebdomadaires.",
      },
    ],
    pourVousSi:
      "Vous voulez communiquer plus régulièrement mais vous n'avez pas le temps de le faire manuellement. Votre présence sur les réseaux est irrégulière. Vous avez une base email que vous n'exploitez pas assez. Vous savez que le contenu et l'emailing peuvent générer des leads mais la mise en place prend trop de temps.",
    faqItems: [
      {
        question: "Le contenu généré automatiquement est-il de qualité ?",
        answer:
          "Oui, avec votre validation. On ne publie jamais sans que vous ayez approuvé le contenu (ou que vous ayez explicitement choisi l'autopilote complet). La qualité est calibrée sur votre style de communication.",
      },
      {
        question: "Sur quels canaux ça fonctionne ?",
        answer:
          "LinkedIn, Instagram, Facebook, newsletter (Brevo, Mailchimp, Klaviyo), blog WordPress/CMS. On connecte les canaux que vous utilisez déjà.",
      },
      {
        question: "Peut-on personnaliser les emails selon les segments ?",
        answer:
          "Oui. Chaque email peut intégrer les données spécifiques du destinataire (prénom, entreprise, comportement passé) pour une vraie personnalisation à grande échelle.",
      },
      {
        question: "Comment je garde le contrôle éditorial ?",
        answer:
          "On configure un flux de validation selon vos préférences : relecture obligatoire avant publication, ou validation par défaut avec alert si besoin. Vous décidez du niveau d'autonomie.",
      },
    ],
  },
};
