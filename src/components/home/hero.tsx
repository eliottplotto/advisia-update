"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import Image from "next/image";
import { Button } from "../ui/button";
import { RiAddFill, RiArrowRightFill, RiHeartFill } from "@remixicon/react";
import Link from "next/link";

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin);

export default function Hero() {
  const profils = [
    {
      alt: "Eliott P.",
      src: "/eliott-plotto.jpeg",
    },
    {
      alt: "Julien C.",
      src: "/julien.jpeg",
    },

    {
      alt: "Enzo F.",
      src: "/pp1.jpg",
    },
  ];

  useGSAP(() => {
    Draggable.create(".hero-card", {
      bounds: "#hero",
      inertia: true,
    });
  });

  return (
    <section
      id="hero"
      className="relative z-0 dark bg-background bg-ascii-4 text-foreground overflow-hidden"
    >
      <div className="h-[90dvh] lg:h-screen">
        <div className="global-padding flex justify-center items-center h-full text-center">
          <div className="relative max-w-2xl xl:max-w-3xl flex flex-col justify-center items-center">
            <div className="bg-background border p-2 mb-0 flex items-center gap-2">
              <div>
                {profils.map((profil, index) => (
                  <img
                    key={index}
                    src={profil.src}
                    alt={profil.alt}
                    className="inline-block not-first:-ml-2 w-6 w-6 rounded-full"
                  />
                ))}
              </div>

              <p className="text-sm font-mono uppercase ">
                +10 clients heureux
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl mt-8 uppercase">
              Développez <span className="text-nowrap">tout le potentiel</span>{" "}
              <span className="text-nowrap">de votre activité.</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-xl">
              Advisia est une agence de croissance spécialisée en web, marketing
              digital et intelligence artificielle.
            </p>
            <div className="flex lg:hidden items-center justify-center gap-x-1 gap-y-2 flex-wrap mt-8">
              <Button asChild size={"lg"}>
                <Link href="/contact">
                  J&apos;estime mon projet <RiArrowRightFill />
                </Link>
              </Button>
              <Button variant="outline" size={"lg"} asChild>
                <Link href="/prendre-rendez-vous">Réserver un appel</Link>
              </Button>
            </div>

            {/* Cards */}
            {/* Card 1*/}
            <div className="hidden lg:block hero-card absolute bg-background border p-2 select-none -top-32 right-[100%]">
              <p className="hidden xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /mes-halles.webp
              </p>
              <div className="relative w-24 lg:w-32 xl:w-44 aspect-square">
                <Image
                  src={"/placeholder-2.jpg"}
                  alt={"placeholder"}
                  fill
                  className="object-cover"
                  draggable="false"
                ></Image>
              </div>
            </div>
            {/* Card 2*/}
            <div className="hidden lg:block hero-card absolute top-0 right-[120%] bg-background border p-2 select-none">
              <p className="hidden xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /automatisations.svg
              </p>
              <div className="relative w-24 lg:w-32 xl:w-44 aspect-square">
                <Image
                  src={"/home/hero-automatisations.svg"}
                  alt={"Automatisations"}
                  fill
                  className="object-cover"
                  draggable="false"
                ></Image>
              </div>
            </div>
            {/* Card 3 */}
            <div className="hidden lg:block hero-card absolute -bottom-0 left-[120%] bg-background border p-2 select-none">
              <div className="hidden xl:flex items-center gap-2 mb-2">
                <Image
                  src={"/home/advisia-icon.svg"}
                  alt={"Icône Advisia"}
                  draggable="false"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-left font-mono text-xs text-muted-foreground">
                  Advisia
                </p>
                <div className="grow">
                  <div className="w-fit ml-auto mr-0 px-1 bg-secondary font-mono text-xs text-muted-foreground flex items-center gap-1">
                    <RiAddFill size={12} />
                    suivre
                  </div>
                </div>
              </div>

              <div className="relative w-24 lg:w-32 xl:w-44 aspect-square">
                <Image
                  src={"/placeholder-2.jpg"}
                  alt={"placeholder"}
                  fill
                  className="object-cover"
                  draggable="false"
                ></Image>
                <RiHeartFill className="hidden xl:block absolute bottom-3 right-3" />
              </div>
            </div>
            {/* Flottant 4 */}
            <div className="hidden lg:block hero-card absolute -bottom-40 left-[100%] bg-background border p-2 select-none">
              <p className="hidden xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /mes-halles.webp
              </p>
              <div className="relative w-24 lg:w-32 xl:w-44 aspect-square">
                <Image
                  src={"/placeholder-2.jpg"}
                  alt={"placeholder"}
                  fill
                  className="object-cover"
                  draggable="false"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
