import Footer from "@/components/footer";
import Hero from "@/components/home/hero";
import StatsBar from "@/components/home/stats-bar";
import InsightsPreview from "@/components/home/insights-preview";
import ProjectsSection from "@/components/home/projects";
import Services from "@/components/home/services";
import Process from "@/components/home/process";
import LogosConfiance from "@/components/logos-confiance";
import NosOutils from "@/components/nos-outils";
import PourquoiAdvisia from "@/components/pourquoi-advisia";
import SectionCTAForm from "@/components/section-cta-form";
import Testimonials from "@/components/home/testimonials";
import PricingOverview from "@/components/home/pricing-overview";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";

export const metadata = {
  title: "Agence IA & Automatisation pour PME | Advisia",
  description:
    "Advisia automatise vos process et construit vos outils digitaux. +12h/semaine économisées en moyenne. Diagnostic gratuit, zéro engagement.",
  keywords: [
    "agence IA automatisation PME",
    "agence digitale PME",
    "automatiser process entreprise",
    "agence tech PME France",
  ],
  openGraph: {
    title: "Agence IA & Automatisation pour PME | Advisia",
    description:
      "Advisia automatise vos process et construit vos outils digitaux. +12h/semaine économisées en moyenne. Diagnostic gratuit.",
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
      <LogosConfiance />
      <Services />
      <Process />
      <StatsBar />
      <ProjectsSection />
      {/* PLACEHOLDER : remplacer par de vrais témoignages clients */}
      <Testimonials />
      <PourquoiAdvisia />
      <PricingOverview />
      <NosOutils />
      <InsightsPreview />
      <SectionCTAForm />
      <Footer />
    </main>
  );
}