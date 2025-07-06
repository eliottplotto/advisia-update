import React from "react";
import Footer from "@/components/footer";
import { Layout302 } from "@/components/ui/sections/layout-302";
import {
  RiCustomerService2Fill,
  RiHome9Fill,
  RiBankFill,
  RiMegaphoneFill,
  RiTeamFill,
  RiShoppingCartFill,
  RiArrowRightFill,
  RiSearch2Fill,
  RiGitBranchFill,
  RiLineChartFill,
} from "@remixicon/react";
import Solutions from "@/components/services/automatisations-ia/solutions";
import { Header1 } from "@/components/ui/sections/header-1";
import { RevealText } from "@/components/RevealText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import FAQ from "@/components/services/automatisations-ia/faq";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";

export default function AutomatisationsIA() {
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
        <section className="dark bg-background text-white bg-ascii-4">
          <div className="container-md pt-[95px]">
            <div className="py-16 flex justify-center items-center">
              <div className="global-padding flex flex-col justify-end items-center gap-6 text-center">
                <div>
                  <BulletHeadline as="p" className="justify-center">
                    Automatisations & IA
                  </BulletHeadline>
                  <RevealText
                    as="h1"
                    className="text-4xl md:text-6xl xl:text-7xl mt-10 uppercase max-w-4xl"
                  >
                    <span className="text-nowrap">Agence IA : </span>
                    Prenez une longueur d'avance.
                  </RevealText>
                </div>

                <p className="max-w-xl text-muted-foreground">
                  Nous créons des automatisations et des agents IA sur-mesure
                  qui travaillent pour vous, 24/7.
                </p>
                <Button size="lg" asChild className="w-max mb-8">
                  <Link href="/contact">
                    Contacter un expert IA <RiArrowRightFill />
                  </Link>
                </Button>
                <div className="flex gap-4 lg:gap-8 wrap">
                  <div className="w-max">
                    <p className="text-2xl">40%</p>
                    <p className="text-sm ">Gain de productivité moyen</p>
                  </div>
                  <div className="w-max border-l border-foreground pl-4 lg:pl-8">
                    <p className="text-2xl">100%</p>
                    <p className="text-sm ">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Solutions />
        <Layout302
          heading="Devenez le leader de votre secteur"
          subheading="Nos agents intelligents s'adaptent à vos enjeux métiers pour optimiser vos opérations, personnaliser l'expérience client et libérer du temps."
          sections={[
            {
              icon: <RiCustomerService2Fill size={32} />,
              heading: "Service client & Support",
              description:
                "Agents conversationnels, assistants vocaux, ticketing automatisé, tri des demandes, réponses contextualisées.",
            },
            {
              icon: <RiShoppingCartFill size={32} />,
              heading: "E-commerce & Retail",
              description:
                "Recommandations produits, assistants d'achat, gestion des stocks, relances paniers abandonnés, chatbots de prévente.",
            },
            {
              icon: <RiHome9Fill size={32} />,
              heading: "Immobilier",
              description:
                "Agents conversationnels, qualification des leads, matching acheteurs-biens, suivi de dossiers automatisé.",
            },
            {
              icon: <RiBankFill size={32} />,
              heading: "Banque / Assurance",
              description:
                "Assistants virtuels pour la gestion de compte, simulation de crédit, détection de fraude, automatisation des tâches administratives.",
            },
            {
              icon: <RiMegaphoneFill size={32} />,
              heading: "Communication",
              description:
                "Génération de contenu, segmentation automatique, agents de réponse en temps réel, campagnes multi-canaux automatisées.",
            },
            {
              icon: <RiTeamFill size={32} />,
              heading: "Ressources Humaines",
              description:
                "Tri automatisé de CV, agents de préqualification, onboarding digitalisé, assistants RH internes.",
            },
          ]}
        />

        <Steps1
          title="Notre méthodologie"
          subtitle="Une approche structurée et collaborative qui combine expertise technique, créativité et vision stratégique. Notre méthode s'adapte à la taille de votre entreprise et à l'organisation de vos équipes."
          steps={processSteps}
        />

        <Header1
          heading="Architecte IA & prompt engineers expert"
          dark={false}
          layout="imgLeft"
          description="Avec des expériences concrètes d'e-merchandising, d'e-commerce et la maîtrise d'agents IA et de workflows intelligents, Eliott crée des systèmes qui fluidifient les opérations et génèrent de vrais gains en termes de couts, de performance et de temps."
          buttons={[{ title: "Planifier un appel" }]}
          image={{ src: "/eliott-plotto.jpeg", alt: "Eliott Plotto" }}
          legend={{ title: "Eliott Plotto", subtitle: "Architecte IA" }}
        />
        <div className="h-1 bg-primary"></div>
        <FAQ />

        <SectionCTAForm />
      </main>
      <Footer />
    </>
  );
}
