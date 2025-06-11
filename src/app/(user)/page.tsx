import FeaturedProjectScreen from "@/components/featured-project-screen";
import Footer from "@/components/footer";
import Agency from "@/components/home/agency";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import LastProjectScreen from "@/components/lasts-projects";
import SectionCTA from "@/components/section-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Agency />
      <FeaturedProjectScreen />
      <LastProjectScreen />
      <SectionCTA />
      <Footer />
    </main>
  );
}
