import Link from "next/link";
import { BulletHeadline } from "../ui/bullet-headline";
import { Button } from "../ui/button";
import { RiArrowRightUpLine, RiCornerDownRightLine } from "@remixicon/react";
import { RevealText } from "../reveal-text";

import ShinyText from "@/components/ShinyText";

export default function Services() {
  const services = [
    {
      title: (
        <ShinyText
  text="IA & Automatisation"
  speed={3}
  className="font-medium"
/>
      ),
      link: "/services/automatisations-ia",
    },
    {
      title: (
        <ShinyText
  text="Développement Web"
  speed={3}
  className="font-medium"
/>
      ),
      link: "/services/agence-web",
    },
    {
      title: (
        <ShinyText
  text="Product Design"
  speed={3}
  className="font-medium"
/>
      ),
      link: "/services/product-design",
    },
    {
      title: (
        <ShinyText
  text="Marketing Digital"
  speed={3}
  className="font-medium"
/>
      ),
      link: "/services/marketing-digital",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container-md">
        <div className="py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24 h-fit global-padding space-y-6">
            <BulletHeadline as="p">Nos expertises</BulletHeadline>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-xl">
              <RevealText>
                Développez tout le potentiel de votre activité.
              </RevealText>
            </h2>

            <p>
              Découvrez toutes nos expertises pour mettre en place et développer
              votre stratégie digitale. Du SEA à la web analyse en passant par
              le social média, nous vous accompagnons pour faire grandir votre
              entreprise quel que soit votre secteur.
            </p>
            <Button asChild size={"lg"} className="hidden lg:inline-flex">
              <Link href="/contact">
                J&apos;estime mon projet <RiCornerDownRightLine />
              </Link>
            </Button>
          </div>
          <ul className="global-padding-x space-y-2">
            {services.map((service, index) => (
              <li
                key={index}
                className="group bg-background relative overflow-hidden max-w-xl mr-0 ml-auto rounded-lg border hover:border-muted-foreground"
              >
                <Link
                  href={service.link}
                  className="block relative z-1 space-y-8 global-padding"
                >
                  <div className="flex justify-between">
                    <p className="font-mono text-sm text-muted-foreground group-hover:text-foreground">
                      0{index + 1}
                    </p>
                    <div className="relative w-12 h-12">
                      <div className="w-full h-full rounded-full bg-ad-1 group-hover:scale-140 transition-scale ease-(--my-ease) duration-200"></div>
                      <RiArrowRightUpLine className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-8 justify-between">
                    <div className="w-full">
                      <h3 className="text-xl lg:text-3xl">{service.title}</h3>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
