"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletHeadline } from "../ui/bullet-headline";
import { RevealText } from "../RevealText";
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
          textContent: "10",
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
          textContent: "100",
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
          textContent: "5",
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
    <section className="bg-secondary">
      <div className="container-md">
        <div className="global-padding-x py-16 md:py-40 max-w-5xl flex flex-col items-center mx-auto">
          <BulletHeadline as="h2" className="mb-8">
            L&apos;agence
          </BulletHeadline>
          <RevealText as="h3" className="text-xl md:text-4xl text-center">
            Nous concevons des sites performants, des stratégies
            d&apos;acquisition rentables, et des systèmes intelligents qui
            automatisent vos tâches les plus chronophages.
          </RevealText>
        </div>
        <div
          ref={containerRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:pb-16"
        >
          <div className="bg-background p-4 md:p-6 flex flex-col justify-between aspect-square xl:aspect-auto">
            <p className="block text-5xl md:text-6xl 2xl:text-7xl mb-2">
              +<span ref={counter1Ref}>10</span>
            </p>

            <p className="text-sm font-mono uppercase text-muted-foreground">
              Entreprises
              <br />
              accompagnées
            </p>
          </div>
          <div className="bg-background p-4 md:p-6 flex flex-col justify-between aspect-square xl:aspect-auto">
            <p className="block text-5xl md:text-6xl 2xl:text-7xl mb-2">
              <span ref={counter2Ref}>100</span>
              <span>%</span>
            </p>
            <p className="text-sm font-mono uppercase text-muted-foreground">
              Entreprises
              <br />
              satisfaites
            </p>
          </div>
          <div className="bg-background p-4 md:p-6 flex flex-col justify-between aspect-square xl:aspect-auto">
            <p
              ref={counter3Ref}
              className="block text-5xl md:text-6xl 2xl:text-7xl mb-2"
            >
              5
            </p>

            <p className="text-sm font-mono uppercase text-muted-foreground">
              Domaines
              <br />
              d&apos;expertises
            </p>
          </div>
          <Image
            src="/equipe-advisia.jpg"
            width="300"
            height="400"
            alt="Equipe Advisia"
            className="object-cover w-full aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
