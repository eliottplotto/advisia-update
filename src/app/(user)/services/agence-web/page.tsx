import React from "react";
import Footer from "@/components/footer";
import {
  RiArrowRightFill,
  RiSearch2Fill,
  RiGitBranchFill,
  RiLineChartFill,
} from "@remixicon/react";
import { Header1 } from "@/components/ui/sections/header-1";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import FAQ from "@/components/services/automatisations-ia/faq";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";
import LogosConfiance from "@/components/logos-confiance";
import ServicesWeb from "@/components/services/agence-web/services-web";
import FeaturesWeb from "@/components/services/agence-web/features-web";
import SectionCTASmall from "@/components/section-cta-small";

export default function SiteWeb() {
  const processSteps = [
    {
      title: "Audit & stratégie sur-mesure",
      subtitle:
        "On commence par une analyse approfondie de vos tâches répétitives, outils, flux de travail et points de friction. Ensuite, on élabore une stratégie claire : quelles automatisations mettre en place, avec quels outils, dans quel ordre et pour quel impact. L'objectif : maximiser le gain de temps et l'efficacité, sans alourdir votre organisation.",
      icon: RiSearch2Fill,
    },
    {
      title: "Mise en place des automatisations",
      subtitle:
        "Nous développons ou configurons les automatisations avec des solutions no-code/low-code (Make, Zapier, n8n) ou des scripts sur mesure. Chaque automatisation est testée, documentée, et intégrée proprement dans votre environnement existant.",
      icon: RiGitBranchFill,
    },
    {
      title: "Suivi et amélioration continue",
      subtitle:
        "Vous avez accès à un tableau de bord pour suivre les résultats et nous restons disponibles pour adapter les automatisations ou former vos équipes. L'objectif : que tout tourne efficacement, même sans nous.",
      icon: RiLineChartFill,
    },
  ];

  return (
    <>
      <main>
        <section className="dark bg-background text-white ad-pattern">
          <div className="container-md pt-[95px]">
            <div className="py-16 flex justify-start items-end">
              <div className="global-padding flex flex-col justify-end gap-6">
                <BulletHeadline as="p">Développment Web</BulletHeadline>
                <h1 className="text-4xl md:text-6xl xl:text-7xl uppercase max-w-4xl">
                  <span className="text-nowrap">Agence Web : </span>
                  Sites, eCommerce, App & Saas
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  Nous créons des automatisations et des agents IA sur-mesure
                  qui travaillent pour vous, 24/7.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <Link href="/contact">
                      Contacter un expert <RiArrowRightFill />
                    </Link>
                  </Button>
                  <div className="flex gap-4 lg:gap-8 wrap">
                    <div className="w-max">
                      <p className="text-2xl">+10</p>
                      <p className="text-sm ">Projets réalisés</p>
                    </div>
                    <div className="w-max border-l border-foreground pl-4 lg:pl-8">
                      <p className="text-2xl">100%</p>
                      <p className="text-sm ">Clients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LogosConfiance />

        <ServicesWeb />
        <FeaturesWeb />
        <SectionCTASmall />

        <Steps1
          title="Notre méthodologie"
          subtitle="Une approche structurée et collaborative qui combine expertise technique, créativité et vision stratégique. Notre méthode s'adapte à la taille de votre entreprise et à l'organisation de vos équipes."
          steps={processSteps}
        />

        <Header1
          heading="Designer UX et Développeur Web"
          dark={false}
          layout="imgLeft"
          description="Avec des expériences concrètes d'e-merchandising, d'e-commerce et la maîtrise d'agents IA et de workflows intelligents, Eliott crée des systèmes qui fluidifient les opérations et génèrent de vrais gains en termes de couts, de performance et de temps."
          buttons={[{ title: "Planifier un appel" }]}
          image={{
            src: "/services/agence-web/enzo-ferrer.webp",
            alt: "Enzo Ferrer",
          }}
          legend={{
            title: "Enzo Ferrer",
            subtitle: "Designer UX et Développeur Web",
          }}
        />
        <div className="h-1 bg-primary"></div>
        <FAQ />

        <SectionCTAForm />
      </main>
      <Footer />
    </>
  );
}
