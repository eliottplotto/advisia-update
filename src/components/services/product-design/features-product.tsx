import {
  RiAccessibilityFill,
  RiCodeSSlashFill,
  RiCursorFill,
  RiDatabase2Fill,
  RiPencilRuler2Fill,
  RiSeoFill,
} from "@remixicon/react";

export default function FeaturesProduct() {
  const services = [
    {
      title: "UX/UI Design",
      description:
        "Des interfaces pensées pour être simples à comprendre et rapides à utiliser.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiSeoFill,
    },
    {
      title: "Recherche utilisateur",
      description:
        "Comprendre vos utilisateurs pour concevoir ce dont ils ont vraiment besoin.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiCursorFill,
    },
    {
      title: "User flows & Wireframes",
      description:
        "Visualisation claire des parcours et priorisation des interactions clés.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiDatabase2Fill,
    },
    {
      title: "Prototypage",
      description:
        "Tester vos idées avant d'engager du temps et du budget dans le développement.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiPencilRuler2Fill,
    },
    {
      title: "Tests utilisateurs",
      description:
        "Validez les hypothèses et identifier les vrais irritants pour faire évoluer le produit dans le bon sens.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiCodeSSlashFill,
    },
    {
      title: "Design System",
      description:
        "Assurer la cohérence, accélérer la production et préparer la croissance de votre produit.",
      image: "/services/agence-web/placeholder.avif",
      icon: RiAccessibilityFill,
    },
  ];

  return (
    <section className="dark bg-secondary text-foreground">
      <div className="container-md global-padding-x py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-background overflow-hidden flex flex-col justify-between gap-4 rounded-md border"
              >
                <div className="global-padding space-y-4">
                  <IconComponent className="text-ad-1" />
                  <div>
                    <h3 className="text-xl lg:text-2xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-4/2 object-cover object-top-left"
                  draggable="false"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
