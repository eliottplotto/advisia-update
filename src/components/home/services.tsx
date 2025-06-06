import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { RiArrowRightLine } from "@remixicon/react";

export default function Services() {
  return (
    <section className="relative lg:grid lg:grid-cols-2 bg-background">
      <div className="text-foreground container py-16">
        <div className="lg:sticky top-32">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">Nos expertises</h2>
        </div>
      </div>
      <ul className="border-l border-black">
        <li className=" relative sticky top-16 bg-background text-foreground p-4 pb-32 flex flex-col items-start gap-8 border-t border-black overflow-hidden">
          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-4xl lg:text-5xl">Marketing Digital</h3>
            <p className="max-w-xl text-muted-foreground">
              Découvrez toutes nos expertises pour mettre en place et développer
              votre stratégie digitale.
            </p>
          </div>
          <ul className="w-full">
            <li className="py-4 border-t">Agents IA sur-mesure</li>
            <li className="py-4 border-t">
              Automatisation des processus métier
            </li>
            <li className="py-4 border-t">Solutions d'analyse</li>
          </ul>
          <Button asChild>
            <Link href="/contact">
              En savoir plus
              <RiArrowRightLine />
            </Link>
          </Button>
          <Image
            src="/sample.svg"
            alt="image"
            width={400}
            height={400}
            className="absolute h-full top-[50%] right-0 translate-x-[25%] translate-y-[-50%]"
          />
        </li>
      </ul>
    </section>
  );
}
