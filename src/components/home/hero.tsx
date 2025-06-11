"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";

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
    gsap.to("h1", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
    });
  });

  return (
    <section id="hero" className="relative bg-secondary">
      <div className="main-wrapper container-md h-screen flex flex-col justify-center items-center text-center">
        <div className="w-px bg-[#FF98F1] h-full grow"></div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-2 bg-[#FF98F1] w-fit font-mono font-semibold uppercase text-sm mb-4">
            Agence de croissance digitale
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-6xl mb-12">
            Gagnez du temps, structurez vos actions, développez votre impact.
          </h1>
          <Button size="lg">Estimer mon projet</Button>
        </div>
        <div className="w-px bg-blue-600 h-full grow"></div>
      </div>

      <div className="mask-wrapper absolute bottom-0 flex items-end h-full w-full">
        <div className="mask-col bg-primary h-0 w-full"></div>
        <div className="mask-col bg-primary h-0 w-full"></div>
        <div className="mask-col bg-primary h-0 w-full"></div>
        <div className="mask-col bg-primary h-0 w-full"></div>
      </div>
    </section>
  );
}
