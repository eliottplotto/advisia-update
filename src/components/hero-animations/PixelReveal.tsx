"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Bot, Zap, Cpu, BrainCircuit } from "lucide-react";

interface PixelRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

// IA & Automatisation — words appear with IA-themed icons popping on key words
export default function PixelReveal({ text, className, style }: PixelRevealProps) {
  const [mounted, setMounted] = useState(false);
  const words = text.split(" ");

  const iconMap: Record<string, React.ReactNode> = {
    "10h": <Zap size={14} />,
    "semaine": <Cpu size={14} />,
    "tâches": <Bot size={14} />,
    "l'IA": <BrainCircuit size={14} />,
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
            {icon && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8], y: [0, -10, -14, -20] }}
                transition={{ duration: 0.8, delay: i * 0.07 + 0.12, ease: "easeOut" }}
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
