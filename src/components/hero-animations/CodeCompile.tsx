"use client";

import { useEffect, useState, CSSProperties } from "react";
import { motion } from "motion/react";

interface CodeCompileProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function CodeCompile({ text, className, style }: CodeCompileProps) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Animate a progress bar from 0 to 100 over 1.2s
    const start = Date.now();
    const duration = 1200;
    const frame = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return <h1 className={className} style={style}>{text}</h1>;
  }

  const words = text.split(" ");
  const totalChars = text.length;
  let charsSoFar = 0;

  return (
    <h1 className={className} style={style}>
      {words.map((word, i) => {
        const wordStart = charsSoFar / totalChars;
        charsSoFar += word.length + 1;
        const wordEnd = charsSoFar / totalChars;
        const wordProgress = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)));

        return (
          <span key={i}>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: wordProgress > 0 ? 1 : 0,
                y: wordProgress > 0 ? 0 : 8,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
      {/* Progress bar underneath */}
      <span className="block mt-3 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "300px" }}>
        <motion.span
          className="block h-full rounded-full"
          style={{ background: "#c9fe6e" }}
          initial={{ width: "0%" }}
          animate={{ width: progress >= 1 ? "100%" : `${progress * 100}%` }}
          transition={{ duration: 0.05 }}
        />
      </span>
    </h1>
  );
}
