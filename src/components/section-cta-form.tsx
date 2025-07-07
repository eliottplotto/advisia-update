import ContactForm from "./contact-form";
import { RiPhoneFill } from "@remixicon/react";
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
    <section className="dark bg-background text-foreground">
      <div className="container-md">
        <div className="py-16 grid lg:grid-cols-2">
          <div className="global-padding xl:mr-8">
            <div className="bg-background border p-2 mb-0 flex items-center gap-2 w-fit">
              <div className="w-2 h-2 bg-ad-1"></div>
              <p className="text-sm font-mono uppercase">
                Quelques places restantes
              </p>
            </div>
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
            <h2 className="text-4xl md:text-6xl mt-8 mb-4 2xl:mb-8 uppercase">
              Démarrons{" "}
              <span className="text-highlight text-background text-nowrap">
                votre projet
              </span>
            </h2>
            <p>
              Un projet ou une question ? Contactez-nous en remplissant le
              formulaire ci-contre. Notre équipe commerciale reviendra vers vous
              rapidement.
            </p>
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <h2>Vous préférez planifier un rendez-vous ?</h2>
              <Button variant={"outline"} asChild>
                <Link href={"/prendre-rendez-vous"}>
                  Réserver un appel <RiPhoneFill />
                </Link>
              </Button>
            </div>
            <ul className="flex gap-4 my-8">
              <li className="w-16 h-16 bg-secondary rounded-full"></li>
              <li className="w-16 h-16 bg-secondary rounded-full"></li>
              <li className="w-16 h-16 bg-secondary rounded-full"></li>
            </ul>
          </div>

          <div className="w-full mx-auto">
            <div className="bg-background border global-padding">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
