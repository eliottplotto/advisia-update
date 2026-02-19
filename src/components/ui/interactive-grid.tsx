"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridProps {
  className?: string;
}

export default function InteractiveGrid({ className }: InteractiveGridProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none", // V2 dark bg
        className
      )}
    >
      {/* Grille de fond statique (subtile) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Lumière qui suit la souris (Le fameux effet interactif) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.12), transparent 40%)`,
        }}
      />
      
      {/* Masque pour révéler la grille plus fortement sous la souris */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(198, 244, 113, 0.05), transparent 40%)`,
          maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      >
         <div
            className="absolute inset-0"
            style={{
            backgroundImage: `linear-gradient(to right, #C6F471 1px, transparent 1px), linear-gradient(to bottom, #C6F471 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.2
            }}
        />
      </div>
    </div>
  );
}