"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion } from "motion/react";

interface ScanRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

// Diagnostics — magnifying glass effect: text starts blurry/small,
// a lens circle sweeps across revealing sharp text
export default function ScanReveal({ text, className, style }: ScanRevealProps) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const start = Date.now();
    const duration = 1800;
    const frame = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return <h1 className={className} style={style}>{text}</h1>;
  }

  return (
    <h1 className={className} style={{ ...style, position: "relative" }}>
      {/* Blurry background text */}
      <span
        style={{
          filter: `blur(${(1 - progress) * 6}px)`,
          opacity: 0.3 + progress * 0.7,
          transition: "none",
        }}
      >
        {text}
      </span>

      {/* Magnifying lens circle that sweeps left to right */}
      {progress < 1 && (
        <motion.span
          style={{
            position: "absolute",
            top: "50%",
            left: `${progress * 105 - 5}%`,
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "2px solid #c9fe6e",
            boxShadow: "0 0 20px rgba(201,254,110,0.3), inset 0 0 20px rgba(201,254,110,0.05)",
            pointerEvents: "none",
          }}
        >
          {/* Lens handle */}
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              right: "-10px",
              width: "20px",
              height: "3px",
              background: "#c9fe6e",
              transform: "rotate(45deg)",
              borderRadius: "2px",
            }}
          />
        </motion.span>
      )}
    </h1>
  );
}
