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
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      image: "/services/agence-web/placeholder.avif",
      icon: RiSeoFill,
    },
    {
      title: "Optimisation de la conversion",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      image: "/services/agence-web/placeholder.avif",
      icon: RiCursorFill,
    },
    {
      title: "Gestion facile du contenu",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      image: "/services/agence-web/placeholder.avif",
      icon: RiDatabase2Fill,
    },
    {
      title: "Un produit à votre image",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
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
        "Nous respections vos engagements en proposant des solutions accéssibles et éco-conçues.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiAccessibilityFill,
    },
  ];

  return (
    <section className="dark text-foreground bg-blue-600">
      <div className="container-md global-padding-x py-16">
        <div className="space-y-6 mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl max-w-3xl">
            Transformez votre site en un{" "}
            <span className="text-nowrap text-highlight text-background">
              atout commercial
            </span>
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
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-4/2 object-cover object-top-left ad-pattern"
                />
                <div className="global-padding space-y-4">
                  <IconComponent />
                  <div>
                    <h3 className="text-2xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
