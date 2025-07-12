import Footer from "@/components/footer";
import SectionCTASmall from "@/components/section-cta-small";

export default function PolitiqueDeConfidentialite() {
  return (
    <main>
      <div className="dark bg-background text-foreground">
        <div className="container-md pt-[95px]">
          <article className="global-padding-x py-8 md:py-16 mx-auto">
            <section className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-16">
                Politique de confidentialité
              </h1>
              <p className="text-muted-foreground">
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l&apos;économie numérique, il est
                précisé aux utilisateurs du site Enzo Ferrer l&apos;identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
              </p>
              <h2 className="text-xl mb-4 mt-8">Edition du site </h2>
              <p className="text-muted-foreground">
                Le présent site, accessible à l&apos;URL www.enzoferrer.com (le
                « Site »), est édité par :
              </p>
              <p className="text-muted-foreground">
                Enzo Ferrer, résidant 38 rue Victor Hugo, 65000 Tarbes, de
                nationalité Française (France), né(e) le 16/11/2001,{" "}
              </p>
              <h2 className="text-xl mb-4 mt-8">Hébergement</h2>
              <p className="text-muted-foreground">
                Le Site est hébergé par la société Vercel, situé 440 N Barranca
                Ave #4133 Covina, CA 91723 United States, (contact téléphonique
                : +15592887060).
              </p>
              <h2 className="text-xl mb-4 mt-8">Directeur de publication</h2>
              <p className="text-muted-foreground">
                Le Directeur de la publication du Site est Enzo Ferrer.
              </p>

              <h2 className="text-xl mb-4 mt-8">Me contacter</h2>
              <p className="text-muted-foreground">
                Par téléphone : +33770121895
              </p>
              <p className="text-muted-foreground">
                Par email : enzoferrer.pro@gmail.com
              </p>
              <p className="text-muted-foreground">
                Par courrier : 38 rue Victor Hugo, 65000 Tarbes
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
