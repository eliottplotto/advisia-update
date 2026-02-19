import Footer from "@/components/footer";
import SectionCTASmall from "@/components/section-cta-small";

export const metadata = {
  title: "Mentions Légales · Agence Advisia",
  description:
    "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Mentions Légales · Agence Advisia",
    description:
      "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function MentionsLegales() {
  return (
    <main>
      <div style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
        <div className="max-w-[1400px] mx-auto pt-[95px]">
          <article className="px-4 md:px-8 lg:px-12 py-12 md:py-20 mx-auto">
            <section className="max-w-3xl mx-auto">
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl mb-16 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mentions légales
              </h1>
              <p style={{ color: "var(--text-secondary)" }}>
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l&apos;économie numérique, il est
                précisé aux utilisateurs du site Advisia l&apos;identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
              </p>

              <h2
                className="text-xl mb-4 mt-8 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Edition du site
              </h2>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                Le site advicia.agency est édité par la société SDSI – Société
                de Distribution de Services sur Internet, SAS au capital social
                de 31 000 €, immatriculée au Registre du Commerce et des
                Sociétés de Tarbes sous le numéro 898 186 721.
              </p>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                SIRET : 898 186 721 00016
              </p>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                N° TVA intracommunautaire : FR83898186721
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                Siège social : Pyrène Aéropôle, Téléport, Bâtiment 4, 65290
                Juillan
              </p>

              <h2
                className="text-xl mb-4 mt-8 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Responsable de la publication
              </h2>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                Le responsable de la publication est Julien Camy, en qualité de
                représentant légal de la société SDSI.
              </p>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                Contact : contact@advisia.agency
              </p>

              <h2
                className="text-xl mb-4 mt-8 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Hébergement
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Le Site est hébergé par la société Vercel, situé 440 N Barranca
                Ave #4133 Covina, CA 91723 United States, (contact téléphonique
                : +15592887060).
              </p>

              <h2
                className="text-xl mb-4 mt-8 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Propriété intellectuelle
              </h2>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                L&apos;ensemble du site, sa structure, ses textes, images, vidéos,
                graphismes, logos, icônes et sons sont la propriété exclusive
                d&apos;Advisia et de ses partenaires, sauf mention contraire.
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                Toute reproduction, représentation, modification, publication,
                transmission, dénaturation, totale ou partielle du site ou de
                son contenu, par quelque procédé que ce soit, et sur quelque
                support que ce soit, est interdite sans l&apos;autorisation écrite
                préalable de la société SDSI.
              </p>

              <h2
                className="text-xl mb-4 mt-8 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Liens hypertextes
              </h2>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                Les liens hypertextes présents sur le site peuvent renvoyer vers
                des sites externes. Advisia décline toute responsabilité quant
                au contenu, au fonctionnement ou à la politique de
                confidentialité de ces sites tiers.
              </p>

              <h2
                className="text-xl mb-4 mt-8 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Limitations de responsabilité
              </h2>
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                Advisia met tout en œuvre pour assurer l&apos;exactitude et la mise à
                jour des informations diffusées. Toutefois, elle ne peut
                garantir l&apos;exactitude, la complétude ou l&apos;actualité des
                informations publiées, ni être tenue responsable d&apos;erreurs ou
                d&apos;omissions.
              </p>
            </section>
          </article>
        </div>
      </div>
      <SectionCTASmall />
      <Footer />
    </main>
  );
}
