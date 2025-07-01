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
      data-theme="dark"
      className="dark bg-[#DFF24B] text-foreground h-screen bg-ascii-2"
    >
      <div className="global-padding flex flex-col items-center justify-center gap-8 h-full text-center">
        <div className="flex flex-col items-center gap-4">
          <div>
            {profils.map((profil, index) => (
              <img
                key={index}
                src={profil.src}
                alt={profil.alt}
                className="inline-block not-first:-ml-2 w-12 h-12 rounded-full border-2 border-[#FF2803]"
              />
            ))}
          </div>
          <p className="font-mono uppercase text-sm">
            Prêts à lancer votre projet ?
          </p>
          <RevealText
            as="h2"
            className="text-4xl md:text-6xl xl:text-7xl max-w-3xl"
          >
            Réservez maintenant votre audit{" "}
            <span className="underline">gratuit</span>
          </RevealText>
        </div>
        <Button size="huge" asChild>
          <Link href="/contact">Je réserve</Link>
        </Button>
        <p className="font-mono uppercase text-sm">
          <CurrentMonth /> &#183; &#91; 3 &#93; places restantes
        </p>
      </div>
    </section>
  );
}
