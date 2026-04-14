# Import articles Sanity

4 articles prêts à importer dans Sanity (catégorie **Guide pratique**, auteur **Eliott**) :

| Slug                          | Titre                                                                 |
| ----------------------------- | --------------------------------------------------------------------- |
| `seo-pme-2025`                | Comprendre le SEO en 2025 : guide pratique pour les PME               |
| `google-ads-pme-demarrer`     | Google Ads pour les PME : par où commencer sans gaspiller son budget  |
| `social-ads-vs-sea-pme`       | Social Ads vs SEA : quel levier choisir pour votre PME en 2025        |
| `geo-strategie-contenu-pme`   | GEO et stratégie de contenu PME : se positionner sur les moteurs IA   |

Publication : 2026-04-14 · IDs : `article-<slug>`.

## Option 1 — Push direct via l'API Sanity (recommandé)

1. Va sur https://www.sanity.io/manage → ton projet → **API** → **Tokens** → **Add API token**
   → Name : `local-import` · Permissions : **Editor**
2. Copie le token puis :

```bash
cd "C:/Users/eliot/Desktop/Cursor  Github/advisia"
SANITY_API_WRITE_TOKEN=sk-xxx... node scripts/sanity-import/push-to-sanity.mjs
```

Sous PowerShell :
```powershell
$env:SANITY_API_WRITE_TOKEN="sk-xxx..."; node scripts/sanity-import/push-to-sanity.mjs
```

Le script est idempotent (`createOrReplace`) : relance autant de fois que tu veux, les IDs restent stables.

## Option 2 — CLI Sanity

```bash
npx sanity@latest login
npx sanity@latest dataset import scripts/sanity-import/articles.ndjson production --replace
```

## Option 3 — Studio (manuel)

Copier-coller chaque .md dans Sanity Studio. Long et fastidieux — privilégier les options 1 ou 2.

## Après import

Les 4 articles sont créés **sans image de couverture** (champ requis mais accepté vide à la création).
Dans Sanity Studio, pour chaque article :
1. Onglet **Articles**
2. Ouvrir l'article
3. Ajouter une **Image de couverture** + texte alternatif
4. Publier

Les articles apparaîtront ensuite sur `/insights` et `/insights/[slug]`.

## Régénérer le NDJSON

Si les .md sources changent dans `C:/Users/<user>/Downloads/` ou `article-4-geo-contenu.md` :

```bash
node scripts/sanity-import/convert-md-to-ndjson.mjs
```

## Fichiers

- `convert-md-to-ndjson.mjs` — conversion MD → Portable Text NDJSON
- `push-to-sanity.mjs` — push direct via API Mutations (nécessite token)
- `articles.ndjson` — sortie générée (ne pas éditer à la main)
- `article-4-geo-contenu.md` — source de l'article 4 (les 3 autres sont dans `~/Downloads/`)
