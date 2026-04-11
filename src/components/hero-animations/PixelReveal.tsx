"use client";

import { useEffect, useState, CSSProperties } from "react";

interface PixelRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function PixelReveal({ text, className, style }: PixelRevealProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Small delay to ensure component is mounted and visible
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  const words = text.split(" ");

  return (
    <h1 className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi}>
          {word.split("").map((char, ci) => {
            // Random delay for each character (0 to 1.2s)
            const delay = Math.random() * 1.2;
            return (
              <span
                key={ci}
                style={{
                  display: "inline-block",
                  opacity: revealed ? 1 : 0,
                  color: revealed ? "inherit" : "#c9fe6e",
                  transition: `opacity 0.15s ease ${delay}s, color 0.3s ease ${delay + 0.1}s`,
                }}
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </h1>
  );
}
