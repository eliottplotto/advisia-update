// Components
import Footer from "@/components/footer";
import SectionCTASmall from "@/components/section-cta-small";
import { RevealText } from "@/components/reveal-text";
import Projects from "@/components/projects";

export default function Projets() {
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
    <>
      <section className="dark bg-background text-foreground">
        <div className="container-md pt-[95px]">
          <div className="global-padding-x pb-8 lg:pb-0">
            <div className="py-16 lg:py-32 text-center flex flex-col items-center gap-6">
              <div className="bg-background rounded-sm bg-secondary pr-2 pl-1 py-1 flex items-center gap-2 w-fit">
                <div className="flex items-center">
                  {profils.map((profil, index) => (
                    <img
                      key={index}
                      src={profil.src}
                      alt={profil.alt}
                      className="inline-block not-first:-ml-2 w-6 w-6 rounded-full"
                    />
                  ))}
                </div>

                <p className="text-sm font-mono uppercase ">
                  +20 clients accompagnés
                </p>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl max-w-5xl">
                <RevealText>
                  Nous avons transformé leurs objectifs en{" "}
                  <span className="text-highlight">résultats</span>
                </RevealText>
              </h1>
            </div>

            <Projects />
          </div>
        </div>
      </section>

      <SectionCTASmall />
      <Footer />
    </>
  );
}
