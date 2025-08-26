import React from "react";
import Footer from "@/components/footer";
import { RiCornerDownRightLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionCTAForm from "@/components/section-cta-form";
import LogosConfiance from "@/components/logos-confiance";
import { RevealText } from "@/components/reveal-text";
import { Header1 } from "@/components/ui/sections/header-1";

export const metadata = {
  title: "Marketing digital & acquisition · Agence Advisia",
  description:
    "SEO, SEA, contenus et emailing. Stratégies d’acquisition mesurables pour augmenter votre trafic, générer des leads et améliorer la conversion.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Marketing digital & acquisition · Agence Advisia",
    description:
      "SEO, SEA, contenus et emailing. Stratégies d’acquisition mesurables pour augmenter votre trafic, générer des leads et améliorer la conversion.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function MarketingDigital() {
  return (
    <>
      <main>
        <section className="dark bg-background text-foreground overflow-hidden bg-[url('/background-logo-dark.svg')] bg-cover bg-center">
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex justify-start items-end">
              <div className="flex flex-col justify-end gap-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
                  <RevealText>
                    Votre agence de{" "}
                    <span className="text-highlight text-nowrap">
                      Marketing Digital
                    </span>{" "}
                    et <span className="text-highlight text-nowrap">SEO</span>
                  </RevealText>
                </h1>

                <p className="max-w-xl text-muted-foreground">
                  Optimisez votre acquisition avec des campagnes performantes et
                  du contenu pensé pour convertir.
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

        <Header1
          heading="Campagnes Google / Meta / TikTok"
          dark={false}
          layout="imgLeft"
          description="Nous gérons vos campagnes publicitaires sur Google, Meta et TikTok (search, push, retargeting) pour générer plus de visibilité et de conversions. Chaque campagne est optimisée en continu pour maximiser votre ROI."
          image={{
            src: "/services/marketing-digital/agence-sea-campagnes-google-meta-tiktok.svg",
            alt: "Campagnes Google / Meta / TikTok",
          }}
        />

        <Header1
          heading="SEO & Blogging"
          dark={false}
          layout="imgRight"
          description="Nous boostons votre référencement avec des articles SEO, un maillage interne optimisé et une stratégie de mots-clés ciblée. L’objectif : augmenter votre trafic organique sans effort rédactionnel."
          image={{
            src: "/services/marketing-digital/agence-seo-blogging.svg",
            alt: "SEO & Blogging",
          }}
        />

        <Header1
          heading="Création de contenus"
          dark={false}
          layout="imgLeft"
          description="Nous créons des contenus engageants avec l’IA et des formats UGC pour renforcer votre présence en ligne. Visuels, vidéos, stories : tout est pensé pour capter l’attention et générer des résultats."
          image={{
            src: "/services/marketing-digital/agence-creation-contenu.svg",
            alt: "Création de contenus",
          }}
        />

        <SectionCTAForm
          title={
            <>
              Discutons de votre
              <span className="text-nowrap text-highlight">présence</span> en
              ligne
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
