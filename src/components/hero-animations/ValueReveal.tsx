"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion } from "motion/react";

interface ValueRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

// Cession & Reprise — balance/weighing effect: text rocks like a scale
// finding its equilibrium, then a big "+15% valorisation" appears
export default function ValueReveal({ text, className, style }: ValueRevealProps) {
  const [mounted, setMounted] = useState(false);
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setShowValue(true), 1400);
  }, []);

  if (!mounted) {
    return <h1 className={className} style={style}>{text}</h1>;
  }

  return (
    <h1 className={className} style={style}>
      {/* Main text with weighing/balance animation */}
      <motion.span
        initial={{ opacity: 0, rotateZ: -2, y: 10 }}
        animate={{
          opacity: 1,
          rotateZ: [0, 1.5, -1, 0.5, 0],
          y: [10, -5, 3, -1, 0],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 0.3, 0.55, 0.8, 1],
        }}
        style={{
          display: "block",
          transformOrigin: "center bottom",
        }}
      >
        {text}
      </motion.span>

      {/* Big value indicator that pops up after balance settles */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5, y: 10 }}
        animate={showValue ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="inline-flex items-center gap-2 mt-4"
        style={{ display: "flex" }}
      >
        <span
          className="text-lg md:text-xl font-bold px-4 py-1.5 rounded-full"
          style={{
            background: "rgba(201,254,110,0.1)",
            border: "1px solid rgba(201,254,110,0.3)",
            color: "#c9fe6e",
            fontSize: "0.35em",
          }}
        >
          +5 à +20% de valorisation estimée
        </span>
      </motion.span>
    </h1>
  );
}
