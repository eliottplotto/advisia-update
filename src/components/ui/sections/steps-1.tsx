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
      className="py-12 lg:py-20"
      style={{
        background: "rgba(10,10,15,0.85)",
        color: "var(--text-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Column - Title & Subtitle */}
          <div className="px-4 md:px-8 lg:px-12 lg:sticky lg:top-24 lg:self-start">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <RevealText>{title}</RevealText>
            </h2>
            {subtitle && (
              <p
                className="text-lg leading-relaxed mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Column - Steps */}
          <div className="px-4 md:px-8 lg:px-12 space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-8 pt-8"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="flex no-wrap justify-between">
                  <p
                    className="font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    0{index + 1}
                  </p>
                  <span style={{ color: "var(--ad-1)" }}>{step.icon}</span>
                </div>
                <div>
                  <h3
                    className="text-xl lg:text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
