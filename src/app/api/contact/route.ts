import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { firstName, lastName, company, email, message } = body;

  if (!firstName || !lastName || !company || !email || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Mon site", email: "hello@advisia.agency" },
        to: [{ email: "hello@advisia.agency", name: `${firstName} ${lastName}` }],
        replyTo: { email },
        subject: `Nouveau message depuis advisia.agency`,
        htmlContent: `
          <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
          <p><strong>Entreprise :</strong> ${company}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong><br/>${message}</p>
        `,
      }),
    });

    if (!res.ok) throw new Error("Erreur d'envoi");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
  }
}
