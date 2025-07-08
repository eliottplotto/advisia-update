import ContactForm from "@/components/contact-form";
import FooterXS from "@/components/footer-xs";
import { RevealText } from "@/components/RevealText";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import { Button } from "@/components/ui/button";
import FAQCenter from "@/components/ui/sections/faq-center";
import { RiCheckFill, RiPhoneFill } from "@remixicon/react";
import Link from "next/link";
export default function Contact() {
  const questions = [
    {
      id: "q1",
      question: "Combien coûte la création d’un site internet ?",
      answer:
        "Le prix dépend de plusieurs facteurs : le type de site (vitrine, e-commerce, sur-mesure), le nombre de pages, les fonctionnalités attendues ou encore le niveau de personnalisation. Chez Advisia, les projets démarrent autour de 1 000€ pour un site vitrine one-page. Un devis précis est toujours réalisé avant de démarrer.",
    },
    {
      id: "q2",
      question: "Quel est le délai pour créer un site web professionnel ?",
      answer:
        "En moyenne, un projet prend entre 4 et 8 semaines. Cela dépend de la complexité, du niveau de contenu fourni et de la réactivité des échanges. Nous établissons ensemble un calendrier réaliste dès le départ, avec des étapes claires.",
    },
    {
      id: "q3",
      question: "Pourquoi passer par une agence web ?",
      answer:
        "Une agence vous apporte une vision stratégique, un accompagnement global, et une exécution professionnelle. Vous gagnez du temps, évitez les erreurs coûteuses, et obtenez un résultat sur-mesure, fiable et évolutif.",
    },
    {
      id: "q4",
      question:
        "Quelle est la différence entre un site vitrine et un site e-commerce ?",
      answer:
        "Un site vitrine présente votre activité, vos services et vos coordonnées. Il sert principalement à informer et à générer des prises de contact. Un site e-commerce, lui, permet la vente directe en ligne, avec un panier, des fiches produits et un système de paiement sécurisé.",
    },
    {
      id: "q5",
      question: "Puis-je modifier moi-même le contenu de mon site ?",
      answer:
        "Oui, bien sûr. Tous nos sites sont livrés avec un CMS adapté à votre niveau de compétence. Vous pouvez facilement modifier textes, images, créer des pages ou ajouter des articles. Une formation est toujours prévue à la fin du projet.",
    },
    {
      id: "q6",
      question: "Comment assurer un bon référencement naturel ?",
      answer:
        "Le référencement naturel repose sur trois piliers : la qualité du contenu, la performance technique du site, et la popularité (liens externes). Dès la conception, nous optimisons votre site pour Google : structure logique, balises sémantiques, chargement rapide, responsive design… Et nous vous donnons les bonnes pratiques pour maintenir et améliorer votre positionnement.",
    },
    {
      id: "q7",
      question: "Est-ce que vous proposez la maintenance de site ?",
      answer:
        "Oui. Nous proposons des offres de maintenance adaptées à vos besoins : mises à jour, sauvegardes, surveillance de sécurité, accompagnement pour faire évoluer le site. Vous choisissez le niveau d’accompagnement selon vos attentes.",
    },
    {
      id: "q8",
      question: "Pourquoi choisir Advisia pour créer mon site web ?",
      answer:
        "Parce qu’on va à l’essentiel : un site efficace, bien conçu, pensé pour durer. Notre équipe est réactive, impliquée et humaine. On construit des systèmes solides, pas juste de jolis sites. Et les résultats se voient dès les premières semaines.",
    },
  ];

  return (
    <main>
      <Form />
      <FAQCenter questions={questions} />
      <FooterXS />
    </main>
  );
}

function Form() {
  const profils = [
    {
      alt: "Eliott P.",
      src: "/eliott-plotto.jpeg",
    },
    {
      alt: "Julien C.",
      src: "/julien.jpeg",
    },

    {
      alt: "Enzo F.",
      src: "/pp1.jpg",
    },
  ];

  return (
    <section className="dark bg-background bg-ascii-4 text-foreground">
      <div className="container-md pt-[95px]">
        <div className="py-16 grid lg:grid-cols-2">
          <div className="global-padding xl:mr-8">
            <BulletHeadline as="p">Contact</BulletHeadline>
            <div className="mt-8">
              {profils.map((profil, index) => (
                <img
                  key={index}
                  src={profil.src}
                  alt={profil.alt}
                  className="inline-block not-first:-ml-2 w-12 h-12 rounded-full"
                />
              ))}
            </div>
            <RevealText
              as="h1"
              className="text-4xl 2xl:text-7xl mt-8 mb-4 2xl:mb-8 uppercase"
            >
              Démarrons votre projet
            </RevealText>
            <p>
              Un projet ou une question ? Contactez-nous en remplissant le
              formulaire ci-contre. Notre équipe commerciale reviendra vers vous
              rapidement.
            </p>
            <ul className="adv_list-icon mt-6">
              <li>
                <RiCheckFill />
                Estimation gratuite sous 48h
              </li>
            </ul>
            <div className="my-8 flex items-center gap-4 flex-wrap">
              <h2>Vous préférez planifier un rendez-vous ?</h2>
              <Button variant={"outline"} asChild>
                <Link href={"/prendre-rendez-vous"}>
                  Réserver un appel <RiPhoneFill />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full mx-auto">
            <div className="bg-background global-padding">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
