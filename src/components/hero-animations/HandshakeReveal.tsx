"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, Rocket, Shield, Clock } from "lucide-react";

interface HandshakeRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

// Accompagnement — words appear with reward icons popping on key words
// like achievements unlocking
export default function HandshakeReveal({ text, className, style }: HandshakeRevealProps) {
  const [mounted, setMounted] = useState(false);
  const words = text.split(" ");

  // Key words get a popping icon
  const iconMap: Record<string, React.ReactNode> = {
    "investissement": <Clock size={14} />,
    "fruits": <Check size={14} />,
    "après": <Shield size={14} />,
    "livraison.": <Rocket size={14} />,
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
        const icon = iconMap[word];
        return (
          <span key={i} style={{ display: "inline-block", position: "relative" }}>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 22,
                delay: i * 0.08,
              }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
            {/* Icon pop on key words */}
            {icon && (
              <motion.span
                initial={{ opacity: 0, scale: 0, y: 4 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.3, 1, 0.6], y: [4, -10, -14, -20] }}
                transition={{ duration: 0.8, delay: i * 0.08 + 0.12, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-10px",
                  color: "#c9fe6e",
                  pointerEvents: "none",
                }}
              >
                {icon}
              </motion.span>
            )}
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </h1>
  );
}
