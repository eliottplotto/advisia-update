import Footer from "@/components/footer";
import HandshakeReveal from "@/components/hero-animations/HandshakeReveal";
import ScrollReveal from "@/components/ui/scroll-reveal";
import SectionCTAForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";
import HoverExpandColumns from "@/components/hover-expand-columns";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import Link from "next/link";
import {
  RiArrowRightUpLine,
  RiCheckLine,
  RiUserStarFill,
  RiGroupFill,
} from "@remixicon/react";
import PageTestimonial from "@/components/page-testimonial";

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

const partenariats = [
  {
    name: "Essentiel",
    price: "490 €/mois",
    featured: false,
    href: "/contact?besoin=partenariat-essentiel",
    items: [
      "On surveille que tout tourne — si ça casse, on répare",
      "1h par mois pour faire le point et prioriser",
      "Une question ? Réponse sous 48h",
      "Rapport mensuel sur l'usage de vos outils",
    ],
  },
  {
    name: "Business",
    price: "990 €/mois",
    featured: true,
    href: "/contact?besoin=partenariat-business",
    items: [
      "Chaque mois, un process de plus qui tourne sans vous",
      "Vos outils évoluent en continu sans effort de votre part",
      "Une question ? Réponse sous 24h",
      "2h de suivi bimensuel pour piloter les priorités",
      "Rapport de performance mensuel",
    ],
  },
  {
    name: "Stratégique",
    price: "1990 €/mois",
    featured: false,
    href: "/contact?besoin=partenariat-strategique",
    items: [
      "Évolutions illimitées — on avance tant qu'il y a des choses à améliorer",
      "Un directeur technique dédié, sans le recruter",
      "Accès à toutes les expertises Advisia (IA, web, data, marketing)",
      "Support dédié, réponse en 4h",
      "Comité direction mensuel pour arbitrer les priorités",
    ],
  },
];

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
  const workshopSlot = (
    <div className="flex flex-col h-full rounded-xl p-10 transition-all duration-300" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)" }}>
          <RiUserStarFill size={20} style={{ color: "var(--violet)" }} />
        </div>
        <span
          className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "var(--violet)" }}
        >
          Dirigeants
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Workshop IA Dirigeants
      </h3>
      <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: "var(--text-secondary)" }}>
        Une demi-journée pour comprendre les enjeux, les opportunités et les risques de l&apos;IA pour votre secteur. Format interactif, cas concrets de votre métier.
      </p>
      <div className="flex items-baseline gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <p className="text-3xl font-bold" style={{ color: "#c9fe6e" }}>490 &euro;</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Prix fixe</p>
        </div>
        <div className="border-l pl-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm font-semibold">Demi-journée</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Durée</p>
        </div>
      </div>
      <ul className="space-y-2">
        {[
          "Panorama IA appliqué à votre secteur",
          "Identification des cas d'usage prioritaires",
          "Feuille de route personnalisée",
          "Format groupe ou individuel",
        ].map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <RiCheckLine size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--violet)" }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const formationEquipesSlot = (
    <div className="flex flex-col h-full rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)" }}>
          <RiGroupFill size={20} style={{ color: "var(--violet)" }} />
        </div>
        <span
          className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "var(--violet)" }}
        >
          Équipes
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Formation Équipes
      </h3>
      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>
        Formation opérationnelle de vos équipes sur les outils IA déployés ou sur les bonnes pratiques IA au quotidien. De 1 à 3 jours selon le périmètre.
      </p>
      <div className="flex items-baseline gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <p className="text-2xl font-bold" style={{ color: "#c9fe6e" }}>990 &euro; &ndash; 2 500 &euro;</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Prix fixe</p>
        </div>
        <div className="border-l pl-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm font-semibold">1 à 3 jours</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Durée</p>
        </div>
      </div>
      <ul className="space-y-2">
        {[
          "Formation sur vos outils IA déployés",
          "Bonnes pratiques prompting & usage",
          "Exercices pratiques sur vos cas métier",
          "Support & documentation inclus",
        ].map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <RiCheckLine size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--violet)" }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

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
            <div className="global-padding-x py-10 lg:py-16 flex flex-col gap-6 max-w-3xl">
              <HandshakeReveal
                text="Votre investissement porte ses fruits après la livraison."
                className="text-4xl lg:text-5xl xl:text-6xl"
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

            <HoverExpandColumns
              leftSlot={workshopSlot}
              rightSlot={formationEquipesSlot}
              leftBg="transparent"
              rightBg="transparent"
              leftHoveredBg="rgba(255,255,255,0.02)"
              rightHoveredBg="rgba(255,255,255,0.02)"
              minHeight="360px"
            />
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

            {/* Desktop */}
            <div className="hidden md:flex items-stretch divide-x" style={{ borderColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden" }}>
              {partenariats.map((p, i) => (
                <div
                  key={i}
                  className="flex-1 p-8 flex flex-col transition-all duration-300 hover:bg-white/[0.02]"
                  style={{
                    background: p.featured ? "rgba(255,255,255,0.04)" : "transparent",
                    borderRight: i < partenariats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <div className="font-mono font-bold text-5xl leading-none mb-6" style={{ color: "rgba(201,254,110,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {p.featured && (
                    <div className="mb-3">
                      <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "var(--violet)", color: "#fff" }}>
                        Recommandé
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{p.name}</h3>
                  <p className="text-xl font-bold mb-6" style={{ color: "#c9fe6e" }}>{p.price}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <RiCheckLine size={13} className="mt-0.5 flex-shrink-0" style={{ color: p.featured ? "#c9fe6e" : "var(--violet)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
                    style={p.featured ? { background: "var(--ad-1)", color: "#000" } : { border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }}
                  >
                    Choisir {p.name} <RiArrowRightUpLine size={13} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex md:hidden flex-col gap-4">
              {partenariats.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6"
                  style={{
                    borderLeft: "3px solid rgba(201,254,110,0.4)",
                    background: p.featured ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                    borderRadius: "0 8px 8px 0",
                  }}
                >
                  <div className="font-mono font-bold text-3xl leading-none mb-4" style={{ color: "rgba(201,254,110,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {p.featured && (
                    <div className="mb-2">
                      <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "var(--violet)", color: "#fff" }}>
                        Recommandé
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{p.name}</h3>
                  <p className="text-xl font-bold mb-4" style={{ color: "#c9fe6e" }}>{p.price}</p>
                  <ul className="space-y-2 mb-6">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <RiCheckLine size={13} className="mt-0.5 flex-shrink-0" style={{ color: p.featured ? "#c9fe6e" : "var(--violet)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
                    style={p.featured ? { background: "var(--ad-1)", color: "#000" } : { border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }}
                  >
                    Choisir {p.name} <RiArrowRightUpLine size={13} />
                  </Link>
                </div>
              ))}
            </div>
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
