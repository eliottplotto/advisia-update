"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import Link from "next/link";
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
    <section data-theme="dark" className="dark bg-background text-foreground">
      <div className="main-layout">
        <div className="global-padding">
          <BulletHeadline as="h2">L&apos;agence</BulletHeadline>
        </div>
        <div className="lg:border-x">
          <div className="global-padding 2xl:w-[50%]">
            <RevealText as="h3" className="text-xl md:text-4xl mt-32 lg:mt-64">
              Advisia est une agence de croissance spécialisée en web, marketing
              digital et intelligence artificielle.
            </RevealText>
          </div>
          <div className="global-padding xl:max-w-[50%] ml-auto mr-0">
            <RevealText
              as="p"
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Nous concevons des sites performants, des stratégies
              d&apos;acquisition rentables, et des systèmes intelligents qui
              automatisent vos tâches les plus chronophages.
            </RevealText>
            <Button variant="secondary" asChild className="mt-8">
              <Link href="/agence">À propos</Link>
            </Button>
          </div>
          <div
            ref={containerRef}
            className="grid grid-cols-2 xl:grid-cols-4 border-t"
          >
            <div className="p-4 md:p-6 flex flex-col justify-between aspect-square xl:aspect-auto">
              <p className="block text-5xl md:text-6xl 2xl:text-7xl mb-2">
                +<span ref={counter1Ref}>10</span>
              </p>

              <p className="text-sm font-mono text-muted-foreground uppercase ">
                Entreprises
                <br />
                accompagnées
              </p>
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-between aspect-square xl:aspect-auto border-l">
              <p className="block text-5xl md:text-6xl 2xl:text-7xl mb-2">
                <span ref={counter2Ref}>100</span>
                <span>%</span>
              </p>
              <p className="text-sm font-mono text-muted-foreground uppercase ">
                Entreprises
                <br />
                satisfaites
              </p>
            </div>
            <div className=" p-4 md:p-6 flex flex-col justify-between aspect-square xl:aspect-auto xl:border-l border-t xl:border-t-0">
              <p
                ref={counter3Ref}
                className="block text-5xl md:text-6xl 2xl:text-7xl mb-2"
              >
                5
              </p>

              <p className="text-sm font-mono text-muted-foreground uppercase ">
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
              className="object-cover w-full aspect-square xl:aspect-3/4"
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
