import { RevealText } from "@/components/reveal-text";
import { Button } from "@/components/ui/button";
import { RiCheckFill, RiCornerDownRightLine } from "@remixicon/react";
import Link from "next/link";

export default function PourquoiProduct() {
  return (
    <section className="dark bg-background text-foreground">
      <div className="container-md global-padding-x py-8 lg:py-16 space-y-8 lg:space-y-16">
        <div className="space-y-6 flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-3xl">
            <RevealText>
              Pourquoi le Product Design{" "}
              <span className="text-nowrap">
                <span className="text-highlight">change tout</span> ?
              </span>
            </RevealText>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center gap-6 global-padding">
            <div className="bg-ad-1 rounded-sm text-background">
              <RiCheckFill />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl">Expérience utilisateur optimisée</h3>
              <p className="text-muted-foreground max-w-md">
                Un design centré sur vos utilisateur réduit les abandons,
                améliore la satisfaction et augmente la rétention.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 global-padding border-t border-l-0 md:border-l md:border-t-0">
            <div className="bg-ad-1 rounded-sm text-background">
              <RiCheckFill />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl">Impact direct sur vos résultats</h3>
              <p className="text-muted-foreground max-w-md">
                Un bon design augmente vos taux de conversion, valorise votre
                produit et renforce la crédibilité de votre marque.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 global-padding border-t border-l-0 md:border-l md:border-t-0">
            <div className="bg-ad-1 rounded-sm text-background">
              <RiCheckFill />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl">Gain de temps pour vos équipes</h3>
              <p className="text-muted-foreground max-w-md">
                Des spécifications claires évitent les incompréhensions,
                limitent les retours en dev, et accélèrent les mises en
                production.
              </p>
            </div>
          </div>
        </div>
        <Button asChild size={"lg"} className="flex w-fit mx-auto">
          <Link href="/contact">
            J&apos;estime mon projet <RiCornerDownRightLine />
          </Link>
        </Button>
      </div>
    </section>
  );
}
