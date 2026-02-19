"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { RevealText } from "../reveal-text";
import RotatingText from "@/components/RotatingText";
export default function Hero() {
  const [isRotating, setIsRotating] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsRotating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden z-[1]"
      style={{ background: "rgba(10,10,15,0.85)" }}
    >
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* Glow orbs */}
      <div
        ref={glowRef}
        className="hero-glow"
        style={{
          top: "-200px",
          left: "-200px",
          background: "var(--violet)",
          opacity: 0.12,
        }}
      />
      <div
        className="hero-glow"
        style={{
          bottom: "-300px",
          right: "-200px",
          background: "var(--ad-1)",
          opacity: 0.06,
        }}
      />

      {/* Content */}
      <div className="relative z-[2] px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto w-full pt-32 lg:pt-[120px]">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-2 pl-3 pr-4 py-1.5 rounded-full backdrop-blur-md mb-8 opacity-0"
          style={{
            background: "var(--violet-dim)",
            border: "1px solid rgba(124,58,237,0.2)",
            animation: "fadeUp 0.8s var(--ease) 0.3s forwards",
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "var(--violet-light)",
              animation: "pulse-dot 2s ease infinite",
              boxShadow: "0 0 10px var(--violet-glow)",
            }}
          />
          <span
            className="font-mono text-[0.7rem] uppercase tracking-[0.15em]"
            style={{ color: "var(--text-secondary)" }}
          >
            +20 projets livrés depuis 2023
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-8 max-w-[900px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            L&apos;agence tech qui accélère votre{" "}
            <span className="inline-block whitespace-nowrap align-bottom" style={{ color: "var(--ad-1)" }}>
                <RotatingText
                  texts={[
                    "Croissance",
                    "Productivité",
                    "Transformation",
                  ]}
                  mainClassName="inline-block text-left min-w-[3ch]"
                  staggerFrom="last"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.06}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 22, stiffness: 180 }}
                  rotationInterval={3000}
                  auto={isRotating}
                />
            </span>
          </RevealText>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-[550px] mb-10 opacity-0"
          style={{
            color: "var(--text-secondary)",
            animation: "fadeUp 0.8s var(--ease) 1s forwards",
          }}
        >
          Agents IA, sites performants, automatisation des process : on conçoit
          les outils qui font gagner du temps aux PME et ETI.
        </p>

        {/* CTA Actions */}
        <div
          className="flex gap-4 items-center flex-wrap opacity-0"
          style={{ animation: "fadeUp 0.8s var(--ease) 1.2s forwards" }}
        >
          <Button asChild size="lg" className="!bg-ad-1 !text-black font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-md shadow-[0_0_30px_var(--accent-dim)] hover:shadow-[0_0_60px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-300">
            <Link href="/contact">
              J&apos;estime mon projet <span>↗</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="!border-[rgba(124,58,237,0.3)] !bg-transparent !text-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-md backdrop-blur-md hover:!border-[var(--violet)] hover:!bg-[var(--violet-dim)] hover:shadow-[0_0_30px_var(--violet-dim)] transition-all duration-300"
          >
            <Link href="/prendre-rendez-vous">Réserver un appel</Link>
          </Button>
        </div>
      </div>

      {/* Floating Cards - Desktop only */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[400px] h-[500px] z-[3]">
        <FloatCard
          delay="1.4s"
          speed={0.03}
          className="top-0 right-0 w-[280px]"
          label="Automatisations IA"
          metric="+340%"
          desc="de productivité chez nos clients"
          fillWidth="75%"
        />
        <FloatCard
          delay="1.6s"
          speed={0.05}
          className="top-[180px] right-[120px] w-[260px]"
          label="Performance Web"
          metric="98/100"
          desc="Score Lighthouse"
          fillWidth="92%"
        />
        <FloatCard
          delay="1.8s"
          speed={0.04}
          className="top-[340px] right-[20px] w-[240px]"
          label="Taux de conversion"
          metric="×2.4"
          desc="de ROI en moyenne"
          fillWidth="60%"
        />
      </div>
    </section>
  );
}

function FloatCard({
  delay,
  speed,
  className,
  label,
  metric,
  desc,
  fillWidth,
}: {
  delay: string;
  speed: number;
  className: string;
  label: string;
  metric: string;
  desc: string;
  fillWidth: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const x = (e.clientX - cx) * speed;
      const y = (e.clientY - cy) * speed;
      cardRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.03}deg)`;
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [speed]);

  return (
    <div
      ref={cardRef}
      className={`absolute backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 float-card hover:border-[rgba(201,254,110,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_var(--accent-dim)] ${className}`}
      style={{
        background: "rgba(124,58,237,0.06)",
        border: "1px solid rgba(124,58,237,0.15)",
        animationDelay: delay,
      }}
    >
      <div className="flex items-center gap-2 mb-3 font-mono text-[0.65rem] uppercase tracking-[0.15em]" style={{ color: "var(--violet-light)" }}>
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "var(--violet-light)",
            boxShadow: "0 0 8px var(--violet-glow)",
          }}
        />
        {label}
      </div>
      <div
        className="text-4xl font-bold tracking-tight leading-none"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        {metric}
      </div>
      <div
        className="text-sm mt-1 font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {desc}
      </div>
      <div className="w-full h-1 rounded-sm mt-4 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          className="bar-fill"
          style={{ "--fill": fillWidth } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
