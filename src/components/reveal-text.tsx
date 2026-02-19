"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ElementType, ComponentPropsWithRef } from "react";

// Enregistrement sécurisé des plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
}

type RevealTextProps<T extends ElementType> = {
  as?: T;
  children: string | React.ReactNode; // Accepte string OU ReactNode pour être flexible
  className?: string;
};

export const RevealText = <T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: RevealTextProps<T> & ComponentPropsWithRef<T>) => {
  const Tag = as || "div"; // Fallback sur div par défaut
  const textRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    // Création du contexte GSAP pour un nettoyage facile
    const ctx = gsap.context(() => {
      // On cible les enfants directs pour éviter de casser le HTML imbriqué
      const split = new SplitText(textRef.current!, {
        type: "lines",
        linesClass: "line-reveal overflow-hidden pb-[0.15em]", // overflow-hidden + pb pour les descendantes (g,p,q,y)
      });

      // On wrap chaque ligne pour l'effet de masque
      // Note: SplitText a parfois besoin d'aide pour le wrapping manuel si le layout est complexe
      // Mais ici on va utiliser une animation simple sur le yPercent

      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%", // Déclenchement un peu plus tôt
          toggleActions: "play none none reverse",
        },
      });
    }, textRef);

    return () => ctx.revert();
  }, [children]);

  return (
    <Tag
      ref={textRef}
      className={`${className} relative`}
      {...rest}
    >
      {children}
    </Tag>
  );
};