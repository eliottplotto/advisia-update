import { type NextRequest, NextResponse } from "next/server";

// Configuration Brevo
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID || "4";

export async function POST(request: NextRequest) {
  try {
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { error: "Clé API Brevo manquante" },
        { status: 500 }
      );
    }

    const { firstName, email } = await request.json();

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

    // Appel à l'API Brevo pour créer/mettre à jour le contact
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
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
