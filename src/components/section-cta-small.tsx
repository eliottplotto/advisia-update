import Link from "next/link";
import { RevealText } from "./RevealText";
import { Button } from "./ui/button";
import { BulletHeadline } from "./ui/bullet-headline";

export default function SectionCTASmall() {
  return (
    <section className="bg-[#DFF24B] bg-ascii">
      <div className="main-layout">
        <div></div>
        <div className="global-padding mt-16 mb-16 lg:border-l border-l-4 lg:border-foreground">
          <BulletHeadline className="mb-8">
            Vous avez un projet ?
          </BulletHeadline>
          <RevealText as="h2" className="text-4xl max-w-2xl mb-8">
            Contactez-nous et créons ensemble quelque chose d&#39;
            <span className="underline">unique</span>.
          </RevealText>
          <div className="flex gap-x-1 gap-y-2 flex-wrap">
            <Button asChild>
              <Link href="/contact">Demander une estimation gratuite</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/prendre-rendez-vous">Réserver un appel</Link>
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
