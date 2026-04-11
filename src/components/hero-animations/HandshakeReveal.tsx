"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion } from "motion/react";

interface HandshakeRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

// Accompagnement — puzzle pieces: words fly in from different directions
// and assemble into the final sentence
export default function HandshakeReveal({ text, className, style }: HandshakeRevealProps) {
  const [mounted, setMounted] = useState(false);
  const words = text.split(" ");

  // Different entry directions for each word
  const directions = [
    { x: -60, y: -20 },   // from top-left
    { x: 40, y: -30 },    // from top-right
    { x: -50, y: 20 },    // from bottom-left
    { x: 60, y: 10 },     // from right
    { x: -30, y: -40 },   // from top-left
    { x: 50, y: 30 },     // from bottom-right
    { x: -40, y: 15 },    // from left
    { x: 30, y: -25 },    // from top-right
    { x: -20, y: 35 },    // from bottom-left
    { x: 45, y: -15 },    // from top-right
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <h1 className={className} style={style}>{text}</h1>;
  }

  return (
    <h1 className={className} style={style}>
      {words.map((word, i) => {
        const dir = directions[i % directions.length];
        return (
          <span key={i}>
            <motion.span
              initial={{
                opacity: 0,
                x: dir.x,
                y: dir.y,
                rotate: (Math.random() - 0.5) * 15,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "inline-block",
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
      {/* Connection line that appears after all words are placed */}
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "80px", opacity: 1 }}
        transition={{ delay: words.length * 0.08 + 0.5, duration: 0.4, ease: "easeOut" }}
        className="block mt-3"
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #c9fe6e, transparent)",
          borderRadius: "2px",
        }}
      />
    </h1>
  );
}
