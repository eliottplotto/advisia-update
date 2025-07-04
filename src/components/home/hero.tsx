"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletHeadline } from "../ui/bullet-headline";
import { RevealText } from "../RevealText";
import { Button } from "../ui/button";
import Link from "next/link";
import { RiArrowRightFill } from "@remixicon/react";

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
      className="relative dark bg-background bg-ascii-4 text-foreground"
    >
      <div className="container-md pt-[95px] lg:h-screen">
        <div className="global-padding grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-end justify-end h-full gap-8">
          <div>
            <BulletHeadline as="p">
              Agence de croissance digitale
            </BulletHeadline>
            <RevealText
              as="h1"
              className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl mt-8 uppercase"
            >
              Développez <span className="text-nowrap">tout le potentiel</span>{" "}
              <span className="text-nowrap">de votre activité.</span>
            </RevealText>
          </div>

          <div>
            <RevealText as="h3" className="text-muted-foreground">
              Advisia est une agence de croissance spécialisée en web, marketing
              digital et intelligence artificielle.
            </RevealText>
            <div className="flex items-center gap-x-1 gap-y-2 flex-wrap mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  J&apos;estime mon projet <RiArrowRightFill />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/prendre-rendez-vous">Réserver un appel</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
