export interface SeoSiloSection {
  h3: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SeoSiloFaqItem {
  q: string;
  a: string;
}

export interface SeoSiloInternalLink {
  href: string;
  label: string;
}

export interface SeoSiloContent {
  title: string;
  intro: string;
  sections: SeoSiloSection[];
  faq: SeoSiloFaqItem[];
  internalLinks: SeoSiloInternalLink[];
}

// ─── 1. SEO ───────────────────────────────────────────────────
export const seoSiloSeo: SeoSiloContent = {
  title: "Agence SEO pour PME : audit, strategie et resultats mesurables",
  intro:
    "Advisia accompagne les PME francaises de 5 a 200 salaries dans leur referencement naturel, de l'audit technique a la strategie de contenu longue traine. En 2026, 68 % du trafic web mondial provient encore de la recherche organique : ignorer le SEO, c'est laisser vos concurrents capter vos clients.",
  sections: [
    {
      h3: "Qu'est-ce qu'un audit SEO pour PME et pourquoi c'est la premiere etape obligatoire ?",
      paragraphs: [
        "Un audit SEO est une analyse methodique des forces et faiblesses d'un site sur trois piliers : technique (vitesse, indexation, structure), contenu (mots-cles, balisage, intention de recherche) et popularite (backlinks, autorite de domaine). Pour une PME avec un site vitrine de 20 a 200 pages, le diagnostic prend entre 5 et 10 jours ouvrables et produit un plan d'actions chiffre et priorise par impact.",
        "Le marche francais affiche des tarifs d'audit SEO complet entre 500 et 5 000 euros selon la complexite du site. Chez Advisia, le prix est affiche publiquement sur notre page tarifs, sans devis opaque ni frais caches. Le livrable final n'est pas un PDF de constats generiques : c'est une feuille de route avec des sprints hebdomadaires, des KPI clairs (trafic organique, positions, taux de conversion) et un reporting regulier.",
        "La difference entre un audit rentable et un audit inutile tient a un critere : le plan d'actions est-il applicable par votre equipe ou par l'agence, avec un calendrier realiste ? Si le rapport finit dans un tiroir, l'investissement est perdu. Advisia integre systematiquement la capacite d'execution du client dans ses recommandations.",
      ],
      bullets: [
        "Audit technique : crawl, indexation, Core Web Vitals, HTTPS",
        "Audit semantique : mots-cles, intentions de recherche, balisage Hn",
        "Audit de popularite : profil de backlinks, autorite de domaine",
        "Livrable : plan d'actions priorise avec calendrier de sprints",
      ],
    },
    {
      h3: "Combien de temps faut-il pour voir des resultats SEO concrets quand on est une PME ?",
      paragraphs: [
        "Le referencement naturel designe l'ensemble des techniques qui ameliorent la position d'un site dans les resultats non payants de Google. Les premiers signaux positifs (hausse des impressions, progression sur la longue traine) apparaissent generalement entre 3 et 4 mois. Les resultats significatifs en termes de trafic qualifie et de leads arrivent entre 6 et 12 mois, selon la concurrence sectorielle et l'historique du domaine.",
        "Pour une PME francaise dans un secteur B2B ou en commerce local, la strategie la plus rentable consiste a cibler d'abord les mots-cles de longue traine a faible concurrence et a fort taux de conversion. Un plombier dans une ville de 30 000 habitants peut atteindre la premiere page en 3 mois sur des requetes locales. Un e-commerce PME sur un marche national devra investir 6 a 12 mois pour consolider ses positions sur des requetes plus concurrentielles.",
        "Advisia structure chaque mission SEO en phases claires : correctifs techniques rapides (mois 1-2), deploiement du contenu strategique (mois 3-6), puis acceleration via le netlinking et l'optimisation continue. Chaque phase produit des indicateurs mesurables dans la Search Console et Google Analytics.",
      ],
    },
    {
      h3: "SEO local pour PME : comment dominer les recherches geolocalisees en France",
      paragraphs: [
        "Le SEO local designe les techniques de referencement qui visent a positionner une entreprise sur les recherches incluant une composante geographique (nom de ville, departement, region) ou declenchees par la geolocalisation de l'utilisateur. En France, 46 % des recherches Google ont une intention locale, et 76 % des utilisateurs qui effectuent une recherche locale sur mobile visitent un commerce physique dans les 24 heures.",
        "Pour une PME avec une zone de chalandise definie, le SEO local genere un retour sur investissement trois fois superieur aux autres canaux digitaux. Les leviers prioritaires sont la fiche Google Business Profile (completude, avis clients, publications regulieres), la coherence des informations NAP (nom, adresse, telephone) sur toutes les plateformes, et la creation de pages locales optimisees sur le site.",
        "Advisia intervient aupres de PME dans des secteurs comme le commerce de proximite, le tourisme, la sante, l'industrie et les services B2B partout en France. Le travail se fait en remote et en visio, avec les memes outils et la meme rigueur qu'une agence de proximite, mais sans la contrainte geographique.",
      ],
    },
    {
      h3: "SEO et IA generative : pourquoi votre strategie de contenu doit evoluer des maintenant",
      paragraphs: [
        "L'emergence des AI Overviews de Google et des moteurs de recherche IA comme ChatGPT Search et Perplexity change les regles du referencement. En 2026, pres de 80 % des recherches sur mobile affichent un bloc genere par l'IA avant les resultats organiques classiques. Pour une PME, cela signifie qu'un contenu non structure pour les moteurs IA risque de perdre en visibilite meme s'il est bien positionne en SEO classique.",
        "Advisia integre dans chaque strategie SEO les principes du GEO (Generative Engine Optimization) : contenu factuellement sourcable, definitions courtes et citables, balisage Schema.org (FAQ, HowTo, Product), et paragraphes cles de moins de 280 caracteres que les modeles IA peuvent extraire directement. Cette double optimisation SEO et GEO protege votre visibilite sur les deux fronts.",
        "Concretement, sur les missions SEO Advisia, chaque page strategique est auditee a la fois sur ses positions Google classiques et sur sa presence dans les reponses des moteurs IA. Le reporting inclut ces deux dimensions pour mesurer l'evolution reelle de votre visibilite.",
      ],
    },
    {
      h3: "Quel budget SEO prevoir pour une PME francaise et comment mesurer le ROI ?",
      paragraphs: [
        "En France, un accompagnement SEO mensuel pour une PME se situe entre 500 et 3 000 euros par mois selon l'ampleur du projet, la concurrence sectorielle et le volume de contenu a produire. Le cout par lead acquis via le SEO est en moyenne 61 % inferieur a celui de la prospection sortante, avec un taux de transformation qui atteint 14,6 % en B2B contre 1,7 % pour le marketing traditionnel.",
        "La formule de calcul du ROI SEO est simple : (revenus generes par le trafic organique moins le cout de l'investissement SEO) divise par le cout de l'investissement, multiplie par 100. Sur une periode de 12 a 18 mois, une strategie SEO bien executee fonctionne comme un actif : elle continue a generer du trafic et des leads sans cout marginal par clic, contrairement aux campagnes Google Ads qui s'arretent des que le budget est coupe.",
        "Chez Advisia, les tarifs sont affiches publiquement, les contrats sont mensuels sans engagement, et le reporting est hebdomadaire. Pas de boite noire, pas de surprises sur la facture. Les deux fondateurs qui conseillent sont ceux qui executent : zero sous-traitance, zero intermediaire.",
      ],
    },
  ],
  faq: [
    {
      q: "Combien coute un audit SEO complet pour une PME en France ?",
      a: "Un audit SEO complet pour une PME avec un site de 20 a 200 pages coute entre 500 et 3 000 euros en France. Le prix varie selon la taille du site, le type d'audit (technique, semantique, netlinking ou global) et le niveau de detail du livrable. Les audits automatises a bas cout produisent des constats generiques sans plan d'actions exploitable.",
    },
    {
      q: "Est-ce qu'une PME peut se positionner sur Google face aux grandes entreprises ?",
      a: "Oui, a condition de cibler les bons mots-cles. Les grandes entreprises dominent les requetes generiques a fort volume. Les PME obtiennent de meilleurs resultats sur la longue traine (requetes de 4 a 8 mots, souvent locales ou sectorielles) ou la concurrence est plus faible et le taux de conversion plus eleve. Le SEO local est particulierement efficace pour les PME avec une zone de chalandise definie.",
    },
    {
      q: "Quelle est la difference entre un consultant SEO freelance et une agence SEO pour PME ?",
      a: "Un consultant freelance offre un accompagnement personnalise et des tarifs generalement plus accessibles (TJM entre 300 et 900 euros). Une agence dispose d'equipes pluridisciplinaires pour couvrir technique, contenu et netlinking simultanement. Advisia combine les deux : une structure agile de deux fondateurs-experts qui interviennent directement, sans couche intermediaire ni sous-traitance.",
    },
    {
      q: "Le SEO est-il encore rentable en 2026 avec l'arrivee de l'IA dans les resultats Google ?",
      a: "Le SEO reste le canal d'acquisition au meilleur ROI en 2026. 68 % du trafic web provient encore de la recherche organique. L'IA generative modifie la presentation des resultats mais ne supprime pas le besoin de contenu structure et autorite. Les PME qui combinent SEO classique et optimisation pour les moteurs IA (GEO) protegent leur visibilite sur les deux fronts.",
    },
    {
      q: "Comment savoir si mon agence SEO fait bien son travail ?",
      a: "Trois indicateurs a suivre mensuellement : l'evolution du trafic organique dans Google Analytics, la progression des positions sur les mots-cles cibles dans la Search Console, et le nombre de leads ou de conversions generes par le canal SEO. Une agence serieuse fournit un reporting regulier avec ces metriques et explique les ecarts entre previsions et resultats.",
    },
    {
      q: "Faut-il faire du SEO ou du Google Ads quand on a un petit budget PME ?",
      a: "Les deux sont complementaires mais jouent des roles differents. Google Ads produit des resultats immediats tant que le budget tourne. Le SEO demande 3 a 6 mois pour porter ses fruits mais genere ensuite du trafic sans cout par clic. Pour un petit budget, la strategie optimale consiste a lancer quelques campagnes Ads sur les mots-cles les plus rentables tout en construisant progressivement les positions organiques.",
    },
    {
      q: "Quels secteurs d'activite profitent le plus du SEO pour PME en France ?",
      a: "Les secteurs avec un cycle de decision long et une recherche d'information en ligne beneficient le plus du SEO : services B2B, sante, immobilier, industrie, tourisme, formation professionnelle et e-commerce de niche. Le SEO local est particulierement efficace pour le commerce de proximite, la restauration et les services a domicile. Le ROI le plus eleve est observe dans l'immobilier et les services financiers.",
    },
    {
      q: "Un site vitrine de PME a-t-il vraiment besoin d'une strategie SEO ?",
      a: "Un site vitrine sans strategie SEO est invisible sur Google. Meme un site de 10 pages peut generer des leads reguliers s'il cible les bonnes requetes locales et sectorielles. L'audit technique initial corrige les erreurs bloquantes (indexation, vitesse, balisage). La creation de 5 a 10 pages de contenu strategique suffit souvent a positionner une PME sur ses requetes prioritaires en quelques mois.",
    },
  ],
  internalLinks: [
    { href: "/services/marketing-digital", label: "nos services en marketing digital" },
    { href: "/services/marketing-digital/geo", label: "strategie GEO et referencement IA" },
    { href: "/services/marketing-digital/sea", label: "gestion de campagnes Google Ads" },
    { href: "/diagnostics", label: "diagnostics digitaux pour PME" },
    { href: "/tarifs", label: "tarifs affiches et transparents" },
    { href: "/insights/seo-pme-2025", label: "guide SEO PME" },
    { href: "/prendre-rendez-vous", label: "prendre rendez-vous avec un expert SEO" },
  ],
};

// ─── 2. SEA ───────────────────────────────────────────────────
export const seoSiloSea: SeoSiloContent = {
  title: "Advisia, agence Google Ads pour PME en France",
  intro:
    "Advisia accompagne les PME francaises dans la gestion de leurs campagnes Google Ads, de l'audit initial au pilotage continu. En 2026, avec un CPC moyen en hausse de plus de 10 % par an et des algorithmes de plus en plus complexes, confier ses campagnes SEA a une agence specialisee n'est plus un luxe mais un levier de rentabilite.",
  sections: [
    {
      h3: "Quel budget Google Ads prevoir pour une PME en France ?",
      paragraphs: [
        "Le SEA, pour Search Engine Advertising, designe l'ensemble des actions publicitaires payantes sur les moteurs de recherche, principalement Google. En France, le cout par clic moyen sur le reseau Search se situe entre 0,50 et 3 euros selon le secteur, avec des pics au-dela de 10 euros dans le juridique ou la finance. Pour une PME locale qui demarre, un budget mensuel de 500 a 1 500 euros suffit a generer des premiers resultats mesurables, a condition de cibler des mots-cles a forte intention d'achat et une zone geographique precise.",
        "Le piege le plus frequent : lancer une campagne Google Ads sans strategie de mots-cles ni suivi des conversions. Selon plusieurs etudes sectorielles, les comptes mal optimises gaspillent entre 20 et 50 % de leur budget media sur des clics non qualifies. Advisia demarre chaque mission par un audit complet du compte existant ou une etude de faisabilite avant de depenser le moindre euro en publicite.",
      ],
      bullets: [
        "Audit du compte Google Ads ou etude de faisabilite inclus",
        "Budget media distinct des frais de gestion, sans pourcentage cache",
        "Ciblage geographique et horaire ajuste a votre zone de chalandise",
        "Suivi des conversions configure des le premier jour",
      ],
    },
    {
      h3: "Pourquoi le Quality Score reduit vos couts Google Ads",
      paragraphs: [
        "Le Quality Score est la note de 1 a 10 attribuee par Google a chaque mot-cle de votre compte. Il mesure la pertinence de vos annonces, le taux de clic attendu et la qualite de la page de destination. Un Quality Score eleve (7 a 10) peut reduire votre cout par clic reel de 16 a 50 % par rapport a un score moyen, selon les donnees consolidees du secteur. A l'inverse, un score inferieur a 5 peut multiplier votre CPC par deux.",
        "Concretement, deux PME francaises ciblant le meme mot-cle peuvent payer un cout radicalement different. Celle dont les annonces sont bien redigees, les groupes d'annonces bien structures et la page de destination rapide et pertinente paie moins cher tout en apparaissant plus haut. Advisia travaille systematiquement ces trois piliers pour chaque campagne : structure de compte, redaction d'annonces et optimisation des pages d'atterrissage.",
      ],
    },
    {
      h3: "Agence Google Ads PME : comment eviter les erreurs qui brulent votre budget",
      paragraphs: [
        "Les cinq erreurs les plus couteuses sur Google Ads pour une PME sont : l'absence de mots-cles negatifs, un ciblage geographique trop large, des annonces generiques envoyant vers la page d'accueil, aucun suivi de conversions, et le recours aveugle aux recommandations automatiques de Google. Chacune de ces erreurs peut a elle seule gaspiller 15 a 30 % du budget mensuel.",
        "Un commerce de services B2B qui ne configure pas ses mots-cles negatifs finira par payer des clics sur des requetes hors sujet. Un e-commercant qui redirige tout son trafic vers sa page d'accueil au lieu de pages produits dediees verra son taux de conversion chuter. Advisia corrige ces points des l'audit initial et met en place un reporting hebdomadaire lisible, sans jargon, pour que le dirigeant comprenne exactement ou va chaque euro investi.",
      ],
      bullets: [
        "Liste de mots-cles negatifs mise a jour chaque semaine",
        "Landing pages dediees par groupe d'annonces",
        "Reporting hebdomadaire avec CPA, ROAS et recommandations",
        "Aucun score d'optimisation Google suivi aveuglement",
      ],
    },
    {
      h3: "Google Ads et SEO : faut-il choisir ou combiner les deux leviers ?",
      paragraphs: [
        "Le SEA genere des resultats immediats : vos annonces apparaissent en haut de Google des le jour du lancement. Le SEO, lui, construit une visibilite organique durable mais demande plusieurs mois avant de produire du trafic regulier. Pour une PME francaise qui a besoin de flux commercial rapidement, Google Ads est le levier le plus direct. Mais les donnees de campagnes SEA alimentent aussi la strategie SEO : les mots-cles qui convertissent en publicite sont ceux sur lesquels investir en contenu.",
        "Advisia propose les deux approches, separement ou combinees. Les donnees du compte Google Ads servent a identifier les requetes les plus rentables, qui sont ensuite ciblees en referencement naturel pour reduire progressivement la dependance au budget publicitaire. Cette approche hybride est particulierement efficace pour les PME de services B2B et les e-commercants regionaux.",
      ],
    },
    {
      h3: "Comment Advisia pilote vos campagnes Google Ads au quotidien",
      paragraphs: [
        "Advisia n'est pas un intermediaire. Eliott et Julien, les deux fondateurs, gerent directement les comptes clients sans sous-traitance. Chaque mission commence par un audit ou une etude de faisabilite, suivi d'un plan d'action chiffre avec objectifs de cout par acquisition et de retour sur investissement. Les campagnes sont lancees en sprints courts, avec des ajustements hebdomadaires bases sur les performances reelles.",
        "Les tarifs de gestion sont affiches publiquement sur le site, sans pourcentage sur le budget media ni engagement longue duree. Les contrats sont mensuels. Le dirigeant conserve la propriete totale de son compte Google Ads et accede a un tableau de bord partage en temps reel. Cette transparence est rare dans le marche des agences SEA en France, ou la majorite facture un pourcentage du budget media et impose des engagements de six a douze mois.",
      ],
      bullets: [
        "Fondateurs directement sur le compte, zero sous-traitance",
        "Tarifs publics et contrat mensuel sans engagement",
        "Propriete du compte Google Ads conservee par le client",
        "Tableau de bord partage avec acces en temps reel",
      ],
    },
  ],
  faq: [
    {
      q: "Combien coute une agence Google Ads par mois pour une PME ?",
      a: "Les frais de gestion d'une agence Google Ads oscillent entre 500 et 2 000 euros par mois selon la complexite des campagnes, auxquels s'ajoute le budget media verse directement a Google. Advisia affiche ses tarifs publiquement et ne preleve aucun pourcentage sur le budget publicitaire, ce qui evite les surprises de facturation.",
    },
    {
      q: "Quel budget minimum faut-il sur Google Ads pour obtenir des resultats ?",
      a: "Une PME locale peut demarrer avec 500 a 1 000 euros de budget media mensuel en ciblant quelques mots-cles a forte intention et une zone geographique precise. L'important est de configurer le suivi des conversions avant de lancer la premiere annonce pour pouvoir mesurer le retour sur investissement des les premieres semaines.",
    },
    {
      q: "Google Ads est-il rentable pour une petite entreprise en France ?",
      a: "Google Ads reste l'un des leviers d'acquisition les plus mesurables pour une PME. La rentabilite depend du cout par clic dans votre secteur, de votre taux de conversion et de votre panier moyen. Un artisan local avec un CPC a 1 euro et un taux de conversion de 5 % peut generer un prospect pour 20 euros, ce qui est rentable pour la plupart des activites de services.",
    },
    {
      q: "Comment savoir si mon compte Google Ads est mal gere ?",
      a: "Trois signaux d'alerte : vous ne savez pas combien coute un prospect genere par vos annonces, votre taux de clics est inferieur a 3 %, ou vous n'avez jamais verifie votre rapport de termes de recherche pour exclure les requetes non pertinentes. Un audit de compte revele generalement entre 20 et 40 % d'economies possibles sur des comptes autogeres.",
    },
    {
      q: "Quelle difference entre une agence Google Ads et un freelance SEA ?",
      a: "Un freelance SEA facture generalement entre 300 et 800 euros par mois. Une agence offre plus de profondeur strategique, un suivi plus structure et une continuite de service. Advisia combine les deux : une structure agence avec la reactivite d'une equipe resserree de deux fondateurs qui gerent directement les comptes.",
    },
    {
      q: "Faut-il etre certifie Google Partner pour bien gerer des campagnes Ads ?",
      a: "La certification Google Partner atteste d'un niveau de competence technique mais ne garantit pas les resultats. Ce qui compte, c'est la capacite a structurer un compte proprement, a ecrire des annonces pertinentes, a optimiser les pages de destination et a piloter les encheres en fonction d'objectifs business concrets, pas seulement de metriques publicitaires.",
    },
    {
      q: "Combien de temps faut-il pour voir les premiers resultats avec Google Ads ?",
      a: "Les premieres impressions et clics arrivent dans les 24 heures suivant le lancement. Mais l'optimisation reelle demande quatre a huit semaines : le temps de collecter suffisamment de donnees de conversion, d'affiner les mots-cles negatifs, d'ajuster les encheres et de tester plusieurs variantes d'annonces pour stabiliser un cout par acquisition rentable.",
    },
    {
      q: "Google Ads fonctionne-t-il pour le B2B en France ?",
      a: "Le SEA B2B est performant a condition de cibler des mots-cles a intention commerciale forte et de remonter les conversions hors ligne dans le compte. Les cycles de vente B2B etant plus longs, il faut relier Google Ads au CRM pour suivre le parcours du prospect jusqu'a la signature, pas seulement jusqu'au formulaire de contact.",
    },
  ],
  internalLinks: [
    { href: "/services/marketing-digital", label: "notre approche marketing digital pour PME" },
    { href: "/services/marketing-digital/seo", label: "referencement naturel SEO" },
    { href: "/services/marketing-digital/social-ads", label: "publicite Meta Ads et LinkedIn Ads" },
    { href: "/diagnostics", label: "diagnostics digitaux pour PME" },
    { href: "/tarifs", label: "tarifs affiches publiquement" },
    { href: "/insights/google-ads-pme-demarrer", label: "guide pour demarrer Google Ads en PME" },
    { href: "/insights/social-ads-vs-sea-pme", label: "comparatif Social Ads et SEA pour PME" },
  ],
};

// ─── 3. SOCIAL ADS ────────────────────────────────────────────
export const seoSiloSocialAds: SeoSiloContent = {
  title: "Pourquoi confier vos Social Ads PME a Advisia",
  intro:
    "Advisia accompagne les PME francaises de 5 a 200 salaries dans la creation et le pilotage de campagnes publicitaires sur Meta, LinkedIn et TikTok. En 2026, les recettes publicitaires digitales en France depassent 13 milliards d'euros : chaque euro mal investi creuse l'ecart avec vos concurrents.",
  sections: [
    {
      h3: "Qu'est-ce que les Social Ads et pourquoi une PME doit s'y interesser maintenant",
      paragraphs: [
        "Les Social Ads designent l'ensemble des campagnes publicitaires payantes diffusees sur les reseaux sociaux : Facebook, Instagram, LinkedIn, TikTok ou encore Messenger. Contrairement au SEO qui produit des resultats a moyen terme, les Social Ads generent du trafic qualifie et des prospects des les premieres semaines de diffusion. Pour une PME francaise, c'est le levier le plus rapide pour tester une offre, generer des demandes de devis ou remplir un carnet de commandes.",
        "Le retargeting, technique qui consiste a recibler les visiteurs ayant deja consulte votre site sans convertir, affiche un taux de conversion 3 a 5 fois superieur aux campagnes adressees a des audiences froides. Sur Meta Ads en 2026, le CPC moyen se situe entre 0,20 et 0,80 euro, et le CPM entre 5 et 15 euros, ce qui rend le canal accessible meme avec un budget de 500 euros par mois.",
      ],
      bullets: [
        "Meta Ads : 40 millions d'utilisateurs actifs par mois en France",
        "LinkedIn Ads : ciblage par poste, secteur et taille d'entreprise",
        "TikTok Ads : cout de diffusion souvent inferieur a Meta",
        "Budget PME de demarrage : 300 a 800 euros par mois sur Meta",
      ],
    },
    {
      h3: "Comment Advisia structure une campagne Social Ads rentable pour les PME",
      paragraphs: [
        "Advisia ne lance jamais de campagne sans audit prealable. La premiere etape est un diagnostic de votre ecosysteme digital : pixel Meta ou Insight Tag LinkedIn installe, evenements de conversion parametres, landing pages alignees avec le message publicitaire. Ce socle technique conditionne directement la rentabilite de vos campagnes. Trop de PME gaspillent leur budget parce que l'algorithme n'a aucune donnee de conversion fiable pour s'optimiser.",
        "Ensuite, la strategie est construite autour de trois paliers : acquisition (audiences froides via lookalike et ciblage par interets), consideration (contenu video, carrousel, temoignages) et conversion (retargeting des visiteurs site, paniers abandonnes, formulaires Lead Gen). Chaque palier a son budget, ses KPI et son calendrier de test. Advisia ajuste les campagnes chaque semaine avec un reporting clair : cout par lead, cout par acquisition client, ROAS ou POAS selon votre modele economique.",
      ],
    },
    {
      h3: "Agence Meta Ads ou freelance : que choisir quand on est une PME francaise",
      paragraphs: [
        "Le marche des agences Social Ads en France est sature d'acteurs qui gerent 50 comptes en parallele avec des profils juniors. Pour une PME dont le budget media reste inferieur a 5 000 euros par mois, le risque est d'etre traitee en client secondaire par une agence de taille intermediaire. Un freelance apporte de la proximite mais rarement la vision strategique globale : site, tunnel de conversion, CRM, automatisation post-lead.",
        "Advisia se positionne entre les deux. Deux fondateurs qui conseillent et executent, pas de sous-traitance, pas de junior sur votre compte. Les tarifs sont affiches publiquement sur le site. Et parce que la publicite ne fonctionne que si le reste du dispositif digital est solide, Advisia intervient aussi sur la creation de landing pages, le parametrage du tracking server-side (CAPI) et la connexion CRM pour suivre le parcours du prospect jusqu'a la vente.",
      ],
    },
    {
      h3: "LinkedIn Ads B2B : le levier sous-exploite par les PME de services",
      paragraphs: [
        "LinkedIn Ads est la plateforme la plus precise pour cibler des decideurs B2B : directeur commercial, DRH, DSI, gerant de PME de 50 a 200 salaries dans un secteur precis. Le CPC moyen est plus eleve que sur Meta (5 a 12 euros), mais la qualite des leads compense largement. En B2B, un lead LinkedIn converti en client peut representer un contrat de 5 000 a 50 000 euros.",
        "Advisia deploie des campagnes LinkedIn Ads pour les PME B2B dans des secteurs comme l'industrie, les services professionnels, la logistique ou le conseil. Le format le plus performant : Sponsored Content couple a un Lead Gen Form natif, qui pre-remplit les coordonnees du prospect et genere des taux de conversion 2 a 5 fois superieurs a une landing page classique. Budget minimum recommande : 1 500 euros par mois pour obtenir des donnees exploitables.",
      ],
    },
    {
      h3: "Social Ads e-commerce PME : generer des ventes avec un budget maitrise",
      paragraphs: [
        "Pour une boutique en ligne, Meta Ads reste le canal le plus mature en 2026. Le Catalogue Advantage+ combine IA de ciblage et personnalisation automatique : chaque visiteur voit les produits qu'il a consultes ou ceux qui correspondent a son profil. Le taux de conversion en e-commerce sur Facebook Ads se situe entre 1,5 et 3 pourcent en moyenne, et le retargeting sur panier abandonne peut multiplier ce chiffre par trois.",
        "Advisia accompagne des e-commercants francais sur l'ensemble du dispositif : parametrage du pixel et de la CAPI, creation du catalogue produit, strategie creative (UGC, video courte, carrousel), et pilotage hebdomadaire sur le POAS plutot que sur le ROAS seul. Le POAS (Profit on Ad Spend) integre vos couts reels (marchandises, expedition, frais) pour mesurer la rentabilite nette de chaque euro investi en publicite.",
      ],
    },
  ],
  faq: [
    {
      q: "Quel budget minimum pour lancer des Social Ads quand on est une PME",
      a: "Sur Meta Ads, un budget de 300 a 500 euros par mois permet de tester une premiere campagne et de collecter des donnees exploitables. Sur LinkedIn Ads en B2B, il faut compter au minimum 1 500 euros par mois pour que l'algorithme dispose de suffisamment de conversions pour s'optimiser. Advisia adapte la strategie au budget reel de chaque client.",
    },
    {
      q: "Combien de temps avant de voir les premiers resultats d'une campagne Social Ads",
      a: "Les premieres donnees statistiquement significatives arrivent en 7 a 14 jours sur Meta Ads, et 2 a 3 semaines sur LinkedIn Ads. Une campagne serieuse necessite 3 mois pour atteindre un rythme de croisiere, le temps de tester les audiences, les visuels et les messages. Advisia fournit un reporting hebdomadaire des la premiere semaine.",
    },
    {
      q: "Faut-il choisir entre Meta Ads et Google Ads pour une PME",
      a: "Les deux canaux sont complementaires. Google Ads capte les prospects en recherche active (intention d'achat elevee), tandis que Meta Ads genere de la demande aupres d'audiences qui ne connaissent pas encore votre offre. Pour un tunnel de conversion performant, combiner les deux couvre l'ensemble du parcours d'achat. Advisia peut piloter les deux leviers simultanement.",
    },
    {
      q: "Le retargeting Meta Ads est-il vraiment efficace pour les petites entreprises",
      a: "Le retargeting affiche un taux de conversion 3 a 5 fois superieur aux campagnes sur audiences froides. Meme avec un trafic site modeste (500 a 1 000 visiteurs par mois), il est possible de constituer une audience de reciblage rentable. Le prerequis technique est un pixel Meta correctement installe avec les evenements de conversion actifs.",
    },
    {
      q: "Comment savoir si mon agence Social Ads fait du bon travail",
      a: "Trois indicateurs cles a suivre : le cout par lead ou par acquisition client (pas seulement le CPC), le ROAS ou le POAS rapporte a votre marge reelle, et le volume de tests creatifs lances chaque mois. Une agence serieuse partage ces donnees chaque semaine et propose des ajustements, pas un simple reporting mensuel passif.",
    },
    {
      q: "Les Social Ads fonctionnent-elles pour une activite locale en France",
      a: "Meta Ads propose un ciblage geographique precis par rayon autour d'une adresse, d'une ville ou d'un departement. C'est un levier particulierement adapte aux commerces, artisans, professions liberales ou restaurants qui veulent toucher des clients dans leur zone de chalandise. Le cout par resultat en local est souvent inferieur aux campagnes nationales.",
    },
    {
      q: "Quelle difference entre booster une publication et lancer une vraie campagne Meta Ads",
      a: "Booster une publication augmente sa portee mais ne permet pas de cibler finement, de tester des variantes ni de suivre les conversions. Le gestionnaire de publicites Meta offre des fonctionnalites avancees indispensables : A/B testing, audiences personnalisees, objectifs de conversion, et suivi du parcours post-clic. Advisia ne recommande jamais le simple boost.",
    },
    {
      q: "TikTok Ads vaut-il le coup pour une PME B2B en France",
      a: "En B2B, TikTok reste marginal par rapport a LinkedIn ou Meta. La plateforme excelle en notoriete et en formats video engageants, mais les mecaniques de conversion B2B (formulaire, prise de rendez-vous) sont moins matures. Pour une PME B2B, mieux vaut concentrer le budget sur LinkedIn Ads et Meta Ads avant de tester TikTok.",
    },
  ],
  internalLinks: [
    { href: "/services/marketing-digital", label: "notre approche marketing digital pour PME" },
    { href: "/services/marketing-digital/sea", label: "campagnes Google Ads complementaires aux Social Ads" },
    { href: "/services/marketing-digital/seo", label: "referencement naturel pour reduire la dependance a la publicite" },
    { href: "/diagnostics", label: "diagnostic digital complet avant de lancer vos campagnes" },
    { href: "/tarifs", label: "tarifs transparents de gestion Social Ads" },
    { href: "/offres/landing-page", label: "creation de landing pages optimisees pour la conversion" },
    { href: "/insights/social-ads-vs-sea-pme", label: "comparatif Social Ads vs SEA pour les PME" },
  ],
};

// ─── 4. GEO ───────────────────────────────────────────────────
export const seoSiloGeo: SeoSiloContent = {
  title: "Referencement IA : pourquoi votre PME doit agir maintenant",
  intro:
    "Advisia accompagne les PME francaises dans leur strategie GEO (Generative Engine Optimization) pour apparaitre dans les reponses de ChatGPT, Perplexity et Google AI Overviews. En 2026, 48 % des Francais utilisent deja l'IA generative pour chercher de l'information : chaque mois sans strategie GEO, ce sont des prospects qui choisissent vos concurrents sans jamais voir votre nom.",
  sections: [
    {
      h3: "Qu'est-ce que le GEO et pourquoi les PME francaises ne peuvent plus l'ignorer",
      paragraphs: [
        "Le GEO, ou Generative Engine Optimization, designe l'ensemble des techniques qui permettent a un contenu d'etre selectionne, cite et restitue dans les reponses des moteurs d'intelligence artificielle. Contrairement au SEO classique qui vise a positionner un lien dans une liste de resultats, le GEO vise a faire de votre entreprise la source que l'IA recommande directement a l'utilisateur. C'est un changement de paradigme : il ne s'agit plus d'obtenir un clic, mais d'etre la reponse.",
        "Selon le Barometre du numerique 2026 (Credoc/Arcep), 48 % des Francais ont deja utilise une IA generative, et 73 % d'entre eux s'en servent pour rechercher de l'information. Quand un dirigeant de PME demande a ChatGPT quelle agence peut l'aider sur un sujet precis, l'IA cite deux ou trois noms. Si le votre n'y figure pas, vous etes invisible pour ce prospect. Advisia integre le GEO dans chaque prestation de marketing digital pour que vos contenus alimentent ces nouveaux canaux d'acquisition.",
      ],
    },
    {
      h3: "Comment apparaitre dans ChatGPT et Perplexity quand on est une PME",
      paragraphs: [
        "Les moteurs IA ne fonctionnent pas comme Google. Ils synthetisent l'information de plusieurs sources et citent celles qu'ils jugent fiables, claires et structurees. Trois leviers concrets determinent si votre entreprise sera citee : la qualite et la structure de votre contenu (reponses directes, donnees chiffrees, definitions), les signaux de confiance E-E-A-T (expertise demontree, auteurs identifies, avis verifies) et le balisage technique (Schema.org, FAQPage, LocalBusiness).",
        "Chez Advisia, chaque accompagnement GEO commence par un diagnostic de visibilite IA : nous interrogeons ChatGPT, Perplexity, Gemini et Google AI Overviews sur les requetes strategiques de votre secteur pour mesurer si et comment votre marque est citee. Ce diagnostic donne une photographie factuelle de votre situation, pas un score marketing arbitraire.",
      ],
      bullets: [
        "Audit de visibilite sur 5 moteurs IA generatifs",
        "Restructuration des contenus en format answer-first",
        "Balisage Schema.org adapte a votre secteur d'activite",
        "Suivi mensuel des citations de votre marque par les IA",
      ],
    },
    {
      h3: "GEO et SEO : deux disciplines complementaires, pas concurrentes",
      paragraphs: [
        "Le referentiel AI Overviews de Google s'appuie encore largement sur les pages bien positionnees en SEO classique. Autrement dit, un bon referencement naturel reste le socle. Le GEO vient le completer en structurant vos contenus pour qu'ils soient compris, extraits et cites par les modeles de langage. Les PME qui combinent les deux disposent d'un avantage concurrentiel durable face a celles qui n'investissent que sur un seul canal.",
        "Advisia applique cette logique combinee sur chaque projet. Quand nous optimisons une page de service pour le SEO, nous integrons simultanement les bonnes pratiques GEO : paragraphes en reponse directe, definitions courtes citables, donnees structurees, et contenus conversationnels alignes sur les questions reelles que vos prospects posent aux IA. Pas de prestation en silo, pas de double facturation.",
      ],
    },
    {
      h3: "Strategie de contenu IA pour les secteurs B2B, commerce local et e-commerce",
      paragraphs: [
        "Chaque secteur genere des requetes specifiques aupres des moteurs IA. Un commerce local doit apparaitre quand un utilisateur demande le meilleur prestataire dans sa ville. Un industriel B2B doit etre cite quand un acheteur demande a Perplexity de comparer des fournisseurs. Un e-commercant doit figurer dans les recommandations produits generees par ChatGPT Search. La strategie de contenu IA se calibre en fonction de ces intentions, pas avec une methode unique appliquee a tous.",
        "Advisia travaille avec des PME de 5 a 200 salaries dans des secteurs aussi varies que le commerce local, les services B2B, la sante, le tourisme, la logistique et l'e-commerce. Cette diversite nous permet d'identifier les formats de contenu qui fonctionnent reellement pour chaque typologie de recherche IA, qu'il s'agisse de fiches FAQ detaillees, de guides comparatifs ou de pages de service structurees en question-reponse.",
      ],
    },
    {
      h3: "Des resultats mesurables avec un budget de PME, pas de grande entreprise",
      paragraphs: [
        "Le marche des agences GEO en France se structure rapidement, avec des tarifs qui vont de 350 euros par mois pour un suivi basique a plus de 5 000 euros par mois pour un accompagnement premium. Advisia se positionne entre ces extremes avec des tarifs affiches publiquement, sans devis opaque. Chaque euro investi est trace : nombre de citations IA, requetes couvertes, evolution mois par mois.",
        "Notre methode suit un cycle court : audit de visibilite IA en premiere semaine, plan d'action priorise avec estimation d'impact, livraison en sprints, puis suivi hebdomadaire. Pas d'engagement longue duree : vous restez parce que les resultats sont la, pas parce qu'un contrat vous bloque. Les deux fondateurs d'Advisia conseillent et livrent directement, sans intermediaire ni sous-traitance.",
      ],
      bullets: [
        "Tarifs publics et transparents sur advisia.agency",
        "Contrats mensuels sans engagement minimum",
        "Reporting hebdomadaire avec KPI de visibilite IA",
        "Zero sous-traitance : vos interlocuteurs sont les experts",
      ],
    },
  ],
  faq: [
    {
      q: "Combien de temps faut-il pour apparaitre dans les reponses de ChatGPT quand on est une PME",
      a: "Les premiers resultats sont generalement visibles en 4 a 8 semaines. ChatGPT avec navigation web et Perplexity indexent les contenus optimises plus rapidement que les modeles de langage entraines periodiquement. L'impact depend de la qualite initiale du site, de la concurrence sectorielle et du volume de contenu structure deploye. Un suivi mensuel permet d'ajuster la strategie en continu.",
    },
    {
      q: "Quelle est la difference entre le GEO et le SEO pour une PME francaise",
      a: "Le SEO optimise la position d'une page dans les resultats de recherche Google. Le GEO optimise un contenu pour qu'il soit cite directement dans les reponses des moteurs IA comme ChatGPT, Perplexity ou Gemini. Les deux disciplines partagent des fondamentaux communs (contenu de qualite, structure technique, signaux de confiance) mais le GEO ajoute des exigences specifiques : format question-reponse, definitions citables, balisage Schema.org avance et coherence des informations sur l'ensemble du web.",
    },
    {
      q: "Le GEO est-il reserve aux grandes entreprises ou accessible aux PME de 10 a 50 salaries",
      a: "Le GEO est particulierement adapte aux PME. Les moteurs IA privilegient la qualite du contenu et l'expertise demontree, pas la taille de l'entreprise. Une PME avec un contenu expert, structure et bien balise peut etre citee devant un grand groupe dont le site est generique. L'investissement de depart est comparable a un accompagnement SEO classique, avec un retour mesurable des les premiers mois.",
    },
    {
      q: "Comment savoir si mon entreprise est deja citee par les IA generatives",
      a: "La methode la plus directe consiste a interroger ChatGPT, Perplexity et Gemini avec les requetes que vos prospects utilisent. Par exemple : quel prestataire choisir pour tel service dans telle zone. Si votre nom n'apparait pas, c'est un signal clair. Des outils specialises comme Otterly.ai ou le suivi des referents chatgpt.com dans Google Analytics permettent d'automatiser ce monitoring.",
    },
    {
      q: "Faut-il refaire tout son site web pour mettre en place une strategie GEO",
      a: "Non. Une strategie GEO efficace s'appuie sur l'existant. L'essentiel porte sur la restructuration des contenus cles (pages de services, FAQ, articles piliers) en format answer-first, l'ajout de balisage Schema.org et l'optimisation des signaux de confiance. Sur un site Next.js, WordPress ou PrestaShop, les modifications techniques sont integrees progressivement sans refonte globale.",
    },
    {
      q: "Quel budget prevoir pour une strategie GEO adaptee a une PME en France",
      a: "Un audit de visibilite IA demarre a quelques centaines d'euros. Un accompagnement mensuel complet incluant audit, optimisation de contenus, balisage technique et suivi des citations se situe generalement entre 500 et 2 000 euros par mois selon l'ambition et le secteur. Advisia affiche ses tarifs publiquement et propose des contrats mensuels sans engagement pour limiter le risque.",
    },
    {
      q: "Les moteurs IA vont-ils remplacer Google pour la recherche en ligne",
      a: "Google reste dominant mais la tendance est claire : 60 % des recherches se terminent deja sans clic vers un site, et les AI Overviews de Google integrent eux-memes des reponses generatives. Les moteurs IA ne remplacent pas Google, ils captent une part croissante des recherches informationnelles. Ignorer ce canal revient a accepter de perdre progressivement des prospects au profit de concurrents qui y sont presents.",
    },
    {
      q: "Comment Advisia mesure les resultats d'une strategie de referencement IA",
      a: "Advisia suit quatre indicateurs principaux : le nombre de citations de votre marque dans les reponses IA, les requetes sur lesquelles vous apparaissez, l'evolution du trafic referent depuis chatgpt.com et perplexity.ai visible dans vos analytics, et l'impact sur les demandes entrantes. Un reporting hebdomadaire vous donne une visibilite complete sur la progression.",
    },
  ],
  internalLinks: [
    { href: "/services/marketing-digital/seo", label: "notre accompagnement SEO pour PME" },
    { href: "/services/marketing-digital/sea", label: "campagnes Google Ads complementaires" },
    { href: "/diagnostics", label: "diagnostic digital complet de votre entreprise" },
    { href: "/tarifs", label: "consultez nos tarifs publics" },
    { href: "/insights/geo-strategie-contenu-pme", label: "notre guide sur la strategie de contenu IA pour PME" },
    { href: "/prendre-rendez-vous", label: "prendre rendez-vous pour un audit GEO" },
    { href: "/services/automatisations-ia", label: "nos solutions d'automatisation IA pour PME" },
  ],
};

// ─── 5. DIAGNOSTICS ───────────────────────────────────────────
export const seoSiloDiagnostics: SeoSiloContent = {
  title: "Diagnostic digital PME : pourquoi choisir Advisia",
  intro:
    "Advisia accompagne les PME francaises de 5 a 200 salaries dans leurs diagnostics numeriques : audit SEO, audit securite, audit e-reputation et audit de maturite IA. En 2025, 36 % des TPE-PME ont deja subi un incident de cybersecurite (Barometre France Num 2025) et seules 26 % utilisent l'IA — la majorite ne sait pas par ou commencer.",
  sections: [
    {
      h3: "Qu'est-ce qu'un diagnostic digital pour une PME et pourquoi le faire maintenant",
      paragraphs: [
        "Un diagnostic digital est une evaluation structuree de la maturite numerique d'une entreprise. Il couvre plusieurs axes : visibilite en ligne (SEO, reseaux sociaux, fiche Google Business), outils de gestion (CRM, ERP, facturation), cybersecurite, reputation en ligne et capacite a integrer l'intelligence artificielle dans les processus metier. Le diagnostic produit un etat des lieux chiffre, pas une liste de voeux pieux.",
        "Le contexte l'exige : la facturation electronique devient obligatoire pour les PME en septembre 2027, les cyberattaques touchent deja plus d'un tiers des petites structures francaises, et l'adoption de l'IA a double en un an. Attendre, c'est accumuler du retard operationnel face a des concurrents qui investissent. Advisia propose quatre diagnostics cibles — visibilite, securite, e-reputation, maturite IA — avec des prix affiches et un livrable exploitable des la restitution.",
      ],
      bullets: [
        "Livrable actionnable sous 10 jours ouvrables",
        "Prix fixes publies sur le site, sans surprise",
        "Audit mene par un fondateur, pas un stagiaire",
        "Plan d'action priorise par impact et budget",
      ],
    },
    {
      h3: "Audit SEO PME : evaluer sa visibilite avant d'investir en publicite",
      paragraphs: [
        "84 % des PME francaises declarent avoir une presence en ligne, mais la majorite ne sait pas si cette presence genere du chiffre d'affaires. Un audit de visibilite mesure le positionnement reel sur Google, la qualite technique du site (temps de chargement, balisage, maillage interne), la pertinence du contenu par rapport aux requetes de ses clients, et le niveau de reference local via Google Business Profile.",
        "Advisia utilise des outils professionnels (Semrush, Screaming Frog, Search Console) couples a une analyse strategique du secteur. Le rapport inclut un scoring par categorie, des correctifs techniques classes par priorite, et une estimation du trafic potentiel a capter. Pour une PME B2B ou un commerce local, cet audit SEO represente souvent le premier levier de croissance digitale a faible cout.",
      ],
    },
    {
      h3: "Audit de securite et cybersecurite : proteger l'entreprise avant l'incident",
      paragraphs: [
        "Le cout median d'une cyberattaque sur une PME europeenne se situe entre 150 000 et 350 000 euros selon le rapport IBM Cost of a Data Breach 2024. Pourtant, beaucoup de dirigeants de PME francaises n'ont jamais fait auditer leur securite informatique. L'audit de securite evalue trois dimensions : technique (infrastructure, mots de passe, sauvegardes, mises a jour), organisationnelle (droits d'acces, procedures, conformite RGPD) et humaine (sensibilisation des equipes au phishing).",
        "Advisia cible les failles critiques en priorite : absence de MFA, sauvegardes jamais testees, logiciels obsoletes, donnees clients non chiffrees. Le livrable distingue les correctifs urgents realisables en 48 heures des chantiers a planifier sur 3 a 6 mois. Ce diagnostic est particulierement pertinent pour les PME des secteurs sante, industrie et e-commerce ou les donnees sensibles sont un risque juridique autant que financier.",
      ],
    },
    {
      h3: "Audit e-reputation entreprise : transformer les avis Google en levier commercial",
      paragraphs: [
        "L'e-reputation designe l'image qu'une entreprise projette sur internet a travers les avis clients, les mentions sur les reseaux sociaux et les resultats de recherche Google. Pour une PME locale, une note Google inferieure a 4 sur 5 peut faire chuter le nombre de contacts entrants de facon significative. A l'inverse, un commerce avec une note de 4,5 genere en moyenne pres de cinq fois plus de prospects qu'un concurrent note 3,5.",
        "L'audit e-reputation d'Advisia cartographie les avis existants sur Google, les reseaux sociaux et les annuaires sectoriels. Il identifie les commentaires problematiques, mesure le taux de reponse aux avis et propose un plan d'action pour systematiser la collecte d'avis positifs. Pour les PME en phase de cession ou de recherche de financement, une e-reputation maitrisee peut justifier une meilleure valorisation.",
      ],
    },
    {
      h3: "Audit maturite IA : identifier les automatisations rentables sans effet de mode",
      paragraphs: [
        "L'audit de maturite IA est un diagnostic qui evalue la capacite d'une PME a integrer l'intelligence artificielle dans ses processus existants. Il ne s'agit pas de deployer un chatbot pour faire tendance, mais d'identifier les taches repetitives et les goulets d'etranglement ou l'IA produit un retour mesurable : saisie de donnees, tri de leads, relance client, generation de documents, analyse de stocks.",
        "Advisia structure ce diagnostic en trois temps : cartographie des flux operationnels, identification des cas d'usage a fort impact et chiffrage du ROI attendu pour chaque scenario. Le livrable final est une feuille de route priorisee sur 3, 6 et 12 mois. L'agence ne vend pas de la technologie pour la technologie : si le diagnostic revele que l'automatisation n'est pas prioritaire, Advisia le dit. C'est aussi ca, le conseil independant.",
      ],
    },
  ],
  faq: [
    {
      q: "Combien coute un diagnostic digital pour une PME en France",
      a: "Les prix varient selon le perimetre. Chez Advisia, les diagnostics unitaires (visibilite, securite, e-reputation) sont a prix fixe, affiches publiquement sur la page tarifs. Un audit complet combinant plusieurs volets est propose sous forme de pack avec un tarif degressif. Aucun cout cache, aucun engagement longue duree.",
    },
    {
      q: "Quelle est la difference entre un diagnostic numerique gratuit et un audit professionnel",
      a: "Les diagnostics gratuits en ligne (France Num, MEDEF, BPI) produisent un premier score indicatif base sur un questionnaire generique. Un audit professionnel implique une analyse technique reelle de vos outils, de votre site et de vos processus par un consultant senior. Le livrable est un plan d'action chiffre et priorise, pas un PDF de recommandations generales.",
    },
    {
      q: "Peut-on faire un audit digital a distance pour une PME en region",
      a: "Oui. Advisia est basee dans les Hautes-Pyrenees mais realise 90 % de ses diagnostics en visio et via des outils d'analyse a distance. L'audit technique d'un site web, l'analyse des avis Google ou le scan de securite ne necessitent pas de presence physique. Seuls certains audits d'infrastructure IT peuvent justifier un deplacement ponctuel.",
    },
    {
      q: "Comment savoir si ma PME a besoin d'un audit de cybersecurite",
      a: "Si votre entreprise n'a jamais realise d'audit de securite, la reponse est oui. En 2025, 36 % des TPE-PME francaises declarent avoir subi un incident de cybersecurite. Les signaux d'alerte concrets : mots de passe partages entre collaborateurs, absence d'authentification multifacteur, sauvegardes jamais testees, ou logiciels non mis a jour depuis plus de six mois.",
    },
    {
      q: "Un audit SEO est-il utile pour une PME qui travaille uniquement en local",
      a: "Le SEO local est specifiquement concu pour les entreprises qui servent une zone geographique definie. L'audit verifie l'optimisation de votre fiche Google Business Profile, la coherence de vos citations locales (nom, adresse, telephone) sur les annuaires, et le positionnement sur les requetes geolocalisees de vos clients. Pour un commerce ou un prestataire local, c'est souvent le premier levier d'acquisition a activer.",
    },
    {
      q: "Comment un audit e-reputation peut aider avant une cession d'entreprise",
      a: "Un repreneur potentiel examine systematiquement la presence en ligne de l'entreprise cible. Une note Google basse, des avis sans reponse ou des mentions negatives non traitees deprecient la valeur percue. L'audit e-reputation identifie ces failles et propose un plan de correction qui peut se deployer en 3 a 6 mois avant la mise en vente.",
    },
    {
      q: "Que contient le livrable d'un diagnostic digital Advisia",
      a: "Chaque diagnostic produit un rapport structure comprenant un scoring par axe, une synthese des points critiques, des recommandations classees par priorite (urgent, court terme, moyen terme), une estimation budgetaire pour chaque correctif, et un plan d'action sur 90 jours. Le rapport est presente en visio avec les fondateurs, pas envoye par email sans explication.",
    },
    {
      q: "L'audit de maturite IA est-il adapte a une PME qui n'utilise aucun outil IA",
      a: "C'est precisement le cas d'usage principal. L'audit part de vos processus metier existants, pas de la technologie. Il identifie les taches ou l'IA apporte un gain mesurable et elimine les fausses bonnes idees. Une PME sans culture data peut demarrer par des cas simples — generation de contenu, tri automatique d'emails, relance de devis — avant de monter en complexite.",
    },
  ],
  internalLinks: [
    { href: "/diagnostics", label: "Tous les diagnostics digitaux Advisia" },
    { href: "/offres/audit-visibilite", label: "Audit de visibilite et SEO pour PME" },
    { href: "/offres/audit-securite", label: "Audit de securite informatique PME" },
    { href: "/offres/audit-e-reputation", label: "Audit e-reputation et avis Google" },
    { href: "/offres/pack-audit-general", label: "Pack audit digital complet" },
    { href: "/tarifs", label: "Tarifs et grille de prix Advisia" },
    { href: "/cession-reprise", label: "Audit numerique avant cession ou reprise" },
  ],
};

// ─── 6. CESSION-REPRISE ───────────────────────────────────────
export const seoSiloCessionReprise: SeoSiloContent = {
  title: "Valorisation digitale et cession-reprise de PME : ce que change Advisia",
  intro:
    "55 000 transmissions de PME françaises sont prévues en 2024, portées par le départ en retraite des baby-boomers et la consolidation sectorielle (Bpifrance Transmission, 2024). Advisia est l'un des rares acteurs à chiffrer concrètement l'impact de la maturité digitale sur la valorisation d'une entreprise, avec un rapport opposable utilisable directement en négociation.",
  sections: [
    {
      h3: "Pourquoi la maturité digitale est devenue un critère de valorisation incontournable ?",
      paragraphs: [
        "La due diligence numérique désigne l'audit approfondi des systèmes d'information, des processus digitaux et des outils d'une entreprise réalisé avant une cession ou une acquisition. En 2024-2025, les repreneurs et leurs conseils intègrent systématiquement ce volet dans leurs analyses. Une PME incapable de produire des données fiables, sans CRM structuré ni processus documentés, voit son risque perçu augmenter et son multiple de valorisation se dégrader.",
        "Le baromètre France Num 2024 confirme que les PME françaises numériquement matures enregistrent une hausse de 10 à 15 % de leur chiffre d'affaires par rapport à leurs concurrentes moins avancées. Cette différence de performance se lit directement dans les multiples appliqués lors d'une cession. Selon nos observations terrain, une PME qui documente sa maturité digitale et démontre des process automatisés obtient un prix de cession supérieur de 5 à 20 % à une entreprise identique qui ne le fait pas.",
      ],
      bullets: [
        "Données fiables et extractibles = due diligence raccourcie et risque réduit pour l'acquéreur",
        "Processus automatisés = continuité garantie sans dépendance au dirigeant sortant",
        "CRM structuré = portefeuille clients valorisable et traçable",
        "Sécurité numérique documentée = absence de passif caché post-acquisition",
        "Présence en ligne solide = actif immatériel reconnu dans la valorisation",
      ],
    },
    {
      h3: "Quel est l'impact chiffré de la transformation digitale sur le prix de cession d'une PME ?",
      paragraphs: [
        "L'audit de maturité digitale avant cession est une démarche qui évalue cinq axes : les processus métiers, les outils et systèmes d'information, la relation client digitale, la sécurité des données et la capacité à produire des indicateurs de pilotage. Sur chacun de ces axes, Advisia produit un scoring documenté, avec des recommandations priorisées et une estimation chiffrée de l'impact sur la valorisation.",
        "Dans le secteur du numérique et des TIC, qui figure parmi les secteurs les plus dynamiques de la cession-reprise d'entreprise en France en 2024 (Bpifrance Transmission), la maturité digitale peut représenter jusqu'à 30 % du multiple de valorisation. Dans le commerce, l'industrie et les services B2B, l'écart entre une PME mature et une PME en retard numérique se situe en pratique entre 5 et 20 % sur le prix de cession final.",
      ],
    },
    {
      h3: "Cédant : comment valoriser votre entreprise avant la mise sur le marché ?",
      paragraphs: [
        "La valorisation digitale avant cession passe par trois leviers concrets. D'abord, la documentation des process : chaque processus clé doit fonctionner sans vous. Un acquéreur paie plus cher une entreprise dont les opérations tournent indépendamment du fondateur. Ensuite, la structuration des données clients et commerciales dans un CRM : un portefeuille clients traçable et segmenté est un actif valorisable. Enfin, la mise en conformité cybersécurité : une faille non détectée identifiée en due diligence peut justifier une décote immédiate ou une clause de garantie d'actif et passif pénalisante.",
        "Advisia intervient idéalement 6 à 18 mois avant la mise en vente, pour identifier les quick wins de valorisation et les implémenter. Le rapport livré est structuré pour être présenté directement à un acquéreur ou à un conseil en acquisition : scoring sur 5 axes, liste des actions réalisées, impact estimé sur le prix.",
      ],
      bullets: [
        "Documentation des processus clés pour supprimer la dépendance au dirigeant",
        "Structuration CRM et historique commercial formalisé",
        "Mise en conformité RGPD et cybersécurité documentée",
        "Automatisation des tâches administratives récurrentes",
        "Production d'indicateurs de pilotage fiables et extractibles",
      ],
    },
    {
      h3: "Repreneur : comment évaluer l'état digital réel d'une PME avant signature ?",
      paragraphs: [
        "La reprise d'entreprise en France atteint 55 000 transactions prévues en 2024, avec une hausse de 10 % par rapport à 2023. Dans ce contexte de marché actif, les repreneurs qui réalisent un audit numérique pré-acquisition disposent d'un levier de négociation concret. Chaque lacune digitale identifiée avant signature peut justifier une réduction du prix ou une clause d'ajustement.",
        "L'audit pré-acquisition réalisé par Advisia couvre les mêmes cinq axes que l'audit cédant, mais avec un angle différent : il s'agit d'évaluer le coût réel de la transformation digitale post-reprise et de l'intégrer dans la négociation. Une PME avec un SI vieillissant, sans automatisation et sans données structurées représente un investissement de mise à niveau qui doit être reflété dans le prix payé. On chiffre cet investissement et on le documente.",
      ],
    },
    {
      h3: "Pourquoi travailler avec Advisia sur votre projet de cession ou reprise ?",
      paragraphs: [
        "La plupart des acteurs de la transmission d'entreprise en France abordent la dimension numérique de façon superficielle. Les experts-comptables et avocats d'affaires évaluent les actifs financiers, juridiques et humains, mais la due diligence digitale reste souvent absente ou limitée à un questionnaire générique. Advisia comble ce manque avec une méthodologie structurée sur 5 axes, un scoring documenté et un rapport livrable en 48 à 72 heures.",
        "Basés en France, nous travaillons avec des PME de 5 à 200 salariés dans tous les secteurs : commerce local, services B2B, santé, industrie, tourisme, logistique, e-commerce. Notre double compétence technique et stratégique permet de produire un rapport compréhensible par un dirigeant non-technique et opposable à un acquéreur ou à son conseil. Le prix est fixe, sans engagement, avec un premier échange gratuit de 30 minutes.",
      ],
      bullets: [
        "Rapport opposable livré en 48-72h, prix fixe à 990 euros",
        "Scoring sur 5 axes avec impact chiffré sur la valorisation",
        "Premiers échanges gratuits, sans engagement",
        "Intervention possible partout en France en remote",
        "Double expertise technique et stratégique sur un seul interlocuteur",
      ],
    },
  ],
  faq: [
    {
      q: "Combien de temps avant une cession faut-il réaliser un audit digital ?",
      a: "Idéalement 6 à 18 mois avant la mise sur le marché. Ce délai permet d'implémenter les quick wins identifiés et de les documenter avant la due diligence. Un audit réalisé trop tard n'améliore pas la valorisation, il la justifie seulement.",
    },
    {
      q: "Est-ce qu'un audit de maturité digitale est obligatoire pour vendre une PME ?",
      a: "Non, il n'est pas obligatoire. Mais les acquéreurs sérieux et leurs conseils réalisent systématiquement une due diligence numérique. Sans rapport préparé en amont, le cédant subit l'analyse de l'acheteur sans pouvoir la contrebalancer. L'audit Advisia vous met en position de force dans la négociation.",
    },
    {
      q: "Quel est le coût moyen d'une remise à niveau digitale après reprise d'une PME ?",
      a: "Entre 5 000 et 50 000 euros selon l'état du système d'information et le périmètre de transformation. Identifier ce coût avant signature permet de le négocier dans le prix ou de prévoir un ajustement post-closing. C'est l'objet de l'audit pré-acquisition Advisia.",
    },
    {
      q: "La maturité digitale impacte-t-elle vraiment le multiple de valorisation ?",
      a: "Oui. Les équipes d'audit identifient rapidement les failles digitales qui augmentent le risque perçu et la charge de transition post-reprise. Une PME avec des processus documentés, un CRM structuré et des données fiables réduit ce risque et justifie un multiple plus élevé. L'écart observé est de 5 à 20 % selon le secteur.",
    },
    {
      q: "Qu'est-ce que la due diligence numérique dans une cession d'entreprise ?",
      a: "La due diligence numérique désigne l'audit des systèmes d'information, outils et processus digitaux d'une entreprise réalisé par l'acquéreur avant signature. Elle couvre la sécurité des données, la qualité du SI, l'automatisation des processus et la dépendance au dirigeant. Les lacunes identifiées peuvent entraîner une décote ou des clauses de garantie.",
    },
    {
      q: "Est-ce qu'Advisia intervient aussi après la reprise pour moderniser la PME acquise ?",
      a: "Oui. Après la signature, nous proposons des packs de transformation post-reprise : automatisation des processus clés, structuration du CRM, déploiement d'un dashboard de pilotage, formation des équipes. Le délai de première livraison est de 2 à 3 semaines.",
    },
    {
      q: "Combien de PME françaises sont en cours de transmission en 2024 ?",
      a: "55 000 transmissions d'entreprises sont prévues en France en 2024, soit une hausse de 10 % par rapport à 2023, portée principalement par le départ en retraite des baby-boomers (Bpifrance Transmission, 2024). Cette vague de transmission devrait s'accentuer jusqu'en 2032.",
    },
    {
      q: "Peut-on réaliser un audit digital d'une PME en dehors de sa région ?",
      a: "Oui. Advisia travaille partout en France en remote et visio. L'audit est réalisé en combinant un questionnaire structuré, des accès aux outils existants et des entretiens avec le dirigeant. Aucun déplacement n'est nécessaire pour obtenir un rapport complet et opposable.",
    },
  ],
  internalLinks: [
    { href: "/offres/audit-cession-reprise", label: "audit de maturité digitale avant cession" },
    { href: "/offres/pack-valorisation-cession", label: "pack valorisation pour les cédants" },
    { href: "/offres/pack-transformation-post-reprise", label: "transformation digitale post-reprise" },
    { href: "/offres/pack-transformation-ia-metier", label: "intégration IA métier après acquisition" },
    { href: "/diagnostics", label: "nos diagnostics digitaux pour PME" },
    { href: "/services/automatisations-ia", label: "automatisation des processus après reprise" },
    { href: "/prendre-rendez-vous", label: "premier échange gratuit de 30 minutes" },
  ],
};
