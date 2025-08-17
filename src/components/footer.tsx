import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiSparklingFill,
} from "@remixicon/react";
import { NewsletterForm } from "./newsletter-form";

export default function Footer() {
  return (
    <footer>
      <section className="dark text-foreground bg-secondary border-t">
        <div className="container-md grid grid-col-1 lg:grid-cols-2">
          <div className="global-padding">
            <NewsletterForm
              title="Advisia Insights"
              description="Recevez chaque semaine les clés du digital pour faire grandir votre entreprise"
              className="max-w-md"
            />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-4 gap-y-8 global-padding border-t border-px lg:border-0">
            <div>
              <h2 className="font-mono text-muted-foreground text-sm uppercase mb-4">
                L&apos;agence
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
                    <Link href="/agence">À propos</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/prendre-rendez-vous">Réserver un appel</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/contact">Contact</Link>
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
                    <Link href="/services/automatisations-ia">
                      IA et Automatisation
                      <RiSparklingFill className="text-ad-1" />
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/services/agence-web">Site Web</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/services/product-design">Product Design</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/services/digital-marketing">
                      Digital Marketing
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/services/identite-de-marque">
                      Identité de marque
                    </Link>
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
                    <Link href="/mentions-legales">Mentions légales</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/politique-de-confidentialite">
                      Politique de confidentialité
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="global-padding border-t border-px lg:border-0">
            <ul className="flex gap-1">
              <li>
                <Button variant="secondary" asChild>
                  <Link
                    href="https://www.linkedin.com/company/agence-advisia/"
                    target="_blank"
                  >
                    <RiLinkedinFill />
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
