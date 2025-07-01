import Image from "next/image";
import { RevealText } from "./RevealText";
import {
  RiBardFill,
  RiFocus2Fill,
  RiShakeHandsFill,
  RiShieldStarFill,
} from "@remixicon/react";

export default function PourquoiAdvisia() {
  return (
    <section className="bg-secondary">
      <div className="main-layout">
        <div></div>
        <div className="lg:border-x xl:pb-32">
          <div className="global-padding text-center">
            <RevealText
              as="h2"
              className="text-4xl md:text-6xl xl:text-7xl max-w-4xl my-8 md:my-16 lg:my-32 mx-auto"
            >
              Pourquoi choisir{" "}
              <span className="text-nowrap">
                <span className="underline">Advisia</span> ?
              </span>
            </RevealText>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 xl:grid-flow-col">
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-8">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  01
                </p>
                <RiShieldStarFill />
              </div>
              <div>
                <h3 className="text-2xl">Expertises</h3>
                <p className="mt-3 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac nisi in nisl feugiat ultricies.
                </p>
              </div>
            </div>
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-8 border-t">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  02
                </p>
                <RiBardFill />
              </div>
              <div>
                <h3 className="text-2xl">Innovation</h3>
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
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-8">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  03
                </p>
                <RiFocus2Fill />
              </div>
              <div>
                <h3 className="text-2xl">Résultats</h3>
                <p className="mt-3 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac nisi in nisl feugiat ultricies.
                </p>
              </div>
            </div>
            <div className="bg-background p-4 md:p-6 flex flex-col justify-between gap-8 border-t">
              <div className="flex  no-wrap justify-between">
                <p className="font-mono text-muted-foreground uppercase text-sm">
                  04
                </p>
                <RiShakeHandsFill />
              </div>
              <div>
                <h3 className="text-2xl">Collaboration</h3>
                <p className="mt-3 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac nisi in nisl feugiat ultricies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
