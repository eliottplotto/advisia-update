import React from "react";

import FooterXS from "@/components/footer-xs";
import LogosConfiance from "@/components/logos-confiance";
import CalForm from "@/components/cal-form";
import Link from "next/link";
import FAQCenter from "@/components/ui/sections/faq-center";

export const metadata = {
  title: "Prendre rendez-vous · Agence Advisia",
  description:
    "20 min pour faire le point sur votre projet digital. Vous repartez avec 3 pistes concrètes. Gratuit et sans engagement.",
  keywords: [
    "rendez-vous agence digitale",
    "audit gratuit IA PME",
    "consultation agence web gratuite",
  ],
  openGraph: {
    title: "Prendre rendez-vous · Agence Advisia",
    description:
      "20 min pour faire le point sur votre projet digital. Vous repartez avec 3 pistes concrètes. Gratuit et sans engagement.",
    url: "https://advisia.agency/prendre-rendez-vous",
    siteName: "Advisia",
    type: "website",
  },
};

export default function PrendreRendezVous() {
  const profils = [
    {
      alt: "Eliott P.",
      src: "/eliott-plotto.jpeg",
    },
    {
      alt: "Julien C.",
      src: "/julien.jpeg",
    },

    {
      alt: "Enzo F.",
      src: "/pp1.jpg",
    },
  ];

  const questions = [
    {
      id: "q1",
      question: "L'appel est vraiment gratuit ?",
      answer:
        "Oui, complètement. 20 min de votre temps, zéro euro. Vous repartez avec des pistes concrètes, que vous travailliez avec nous ou non.",
    },
    {
      id: "q2",
      question: "Avec qui vais-je parler ?",
      answer:
        "Avec Eliott ou Julien directement. Pas un commercial, pas un assistant. Les gens qui font le travail.",
    },
    {
      id: "q3",
      question: "Que faut-il préparer avant l'appel ?",
      answer:
        "Rien d'obligatoire. Si vous avez un brief, un site existant ou des exemples de ce que vous aimez, partagez-les. Sinon, on vous pose les bonnes questions pendant l'appel.",
    },
    {
      id: "q4",
      question: "Est-ce que ça m'engage à quelque chose ?",
      answer:
        "Non. L'appel est sans engagement. Si on peut vous aider, on vous envoie un devis. Si ce n'est pas le bon moment ou le bon fit, on vous le dit honnêtement.",
    },
    {
      id: "q5",
      question: "Je ne vois pas le calendrier de prise de rendez-vous. Comment faire ?",
      answer:
        "Le calendrier Cal.com peut mettre quelques secondes à charger. Si ça ne fonctionne pas, cliquez sur le lien direct sous le calendrier ou passez par notre formulaire de contact.",
    },
  ];

  return (
    <main>
      {/* Header */}
      <section
        style={{
          background: "rgba(10,10,15,0.85)",
          color: "var(--text-primary)",
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="px-4 md:px-8 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col items-center gap-6">
              <div>
                {profils.map((profil, index) => (
                  <img
                    key={index}
                    src={profil.src}
                    alt={profil.alt}
                    className="inline-block not-first:-ml-2 w-12 h-12 rounded-full"
                    style={{ border: "2px solid var(--violet-dim)" }}
                  />
                ))}
              </div>
              <div
                className="py-1.5 px-3 flex items-center gap-2 w-fit rounded-full"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--ad-1)" }}
                />
                <p
                  className="text-xs font-mono uppercase tracking-[0.15em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Nous sommes à votre écoute
                </p>
              </div>
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Prenons 20 min. pour{" "}
                <span className="gradient-text">faire le point</span>
              </h1>
              <p
                className="max-w-2xl xl:max-w-4xl text-center"
                style={{ color: "var(--text-secondary)" }}
              >
                On regarde ensemble vos process pendant 20 min. Vous repartez
                avec 3 pistes concrètes — gratuit, sans engagement.
              </p>
            </div>

            <div className="mt-8 md:mt-16">
              <CalForm />
            </div>
            <div
              className="my-8 space-y-2 flex-wrap text-center"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Vous ne voyez pas le formulaire ?{" "}
                <a
                  href="https://cal.com/advisia/premier-echange"
                  className="underline transition-colors hover:text-[var(--violet-light)]"
                  target="_blank"
                >
                  Cliquez ici
                </a>
              </p>
            </div>
            <div
              className="py-3 px-4 rounded-xl w-fit mx-auto flex justify-center items-center gap-4 flex-wrap"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p style={{ color: "var(--text-secondary)" }}>
                Vous préférez les messages ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-[1px]"
                style={{
                  background: "var(--ad-1)",
                  color: "#000",
                }}
              >
                Accéder au formulaire
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LogosConfiance />
      <FAQCenter questions={questions} />
      <FooterXS />
    </main>
  );
}
