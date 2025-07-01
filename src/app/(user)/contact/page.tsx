import FooterXS from "@/components/footer-xs";
import FAQ from "@/components/ui/faq";
import SectionCTAForm from "@/components/section-cta-form";

export default function Contact() {
  return (
    <main>
      <SectionCTAForm />
      <div className="h-1 bg-primary"></div>
      <FAQ />
      <FooterXS />
    </main>
  );
}
