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
    <footer className="py-16">
      <div className="container-md">
        <div className="grid grid-col-1 lg:grid-cols-2 gap-4 mb-64">
          <h2 className="text-4xl">Restez connectés à Advisia</h2>
          <div className="grid lg:grid-cols-3 gap-x-4 gap-y-8">
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
                L'agence
              </h2>
              <ul>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/">Études de cas</Link>
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
        </div>
        <div className="flex justify-between items-end">
          <div>
            <Link href="/">
              <Image
                src="/advisia-logo.png"
                alt="Logo"
                width={157}
                height={40}
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
          <p className="text-sm text-muted-foreground">© Advisia 2025</p>
        </div>
      </div>
    </footer>
  );
}
