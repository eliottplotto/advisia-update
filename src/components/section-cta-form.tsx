import { RevealText } from "./RevealText";
import { BulletHeadline } from "./ui/bullet-headline";
import ContactForm from "./contact-form";
import { RiCheckFill, RiPhoneFill } from "@remixicon/react";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <section className="dark bg-background bg-ascii-4 text-foreground">
      <div className="container-md">
        <div className="py-16 grid lg:grid-cols-2">
          <div className="global-padding xl:mr-8">
            <BulletHeadline as="p">Contact</BulletHeadline>
            <div className="mt-8">
              {profils.map((profil, index) => (
                <img
                  key={index}
                  src={profil.src}
                  alt={profil.alt}
                  className="inline-block not-first:-ml-2 w-12 h-12 rounded-full"
                />
              ))}
            </div>
            <RevealText
              as="h1"
              className="text-4xl 2xl:text-7xl mt-8 mb-4 2xl:mb-8 uppercase"
            >
              Démarrons votre projet
            </RevealText>
            <p>
              Un projet ou une question ? Contactez-nous en remplissant le
              formulaire ci-contre. Notre équipe commerciale reviendra vers vous
              rapidement.
            </p>
            <ul className="adv_list-icon mt-6">
              <li>
                <RiCheckFill />
                Estimation gratuite sous 48h
              </li>
            </ul>
            <div className="my-8 flex items-center gap-4 flex-wrap">
              <h2>Vous préférez planifier un rendez-vous ?</h2>
              <Button variant={"outline"} asChild>
                <Link href={"/prendre-rendez-vous"}>
                  Réserver un appel <RiPhoneFill />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full mx-auto">
            <div className="bg-background global-padding">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
