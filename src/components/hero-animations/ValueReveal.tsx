"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion } from "motion/react";

interface ValueRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

// Cession & Reprise — value/money pops on key words
// like the marketing +% effect but with € and ↗ symbols
export default function ValueReveal({ text, className, style }: ValueRevealProps) {
  const [mounted, setMounted] = useState(false);
  const words = text.split(" ");

  // Which words get a pop icon and what icon
  const pops: Record<string, string> = {
    "vaut": "€",
    "plus": "↗",
    "numériquement": "⚡",
    "mature.": "+20%",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <h1 className={className} style={style}>{text}</h1>;
  }

  return (
    <h1 className={className} style={style}>
      {words.map((word, i) => {
        const popIcon = pops[word];
        return (
          <span key={i} style={{ display: "inline-block", position: "relative" }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: i * 0.07,
              }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
            {/* Pop icon on key words */}
            {popIcon && (
              <motion.span
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 1, 0], y: [0, -10, -14, -20], scale: [0.5, 1.2, 1, 0.8] }}
                transition={{ duration: 0.8, delay: i * 0.07 + 0.15, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-12px",
                  fontSize: "0.3em",
                  fontWeight: 700,
                  color: "#c9fe6e",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {popIcon}
              </motion.span>
            )}
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </h1>
  );
}
