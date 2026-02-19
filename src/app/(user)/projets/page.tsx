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
      <section style={{ background: "rgba(10,10,15,0.85)", color: "var(--text-primary)" }}>
        <div className="max-w-[1400px] mx-auto pt-[95px]">
          <div className="px-4 md:px-8 lg:px-12 pb-8 lg:pb-0">
            <div className="py-16 lg:py-32 text-center flex flex-col items-center gap-6">
              <div
                className="rounded-full pr-3 pl-1.5 py-1.5 flex items-center gap-2 w-fit"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div className="flex items-center">
                  {profils.map((profil, index) => (
                    <img
                      key={index}
                      src={profil.src}
                      alt={profil.alt}
                      className="inline-block not-first:-ml-2 w-6 h-6 rounded-full"
                      style={{ border: "1px solid var(--border)" }}
                    />
                  ))}
                </div>

                <p
                  className="text-xs font-mono uppercase tracking-[0.15em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  +20 clients accompagnés
                </p>
              </div>
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl max-w-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <RevealText>
                  Nous avons transformé leurs objectifs en{" "}
                  <span className="gradient-text">résultats</span>
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
