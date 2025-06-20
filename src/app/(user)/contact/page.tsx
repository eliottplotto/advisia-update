import { Button } from "@/components/ui/button";
import CalForm from "@/components/cal-form";
import { RiCheckFill, RiSendPlane2Fill } from "@remixicon/react";
import LogosSlider from "@/components/logos-slider";
import FooterXS from "@/components/footer-xs";
import Image from "next/image";

const profils = [
  { path: "/pp1.jpg" },
  { path: "/macron.jpg" },
  { path: "/donald.jpg" },
];

export default function Contact() {
  return (
    <div className="main-wrapper flex flex-col items-strech xl:h-screen">
      <main className="container-md lg:grow lg:grid lg:grid-cols-2">
        <div className="pt-16 pr-16">
          <div className="flex items-center">
            {profils.map((profil, index) => (
              <Image
                src={profil.path}
                alt="Expert"
                width={40}
                height={40}
                className="rounded-full -mr-2 border-1 border-background w-10 h-10"
                key={index}
              />
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-2xl mb-8 pt-4">
            Réservez votre appel et lancez votre projet.
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <p className="text-muted-foreground">
              Vous préférez les formulaires ?
            </p>
            <Button variant="secondary">
              Envoyer un message
              <RiSendPlane2Fill />
            </Button>
          </div>
          <ul className="flex flex-col gap-2 pt-8 border-t border-black mb-8">
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Parlons de vos besoins et définissons vos objectifs
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Apprenez-en plus sur nos services
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Recevez une estimation gratuite de votre projet
            </li>
          </ul>

          <LogosSlider />
        </div>
        <div className="max-h-full bg-[#F2BD1D] container py-4 md:py-6 lg:py-8 flex items-center justify-center">
          <CalForm />
        </div>
      </main>
      <FooterXS />
    </div>
  );
}
