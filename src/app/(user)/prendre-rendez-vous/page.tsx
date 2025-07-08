"use client";

import React from "react";

import FooterXS from "@/components/footer-xs";
import { RevealText } from "@/components/RevealText";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import FAQ from "@/components/ui/sections/faq";
import LogosConfiance from "@/components/logos-confiance";
import CalForm from "@/components/cal-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiArrowRightUpFill } from "@remixicon/react";

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
      <section className="dark bg-background text-foreground bg-ascii-4">
        <div className="container-md">
          <div className="pt-[95px]">
            <div className="global-padding-x py-16">
              <div className="flex flex-col items-center gap-8">
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
                <BulletHeadline as="p" className="w-max">
                  Contactez un expert
                </BulletHeadline>
                <RevealText
                  as="h1"
                  className="text-4xl md:text-6xl xl:text-7xl uppercase text-center"
                >
                  Réserver un appel
                </RevealText>
                <p className="max-w-4xl text-center">
                  Vous avez un projet web, marketing ou IA ? Prenez 20 minutes
                  avec nous pour faire le point. Nous vous offrons un audit
                  gratuit et un plan d&apos;action personnalisé, sans
                  engagement.
                </p>
              </div>

              <div className="mt-8 md:mt-16">
                <CalForm />
              </div>
              <div className="my-8 space-y-2 flex-wrap text-center text-sm text-muted-foreground">
                <p>Vous ne voyez pas le formulaire ?</p>
                <Button variant={"link"} asChild className="flex mx-auto">
                  <Link href={"/prendre-rendez-vous"}>
                    Cliquez ici <RiArrowRightUpFill />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogosConfiance />
      <FAQ />
      <FooterXS />
    </main>
  );
}
