"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface QuizFloatingButtonProps {
  onOpen: () => void;
}

const HIDDEN_EXACT = [
  "/diagnostics",
  "/tarifs",
  "/prendre-rendez-vous",
  "/contact",
  "/resultat",
  "/cession-reprise",
  "/accompagnement",
  "/agence",
  "/projets",
  "/automatisations",
];

const HIDDEN_PREFIXES = ["/offres/", "/automatisations/", "/projets/", "/insights/"];

export default function QuizFloatingButton({ onOpen }: QuizFloatingButtonProps) {
  const [visible, setVisible] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      const near = window.scrollY + window.innerHeight > document.documentElement.scrollHeight * 0.8;
      setVisible(scrolled);
      setNearBottom(near);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (
    HIDDEN_EXACT.includes(pathname) ||
    HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))
  )
    return null;

  const isShown = visible && !nearBottom;

  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-50 rounded-full px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.04]"
      style={{
        background: "#c9fe6e",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        opacity: isShown ? 1 : 0,
        pointerEvents: isShown ? "auto" : "none",
        transition: "opacity 0.35s ease, transform 0.2s ease",
      }}
    >
      Par où commencer
    </button>
  );
}
