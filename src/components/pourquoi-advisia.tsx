import Image from "next/image";
import {
  RiBardFill,
  RiFocus2Fill,
  RiShakeHandsFill,
  RiShieldStarFill,
} from "@remixicon/react";

export default function PourquoiAdvisia() {
  return (
    <section className="bg-secondary">
      <div className="container-md">
        <div className="global-padding-x py-8 lg:py-16 space-y-8 lg:space-y-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl max-w-4xl">
              Pourquoi choisir{" "}
              <span className="text-nowrap">
                <span className="text-highlight">Advisia</span> ?
              </span>
            </h2>
            <p className="max-w-2xl">
              PME, commerçants, artisans, startups ou groupes établis : chaque
              projet mérite efficacité, clarté et impact.
            </p>
            <ul className="flex wrap gap-12 wrap">
              <li>
                <img
                  src="/logos-slider/shopify_monotone_black.svg"
                  alt="Logo Shopify"
                  className="h-10"
                />
              </li>
              <li>
                <img
                  src="/logos-slider/shopify_monotone_black.svg"
                  alt="Logo Shopify"
                  className="h-10"
                />
              </li>
              <li>
                <img
                  src="/logos-slider/shopify_monotone_black.svg"
                  alt="Logo Shopify"
                  className="h-10"
                />
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col gap-2">
            <Image
              src="/equipe-advisia.jpg"
              width="300"
              height="400"
              alt="Equipe Advisia"
              className="object-cover w-full xl:row-span-2 h-full rounded-sm"
            />
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-4 rounded-sm">
              <div className="flex no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  01
                </p>
                <RiShieldStarFill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Expertise certifiée</h3>
                <p className="mt-3 text-muted-foreground">
                  Une équipe experte, des outils maîtrisés, et une approche
                  testée sur le terrain.
                </p>
              </div>
            </div>
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-4 rounded-sm">
              <div className="flex no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  02
                </p>
                <RiBardFill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Solutions modernes</h3>
                <p className="mt-3 text-muted-foreground">
                  Nous sélectionnons des technologies fiables et durables grâce
                  à une veille constante.
                </p>
              </div>
            </div>

            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-4 rounded-sm">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  03
                </p>
                <RiFocus2Fill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Résultats garantis</h3>
                <p className="mt-3 text-muted-foreground">
                  KPIs définis dès le kick-off ; nos livrables s’alignent sur
                  vos objectifs.
                </p>
              </div>
            </div>
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-4 rounded-sm">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  04
                </p>
                <RiShakeHandsFill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Partenariat transparent</h3>
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
