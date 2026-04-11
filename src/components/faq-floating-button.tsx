"use client";

import { useEffect, useState } from "react";

export default function FAQFloatingButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const faqEl = document.getElementById("faq");
    if (!faqEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(faqEl);
    return () => observer.disconnect();
  }, []);

  const scrollToFAQ = () => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToFAQ}
      className="fixed bottom-24 left-6 z-50 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:border-[#c9fe6e] hover:-translate-y-0.5"
      style={{
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "rgba(255,255,255,0.7)",
        cursor: "pointer",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      Des questions ? ↓
    </button>
  );
}
