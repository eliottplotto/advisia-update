import React from "react";

import FooterXS from "@/components/footer-xs";
import LogosConfiance from "@/components/logos-confiance";
import CalForm from "@/components/cal-form";
import Link from "next/link";
import FAQCenter from "@/components/ui/sections/faq-center";

export const metadata = {
  title: "Prendre rendez-vous · Agence Advisia",
  description:
    "Un moment pour faire le point, poser vos questions, et envisager l'avenir digital de votre entreprise. Gratuit et sans engagement.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Prendre rendez-vous · Agence Advisia",
    description:
      "Un moment pour faire le point, poser vos questions, et envisager l'avenir digital de votre entreprise. Gratuit et sans engagement.",
    url: "https://advisia.agency",
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
      question: "Qui se cache derrière l'agence Advisia ?",
      answer:
        "Advisia, c'est une équipe d'associés expérimentés, entourés d'un collectif de spécialistes : ingénieurs IA, designers UX/UI, développeurs web, experts SEO/SEA et community managers. On combine expertise technique, vision stratégique et sens du concret pour livrer des solutions durables, efficaces et rentables.",
    },
    {
      id: "q2",
      question:
        "Est-ce que vous travaillez uniquement avec les grandes entreprises ou aussi avec les PME et indépendants ?",
      answer:
        "On travaille avec tous types de structures : PME, TPE, artisans, franchises, groupes... Ce qui compte, c'est l'envie de se moderniser, de gagner en performance, et de s'équiper intelligemment. On adapte chaque solution à la taille, au budget et aux objectifs de nos clients.",
    },
    {
      id: "q3",
      question:
        " Comment se passe un accompagnement avec Advisia, concrètement ?",
      answer:
        "Tout commence par un échange simple pour comprendre vos enjeux. Ensuite, on vous propose une solution sur-mesure, avec un plan clair, un devis transparent et un accompagnement pas à pas. Vous êtes impliqué sans être noyé, et vous avez un point de contact dédié du début à la fin.",
    },
    {
      id: "q4",
      question:
        "Est-ce que je peux vous faire confiance si je n'ai pas de connaissances techniques ?",
      answer:
        "Oui, et c'est même notre point fort : rendre des solutions tech accessibles à tous. On vous explique les choses simplement, on vous forme quand il faut, et on reste disponibles après la livraison. Vous gardez toujours le contrôle, sans jamais vous sentir dépassé.",
    },
    {
      id: "q5",
      question:
        "Est-ce que vous proposez un suivi ou une maintenance après la mise en place des solutions ?",
      answer:
        "Oui. Chaque projet peut inclure une maintenance ou un accompagnement post-livraison, en fonction de vos besoins. On peut faire évoluer les outils, corriger, améliorer ou même proposer des optimisations régulières. Vous n'êtes jamais seul après le projet.",
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
                Nous vous offrons un audit gratuit et un plan d&apos;action
                personnalisé, sans engagement.
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
