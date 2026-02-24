import FooterXS from "@/components/footer-xs";
import SectionContactForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";

export const metadata = {
  title: "Contacter Advisia · Agence IA & Web",
  description:
    "Décrivez votre projet. Eliott ou Julien vous répond sous 48h avec une première analyse. Gratuit, sans engagement.",
  keywords: [
    "contacter agence web IA",
    "devis agence digitale",
    "contact agence automatisation",
  ],
  openGraph: {
    title: "Contacter Advisia · Agence IA & Web",
    description:
      "Décrivez votre projet. Eliott ou Julien vous répond sous 48h avec une première analyse. Gratuit, sans engagement.",
    url: "https://advisia.agency/contact",
    siteName: "Advisia",
    type: "website",
  },
};

export default function Contact() {
  const questions = [
    {
      id: "q1",
      question: "Que se passe-t-il après l’envoi du formulaire ?",
      answer:
        "Eliott ou Julien lit votre message et vous répond sous 48h avec une première analyse de votre besoin et une estimation. C’est gratuit et sans engagement.",
    },
    {
      id: "q2",
      question: "Je ne sais pas encore exactement ce qu’il me faut. Je peux quand même vous écrire ?",
      answer:
        "Bien sûr. Décrivez votre problème ou votre objectif, même vaguement. On vous aide à cadrer le besoin. C’est justement à ça que sert le premier échange.",
    },
    {
      id: "q3",
      question: "Sous quel délai recevrai-je une réponse ?",
      answer:
        "48h maximum en jours ouvrés. En pratique, souvent le jour même.",
    },
    {
      id: "q4",
      question: "Est-ce qu’un premier échange est payant ?",
      answer:
        "Non. Le diagnostic initial est toujours gratuit. On ne facture qu’à partir du moment où un devis est validé et le projet lancé.",
    },
    {
      id: "q5",
      question: "Je préfère appeler plutôt qu’écrire. C’est possible ?",
      answer:
        "Oui. Vous pouvez réserver un créneau de 20 min directement sur notre page de prise de rendez-vous. Sinon, indiquez dans le formulaire que vous préférez être rappelé.",
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
