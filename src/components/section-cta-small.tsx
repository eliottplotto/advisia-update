import Link from "next/link";
import { RevealText } from "./RevealText";
import { Button } from "./ui/button";
import { BulletHeadline } from "./ui/bullet-headline";

export default function SectionCTASmall() {
  return (
    <section
      data-theme="dark"
      className="dark bg-[#FF2803] text-foreground bg-ascii"
    >
      <div className="main-layout">
        <div></div>
        <div className="global-padding mt-8 mb-16 lg:border-l lg:border-foreground">
          <BulletHeadline className="mb-8">
            Vous avez un projet ?
          </BulletHeadline>
          <RevealText as="h2" className="text-4xl max-w-3xl mb-8">
            Réservez votre appel et créons ensemble quelque chose d&#39;
            <span className="underline">unique</span>.
          </RevealText>
          <Button asChild>
            <Link href="/contact">Je réserve</Link>
          </Button>
        </div>
        <div></div>
      </div>
    </section>
  );
}
