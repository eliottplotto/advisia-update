import React from "react";
import Footer from "@/components/footer";
import {
  RiArrowRightFill,
  RiSearch2Fill,
  RiGitBranchFill,
  RiLineChartFill,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";
import LogosConfiance from "@/components/logos-confiance";
import ServicesWeb from "@/components/services/agence-web/services-web";
import FeaturesWeb from "@/components/services/agence-web/features-web";
import FAQCenter from "@/components/ui/sections/faq-center";
import { RevealText } from "@/components/reveal-text";

export default function IdentiteDeMarque() {
  const processSteps = [
    {
      title: "Stratégie & architecture",
      subtitle:
        "On définit ensemble les objectifs, les cibles, et l’arborescence idéale pour que votre site réponde à vos enjeux business.",
      icon: RiSearch2Fill,
    },
    {
      title: "Design",
      subtitle:
        "On conçoit une interface claire, esthétique et centrée sur vos utilisateurs pour offrir une expérience fluide et engageante.",
      icon: RiGitBranchFill,
    },
    {
      title: "Développement",
      subtitle:
        "Le site est développé sur-mesure avec des technologies modernes, pour des performances optimales et une base solide.",
      icon: RiLineChartFill,
    },
    {
      title: "Formation",
      subtitle:
        "Vous êtes formé·e à la gestion du site pour être autonome : modifier vos contenus, ajouter des pages, etc.",
      icon: RiLineChartFill,
    },
    {
      title: "Mise en ligne",
      subtitle:
        "Une fois validé, le site est mis en ligne, testé, sécurisé, et prêt à performer dès les premiers jours.",
      icon: RiLineChartFill,
    },
  ];

  const questions = [
    {
      id: "q1",
      question: "Combien coûte la création d’un site internet ?",
      answer:
        "Le prix dépend de plusieurs facteurs : le type de site (vitrine, e-commerce, sur-mesure), le nombre de pages, les fonctionnalités attendues ou encore le niveau de personnalisation. Chez Advisia, les projets démarrent autour de 1 000€ pour un site vitrine one-page. Un devis précis est toujours réalisé avant de démarrer.",
    },
    {
      id: "q2",
      question: "Quel est le délai pour créer un site web professionnel ?",
      answer:
        "En moyenne, un projet prend entre 4 et 8 semaines. Cela dépend de la complexité, du niveau de contenu fourni et de la réactivité des échanges. Nous établissons ensemble un calendrier réaliste dès le départ, avec des étapes claires.",
    },
    {
      id: "q3",
      question: "Pourquoi passer par une agence web ?",
      answer:
        "Une agence vous apporte une vision stratégique, un accompagnement global, et une exécution professionnelle. Vous gagnez du temps, évitez les erreurs coûteuses, et obtenez un résultat sur-mesure, fiable et évolutif.",
    },
    {
      id: "q4",
      question:
        "Quelle est la différence entre un site vitrine et un site e-commerce ?",
      answer:
        "Un site vitrine présente votre activité, vos services et vos coordonnées. Il sert principalement à informer et à générer des prises de contact. Un site e-commerce, lui, permet la vente directe en ligne, avec un panier, des fiches produits et un système de paiement sécurisé.",
    },
    {
      id: "q5",
      question: "Puis-je modifier moi-même le contenu de mon site ?",
      answer:
        "Oui, bien sûr. Tous nos sites sont livrés avec un CMS adapté à votre niveau de compétence. Vous pouvez facilement modifier textes, images, créer des pages ou ajouter des articles. Une formation est toujours prévue à la fin du projet.",
    },
    {
      id: "q6",
      question: "Comment assurer un bon référencement naturel ?",
      answer:
        "Le référencement naturel repose sur trois piliers : la qualité du contenu, la performance technique du site, et la popularité (liens externes). Dès la conception, nous optimisons votre site pour Google : structure logique, balises sémantiques, chargement rapide, responsive design… Et nous vous donnons les bonnes pratiques pour maintenir et améliorer votre positionnement.",
    },
    {
      id: "q7",
      question: "Est-ce que vous proposez la maintenance de site ?",
      answer:
        "Oui. Nous proposons des offres de maintenance adaptées à vos besoins : mises à jour, sauvegardes, surveillance de sécurité, accompagnement pour faire évoluer le site. Vous choisissez le niveau d’accompagnement selon vos attentes.",
    },
    {
      id: "q8",
      question: "Pourquoi choisir Advisia pour créer mon site web ?",
      answer:
        "Parce qu’on va à l’essentiel : un site efficace, bien conçu, pensé pour durer. Notre équipe est réactive, impliquée et humaine. On construit des systèmes solides, pas juste de jolis sites. Et les résultats se voient dès les premières semaines.",
    },
  ];

  return (
    <>
      <main>
        <section className="dark bg-background text-foreground">
          <div className="container-md pt-[95px]">
            <div className="py-8 lg:py-16 flex justify-start items-end">
              <div className="global-padding flex flex-col justify-end gap-6">
                <BulletHeadline as="p">Développment Web</BulletHeadline>
                <h1 className="text-4xl md:text-6xl xl:text-7xl max-w-4xl">
                  <RevealText>Identité de marque</RevealText>
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  Sites vitrines, e-commerce, plateformes SaaS, sites sur-mesure
                  : nous concevons des sites web performants, optimisés pour le
                  SEO, la conversion et votre image de marque.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <Link href="/contact">
                      Demander une estimation <RiArrowRightFill />
                    </Link>
                  </Button>
                  <div className="flex gap-4 lg:gap-8 wrap">
                    <div className="w-max">
                      <p className="text-2xl">+10</p>
                      <p className="text-sm ">Projets réalisés</p>
                    </div>
                    <div className="w-max border-l pl-4 lg:pl-8">
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

        <Steps1
          title="Les étapes pour lancer votre site web"
          steps={processSteps}
        />

        {/* <Header1
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
        /> */}

        <FAQCenter title={"On répond à vos questions"} questions={questions} />
        <SectionCTAForm
          title={
            <>
              Prêts à lancer votre{" "}
              <span className="text-nowrap text-highlight">projet web ?</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
