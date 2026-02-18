'use client';

import React, { useState, useRef, MouseEvent } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlightColor?: string;
  // NOUVELLE PROP : Pour contrôler la couleur du fond intérieur
  bgClassName?: string; 
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "#C6F471",
  // Par défaut, on garde le comportement actuel, mais on peut le surcharger
  bgClassName = "bg-background/90", 
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // On retire backdrop-blur ici car il doit être sur le fond intérieur si nécessaire
      className={`group relative rounded-xl border border-border bg-transparent text-card-foreground shadow-sm transition-colors duration-300 ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-xl transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor} 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      >
        {/* C'EST ICI QUE TOUT CHANGE : On utilise la prop bgClassName */}
        <div className={`absolute inset-[1px] rounded-[11px] ${bgClassName}`} />
      </div>

      <div className="relative z-20 h-full rounded-xl">{children}</div>
    </div>
  );
}