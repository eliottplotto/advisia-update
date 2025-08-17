import { type NextRequest, NextResponse } from "next/server";

// Configuration Brevo
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID || "4";

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] BREVO_API_KEY exists:", !!BREVO_API_KEY);
    console.log(
      "[v0] BREVO_API_KEY first 20 chars:",
      BREVO_API_KEY?.substring(0, 20) + "..."
    );
    console.log("[v0] BREVO_LIST_ID:", BREVO_LIST_ID);

    console.log("[v0] Raw BREVO_API_KEY:", JSON.stringify(BREVO_API_KEY));
    console.log("[v0] Raw BREVO_LIST_ID:", JSON.stringify(BREVO_LIST_ID));
    console.log("[v0] BREVO_API_KEY length:", BREVO_API_KEY?.length);
    console.log(
      "[v0] BREVO_API_KEY starts with 'xkeysib':",
      BREVO_API_KEY?.startsWith("xkeysib")
    );

    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { error: "Clé API Brevo manquante" },
        { status: 500 }
      );
    }

    const cleanApiKey = BREVO_API_KEY.trim();
    console.log("[v0] Clean API key length:", cleanApiKey.length);

    const { firstName, email } = await request.json();
    console.log("[v0] Received data:", { firstName, email });

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "Le prénom et l'email sont requis" },
        { status: 400 }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    console.log("[v0] Testing API key validity...");
    const testResponse = await fetch("https://api.brevo.com/v3/account", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-key": cleanApiKey,
      },
    });

    console.log("[v0] API key test response status:", testResponse.status);
    if (!testResponse.ok) {
      const testError = await testResponse.text();
      console.log("[v0] API key test error (raw):", testError);
      return NextResponse.json(
        { error: "Clé API Brevo invalide ou expirée" },
        { status: 401 }
      );
    }

    console.log("[v0] API key is valid, proceeding with contact creation...");

    // Appel à l'API Brevo pour créer/mettre à jour le contact
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": cleanApiKey,
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        attributes: {
          FIRSTNAME: firstName.trim(),
        },
        listIds: [Number.parseInt(BREVO_LIST_ID)],
        updateEnabled: true, // Met à jour le contact s'il existe déjà
      }),
    });

    const brevoData = await brevoResponse.json();
    console.log(
      "[v0] Brevo contact creation response status:",
      brevoResponse.status
    );
    console.log("[v0] Brevo contact creation response data:", brevoData);

    if (brevoResponse.ok) {
      return NextResponse.json({
        success: true,
        message: "Contact ajouté avec succès à la newsletter",
        contactId: brevoData.id,
      });
    } else {
      // Gestion des erreurs spécifiques de Brevo
      if (brevoData.code === "duplicate_parameter") {
        return NextResponse.json({
          success: true,
          message: "Email déjà inscrit à la newsletter",
        });
      }

      console.error("Erreur Brevo:", brevoData);
      return NextResponse.json(
        { error: brevoData.message || "Erreur lors de l'ajout à Brevo" },
        { status: brevoResponse.status }
      );
    }
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
