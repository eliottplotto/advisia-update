import Footer from "@/components/footer";
import NosOutils from "@/components/nos-outils";
import PourquoiAdvisia from "@/components/pourquoi-advisia";
import SectionCTASmall from "@/components/section-cta-small";
import FAQCenter from "@/components/ui/sections/faq-center";
import { Header1 } from "@/components/ui/sections/header-1";

export const metadata = {
  title: "L'agence Advisia · Agence web et digitale",
  description:
    "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Advisia · Agence de croissance digitale",
    description:
      "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function Agence() {
  const questions = [
    {
      id: "q1",
      question: "Qui se cache derrière l’agence Advisia ?",
      answer:
        "Advisia, c’est une équipe d’associés expérimentés, entourés d’un collectif de spécialistes : ingénieurs IA, designers UX/UI, développeurs web, experts SEO/SEA et community managers. On combine expertise technique, vision stratégique et sens du concret pour livrer des solutions durables, efficaces et rentables.",
    },
    {
      id: "q2",
      question:
        "Est-ce que vous travaillez uniquement avec les grandes entreprises ou aussi avec les PME et indépendants ?",
      answer:
        "On travaille avec tous types de structures : PME, TPE, artisans, franchises, groupes... Ce qui compte, c’est l’envie de se moderniser, de gagner en performance, et de s’équiper intelligemment. On adapte chaque solution à la taille, au budget et aux objectifs de nos clients.",
    },
    {
      id: "q3",
      question:
        " Comment se passe un accompagnement avec Advisia, concrètement ?",
      answer:
        "Tout commence par un échange simple pour comprendre vos enjeux. Ensuite, on vous propose une solution sur-mesure, avec un plan clair, un devis transparent et un accompagnement pas à pas. Vous êtes impliqué sans être noyé, et vous avez un point de contact dédié du début à la fin.",
    },
    {
      id: "q4",
      question:
        "Est-ce que je peux vous faire confiance si je n’ai pas de connaissances techniques ?",
      answer:
        "Oui, et c’est même notre point fort : rendre des solutions tech accessibles à tous. On vous explique les choses simplement, on vous forme quand il faut, et on reste disponibles après la livraison. Vous gardez toujours le contrôle, sans jamais vous sentir dépassé.",
    },
    {
      id: "q5",
      question:
        "Est-ce que vous proposez un suivi ou une maintenance après la mise en place des solutions ?",
      answer:
        "Oui. Chaque projet peut inclure une maintenance ou un accompagnement post-livraison, en fonction de vos besoins. On peut faire évoluer les outils, corriger, améliorer ou même proposer des optimisations régulières. Vous n’êtes jamais seul après le projet.",
    },
  ];

  return (
    <>
      <main>
        <div className="dark bg-background pt-[95px]">
          <Header1
            heading="Advisia, votre partenaire digital de confiance"
            dark={true}
            layout="imgLeft"
            description="Nous sommes une équipe passionnée de créatifs et de développeurs, dédiée à transformer vos idées en solutions digitales exceptionnelles."
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
