"use client";

import type React from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface ScrollSmootherWrapperProps {
  children: React.ReactNode;
}

export default function ScrollSmootherWrapper({
  children,
}: ScrollSmootherWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    console.log("[v0] Initializing ScrollSmoother");

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1,
      effects: true,
    });

    console.log("[v0] ScrollSmoother initialized:", smoother);

    return () => {
      smoother?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
