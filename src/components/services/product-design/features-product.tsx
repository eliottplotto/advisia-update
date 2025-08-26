import {
  RiAB,
  RiCursorFill,
  RiFigmaFill,
  RiGroupFill,
  RiPaletteFill,
  RiSwap2Fill,
} from "@remixicon/react";

export default function FeaturesProduct() {
  const services = [
    {
      title: "UX/UI Design",
      description:
        "Des interfaces pensées pour être simples à comprendre et rapides à utiliser.",
      image: "/services/product-design/ux-ui-design.svg",
      icon: RiCursorFill,
    },
    {
      title: "Recherche utilisateur",
      description:
        "Comprendre vos utilisateurs pour concevoir ce dont ils ont vraiment besoin.",
      image: "/services/product-design/ux-research.svg",
      icon: RiGroupFill,
    },
    {
      title: "User flows & Wireframes",
      description:
        "Visualisation claire des parcours et priorisation des interactions clés.",
      image: "/services/product-design/ux-ui-user-flow-wireframe.svg",
      icon: RiSwap2Fill,
    },
    {
      title: "Prototypage",
      description:
        "Tester vos idées avant d'engager du temps et du budget dans le développement.",
      image: "/services/product-design/ux-ui-prototypage.svg",
      icon: RiFigmaFill,
    },
    {
      title: "Tests utilisateurs",
      description:
        "Validez les hypothèses et identifier les vrais irritants pour faire évoluer le produit dans le bon sens.",
      image: "/services/product-design/ux-ui-test-utilisateur.svg",
      icon: RiAB,
    },
    {
      title: "Design System",
      description:
        "Assurer la cohérence, accélérer la production et préparer la croissance de votre produit.",
      image: "/services/product-design/ux-ui-design-system.svg",
      icon: RiPaletteFill,
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
                className="bg-background overflow-hidden flex flex-col justify-between rounded-md border"
              >
                <div className="global-padding-x pt-4 md:pt-6 lg:pt-8; space-y-4">
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
