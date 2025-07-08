import {
  RiAccessibilityFill,
  RiCodeSSlashFill,
  RiCursorFill,
  RiDatabase2Fill,
  RiPencilRuler2Fill,
  RiSeoFill,
} from "@remixicon/react";

export default function FeaturesWeb() {
  const services = [
    {
      title: "Optimisation du référencement naturel",
      description:
        "Code optimisé, contenus structurés, performance technique : tout est pensé pour plaire à Google.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiSeoFill,
    },
    {
      title: "Optimisation de la conversion",
      description:
        "Parcours utilisateur fluide, design persuasif et appels à l’action clairs pour générer plus de contacts ou de ventes.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiCursorFill,
    },
    {
      title: "Gestion facile du contenu",
      description:
        "Modifiez textes et images en toute simplicité grâce à un CMS pensé pour vous.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiDatabase2Fill,
    },
    {
      title: "Un produit à votre image",
      description:
        "Un site web à votre image, adapté à vos cibles et à votre secteur.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiPencilRuler2Fill,
    },
    {
      title: "Technologies adaptées",
      description:
        "Chaque développement web est étudié minutieusement afin de proposer une solution technique adaptée, maintenable et sécurisé.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiCodeSSlashFill,
    },
    {
      title: "Accessibilité et éco-conception",
      description:
        "Nous respectons vos engagements en proposant des solutions accessibles et éco-conçues.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiAccessibilityFill,
    },
  ];

  return (
    <section className="dark text-foreground bg-blue-600">
      <div className="container-md global-padding-x py-8 lg:py-16 space-y-8 lg:space-y-16">
        <div className="space-y-6 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl max-w-3xl">
            Transformez votre site en un véritable levier de{" "}
            <span className="text-nowrap text-highlight">croissance</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-background overflow-hidden flex flex-col justify-between gap-4"
              >
                <div className="global-padding space-y-4">
                  <IconComponent className="text-ad-1" />
                  <div>
                    <h3 className="text-2xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-4/2 object-cover object-top-left"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
