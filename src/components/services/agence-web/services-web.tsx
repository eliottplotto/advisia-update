export default function ServicesWeb() {
  const services = [
    {
      title: "Site Vitrine",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      image: "/services/agence-web/relume.png",
    },
    {
      title: "Site e‑Commerce",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      image: "/services/agence-web/relume.png",
    },
    {
      title: "Développement sur‑mesure",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      image: "/services/agence-web/relume.png",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container-md global-padding-x py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background overflow-hidden flex flex-col items-center justify-between"
            >
              <div className="global-padding-x py-8 lg:py-12 text-center">
                <h3 className="text-2xl lg:text-4xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="pl-[25%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
