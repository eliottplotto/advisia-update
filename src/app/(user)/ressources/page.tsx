import Link from "next/link";
import Footer from "@/components/footer";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import { ArrowUpRight } from "lucide-react";
import { LEAD_MAGNETS } from "@/lib/lead-magnets/data";

export const metadata = {
  title: "Ressources gratuites — Guides et checklists pour PME | Advisia",
  description:
    "Téléchargez gratuitement nos guides PDF : cession d'entreprise, automatisations IA, SEO local. Ressources concrètes et actionnables pour dirigeants de PME françaises.",
  alternates: { canonical: "https://advisia.agency/ressources" },
  openGraph: {
    title: "Ressources gratuites Advisia — Guides pour dirigeants de PME",
    description:
      "Guides PDF actionnables : cession, IA, SEO local. Rédigés par Advisia, agence digitale française.",
    url: "https://advisia.agency/ressources",
    siteName: "Advisia",
    type: "website",
  },
};

const ACCENT_BG = {
  violet: "rgba(124,58,237,0.08)",
  lime: "rgba(201,254,110,0.08)",
  blue: "rgba(96,165,250,0.08)",
};
const ACCENT_BORDER = {
  violet: "rgba(124,58,237,0.25)",
  lime: "rgba(201,254,110,0.3)",
  blue: "rgba(96,165,250,0.3)",
};
const ACCENT_TEXT = {
  violet: "var(--violet-light)",
  lime: "#c9fe6e",
  blue: "#60a5fa",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ressources gratuites Advisia",
  description:
    "Checklists et guides PDF pour dirigeants de PME françaises : cession, automatisations IA, SEO local.",
  itemListElement: LEAD_MAGNETS.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://advisia.agency/ressources/${m.slug}`,
    name: m.title,
  })),
};

export default function RessourcesHub() {
  return (
    <main
      className="relative"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <VerticalFlowLine />

      <section className="w-full overflow-hidden" style={{ background: "rgba(10,10,15,0.85)" }}>
        <div className="container-md pt-[95px]">
          <div className="global-padding-x py-12 lg:py-20 flex flex-col gap-6 max-w-3xl">
            <div className="section-label">● Ressources gratuites</div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1]">
              Guides concrets pour dirigeants de PME.
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Pas de théorie, pas de bullshit. Des checklists auto-évaluables rédigées par
              l&apos;équipe Advisia, issues de ce qu&apos;on fait vraiment chez nos clients.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-12 lg:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="container-md global-padding-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEAD_MAGNETS.map((m) => (
              <Link
                key={m.slug}
                href={`/ressources/${m.slug}`}
                className="group block rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                style={{
                  background: ACCENT_BG[m.accent],
                  border: `1px solid ${ACCENT_BORDER[m.accent]}`,
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-3xl inline-flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {m.icon}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: ACCENT_TEXT[m.accent] }}
                  />
                </div>
                <div
                  className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-2"
                  style={{ color: ACCENT_TEXT[m.accent] }}
                >
                  Checklist PDF
                </div>
                <h2
                  className="text-xl lg:text-2xl font-bold mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.title}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {m.teaser}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
