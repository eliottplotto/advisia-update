import Link from "next/link";
import { Button } from "./ui/button";

export default function FooterXS() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="container-md">
        <div className="global-padding flex flex-col-reverse md:flex md:flex-row md:items-center md:gap-4 md:justify-between">
          <p className="text-sm text-muted-foreground max-sm:pt-16">
            © 2025 Advisia. Tous droits réservés.
          </p>
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <li>
              <Button asChild variant="link">
                <Link href="/mentions-legales">Mentions légales</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link">
                <Link href="/politique-de-confidentialite">
                  Politique de confidentialité
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
