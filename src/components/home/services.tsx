import Link from "next/link";
import { BulletHeadline } from "../ui/bullet-headline";
import { RevealText } from "../RevealText";
import { RiArrowRightFill } from "@remixicon/react";

export default function Services() {
  const services = [
    {
      title: "IA & Automatisation",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/services/automatisations-ia",
    },
    {
      title: "Site Web",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/services/site-web",
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
    <section data-theme="light">
      <div className="main-layout">
        <div className="global-padding">
          <BulletHeadline as="p">Services</BulletHeadline>
        </div>
        <div className="global-padding lg:border-x">
          <RevealText
            as="h2"
            className="text-4xl md:text-6xl xl:text-7xl max-w-4xl mt-16 md:mt-32 lg:mt-64"
          >
            Développer <span className="underline">tout le potentiel</span> de
            votre activité.
          </RevealText>
        </div>
      </div>
      <div className="main-layout">
        <div></div>
        <ul className="lg:border-x border-t sm:pb-16 lg:pb-32">
          {services.map((service, index) => (
            <li
              key={index}
              className="group text-foreground relative border-b overflow-hidden bg-background"
            >
              <div className="absolute z-0 left-0 top-full group-hover:top-0 bg-neutral-100 w-full h-full transition-top ease-(--my-ease) duration-400"></div>
              <div className="hidden sm:block absolute z-1 left-0 top-0 bg-blue-600 w-2 group-hover:w-24 h-full transition-width ease-(--my-ease) duration-400"></div>

              <Link
                href={service.link}
                className="relative z-1 grid grid-cols-1 sm:grid-cols-2"
              >
                <div className="flex global-padding">
                  <p className="font-mono text-sm text-muted-foreground sm:group-hover:text-background">
                    0{index + 1}
                  </p>
                  <div className="grow flex items-center justify-end sm:justify-center">
                    <img
                      src="/sample.svg"
                      alt="service"
                      className="w-24 h-24 sm:w-32 sm:h-32 group-hover:translate-x-8 transition-transform ease-(--my-ease) duration-400"
                    />
                  </div>
                </div>
                <div className="global-padding flex flex-col items-start sm:items-end gap-4">
                  <div className="bg-primary h-8 w-8 flex items-center justify-center">
                    <RiArrowRightFill className="text-background group-hover:-rotate-45 transition-transform ease-(--my-ease) duration-200" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl lg:text-3xl">{service.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </section>
  );
}
