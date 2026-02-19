"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { RiArrowRightLine } from "@remixicon/react";
import { urlFor } from "@/sanity/lib/image";
import type { AllProjectsQueryResult } from "@/types/sanity";

interface ProjectsGridProps {
  projects: AllProjectsQueryResult;
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const displayProjects = projects.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayProjects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <Link
            href={`/projets/${project.slug?.current}`}
            className="block h-full w-full"
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_var(--violet-dim)]"
              style={{
                border: "1px solid var(--border)",
              }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{ background: "var(--bg-secondary)" }}
                />
                {project.coverImage && (
                  <Image
                    src={urlFor(project.coverImage).width(800).url()}
                    alt={project.headline || "Projet"}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
              </div>

              {/* Bottom gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              />

              {/* Text — bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <div
                  className="text-lg lg:text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.headline}
                </div>
                {project.client && (
                  <div
                    className="text-sm mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.client}
                  </div>
                )}
              </div>

              {/* Arrow button */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[var(--ad-1)] group-hover:text-black" style={{ background: "rgba(255,255,255,0.1)" }}>
                <RiArrowRightLine size={20} />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
