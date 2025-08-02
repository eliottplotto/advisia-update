import Footer from "@/components/footer";
import SectionCTASmall from "@/components/section-cta-small";

export default function PolitiqueDeConfidentialite() {
  return (
    <main>
      <div className="dark bg-background text-foreground">
        <div className="container-md pt-[95px]">
          <article className="global-padding-x py-8 md:py-16 mx-auto">
            <section className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-16">
                Politique de confidentialité
              </h1>

              <p className="text-muted-foreground">
                Dernière mise à jour : 29 juillet 2025
              </p>

              <h2 className="text-xl mb-4 mt-8">
                1. Données personnelles collectées
              </h2>
              <p className="text-muted-foreground">
                Lors de l’utilisation du site, Advisia peut collecter les
                données suivantes :
              </p>
              <ul className="text-muted-foreground list-disc list-inside mb-4">
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
              <p className="text-muted-foreground">
                Ces données sont collectées :
              </p>
              <ul className="text-muted-foreground list-disc list-inside">
                <li>Lors de la navigation sur le site (cookies, scripts)</li>
                <li>Lors de l’envoi d’un formulaire de contact</li>
                <li>Lors d’un échange commercial ou d’un rendez-vous</li>
              </ul>

              <h2 className="text-xl mb-4 mt-8">2. Finalité du traitement</h2>
              <p className="text-muted-foreground">
                Les données sont utilisées uniquement dans les cas suivants :
              </p>
              <ul className="text-muted-foreground list-disc list-inside mb-4">
                <li>Traitement et réponse à votre demande</li>
                <li>Élaboration de devis ou propositions commerciales</li>
                <li>Suivi de relation client ou prospect</li>
                <li>
                  Amélioration des services et du site (analyse de trafic)
                </li>
                <li>
                  Envoi d’emails d’information ou de prospection, si
                  consentement
                </li>
              </ul>
              <p className="text-muted-foreground">
                Aucune donnée personnelle n’est vendue, échangée, louée ou
                partagée à des tiers à des fins commerciales.
              </p>

              <h2 className="text-xl mb-4 mt-8">
                3. Base légale du traitement
              </h2>
              <p className="text-muted-foreground">
                Les traitements sont réalisés sur les bases légales suivantes :
              </p>
              <ul className="text-muted-foreground list-disc list-inside">
                <li>Consentement : formulaires, cookies, email marketing</li>
                <li>Exécution contractuelle : devis, prestations</li>
                <li>
                  Intérêt légitime : analyse statistique, amélioration continue
                </li>
              </ul>

              <h2 className="text-xl mb-4 mt-8">4. Durée de conservation</h2>
              <ul className="text-muted-foreground list-disc list-inside">
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

              <h2 className="text-xl mb-4 mt-8">5. Cookies et traceurs</h2>
              <p className="text-muted-foreground">
                Le site utilise des cookies pour :
              </p>
              <ul className="text-muted-foreground list-disc list-inside mb-4">
                <li>Mesurer l’audience (Google Analytics / Plausible)</li>
                <li>Améliorer l’expérience utilisateur</li>
                <li>Suivre les conversions publicitaires</li>
              </ul>
              <p className="text-muted-foreground">
                Vous pouvez gérer vos préférences de cookies directement via
                votre navigateur ou à l'ouverture du site, grâce à la bannière
                de consentement.
              </p>

              <h2 className="text-xl mb-4 mt-8">6. Droits de l’utilisateur</h2>
              <p className="text-muted-foreground">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="text-muted-foreground list-disc list-inside mb-4">
                <li>Droit d’accès, de rectification, d’effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit de limitation ou d’opposition au traitement</li>
                <li>Droit d’introduire une réclamation auprès de la CNIL</li>
              </ul>
              <p className="text-muted-foreground">
                Pour toute demande, contactez-nous à : contact@advisia.agency
              </p>

              <h2 className="text-xl mb-4 mt-8">7. Sécurité</h2>
              <p className="text-muted-foreground">
                Advisia met en place toutes les mesures nécessaires (techniques
                et organisationnelles) pour garantir la sécurité, la
                confidentialité et l’intégrité de vos données personnelles.
              </p>

              <h2 className="text-xl mb-4 mt-8">
                8. Modifications de la politique
              </h2>
              <p className="text-muted-foreground">
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
