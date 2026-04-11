"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface HoverExpandColumnsProps {
  leftSlot: React.ReactNode;
  rightSlot: React.ReactNode;
  leftBg?: string;
  rightBg?: string;
  leftHoveredBg?: string;
  rightHoveredBg?: string;
  minHeight?: string;
}

export default function HoverExpandColumns({
  leftSlot,
  rightSlot,
  leftBg = "#0D0D14",
  rightBg = "rgba(255,255,255,0.05)",
  leftHoveredBg = "rgba(22,22,32,1)",
  rightHoveredBg = "rgba(255,255,255,0.08)",
  minHeight = "300px",
}: HoverExpandColumnsProps) {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  const leftW = hovered === "left" ? "65%" : hovered === "right" ? "35%" : "50%";
  const rightW = hovered === "right" ? "65%" : hovered === "left" ? "35%" : "50%";

  return (
    <>
      {/* Desktop hover expand */}
      <div className="hidden md:flex w-full overflow-hidden" style={{ minHeight }}>
        <motion.div
          animate={{ width: leftW }}
          initial={{ width: "50%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ flexShrink: 0, overflow: "hidden" }}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div
            animate={{
              backgroundColor: hovered === "left" ? leftHoveredBg : leftBg,
              borderColor: hovered === "left" ? "rgba(201,254,110,0.35)" : "transparent",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ height: "100%", borderWidth: "1px", borderStyle: "solid" }}
          >
            {leftSlot}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ width: rightW }}
          initial={{ width: "50%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ flexShrink: 0, overflow: "hidden" }}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div
            animate={{
              backgroundColor: hovered === "right" ? rightHoveredBg : rightBg,
              borderColor: hovered === "right" ? "rgba(201,254,110,0.35)" : "transparent",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ height: "100%", borderWidth: "1px", borderStyle: "solid" }}
          >
            {rightSlot}
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile: stacked vertically, no hover */}
      <div className="flex md:hidden flex-col">
        <div style={{ background: leftBg }}>{leftSlot}</div>
        <div style={{ background: rightBg }}>{rightSlot}</div>
      </div>
    </>
  );
}
