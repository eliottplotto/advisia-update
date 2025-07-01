"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletHeadline } from "../ui/bullet-headline";
import { RevealText } from "../RevealText";
import { Button } from "../ui/button";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.to(".mask-col", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      height: "50%",
      stagger: 0.1,
    });
    gsap.to("#hero", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      opacity: 1,
    });
  });

  return (
    <section
      id="hero"
      data-theme="dark"
      className="relative bg-[#DFF24B] bg-ascii-3"
    >
      <div className="global-padding min-h-[80dvh] flex flex-col justify-center items-center text-center">
        <BulletHeadline as="p">Agence de croissance digitale</BulletHeadline>

        <RevealText
          as="h1"
          className="text-4xl md:text-6xl lg:text-7xl mt-10 uppercase"
        >
          Gagnez du temps,
          <br />
          structurez vos actions,
          <br />
          développez votre impact.
        </RevealText>
        <div className="flex justify-center items-center gap-x-1 gap-y-2 flex-wrap mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Demander une estimation gratuite</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/prendre-rendez-vous">Réserver un appel</Link>
          </Button>
        </div>
      </div>

      <div className="hidden mask-wrapper absolute bottom-0 flex items-end h-full w-full">
        <div className="mask-col bg-primary h-0 w-full"></div>
        <div className="mask-col bg-primary h-0 w-full"></div>
        <div className="mask-col bg-primary h-0 w-full"></div>
        <div className="mask-col bg-primary h-0 w-full"></div>
      </div>
    </section>
  );
}
