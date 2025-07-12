// Components
import { BulletHeadline } from "@/components/ui/bullet-headline";
import { Button } from "@/components/ui/button";
import { RiCornerDownRightLine } from "@remixicon/react";
import { RevealText } from "../reveal-text";
import Link from "next/link";
import Projects from "../projects";

export default function ProjectsSection() {
  return (
    <section className="dark bg-background text-foreground">
      <div className="container-md">
        <div className="global-padding-x py-8 lg:py-16 space-y-8 lg:space-y-16">
          <div className="space-y-6">
            <BulletHeadline as="p">Études de cas</BulletHeadline>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
              <RevealText>
                Nous avons transformé leurs objectifs en{" "}
                <span className="text-highlight">résultats</span>
              </RevealText>
            </h2>
          </div>

          <Projects />

          <Button size={"lg"} asChild className="flex w-max mx-auto">
            <Link href="/contact">
              J'estime mon projet <RiCornerDownRightLine />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
