import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiSparklingFill,
} from "@remixicon/react";

export default function Footer() {
  return (
    <footer>
      <section data-theme="dark" className="dark text-foreground bg-background">
        <div className="grid grid-col-1 lg:grid-cols-2 lg:gap-y-32">
          <div className="global-padding">
            <h2 className="text-4xl">Newsletter</h2>
            <p className="text-muted-foreground mb-4">
              Des informations et des mises à jour qui vous intéressent.
            </p>
            <Button disabled>Coming soon</Button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-4 gap-y-8 global-padding border-t border-px lg:border-0">
            <div>
              <h2 className="font-mono text-muted-foreground text-sm uppercase mb-4">
                L'agence
              </h2>
              <ul>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Acceuil</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/projets">Études de cas</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">À propos</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Contact</Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-muted-foreground text-sm uppercase mb-4">
                Expertises
              </h2>
              <ul>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">
                      IA et Automatisation
                      <RiSparklingFill className="text-blue-600" />
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Site Web</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Product Design</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Digital Marketing</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Identité de marque</Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-muted-foreground text-sm uppercase mb-4">
                Légal
              </h2>
              <ul>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Mentions légales</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Politique de confidentialité</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Cookies</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="global-padding border-t border-px lg:border-0">
            <Link href="/">
              <Image
                src="/advisia-logo-white-h32.svg"
                alt="Logo"
                width={130}
                height={32}
                className="h-8 w-auto mb-8"
              />
            </Link>
            <ul className="flex gap-1">
              <li>
                <Button variant="secondary" asChild>
                  <Link href="/">
                    <RiLinkedinFill />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="secondary" asChild>
                  <Link href="/">
                    <RiFacebookFill />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="secondary" asChild>
                  <Link href="/">
                    <RiInstagramFill />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="self-end global-padding border-t border-px lg:border-0">
            <p className="text-muted-foreground text-sm">© Advisia 2025</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
