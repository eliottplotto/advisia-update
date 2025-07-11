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
  RiSearch2Fill,
  RiGitBranchFill,
  RiLineChartFill,
  RiCornerDownRightLine,
} from "@remixicon/react";
import Solutions from "@/components/services/automatisations-ia/solutions";
import { Header1 } from "@/components/ui/sections/header-1";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import { RevealText } from "@/components/reveal-text";

export default function AutomatisationsIA() {
  const processSteps = [
    {
      title: "Cartographie des process et des irritants",
      subtitle:
        "On analyse vos flux existants pour repérer les tâches chronophages, sources d’erreurs ou à faible valeur.",
      icon: RiSearch2Fill,
    },
    {
      title: "Développement de l’agent ou des automatisations",
      subtitle:
        "On conçoit une solution sur mesure (agent IA ou automatisation) alignée avec vos objectifs métiers.",
      icon: RiGitBranchFill,
    },
    {
      title: "Intégration aux outils métiers (CRM, agenda, mail...)",
      subtitle:
        "Votre nouveau système s’interface directement avec votre stack sans perturber votre organisation.",
      icon: RiLineChartFill,
    },
    {
      title: "Formation pour garantir l’autonomie",
      subtitle:
        "On forme vos équipes à l’utilisation, la gestion et l’évolution des outils pour rester autonome dans le temps.",
      icon: RiLineChartFill,
    },
  ];

  const questions = [
    {
      id: "q1",
      question: "Est-ce qu’un agent IA est facile à utiliser au quotidien ?",
      answer:
        "Oui, complètement. L’agent fonctionne comme une interface de discussion simple, intégrée à vos outils (mail, Slack, interface web, etc.). Pas besoin de formation technique : si vous savez envoyer un message, vous savez l’utiliser. En plus, on vous forme dès le départ, on vous remet une documentation claire, et on reste disponibles en support à tout moment.",
    },
    {
      id: "q2",
      question:
        "Combien de temps faut-il pour créer et mettre en place un agent IA ?",
      answer:
        "En moyenne, un agent IA est prêt en 2 à 4 semaines. On commence par un échange pour bien comprendre vos besoins, on configure ses connexions (documents, outils internes…) puis on le teste ensemble avant mise en service. C’est rapide, fluide, et on s’occupe de tout.",
    },
    {
      id: "q3",
      question: "Est-ce que je garde le contrôle sur ce que fait l’IA ?",
      answer:
        "Oui, toujours. Vous définissez les rôles, les accès, les sujets qu’il peut traiter. Vous pouvez consulter son historique, ajuster ses réponses, et le faire évoluer si vos besoins changent. C’est votre outil, sur mesure, sous contrôle.",
    },
    {
      id: "q4",
      question:
        "Est-ce que l’IA peut vraiment s’adapter à mon métier ou à mes outils ?",
      answer:
        "Oui, c’est justement l’intérêt d’un agent IA métier. Il est conçu pour comprendre votre vocabulaire, vos documents internes, vos process. On le connecte à vos outils existants (CRM, Drive, Notion, etc.), et il apprend à répondre de manière pertinente dans votre contexte.",
    },
    {
      id: "q5",
      question:
        "Faut-il changer mon organisation pour mettre en place une solution IA ?",
      answer:
        "Pas du tout. On vient se greffer à votre fonctionnement actuel. L’agent IA s’adapte à vos outils et vos méthodes, sans tout bouleverser. Et s’il peut vous faire gagner du temps sur certains process, on vous conseille sur les évolutions possibles, à votre rythme.",
    },
  ];

  return (
    <>
      <main>
        <section className="dark bg-background text-foreground">
          <div className="container-md pt-[95px]">
            <div className="py-16 flex justify-start items-end">
              <div className="global-padding flex flex-col justify-end gap-6">
                <BulletHeadline as="p">Automatisations & IA</BulletHeadline>
                <h1 className="text-4xl md:text-6xl xl:text-7xl max-w-4xl">
                  <RevealText>
                    Prenez une longueur d&apos;avance grâce à l&apos;IA
                  </RevealText>
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  Offrez vous des agents IA qui travaillent pour vous, 24/7.
                </p>

                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <Link href="/contact">
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
                    <p className="text-sm ">Agents IA en activité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LogosConfiance />
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
        <Solutions />

        <Steps1 title="Notre méthodologie" steps={processSteps} />

        <Header1
          heading="Architecte IA & prompt engineers expert"
          dark={false}
          layout="imgLeft"
          description="Avec des expériences concrètes d'e-merchandising, d'e-commerce et la maîtrise d'agents IA et de workflows intelligents, Eliott crée des systèmes qui fluidifient les opérations et génèrent de vrais gains en termes de couts, de performance et de temps."
          buttons={[
            {
              variant: "default",
              asChild: true,
              children: (
                <Link
                  href="/prendre-rendez-vous"
                  className="flex items-center gap-2"
                >
                  Planifier un appel
                  <RiCornerDownRightLine />
                </Link>
              ),
            },
          ]}
          image={{ src: "/eliott-plotto.jpeg", alt: "Eliott Plotto" }}
          legend={{ title: "Eliott Plotto", subtitle: "Architecte IA" }}
        />

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
