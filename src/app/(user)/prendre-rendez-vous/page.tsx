"use client";

import React from "react";

import FooterXS from "@/components/footer-xs";
import LogosConfiance from "@/components/logos-confiance";
import CalForm from "@/components/cal-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQCenter from "@/components/ui/sections/faq-center";

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
      question: "Qui se cache derrière l’agence Advisia ?",
      answer:
        "Advisia, c’est une équipe d’associés expérimentés, entourés d’un collectif de spécialistes : ingénieurs IA, designers UX/UI, développeurs web, experts SEO/SEA et community managers. On combine expertise technique, vision stratégique et sens du concret pour livrer des solutions durables, efficaces et rentables.",
    },
    {
      id: "q2",
      question:
        "Est-ce que vous travaillez uniquement avec les grandes entreprises ou aussi avec les PME et indépendants ?",
      answer:
        "On travaille avec tous types de structures : PME, TPE, artisans, franchises, groupes... Ce qui compte, c’est l’envie de se moderniser, de gagner en performance, et de s’équiper intelligemment. On adapte chaque solution à la taille, au budget et aux objectifs de nos clients.",
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
        "Est-ce que je peux vous faire confiance si je n’ai pas de connaissances techniques ?",
      answer:
        "Oui, et c’est même notre point fort : rendre des solutions tech accessibles à tous. On vous explique les choses simplement, on vous forme quand il faut, et on reste disponibles après la livraison. Vous gardez toujours le contrôle, sans jamais vous sentir dépassé.",
    },
    {
      id: "q5",
      question:
        "Est-ce que vous proposez un suivi ou une maintenance après la mise en place des solutions ?",
      answer:
        "Oui. Chaque projet peut inclure une maintenance ou un accompagnement post-livraison, en fonction de vos besoins. On peut faire évoluer les outils, corriger, améliorer ou même proposer des optimisations régulières. Vous n’êtes jamais seul après le projet.",
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="dark bg-background text-foreground">
        <div className="container-md">
          <div className="global-padding-x py-8 lg:py-16">
            <div className="flex flex-col items-center gap-6">
              <div>
                {profils.map((profil, index) => (
                  <img
                    key={index}
                    src={profil.src}
                    alt={profil.alt}
                    className="inline-block not-first:-ml-2 w-12 h-12 rounded-full"
                  />
                ))}
              </div>
              <div className="bg-secondary py-1 px-2 mb-0 flex items-center gap-2 w-fit rounded-sm">
                <div className="w-2 h-2 bg-ad-1 rounded-xs"></div>
                <p className="text-sm font-mono uppercase">
                  Nous sommes à votre écoute
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl xl:text-7xl text-center">
                Prenons 20 min. pour{" "}
                <span className="text-highlight">faire le point</span>
              </h1>
              <p className="max-w-2xl xl:max-w-4xl text-center">
                Nous vous offrons un audit gratuit et un plan d&apos;action
                personnalisé, sans engagement.
              </p>
            </div>

            <div className="mt-8 md:mt-16">
              <CalForm />
            </div>
            <div className="my-8 space-y-2 flex-wrap text-center text-muted-foreground">
              <p>
                Vous ne voyez pas le formulaire ?{" "}
                <a
                  href="https://cal.com/advisia/premier-echange"
                  className="underline"
                  target="_blank"
                >
                  Cliquez ici
                </a>
              </p>
            </div>
            <div className="py-2 px-2 bg-secondary rounded-sm w-fit mx-auto flex justify-center items-center gap-4 flex-wrap">
              <p className="ml-2">Vous préférez les messages ?</p>
              <Button asChild>
                <Link href={"/contact"}>Accéder au formulaire</Link>
              </Button>
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
