import FooterXS from "@/components/footer-xs";
import SectionContactForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";

export const metadata = {
  title: "Contacter l'agence · Advisia",
  description:
    "Un projet ou une question ? Contactez-nous en remplissant le formulaire ci-contre. Notre équipe commerciale reviendra vers vous rapidement.",
  keywords: ["advisia", "agence ia", "agence web", "creation site web"],
  openGraph: {
    title: "Contacter l'agence · Advisia",
    description:
      "Un projet ou une question ? Contactez-nous en remplissant le formulaire ci-contre. Notre équipe commerciale reviendra vers vous rapidement.",
    url: "https://advisia.agency",
    siteName: "Advisia",
    type: "website",
  },
};

export default function Contact() {
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
    <main>
      <SectionContactForm as="h1" />
      <FAQCenter title="On répond à vos questions" questions={questions} />
      <FooterXS />
    </main>
  );
}
