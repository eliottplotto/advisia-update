import { type NextRequest, NextResponse } from "next/server";
import { LEAD_MAGNETS, getLeadMagnetBySlug } from "@/lib/lead-magnets/data";
import { createToken } from "@/lib/lead-magnets/token";
import { buildUnlockUrl, type NurturingStep } from "@/lib/lead-magnets/tracking";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const CRON_SECRET = process.env.CRON_SECRET;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://advisia.agency";

// Templates Brevo utilisés par le cron
const TEMPLATE_J7 = 9;
const TEMPLATE_J14 = 10;

// J+4 : un template distinct par lead magnet (contenu adapté au sujet)
const TEMPLATE_J4_BY_SLUG: Record<string, number> = {
  "checklist-cession-reprise": 11,
  "10-automatisations-ia-pme": 12,
  "checklist-seo-local": 13,
};

const SHORT_TITLES: Record<string, string> = {
  "checklist-cession-reprise": "Checklist Cession-Reprise",
  "10-automatisations-ia-pme": "10 Automatisations IA",
  "checklist-seo-local": "Checklist SEO Local",
};

// Fenêtres de déclenchement pour chaque étape.
// On utilise une tolérance de +/- 0.5 jour pour absorber le fait que le cron
// tourne une fois par jour (pas exactement à la seconde du téléchargement).
const STEPS: Array<{
  name: string;
  utmStep: NurturingStep;
  window: { min: number; max: number };
  flagKey: "NURTURING_J4_SENT" | "NURTURING_J7_SENT" | "NURTURING_J14_SENT";
  getTemplateId: (slug: string) => number | undefined;
}> = [
  {
    name: "J+4",
    utmStep: "j4",
    window: { min: 3.5, max: 4.5 },
    flagKey: "NURTURING_J4_SENT",
    getTemplateId: (slug) => TEMPLATE_J4_BY_SLUG[slug],
  },
  {
    name: "J+7",
    utmStep: "j7",
    window: { min: 6.5, max: 7.5 },
    flagKey: "NURTURING_J7_SENT",
    getTemplateId: () => TEMPLATE_J7,
  },
  {
    name: "J+14",
    utmStep: "j14",
    window: { min: 13.5, max: 14.5 },
    flagKey: "NURTURING_J14_SENT",
    getTemplateId: () => TEMPLATE_J14,
  },
];

type BrevoContact = {
  id: number;
  email: string;
  createdAt: string;
  modifiedAt: string;
  attributes: {
    PRENOM?: string;
    LEAD_MAGNET?: string;
    DOWNLOADED_AT?: string;
    NURTURING_J4_SENT?: boolean;
    NURTURING_J7_SENT?: boolean;
    NURTURING_J14_SENT?: boolean;
  };
};

function daysSince(isoDate: string): number {
  return (Date.now() - new Date(isoDate).getTime()) / (1000 * 60 * 60 * 24);
}

async function fetchListContacts(apiKey: string, listId: number): Promise<BrevoContact[]> {
  const all: BrevoContact[] = [];
  let offset = 0;
  const limit = 500;
  while (true) {
    const res = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${listId}/contacts?limit=${limit}&offset=${offset}`,
      { headers: { Accept: "application/json", "api-key": apiKey } }
    );
    if (!res.ok) {
      console.error(`[cron-nurturing] Failed to fetch list ${listId}:`, res.status);
      break;
    }
    const data = (await res.json()) as { contacts?: BrevoContact[] };
    const batch = data.contacts || [];
    all.push(...batch);
    if (batch.length < limit) break;
    offset += limit;
  }
  return all;
}

async function updateContactAttribute(
  apiKey: string,
  email: string,
  attributes: Record<string, string | boolean>
): Promise<boolean> {
  const res = await fetch(
    `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({ attributes }),
    }
  );
  return res.status === 204 || res.ok;
}

async function sendNurturingEmail(
  apiKey: string,
  contact: BrevoContact,
  templateId: number,
  utmStep: NurturingStep
): Promise<boolean> {
  const slug = contact.attributes.LEAD_MAGNET;
  if (!slug) return false;
  const magnet = getLeadMagnetBySlug(slug);
  if (!magnet) return false;

  const token = createToken(contact.email, slug);
  const url = buildUnlockUrl(SITE_URL, slug, token, utmStep);

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      to: [{ email: contact.email, name: contact.attributes.PRENOM || "" }],
      templateId,
      params: {
        PRENOM: contact.attributes.PRENOM || "",
        TITRE: magnet.title,
        TITRE_COURT: SHORT_TITLES[slug] || magnet.title,
        SLUG: slug,
        URL: url,
      },
    }),
  });
  if (!res.ok) {
    console.error(
      `[cron-nurturing] Email failed for ${contact.email} (template ${templateId}):`,
      res.status
    );
    return false;
  }
  return true;
}

export async function GET(request: NextRequest) {
  // Auth : Vercel Cron envoie le secret en header Authorization.
  // On accepte aussi ?secret= pour les tests manuels.
  const authHeader = request.headers.get("authorization");
  const secretParam = new URL(request.url).searchParams.get("secret");
  const providedSecret = authHeader?.replace(/^Bearer\s+/i, "") || secretParam;

  if (!CRON_SECRET || providedSecret !== CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!BREVO_API_KEY) {
    return NextResponse.json({ error: "BREVO_API_KEY missing" }, { status: 500 });
  }

  const apiKey = BREVO_API_KEY.trim();
  const stepResults: Record<string, number> = { "J+4": 0, "J+7": 0, "J+14": 0 };
  let checked = 0;
  let errors = 0;

  for (const magnet of LEAD_MAGNETS) {
    const contacts = await fetchListContacts(apiKey, magnet.brevoListId);

    for (const c of contacts) {
      checked += 1;
      const downloadedAt = c.attributes.DOWNLOADED_AT || c.createdAt;
      if (!downloadedAt) continue;
      const age = daysSince(downloadedAt);

      for (const step of STEPS) {
        const alreadySent = c.attributes[step.flagKey] === true;
        if (alreadySent) continue;
        if (age < step.window.min || age >= step.window.max) continue;

        const templateId = step.getTemplateId(magnet.slug);
        if (!templateId) continue;

        const ok = await sendNurturingEmail(apiKey, c, templateId, step.utmStep);
        if (ok) {
          await updateContactAttribute(apiKey, c.email, { [step.flagKey]: true });
          stepResults[step.name] += 1;
        } else {
          errors += 1;
        }
      }
    }
  }

  return NextResponse.json({
    success: true,
    ranAt: new Date().toISOString(),
    checked,
    sent: stepResults,
    errors,
  });
}
