import Link from "next/link";
import { BulletHeadline } from "../ui/bullet-headline";
import { Button } from "../ui/button";
import { RiCornerDownRightLine } from "@remixicon/react";
import { RevealText } from "../reveal-text";

export default function Services() {
  const services = [
    {
      title: "IA & Automatisation",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/services/automatisations-ia",
    },
    {
      title: "Développement Web",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/services/agence-web",
    },
    {
      title: "Product Design",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/services/product-design",
    },
    {
      title: "Marketing Digital",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/services/marketing-digital",
    },
    {
      title: "Identité de marque",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/services/identite-de-marque",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container-md">
        <div className="py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24 h-fit global-padding space-y-6">
            <BulletHeadline as="p">Nos expertises</BulletHeadline>

            <h2 className="text-4xl md:text-6xl max-w-xl">
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
                <div className="absolute z-1 left-0 bottom-0 bg-ad-1 w-full h-0 group-hover:h-full transition-width ease-(--my-ease) duration-400"></div>

                <Link
                  href={service.link}
                  className="block relative z-1 space-y-8 global-padding"
                >
                  <div className="flex justify-between">
                    <p className="font-mono text-sm text-muted-foreground group-hover:text-foreground">
                      0{index + 1}
                    </p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-8 justify-between">
                    <div className="w-full">
                      <h3 className="text-xl lg:text-3xl">{service.title}</h3>
                      <p className="mt-2 text-muted-foreground group-hover:text-foreground">
                        {service.description}
                      </p>
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
