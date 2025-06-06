"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

export default function Agency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counter1Ref = useRef<HTMLParagraphElement>(null);
  const counter2Ref = useRef<HTMLParagraphElement>(null);
  const counter3Ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animation pour le premier compteur
      gsap.fromTo(
        counter1Ref.current,
        {
          textContent: "0",
        },
        {
          textContent: "5",
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animation pour le deuxième compteur
      gsap.fromTo(
        counter2Ref.current,
        {
          textContent: "0",
        },
        {
          textContent: "6",
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animation pour le troisième compteur
      gsap.fromTo(
        counter3Ref.current,
        {
          textContent: "0",
        },
        {
          textContent: "98",
          duration: 1.75,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="dark bg-background text-foreground container py-8 md:py-16 md:h-[80dvh] md:grid md:grid-cols-12 md:gap-2 flex flex-col gap-16">
      <div className="col-span-4">
        <Image
          src="/equipe-advisia.jpg"
          alt="Image"
          width={500}
          height={500}
          className="aspect-square object-cover"
        />
      </div>
      <div className="col-span-7 col-start-6 col-end-13 flex flex-col justify-between h-full gap-8 md:gap-32">
        <h2 className="text-2xl md:text-4xl indent-16 md:indent-32">
          <span className="text-[#FF5A02]">Advisia</span> est une agence de
          croissance digitale qui allie solutions web, intelligence artificielle
          et communication pour transformer vos objectifs en résultats
          mesurables. Nous veillons à maîtriser chaque phase, du concept à
          l&rsquo;après-lancement, en mettant en place les moyens nécessaires
          pour vous aider à atteindre vos objectifs.
        </h2>
        <div
          ref={containerRef}
          className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div>
            <p
              ref={counter1Ref}
              className="block text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl mb-2"
            >
              5
            </p>
            <p className="text-muted-foreground">Domaines d&apos;expertises</p>
          </div>
          <div>
            <p
              ref={counter2Ref}
              className="block text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl mb-2"
            >
              0
            </p>
            <p className="text-muted-foreground">Entreprises accompagnées</p>
          </div>
          <div>
            <p className="block text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl mb-2">
              <span ref={counter3Ref}>98</span>
              <span>%</span>
            </p>
            <p className="text-muted-foreground">Renouvellent leur confiance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
