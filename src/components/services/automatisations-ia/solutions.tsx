import Image from "next/image";
import {
  RiArrowUpBoxFill,
  RiGitCommitFill,
  RiRobot3Fill,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function Solutions() {
  return (
    <section className="bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container-md">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="font-mono text-sm uppercase mb-4 text-muted-foreground">
            Nos solution IA
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl">
            Intégrer et tirer profit de l&apos;IA dans votre organisation
          </h3>
        </div>
        {/* Solutions */}
        <div>
          <div className="w-[67%] mx-auto flex flex-col items-center">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <div className="h-24 border border-primary border-dashed"></div>
            <div className="w-full border border-primary border-dashed"></div>
            <div className="w-full mx-auto flex justify-between">
              <div className="h-12 border border-primary border-dashed"></div>
              <div className="h-12 border border-primary border-dashed"></div>
              <div className="h-12 border border-primary border-dashed"></div>
            </div>
          </div>
          <div className="grid grid-col-1 lg:grid-cols-3 lg:gap-8">
            <div className="bg-background flex flex-col justify-between items-center">
              <div className="p-8 mb-4 text-center">
                <h4 className="flex justify-center items-center gap-2 font-mono text-sm uppercase mb-4 text-muted-foreground">
                  <RiGitCommitFill className="text-blue-600" />
                  Niveau 1
                </h4>
                <h5 className="text-2xl lg:text-3xl mb-4">
                  Automatisations classiques
                </h5>
                <p className="text-muted-foreground">
                  Automatisez l'essentiel et gagnez un temps précieux, chaque
                  jour.
                </p>
              </div>
              <Image
                src="/solutions-ia-1.svg"
                alt="Agents IA"
                width={500}
                height={500}
                className="w-full max-h-96"
                draggable="false"
              />
            </div>
            <div className="lg:hidden h-12 w-0 mx-auto border border-primary border-dashed"></div>
            <div className="bg-background flex flex-col justify-between items-center">
              <div className="p-8 mb-4 text-center">
                <h4 className="flex justify-center items-center gap-2 font-mono text-sm uppercase mb-4 text-muted-foreground">
                  <RiArrowUpBoxFill className="text-blue-600" />
                  Niveau 2
                </h4>
                <h5 className="text-2xl lg:text-3xl mb-4">
                  Automatisations avancées
                </h5>
                <p className=" text-muted-foreground">
                  Propulsez votre business. Des automatisations intelligentes
                  pour une croissance sans limites.
                </p>
              </div>
              <Image
                src="/solutions-ia-2.svg"
                alt="Agents IA"
                width={500}
                height={500}
                className="w-full max-h-96"
                draggable="false"
              />
            </div>
            <div className="lg:hidden h-12 w-0 mx-auto border border-primary border-dashed"></div>
            <div className="bg-[linear-gradient(180deg,_#F280CA_0%,_#F280CA_25%,_#F2BD1D_25%,_#F2BD1D_50%,_#FF5A02_50%,_#FF5A02_75%,_#155DFC_75%,_#155DFC_100%)] p-1 lg:p-2">
              <div className="bg-background h-full flex flex-col justify-between items-center">
                <div className="p-7 md:p-6 mb-4 text-center">
                  <h4 className="flex justify-center items-center gap-2 font-mono text-sm uppercase mb-4 text-muted-foreground">
                    <RiRobot3Fill className="text-blue-600" />
                    Niveau 3
                  </h4>
                  <h5 className="text-2xl lg:text-3xl mb-4">Agents IA</h5>
                  <p className=" text-muted-foreground">
                    Le bras droit de toute votre entreprise. Développez votre
                    activité, même pendant que vous dormez.
                  </p>
                </div>
                <Image
                  src="/solutions-ia-1.svg"
                  alt="Agents IA"
                  width={500}
                  height={500}
                  className="w-full max-h-96"
                  draggable="false"
                />
              </div>
            </div>
          </div>
          <div className="w-[67%] mx-auto flex flex-col items-center">
            <div className="w-full mx-auto flex justify-between">
              <div className="h-12 border border-primary border-dashed"></div>
              <div className="h-12 border border-primary border-dashed"></div>
              <div className="h-12 border border-primary border-dashed"></div>
            </div>
            <div className="w-full border border-primary border-dashed"></div>
            <div className="h-12 border border-primary border-dashed"></div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex justify-center">
          <Button size="lg">Contacter un expert IA</Button>
        </div>
      </div>
    </section>
  );
}
