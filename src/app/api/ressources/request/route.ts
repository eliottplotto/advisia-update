import { type NextRequest, NextResponse } from "next/server";
import { getLeadMagnetBySlug } from "@/lib/lead-magnets/data";
import { createToken } from "@/lib/lead-magnets/token";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const FALLBACK_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://advisia.agency";
const BREVO_TEMPLATE_ID = 6; // Lead Magnet - Livraison

// Détecte l'origine réelle de la requête (localhost en dev, advisia.agency en prod).
// Utilise les headers standards Next.js + Vercel/proxy.
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

// Titre court pour l'objet d'email (évite que l'objet soit trop long)
const SHORT_TITLES: Record<string, string> = {
  "checklist-cession-reprise": "Checklist Cession-Reprise",
  "10-automatisations-ia-pme": "10 Automatisations IA",
  "checklist-seo-local": "Checklist SEO Local",
};

export async function POST(request: NextRequest) {
  try {
    const { slug, firstName, email, company } = await request.json();

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

    // Génère le token signé qui servira dans le lien de l'email
    const token = createToken(email, slug);
    const siteUrl = resolveSiteUrl(request);
    const unlockUrl = `${siteUrl}/ressources/${slug}?t=${encodeURIComponent(token)}`;

    // Fallback dev : pas de clé Brevo → on skip inscription + envoi email et on renvoie le lien direct
    if (!BREVO_API_KEY) {
      console.warn(
        "[lead-magnet] BREVO_API_KEY missing — skipping Brevo (dev mode). Dev unlock URL:",
        unlockUrl
      );
      return NextResponse.json({
        success: true,
        message: "Dev mode — Brevo non configuré",
        devMode: true,
        devUnlockUrl: unlockUrl,
      });
    }

    const cleanApiKey = BREVO_API_KEY.trim();

    // 1) Ajout du contact à la liste dédiée
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": cleanApiKey,
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        attributes: {
          PRENOM: firstName.trim(),
          COMPANY: company?.trim() || "",
          LEAD_MAGNET: slug,
        },
        listIds: [magnet.brevoListId],
        updateEnabled: true,
      }),
    });

    // 204 = update OK, 201 = create OK
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

    // 2) Envoi de l'email transactionnel avec le lien signé
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": cleanApiKey,
      },
      body: JSON.stringify({
        to: [{ email: email.toLowerCase().trim(), name: firstName.trim() }],
        templateId: BREVO_TEMPLATE_ID,
        params: {
          PRENOM: firstName.trim(),
          TITRE: magnet.title,
          TITRE_COURT: SHORT_TITLES[slug] || magnet.title,
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
      // On ne fait pas planter tout le flow — on signale juste
      return NextResponse.json(
        { error: "L'email n'a pas pu être envoyé. Vérifiez votre adresse ou réessayez." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email envoyé avec succès",
    });
  } catch (error) {
    console.error("[lead-magnet] Server error:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
