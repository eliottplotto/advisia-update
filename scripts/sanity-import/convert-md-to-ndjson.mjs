#!/usr/bin/env node
// Convertit les 4 articles MD en NDJSON Sanity (Portable Text).
// Usage : node convert-md-to-ndjson.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOWNLOADS = path.join(process.env.USERPROFILE || process.env.HOME || "", "Downloads");

// -- 4 articles ------------------------------------------------
const articles = [
  {
    slug: "seo-pme-2025",
    mdPath: path.join(DOWNLOADS, "article-1-seo-pme-2025.md"),
    category: "guide",
    readTime: 9,
    publishedAt: "2026-04-14T09:00:00.000Z",
    author: "Eliott",
    excerpt:
      "Guide SEO pour PME : comprendre ce que Google regarde, éviter les erreurs fréquentes et construire un plan d'action concret sur 12 mois.",
    seoTitle: "SEO PME 2025 : le guide pratique pour bien se positionner",
    seoDescription:
      "Comprendre et améliorer son référencement naturel quand on dirige une PME. Stratégie, erreurs à éviter, actions prioritaires. Guide concret 2025.",
  },
  {
    slug: "google-ads-pme-demarrer",
    mdPath: path.join(DOWNLOADS, "article-2-google-ads-pme.md"),
    category: "guide",
    readTime: 10,
    publishedAt: "2026-04-14T09:05:00.000Z",
    author: "Eliott",
    excerpt:
      "Démarrer Google Ads sans gaspiller son budget : structure de campagne, budgets réalistes, erreurs à éviter et indicateurs à suivre.",
    seoTitle: "Google Ads PME : démarrer sans gaspiller son budget",
    seoDescription:
      "Guide débutant Google Ads pour PME. Budget minimum, structure de campagne, erreurs à éviter. Exemples concrets et ROI réaliste.",
  },
  {
    slug: "social-ads-vs-sea-pme",
    mdPath: path.join(DOWNLOADS, "article-3-social-ads-vs-sea.md"),
    category: "guide",
    readTime: 10,
    publishedAt: "2026-04-14T09:10:00.000Z",
    author: "Eliott",
    excerpt:
      "Comparatif Google Ads vs Meta/LinkedIn : cas d'usage par secteur, budgets et comment combiner les deux pour une PME en 2025.",
    seoTitle: "Social Ads vs Google Ads PME : quel levier choisir ?",
    seoDescription:
      "Comparatif objectif Meta Ads vs Google Ads pour PME. Cas d'usage par secteur, budgets recommandés, quand combiner les deux.",
  },
  {
    slug: "geo-strategie-contenu-pme",
    mdPath: path.join(__dirname, "article-4-geo-contenu.md"),
    category: "guide",
    readTime: 8,
    publishedAt: "2026-04-14T09:15:00.000Z",
    author: "Eliott",
    excerpt:
      "GEO, contenu, IA : comment apparaître dans les réponses de ChatGPT, Perplexity et Google AI Overviews quand on est une PME.",
    seoTitle: "GEO & contenu PME : se positionner sur les moteurs IA",
    seoDescription:
      "Référencement IA, contenu SEO, GEO pour PME : comment apparaître sur ChatGPT, Perplexity et Google AI en 2025. Guide pratique.",
  },
];

// -- helpers ---------------------------------------------------
let keyCounter = 0;
const nextKey = () => `k${(++keyCounter).toString(36)}${Date.now().toString(36).slice(-4)}`;

function parseInline(text) {
  // Produces { children: [spans], markDefs }
  const markDefs = [];
  const children = [];
  let rest = text;

  const push = (t, marks = []) => {
    if (!t) return;
    children.push({ _type: "span", _key: nextKey(), text: t, marks });
  };

  // Token-based walk : match next **bold** ou [text](url)
  const tokenRe = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/;
  while (rest.length) {
    const m = rest.match(tokenRe);
    if (!m) {
      push(rest);
      break;
    }
    const idx = m.index;
    if (idx > 0) push(rest.slice(0, idx));
    if (m[0].startsWith("**")) {
      push(m[1], ["strong"]);
    } else {
      const linkKey = nextKey();
      markDefs.push({ _type: "link", _key: linkKey, href: m[3] });
      push(m[2], [linkKey]);
    }
    rest = rest.slice(idx + m[0].length);
  }

  return { children, markDefs };
}

function mdToPortableText(md) {
  // Nettoyage : on retire le front-matter titre + meta block au début
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let inMetaBlock = false;
  let skipIntroMeta = true;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Skip H1 initial
    if (skipIntroMeta && /^# /.test(line)) {
      continue;
    }
    // Skip lignes meta (**Titre SEO :** etc.) au début
    if (skipIntroMeta && /^\*\*(Titre SEO|Meta description|Mots-clés)/.test(line)) {
      continue;
    }
    // Fin du meta block au premier --- ou ligne vide suivie de contenu
    if (skipIntroMeta && line.trim() === "---") {
      skipIntroMeta = false;
      continue;
    }
    if (skipIntroMeta && line.trim() === "") {
      continue;
    }
    skipIntroMeta = false;

    // séparateur horizontal : on ignore
    if (line.trim() === "---") continue;
    if (line.trim() === "") continue;

    // Tableau markdown : collecte toutes les lignes consécutives commençant par |
    // puis on rend chaque row en h4 + liste à puces pour un rendu lisible
    // (on évite les pipes aplatis qui se retrouvent dans un paragraphe normal)
    if (/^\s*\|/.test(line) && line.includes("|")) {
      const tableLines = [];
      let j = i;
      while (j < lines.length && /^\s*\|/.test(lines[j])) {
        tableLines.push(lines[j]);
        j++;
      }
      const rows = tableLines
        .map((l) =>
          l
            .replace(/^\s*\|/, "")
            .replace(/\|\s*$/, "")
            .split("|")
            .map((c) => c.trim())
        )
        .filter((cells) => !cells.every((c) => /^[-:\s]*$/.test(c)));

      if (rows.length >= 2) {
        const [headers, ...body] = rows;
        // Render each data row as a paragraph with bold first-cell + dashed list of other cells
        for (const row of body) {
          const [firstCell, ...restCells] = row;
          const label = firstCell.trim();
          const values = restCells
            .map((c, idx) => `${headers[idx + 1]} : ${c}`)
            .join(" · ");
          const paragraphText = `**${label}** — ${values}`;
          const { children, markDefs } = parseInline(paragraphText);
          blocks.push({
            _type: "block",
            _key: nextKey(),
            style: "normal",
            markDefs,
            children,
          });
        }
      }
      i = j - 1;
      continue;
    }

    // Headings
    const h2 = line.match(/^## (.+)$/);
    const h3 = line.match(/^### (.+)$/);
    if (h2) {
      const { children, markDefs } = parseInline(h2[1]);
      blocks.push({
        _type: "block",
        _key: nextKey(),
        style: "h2",
        markDefs,
        children,
      });
      continue;
    }
    if (h3) {
      const { children, markDefs } = parseInline(h3[1]);
      blocks.push({
        _type: "block",
        _key: nextKey(),
        style: "h3",
        markDefs,
        children,
      });
      continue;
    }

    // Listes bullets - ... ou * ...
    const li = line.match(/^[-*] (.+)$/);
    if (li) {
      const { children, markDefs } = parseInline(li[1]);
      blocks.push({
        _type: "block",
        _key: nextKey(),
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs,
        children,
      });
      continue;
    }

    // Paragraphe (potentiellement multi-ligne)
    let paragraph = line;
    while (i + 1 < lines.length && lines[i + 1].trim() !== "" && !/^(## |### |[-*] )/.test(lines[i + 1])) {
      paragraph += " " + lines[i + 1].trim();
      i++;
    }
    const { children, markDefs } = parseInline(paragraph.trim());
    blocks.push({
      _type: "block",
      _key: nextKey(),
      style: "normal",
      markDefs,
      children,
    });
  }

  return blocks;
}

function articleDoc(meta, body) {
  return {
    _type: "article",
    _id: `article-${meta.slug}`,
    title: meta.title,
    slug: { _type: "slug", current: meta.slug },
    excerpt: meta.excerpt,
    category: meta.category,
    publishedAt: meta.publishedAt,
    author: meta.author,
    readTime: meta.readTime,
    body,
    seo: {
      metaTitle: meta.seoTitle,
      metaDescription: meta.seoDescription,
    },
  };
}

// -- main ------------------------------------------------------
const outLines = [];
for (const a of articles) {
  const md = fs.readFileSync(a.mdPath, "utf8");
  // Titre = 1ère ligne H1
  const titleMatch = md.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : a.slug;
  const body = mdToPortableText(md);
  const doc = articleDoc({ ...a, title }, body);
  outLines.push(JSON.stringify(doc));
  console.log(`✓ ${title} — ${body.length} blocks`);
}

const outPath = path.join(__dirname, "articles.ndjson");
fs.writeFileSync(outPath, outLines.join("\n") + "\n", "utf8");
console.log(`\n→ Écrit : ${outPath} (${outLines.length} documents)`);
