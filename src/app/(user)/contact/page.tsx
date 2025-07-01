import FooterXS from "@/components/footer-xs";
import ContactForm from "@/components/contact-form";
import { RevealText } from "@/components/RevealText";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import FAQ from "@/components/ui/faq";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowRightFill } from "@remixicon/react";
import LogosSlider from "@/components/logos-slider";
import SectionCTAForm from "@/components/section-cta-form";

export default function Contact() {
  const profils = [
    {
      alt: "Eliott P.",
      src: "/eliott-plotto.jpeg",
    },
    {
      alt: "Julien C.",
      src: "/julien.jpeg",
    },

    {
      alt: "Enzo F.",
      src: "/pp1.jpg",
    },
  ];

  return (
    <main>
      <SectionCTAForm />
      <div className="h-1 bg-primary"></div>
      <FAQ />
      <FooterXS />
    </main>
  );
}
