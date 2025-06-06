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
    <section id="hero" className="relative">
      <div className="container h-screen flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-6xl mx-auto text-center py-8">
          Gagnez du temps, structurez vos actions, développez votre impact.
        </h1>
        <Button size="lg">Estimer mon projet</Button>
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
