import type { LeadMagnet } from "./types";

export const LEAD_MAGNETS: LeadMagnet[] = [
  {
    slug: "checklist-cession-reprise",
    title: "20 points pour valoriser votre PME avant vente",
    subtitle:
      "La maturité numérique peut ajouter +15 à +30% à votre prix de cession",
    teaser:
      "L'audit qu'un repreneur sérieux fera — avant qu'il ne le fasse lui-même. 20 points concrets, auto-évaluables.",
    icon: "🏛️",
    accent: "violet",
    brevoListId: 6, // Lead Magnet - Cession-Reprise
    inTwoMinutes: {
      forWho:
        "Dirigeant·e de PME française (5 à 50 salariés) qui prévoit de céder son entreprise dans les 6 à 36 mois. Le document s'adresse aussi aux repreneurs qui veulent auditer une cible avant signature.",
      notForWho:
        "Les dirigeants qui vendent dans les 3 mois (trop tard pour implémenter). Les très grandes structures avec un DSI interne et une direction financière dédiée à la transmission.",
      outcome:
        "Une checklist auto-évaluable de 20 points, un score personnel, et une vision claire de ce qui peut faire bouger votre prix de cession de 15 à 30% vers le haut.",
      readingTime:
        "15 minutes. Temps de mise en application : entre 2 semaines et 3 mois selon l'état de départ.",
    },
    introParagraphs: [
      "La plupart des dirigeants préparent leur cession sur trois axes : le juridique, le fiscal et le financier. L'expert-comptable travaille les bilans, l'avocat rédige les actes, le conseiller M&A chasse le repreneur. Pendant ce temps, le quatrième axe — la maturité numérique — reste une zone grise que personne ne couvre vraiment.",
      "C'est dommage. Parce que c'est exactement sur cet axe que les repreneurs récents construisent leur décote. Un acquéreur qui découvre en due diligence qu'il n'y a pas de CRM, que le patron est seul à savoir faire tourner la boîte, ou que le site web date de 2014, fait une chose simple : il baisse son offre ou ajoute une clause de garantie.",
      "Selon les données observées sur les transmissions 2023-2025, une PME numériquement mature se négocie entre 15 et 30% au-dessus d'une PME comparable en retard numérique. Ces 20 points vous donnent l'audit qu'un repreneur sérieux fera — avant qu'il ne le fasse lui-même.",
    ],
    checklistLabel: "La checklist en 20 points",
    items: [
      {
        number: 1,
        title: "Listez les outils qui ne fonctionnent que sur l'ordinateur du dirigeant",
        why: "Chaque fichier Excel critique stocké en local, chaque macro développée pour un usage personnel, chaque mot de passe dans la tête du patron est un risque de valorisation. Un repreneur paie moins cher une entreprise dont la continuité dépend d'une seule personne.",
        how: "Faites l'inventaire sur une semaine : tout fichier métier que vous ouvrez, tout outil que vous utilisez, tout accès que vous seul possédez. Migrez vers Google Workspace ou Microsoft 365, centralisez les mots de passe dans un gestionnaire partagé (1Password, Bitwarden), documentez les accès critiques.",
        alarm: "Si vous partez une semaine et que votre entreprise ralentit, c'est un problème.",
        effort: "2 à 4 semaines",
      },
      {
        number: 2,
        title: "Documentez vos 10 processus métier principaux",
        why: "Un repreneur évalue la transférabilité de l'entreprise. S'il faut 6 mois pour qu'il comprenne comment vous facturez, gérez les commandes ou répondez aux clients, la valeur perçue chute. Des procédures écrites démontrent une organisation pilotable.",
        how: "Identifiez vos 10 processus les plus critiques (commande client, facturation, recrutement, onboarding, SAV, etc.). Pour chacun, rédigez une fiche de 1 page : déclencheur, étapes, outils utilisés, responsable. Utilisez Notion, Confluence ou simplement un dossier partagé avec des PDF. La perfection n'est pas l'objectif — la traçabilité l'est.",
        alarm: "Si un nouveau collaborateur a besoin de plus de 3 mois pour être autonome sur un processus, il manque de la documentation.",
        effort: "1 à 2 jours par processus",
      },
      {
        number: 3,
        title: "Mettez à jour votre site web vitrine",
        why: "Le site est souvent la première chose qu'un repreneur regarde avant même le premier rendez-vous. Un site lent, daté ou cassé sur mobile envoie un signal immédiat : \"cette boîte n'a pas investi dans sa présence depuis des années\". Ce signal se traduit en décote.",
        how: "Testez votre site sur PageSpeed Insights (gratuit, Google). Score en dessous de 70 sur mobile = refonte technique à prévoir. Vérifiez que les informations sont à jour (équipe, services, tarifs si publics, coordonnées). Si le site date de plus de 4 ans et utilise WordPress non maintenu, prévoyez une refonte en Next.js ou framework moderne.",
        alarm: "Votre site charge en plus de 3 secondes, ou votre dernière actualité date d'il y a plus d'un an.",
        effort: "2 à 6 semaines pour une refonte complète",
      },
      {
        number: 4,
        title: "Nettoyez votre e-réputation",
        why: "Un repreneur tapera le nom de votre entreprise sur Google avant de signer. S'il trouve des avis négatifs sans réponse, des forums où vos clients se plaignent, ou pire, aucune présence, il doute. Une bonne e-réputation est un actif immatériel valorisable.",
        how: "Recensez vos avis sur Google, Trustpilot, Facebook, sites sectoriels. Répondez à tous les avis négatifs de façon professionnelle. Lancez une campagne de sollicitation d'avis auprès de vos meilleurs clients (email automatique post-prestation). Viser 4,5/5 avec au moins 50 avis sur Google Business.",
        alarm: "Moins de 10 avis Google, ou une note inférieure à 4/5, ou des avis négatifs non traités depuis 6 mois.",
        effort: "2 mois pour nettoyer, maintenance continue ensuite",
      },
      {
        number: 5,
        title: "Actualisez votre fiche Google Business Profile",
        why: "La fiche Google (anciennement Google My Business) est souvent plus visible que votre site pour les requêtes locales. Une fiche complète, avec photos récentes, horaires à jour et posts réguliers, est un actif SEO et commercial directement transférable au repreneur.",
        how: "Allez sur business.google.com. Vérifiez que toutes les informations sont à jour (adresse, horaires, téléphone, site). Ajoutez 10 à 20 photos récentes de vos locaux, équipe, produits. Activez les messages directs. Publiez 1 post par semaine pendant 2 mois avant mise en vente.",
        alarm: "Votre fiche est \"non revendiquée\", les photos datent d'il y a plus de 2 ans, ou vous n'avez jamais publié de post.",
        effort: "2 heures initial + 30 min/semaine",
      },
      {
        number: 6,
        title: "Auditez votre visibilité SEO",
        why: "Un repreneur achète aussi votre capacité à générer du trafic organique. Si vous n'apparaissez sur aucune requête métier importante, il devra investir lourdement en publicité pour maintenir le volume. Ça se déduit du prix.",
        how: "Listez 20 mots-clés que vos clients taperaient pour vous trouver. Testez chacun sur Google en navigation privée. Notez votre position sur chaque requête. Si vous n'apparaissez pas sur au moins 5 des 20 requêtes, lancez un chantier SEO : corrections techniques, création de pages ciblées, contenu de fond. Outils : Google Search Console (gratuit), Semrush ou Ubersuggest.",
        alarm: "Moins de 500 visites organiques mensuelles, ou absence totale sur vos mots-clés métier.",
        effort: "6 à 12 mois pour des résultats significatifs",
      },
      {
        number: 7,
        title: "Sécurisez vos sauvegardes",
        why: "La question \"que se passe-t-il si vos serveurs brûlent demain\" est posée dans 100% des due diligence sérieuses. Pas de réponse convaincante = clause de garantie de passif majorée ou décote directe.",
        how: "Vos données critiques doivent suivre la règle 3-2-1 : 3 copies, sur 2 supports différents, dont 1 hors site. Sauvegarde automatique quotidienne (Backblaze, Acronis, OVH Backup). Test de restauration tous les 3 mois (sinon c'est pas une sauvegarde, c'est un espoir). Documentation du processus.",
        alarm: "Vos sauvegardes sont manuelles, ou vous n'avez jamais testé une restauration complète.",
        effort: "1 à 2 semaines",
      },
      {
        number: 8,
        title: "Activez l'authentification à deux facteurs partout",
        why: "L'absence de 2FA sur vos outils critiques (email, banque, CRM, hébergement) est un red flag cyber immédiat. Les repreneurs sensibles à la cybersécurité — de plus en plus nombreux — en font un critère éliminatoire.",
        how: "Listez tous vos comptes professionnels critiques. Activez la 2FA sur chacun (Google Authenticator, Authy, ou clé physique YubiKey pour les comptes les plus sensibles). Pour l'équipe, imposez la 2FA via une politique écrite. Déléguez à un prestataire externe si ce n'est pas votre compétence.",
        alarm: "Au moins un de vos comptes critiques est accessible avec juste un mot de passe.",
        effort: "1 journée",
      },
      {
        number: 9,
        title: "Auditez votre conformité RGPD",
        why: "Un acquéreur qui découvre des manquements RGPD hérite du risque. La CNIL peut sanctionner l'entreprise, pas le dirigeant sortant. Un dossier RGPD propre est un argument concret pour défendre votre prix.",
        how: "Vérifiez les fondamentaux : mentions légales à jour, politique de confidentialité accessible, registre des traitements tenu, consentement cookies conforme, contrats sous-traitants (article 28) signés avec vos prestataires tech. Si vous avez plus de 10 salariés ou traitez des données sensibles, prévoyez un DPO externe (300 à 800€/mois).",
        alarm: "Pas de registre des traitements, pas de politique de confidentialité, bannière cookies non conforme.",
        effort: "2 à 4 semaines",
      },
      {
        number: 10,
        title: "Identifiez les automatisations qui tournent seules",
        why: "Une PME qui automatise ses processus récurrents (relances, facturation, synchronisation d'outils) démontre une maturité opérationnelle. Les repreneurs paient plus cher une entreprise qui fonctionne sans intervention manuelle permanente du dirigeant.",
        how: "Listez vos 5 tâches les plus répétitives (relance client, facturation récurrente, rapport hebdo, publication réseaux, qualification leads). Pour chacune, évaluez : peut-elle tourner seule ? Outils : Make, Zapier, N8N. Budget : 400 à 1500€ par automatisation. Une seule automatisation bien placée peut justifier 5000 à 20 000€ de valorisation supplémentaire.",
        alarm: "Aucune automatisation en place, tout passe encore par des copier-coller manuels entre outils.",
        effort: "1 à 3 semaines par automatisation",
      },
      {
        number: 11,
        title: "Structurez votre base client dans un vrai CRM",
        why: "Le portefeuille client est souvent l'actif principal vendu. S'il est dispersé entre le téléphone du patron, des Excel et des emails, sa valeur chute. S'il est structuré dans un CRM avec historique, segmentation et traçabilité, il devient un actif premium transférable.",
        how: "Choisissez un CRM adapté à votre taille : HubSpot Free, Pipedrive, Axonaut, Zoho. Importez tous vos contacts existants. Segmentez par statut (prospect, client actif, client dormant). Documentez les interactions depuis au moins 12 mois. Nommez un responsable du maintien à jour.",
        alarm: "Vos clients sont encore dans un Excel, ou votre CRM n'est pas utilisé par 100% de l'équipe commerciale.",
        effort: "1 à 2 mois pour structurer, maintenance continue",
      },
      {
        number: 12,
        title: "Révisez vos contrats fournisseurs tech",
        why: "Un repreneur hérite de vos contrats tech. S'ils sont trop chers, mal cadrés ou attachés à votre personne physique, il doit renégocier à froid — c'est une charge qu'il déduira du prix. Des contrats propres, transférables, à prix marché sont un argument de négociation.",
        how: "Listez tous vos contrats tech (hébergement, logiciels SaaS, téléphonie, fibre, maintenance informatique). Pour chacun : date de renouvellement, conditions de résiliation, coût mensuel, signataire (personne physique ou société). Renégociez ce qui peut l'être. Transférez au nom de la société ce qui est encore à votre nom.",
        alarm: "Vous avez des contrats tech signés à votre nom personnel ou payés avec votre carte bancaire personnelle.",
        effort: "1 à 3 mois",
      },
      {
        number: 13,
        title: "Vérifiez que vos licences logicielles sont au nom de la société",
        why: "Les licences Microsoft 365, Adobe, Autocad ou autres logiciels métier doivent être nominatives de la société, pas du dirigeant. Une licence au nom personnel devient inaccessible pour le repreneur — il doit la racheter, et ça coûte cher.",
        how: "Auditez chaque logiciel payant utilisé dans l'entreprise. Vérifiez le titulaire de la facture et de la licence. Migrez vers des licences société si nécessaire. Pour les abonnements SaaS, créez un compte administrateur au nom de l'entreprise, pas le vôtre.",
        alarm: "Votre carte bancaire personnelle paie encore des abonnements professionnels.",
        effort: "1 à 2 semaines",
      },
      {
        number: 14,
        title: "Sécurisez la propriété intellectuelle de vos assets",
        why: "Logo, site web, contenus, code source, bases de données : si vous ne pouvez pas prouver que votre entreprise en est propriétaire, le repreneur paiera moins. Pire, un freelance qui a fait votre logo il y a 10 ans sans contrat peut théoriquement en revendiquer la propriété.",
        how: "Pour chaque asset créatif ou technique, rassemblez le contrat de cession des droits patrimoniaux. Si vous ne l'avez pas, recontactez le créateur et signez un document rétroactif. Déposez votre logo et marque à l'INPI (250€). Pour le code source, vérifiez que vos prestataires ont cédé les droits par écrit.",
        alarm: "Vous ne sauriez pas prouver que votre logo ou votre code vous appartient légalement.",
        effort: "2 à 6 semaines",
      },
      {
        number: 15,
        title: "Consolidez votre présence sur les réseaux professionnels",
        why: "Une page LinkedIn entreprise active, avec abonnés engagés et publications régulières, est un actif marketing transférable. Elle démontre une capacité de communication et une présence dans l'écosystème. C'est aussi un canal direct pour le repreneur après l'acquisition.",
        how: "Créez ou mettez à jour votre page LinkedIn entreprise. Ajoutez tous les collaborateurs comme membres. Publiez 2 à 3 fois par semaine sur vos sujets d'expertise pendant 6 mois avant la vente. Si votre secteur a une association ou une fédération, adhérez-y visiblement.",
        alarm: "Votre page LinkedIn a moins de 500 abonnés ou moins de 1 publication par mois.",
        effort: "30 min/semaine pendant 6 à 12 mois",
      },
      {
        number: 16,
        title: "Identifiez la part de revenus récurrents",
        why: "Un euro de revenu récurrent vaut 3 à 5 fois plus qu'un euro de revenu ponctuel dans une valorisation. Une PME avec 30% de MRR (revenus mensuels récurrents) se vend à un multiple bien supérieur à une PME 100% projet.",
        how: "Calculez la part de vos revenus qui sont contractualisés sur 12 mois ou plus (abonnements, contrats de maintenance, forfaits récurrents). Si elle est inférieure à 20%, travaillez à la faire monter : proposez des forfaits de suivi post-prestation, des contrats de maintenance, des abonnements à vos services complémentaires.",
        alarm: "Moins de 10% de votre chiffre d'affaires est prévisible sur 12 mois.",
        effort: "6 à 18 mois de transformation commerciale",
      },
      {
        number: 17,
        title: "Installez et structurez vos outils d'analytics",
        why: "Un repreneur veut comprendre d'où viennent vos clients, quels canaux performent, quel est votre coût d'acquisition. Sans data, il ne peut pas projeter la croissance — il reste donc conservateur sur le prix.",
        how: "Installez Google Analytics 4 sur votre site (gratuit). Configurez les conversions clés (formulaire de contact, devis, achat). Mettez en place un tableau de bord mensuel simple : visiteurs, sources de trafic, taux de conversion, coût d'acquisition par canal. Outils : Looker Studio (gratuit), simple Google Sheets mis à jour mensuellement.",
        alarm: "Vous ne savez pas combien de visiteurs votre site a eus le mois dernier, ni d'où ils venaient.",
        effort: "1 à 2 semaines",
      },
      {
        number: 18,
        title: "Modernisez votre stack technique obsolète",
        why: "Un système ERP développé en 2008, un serveur physique dans un placard, un logiciel métier qui ne tourne que sur Windows 7 : ce sont des dettes techniques que le repreneur devra solder après l'acquisition. Il le chiffre, le déduit, négocie.",
        how: "Listez toute votre stack : logiciels métier, système d'information, infrastructure. Identifiez les technologies obsolètes (plus de 10 ans sans mise à jour majeure, éditeur qui a fermé, compétences introuvables sur le marché). Planifiez les migrations critiques 12 à 24 mois avant la vente. Privilégiez le SaaS moderne au spécifique.",
        alarm: "Un outil critique dans votre entreprise n'a plus de support officiel ou dépend d'une version Windows/Mac obsolète.",
        effort: "6 à 18 mois selon l'ampleur",
      },
      {
        number: 19,
        title: "Centralisez votre documentation dans un outil unique",
        why: "La transmission de connaissance est le premier risque perçu par un repreneur. Si vos process, contrats, codes d'accès, historique commercial sont dispersés entre 15 endroits différents, le savoir-faire est inappréhensible — et donc sous-évalué.",
        how: "Choisissez un outil unique (Notion, Confluence, SharePoint). Migrez progressivement toute la documentation opérationnelle : processus, contrats, procédures, contacts clés, historique client. Structurez par catégorie claire. Donnez-y accès à au moins deux personnes dans l'entreprise pour créer un deuxième cerveau.",
        alarm: "Votre documentation est dispersée entre des emails, Word, PDF sur serveurs, post-it et tête du patron.",
        effort: "2 à 4 mois",
      },
      {
        number: 20,
        title: "Faites auditer votre maturité numérique par un tiers",
        why: "Un rapport externe, chiffré, daté, signé par un prestataire spécialisé est un argument opposable lors de la négociation. Il déplace la discussion du subjectif vers le factuel et crédibilise votre demande de valorisation.",
        how: "Faites réaliser un audit de maturité digitale 6 à 12 mois avant la mise en vente. Prévoyez un rapport opposable avec scoring sur 5 axes : processus, outils, sécurité, visibilité, données. Présentez ce rapport dans le dossier de cession au même titre que les comptes annuels.",
        alarm: "Vous n'avez aucune évaluation externe de votre maturité numérique à présenter à un repreneur.",
        effort: "2 à 4 semaines (audit externe)",
      },
    ],
    evaluation: {
      title: "Auto-évaluation finale",
      intro: "Recomptez les points où vous avez coché (point maîtrisé ou en cours de mise à niveau) :",
      tiers: [
        {
          range: "Moins de 5 points validés",
          text: "Votre valorisation numérique est critique. Chaque mois sans action coûte des euros sur votre prix final. Priorité absolue sur les 12 prochains mois avant toute mise sur le marché.",
        },
        {
          range: "Entre 5 et 10 points validés",
          text: "Vous êtes dans la moyenne des PME françaises. Un travail ciblé sur 6 à 12 mois peut vous placer au-dessus de la concurrence et justifier un premium de 10 à 20% sur le prix.",
        },
        {
          range: "Entre 11 et 15 points validés",
          text: "Vous êtes en bonne position. Les derniers points à valider relèvent de l'optimisation fine. Un audit externe formalisé peut transformer ces acquis en argument de négociation.",
        },
        {
          range: "Plus de 15 points validés",
          text: "Votre maturité numérique est un actif majeur de votre valorisation. Documentez-la, rendez-la opposable, et utilisez-la activement en négociation. Vous pouvez défendre un premium de 20 à 30%.",
        },
      ],
    },
    whatNow: {
      options: [
        {
          label: "Vous avez tout en main.",
          text: "Vous connaissez vos points faibles, vous avez le temps et les ressources internes pour traiter la liste. Bonne chance — sérieusement. La rigueur des 12 prochains mois déterminera votre prix de cession.",
        },
        {
          label: "Vous voulez être accompagné·e sur un point précis.",
          text: "Certains points techniques (automatisations, refonte web, SEO, sécurité) demandent des compétences spécifiques. Advisia intervient sur ces chantiers à prix affiché, sans sous-traitance. Voir : advisia.agency/services/automatisations-ia, advisia.agency/services/agence-web, advisia.agency/services/marketing-digital.",
        },
        {
          label: "Vous voulez un diagnostic complet opposable.",
          text: "L'audit de maturité digitale pré-cession Advisia produit un rapport daté, chiffré, utilisable directement en négociation. Livré en 48 à 72h à prix fixe. advisia.agency/cession-reprise — ou 30 minutes gratuites : advisia.agency/prendre-rendez-vous.",
        },
      ],
    },
    aboutAdvisia:
      "Advisia est une agence digitale française qui construit l'infrastructure IA, web et automatisation des PME. Plus de 20 projets livrés, prix fixes publics, aucune sous-traitance. On travaille partout en France, en remote et visio. Notre particularité : on chiffre concrètement l'impact de la maturité numérique sur la valorisation d'une entreprise, avec un rapport opposable à un acquéreur en négociation.",
  },
  {
    slug: "10-automatisations-ia-pme",
    title: "10 automatisations IA qui font gagner 10h/semaine à une PME",
    subtitle: "Avec les outils concrets, les coûts réels, et quand NE PAS le faire",
    teaser:
      "Pas de \"l'IA va tout changer\". 10 cas concrets, chiffrés, avec leurs limites honnêtes et les outils qu'on déploie vraiment.",
    icon: "⚡",
    accent: "lime",
    brevoListId: 7, // Lead Magnet - 10 Automatisations IA
    inTwoMinutes: {
      forWho:
        "Dirigeant·e de PME française (5 à 50 salariés) qui entend parler d'IA partout mais ne sait pas par où commencer concrètement, ni combien ça coûte, ni ce qui marche vraiment pour une entreprise comme la sienne.",
      notForWho:
        "Les DSI et CTO qui savent déjà construire leurs pipelines. Les entreprises qui cherchent à automatiser leur production industrielle (ce guide couvre les tâches administratives et commerciales, pas la robotique).",
      outcome:
        "10 cas d'usage concrets avec l'outil recommandé, le coût mensuel réaliste, le temps économisé, et la limite honnête de chaque automatisation.",
      readingTime: "15 minutes. Temps de déploiement de la première automatisation : 2 à 5 jours.",
    },
    introParagraphs: [
      "Tous les mois, un nouvel outil IA promet de \"révolutionner votre business\". Tous les mois, des dirigeants testent trois abonnements, en tirent peu de valeur, et concluent que l'IA n'est pas pour leur PME.",
      "Le problème n'est pas l'IA. C'est la méthode.",
      "L'IA ne transforme pas une entreprise en un claquement de doigts. Elle élimine des tâches précises, répétitives, chronophages — à condition qu'on choisisse les bonnes. Pour une PME française typique de 5 à 50 salariés, 10 automatisations bien placées font gagner entre 8 et 15 heures par semaine, cumulées sur toute l'équipe. Soit l'équivalent d'un mi-temps qui n'existe pas et n'a pas besoin d'être recruté.",
      "Ce qui suit n'est pas une liste de prompts magiques. C'est ce qu'on déploie vraiment chez nos clients, avec les outils qui fonctionnent en production, les budgets réels et les pièges qu'on évite.",
    ],
    checklistLabel: "Les 10 automatisations",
    items: [
      {
        number: 1,
        title: "Tri et priorisation automatique des emails entrants",
        why: "Votre boîte mail reçoit 80 à 200 messages par jour : demandes commerciales, factures fournisseurs, spams sophistiqués, questions clients, newsletters. Vous passez 45 minutes par jour à trier avant même de répondre.",
        how: "Une IA analyse chaque email entrant, le catégorise (commercial chaud, commercial froid, administratif, support, spam, personnel) et le range dans le bon dossier. Les urgences remontent en haut avec un résumé en 1 ligne. Outil : N8N ou Make + Claude API (Haiku pour le coût). Gmail API ou Outlook Graph pour la connexion. Coût : 20 à 40€/mois.",
        alarm: "L'IA ne remplace pas votre jugement sur les emails sensibles (clients stratégiques, conflits, négociations). Gardez une catégorie \"à lire toi-même\" et n'automatisez pas les réponses sur cette catégorie.",
        effort: "Temps gagné : 2,5 à 5h/semaine",
      },
      {
        number: 2,
        title: "Génération de devis à partir d'un brief commercial",
        why: "Un prospect envoie un email décrivant son besoin. Votre commercial passe 45 minutes à rédiger un devis : reformuler, piocher dans les tarifs, structurer, ajouter les CGV. Pour 10 devis/semaine, c'est 7h30.",
        how: "Le commercial colle le brief dans un formulaire. L'IA génère un devis structuré au format de l'entreprise, avec prix pré-remplis selon votre grille, sections adaptées, conditions standard. Outil : N8N + Claude API (Sonnet) + intégration Pennylane/Sellsy/Axonaut. Coût : 50 à 120€/mois selon volume.",
        alarm: "L'IA reste un premier jet. Pour les projets complexes à plus de 15 000€ ou les appels d'offres stratégiques, passez en rédaction manuelle. L'automatisation excelle sur le volume standard, pas sur le sur-mesure haut de gamme.",
        effort: "Temps gagné : 5 à 10h/semaine",
      },
      {
        number: 3,
        title: "Relance automatique des factures impayées",
        why: "Vous avez 15 à 30 factures en retard chaque mois. La relance manuelle prend 2 à 3h/semaine. Résultat : les relances se font en retard, ou pas du tout, et la trésorerie en souffre.",
        how: "Le système surveille votre logiciel de facturation (Sage, Pennylane, QuickBooks). À J+7, J+15 et J+30 après échéance, il envoie automatiquement un email de relance adapté (cordial, ferme, pré-contentieux). Si le client paie entre-temps, la séquence s'arrête. Outil : N8N/Make + API facturation + SMTP (ou Brevo, Mailjet). Coût : 15 à 40€/mois.",
        alarm: "Ne l'activez pas sur vos 10 plus gros clients sans validation humaine. Une relance automatique mal reçue par un gros compte peut coûter plus cher que ce qu'elle récupère.",
        effort: "Temps gagné : 2 à 3h/semaine + délai de paiement réduit de 15-25%",
      },
      {
        number: 4,
        title: "Transcription et résumé automatique des réunions",
        why: "Vous faites 5 à 10 réunions par semaine : clients, équipe, partenaires. Les compte-rendus prennent 30 minutes chacun, donc 2 à 5h/semaine. Résultat : beaucoup ne sont jamais rédigés, et les décisions se perdent.",
        how: "L'enregistrement (Meet, Zoom, Teams, dictaphone) est envoyé automatiquement à un service de transcription IA. Le texte brut passe par une IA qui produit un résumé structuré : participants, décisions, actions à faire, prochaines étapes. Outil : Gladia (transcription française, qualité/tarif). Claude API pour le résumé. N8N pour l'orchestration. Alternative packagée : Fireflies, Fathom, tl;dv. Coût : 20 à 80€/mois.",
        alarm: "La transcription française à 98% d'exactitude reste imparfaite sur les noms propres et le jargon métier. Une relecture de 5 minutes par compte-rendu important reste recommandée.",
        effort: "Temps gagné : 2 à 4h/semaine",
      },
      {
        number: 5,
        title: "Réponse automatique aux avis Google",
        why: "Vous recevez 10 à 30 avis par mois sur Google Business Profile. Répondre à chacun prend du temps, et pourtant c'est un signal SEO et commercial fort. En pratique, la plupart des avis restent sans réponse.",
        how: "Le système surveille les nouveaux avis via l'API Google Business. Pour chaque avis, l'IA génère une réponse personnalisée adaptée au contenu. Les 5 étoiles sont publiées automatiquement. Les 1-3 étoiles sont envoyées en brouillon pour validation humaine. Outil : Make/N8N + Claude API + API Google Business Profile. Coût : 10 à 30€/mois.",
        alarm: "Ne laissez jamais l'IA répondre seule aux avis négatifs. Un message automatique mal calibré sur un client mécontent amplifie le problème au lieu de l'éteindre.",
        effort: "Temps gagné : 1 à 2h/semaine, taux de réponse 20% → 100%",
      },
      {
        number: 6,
        title: "Rédaction automatique de fiches produits",
        why: "Vous ajoutez 50 à 200 nouveaux produits par an. Chaque fiche demande 20 à 40 minutes : description commerciale, caractéristiques, arguments, SEO. Pour 100 produits, c'est 50 heures.",
        how: "Vous fournissez les données brutes (nom, caractéristiques, photos, prix). L'IA génère une fiche complète : titre SEO, description, bullet points, arguments, méta-description. Un humain relit en 5 minutes au lieu de rédiger en 30. Outil : Claude API (Sonnet) + intégration Shopify/WooCommerce/PrestaShop via N8N. Coût : 30 à 100€/mois.",
        alarm: "L'IA produit des fiches correctes mais génériques. Pour vos 20 produits phares, gardez une rédaction humaine soignée. L'automatisation excelle sur la longue traîne, pas sur le haut de gamme.",
        effort: "Temps gagné : 3 à 6h/semaine en production continue",
      },
      {
        number: 7,
        title: "Extraction automatique des données depuis les factures fournisseurs",
        why: "Vous recevez 50 à 300 factures fournisseurs par mois. Les saisir manuellement dans votre comptabilité prend 3 à 10h/mois. C'est répétitif, à faible valeur, source d'erreurs.",
        how: "Chaque facture (email, PDF, photo) est envoyée à une IA spécialisée en extraction (OCR + IA). Le système identifie : fournisseur, date, montant HT, TVA, total TTC, numéro, échéance. Les données partent directement dans votre logiciel comptable. Outil : Docparser, Mindee ou Rossum pour l'extraction. Pennylane, Dext ou Sage en réception. N8N pour le liant. Coût : 40 à 150€/mois.",
        alarm: "L'extraction IA atteint 95-98% de précision sur les factures standards, mais 70-80% sur les factures manuscrites ou mal scannées. Gardez une validation humaine tant que les formats entrants ne sont pas normalisés.",
        effort: "Temps gagné : 3 à 8h/mois",
      },
      {
        number: 8,
        title: "Reporting hebdomadaire automatisé",
        why: "Chaque lundi matin, quelqu'un passe 2 à 4 heures à consolider les chiffres de la semaine : ventes, trésorerie, leads, KPIs. Les données sont dispersées entre CRM, banque, outil de caisse, analytics. Le rapport arrive parfois mardi.",
        how: "Le système se connecte aux sources (Stripe, HubSpot, Google Analytics, banque via agrégateur). Chaque lundi 7h, il compile, produit un dashboard visuel et envoie un résumé exécutif par email avec les points d'attention. Outil : N8N + Google Sheets + Looker Studio (gratuit) + Claude API pour le commentaire. Coût : 20 à 60€/mois.",
        alarm: "Le reporting automatisé ne remplace pas l'analyse. Il vous donne les chiffres plus vite, pas les interprétations. Gardez un temps d'analyse humain, maintenant dégagé du travail de consolidation.",
        effort: "Temps gagné : 2 à 4h/semaine",
      },
      {
        number: 9,
        title: "Chatbot FAQ sur votre site web",
        why: "Votre site reçoit 200 à 500 visiteurs/semaine, et vos équipes répondent à 20 à 50 questions redondantes/semaine (horaires, tarifs, zones, conditions, délais). Souvent les mêmes 10 questions, reformulées de 10 façons.",
        how: "Un assistant IA entraîné sur votre documentation (FAQ, conditions, tarifs, fiches service) répond 24/7 en langage naturel. Il ne répond que sur les sujets documentés. Pour toute autre question, formulaire ou numéro. Outil : Tidio/Crisp AI/Chatfuel pour le simple. Claude API + interface custom (Next.js/WeWeb) pour le sur-mesure. N8N pour les connexions. Coût : 20 à 80€/mois packagé, 50 à 200€/mois custom.",
        alarm: "Un chatbot qui répond mal fait plus de mal que pas de chatbot. Testez rigoureusement avant mise en production, et mettez toujours une porte de sortie claire vers un humain.",
        effort: "Temps gagné : 3 à 6h/semaine + 15-30% de leads qualifiés en plus",
      },
      {
        number: 10,
        title: "Veille concurrentielle automatisée",
        why: "Vous voulez savoir ce que font vos 5 concurrents principaux : nouveaux produits, changements de prix, communication, actualités. La veille manuelle prend 2 à 3h/semaine, ou plus souvent... n'est pas faite. Vous découvrez les mouvements avec 3 mois de retard.",
        how: "Le système surveille en continu les sites, pages LinkedIn, mentions presse et Google News de vos concurrents. Chaque semaine, synthèse par email. Changements significatifs = alerte immédiate. Outil : N8N + Firecrawl/Apify pour le scraping + Claude API pour la synthèse. Alternative packagée : Meltwater, Mention. Coût : 40 à 150€/mois custom, 200 à 500€/mois packagé.",
        alarm: "La veille automatisée couvre le public et l'observable. Les vrais mouvements stratégiques (embauches clés, levées de fonds, partenariats naissants) nécessitent un réseau humain. L'un ne remplace pas l'autre.",
        effort: "Temps gagné : 2 à 3h/semaine",
      },
    ],
    evaluation: {
      title: "Auto-évaluation",
      intro: "Lesquelles de ces automatisations seraient pertinentes pour votre PME dès maintenant ?",
      tiers: [
        {
          range: "Moins de 2 pertinentes",
          text: "Soit votre activité est déjà très automatisée (rare pour une PME), soit vous êtes dans un cas métier très spécifique. Un audit personnalisé peut révéler des cas d'usage adaptés à votre contexte.",
        },
        {
          range: "Entre 2 et 4 pertinentes",
          text: "Vous avez un potentiel d'automatisation concret. Commencez par la plus critique (celle qui fait perdre le plus de temps ou coûte le plus cher). Ne lancez jamais 3 chantiers en parallèle.",
        },
        {
          range: "Entre 5 et 7 pertinentes",
          text: "Vous êtes une PME typique avec un fort gisement d'automatisation. Prévoyez un plan sur 6 à 12 mois pour les déployer une par une, avec mesure de ROI à chaque étape.",
        },
        {
          range: "8 ou plus pertinentes",
          text: "Vous avez un chantier de transformation digitale devant vous. Le gain cumulé dépassera facilement 15h/semaine. Il faut un plan priorisé et une méthode, pas une accumulation d'outils.",
        },
      ],
    },
    bonus: {
      title: "Budget total réaliste",
      items: [
        {
          label: "Coût outils mensuel",
          text: "150 à 400€ tout compris (APIs + plateformes + hébergement) pour 5 automatisations bien choisies.",
        },
        {
          label: "Coût de déploiement initial",
          text: "3 000 à 12 000€ selon que c'est fait en interne, par un freelance ou une agence.",
        },
        { label: "Temps gagné", text: "8 à 15h par semaine cumulé sur toute l'équipe." },
        {
          label: "ROI typique",
          text: "Déploiements amortis entre 3 et 9 mois dans les cas que nous avons suivis.",
        },
      ],
    },
    whatNow: {
      options: [
        {
          label: "Vous voulez tester par vous-même.",
          text: "Commencez petit. Prenez l'automatisation la plus évidente (souvent la relance de factures ou le tri d'emails). Utilisez Make ou Zapier en version gratuite. Itérez. Vous apprendrez plus en 2 semaines de test qu'en 6 mois de lecture.",
        },
        {
          label: "Vous voulez déployer 1 ou 2 automatisations précises.",
          text: "Advisia déploie des automatisations ciblées à prix fixe, livrées en 2 à 3 jours. Pas de sous-traitance, pas de projet qui traîne. Voir : advisia.agency/services/automatisations-ia.",
        },
        {
          label: "Vous voulez une vision complète avant d'investir.",
          text: "Le diagnostic IA d'Advisia identifie vos 5 automatisations à plus fort ROI, les chiffre, et vous donne le plan d'action. Livré en 48-72h. advisia.agency/diagnostics ou 30 minutes gratuites : advisia.agency/prendre-rendez-vous.",
        },
      ],
    },
    aboutAdvisia:
      "Advisia est une agence IA et digitale française qui accompagne les PME de 5 à 200 salariés. Plus de 50 automatisations déployées, prix fixes publics, aucune sous-traitance. On construit l'infrastructure IA qui fait gagner du temps et augmente la marge — partout en France, en remote et visio. Notre particularité : on ne recommande jamais ce qu'on ne saurait pas livrer nous-mêmes.",
  },
  {
    slug: "checklist-seo-local",
    title: "15 checks SEO local pour être visible sur Google",
    subtitle: "Résultats en 4 à 8 semaines, sans budget publicitaire",
    teaser:
      "Le levier d'acquisition le plus sous-exploité par les PME françaises. 15 actions concrètes, délais précis, impact mesurable.",
    icon: "📍",
    accent: "blue",
    brevoListId: 8, // Lead Magnet - Checklist SEO Local
    inTwoMinutes: {
      forWho:
        "Dirigeant·e de PME française (5 à 50 salariés) qui vend localement ou régionalement : commerce, artisanat, services B2B locaux, santé, restauration, immobilier, conseil de proximité. Toute entreprise dont les clients tapent \"métier + ville\" sur Google.",
      notForWho:
        "Les e-commerces 100% nationaux ou internationaux sans ancrage géographique. Les SaaS B2B qui vendent partout dans le monde. Pour ces cas, le SEO classique est plus pertinent que le SEO local.",
      outcome:
        "15 checks concrets, auto-évaluables, avec des délais de mise en application réalistes et l'impact attendu sur votre visibilité locale.",
      readingTime: "15 minutes. Mise en application de l'ensemble : 4 à 8 semaines.",
    },
    introParagraphs: [
      "Le SEO local est le levier d'acquisition le plus sous-exploité par les PME françaises. Contrairement au SEO national, où vous vous battez contre des sites qui ont 10 ans d'ancienneté et des millions en netlinking, le SEO local se joue sur un terrain à taille humaine.",
      "Un plombier à Bayonne, un comptable à Pau, un restaurant à Bordeaux, un cabinet d'avocats à Toulouse : la concurrence réelle sur leurs mots-clés principaux se compte en dizaines, pas en millions. Avec une méthode rigoureuse sur 4 à 8 semaines, la plupart des PME peuvent se placer dans le top 3 des résultats locaux — sans dépenser un euro en publicité.",
      "Ce qui suit n'est pas de la théorie. C'est exactement ce qu'on vérifie chez nos clients locaux avant de commencer à écrire la moindre ligne de contenu. Sautez une de ces 15 étapes et vous perdez du temps et des positions.",
    ],
    checklistLabel: "Les 15 checks",
    items: [
      {
        number: 1,
        title: "Revendiquez et optimisez votre fiche Google Business Profile",
        why: "46% des recherches Google ont une intention locale. Votre fiche Google Business apparaît dans le \"pack local\" — les 3 fiches affichées en tête avec la carte. Pour les recherches \"métier + ville\", c'est plus visible que n'importe quelle position organique.",
        how: "Allez sur business.google.com. Revendiquez la fiche si ce n'est pas fait. Remplissez à 100% : catégorie principale + catégories secondaires, description avec mots-clés métier, horaires complets, zone de service, produits/services, attributs. Chaque champ vide est une opportunité perdue.",
        alarm: "Votre fiche n'apparaît pas quand vous tapez votre nom + ville en navigation privée, ou elle est marquée \"non revendiquée\".",
        effort: "2 à 3 heures initial",
      },
      {
        number: 2,
        title: "Ajoutez au minimum 20 photos récentes sur votre fiche",
        why: "Les fiches avec plus de 20 photos reçoivent 35% de clics en plus que les fiches avec moins de 10 photos. Les photos sont un signal d'activité, de sérieux, et elles alimentent les recherches visuelles de Google.",
        how: "Photos des locaux (extérieur, intérieur), de l'équipe, des produits ou prestations en cours, des logos. Évitez les photos génériques de banques d'images. Utilisez votre smartphone en bonne lumière naturelle. Ajoutez 2 à 3 photos par mois pour entretenir le signal de fraîcheur.",
        alarm: "Vos dernières photos Google datent d'il y a plus de 6 mois, ou vous avez moins de 10 photos au total.",
        effort: "2 heures initiales + 15 min/mois",
      },
      {
        number: 3,
        title: "Mettez en place une stratégie de collecte d'avis",
        why: "Les avis sont un facteur de classement Google direct pour le pack local. 88% des consommateurs lisent les avis avant de contacter une entreprise locale. Viser 50 avis minimum avec une note supérieure à 4,5/5.",
        how: "Créez un lien direct Google pour laisser un avis (dispo dans le back-office Google Business). Intégrez-le dans signature email, factures, après-vente. Envoyez un email automatique 3 à 5 jours après la prestation. Outils : Trustfolio, Guest Suite, ou simple automatisation CRM.",
        alarm: "Moins de 20 avis Google, ou une fréquence de moins de 1 avis par mois.",
        effort: "1 jour de mise en place + 10 min/semaine",
      },
      {
        number: 4,
        title: "Répondez à 100% des avis, positifs comme négatifs",
        why: "Répondre aux avis est un signal d'engagement pour Google et un facteur de réassurance pour les prospects. Les entreprises qui répondent à tous leurs avis ont en moyenne 25% de visibilité locale en plus que celles qui ne répondent pas.",
        how: "Pour les avis positifs, réponse courte et personnalisée en 2-3 phrases. Pour les négatifs, réponse professionnelle, sans agressivité, avec proposition de contact direct. Délai maximum 48h. Une automatisation IA peut aider sur les avis positifs, mais les avis négatifs restent humains.",
        alarm: "Vous avez des avis sans réponse de plus de 1 mois.",
        effort: "30 min/semaine",
      },
      {
        number: 5,
        title: "Identifiez vos mots-clés \"métier + ville\"",
        why: "Le SEO local ne cible pas les mêmes requêtes que le SEO national. \"Plombier\" est dominé par les grandes plateformes. \"Plombier Bayonne\" ou \"dépannage chauffe-eau Soustons\" est accessible à une PME locale bien optimisée.",
        how: "Listez 10 à 20 variantes de votre métier. Combinez avec vos villes de chalandise. Vérifiez les volumes sur Google Keyword Planner (gratuit) ou Ubersuggest. Priorisez les requêtes avec 100 à 1000 recherches/mois — sweet spot pour une PME.",
        alarm: "Vous n'avez aucune liste formalisée des mots-clés que tapent vos clients.",
        effort: "3 à 5 heures",
      },
      {
        number: 6,
        title: "Créez une page dédiée par ville de chalandise",
        why: "Une page unique \"nos zones d'intervention\" qui liste 10 villes ne rankera jamais. Une page dédiée par ville, avec contenu spécifique, permet de positionner chaque ville indépendamment sur ses propres requêtes.",
        how: "Créez une page par ville où vous intervenez (minimum 400 mots). Contenu : expertise locale, exemples de chantiers dans cette ville, particularités du secteur, coordonnées, CTA contact. URL en /services/ville-ville ou /ville/service.",
        alarm: "Vous avez une page \"Nos zones\" qui liste 10 villes sans contenu dédié.",
        effort: "2 à 4 heures par page, 1 page par semaine",
      },
      {
        number: 7,
        title: "Vérifiez la cohérence de votre NAP partout sur le web",
        why: "NAP = Name, Address, Phone. Google vérifie que vos coordonnées sont identiques partout (site, annuaires, réseaux sociaux, citations). La moindre incohérence dilue votre autorité locale.",
        how: "Définissez votre NAP de référence au caractère près. Auditez où il apparaît : site (footer, page contact, mentions légales), Google Business, LinkedIn, Facebook, Pages Jaunes, annuaires sectoriels. Uniformisez tout. Format téléphone toujours identique.",
        alarm: "Votre nom d'entreprise s'écrit différemment sur Google Business, votre site et LinkedIn.",
        effort: "1 journée",
      },
      {
        number: 8,
        title: "Publiez sur les annuaires locaux pertinents (citations)",
        why: "Les citations — mentions de votre NAP sur des sites tiers — sont un facteur de classement local. Elles signalent à Google que votre entreprise existe et est reconnue dans son écosystème.",
        how: "Incontournables : Pages Jaunes, Kompass, Yelp, Foursquare, Apple Maps. Puis annuaires sectoriels et locaux régionaux (chambre de commerce, associations pro, annuaires d'artisans, guides locaux). Viser 15 à 30 citations de qualité. Cohérence NAP à chaque inscription.",
        alarm: "Vous êtes présent sur moins de 5 annuaires ou vos informations sont désynchronisées.",
        effort: "1 à 2 journées",
      },
      {
        number: 9,
        title: "Obtenez des backlinks locaux de qualité",
        why: "Les liens entrants depuis des sites locaux reconnus (presse régionale, associations, partenaires, événements) sont parmi les signaux les plus puissants pour le SEO local. Ils valent plus que 100 liens d'annuaires génériques.",
        how: "Listez partenaires, fournisseurs, clients B2B, associations sectorielles — demandez des liens depuis leurs sites. Contactez la presse régionale pour un article. Sponsorisez un événement local en échange d'une mention avec lien. Rédigez un article invité pour un blog sectoriel local.",
        alarm: "Votre site n'a aucun backlink depuis un domaine local reconnu (presse, association, partenaire identifié).",
        effort: "2 à 4 heures par backlink obtenu",
      },
      {
        number: 10,
        title: "Optimisez vos balises title et meta description",
        why: "La balise title est le titre qui apparaît dans les résultats Google. La meta description est le texte en dessous. Un title optimisé peut doubler votre taux de clic à position égale.",
        how: "Pour chaque page importante, title unique avec mot-clé principal + ville (ex: \"Plombier à Bayonne — Dépannage 24h/7j | Nom Entreprise\"). 55-60 caractères. Meta description : 150-160 caractères, bénéfice concret + CTA. Outil : Screaming Frog (gratuit jusqu'à 500 URLs).",
        alarm: "Plusieurs de vos pages ont le même title, ou des titles génériques type \"Accueil\", \"Services\".",
        effort: "1 à 2 heures pour 10 pages",
      },
      {
        number: 11,
        title: "Ajoutez le schema.org LocalBusiness sur votre site",
        why: "Le schema.org est un code invisible pour les visiteurs mais lu par Google. Il structure les infos de votre entreprise dans un format que Google comprend parfaitement. Signal de sérieux et rich snippets possibles.",
        how: "Implémentez le schema LocalBusiness sur toutes les pages. Générateur : schema.org ou technicalseo.com/tools/schema-markup-generator. WordPress : Rank Math ou Yoast. Testez avec Google Rich Results Test. Un dev ou agence peut le poser en 2 heures.",
        alarm: "Le test Google Rich Results ne détecte aucun schema LocalBusiness sur votre page d'accueil.",
        effort: "2 à 4 heures",
      },
      {
        number: 12,
        title: "Optimisez la vitesse de votre site sur mobile",
        why: "75% des recherches locales se font sur mobile, avec une intention d'achat immédiate. Un site qui met plus de 3 secondes à charger perd 53% de ses visiteurs mobiles. Google pénalise directement les sites lents.",
        how: "PageSpeed Insights. Score mobile < 70 = chantier prioritaire. Actions rapides : compresser images (TinyPNG, Squoosh), activer cache, supprimer plugins inutiles. Si WordPress vieux + plugins lourds, envisagez une refonte Next.js (scores 90+ natifs).",
        alarm: "Votre score PageSpeed mobile est inférieur à 60.",
        effort: "1 jour à 3 semaines selon ampleur",
      },
      {
        number: 13,
        title: "Créez du contenu local régulier",
        why: "Un blog avec des articles ciblés sur des sujets locaux (événements, actualités, cas clients par ville, conseils régionaux) renforce votre positionnement local et capte des requêtes longue traîne. Carburant pour réseaux sociaux et newsletter.",
        how: "1 à 2 articles par mois. Idées : \"Top 5 des erreurs de [métier] à Bayonne\", \"Comment choisir [service] dans les Landes\", interview client local, actualités réglementaires régionales. 800 à 1500 mots. Optimisez chaque article sur un mot-clé \"métier + ville\" précis.",
        alarm: "Votre site n'a aucun article de blog, ou le dernier article date d'il y a plus de 3 mois.",
        effort: "3 à 6 heures par article",
      },
      {
        number: 14,
        title: "Installez et configurez Google Search Console + Google Analytics 4",
        why: "Sans mesure, vous naviguez à l'aveugle. Search Console montre les requêtes, position moyenne, taux de clic. GA4 montre les visiteurs SEO locaux et leur comportement. Impossible de piloter sans ces deux outils.",
        how: "Compte Google Search Console, vérifiez votre site, soumettez sitemap (votresite.fr/sitemap.xml). Compte GA4, installez le code sur toutes les pages. Configurez 2 conversions clés : formulaire de contact, clic sur numéro mobile. 15 minutes par semaine à regarder les données.",
        alarm: "Vous ne savez pas combien de visites organiques votre site a eu le mois dernier, ni sur quelles requêtes.",
        effort: "1 journée de setup",
      },
      {
        number: 15,
        title: "Maintenez l'optimisation chaque mois",
        why: "Le SEO local n'est pas un projet, c'est un entretien. Google valorise les entreprises actives. Un site qui stagne perd des positions face à un concurrent qui publie, ajoute des photos, récolte des avis.",
        how: "Bloquez 2 heures par mois : 2-3 photos Google Business, 1 post Google Business, réponses aux nouveaux avis, vérif positions sur 5 mots-clés clés, 1 article de blog, vérif Search Console. La régularité bat la perfection.",
        alarm: "Vous faites du SEO par à-coups, avec 6 mois d'intensité puis 12 mois de silence.",
        effort: "2 heures/mois",
      },
    ],
    evaluation: {
      title: "Auto-évaluation",
      intro: "Combien de points avez-vous déjà validés ?",
      tiers: [
        {
          range: "Moins de 5 points validés",
          text: "Votre SEO local est quasi inexistant. Bonne nouvelle : les gains seront rapides et visibles. Mauvaise nouvelle : vos concurrents locaux mieux organisés captent actuellement les prospects qui auraient dû vous trouver.",
        },
        {
          range: "Entre 5 et 9 points validés",
          text: "Vous avez les fondations, mais il manque des pièces clés. Un plan de 6 à 8 semaines pour compléter le reste peut vous faire passer de la 2ème/3ème page au pack local (top 3) sur vos mots-clés principaux.",
        },
        {
          range: "Entre 10 et 13 points validés",
          text: "Vous êtes au-dessus de la moyenne des PME locales. Le travail restant est de l'optimisation fine. Concentrez-vous sur les backlinks locaux et le contenu régulier pour consolider vos positions.",
        },
        {
          range: "14 ou 15 points validés",
          text: "Vous êtes en excellente position. Maintenez l'effort mensuel et suivez vos concurrents : si l'un d'eux devient plus agressif, vous le verrez dans Search Console avant que ça impacte votre chiffre d'affaires.",
        },
      ],
    },
    bonus: {
      title: "Délais réalistes avant de voir des résultats",
      items: [
        {
          label: "Semaine 1 à 2",
          text: "Actions techniques et fiche Google Business déjà visibles dans le pack local.",
        },
        {
          label: "Semaine 4 à 6",
          text: "Les nouvelles pages commencent à être indexées et à remonter sur les requêtes longue traîne.",
        },
        {
          label: "Semaine 8 à 12",
          text: "Positions consolidées sur vos mots-clés principaux si les 15 points sont traités sérieusement.",
        },
        {
          label: "Mois 6 à 12",
          text: "Progression continue si vous maintenez l'effort mensuel. Les PME qui tiennent 12 mois voient leur trafic organique multiplié par 3 à 5.",
        },
      ],
    },
    whatNow: {
      options: [
        {
          label: "Vous voulez faire par vous-même.",
          text: "La liste est suffisante pour démarrer. Priorisez : Google Business (1-4), mots-clés et contenu (5-6), puis technique (10-12). Bloquez 4 heures par semaine pendant 6 à 8 semaines.",
        },
        {
          label: "Vous voulez être accompagné sur des points précis.",
          text: "Advisia gère le SEO local des PME à prix fixe : audit complet, optimisations techniques, création de contenu, suivi mensuel. Voir : advisia.agency/services/marketing-digital.",
        },
        {
          label: "Vous voulez un diagnostic avant d'investir.",
          text: "Le diagnostic SEO d'Advisia identifie vos opportunités prioritaires, chiffre le potentiel et vous donne un plan d'action. Livré en 48-72h à 490€. advisia.agency/diagnostics ou 30 minutes gratuites : advisia.agency/prendre-rendez-vous.",
        },
      ],
    },
    aboutAdvisia:
      "Advisia est une agence digitale française qui accompagne les PME de 5 à 200 salariés sur leur acquisition organique : SEO local, SEO national, GEO (référencement IA), contenu. Plus de 50 projets livrés, prix fixes publics, aucune sous-traitance. On travaille partout en France, en remote et visio. Notre particularité : on mesure l'impact en leads générés, pas en positions ou en trafic.",
  },
];

export function getLeadMagnetBySlug(slug: string): LeadMagnet | undefined {
  return LEAD_MAGNETS.find((m) => m.slug === slug);
}
