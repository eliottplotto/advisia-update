import Image from "next/image";
import {
  RiBardFill,
  RiFocus2Fill,
  RiShakeHandsFill,
  RiShieldStarFill,
} from "@remixicon/react";

export default function PourquoiAdvisia() {
  return (
    <section>
      <div className="container-md">
        <div className="global-padding-x py-16">
          <div className="space-y-8 mb-16">
            <h2 className="text-4xl md:text-6xl max-w-4xl">
              Pourquoi choisir{" "}
              <span className="text-nowrap">
                <span className="text-highlight">Advisia</span> ?
              </span>
            </h2>
            <p className="max-w-2xl">
              Découvrez toutes nos expertises pour mettre en place et développer
              votre stratégie digitale. Du SEA à la web analyse en passant par
              le social média, nous vous accompagnons pour faire grandir votre
              entreprise quel que soit votre secteur.
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

          <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 xl:grid-flow-col gap-2">
            <div className="bg-secondary p-4 md:p-6 flex flex-col justify-between gap-8">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  01
                </p>
                <RiShieldStarFill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Expertises</h3>
                <p className="mt-3 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac nisi in nisl feugiat ultricies.
                </p>
              </div>
            </div>
            <div className="bg-secondary p-4 md:p-6 flex flex-col justify-between gap-8">
              <div className="flex no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  02
                </p>
                <RiBardFill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Innovation</h3>
                <p className="mt-3 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac nisi in nisl feugiat ultricies.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-4 md:p-6 flex flex-col justify-between gap-8">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  03
                </p>
                <RiFocus2Fill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Résultats</h3>
                <p className="mt-3 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac nisi in nisl feugiat ultricies.
                </p>
              </div>
            </div>
            <div className="bg-secondary p-4 md:p-6 flex flex-col justify-between gap-8">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  04
                </p>
                <RiShakeHandsFill size={"32"} />
              </div>
              <div>
                <h3 className="text-2xl">Collaboration</h3>
                <p className="mt-3 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac nisi in nisl feugiat ultricies.
                </p>
              </div>
            </div>
            <Image
              src="/equipe-advisia.jpg"
              width="300"
              height="400"
              alt="Equipe Advisia"
              className="object-cover w-full xl:row-span-2 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
