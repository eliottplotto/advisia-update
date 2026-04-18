import Footer from "@/components/footer";
import Hero from "@/components/home/hero";
import StatsBar from "@/components/home/stats-bar";
import Services from "@/components/home/services";
import LogosConfiance from "@/components/logos-confiance";
import SectionCTAForm from "@/components/section-cta-form";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import Process from "@/components/home/process";
import TestimonialsCarousel from "@/components/home/testimonials-carousel";

export const metadata = {
  title: "Agence IA & Automatisation pour PME | Advisia",
  description:
    "Advisia automatise vos tâches et construit vos outils digitaux. +12h/semaine économisées en moyenne. Diagnostic gratuit, zéro engagement.",
  keywords: [
    "agence IA automatisation PME",
    "agence digitale PME",
    "automatiser process entreprise",
    "agence tech PME France",
  ],
  openGraph: {
    title: "Agence IA & Automatisation pour PME | Advisia",
    description:
      "Advisia automatise vos tâches et construit vos outils digitaux. +12h/semaine économisées en moyenne. Diagnostic gratuit.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <VerticalFlowLine />
      <Hero />
      <Services />
      <LogosConfiance />
      <Process />
      <TestimonialsCarousel />
      <StatsBar />
      <SectionCTAForm />
      <Footer />
    </main>
  );
}