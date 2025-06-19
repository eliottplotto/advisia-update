"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletHeadline } from "../ui/bullet-headline";
import { RevealText } from "../RevealText";

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
    <section id="hero" className="dark text-foreground relative bg-[#FF2803]">
      <div className="global-padding h-screen flex flex-col justify-end">
        <RevealText
          as="h1"
          className="text-4xl md:text-6xl lg:text-7xl mb-10 uppercase"
        >
          Gagnez du temps,
          <br />
          structurez vos actions,
          <br />
          développez votre impact.
        </RevealText>
        <BulletHeadline as="p">Agence de croissance digitale</BulletHeadline>
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
