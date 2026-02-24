import React from "react";
import Footer from "@/components/footer";
import {
  RiCornerDownRightLine,
  RiSearchEyeFill,
  RiRobot3Fill,
  RiPlugFill,
  RiHandHeartFill,
} from "@remixicon/react";
import Solutions from "@/components/services/automatisations-ia/solutions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import { RevealText } from "@/components/reveal-text";
import { LeaderSecteur } from "@/components/services/automatisations-ia/leader-secteur";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";

export const metadata = {
  title: "Agents IA & Automatisation pour PME | Agence Advisia",
  description:
    "Agents IA sur mesure pour automatiser vos tâches, connecter vos outils et fiabiliser les processus. Temps gagné, coûts réduits, décisions mieux informées.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Agents IA & Automatisation pour PME | Agence Advisia",
    description:
      "Agents IA sur mesure pour automatiser vos tâches, connecter vos outils et fiabiliser les processus. Temps gagné, coûts réduits, décisions mieux informées.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

const SERVICE_WAYPOINTS = [
  { x: 50, y: 0 },
  { x: 70, y: 0.10 },
  { x: 30, y: 0.25 },
  { x: 70, y: 0.40 },
  { x: 30, y: 0.55 },
  { x: 70, y: 0.70 },
  { x: 30, y: 0.85 },
  { x: 50, y: 1.0 },
];

const SERVICE_DOT_FRACTIONS = [0, 0.12, 0.25, 0.38, 0.52, 0.65, 0.78, 0.92, 1.0];

export default function AutomatisationsIA() {
  const processSteps = [
    {
      title: "Analyse et audit",
      subtitle:
        "On analyse vos flux existants pour repérer les tâches chronophages, sources d'erreurs ou à faible valeur.",
      icon: <RiSearchEyeFill size={40} />,
    },
    {
      title: "Développement de l'agent ou des automatisations",
      subtitle:
        "On conçoit une solution sur mesure (agent IA ou automatisation) alignée avec vos objectifs métiers.",
      icon: <RiRobot3Fill size={40} />,
    },
    {
      title: "Intégration aux outils métiers (CRM, agenda, mail...)",
      subtitle:
        "Votre nouveau système s'interface directement avec votre stack sans perturber votre organisation.",
      icon: <RiPlugFill size={40} />,
    },
    {
      title: "Formation pour garantir l'autonomie",
      subtitle:
        "On forme vos équipes à l'utilisation, la gestion et l'évolution des outils pour rester autonome dans le temps.",
      icon: <RiHandHeartFill size={40} />,
    },
  ];

  const questions = [
    {
      id: "q1",
      question: "Est-ce qu'un agent IA est facile à utiliser au quotidien ?",
      answer:
        "Oui, complètement. L'agent fonctionne comme une interface de discussion simple, intégrée à vos outils (mail, Slack, interface web, etc.). Pas besoin de formation technique : si vous savez envoyer un message, vous savez l'utiliser. En plus, on vous forme dès le départ, on vous remet une documentation claire, et on reste disponibles en support à tout moment.",
    },
    {
      id: "q2",
      question:
        "Combien de temps faut-il pour créer et mettre en place un agent IA ?",
      answer:
        "En moyenne, un agent IA est prêt en 2 à 4 semaines. On commence par un échange pour bien comprendre vos besoins, on configure ses connexions (documents, outils internes…) puis on le teste ensemble avant mise en service. C'est rapide, fluide, et on s'occupe de tout.",
    },
    {
      id: "q3",
      question: "Est-ce que je garde le contrôle sur ce que fait l'IA ?",
      answer:
        "Oui, toujours. Vous définissez les rôles, les accès, les sujets qu'il peut traiter. Vous pouvez consulter son historique, ajuster ses réponses, et le faire évoluer si vos besoins changent. C'est votre outil, sur mesure, sous contrôle.",
    },
    {
      id: "q4",
      question:
        "Est-ce que l'IA peut vraiment s'adapter à mon métier ou à mes outils ?",
      answer:
        "Oui, c'est justement l'intérêt d'un agent IA métier. Il est conçu pour comprendre votre vocabulaire, vos documents internes, vos process. On le connecte à vos outils existants (CRM, Drive, Notion, etc.), et il apprend à répondre de manière pertinente dans votre contexte.",
    },
    {
      id: "q5",
      question:
        "Faut-il changer mon organisation pour mettre en place une solution IA ?",
      answer:
        "Pas du tout. On vient se greffer à votre fonctionnement actuel. L'agent IA s'adapte à vos outils et vos méthodes, sans tout bouleverser. Et s'il peut vous faire gagner du temps sur certains process, on vous conseille sur les évolutions possibles, à votre rythme.",
    },
  ];

  return (
    <>
      <main className="relative">
        <VerticalFlowLine waypoints={SERVICE_WAYPOINTS} dotFractions={SERVICE_DOT_FRACTIONS} />
        <section className="w-full overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex flex-col justify-center gap-6 w-full">
              <BulletHeadline as="p">Automatisations & IA</BulletHeadline>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl">
                <RevealText>
                  Vos équipes perdent 10h par semaine sur des tâches que l&apos;IA peut faire.
                </RevealText>
              </h1>

              <p className="max-w-xl text-muted-foreground">
                On conçoit des agents IA et des workflows automatisés qui
                éliminent le travail répétitif. Résultat : vos équipes se
                concentrent sur ce qui compte.
              </p>

              <div className="flex gap-8 items-center flex-wrap">
                <Button size="lg" asChild className="w-max">
                  <Link href="/prendre-rendez-vous">
                    Contacter un expert IA <RiCornerDownRightLine />
                  </Link>
                </Button>
              </div>
              <div className="flex gap-4 lg:gap-8 flex-wrap">
                <div className="w-max">
                  <p className="text-2xl">40%</p>
                  <p className="text-sm ">Gain de productivité moyen</p>
                </div>
                <div className="w-max border-l pl-4 lg:pl-8">
                  <p className="text-2xl">+10h</p>
                  <p className="text-sm ">Gagnées par semaine</p>
                </div>
                <div className="hidden sm:block w-max border-l pl-4 lg:pl-8">
                  <p className="text-2xl">+15</p>
                  <p className="text-sm ">Workflows déployés</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LogosConfiance />
        <LeaderSecteur
          heading="L'IA adaptée à votre secteur."
          subheading="Des agents IA conçus pour votre métier, déployés en quelques jours."
          sections={[
            {
              image:
                "/services/ia-automatisations/secteur-service-client-support.jpg",
              heading: "Service client & Support",
              description:
                "Chatbots qui répondent à 80% des demandes. Ticketing trié automatiquement. Réponses en 30 secondes au lieu de 24h.",
            },
            {
              image: "/services/ia-automatisations/secteur-ecommerce.jpg",
              heading: "E-commerce & Retail",
              description:
                "Relances panier automatiques, recommandations produits IA, gestion de stock prédictive. +25% de CA moyen.",
            },
            {
              image: "/services/ia-automatisations/secteur-immobilier.jpg",
              heading: "Immobilier",
              description:
                "Qualification de leads automatique, matching acheteur-bien intelligent, suivi de dossier sans intervention.",
            },
            {
              image:
                "/services/ia-automatisations/secteur-banques-assurances.jpg",
              heading: "Banque / Assurance",
              description:
                "Détection de fraude en temps réel, automatisation KYC, assistants virtuels pour la gestion de compte.",
            },
            {
              image: "/services/ia-automatisations/secteur-communication.jpg",
              heading: "Communication",
              description:
                "Calendriers éditoriaux IA, génération de contenu multi-canal, segmentation audience automatique.",
            },
            {
              image:
                "/services/ia-automatisations/secteur-ressources-humaines.jpg",
              heading: "Ressources Humaines",
              description:
                "Tri de CV en 10 secondes, onboarding digitalisé, assistants RH pour les questions courantes.",
            },
          ]}
        />
        <Solutions />

        <Steps1 title="Notre méthodologie" steps={processSteps} />

        <FAQCenter title={"On répond à vos questions"} questions={questions} />

        <SectionCTAForm
          title={
            <>
              Prêts à lancer votre{" "}
              <span className="text-nowrap text-highlight">projet IA ?</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
