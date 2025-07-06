"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    <section className="bg-secondary bg-ascii-3">
      <div className="container-md">
        <div className="global-padding-x py-16 max-w-5xl flex flex-col gap-16 items-center mx-auto">
          <Image
            src={"/home/advisia-team.png"}
            alt={"Collaborateurs Advisia"}
            width={684}
            height={256}
            className=""
          />
          <RevealText as="h3" className="text-xl md:text-4xl text-center">
            Nous concevons des sites{" "}
            <span className="bg-ad-1">performants</span>, des stratégies
            d&apos;acquisition <span className="bg-ad-1">rentables</span>, et
            des systèmes <span className="bg-ad-1">intelligents</span> qui
            automatisent vos tâches les plus chronophages.
          </RevealText>
          <div
            ref={containerRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-x-1 gap-y-2 lg:gap-2 w-full"
          >
            <div className="bg-background border-b border-b-4 border-blue-600 p-4 md:p-6 flex flex-col justify-between gap-4 lg:gap-12">
              <p className="block text-5xl md:text-6xl 2xl:text-7xl mb-2">
                +<span ref={counter1Ref}>10</span>
              </p>

              <p className="text-sm font-mono uppercase">
                Entreprises
                <br />
                accompagnées
              </p>
            </div>
            <div className="bg-background border-b border-b-4 border-blue-600 p-4 md:p-6 flex flex-col justify-between gap-4 lg:gap-12">
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
            <div className="bg-background border-b border-b-4 border-blue-600 p-4 md:p-6 flex flex-col justify-between gap-4 lg:gap-12">
              <p
                ref={counter3Ref}
                className="block text-5xl md:text-6xl 2xl:text-7xl mb-2"
              >
                5
              </p>

              <p className="text-sm font-mono uppercase">
                Domaines
                <br />
                d&apos;expertises
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
