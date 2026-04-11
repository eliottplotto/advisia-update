import FooterXS from "@/components/footer-xs";
import SectionContactForm from "@/components/section-cta-form";
import FAQCenter from "@/components/ui/sections/faq-center";

export const metadata = {
  title: "Contacter Advisia · Agence IA & Web",
  description:
    "Décrivez votre projet à Eliott ou Julien. Réponse personnalisée sous 48h avec une première analyse. Gratuit, sans engagement, sans jargon.",
  keywords: [
    "contacter agence web IA",
    "devis agence digitale",
    "contact agence automatisation",
  ],
  alternates: {
    canonical: "https://advisia.agency/contact",
  },
  openGraph: {
    title: "Contacter Advisia · Agence IA & Web",
    description:
      "Décrivez votre projet à Eliott ou Julien. Réponse personnalisée sous 48h avec une première analyse. Gratuit, sans engagement, sans jargon.",
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
      <section className="px-4 md:px-8 lg:px-12 pb-10" style={{ background: "rgba(10,10,15,0.85)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div
            className="rounded-xl p-4 mt-6 text-center"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
              Vous préférez un appel ?
            </p>
            <a
              href="/prendre-rendez-vous"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
              style={{ background: "#c9fe6e", color: "#0a0a0f" }}
            >
              Réserver un créneau de 20 min →
            </a>
          </div>
        </div>
      </section>
      <FAQCenter title="On répond à vos questions" questions={questions} />
      <FooterXS />
    </main>
  );
}
