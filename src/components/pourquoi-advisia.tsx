import {
  RiBardFill,
  RiFocus2Fill,
  RiShakeHandsFill,
  RiShieldStarFill,
} from "@remixicon/react";
import { RevealText } from "./reveal-text";

export default function PourquoiAdvisia() {
  return (
    <section className="bg-secondary">
      <div className="container-md">
        <div className="global-padding-x py-8 lg:py-16 space-y-8 lg:space-y-16">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-4xl md:text-6xl max-w-4xl">
              <RevealText>Pourquoi choisir Advisia ?</RevealText>
            </h2>
            <p>
              PME, commerçants, artisans, startups ou groupes établis : chaque
              projet mérite efficacité, clarté et impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-4 rounded-lg border">
              <div className="flex no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  01
                </p>
                <div className="mb-5 md:mb-6 p-4 w-fit bg-ad-1 rounded-xs">
                  <RiShieldStarFill />
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl">Expertise certifiée</h3>
                <p className="mt-3 text-muted-foreground">
                  Une équipe experte, des outils maîtrisés, et une approche
                  testée sur le terrain.
                </p>
              </div>
            </div>
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-8 rounded-lg border">
              <div className="flex no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  02
                </p>
                <div className="mb-5 md:mb-6 p-4 w-fit bg-ad-1 rounded-xs">
                  <RiBardFill />
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl">Solutions modernes</h3>
                <p className="mt-3 text-muted-foreground">
                  Nous sélectionnons des technologies fiables et durables grâce
                  à une veille constante.
                </p>
              </div>
            </div>

            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-8 rounded-lg border">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  03
                </p>
                <div className="mb-5 md:mb-6 p-4 w-fit bg-ad-1 rounded-xs">
                  <RiFocus2Fill />
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl">Résultats garantis</h3>
                <p className="mt-3 text-muted-foreground">
                  KPIs définis dès le kick-off ; nos livrables s’alignent sur
                  vos objectifs.
                </p>
              </div>
            </div>
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-8 rounded-lg border">
              <div className="flex no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  04
                </p>
                <div className="mb-5 md:mb-6 p-4 w-fit bg-ad-1 rounded-xs">
                  <RiShakeHandsFill />
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl">Partenariat transparent</h3>
                <p className="mt-3 text-muted-foreground">
                  Suivi hebdo, accès au backlog, feedback continu : vous restez
                  maître du projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
