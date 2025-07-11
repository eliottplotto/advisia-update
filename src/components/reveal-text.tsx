"use client";

import type React from "react";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Enregistrer les plugins GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealText({ children, className = "" }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    // Créer SplitText pour diviser en lignes
    const splitText = new SplitText(textRef.current, {
      type: "lines",
      linesClass: "line-mask",
    });

    // Wrapper chaque ligne dans un conteneur avec overflow hidden
    splitText.lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.position = "relative";

      if (line.parentNode) {
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      }
    });

    // Animation initiale : déplacer les lignes vers le bas
    gsap.set(splitText.lines, {
      yPercent: 100,
      opacity: 0,
    });

    // Animation au scroll avec valeurs fixes
    gsap.to(splitText.lines, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none none", // Animation une seule fois
        // markers: true, // Décommenter pour debug
      },
    });

    // Cleanup
    return () => {
      splitText.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={textRef} className={`animated-text ${className}`}>
      {children}
    </div>
  );
}
