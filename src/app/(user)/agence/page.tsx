import Footer from "@/components/footer";
import NosOutils from "@/components/nos-outils";
import SectionCTASmall from "@/components/section-cta-small";
import FAQCenter from "@/components/ui/sections/faq-center";
import { StorySection, ManifestoSection } from "@/components/agence/story-and-manifesto";
import StatsBar from "@/components/home/stats-bar";
import AgenceHero from "@/components/agence/agence-hero";

export const metadata = {
  title: "À propos d'Advisia | Agence IA pour PME",
  description:
    "Agence IA, web et marketing digital en France. Vos experts du début à la fin : pas de commercial, pas de sous-traitance. On conseille, on code, on livre.",
  keywords: [
    "agence digitale France",
    "agence web PME",
    "agence IA France",
    "agence digitale Occitanie",
  ],
  alternates: {
    canonical: "https://advisia.agency/agence",
  },
  openGraph: {
    title: "À propos d'Advisia | Agence IA pour PME",
    description:
      "Agence IA, web et marketing digital en France. Vos experts du début à la fin : pas de commercial, pas de sous-traitance.",
    url: "https://advisia.agency/agence",
    siteName: "Advisia",
    type: "website",
  },
};

export default function Agence() {
  const questions = [
    {
      id: "q1",
      question: "Qui sont les gens derrière Advisia ?",
      answer:
        "Advisia, c'est Eliott (tech) et Julien (stratégie). Les experts qui vous conseillent sont ceux qui codent et qui livrent. Quand le projet le demande, on mobilise des spécialistes qu'on connaît et qu'on a déjà testés : designers, développeurs spécialisés, experts SEO.",
    },
    {
      id: "q2",
      question: "Vous travaillez avec quel type d'entreprise ?",
      answer:
        "PME, ETI, startups, franchises. Ce qui compte, c'est l'envie d'avancer et un projet concret. On adapte notre accompagnement à votre taille et votre budget.",
    },
    {
      id: "q3",
      question: "Comment ça se passe concrètement si on travaille ensemble ?",
      answer:
        "On commence par un échange de 20-30 min pour comprendre votre besoin. On vous envoie un devis clair sous 48h. Si c'est OK, on démarre en sprints de 2 semaines avec un call hebdo. Vous validez à chaque étape.",
    },
    {
      id: "q4",
      question: "Je n'y connais rien en tech, c'est un problème ?",
      answer:
        "C'est justement notre métier de traduire. On vous explique tout simplement, on vous forme sur les outils livrés, et on reste disponibles après. Vous gardez le contrôle sans avoir besoin d'être technique.",
    },
    {
      id: "q5",
      question: "Vous êtes basés où ?",
      answer:
        "À Juillan, près de Tarbes dans les Hautes-Pyrénées. Mais on travaille avec des clients partout en France — en visio, Slack ou téléphone. La proximité est dans la réactivité, pas forcément dans la géographie.",
    },
  ];

  return (
    <>
      <main>
        <AgenceHero />
        <StorySection />
        <ManifestoSection />

        {/* Comment on travaille avec vous */}
        <section className="py-16 lg:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-md global-padding-x">
            <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>● Notre process</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12" style={{ fontFamily: "var(--font-display)" }}>
              Comment on travaille avec vous
            </h2>
            <div className="relative flex flex-col gap-0 max-w-2xl">
              {[
                {
                  num: "01",
                  title: "Premier échange gratuit (20-30 min)",
                  desc: "Vous nous décrivez votre situation. On vous dit franchement si on peut vous aider et par où commencer.",
                },
                {
                  num: "02",
                  title: "Diagnostic ou cadrage (48-72h)",
                  desc: "On analyse votre situation en détail. Vous recevez un rapport clair avec les actions prioritaires. À partir de 490 €.",
                },
                {
                  num: "03",
                  title: "Devis et validation",
                  desc: "On vous propose un devis ferme et définitif. Pas de surprise. Vous validez, on démarre.",
                },
                {
                  num: "04",
                  title: "Exécution et livraison (2-8 semaines selon le projet)",
                  desc: "Point hebdomadaire. Avancement en temps réel. Livraison par étapes.",
                },
                {
                  num: "05",
                  title: "Formation et autonomie",
                  desc: "On forme vos équipes. On documente tout. Vous êtes autonomes.",
                },
              ].map((step, i, arr) => (
                <div key={i} className="flex gap-6">
                  {/* Timeline column */}
                  <div className="flex flex-col items-center" style={{ width: 40, flexShrink: 0 }}>
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full font-mono text-xs font-bold z-10"
                      style={{
                        background: "rgba(201,254,110,0.12)",
                        border: "2px solid #c9fe6e",
                        color: "#c9fe6e",
                        flexShrink: 0,
                      }}
                    >
                      {step.num}
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="flex-1 w-[2px] my-1"
                        style={{
                          background: "repeating-linear-gradient(to bottom, rgba(201,254,110,0.35) 0px, rgba(201,254,110,0.35) 6px, transparent 6px, transparent 12px)",
                          minHeight: 40,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={i < arr.length - 1 ? "pb-10" : "pb-0"}>
                    <p className="font-bold text-white mb-1">{step.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsBar />
        <FAQCenter title="On répond à vos questions" questions={questions} />
        <SectionCTASmall />
        <NosOutils />
      </main>
      <Footer />
    </>
  );
}
