import { type NextRequest, NextResponse } from "next/server";
import { LEAD_MAGNETS, getLeadMagnetBySlug } from "@/lib/lead-magnets/data";
import { createToken } from "@/lib/lead-magnets/token";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const CRON_SECRET = process.env.CRON_SECRET;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://advisia.agency";

// Templates déjà créés (cf. route.ts de /api/ressources/request)
const TEMPLATE_J7 = 9;
const TEMPLATE_J14 = 10;

const SHORT_TITLES: Record<string, string> = {
  "checklist-cession-reprise": "Checklist Cession-Reprise",
  "10-automatisations-ia-pme": "10 Automatisations IA",
  "checklist-seo-local": "Checklist SEO Local",
};

// Tolérance : on capte les contacts dont la date tombe entre X-0.5 et X+0.5 jours
// pour absorber les variations d'heure d'exécution du cron (daily mais pas forcément
// à la même minute pile).
const J7_WINDOW = { minDays: 6.5, maxDays: 7.5 };
const J14_WINDOW = { minDays: 13.5, maxDays: 14.5 };

type BrevoContact = {
  id: number;
  email: string;
  createdAt: string;
  modifiedAt: string;
  attributes: {
    PRENOM?: string;
    LEAD_MAGNET?: string;
    DOWNLOADED_AT?: string;
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
  const limit = 500; // Brevo max par page
  while (true) {
    const res = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${listId}/contacts?limit=${limit}&offset=${offset}`,
      { headers: { Accept: "application/json", "api-key": apiKey } }
    );
    if (!res.ok) {
      console.error(`[cron-nurturing] Failed to fetch list ${listId}:`, res.status);
      break;
    }
    const data = (await res.json()) as { contacts?: BrevoContact[]; count?: number };
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
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({ attributes }),
    }
  );
  return res.status === 204 || res.ok;
}

async function sendNurturingEmail(
  apiKey: string,
  contact: BrevoContact,
  templateId: number
): Promise<boolean> {
  const slug = contact.attributes.LEAD_MAGNET;
  if (!slug) return false;
  const magnet = getLeadMagnetBySlug(slug);
  if (!magnet) return false;

  const token = createToken(contact.email, slug);
  const url = `${SITE_URL}/ressources/${slug}?t=${encodeURIComponent(token)}`;

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
  // Auth : Vercel Cron envoie le secret dans le header Authorization, mais on accepte
  // aussi un query ?secret=... pour les tests manuels.
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
  const results = {
    checked: 0,
    j7Sent: 0,
    j14Sent: 0,
    errors: 0,
    byList: {} as Record<string, { checked: number; j7: number; j14: number }>,
  };

  for (const magnet of LEAD_MAGNETS) {
    const listId = magnet.brevoListId;
    const contacts = await fetchListContacts(apiKey, listId);
    const stats = { checked: contacts.length, j7: 0, j14: 0 };

    for (const c of contacts) {
      const downloadedAt = c.attributes.DOWNLOADED_AT || c.createdAt;
      if (!downloadedAt) continue;

      const age = daysSince(downloadedAt);

      // J+7 ?
      if (
        age >= J7_WINDOW.minDays &&
        age < J7_WINDOW.maxDays &&
        c.attributes.NURTURING_J7_SENT !== true
      ) {
        const sent = await sendNurturingEmail(apiKey, c, TEMPLATE_J7);
        if (sent) {
          await updateContactAttribute(apiKey, c.email, { NURTURING_J7_SENT: true });
          stats.j7 += 1;
          results.j7Sent += 1;
        } else {
          results.errors += 1;
        }
      }

      // J+14 ?
      if (
        age >= J14_WINDOW.minDays &&
        age < J14_WINDOW.maxDays &&
        c.attributes.NURTURING_J14_SENT !== true
      ) {
        const sent = await sendNurturingEmail(apiKey, c, TEMPLATE_J14);
        if (sent) {
          await updateContactAttribute(apiKey, c.email, { NURTURING_J14_SENT: true });
          stats.j14 += 1;
          results.j14Sent += 1;
        } else {
          results.errors += 1;
        }
      }
    }

    results.checked += stats.checked;
    results.byList[magnet.slug] = stats;
  }

  return NextResponse.json({
    success: true,
    ranAt: new Date().toISOString(),
    ...results,
  });
}
