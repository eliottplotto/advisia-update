import Footer from "@/components/footer";
import NosOutils from "@/components/nos-outils";
import PourquoiAdvisia from "@/components/pourquoi-advisia";
import SectionCTASmall from "@/components/section-cta-small";
import FAQCenter from "@/components/ui/sections/faq-center";
import { Header1 } from "@/components/ui/sections/header-1";

export const metadata = {
  title: "À propos d'Advisia | Agence IA & Web à Tarbes",
  description:
    "Agence IA, web et marketing digital à Tarbes (Hautes-Pyrénées). Vos experts du début à la fin : pas de commercial, pas de sous-traitance. On conseille, on code, on livre.",
  keywords: [
    "agence digitale Tarbes",
    "agence web Hautes-Pyrénées",
    "agence IA Sud-Ouest",
    "agence digitale Occitanie",
  ],
  openGraph: {
    title: "À propos d'Advisia | Agence IA & Web à Tarbes",
    description:
      "Agence IA, web et marketing digital à Tarbes. Vos experts du début à la fin : pas de commercial, pas de sous-traitance.",
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
        <div className="pt-[95px]" style={{ background: "rgba(10,10,15,0.85)" }}>
          <Header1
            heading="Vos experts du début à la fin."
            dark={true}
            layout="imgLeft"
            description="Pas de commercial, pas de sous-traitance. Les experts qui vous conseillent sont ceux qui codent et qui livrent. Eliott (tech) et Julien (stratégie) ont créé Advisia pour apporter aux PME les mêmes outils que les grands groupes — sans les budgets ni la complexité."
            image={{
              src: "/equipe-advisia-square-dark.png",
              alt: "Équipe Advisia",
            }}
          />
        </div>
        <PourquoiAdvisia />
        <NosOutils />
        <FAQCenter title="On répond à vos questions" questions={questions} />
        <SectionCTASmall />
      </main>
      <Footer />
    </>
  );
}
