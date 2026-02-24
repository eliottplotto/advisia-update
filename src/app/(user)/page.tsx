import Footer from "@/components/footer";
import Team from "@/components/home/team";
import Hero from "@/components/home/hero";
import InsightsPreview from "@/components/home/insights-preview";
import ProjectsSection from "@/components/home/projects";
import Services from "@/components/home/services";
import Process from "@/components/home/process";
import LogosConfiance from "@/components/logos-confiance";
import NosOutils from "@/components/nos-outils";
import PourquoiAdvisia from "@/components/pourquoi-advisia";
import SectionCTAForm from "@/components/section-cta-form";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";

export const metadata = {
  title: "Agence IA & Automatisation pour PME | Advisia",
  description:
    "Agents IA, sites web performants, automatisation des process : Advisia conçoit les outils qui font gagner du temps aux PME et ETI. Diagnostic gratuit.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Agence IA & Automatisation pour PME | Advisia",
    description:
      "Agents IA, sites web performants, automatisation des process : Advisia conçoit les outils qui font gagner du temps aux PME et ETI. Diagnostic gratuit.",
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
      <Team />
      <ProjectsSection />
      <PourquoiAdvisia />
      <NosOutils />
      <InsightsPreview />
      <SectionCTAForm />
      <Footer />
    </main>
  );
}