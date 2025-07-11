import EtudesDeCas from "@/components/etudes-de-cas";
import Footer from "@/components/footer";
import Agency from "@/components/home/agency";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import LogosConfiance from "@/components/logos-confiance";
import PourquoiAdvisia from "@/components/pourquoi-advisia";
import SectionCTAForm from "@/components/section-cta-form";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogosConfiance />
      <Services />
      <Agency />
      <EtudesDeCas />
      <PourquoiAdvisia />
      <SectionCTAForm />
      <Footer />
    </main>
  );
}
