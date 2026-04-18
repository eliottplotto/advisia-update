import React from "react";
import Footer from "@/components/footer";
import FAQFloatingButton from "@/components/faq-floating-button";
import {
  CornerDownRight,
  SearchCheck,
  Bot,
  Plug,
  HandHeart,
} from "lucide-react";
import OffresIAGrid from "./offres-ia-grid";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/ui/tracked-link";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import SectionCTAForm from "@/components/section-cta-form";
import Steps1 from "@/components/ui/sections/steps-1";
import LogosConfiance from "@/components/logos-confiance";
import FAQCenter from "@/components/ui/sections/faq-center";
import PixelReveal from "@/components/hero-animations/PixelReveal";
import { LeaderSecteur } from "@/components/services/automatisations-ia/leader-secteur";
import VerticalFlowLine from "@/components/ui/vertical-flow-line";
import MidPageCTA from "@/components/ui/sections/mid-page-cta";
import PageTestimonial from "@/components/page-testimonial";
import ApprochBlocs from "@/components/services/automatisations-ia/approche-blocs";
import SeoFooterText from "@/components/seo-footer-text";
import SeoH2 from "@/components/seo-h2";

export const metadata = {
  title: "Agents IA & Automatisation pour PME | Agence Advisia",
  description:
    "Agents IA sur mesure pour automatiser vos tâches répétitives. +10h/semaine gagnées. CRM, emails, leads, reporting : tout s'automatise.",
  keywords: [
    "agent IA entreprise PME",
    "automatisation process IA",
    "chatbot entreprise IA",
    "automatisation PME",
  ],
  alternates: {
    canonical: "https://advisia.agency/services/automatisations-ia",
  },
  openGraph: {
    title: "Agents IA & Automatisation pour PME | Agence Advisia",
    description:
      "Agents IA sur mesure pour automatiser vos tâches répétitives. +10h/semaine gagnées. CRM, emails, leads, reporting : tout s'automatise.",
    url: "https://advisia.agency/services/automatisations-ia",
    siteName: "Advisia",
    type: "website",
  },
};

const SERVICE_WAYPOINTS = [
  { x: 50, y: 0 },
  { x: 70, y: 0.10 },
  { x: 30, y: 0.25 },
  { x: 70, y: 0.40 },
  { x: 30, y: 0.55 },
  { x: 70, y: 0.70 },
  { x: 30, y: 0.85 },
  { x: 50, y: 1.0 },
];

const SERVICE_DOT_FRACTIONS = [0, 0.12, 0.25, 0.38, 0.52, 0.65, 0.78, 0.92, 1.0];

export default function AutomatisationsIA() {
  const processSteps = [
    {
      title: "Analyse et audit",
      subtitle:
        "On analyse vos flux existants pour repérer les tâches chronophages, sources d'erreurs ou à faible valeur.",
      icon: <SearchCheck size={40} />,
    },
    {
      title: "Développement de l'agent ou des automatisations",
      subtitle:
        "On conçoit une solution sur mesure (agent IA ou automatisation) alignée avec vos objectifs métiers.",
      icon: <Bot size={40} />,
    },
    {
      title: "Intégration aux outils métiers (CRM, agenda, mail...)",
      subtitle:
        "Votre nouveau système s'interface directement avec vos outils existants sans perturber votre organisation.",
      icon: <Plug size={40} />,
    },
    {
      title: "Formation pour garantir l'autonomie",
      subtitle:
        "On forme vos équipes à l'utilisation, la gestion et l'évolution des outils pour rester autonome dans le temps.",
      icon: <HandHeart size={40} />,
    },
  ];

  const questions = [
    {
      id: "q1",
      question: "Est-ce qu'un agent IA est facile à utiliser au quotidien ?",
      answer:
        "Oui, complètement. L'agent fonctionne comme une interface de discussion simple, intégrée à vos outils (mail, Slack, interface web, etc.). Pas besoin de formation technique : si vous savez envoyer un message, vous savez l'utiliser. En plus, on vous forme dès le départ, on vous remet une documentation claire, et on reste disponibles en support à tout moment.",
    },
    {
      id: "q2",
      question:
        "Combien de temps faut-il pour créer et mettre en place un agent IA ?",
      answer:
        "En moyenne, un agent IA est prêt en 2 à 4 semaines. On commence par un échange pour bien comprendre vos besoins, on configure ses connexions (documents, outils internes…) puis on le teste ensemble avant mise en service. C'est rapide, fluide, et on s'occupe de tout.",
    },
    {
      id: "q3",
      question: "Est-ce que je garde le contrôle sur ce que fait l'IA ?",
      answer:
        "Oui, toujours. Vous définissez les rôles, les accès, les sujets qu'il peut traiter. Vous pouvez consulter son historique, ajuster ses réponses, et le faire évoluer si vos besoins changent. C'est votre outil, sur mesure, sous contrôle.",
    },
    {
      id: "q4",
      question:
        "Est-ce que l'IA peut vraiment s'adapter à mon métier ou à mes outils ?",
      answer:
        "Oui, c'est justement l'intérêt d'un agent IA métier. Il est conçu pour comprendre votre vocabulaire, vos documents internes, vos processus. On le connecte à vos outils existants (CRM, Drive, Notion, etc.), et il apprend à répondre de manière pertinente dans votre contexte.",
    },
    {
      id: "q5",
      question:
        "Faut-il changer mon organisation pour mettre en place une solution IA ?",
      answer:
        "Pas du tout. On vient se greffer à votre fonctionnement actuel. L'agent IA s'adapte à vos outils et vos méthodes, sans tout bouleverser. Et s'il peut vous faire gagner du temps sur certains processus, on vous conseille sur les évolutions possibles, à votre rythme.",
    },
  ];

  return (
    <>
      <main className="relative">
        <VerticalFlowLine waypoints={SERVICE_WAYPOINTS} dotFractions={SERVICE_DOT_FRACTIONS} />
        {/* 1. Hero — layout 60/40 */}
        <section className="w-full overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
          <div className="relative container-md pt-[95px]">
            <div className="global-padding-x py-8 lg:py-16 w-full">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left 60% */}
                <div className="flex flex-col gap-6 lg:w-[60%]">
                  <div className="flex items-center gap-4 flex-wrap">
                    <BulletHeadline as="p">Automatisations & IA</BulletHeadline>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      À partir de <span style={{ color: "#c9fe6e" }}>390 €</span>
                    </span>
                  </div>
                  <PixelReveal
                    text="Vos équipes perdent 10h par semaine sur des tâches que l'IA peut faire."
                    className="text-3xl lg:text-4xl xl:text-5xl lg:max-w-4xl"
                  />
                  <SeoH2>
                    Agence IA et automatisation pour PME en France : agents IA
                    sur mesure, workflows N8N, automatisation de tâches
                    répétitives, intégration CRM et reporting.
                  </SeoH2>
                  <p className="max-w-xl text-muted-foreground">
                    Agence IA pour PME en France, on conçoit des agents IA et des automatisations qui
                    éliminent le travail répétitif. Résultat : vos équipes se
                    concentrent sur ce qui compte.
                  </p>
                  <Button size="lg" asChild className="w-max">
                    <TrackedLink href="/contact?besoin=automatisation-ia" trackingLabel="analyser_besoin" trackingPage="automatisations-ia">
                      Analyser mon besoin — gratuit <CornerDownRight />
                    </TrackedLink>
                  </Button>
                </div>

                {/* Right 40% — small KPI cards */}
                <div className="flex flex-row lg:flex-col gap-3 lg:w-[40%] lg:pt-4 flex-wrap items-start lg:items-end">
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>+10h</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Gagnées par semaine</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", width: 160 }}>
                    <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>+50</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Automatisations livrées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. C'est pour vous si */}
        <section className="py-8" style={{ background: "rgba(255,255,255,0.03)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-md global-padding-x">
            <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              C&apos;est pour vous si...
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9fe6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  ),
                  text: "PME de 10 à 200 salariés",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9fe6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  ),
                  text: "Au moins 5h/semaine sur des tâches répétitives",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9fe6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  ),
                  text: "Vous voulez que vos équipes se concentrent sur ce qui compte vraiment.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <p className="text-sm text-white">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Ce qu'on automatise — with "En savoir plus" links */}
        <LeaderSecteur
          heading="Ce qu'on automatise pour vous"
          subheading="Choisissez le type de tâche que vous voulez ne plus jamais faire manuellement."
          sections={[
            {
              icon: "Target",
              heading: "Prospection & Acquisition",
              description:
                "Automatisez la collecte, qualification et relance de vos prospects.",
              link: "/automatisations/prospection",
            },
            {
              icon: "MessageCircle",
              heading: "Relation client & Support",
              description:
                "Répondez automatiquement à 80% des demandes, 24h/24.",
              link: "/automatisations/relation-client",
            },
            {
              icon: "BarChart2",
              heading: "Reporting & Pilotage",
              description:
                "Votre dashboard se génère seul chaque matin.",
              link: "/automatisations/reporting",
            },
            {
              icon: "Search",
              heading: "Veille & Benchmark",
              description:
                "Surveillance automatique de vos concurrents. Synthèse hebdomadaire.",
              link: "/automatisations/veille",
            },
            {
              icon: "FileText",
              heading: "Traitement de documents",
              description:
                "Extraction automatique, saisie zéro, synchro entre logiciels.",
              link: "/automatisations/documents",
            },
            {
              icon: "Megaphone",
              heading: "Marketing & Contenu",
              description:
                "Calendrier éditorial automatisé. Campagnes qui tournent sans intervention.",
              link: "/automatisations/marketing",
            },
          ]}
        />

        {/* 4. Logos confiance */}
        <LogosConfiance />

        {/* 5. Approche — 3 blocs horizontaux */}
        <ApprochBlocs />

        {/* 6. Méthode */}
        <Steps1 title="Notre méthodologie" steps={processSteps} />

        {/* 7. NOS OFFRES + PROCHAINES ÉTAPES */}
        <section
          className="py-10 lg:py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container-md global-padding-x">
            <p className="section-label mb-8">● Nos offres IA</p>
            <OffresIAGrid />
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/tarifs?category=ia" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:border-[#c9fe6e] hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                Voir tous nos tarifs IA →
              </a>
              <a href="/diagnostics" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:border-[#c9fe6e] hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                Faire un diagnostic →
              </a>
            </div>
          </div>
        </section>

        {/* 8. Témoignages */}
        <PageTestimonial
          testimonials={[
            {
              quote: "On a gagné 12h par semaine sur le reporting. L'équipe peut enfin se concentrer sur le terrain.",
              author: "Directeur des opérations",
              company: "LCT Investissements",
              detail: "Réseau de 20 magasins SFR",
            },
            {
              quote: "On avait 3 personnes à temps plein sur la saisie de données. Aujourd'hui c'est automatisé, et elles font du commercial.",
              author: "Sophie M., Directrice administrative",
              company: "PME transport (60 salariés)",
            },
          ]}
        />

        {/* 9. MidPageCTA */}
        <MidPageCTA
          title="Vous reconnaissez votre métier dans ces cas ?"
          subtitle="Décrivez-nous votre situation."
          buttonText="Analyser mon besoin — gratuit"
        />

        {/* 10. FAQ */}
        <div id="faq">
          <FAQCenter title={"On répond à vos questions"} questions={questions} />
        </div>

        {/* 11. Formulaire contact */}
        <SectionCTAForm
          title={
            <>
              Prêts à lancer votre{" "}
              <span className="text-nowrap text-highlight">projet IA ?</span>
            </>
          }
        />

        <SeoFooterText
          text="Advisia est une agence IA et automatisation pour PME en France. On conçoit et déploie des automatisations sur n8n, Make et Zapier pour éliminer les tâches répétitives et libérer vos équipes. Basés en France, on accompagne des PME de 5 à 200 salariés dans tous les secteurs : commerce, industrie, services, santé, logistique."
        />
      </main>
      <Footer />
      <FAQFloatingButton />
    </>
  );
}
