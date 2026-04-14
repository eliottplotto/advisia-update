"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import type { AllProjectsQueryResult } from "@/types/sanity";

type ProjectItem = AllProjectsQueryResult[number];

const resultBadges: Record<string, string> = {
  Bring: "+12h récupérées/semaine",
  "Mes Halles": "Livré en 5 semaines",
  LCT: "+340% vitesse reporting",
  "LCT Investissements": "+340% vitesse reporting",
};

const AUTO_ROTATE_MS = 4000;

export default function ProjectsCarousel({
  projects,
}: {
  projects: ProjectItem[];
}) {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [cardWidth, setCardWidth] = useState(520);
  const [siblingVisible, setSiblingVisible] = useState(true);
  const total = projects.length;

  // Responsive card width
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(Math.min(w - 48, 420));
        setSiblingVisible(false);
      } else if (w < 1024) {
        setCardWidth(480);
        setSiblingVisible(true);
      } else {
        setCardWidth(560);
        setSiblingVisible(true);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  // Auto-rotation
  useEffect(() => {
    if (isHover || total < 2) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(t);
  }, [isHover, total]);

  // Swipe mobile
  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
    touchStart.current = null;
  };

  if (total === 0) return null;

  // Compute relative offset for each card (wrap around)
  const getOffset = (i: number) => {
    let offset = i - index;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const stageHeight = 640;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Stage */}
      <div
        className="relative overflow-hidden"
        style={{ height: stageHeight }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {projects.map((project, i) => {
            const offset = getOffset(i);
            const absOffset = Math.abs(offset);
            if (absOffset > 1 && siblingVisible) return null;
            if (absOffset > 0 && !siblingVisible) return null;

            const isActive = offset === 0;
            const translatePx = offset * (cardWidth * 0.72);
            const scale = isActive ? 1 : 0.82;
            const opacity = isActive ? 1 : 0.35;
            const z = 10 - absOffset;

            return (
              <motion.div
                key={project._id}
                className="absolute"
                animate={{
                  x: translatePx,
                  scale,
                  opacity,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: cardWidth,
                  zIndex: z,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <ProjectCard project={project} featured={isActive} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      {total > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Projet précédent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Projet suivant"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 28 : 8,
                background:
                  i === index ? "#c9fe6e" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Aller au projet ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: ProjectItem;
  featured: boolean;
}) {
  if (!project.slug?.current) return null;
  const badge = (project.client && resultBadges[project.client]) || null;

  return (
    <Link href={`/projets/${project.slug.current}`} className="block group">
      <article
        className="relative overflow-hidden rounded-2xl transition-all duration-500"
        style={{
          background: "rgba(15,15,24,0.85)",
          border: featured
            ? "1px solid rgba(201,254,110,0.4)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: featured
            ? "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,254,110,0.1)"
            : "0 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/30">
          {project.coverImage && (
            <Image
              src={urlFor(project.coverImage).width(800).url()}
              alt={
                project.coverImage?.alt ||
                `Image de couverture pour ${project.headline}`
              }
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 420px, (max-width: 1024px) 480px, 560px"
              priority={featured}
            />
          )}
          {badge && (
            <span
              className="absolute top-4 left-4 inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
              style={{
                color: "#c9fe6e",
                background: "rgba(10,10,15,0.78)",
                border: "1px solid rgba(201,254,110,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <div className="p-6 lg:p-7">
          <p
            className="font-mono text-xs uppercase tracking-[0.14em] mb-3"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {project.client}
          </p>
          <h3
            className="text-xl lg:text-2xl font-semibold leading-snug line-clamp-2"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            {project.headline}
          </h3>
          <div
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3"
            style={{ color: "#c9fe6e" }}
          >
            Voir le projet →
          </div>
        </div>
      </article>
    </Link>
  );
}
