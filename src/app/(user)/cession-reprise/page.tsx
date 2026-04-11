import Footer from "@/components/footer";
import ValueReveal from "@/components/hero-animations/ValueReveal";
import ScrollReveal from "@/components/ui/scroll-reveal";
import SectionCTAForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";
import HoverExpandColumns from "@/components/hover-expand-columns";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import Link from "next/link";
import {
  RiArrowRightUpLine,
  RiArrowDownLine,
  RiCheckLine,
} from "@remixicon/react";
import PageTestimonial from "@/components/page-testimonial";

export const metadata = {
  title: "Valorisation Digitale — Cession et Reprise d'Entreprise | Advisia",
  description:
    "Vous cédez ou reprenez une entreprise ? On évalue et améliore la maturité digitale pour valoriser la cession et accélérer la reprise.",
  alternates: {
    canonical: "https://advisia.agency/cession-reprise",
  },
  openGraph: {
    title: "Valorisation Digitale — Cession et Reprise d'Entreprise | Advisia",
    description:
      "Vous cédez ou reprenez une entreprise ? On évalue et améliore la maturité digitale pour valoriser la cession et accélérer la reprise.",
    url: "https://advisia.agency/cession-reprise",
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

const packs = [
  {
    name: "Modernisation Express",
    price: "3 500 - 6 000 €",
    delay: "3-4 semaines",
    featured: false,
    href: "/contact?besoin=cession-pack-essentiel",
    items: [
      "Audit maturité digitale",
      "Refonte site ou outils clés",
      "2-3 automatisations ciblées",
      "Documentation processus",
    ],
  },
  {
    name: "Transformation Post-Reprise",
    price: "8 000 - 15 000 €",
    delay: "6-8 semaines",
    featured: true,
    href: "/contact?besoin=cession-pack-transformation",
    items: [
      "Tout Modernisation Express",
      "Refonte complète des outils digitaux",
      "Assistant IA métier",
      "Formation équipes",
      "Accompagnement 3 mois",
    ],
  },
  {
    name: "Transformation + IA Métier",
    price: "18 000 - 35 000 €",
    delay: "8-12 semaines",
    featured: false,
    href: "/contact?besoin=cession-pack-complet",
    items: [
      "Tout Transformation Post-Reprise",
      "Agent IA avancé sur mesure",
      "Intégrations ERP/CRM complètes",
      "Roadmap IA 12 mois",
    ],
  },
];

const cedantAvantages = [
  "Rapport chiffré maturité digitale — argument négociation",
  "Quick wins valorisation 4-8 semaines",
  "Preuve documentée solidité des processus",
  "Accompagnement transition équipes",
];

const repreneurAvantages = [
  "Audit complet état digital réel avant signature",
  "Levier négociation prix si lacunes identifiées",
  "Plan action priorisé pour rentabiliser plus vite",
  "Automatisation des processus clés premières semaines",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Valorisation Digitale Cession Reprise",
  description: "Évaluation et amélioration de la maturité digitale pour valoriser la cession et accélérer la reprise d'entreprise.",
  provider: { "@type": "Organization", name: "Advisia", url: "https://advisia.agency" },
  areaServed: "France",
  serviceType: "Valorisation Digitale",
  url: "https://advisia.agency/cession-reprise",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "La démarche est-elle confidentielle ?", acceptedAnswer: { "@type": "Answer", text: "Oui, strictement confidentiel. Tout ce que vous nous partagez reste entre nous. Nous ne divulguons aucune information à des tiers, acquéreurs ou cédants." } },
    { "@type": "Question", name: "Quelle est la durée de l'audit ?", acceptedAnswer: { "@type": "Answer", text: "L'entretien initial dure environ 1 heure. Le rapport complet vous est remis sous 48 à 72h après cet échange." } },
    { "@type": "Question", name: "Garantissez-vous un prix de cession ?", acceptedAnswer: { "@type": "Answer", text: "Non. Notre rapport est factuel et chiffré : il évalue la maturité digitale, identifie les quick wins et estime l'impact potentiel sur la valorisation. Mais nous ne garantissons pas de prix." } },
    { "@type": "Question", name: "Est-ce utile juste avant la signature ?", acceptedAnswer: { "@type": "Answer", text: "C'est le meilleur moment pour agir. Avant signature, vous avez encore des leviers de négociation. Un rapport de maturité digitale peut changer la donne." } },
    { "@type": "Question", name: "Et si la cession n'est pas imminente ?", acceptedAnswer: { "@type": "Answer", text: "Plusieurs de nos clients commencent 2 à 3 ans avant la cession pour préparer et valoriser leur dossier au maximum." } },
  ],
};

export default function CessionReprisePage() {
  const cedantSlot = (
    <div className="p-10 flex flex-col justify-between h-full" style={{ minHeight: "380px" }}>
      <div>
        <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Vous cédez
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Maximiser la valeur avant la cession
        </p>
        <ul className="space-y-3 mb-8">
          {cedantAvantages.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <RiCheckLine size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#c9fe6e" }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-6" style={{ borderTop: "1px solid rgba(201,254,110,0.15)" }}>
        <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(201,254,110,0.6)" }}>
          Impact estimé sur la valorisation
        </p>
        <p className="text-3xl font-bold" style={{ color: "#c9fe6e" }}>
          +5 à +20%
        </p>
      </div>
    </div>
  );

  const repreneurSlot = (
    <div className="p-10 flex flex-col justify-between h-full" style={{ minHeight: "380px" }}>
      <div>
        <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Vous reprenez
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Évaluer et moderniser rapidement
        </p>
        <ul className="space-y-3 mb-8">
          {repreneurAvantages.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <RiCheckLine size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#c9fe6e" }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-6" style={{ borderTop: "1px solid rgba(201,254,110,0.15)" }}>
        <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(201,254,110,0.6)" }}>
          Audit livré sous
        </p>
        <p className="text-3xl font-bold" style={{ color: "#c9fe6e" }}>
          48–72h
        </p>
      </div>
    </div>
  );

  const steps = [
    {
      num: "01",
      title: "Audit Flash Gratuit",
      sub: "GRATUIT",
      desc: "Un échange pour comprendre votre situation, identifier les enjeux numériques clés et cadrer la démarche.",
      price: "Gratuit",
    },
    {
      num: "02",
      title: "Audit Maturité Numérique",
      sub: "990 EUR",
      desc: "Scoring sur 5 axes, quick wins de valorisation, estimation chiffrée de l'impact sur le prix de cession.",
      price: "990 €",
    },
    {
      num: "03",
      title: "Pack Accompagnement",
      sub: "SELON AMBITION",
      desc: "Modernisation, transformation complète ou intégration IA métier — on adapte l'offre à votre situation.",
      price: "Sur devis",
    },
  ];

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
              <span
                className="inline-flex w-max items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "var(--violet)",
                }}
              >
                Cession & Reprise
              </span>

              <ValueReveal
                text="Votre entreprise vaut plus si elle est numériquement mature."
                className="text-4xl lg:text-5xl xl:text-6xl"
              />

              <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Vous cédez ou reprenez une entreprise ? La maturité numérique est devenue un critère de valorisation clé. On vous aide à l&apos;évaluer, l&apos;améliorer et le prouver aux acquéreurs.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/prendre-rendez-vous"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                  style={{ background: "#c9fe6e", color: "#0a0a0f" }}
                >
                  Audit Flash gratuit &mdash; 30 min <RiArrowRightUpLine size={16} />
                </Link>
                <Link
                  href="#packs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,58,237,0.1)]"
                  style={{ border: "1px solid rgba(124,58,237,0.3)", color: "var(--text-primary)" }}
                >
                  Voir nos packs <RiArrowDownLine size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SITUATIONS — hover expand */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-8">&#9679; Vous êtes dans quelle situation ?</div>
            </ScrollReveal>
            <HoverExpandColumns
              leftSlot={cedantSlot}
              rightSlot={repreneurSlot}
              leftBg="#0D0D14"
              rightBg="rgba(255,255,255,0.04)"
              leftHoveredBg="rgba(22,22,32,1)"
              rightHoveredBg="rgba(255,255,255,0.07)"
              minHeight="380px"
            />
          </div>
        </section>

        {/* PARCOURS 3 ETAPES — timeline sans card box */}
        <section
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0D0D14" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-8">&#9679; Comment ça fonctionne</div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vous cédez ou reprenez ? Voici les 3 étapes.
              </h2>
            </ScrollReveal>

            {/* Desktop horizontal timeline — no card box */}
            <div className="hidden md:flex items-stretch gap-0">
              {steps.map((step, i) => (
                <div key={i} className="flex items-stretch flex-1">
                  <ScrollReveal delay={i * 0.08} className="flex-1">
                    <div className="relative flex flex-col h-full px-8 py-6 overflow-hidden">
                      {/* Large background number */}
                      <span
                        className="absolute top-0 right-2 font-mono font-bold leading-none select-none pointer-events-none"
                        style={{ color: "rgba(255,255,255,0.04)", fontSize: "6rem" }}
                      >
                        {step.num}
                      </span>
                      <h3
                        className="text-xl font-bold mb-1 relative z-10"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>
                        {step.desc}
                      </p>
                      <span className="font-bold text-lg" style={{ color: "#c9fe6e" }}>
                        {step.price}
                      </span>
                    </div>
                  </ScrollReveal>
                  {i < 2 && (
                    <div className="flex items-center px-0 relative" style={{ width: "32px", flexShrink: 0 }}>
                      <div
                        className="w-full"
                        style={{
                          height: "1px",
                          borderTop: "2px dashed rgba(201,254,110,0.3)",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile vertical timeline — line on left */}
            <div className="flex md:hidden flex-col">
              {steps.map((step, i) => (
                <div key={i} className="flex">
                  <div className="flex flex-col items-center mr-4" style={{ width: "32px", flexShrink: 0 }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold flex-shrink-0"
                      style={{ background: "rgba(201,254,110,0.15)", border: "1px solid rgba(201,254,110,0.3)", color: "#c9fe6e" }}
                    >
                      {i + 1}
                    </div>
                    {i < 2 && (
                      <div
                        className="flex-1 mt-1"
                        style={{ width: "2px", background: "rgba(201,254,110,0.25)", minHeight: "24px" }}
                      />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </h3>
                    <p className="text-xs mb-2 font-mono uppercase tracking-wider" style={{ color: "rgba(201,254,110,0.6)" }}>
                      {step.sub}
                    </p>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                      {step.desc}
                    </p>
                    <span className="font-bold" style={{ color: "#c9fe6e" }}>{step.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKS */}
        <section
          id="packs"
          className="py-10 lg:py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="container-md global-padding-x">
            <ScrollReveal>
              <div className="section-label mb-4">&#9679; Nos offres</div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                3 niveaux d&apos;accompagnement.
              </h2>
              <p className="mb-8 max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Chaque pack est calibré selon l&apos;ampleur de la transformation souhaitée.
              </p>
            </ScrollReveal>

            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {packs.map((pack, i) => (
                <div key={i} className={`flex-none ${pack.featured ? "md:w-[40%]" : "md:w-[30%]"}`}>
                  <ScrollReveal delay={i * 0.07} className="h-full">
                    <div
                      className={`flex flex-col h-full rounded-xl p-8 transition-all duration-300 ${pack.featured ? "hover:-translate-y-2 shadow-[0_8px_40px_rgba(201,254,110,0.08)]" : "hover:-translate-y-1"}`}
                      style={{
                        background: pack.featured ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                        border: pack.featured ? "2px solid #c9fe6e" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {pack.featured && (
                        <div className="mb-4">
                          <span
                            className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                            style={{ background: "#c9fe6e", color: "#000" }}
                          >
                            Le plus choisi
                          </span>
                        </div>
                      )}
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {pack.name}
                      </h3>
                      <p className="text-2xl font-bold mb-1" style={{ color: "#c9fe6e" }}>{pack.price}</p>
                      <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>Délai : {pack.delay}</p>

                      <ul className="space-y-2.5 mb-8 flex-1">
                        {pack.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <RiCheckLine size={14} className="mt-0.5 flex-shrink-0" style={{ color: pack.featured ? "#c9fe6e" : "var(--violet)" }} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={pack.href}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
                        style={
                          pack.featured
                            ? { background: "#c9fe6e", color: "#000" }
                            : { border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }
                        }
                      >
                        Demander ce pack <RiArrowRightUpLine size={14} />
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageTestimonial
          testimonials={[
            {
              quote: "L'audit a révélé que notre maturité digitale était un argument de vente qu'on n'exploitait pas. On a négocié 15% de plus sur le prix de cession.",
              author: "Jean-Pierre M., Cédant",
              company: "Entreprise de services B2B (45 salariés)",
            },
            {
              quote: "Avant de signer, on voulait savoir dans quoi on mettait les pieds. Le diagnostic nous a évité une mauvaise surprise sur l'infrastructure.",
              author: "Caroline S., Repreneuse",
              company: "PME agroalimentaire",
            },
          ]}
        />

        {/* FAQ */}
        <FAQCenter
          title="Vos questions sur la cession et la reprise"
          questions={[
            {
              id: "q1",
              question: "La démarche est-elle confidentielle ?",
              answer: "Oui, strictement confidentiel. Tout ce que vous nous partagez reste entre nous. Nous ne divulguons aucune information à des tiers, acquéreurs ou cédants.",
            },
            {
              id: "q2",
              question: "Quelle est la durée de l'audit ?",
              answer: "L'entretien initial dure environ 1 heure. Le rapport complet vous est remis sous 48 à 72h après cet échange.",
            },
            {
              id: "q3",
              question: "Garantissez-vous un prix de cession ?",
              answer: "Non. Notre rapport est factuel et chiffré : il évalue la maturité digitale, identifie les quick wins et estime l'impact potentiel sur la valorisation. Mais nous ne garantissons pas de prix.",
            },
            {
              id: "q4",
              question: "Est-ce utile juste avant la signature ?",
              answer: "C'est le meilleur moment pour agir. Avant signature, vous avez encore des leviers de négociation. Un rapport de maturité digitale peut changer la donne.",
            },
            {
              id: "q5",
              question: "Et si la cession n'est pas imminente ?",
              answer: "Plusieurs de nos clients commencent 2 à 3 ans avant la cession pour préparer et valoriser leur dossier au maximum. Plus vous anticipez, plus vous avez le temps de corriger les points faibles identifiés.",
            },
          ]}
        />

        {/* CTA FINALE */}
        <section
          className="py-10 lg:py-16 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0D0D14" }}
        >
          <div className="container-md global-padding-x max-w-xl mx-auto">
            <ScrollReveal>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Commencez par l&apos;Audit Flash gratuit.
              </h2>
              <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
                30 minutes pour faire le point sur votre situation numérique. Sans engagement.
              </p>
              <Link
                href="/prendre-rendez-vous"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
                style={{ background: "#c9fe6e", color: "#0a0a0f" }}
              >
                Réserver l&apos;Audit Flash gratuit <RiArrowRightUpLine size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <SectionCTAForm />
      </main>
      <Footer />
    </>
  );
}
