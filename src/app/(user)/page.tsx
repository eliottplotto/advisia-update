import FeaturedProjectScreen from "@/components/featured-project-screen";
import Agency from "@/components/home/agency";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import LastProjectScreen from "@/components/lasts-projects";
import SectionCTA from "@/components/section-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Agency />
      <FeaturedProjectScreen />
      <LastProjectScreen />
      <Services />
      <SectionCTA />
      <section className="container h-screen flex items-center">
        <h2 className="text-4xl md:text-6xl lg:text-8xl max-w-6xl mx-auto text-center py-8">
          Footer
        </h2>
      </section>
    </main>
  );
}
