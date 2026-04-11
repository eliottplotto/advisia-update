# TOPO SEO — SITE ADVISIA.AGENCY
## État au 11 avril 2026

---

## CONTEXTE

Advisia est une agence IA et automatisation pour PME françaises (10-200 salariés).
Fondée par Eliott (tech/business) et Julien (tech/IA).
Site Next.js 15, Tailwind CSS, hébergé sur Vercel.
Contenu dynamique (articles, projets) via Sanity CMS.
Domaine : advisia.agency

---

## ARCHITECTURE DU SITE — 15 PAGES

### Pages principales
1. `/` — Homepage (agence IA & automatisation pour PME)
2. `/services/automatisations-ia` — IA & Automatisation
3. `/services/agence-web` — Développement Web
4. `/services/product-design` — Design d'Interface et UX
5. `/services/marketing-digital` — Marketing Digital
6. `/diagnostics` — Diagnostics & Audits (5 diagnostics + 2 packs)
7. `/cession-reprise` — Valorisation digitale cession & reprise
8. `/accompagnement` — Formation IA + Partenariat mensuel
9. `/tarifs` — Tous les prix (accordéon filtrable par catégorie)
10. `/agence` — À propos (équipe, manifeste, méthode)
11. `/projets` — Réalisations (3 projets : LCT, Mes Halles, Bring)
12. `/contact` — Formulaire contact (pré-rempli selon ?besoin=)
13. `/prendre-rendez-vous` — Prise de RDV (Cal.com intégré)
14. `/insights` — Blog/articles (Sanity CMS, ~3 articles)
15. `/resultat` — Page résultat quiz personnalisée

### Pages secondaires
- `/mentions-legales`
- `/politique-de-confidentialite`
- `/not-found` (404 personnalisée)

---

## ÉTAT SEO PAR PAGE

### Homepage (/)
- Title : "Agence IA & Automatisation pour PME | Advisia"
- Description : 153 chars ✓
- Canonical : ❌ NON DÉFINI
- Schema JSON-LD : ❌ AUCUN
- H1 : Dans animation (pas de H1 texte standard)
- Keywords : agence IA automatisation PME, agence digitale PME, agence tech PME France
- Liens sortants : via composants (services, projets, contact)
- Problème : H1 masqué par animation, pas de canonical, pas de schema

### /services/automatisations-ia
- Title : "Agents IA & Automatisation pour PME | Agence Advisia"
- Description : 140 chars ✓
- Canonical : ✓
- Schema : ❌ AUCUN
- H1 : "Vos équipes perdent 10h par semaine sur des tâches que l'IA peut faire."
- Keywords : agent IA entreprise PME, automatisation process IA, chatbot entreprise IA
- Liens sortants : /contact, /diagnostics, /tarifs?category=ia

### /services/agence-web
- Title : "Création de Site Web Professionnel · Agence Advisia"
- Description : 147 chars ✓
- Canonical : ✓
- Schema : ❌ AUCUN
- H1 : "Des sites qui chargent en moins d'une seconde. Et qui convertissent."
- Keywords : création site web professionnel, développeur web PME
- Liens sortants : /contact, /diagnostics, /tarifs?category=web

### /services/product-design
- Title : "Design d'Interface et UX · Agence Advisia"
- Description : 155 chars ✓
- Canonical : ✓
- Schema : ❌ AUCUN
- H1 : "Des interfaces que vos utilisateurs comprennent. Du premier clic."
- Keywords : agence design interface UX UI, maquettes Figma agence

### /services/marketing-digital
- Title : non vérifié (page existante, peu mise en avant)
- Schema : ❌ AUCUN

### /diagnostics
- Title : "Diagnostics et Audits pour PME | Advisia"
- Description : 159 chars ✓
- Canonical : ✓
- Schema : ✓ Service + BreadcrumbList + FAQPage (3 questions)
- H1 : "Avant de construire, on analyse."
- 5 diagnostics : Digital & IA (490€), Sécurité (490€), Visibilité (490€), E-réputation (990€), Cession (990€)
- 2 packs : Audit Général (1990€), Audit + Correction (3490€)

### /cession-reprise
- Title : "Valorisation Digitale — Cession et Reprise d'Entreprise | Advisia"
- Description : 163 chars ✓
- Canonical : ✓
- Schema : ✓ Service + FAQPage (5 questions)
- H1 : "Votre entreprise vaut plus si elle est numériquement mature."
- 3 packs : Express (3500-6000€), Transformation (8000-15000€), IA Métier (18000-35000€)

### /accompagnement
- Title : "Formation IA et Partenariat Mensuel | Advisia"
- Description : 156 chars ✓
- Canonical : ✓
- Schema : ✓ Service + FAQPage (5 questions)
- Formations : Workshop Dirigeants (490€), Équipes (990-2500€)
- Partenariat : Essentiel (490€/mois), Business (990€/mois), Stratégique (1990€/mois)

### /tarifs
- Title : "Tarifs et Offres Advisia"
- Description : 145 chars ✓
- Canonical : ✓
- Schema : ✓ Service + BreadcrumbList + FAQPage
- 6 catégories : Diagnostics, IA & Auto, Web, Formation, Partenariat, Cession
- ~25 offres avec prix affichés
- Deep links : ?category=web&offre=site-vitrine ouvre directement la bonne offre

### /agence
- Title : "À propos d'Advisia | Agence IA pour PME"
- Description : 159 chars ✓
- Canonical : ✓
- Schema : ❌ AUCUN
- H1 : dans composant hero (non standard)
- Sections : équipe, manifeste, engagement, méthode de travail (5 étapes)
- AUCUN lien interne sortant

### /projets
- Title : "Nos réalisations et études de cas | Advisia"
- Description : 137 chars ✓
- Canonical : ✓
- Schema : ❌ AUCUN
- 3 projets (Sanity CMS) : Bring, Mes Halles, LCT Investissements
- Contenu dynamique, peu de H2 structurés

### /contact
- Title : "Contacter Advisia · Agence IA & Web"
- Description : 157 chars ✓
- Canonical : ✓
- Formulaire : prénom, nom, entreprise, email, message
- Pré-rempli via ?besoin= (badge contextuel avec nom de l'offre + prix)

### /insights
- Title : "Insights IA — Guides, veille et études de cas · Advisia"
- Canonical : ✓
- ~3 articles Sanity CMS
- Retiré du menu principal (peu de contenu)

### /resultat
- Page dynamique côté client (quiz)
- Canonical : ✓
- OpenGraph : ❌ NON CONFIGURÉ
- Contenu invisible pour les bots (client-side rendering)

---

## CONFIGURATION TECHNIQUE

### Robots.txt
```
User-Agent: *
Allow: /
Disallow: /api/, /_next/
Sitemap: https://advisia.agency/sitemap.xml
```

### Sitemap
- Dynamique (Next.js)
- 13 pages statiques + projets et insights dynamiques
- Priorités : homepage 1.0, services 0.8, projets 0.7
- Fréquences : homepage weekly, services monthly

### Redirects
- 1 redirect permanent : /insights/5-tches-que-lia → /insights/5-taches-que-lia

### Schema.org JSON-LD
- ✓ Présent : /diagnostics, /tarifs, /cession-reprise, /accompagnement
- ❌ Absent : homepage, 4 pages service, /agence, /projets, /contact

### Canonical URLs
- ✓ Défini : 13/15 pages
- ❌ Manquant : / (homepage)

---

## MAILLAGE INTERNE

### Pages bien maillées
- /contact : liée depuis presque toutes les pages
- /tarifs : liée depuis accompagnement + 3 pages service
- /diagnostics : liée depuis 3 pages service

### Pages orphelines ou faiblement maillées
- /agence : AUCUN lien sortant, peu de liens entrants
- /projets : 1 seul lien entrant (depuis /product-design)
- /insights : AUCUN lien entrant (retiré du menu)
- /accompagnement : peu de liens entrants directs
- /cession-reprise : peu de liens entrants

---

## FONCTIONNALITÉS CONVERSION

### Quiz interactif
- Bouton flottant "Par où commencer" sur tout le site
- 2 étapes : besoin → détail → recommandation personnalisée
- 22 combinaisons de résultats
- Redirige vers /resultat?q=... avec page personnalisée
- Formulaire enrichi (email, entreprise, taille, précisions)

### Formulaire contact intelligent
- Pré-remplissage via ?besoin= depuis toutes les pages
- Badge contextuel avec nom de l'offre + prix
- Envoi via Brevo (email à hello@advisia.agency)

### Deep links tarifs
- /tarifs?category=web&offre=site-vitrine ouvre directement la catégorie + l'offre

### Témoignages
- 3 vrais clients : LCT Investissements, Mes Halles, Bring
- Témoignages anonymisés sur chaque page service
- Composant réutilisable PageTestimonial

---

## POINTS FORTS SEO ACTUELS
1. Meta descriptions bien optimisées (120-160 chars) sur 14/15 pages
2. Canonical URLs sur 13/15 pages
3. Schema.org sur 4 pages clés (diagnostics, tarifs, cession, accompagnement)
4. Sitemap dynamique avec priorités
5. Robots.txt propre
6. OpenGraph sur 13/15 pages
7. Structure d'URL propre et sémantique
8. Contenu riche et ciblé sur chaque page

## FAIBLESSES SEO À CORRIGER
1. Homepage sans canonical ni schema
2. 4 pages service sans schema JSON-LD
3. H1 masqués par animations sur homepage et /agence
4. Maillage interne faible (/agence, /projets, /insights orphelines)
5. /insights quasi vide (3 articles seulement)
6. /projets sans cas clients détaillés (contenu Sanity à enrichir)
7. Pas d'og:image défini sur aucune page
8. Page /resultat invisible pour les bots (rendu client-side)
9. Pas de blog strategy (contenu régulier)
10. Pas de données structurées LocalBusiness complètes (manque adresse, téléphone)

---

## OPPORTUNITÉS DE MOTS-CLÉS NON EXPLOITÉES
- "automatisation facturation PME"
- "audit digital avant cession entreprise"
- "combien coûte un site web professionnel"
- "agent IA service client PME"
- "automatiser relances commerciales"
- "audit sécurité site web PME"
- "formation IA dirigeant PME"
- "agence web tarifs transparents"
- "valorisation digitale entreprise transmission"
- "CTO externalisé PME"

---

## CE QUI A ÉTÉ FAIT RÉCEMMENT
- Création de 4 nouvelles pages (/diagnostics, /cession-reprise, /accompagnement, /tarifs)
- Quiz interactif avec 22 résultats personnalisés
- Page /resultat avec formulaire enrichi
- Formulaire contact avec pré-remplissage intelligent
- Animations hero signature par page service
- Témoignages (vrais + anonymisés) sur toutes les pages
- Deep links tarifs avec offre pré-ouverte
- Restructuration menu (dropdown "Nos expertises")
- Schema.org sur 4 pages
- Refonte wording (suppression jargon tech)
- Section "C'est pour vous si" sur page IA
- Section "Comment on travaille avec vous" sur /agence

---

## POUR LE PLAN SEO — QUESTIONS À TRAITER
1. Quelle fréquence de publication blog est réaliste ?
2. Quels mots-clés longue traîne cibler en priorité ?
3. Faut-il créer des pages dédiées par secteur (immobilier, e-commerce, etc.) ?
4. Comment améliorer le maillage interne sans surcharger ?
5. Faut-il investir dans des backlinks ? Si oui, quelle stratégie ?
6. Google Ads en complément SEO organique ?
7. Stratégie GEO (référencement IA) ?
