import Footer from "@/components/footer";
import NosOutils from "@/components/nos-outils";
import PourquoiAdvisia from "@/components/pourquoi-advisia";
import SectionCTASmall from "@/components/section-cta-small";
import { Header1 } from "@/components/ui/sections/header-1";

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
