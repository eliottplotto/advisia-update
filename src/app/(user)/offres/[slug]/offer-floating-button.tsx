"use client";

import { useEffect, useState } from "react";

export default function OfferFloatingButton() {
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const form = document.getElementById("offer-form");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const isShown = scrolled && !formVisible;

  return (
    <button
      onClick={() =>
        document.getElementById("offer-form")?.scrollIntoView({ behavior: "smooth" })
      }
      className="fixed bottom-6 right-6 z-50 rounded-full px-5 py-3 text-sm font-semibold text-black flex items-center gap-2"
      style={{
        background: "#c9fe6e",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        opacity: isShown ? 1 : 0,
        pointerEvents: isShown ? "auto" : "none",
        transition: "opacity 0.35s ease",
      }}
    >
      Demander cette offre <span aria-hidden>↓</span>
    </button>
  );
}
