import Footer from "@/components/footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import HandshakeReveal from "@/components/hero-animations/HandshakeReveal";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import PageTestimonial from "@/components/page-testimonial";
import AccompagnementFormations from "./accompagnement-formations";
import AccompagnementPartenariats from "./accompagnement-partenariats";

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

        {/* HERO */}
        <section
          className="w-full overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)" }}
        >
          <div className="container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 flex flex-col justify-center gap-6 w-full">
              <BulletHeadline as="p">Formation & Accompagnement</BulletHeadline>
              <HandshakeReveal
                text="Votre investissement porte ses fruits après la livraison."
                className="text-4xl lg:text-5xl xl:text-6xl lg:max-w-4xl"
              />
              <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Formation de vos équipes, suivi mensuel, évolutions continues. On reste dans la durée pour que votre investissement continue de porter ses fruits.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/tarifs?category=partenariat"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                  style={{ background: "#c9fe6e", color: "#0a0a0f" }}
                >
                  Choisir ma formule <RiArrowRightUpLine size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,58,237,0.1)]"
                  style={{ border: "1px solid rgba(124,58,237,0.3)", color: "var(--text-primary)" }}
                >
                  Parler à un expert <RiArrowRightUpLine size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FORMATIONS — hover expand 50/50 */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-4">&#9679; Formations</div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vos équipes maîtrisent-elles déjà l&apos;IA ?
              </h2>
              <p className="mb-8 max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Des formats courts et opérationnels pour que vos dirigeants et équipes comprennent et utilisent l&apos;IA au quotidien.
              </p>
            </ScrollReveal>

            <AccompagnementFormations />
          </div>
        </section>

        {/* PARTENARIAT MENSUEL */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0D0D14" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-4">&#9679; Partenariat mensuel</div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vos outils sont en place. Et après ?
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9fe6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="11" x="5" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                <span className="text-sm" style={{ color: "#c9fe6e" }}>Mensuel, résiliable à tout moment.</span>
              </div>
              <p className="mb-4 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                Vous avez un site, des automatisations ou des outils IA — que ce soit nous qui les ayons construits ou non. Le partenariat, c&apos;est quelqu&apos;un qui les surveille, les fait évoluer et vous conseille. Sans que vous ayez à gérer la technique.
              </p>
              <p className="mb-12 max-w-2xl text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Contrats mensuels, sans engagement de durée. Vous arrêtez quand vous voulez.
              </p>
            </ScrollReveal>

            <AccompagnementPartenariats />
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
                  Choisir ma formule d&apos;accompagnement <RiArrowRightUpLine size={16} />
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,58,237,0.1)]"
                  style={{ border: "1px solid rgba(124,58,237,0.3)", color: "var(--text-primary)" }}
                >
                  Voir tous nos tarifs <RiArrowRightUpLine size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionCTAForm />
      </main>
      <Footer />
    </>
  );
}
