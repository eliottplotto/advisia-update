"use client";

import { CSSProperties, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Pen, MousePointer2 } from "lucide-react";

interface SketchRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function SketchReveal({ text, className, style }: SketchRevealProps) {
  const [mounted, setMounted] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [clickDone, setClickDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    // After pen finishes (1.5s), show mouse click
    const t1 = setTimeout(() => setShowClick(true), 1600);
    // Click animation lasts 600ms
    const t2 = setTimeout(() => setClickDone(true), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!mounted) {
    return <h1 className={className} style={style}>{text}</h1>;
  }

  return (
    <h1 className={className} style={style}>
      <span style={{ position: "relative", display: "inline-block", width: "100%" }}>
        {/* Actual text for layout */}
        <span style={{ visibility: "hidden", display: "block" }}>{text}</span>

        {/* Revealed text with clip */}
        <motion.span
          aria-hidden="true"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            whiteSpace: "normal",
            display: "block",
            width: "100%",
          }}
        >
          {text}
        </motion.span>

        {/* Pen icon following the reveal */}
        <motion.span
          aria-hidden="true"
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            color: "#c9fe6e",
          }}
        >
          <Pen size={20} />
        </motion.span>

        {/* Mouse cursor + click at the end */}
        <AnimatePresence>
          {showClick && !clickDone && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                bottom: "-8px",
                right: "-4px",
                pointerEvents: "none",
                color: "#c9fe6e",
              }}
            >
              <motion.span
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 0.4, delay: 0.15 }}
                style={{ display: "inline-block" }}
              >
                <MousePointer2 size={22} />
              </motion.span>
              {/* Click ripple */}
              <motion.span
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "2px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#c9fe6e",
                }}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </h1>
  );
}
