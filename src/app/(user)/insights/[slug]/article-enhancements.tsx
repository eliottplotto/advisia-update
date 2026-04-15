"use client";

import { useEffect, useState } from "react";
import { ArrowUp, BookOpen } from "lucide-react";

// ─── READING PROGRESS BAR (top) + FLOATING PERCENTAGE ──────────
function ReadingProgressBar({ progress }: { progress: number }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[80] pointer-events-none"
      style={{ height: 3 }}
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #c9fe6e, rgba(124,58,237,0.9))",
          boxShadow: "0 0 12px rgba(201,254,110,0.7)",
        }}
      />
    </div>
  );
}

// ─── FLOATING DECORATIONS — ambient shapes with subtle motion ──
function FloatingDecorations() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1] hidden md:block"
      style={{ mixBlendMode: "screen" }}
    >
      {/* Sparkle 1 — top left */}
      <div
        className="absolute"
        style={{
          top: "15%",
          left: "4%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#c9fe6e",
          boxShadow: "0 0 20px rgba(201,254,110,0.8)",
          animation: "float-up 18s ease-in-out infinite",
          opacity: 0.4,
        }}
      />
      {/* Violet orb — mid right */}
      <div
        className="absolute"
        style={{
          top: "35%",
          right: "5%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.6)",
          boxShadow: "0 0 25px rgba(124,58,237,0.5)",
          animation: "float-down 22s ease-in-out infinite",
          animationDelay: "-4s",
          opacity: 0.35,
        }}
      />
      {/* Tiny ring — bottom left */}
      <div
        className="absolute"
        style={{
          bottom: "25%",
          left: "6%",
          width: 14,
          height: 14,
          borderRadius: "50%",
          border: "1px solid rgba(201,254,110,0.4)",
          animation: "float-up 24s ease-in-out infinite",
          animationDelay: "-8s",
          opacity: 0.5,
        }}
      />
      {/* Small square rotating — top right */}
      <div
        className="absolute"
        style={{
          top: "55%",
          right: "8%",
          width: 10,
          height: 10,
          background: "rgba(201,254,110,0.15)",
          border: "1px solid rgba(201,254,110,0.35)",
          animation: "spin-slow 40s linear infinite, float-down 20s ease-in-out infinite",
          opacity: 0.5,
        }}
      />
      {/* Diagonal line accent — mid left */}
      <div
        className="absolute"
        style={{
          top: "65%",
          left: "3%",
          width: 1,
          height: 40,
          background:
            "linear-gradient(to bottom, transparent, rgba(201,254,110,0.5), transparent)",
          animation: "float-up 16s ease-in-out infinite",
          animationDelay: "-2s",
        }}
      />
      {/* Violet dot — bottom right */}
      <div
        className="absolute"
        style={{
          bottom: "15%",
          right: "10%",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(167,139,250,0.8)",
          boxShadow: "0 0 15px rgba(167,139,250,0.6)",
          animation: "float-up 19s ease-in-out infinite",
          animationDelay: "-6s",
          opacity: 0.4,
        }}
      />
    </div>
  );
}

// ─── TABLE OF CONTENTS (sticky sidebar) ────────────────────────
interface TocItem {
  id: string;
  label: string;
  top: number;
}

function TableOfContents({
  items,
  activeId,
}: {
  items: TocItem[];
  activeId: string | null;
}) {
  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Table des matières"
      className="hidden 2xl:block fixed top-32 left-6 z-[5] max-w-[180px] pointer-events-auto"
    >
      <p
        className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <BookOpen size={12} /> Dans cet article
      </p>
      <ul className="space-y-3">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-start gap-3 text-xs leading-[1.4] transition-colors duration-200"
                style={{
                  color: isActive
                    ? "#c9fe6e"
                    : "rgba(255,255,255,0.5)",
                }}
              >
                <span
                  className="inline-block flex-shrink-0 h-[2px] mt-[0.55rem] transition-all duration-300"
                  style={{
                    width: isActive ? 16 : 8,
                    background: isActive
                      ? "#c9fe6e"
                      : "rgba(255,255,255,0.2)",
                  }}
                />
                <span
                  className="transition-colors duration-200 group-hover:text-white"
                  style={{
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// ─── PROGRESS RING (bottom right) ──────────────────────────────
function ProgressRing({ progress }: { progress: number }) {
  const size = 56;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="fixed bottom-6 right-6 z-[70] transition-all duration-300"
      style={{
        opacity: progress > 2 && progress < 98 ? 1 : 0,
        pointerEvents: progress > 2 && progress < 98 ? "auto" : "none",
        transform:
          progress > 2 && progress < 98
            ? "translateY(0)"
            : "translateY(20px)",
      }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <div
          className="absolute inset-0 rounded-full backdrop-blur-md"
          style={{
            background: "rgba(10,10,15,0.75)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
        <svg
          width={size}
          height={size}
          className="absolute inset-0 -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#c9fe6e"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 0.15s ease-out",
              filter: "drop-shadow(0 0 4px rgba(201,254,110,0.5))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-mono text-[10px] font-semibold tabular-nums"
            style={{ color: "#c9fe6e" }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── BACK TO TOP BUTTON ────────────────────────────────────────
function BackToTop({ visible }: { visible: boolean }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-[70] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/[0.08]"
      style={{
        background: "rgba(10,10,15,0.75)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        color: "rgba(255,255,255,0.85)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
      aria-label="Retour en haut"
    >
      <ArrowUp size={18} />
    </button>
  );
}

// ─── MAIN WRAPPER ──────────────────────────────────────────────
export default function ArticleEnhancements() {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  // Build TOC from h2 elements on mount + assign ids
  useEffect(() => {
    const h2s = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2")
    );
    const items: TocItem[] = h2s.map((h2, i) => {
      if (!h2.id) {
        h2.id =
          h2.textContent
            ?.toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .slice(0, 60) || `section-${i}`;
      }
      return {
        id: h2.id,
        label: h2.textContent?.trim() || `Section ${i + 1}`,
        top: h2.offsetTop,
      };
    });
    setTocItems(items);
  }, []);

  // Scroll handler for progress + active TOC item
  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector("article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const percent =
        total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
      setProgress(percent);

      // Active TOC item : find the last h2 above the viewport middle
      const middle = window.scrollY + window.innerHeight * 0.3;
      let lastActive: string | null = null;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const absTop = el.getBoundingClientRect().top + window.scrollY;
        if (absTop <= middle) lastActive = item.id;
      }
      setActiveId(lastActive);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [tocItems]);

  return (
    <>
      <ReadingProgressBar progress={progress} />
      <FloatingDecorations />
      <TableOfContents items={tocItems} activeId={activeId} />
      <ProgressRing progress={progress} />
      <BackToTop visible={progress > 15} />
    </>
  );
}
