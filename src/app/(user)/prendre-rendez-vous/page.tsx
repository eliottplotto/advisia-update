"use client";

import React from "react";

import FooterXS from "@/components/footer-xs";
import { RevealText } from "@/components/RevealText";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import FAQ from "@/components/ui/faq";
import LogosConfiance from "@/components/logos-confiance";
import CalForm from "@/components/cal-form";

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

  return (
    <main>
      {/* Header */}
      <section data-theme="dark" className="bg-[#FF2803] bg-ascii-2">
        <div className="main-layout">
          <div></div>
          <div className="pt-32 lg:border-x border-white/50">
            <div className="global-padding dark text-foreground">
              <BulletHeadline as="p" className="w-max mx-auto">
                Contactez un expert
              </BulletHeadline>
              <RevealText
                as="h1"
                className="text-4xl md:text-6xl xl:text-8xl mt-8 uppercase text-center"
              >
                Réserver un appel
              </RevealText>
              <p className="max-w-4xl text-center mx-auto mt-8">
                Vous avez un projet web, marketing ou IA ? Prenez 15 minutes
                avec nous pour faire le point. Nous vous offrons un audit
                gratuit et un plan d&apos;action personnalisé, sans engagement.
              </p>
              <div className="mt-8 md:mt-16">
                <CalForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogosConfiance />
      <div className="h-1 bg-primary"></div>
      <FAQ />
      <FooterXS />
    </main>
  );
}
