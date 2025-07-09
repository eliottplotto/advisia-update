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
      className="relative z-0 dark bg-background text-foreground overflow-hidden"
    >
      <div className="lg:h-[90dvh]">
        <div className="global-padding-x mt-16 lg:mt-0 py-16 flex justify-center items-center h-full text-center">
          <div className="relative max-w-2xl xl:max-w-4xl flex flex-col justify-center items-center">
            <div className="bg-background rounded-sm bg-secondary pr-2 pl-1 py-1 mb-0 flex items-center gap-2">
              <div className="flex items-center">
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
                +20 clients accompagnés
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl mt-8 ">
              Créons des solutions digitales sur‑mesures pour votre{" "}
              <span className="text-highlight">croissance</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-xl">
              Advisia est une agence de croissance spécialisée en intelligence
              artificielle, développement web et marketing digital.
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
            <div className="hidden lg:block hero-card absolute bg-background border p-2 select-none top-0 xl:-top-16 right-[105%] rounded-xs">
              <p className="hidden 2xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /mes-halles.webp
              </p>
              <div className="relative w-24 xl:w-32 2xl:w-44 aspect-square">
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
            <div className="hidden lg:block hero-card absolute top-16 xl:top-0 right-[120%] bg-background border p-2 select-none rounded-xs">
              <p className="hidden 2xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /automatisations.svg
              </p>
              <div className="relative w-24 xl:w-32 2xl:w-44 aspect-square">
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
            <div className="hidden lg:block hero-card absolute -bottom-0 left-[125%] bg-background border p-2 select-none rounded-xs">
              <div className="hidden 2xl:flex items-center gap-2 mb-2">
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

              <div className="relative w-24 xl:w-32 2xl:w-44 aspect-square">
                <Image
                  src={"/placeholder-2.jpg"}
                  alt={"placeholder"}
                  fill
                  className="object-cover"
                  draggable="false"
                ></Image>
                <RiHeartFill className="hidden 2xl:block absolute bottom-3 right-3" />
              </div>
            </div>
            {/* Flottant 4 */}
            <div className="hidden lg:block hero-card absolute -bottom-16 left-[105%] bg-background border p-2 select-none rounded-xs">
              <p className="hidden 2xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /mes-halles.webp
              </p>
              <div className="relative w-24 xl:w-32 2xl:w-44 aspect-square">
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
