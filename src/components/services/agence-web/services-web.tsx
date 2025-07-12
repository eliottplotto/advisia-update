import { RevealText } from "@/components/reveal-text";

export default function ServicesWeb() {
  const services = [
    {
      title: "Site Vitrine",
      description:
        "Gagnez en visibilité et crédibilité avec un site vitrine bien référencé et aligné avec votre image de marque.",
      image: "/services/agence-web/relume.png",
    },
    {
      title: "Site e‑Commerce",
      description:
        "Convertissez vos visiteurs en clients grâce à une boutique en ligne rapide, intuitive et bien pensée.",
      image: "/services/agence-web/relume.png",
    },
    {
      title: "Sur‑mesure et SaaS",
      description:
        "Plateforme, outil métier, application web... nous développons votre produit digital de A à Z.",
      image: "/services/agence-web/relume.png",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container-md global-padding-x py-8 lg:py-16 space-y-8 lg:space-y-16">
        <div className="space-y-6 flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-3xl">
            <RevealText>Nos expertises en création de site web</RevealText>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background overflow-hidden flex flex-col items-center justify-between rounded-md border"
            >
              <div className="global-padding-x py-8 lg:py-12 text-center">
                <h3 className="text-xl lg:text-3xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="pl-[25%]"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
