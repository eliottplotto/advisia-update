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
        <div className="global-padding-x py-8 lg:py-16 grid lg:grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-6">
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
            <h2 className="text-4xl md:text-6xl">
              Prêt à lancer votre{" "}
              <span className="text-nowrap">votre projet ?</span>
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Un projet ou une question ? Contactez-nous en remplissant le
              formulaire ci-contre. Notre équipe commerciale reviendra vers vous
              rapidement.
            </p>
            <div className="lg:hidden space-y-6">
              <Button
                variant={"outline"}
                className="w-full"
                size={"lg"}
                asChild
              >
                <Link href={"/prendre-rendez-vous"}>
                  Réserver un appel <RiPhoneFill />
                </Link>
              </Button>
              <p className="font-mono text-sm uppercase text-center">
                ou complétez le formulaire ci-dessous
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-4 flex-wrap">
              <p>Vous préférez planifier un rendez-vous ?</p>
              <Button variant={"outline"} asChild>
                <Link href={"/prendre-rendez-vous"}>
                  Réserver un appel <RiPhoneFill />
                </Link>
              </Button>
            </div>
            <ul className="hidden lg:flex gap-4">
              <li className="w-16 h-16 border rounded-full"></li>
              <li className="w-16 h-16 border rounded-full"></li>
              <li className="w-16 h-16 border rounded-full"></li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
