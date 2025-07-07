import Link from "next/link";
import { Button } from "./ui/button";
import { BulletHeadline } from "./ui/bullet-headline";
import { RiArrowRightFill } from "@remixicon/react";

export default function SectionCTASmall() {
  return (
    <section className="dark bg-background ad-pattern text-foreground">
      <div className="container-md">
        <div className="global-padding-x py-16 flex flex-col justify-center items-center text-center">
          <BulletHeadline className="mb-8">
            Vous avez un projet ?
          </BulletHeadline>
          <h2 className="text-4xl max-w-2xl mb-8">
            Contactez-nous et créons ensemble quelque chose d&#39;unique.
          </h2>
          <div className="flex items-center justify-center gap-x-1 gap-y-2 flex-wrap">
            <Button asChild size={"lg"}>
              <Link href="/contact">
                J&apos;estime mon projet <RiArrowRightFill />
              </Link>
            </Button>
            <Button variant="outline" size={"lg"} asChild>
              <Link href="/prendre-rendez-vous">Réserver un appel</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
