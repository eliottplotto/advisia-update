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
          textContent: "20",
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
          textContent: "9",
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
    <section className="bg-background">
      <div className="container-md">
        <div className="global-padding-x py-8 lg:py-16 space-y-2 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-8 lg:gap-2">
            <h3 className="text-center lg:text-left text-2xl md:text-4xl lg:mr-24 lg:py-8">
              Nous voulons rendre accessibles les bénéfices de l’IA et du
              digital, quel que soit votre secteur ou votre niveau de maturité
              numérique.
            </h3>
            <Image
              src={"/equipe-advisia-2.jpg"}
              alt={"Collaborateurs Advisia"}
              width={684}
              height={256}
              className="rounded-lg w-full"
            />
          </div>

          <div
            ref={containerRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-x-1 gap-y-2 lg:gap-2 w-full text-center lg:text-left"
          >
            <div className="bg-secondary p-4 md:p-6 flex flex-col justify-between gap-4 lg:gap-12 rounded-lg border">
              <p className="block text-5xl md:text-6xl 2xl:text-7xl mb-2">
                +<span ref={counter1Ref}>20</span>
              </p>

              <p className="text-sm font-mono uppercase">
                Entreprises
                <br />
                accompagnées
              </p>
            </div>
            <div className="bg-secondary p-4 md:p-6 flex flex-col justify-between gap-4 lg:gap-12 rounded-lg border">
              <p className="block text-5xl md:text-6xl 2xl:text-7xl mb-2">
                <span ref={counter2Ref}>100</span>
                <span>%</span>
              </p>
              <p className="text-sm font-mono uppercase">
                Entreprises
                <br />
                satisfaites
              </p>
            </div>
            <div className="bg-secondary p-4 md:p-6 flex flex-col justify-between gap-4 lg:gap-12 rounded-lg border">
              <p
                ref={counter3Ref}
                className="block text-5xl md:text-6xl 2xl:text-7xl mb-2"
              >
                9
              </p>

              <p className="text-sm font-mono uppercase">
                Prix et
                <br />
                cerifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
