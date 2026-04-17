import Footer from "@/components/footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import HandshakeReveal from "@/components/hero-animations/HandshakeReveal";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageTestimonial from "@/components/page-testimonial";
import FormationPartenariatToggle from "./formation-partenariat-toggle";
import SeoFooterText from "@/components/seo-footer-text";

export const metadata = {
  title: "Formation IA et Partenariat Mensuel | Advisia",
  description:
    "Formation de vos équipes à l'IA, suivi mensuel et évolutions continues. Workshop dirigeants, formation équipes, partenariat mensuel.",
  alternates: {
    canonical: "https://advisia.agency/accompagnement",
  },
  openGraph: {
    title: "Formation IA et Partenariat Mensuel | Advisia",
    description:
      "Formation de vos équipes à l'IA, suivi mensuel et évolutions continues.",
    url: "https://advisia.agency/accompagnement",
    siteName: "Advisia",
    type: "website",
  },
};

const PAGE_WAYPOINTS = [
  { x: 50, y: 0 },
  { x: 70, y: 0.10 },
  { x: 30, y: 0.22 },
  { x: 70, y: 0.38 },
  { x: 30, y: 0.55 },
  { x: 70, y: 0.72 },
  { x: 30, y: 0.88 },
  { x: 50, y: 1.0 },
];
const PAGE_DOT_FRACTIONS = [0, 0.12, 0.25, 0.38, 0.52, 0.65, 0.78, 0.92, 1.0];


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Formation IA et Accompagnement",
  description: "Formation de vos équipes à l'IA, suivi mensuel et évolutions continues. Workshop dirigeants, formation équipes, partenariat mensuel.",
  provider: { "@type": "Organization", name: "Advisia", url: "https://advisia.agency" },
  areaServed: "France",
  serviceType: "Formation et Accompagnement IA",
  url: "https://advisia.agency/accompagnement",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "On peut arrêter quand on veut ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Nos partenariats mensuels fonctionnent sans engagement de durée. Vous pouvez mettre fin au contrat à tout moment, avec un préavis d'un mois." } },
    { "@type": "Question", name: "La formation est adaptée aux non-techniciens ?", acceptedAnswer: { "@type": "Answer", text: "C'est fait pour ça. On part de votre métier, pas de la technologie. Aucune connaissance technique préalable n'est nécessaire." } },
    { "@type": "Question", name: "Et si vous n'avez pas déployé nos outils ?", acceptedAnswer: { "@type": "Answer", text: "On peut prendre en charge vos outils existants. Notre accompagnement n'est pas conditionné à l'utilisation de solutions spécifiques." } },
    { "@type": "Question", name: "Le partenariat Stratégique inclut-il des heures de développement ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Le partenariat Stratégique inclut 15 à 25h/mois de développement, des arbitrages d'architecture et une direction technique partagée." } },
    { "@type": "Question", name: "Peut-on monter en gamme en cours de route ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Vous pouvez changer de formule au mois le mois, sans frais de changement. On réévalue régulièrement vos besoins ensemble." } },
  ],
};

export default function AccompagnementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="relative" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <VerticalFlowLine waypoints={PAGE_WAYPOINTS} dotFractions={PAGE_DOT_FRACTIONS} />

        {/* HERO — layout 60/40 */}
        <section
          className="w-full overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)" }}
        >
          <div className="relative container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 w-full">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left 60% */}
                <div className="flex flex-col gap-6 lg:w-[60%]">
                  <BulletHeadline as="p">Formation & Accompagnement</BulletHeadline>
                  <HandshakeReveal
                    text="Votre investissement porte ses fruits après la livraison."
                    className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
                  />
                  <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                    Formation de vos équipes, suivi mensuel, évolutions continues. On reste dans la durée pour que votre investissement continue de porter ses fruits.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm w-max transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                    style={{ background: "#c9fe6e", color: "#0a0a0f" }}
                  >
                    Parler à un expert <ArrowUpRight size={16} />
                  </Link>
                </div>

                {/* Right 40% — small KPI cards */}
                <div className="flex flex-row lg:flex-col gap-3 lg:w-[40%] lg:pt-4 flex-wrap items-start lg:items-end">
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>+50</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Équipes formées</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>1 mois</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Sans engagement</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>&lt;24h</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Réponse support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHOIX FORMATION / PARTENARIAT */}
        <section
          className="py-10 md:py-14 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <FormationPartenariatToggle />
          </div>
        </section>

        <PageTestimonial
          testimonials={[
            {
              quote: "Ça fait 8 mois qu'on est en partenariat Business. Chaque mois il y a une amélioration concrète. On ne pourrait plus s'en passer.",
              author: "Nicolas F., DG",
              company: "Cabinet d'expertise comptable (20 salariés)",
            },
            {
              quote: "Le workshop dirigeant m'a fait gagner 6 mois. J'ai compris en 3 heures ce que j'aurais mis des mois à découvrir seul.",
              author: "Stéphanie K., Présidente",
              company: "Groupe hôtelier (3 établissements)",
            },
          ]}
        />

        {/* FAQ */}
        <FAQCenter
          title="Vos questions sur l'accompagnement"
          questions={[
            {
              id: "q1",
              question: "On peut arrêter quand on veut ?",
              answer: "Oui. Nos partenariats mensuels fonctionnent sans engagement de durée. Vous pouvez mettre fin au contrat à tout moment, avec un préavis d'un mois.",
            },
            {
              id: "q2",
              question: "La formation est adaptée aux non-techniciens ?",
              answer: "C'est fait pour ça. On part de votre métier, pas de la technologie. Aucune connaissance technique préalable n'est nécessaire.",
            },
            {
              id: "q3",
              question: "Et si vous n'avez pas déployé nos outils ?",
              answer: "On peut prendre en charge vos outils existants. Notre accompagnement n'est pas conditionné à l'utilisation de solutions spécifiques.",
            },
            {
              id: "q4",
              question: "Le partenariat Stratégique inclut-il des heures de développement ?",
              answer: "Oui. Le partenariat Stratégique inclut 15 à 25h/mois de développement, des arbitrages d'architecture et une direction technique partagée.",
            },
            {
              id: "q5",
              question: "Peut-on monter en gamme en cours de route ?",
              answer: "Oui. Vous pouvez changer de formule au mois le mois, sans frais de changement. On réévalue régulièrement vos besoins ensemble.",
            },
          ]}
        />

        {/* CTA FINALE */}
        <section
          className="py-10 lg:py-16 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x max-w-xl mx-auto">
            <ScrollReveal>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quelle formule correspond à votre situation ?
              </h2>
              <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
                Formation, partenariat ou les deux &mdash; on construit la formule qui vous convient.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                  style={{ background: "#c9fe6e", color: "#0a0a0f" }}
                >
                  Choisir ma formule d&apos;accompagnement <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,58,237,0.1)]"
                  style={{ border: "1px solid rgba(124,58,237,0.3)", color: "var(--text-primary)" }}
                >
                  Voir tous nos tarifs <ArrowUpRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionCTAForm />

        <SeoFooterText
          text="Advisia propose des formations IA et des partenariats mensuels pour les PME françaises. Workshop dirigeants, formation équipes, suivi technique mensuel. On ne disparaît pas après la livraison."
        />
      </main>
      <Footer />
    </>
  );
}
