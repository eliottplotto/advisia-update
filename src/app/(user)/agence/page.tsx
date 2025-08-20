import Footer from "@/components/footer";
import NosOutils from "@/components/nos-outils";
import PourquoiAdvisia from "@/components/pourquoi-advisia";
import SectionCTASmall from "@/components/section-cta-small";
import { Header1 } from "@/components/ui/sections/header-1";

export const metadata = {
  title: "L'agence Advisia · Agence web et digitale",
  description:
    "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Advisia · Agence de croissance digitale",
    description:
      "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function Agence() {
  return (
    <>
      <main>
        <div className="dark bg-background pt-[95px]">
          <Header1
            heading="Advisia, votre partenaire digital de confiance"
            dark={true}
            layout="imgLeft"
            description="Nous sommes une équipe passionnée de créatifs et de développeurs, dédiée à transformer vos idées en solutions digitales exceptionnelles."
            image={{ src: "/equipe-advisia-2.jpg", alt: "Équipe Advisia" }}
          />
        </div>
        <PourquoiAdvisia />
        <NosOutils />
        <SectionCTASmall />
      </main>
      <Footer />
    </>
  );
}
