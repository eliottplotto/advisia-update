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
} from "@remixicon/react";
import Solutions from "@/components/services/automatisations-ia/solutions";
import { Layout70 } from "@/components/ui/sections/layout-70";
import { Header1 } from "@/components/ui/sections/header-1";

export default function AutomatisationsIA() {
  return (
    <>
      <main>
        <Header1
          bg="secondary"
          heading="Solutions IA et Automatisations"
          description="Nous créons des automatisations des agents IA sur-mesure qui travaillent pour vous, 24/7."
          buttons={[{ title: "Contacter un expert IA" }]}
          image={{ src: "https://placehold.co/600x400", alt: "placeholder" }}
        />
        <Layout70
          dark={true}
          heading="Pourquoi intégrer l'IA à mon organisation ?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
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
        />
        <Solutions />
        <Layout302
          heading="Devenez le leader de votre secteur"
          subheading="Nos agents intelligents s'adaptent à vos enjeux métiers pour optimiser vos opérations, personnaliser l'expérience client et libérer du temps à forte valeur ajoutée."
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
              icon: <RiGraduationCapFill size={32} />,
              heading: "Éducation / Formation",
              description:
                "Tuteurs virtuels, correction automatique, génération de quiz, parcours personnalisés.",
            },
            {
              icon: <RiHeartFill size={32} />,
              heading: "Santé / Médical",
              description:
                "Agents de triage de symptômes, rappels de rendez-vous, support administratif, transcription médicale automatisée.",
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
          bg="secondary"
          layout="imgLeft"
          description="Avec des expériences concrètes d'e-merchandising, d'e-commerce et la maîtrise d'agents IA et de workflows intelligents, Eliott crée des systèmes qui fluidifient les opérations et génèrent de vrais gains en termes de couts, de performance et de temps."
          buttons={[{ title: "Démarrer la discussion" }]}
          image={{ src: "/eliott-plotto.jpeg", alt: "Eliott Plotto" }}
          legend={{ title: "Eliott Plotto", subtitle: "Architecte IA" }}
        />
      </main>
      <Footer />
    </>
  );
}
