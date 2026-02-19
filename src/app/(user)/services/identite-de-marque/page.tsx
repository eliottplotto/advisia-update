import React from "react";
import Footer from "@/components/footer";
import { RiArrowRightFill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import { RevealText } from "@/components/reveal-text";
import { Header1 } from "@/components/ui/sections/header-1";

export const metadata = {
  title: "Identité de marque & branding · Agence Advisia",
  description:
    "Logo, charte graphique et système visuel cohérent. Une identité claire qui raconte votre entreprise et vous distingue sur vos supports et vos canaux.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Identité de marque & branding · Agence Advisia",
    description:
      "Logo, charte graphique et système visuel cohérent. Une identité claire qui raconte votre entreprise et vous distingue sur vos supports et vos canaux.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function IdentiteDeMarque() {
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
        <section className="overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex justify-start items-end">
              <div className="flex flex-col justify-end gap-6">
                <BulletHeadline as="p">Développment Web</BulletHeadline>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
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

        <Header1
          heading="Advisia, votre partenaire digital de confiance"
          dark={true}
          layout="imgLeft"
          description="Nous sommes une équipe passionnée de créatifs et de développeurs, dédiée à transformer vos idées en solutions digitales exceptionnelles."
          image={{ src: "/equipe-advisia-2.jpg", alt: "Équipe Advisia" }}
        />

        <Header1
          heading="Advisia, votre partenaire digital de confiance"
          dark={true}
          layout="imgRight"
          description="Nous sommes une équipe passionnée de créatifs et de développeurs, dédiée à transformer vos idées en solutions digitales exceptionnelles."
          image={{ src: "/equipe-advisia-2.jpg", alt: "Équipe Advisia" }}
        />

        <FAQCenter title={"On répond à vos questions"} questions={questions} />
        <SectionCTAForm
          title={
            <>
              Construisons ensemble
              <span className="text-nowrap text-highlight">votre identité</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
