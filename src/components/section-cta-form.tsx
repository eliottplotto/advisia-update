import Link from "next/link";
import { RevealText } from "./RevealText";
import { Button } from "./ui/button";
import { BulletHeadline } from "./ui/bullet-headline";
import ContactForm from "./contact-form";
import LogosSlider from "./logos-slider";
import { RiArrowRightFill, RiCheckFill } from "@remixicon/react";

export default function SectionCTAForm() {
  const profils = [
    {
      alt: "Eliott P.",
      src: "/eliott-plotto.jpeg",
    },
    {
      alt: "Julien C.",
      src: "/julien.jpeg",
    },

    {
      alt: "Enzo F.",
      src: "/pp1.jpg",
    },
  ];

  return (
    <>
      <section data-theme="dark" className="bg-[#DFF24B] bg-ascii-2">
        <div className="main-layout">
          <div></div>
          <div className="pt-32 lg:border-x border-foreground grid xl:grid-cols-2">
            <div className="global-padding bg-[#DFF24B]">
              <BulletHeadline as="p">Contact</BulletHeadline>
              <RevealText
                as="h1"
                className="text-4xl 2xl:text-7xl mt-8 mb-4 2xl:mb-8 uppercase"
              >
                Démarrons votre projet
              </RevealText>
              <p>
                Un projet ou une question ? Contactez-nous en remplissant le
                formulaire ci-contre. Notre équipe commerciale reviendra vers
                vous rapidement.
              </p>
              <ul className="adv_list-icon mt-6">
                <li>
                  <RiCheckFill />
                  Estimation gratuite sous 48h
                </li>
              </ul>
            </div>

            <div className="dark text-foreground w-full mx-auto">
              <div className="global-padding bg-background">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-layout" data-theme="light">
        <div></div>
        <div className="lg:border-x grid xl:grid-cols-2 pb-16 lg:pb-32">
          <div className="py-12 overflow-hidden">
            <LogosSlider />
          </div>
          <div className="bg-background dark text-foreground w-full border-t">
            <div className="global-padding">
              <h2 className="mb-2">Vous préférez prendre un rendez-vous ?</h2>
              <p className="text-muted-foreground mb-12">
                Réservez un appel avec un expert pour parler de votre projet et
                posez vos questions.
              </p>
              <Button variant="secondary" size={"lg"} asChild>
                <Link href="/prendre-rendez-vous">
                  Réserver un appel <RiArrowRightFill />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
}
