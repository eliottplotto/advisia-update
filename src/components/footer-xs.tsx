import Link from "next/link";

export default function FooterXS() {
  return (
    <footer
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="px-4 md:px-8 lg:px-12 py-6 flex flex-col-reverse md:flex md:flex-row md:items-center md:gap-4 md:justify-between">
          <p className="text-sm max-sm:pt-8" style={{ color: "var(--text-muted)" }}>
            &copy; 2025 Advisia. Tous droits r&eacute;serv&eacute;s.
          </p>
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
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
    </footer>
  );
}
