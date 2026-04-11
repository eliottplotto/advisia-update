"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion } from "motion/react";

interface GraphRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

// Marketing Digital — each word arrives with a +% metric flash,
// then a mini bar chart animates under the title
export default function GraphReveal({ text, className, style }: GraphRevealProps) {
  const [mounted, setMounted] = useState(false);
  const [showBars, setShowBars] = useState(false);
  const words = text.split(" ");
  const metrics = ["+12%", "+34%", "+8%", "+45%", "+21%", "+67%", "+15%", "+28%", "+53%"];

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setShowBars(true), words.length * 100 + 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) {
    return <h1 className={className} style={style}>{text}</h1>;
  }

  return (
    <h1 className={className} style={style}>
      <span style={{ display: "block" }}>
        {words.map((word, i) => (
          <span key={i} style={{ display: "inline-block", position: "relative" }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: i * 0.08,
              }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
            {/* Floating +% metric that flashes and fades */}
            <motion.span
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 1, 0], y: [0, -8, -12, -16] }}
              transition={{ duration: 0.7, delay: i * 0.08 + 0.1, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: "-4px",
                right: "-8px",
                fontSize: "0.3em",
                fontWeight: 700,
                color: "#c9fe6e",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              {metrics[i % metrics.length]}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
      {/* Mini bar chart under the title */}
      {showBars && (
        <span className="flex gap-1 mt-3 items-end" style={{ height: "20px" }}>
          {[0.4, 0.6, 0.5, 0.8, 0.7, 1, 0.9].map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h * 100}%` }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              style={{
                width: "4px",
                background: i === 5 ? "#c9fe6e" : "rgba(201,254,110,0.3)",
                borderRadius: "2px",
                display: "block",
              }}
            />
          ))}
        </span>
      )}
    </h1>
  );
}
