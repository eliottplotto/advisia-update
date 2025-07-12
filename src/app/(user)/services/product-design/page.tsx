import React from "react";
import Footer from "@/components/footer";
import { RiCornerDownRightLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import FeaturesProduct from "@/components/services/product-design/features-product";
import { Header1 } from "@/components/ui/sections/header-1";
import PourquoiProduct from "@/components/services/product-design/pourquoi";
import { RevealText } from "@/components/reveal-text";

export default function ProductDesign() {
  const questions = [
    {
      id: "q1",
      question: "Qu’est-ce que le Product Design ?",
      answer:
        "Le Product Design regroupe toutes les étapes de conception d’un produit digital : de la recherche utilisateur jusqu’au design de l’interface. L’objectif est de créer une solution utile, intuitive et alignée avec vos enjeux business.",
    },
    {
      id: "q2",
      question: "Quelle est la différence entre UX Design et UI Design ?",
      answer:
        "L’UX Design (expérience utilisateur) s’intéresse aux parcours, à la structure et à la logique d’usage. L’UI Design (interface utilisateur) se concentre sur le visuel : boutons, couleurs, typographie… Les deux sont complémentaires.",
    },
    {
      id: "q3",
      question: "Pourquoi investir dans le Product Design ?",
      answer:
        "Un bon design améliore la conversion, réduit les frictions et fidélise les utilisateurs. C’est aussi un gain de temps pour vos équipes techniques, qui partent d’une base claire et validée.",
    },
    {
      id: "q4",
      question:
        "Travaillez-vous avec des startups ou des grandes entreprises ?",
      answer:
        "Les deux. Nous adaptons notre accompagnement à la taille du projet et à votre niveau de maturité produit, que vous lanciez un MVP ou que vous optimisiez une plateforme existante.",
    },
    {
      id: "q5",
      question: "Combien de temps prend un projet de Product Design ?",
      answer:
        "Cela dépend de la complexité du produit. En moyenne, un sprint de design complet (recherche, parcours, maquettes) prend entre 3 et 6 semaines.",
    },
    {
      id: "q6",
      question:
        "Peut-on travailler uniquement sur l’UX ou uniquement sur l’UI ?",
      answer:
        "Oui, c’est possible. Mais nous conseillons toujours une phase d’audit ou d’analyse pour garantir la cohérence globale.",
    },
    {
      id: "q7",
      question:
        "Est-ce que vous testez les maquettes avec de vrais utilisateurs ?",
      answer:
        "Oui. Nous organisons des tests utilisateurs pour valider nos choix avant le développement, ce qui limite les erreurs coûteuses.",
    },
    {
      id: "q8",
      question: "Pourquoi choisir Advisia pour votre design produit ?",
      answer:
        "Parce que nos projets sont pilotés par de vrais experts en UX et Product Design. Pas de raccourcis : on applique des méthodes éprouvées, centrées sur l’utilisateur, pour concevoir des produits clairs, utiles et alignés avec vos objectifs. On challenge les idées, on teste, on améliore. Le tout avec une équipe impliquée, réactive et orientée résultats.",
    },
  ];

  return (
    <>
      <main>
        <section className="dark bg-background text-foreground">
          <div className="container-md pt-[95px]">
            <div className="py-8 lg:py-16 flex justify-start items-end">
              <div className="global-padding flex flex-col justify-end gap-6">
                <BulletHeadline as="p">Product Design</BulletHeadline>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-4xl">
                  <RevealText>
                    Un design qui sert vos{" "}
                    <span className="text-highlight">utilisateurs</span> et vos{" "}
                    <span className="text-highlight">objectifs</span>
                  </RevealText>
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  Notre travail consiste à comprendre ce que vos utilisateurs
                  attendent, à traduire ça en parcours clairs, puis à dessiner
                  une interface qui fonctionne sans effort.
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  <Button size="lg" asChild className="w-max">
                    <Link href="/contact">
                      Demander une estimation <RiCornerDownRightLine />
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

        <FeaturesProduct />
        <PourquoiProduct />

        <Header1
          heading="Un design qui part toujours des usages"
          dark={false}
          layout="imgLeft"
          description="Chez Advisia, chaque projet commence par une phase d’analyse : on identifie les besoins réels, les usages concrets, les points de friction. Cela nous permet de structurer des parcours clairs avant de penser à l’interface. Le design vient ensuite renforcer cette logique : il guide, rassure et met en valeur les bons éléments. Le résultat, c’est un produit utile, cohérent et facile à adopter pour vos utilisateurs."
          image={{ src: "/placeholder-2.jpg", alt: "Équipe Advisia" }}
        />

        <FAQCenter title={"On répond à vos questions"} questions={questions} />
        <SectionCTAForm
          title={
            <>
              Vous avez{" "}
              <span className="text-nowrap text-highlight">un projet</span> à
              concevoir, améliorer ou repenser ?
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
