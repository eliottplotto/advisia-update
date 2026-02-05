"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  RiAddFill,
  RiCornerDownRightLine,
  RiHeartFill,
} from "@remixicon/react";
import Link from "next/link";
import { RevealText } from "../reveal-text";
import RotatingText from "@/components/RotatingText";

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

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".hero-card");

      gsap.from(cards, {
        delay: 0.5,
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <section
      id="hero"
      className="relative z-0 dark bg-background text-foreground overflow-hidden bg-[url('/background-logo-dark.svg')] bg-cover bg-center"
    >
      <div className="lg:h-[90dvh]">
        <div className="relative container-md global-padding-x mt-16 lg:mt-0 py-16 flex items-end justify-center lg:justify-start h-full text-center lg:text-left">
          <div
            ref={container}
            className="max-w-2xl xl:max-w-4xl flex flex-col items-center lg:items-start"
          >
            {/* --- BLOC PROFILS --- */}
            <div className="bg-background rounded-xs border pr-2 pl-1 py-1 mb-0 flex items-center gap-2">
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

            {/* --- TITRE PRINCIPAL OPTIMISÉ --- */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-8 font-medium leading-tight">
              {/* Partie 1 : Le texte normal */}
              <RevealText>
                Créons des solutions digitales sur‑mesures pour
              </RevealText>
              
              {/* Partie 2 : Le "Glue Container" qui force "votre" et le cadre à rester ensemble */}
              <div className="inline-flex items-center gap-x-2 md:gap-x-3 align-middle mt-2 lg:mt-0">
                <span>votre</span>
                <RotatingText
                  texts={['EXPANSION', 'PERFORMANCE', 'VISIBILITÉ', 'NOTORIÉTÉ', 'RÉUSSITE', 'AVENIR', 'BUSINESS']}
                  mainClassName="text-highlight flex items-center justify-center overflow-hidden pb-1 h-[1.2em]"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </div>
            </h1>

            <p className="text-muted-foreground text-lg mt-8 max-w-xl">
              Advisia est une agence de croissance spécialisée en intelligence
              artificielle, développement web et marketing digital.
            </p>

            <div className="flex lg:hidden items-center justify-center gap-x-1 gap-y-2 flex-wrap mt-8">
              <Button asChild size={"lg"}>
                <Link href="/contact">
                  J&apos;estime mon projet <RiCornerDownRightLine />
                </Link>
              </Button>
              <Button variant="secondary" size={"lg"} asChild>
                <Link href="/prendre-rendez-vous">Réserver un appel</Link>
              </Button>
            </div>

            {/* --- CARDS FLOTTANTES --- */}
            {/* Card 2*/}
            <div className="hidden lg:block hero-card absolute bottom-16 right-64 bg-background border p-2 select-none rounded-md rotate-2">
              <p className="hidden 2xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /automatisations.svg
              </p>
              <div className="relative w-24 xl:w-32 2xl:w-44 aspect-square">
                <Image
                  src={"/home/hero-automatisations.svg"}
                  alt={"Automatisations"}
                  fill
                  className="object-cover rounded-xs"
                  draggable="false"
                ></Image>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hidden lg:block hero-card absolute bottom-32 right-32 bg-background border p-2 select-none rounded-md -rotate-1">
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
                  <div className="w-fit ml-auto mr-0 px-1 bg-secondary font-mono text-xs text-muted-foreground flex items-center gap-1 rounded-xs rotate-1">
                    <RiAddFill size={12} />
                    suivre
                  </div>
                </div>
              </div>

              <div className="relative w-24 xl:w-32 2xl:w-44 aspect-square">
                <Image
                  src={"/home/site-mockup.jpg"}
                  alt={"Création site web"}
                  fill
                  className="object-cover rounded-xs"
                  draggable="false"
                ></Image>
                <RiHeartFill className="hidden 2xl:block absolute bottom-3 right-3" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="hidden lg:block hero-card absolute bottom-64 right-8 bg-background border p-2 select-none rounded-md">
              <p className="hidden 2xl:block text-left mb-2 font-mono text-xs text-muted-foreground">
                /mes-halles.webp
              </p>
              <div className="relative w-24 xl:w-32 2xl:w-44 aspect-square">
                <Image
                  src={"/cas-clients/mes-halles/meshalles-app-mockup.jpg"}
                  alt={"Application Mes Halles"}
                  fill
                  className="object-cover rounded-xs"
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