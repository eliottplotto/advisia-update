import type { ReactNode } from "react";
import { RevealText } from "@/components/reveal-text";

interface ProcessStep {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

interface ProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export default function Steps1({ title, subtitle, steps }: ProcessProps) {
  return (
    <section
      className="py-12 lg:py-20 px-4 md:px-8 lg:px-12"
      style={{
        background: "rgba(10,10,15,0.85)",
        color: "var(--text-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-[700px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <RevealText>{title}</RevealText>
          </h2>
          {subtitle && (
            <p
              className="text-lg leading-relaxed mt-4 max-w-[500px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div className="flex items-center justify-between">
                <p
                  className="font-mono text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  0{index + 1}
                </p>
                <span style={{ color: "var(--ad-1)" }}>{step.icon}</span>
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
