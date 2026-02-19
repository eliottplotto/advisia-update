import Link from "next/link";
import { RevealText } from "./RevealText";
import { Button } from "./ui/button";

export default function SectionCTA() {
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

  const CurrentMonth = () => {
    const month = new Date().toLocaleString("fr-FR", { month: "long" });

    return <span>{month.charAt(0).toUpperCase() + month.slice(1)}</span>;
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--violet) 0%, #5b21b6 50%, var(--bg-primary) 100%)",
        color: "var(--text-primary)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{ background: "var(--ad-1)" }}
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-24 lg:py-32 flex flex-col items-center justify-center gap-8 text-center min-h-[80vh]">
        <div className="flex flex-col items-center gap-4">
          <div>
            {profils.map((profil, index) => (
              <img
                key={index}
                src={profil.src}
                alt={profil.alt}
                className="inline-block not-first:-ml-2 w-12 h-12 rounded-full"
                style={{ border: "2px solid var(--violet)" }}
              />
            ))}
          </div>
          <p
            className="font-mono uppercase text-sm tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Pr&ecirc;ts &agrave; lancer votre projet ?
          </p>
          <RevealText
            as="h2"
            className="text-4xl md:text-6xl xl:text-7xl max-w-3xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            R&eacute;servez maintenant votre audit{" "}
            <span className="underline decoration-[var(--ad-1)]">gratuit</span>
          </RevealText>
        </div>
        <Button size="huge" asChild>
          <Link href="/contact">Je r&eacute;serve</Link>
        </Button>
        <p
          className="font-mono uppercase text-sm tracking-wider"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <CurrentMonth /> &#183; &#91; 3 &#93; places restantes
        </p>
      </div>
    </section>
  );
}
