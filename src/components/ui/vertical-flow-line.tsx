"use client";

import { useEffect, useRef, useCallback } from "react";

// Default waypoints for the homepage
const DEFAULT_WAYPOINTS = [
  { x: 50, y: 0 },      // Top center (hero)
  { x: 72, y: 0.12 },   // Right (logos → services)
  { x: 28, y: 0.28 },   // Left (process)
  { x: 50, y: 0.42 },   // Center (team)
  { x: 75, y: 0.56 },   // Right (projects)
  { x: 25, y: 0.72 },   // Left (pourquoi)
  { x: 50, y: 0.85 },   // Center (outils)
  { x: 50, y: 1.0 },    // Bottom center (CTA)
];

const DEFAULT_DOT_FRACTIONS = [0, 0.12, 0.22, 0.35, 0.48, 0.62, 0.76, 0.88, 1.0];

function buildCurvePath(
  waypoints: { x: number; y: number }[],
  width: number,
  height: number
): string {
  const points = waypoints.map((wp) => ({
    x: (wp.x / 100) * width,
    y: wp.y * height,
  }));

  if (points.length < 2) return "";

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const midY = (curr.y + next.y) / 2;

    d += ` C ${curr.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
  }

  return d;
}

interface VerticalFlowLineProps {
  waypoints?: { x: number; y: number }[];
  dotFractions?: number[];
}

export default function VerticalFlowLine({
  waypoints = DEFAULT_WAYPOINTS,
  dotFractions = DEFAULT_DOT_FRACTIONS,
}: VerticalFlowLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const mainPathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const leadDotRef = useRef<SVGCircleElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pathLengthRef = useRef<number>(0);
  const pageHeightRef = useRef<number>(0);

  const yToLengthMapRef = useRef<{ y: number; len: number }[]>([]);

  const buildYToLengthMap = useCallback(() => {
    const path = mainPathRef.current;
    if (!path || pathLengthRef.current === 0) return;

    const totalLen = pathLengthRef.current;
    const samples = 200;
    const map: { y: number; len: number }[] = [];

    for (let i = 0; i <= samples; i++) {
      const len = (i / samples) * totalLen;
      const point = path.getPointAtLength(len);
      map.push({ y: point.y, len });
    }

    yToLengthMapRef.current = map;
  }, []);

  const yToPathLength = useCallback((targetY: number): number => {
    const map = yToLengthMapRef.current;
    if (map.length === 0) return 0;

    let bestLen = 0;
    for (let i = 0; i < map.length; i++) {
      if (map[i].y <= targetY) {
        bestLen = map[i].len;
      }
    }

    for (let i = 0; i < map.length - 1; i++) {
      if (map[i].y <= targetY && map[i + 1].y > targetY) {
        const t = (targetY - map[i].y) / (map[i + 1].y - map[i].y);
        bestLen = map[i].len + t * (map[i + 1].len - map[i].len);
        break;
      }
    }

    return Math.min(bestLen, pathLengthRef.current);
  }, []);

  const updateSize = useCallback(() => {
    const main = document.querySelector("main");
    if (!main || !svgRef.current || !containerRef.current) return;

    const rect = main.getBoundingClientRect();
    const height = main.scrollHeight;
    const width = rect.width;
    pageHeightRef.current = height;

    svgRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svgRef.current.style.width = `${width}px`;
    svgRef.current.style.height = `${height}px`;
    containerRef.current.style.height = `${height}px`;

    const d = buildCurvePath(waypoints, width, height);

    if (mainPathRef.current) {
      mainPathRef.current.setAttribute("d", d);
      pathLengthRef.current = mainPathRef.current.getTotalLength();
      mainPathRef.current.style.strokeDasharray = `${pathLengthRef.current}`;
      mainPathRef.current.style.strokeDashoffset = `${pathLengthRef.current}`;
    }
    if (glowPathRef.current) {
      glowPathRef.current.setAttribute("d", d);
      glowPathRef.current.style.strokeDasharray = `${pathLengthRef.current}`;
      glowPathRef.current.style.strokeDashoffset = `${pathLengthRef.current}`;
    }

    buildYToLengthMap();

    if (mainPathRef.current && pathLengthRef.current > 0) {
      dotFractions.forEach((frac, i) => {
        const dot = dotsRef.current[i];
        if (!dot) return;
        const point = mainPathRef.current!.getPointAtLength(
          frac * pathLengthRef.current
        );
        dot.setAttribute("cx", `${point.x}`);
        dot.setAttribute("cy", `${point.y}`);
      });
    }
  }, [buildYToLengthMap, waypoints, dotFractions]);

  const handleScroll = useCallback(() => {
    const path = mainPathRef.current;
    if (!path || pathLengthRef.current === 0) return;

    const viewportCenterY = window.scrollY + window.innerHeight / 2;
    const drawnLength = yToPathLength(viewportCenterY);
    const offset = pathLengthRef.current - drawnLength;

    path.style.strokeDashoffset = `${offset}`;

    if (glowPathRef.current) {
      glowPathRef.current.style.strokeDashoffset = `${offset}`;
    }

    if (leadDotRef.current && drawnLength > 0) {
      const tipPoint = path.getPointAtLength(drawnLength);
      leadDotRef.current.setAttribute("cx", `${tipPoint.x}`);
      leadDotRef.current.setAttribute("cy", `${tipPoint.y}`);
      leadDotRef.current.style.opacity = "1";
    }

    dotFractions.forEach((frac, i) => {
      const dot = dotsRef.current[i];
      if (!dot) return;
      const dotPos = frac * pathLengthRef.current;
      const isActive = drawnLength >= dotPos;

      dot.setAttribute("r", isActive ? "4" : "2.5");
      dot.setAttribute(
        "fill",
        isActive ? "#c9fe6e" : "rgba(124,58,237,0.4)"
      );
      dot.setAttribute(
        "filter",
        isActive ? "url(#dotGlow)" : ""
      );
    });
  }, [yToPathLength, dotFractions]);

  useEffect(() => {
    updateSize();

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      updateSize();
      handleScroll();
    });

    const timer = setTimeout(() => {
      updateSize();
      handleScroll();
    }, 800);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, [updateSize, handleScroll]);

  return (
    <div
      ref={containerRef}
      className="hidden lg:block absolute top-0 left-0 w-full pointer-events-none z-[5]"
      style={{ overflow: "visible" }}
    >
      <svg
        ref={svgRef}
        className="absolute top-0 left-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(124,58,237,0.5)" />
            <stop offset="50%" stopColor="rgba(167,139,250,0.35)" />
            <stop offset="100%" stopColor="rgba(201,254,110,0.5)" />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(124,58,237,0.12)" />
            <stop offset="100%" stopColor="rgba(201,254,110,0.12)" />
          </linearGradient>
          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
          <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="leadDotGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>

        <g style={{ mixBlendMode: "screen", opacity: 0.45 }}>
          <path
            ref={glowPathRef}
            stroke="url(#glowGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#glowFilter)"
          />

          <path
            ref={mainPathRef}
            stroke="url(#curveGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {dotFractions.map((_, i) => (
          <circle
            key={i}
            ref={(el) => { dotsRef.current[i] = el; }}
            r="2.5"
            fill="rgba(124,58,237,0.4)"
          />
        ))}

        <circle
          ref={leadDotRef}
          r="5"
          fill="#c9fe6e"
          filter="url(#leadDotGlow)"
          style={{ opacity: 0, transition: "opacity 0.3s" }}
        />
      </svg>
    </div>
  );
}
