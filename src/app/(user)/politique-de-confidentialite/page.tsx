import Footer from "@/components/footer";
import SectionCTASmall from "@/components/section-cta-small";

export const metadata = {
  title: "Politique de confidentialité · Agence Advisia",
  description:
    "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Politique de confidentialité · Agence Advisia",
    description:
      "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function PolitiqueDeConfidentialite() {
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
                Politique de confidentialité
              </h1>

              <p style={{ color: "var(--text-muted)" }}>
                Dernière mise à jour : 29 juillet 2025
              </p>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                1. Données personnelles collectées
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Lors de l&apos;utilisation du site, Advisia peut collecter les
                données suivantes :
              </p>
              <ul className="list-disc list-inside mb-4" style={{ color: "var(--text-secondary)" }}>
                <li>Nom, prénom, société, email, téléphone</li>
                <li>
                  Données de navigation (adresse IP, localisation approximative,
                  navigateur, pages vues, etc.)
                </li>
                <li>
                  Données transmises volontairement via les formulaires
                  (contact, estimation projet, etc.)
                </li>
              </ul>
              <p style={{ color: "var(--text-secondary)" }}>
                Ces données sont collectées :
              </p>
              <ul className="list-disc list-inside" style={{ color: "var(--text-secondary)" }}>
                <li>Lors de la navigation sur le site (cookies, scripts)</li>
                <li>Lors de l&apos;envoi d&apos;un formulaire de contact</li>
                <li>Lors d&apos;un échange commercial ou d&apos;un rendez-vous</li>
              </ul>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>2. Finalité du traitement</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Les données sont utilisées uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside mb-4" style={{ color: "var(--text-secondary)" }}>
                <li>Traitement et réponse à votre demande</li>
                <li>Élaboration de devis ou propositions commerciales</li>
                <li>Suivi de relation client ou prospect</li>
                <li>
                  Amélioration des services et du site (analyse de trafic)
                </li>
                <li>
                  Envoi d&apos;emails d&apos;information ou de prospection, si
                  consentement
                </li>
              </ul>
              <p style={{ color: "var(--text-secondary)" }}>
                Aucune donnée personnelle n&apos;est vendue, échangée, louée ou
                partagée à des tiers à des fins commerciales.
              </p>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                3. Base légale du traitement
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Les traitements sont réalisés sur les bases légales suivantes :
              </p>
              <ul className="list-disc list-inside" style={{ color: "var(--text-secondary)" }}>
                <li>Consentement : formulaires, cookies, email marketing</li>
                <li>Exécution contractuelle : devis, prestations</li>
                <li>
                  Intérêt légitime : analyse statistique, amélioration continue
                </li>
              </ul>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>4. Durée de conservation</h2>
              <ul className="list-disc list-inside" style={{ color: "var(--text-secondary)" }}>
                <li>
                  Données clients : 5 ans après la fin de la relation
                  commerciale
                </li>
                <li>Données prospects : 3 ans après le dernier contact</li>
                <li>Données cookies : 13 mois maximum</li>
                <li>
                  Données techniques anonymes : durée de vie standard Google
                  Analytics / Plausible
                </li>
              </ul>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>5. Cookies et traceurs</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Le site utilise des cookies pour :
              </p>
              <ul className="list-disc list-inside mb-4" style={{ color: "var(--text-secondary)" }}>
                <li>Mesurer l&apos;audience (Google Analytics / Plausible)</li>
                <li>Améliorer l&apos;expérience utilisateur</li>
                <li>Suivre les conversions publicitaires</li>
              </ul>
              <p style={{ color: "var(--text-secondary)" }}>
                Vous pouvez gérer vos préférences de cookies directement via
                votre navigateur ou à l&apos;ouverture du site, grâce à la
                bannière de consentement.
              </p>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>6. Droits de l&apos;utilisateur</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside mb-4" style={{ color: "var(--text-secondary)" }}>
                <li>Droit d&apos;accès, de rectification, d&apos;effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit de limitation ou d&apos;opposition au traitement</li>
                <li>Droit d&apos;introduire une réclamation auprès de la CNIL</li>
              </ul>
              <p style={{ color: "var(--text-secondary)" }}>
                Pour toute demande, contactez-nous à : contact@advisia.agency
              </p>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>7. Sécurité</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Advisia met en place toutes les mesures nécessaires (techniques
                et organisationnelles) pour garantir la sécurité, la
                confidentialité et l&apos;intégrité de vos données personnelles.
              </p>

              <h2 className="text-xl mb-4 mt-8 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                8. Modifications de la politique
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                La présente politique de confidentialité peut être mise à jour à
                tout moment. La dernière version est toujours disponible sur le
                site, à la date indiquée ci-dessous.
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
