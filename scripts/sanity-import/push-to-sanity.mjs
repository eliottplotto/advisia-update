#!/usr/bin/env node
// Pousse articles.ndjson dans Sanity via l'API Mutations.
// Requiert SANITY_API_WRITE_TOKEN (droits "Editor" ou "Administrator").
//
// Usage :
//   SANITY_API_WRITE_TOKEN=sk-... node scripts/sanity-import/push-to-sanity.mjs
//
// Lit projectId/dataset depuis .env.local (ou variables d'env).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");

// Charge .env.local si pas déjà en env
function loadEnv() {
  const envFile = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envFile)) return;
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
  }
}
loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  console.error("✗ NEXT_PUBLIC_SANITY_PROJECT_ID manquant dans .env.local");
  process.exit(1);
}
if (!token) {
  console.error("✗ SANITY_API_WRITE_TOKEN manquant. Crée un token 'Editor' sur https://www.sanity.io/manage");
  console.error("  puis relance : SANITY_API_WRITE_TOKEN=sk-... node scripts/sanity-import/push-to-sanity.mjs");
  process.exit(1);
}

const apiVersion = "2025-07-15";
const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;

const ndjsonPath = path.join(__dirname, "articles.ndjson");
if (!fs.existsSync(ndjsonPath)) {
  console.error(`✗ ${ndjsonPath} introuvable. Lance d'abord convert-md-to-ndjson.mjs`);
  process.exit(1);
}

const docs = fs
  .readFileSync(ndjsonPath, "utf8")
  .trim()
  .split(/\r?\n/)
  .map((l) => JSON.parse(l));

const mutations = docs.map((doc) => ({ createOrReplace: doc }));

console.log(`→ Push ${docs.length} articles vers ${projectId}/${dataset}...`);

const res = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ mutations }),
});

const json = await res.json();
if (!res.ok) {
  console.error("✗ Erreur Sanity:", JSON.stringify(json, null, 2));
  process.exit(1);
}

console.log(`✓ ${json.results?.length ?? 0} documents créés / mis à jour.`);
for (const r of json.results ?? []) {
  console.log(`  - ${r.id} (${r.operation})`);
}
console.log("\nLes articles sont visibles dans Sanity Studio. Pense à y ajouter l'image de couverture.");
