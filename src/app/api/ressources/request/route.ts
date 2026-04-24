import { type NextRequest, NextResponse } from "next/server";
import { getLeadMagnetBySlug } from "@/lib/lead-magnets/data";
import { createToken } from "@/lib/lead-magnets/token";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const FALLBACK_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://advisia.agency";

// Template ID pour l'email de livraison immédiate
const TEMPLATE_IMMEDIATE = 6;

// Titre court pour l'objet d'email
const SHORT_TITLES: Record<string, string> = {
  "checklist-cession-reprise": "Checklist Cession-Reprise",
  "10-automatisations-ia-pme": "10 Automatisations IA",
  "checklist-seo-local": "Checklist SEO Local",
};

// Détecte l'origine réelle (localhost en dev, advisia.agency en prod)
function resolveSiteUrl(request: NextRequest): string {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = forwardedHost || request.headers.get("host");
  if (host) {
    const proto =
      forwardedProto ||
      (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
    return `${proto}://${host}`;
  }
  return FALLBACK_SITE_URL;
}

export async function POST(request: NextRequest) {
  try {
    const { slug, firstName, email, company, source } = await request.json();

    if (!slug || !firstName || !email) {
      return NextResponse.json(
        { error: "Slug, prénom et email requis" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Format d'email invalide" }, { status: 400 });
    }

    const magnet = getLeadMagnetBySlug(slug);
    if (!magnet) {
      return NextResponse.json({ error: "Ressource inconnue" }, { status: 404 });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedName = firstName.trim();

    // Token signé pour le lien dans l'email
    const token = createToken(normalizedEmail, slug);
    const siteUrl = resolveSiteUrl(request);
    const unlockUrl = `${siteUrl}/ressources/${slug}?t=${encodeURIComponent(token)}`;

    // Fallback dev : pas de clé Brevo, on renvoie le lien direct
    if (!BREVO_API_KEY) {
      console.warn(
        "[lead-magnet] BREVO_API_KEY missing (dev mode). Unlock URL:",
        unlockUrl
      );
      return NextResponse.json({
        success: true,
        devMode: true,
        devUnlockUrl: unlockUrl,
      });
    }

    const cleanApiKey = BREVO_API_KEY.trim();

    // 1) Ajout ou mise à jour du contact dans la liste dédiée
    // On stocke DOWNLOADED_AT et les flags de nurturing. Le cron quotidien
    // lira DOWNLOADED_AT et les flags pour déclencher J+4, J+7 et J+14 au bon moment.
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": cleanApiKey,
      },
      body: JSON.stringify({
        email: normalizedEmail,
        attributes: {
          PRENOM: normalizedName,
          COMPANY: company?.trim() || "",
          LEAD_MAGNET: slug,
          LEAD_SOURCE: source || "direct",
          DOWNLOADED_AT: new Date().toISOString(),
          NURTURING_J4_SENT: false,
          NURTURING_J7_SENT: false,
          NURTURING_J14_SENT: false,
        },
        listIds: [magnet.brevoListId],
        updateEnabled: true,
      }),
    });

    if (![201, 204].includes(contactRes.status)) {
      let brevoData: { code?: string; message?: string } = {};
      try {
        const text = await contactRes.text();
        if (text) brevoData = JSON.parse(text);
      } catch {}
      if (brevoData.code !== "duplicate_parameter") {
        console.error("[lead-magnet] Brevo contact error:", contactRes.status, brevoData);
        return NextResponse.json(
          { error: brevoData.message || "Erreur lors de l'inscription" },
          { status: contactRes.status }
        );
      }
    }

    // 2) Envoi immédiat du document (template J+0)
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": cleanApiKey,
      },
      body: JSON.stringify({
        to: [{ email: normalizedEmail, name: normalizedName }],
        templateId: TEMPLATE_IMMEDIATE,
        params: {
          PRENOM: normalizedName,
          TITRE: magnet.title,
          TITRE_COURT: SHORT_TITLES[slug] || magnet.title,
          SLUG: slug,
          URL: unlockUrl,
        },
      }),
    });

    if (!emailRes.ok) {
      let emailErr: { message?: string } = {};
      try {
        const text = await emailRes.text();
        if (text) emailErr = JSON.parse(text);
      } catch {}
      console.error("[lead-magnet] Brevo email error:", emailRes.status, emailErr);
      return NextResponse.json(
        { error: "L'email n'a pas pu être envoyé. Vérifiez votre adresse ou réessayez." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Document envoyé par email",
    });
  } catch (error) {
    console.error("[lead-magnet] Server error:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
