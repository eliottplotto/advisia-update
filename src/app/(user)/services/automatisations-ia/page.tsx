import React from "react";
import Footer from "@/components/footer";
import { Layout302 } from "@/components/ui/sections/layout-302";
import {
  RiCustomerService2Fill,
  RiHome9Fill,
  RiBankFill,
  RiGraduationCapFill,
  RiHeartFill,
  RiMegaphoneFill,
  RiTeamFill,
  RiShoppingCartFill,
  RiArrowRightFill,
  RiCheckFill,
} from "@remixicon/react";
import Solutions from "@/components/services/automatisations-ia/solutions";
import { Layout70 } from "@/components/ui/sections/layout-70";
import { Header1 } from "@/components/ui/sections/header-1";
import SectionCTA from "@/components/section-cta";
import { RevealText } from "@/components/RevealText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import LogosSlider from "@/components/logos-slider";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/services/automatisations-ia/faq";
import SectionCTAForm from "@/components/section-cta-form";

export default function AutomatisationsIA() {
  return (
    <>
      <main>
        <section className="bg-[#DFF24B] bg-ascii-3">
          <div className="main-layout min-h-[80dvh]">
            <div></div>
            <div className="h-full flex justify-center items-center">
              <div className="global-padding flex flex-col justify-end items-center gap-6 text-center">
                <div>
                  <BulletHeadline as="p" className="justify-center">
                    Automatisations & IA
                  </BulletHeadline>
                  <RevealText
                    as="h1"
                    className="text-4xl md:text-6xl xl:text-7xl mt-10 uppercase max-w-4xl"
                  >
                    Transformez votre entreprise avec l'IA
                  </RevealText>
                </div>

                <p className="max-w-xl ">
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
                  <div className="w-max border-l border-white/50 pl-4 lg:pl-8">
                    <p className="text-2xl">100%</p>
                    <p className="text-sm ">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <Solutions />
        {/* <Layout70
          dark={false}
          heading="Pourquoi intégrer l'IA à mon organisation ?"
          description="L'intelligence artificielle n'est plus un luxe, c'est une nécessité pour rester compétitif dans l'économie moderne."
          list={[
            {
              icon: <RiHeartFill />,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            },
            {
              icon: <RiHeartFill />,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            },
            {
              icon: <RiHeartFill />,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            },
          ]}
        /> */}
        <div className="h-1 bg-primary"></div>

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
        <Header1
          heading="Architecte IA & prompt engineers expert"
          dark={true}
          layout="imgLeft"
          description="Avec des expériences concrètes d'e-merchandising, d'e-commerce et la maîtrise d'agents IA et de workflows intelligents, Eliott crée des systèmes qui fluidifient les opérations et génèrent de vrais gains en termes de couts, de performance et de temps."
          buttons={[{ title: "Planifier un appel" }]}
          image={{ src: "/eliott-plotto.jpeg", alt: "Eliott Plotto" }}
          legend={{ title: "Eliott Plotto", subtitle: "Architecte IA" }}
        />

        <FAQ />

        <SectionCTAForm />
      </main>
      <Footer />
    </>
  );
}
