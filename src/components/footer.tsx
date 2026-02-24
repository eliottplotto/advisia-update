import Link from "next/link";
import { RiLinkedinFill, RiSparklingFill } from "@remixicon/react";
import { NewsletterForm } from "./newsletter-form";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Newsletter + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 md:px-8 lg:px-12 py-12 lg:py-16">
            <NewsletterForm
              title="Advisia Insights"
              description="Recevez nos analyses IA, retours d'expérience et conseils tech — 1 email par semaine."
              className="max-w-md"
            />
          </div>

          <div
            className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-4 gap-y-8 px-4 md:px-8 lg:px-12 py-12 lg:py-16"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div>
              <h2
                className="font-mono text-xs uppercase tracking-[0.15em] mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                L&apos;agence
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projets"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Réalisations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agence"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    &Agrave; propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/prendre-rendez-vous"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    R&eacute;server un appel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2
                className="font-mono text-xs uppercase tracking-[0.15em] mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                Expertises
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/automatisations-ia"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)] flex items-center gap-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    IA et Automatisation
                    <RiSparklingFill size={14} style={{ color: "var(--ad-1)" }} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/agence-web"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/product-design"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Product Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/marketing-digital"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Marketing Digital
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2
                className="font-mono text-xs uppercase tracking-[0.15em] mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                L&eacute;gal
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Mentions l&eacute;gales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-de-confidentialite"
                    className="text-sm transition-colors duration-300 hover:text-[var(--violet-light)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Politique de confidentialit&eacute;
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="px-4 md:px-8 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-4">
            <Logo className="text-white opacity-60" />
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              &copy; Advisia {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="https://www.linkedin.com/company/agence-advisia/"
              target="_blank"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[rgba(124,58,237,0.15)] hover:text-[var(--violet-light)]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <RiLinkedinFill size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
