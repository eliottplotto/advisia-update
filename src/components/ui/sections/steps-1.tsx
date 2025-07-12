import { RevealText } from "@/components/reveal-text";
import { RemixiconComponentType } from "@remixicon/react";

interface ProcessStep {
  title: string;
  subtitle: string;
  icon: RemixiconComponentType;
}

interface ProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export default function Steps1({ title, subtitle, steps }: ProcessProps) {
  return (
    <section className="dark bg-background text-foreground py-8 lg:py-16">
      <div className="container-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Column - Title & Subtitle */}
          <div className="global-padding lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl">
              <RevealText>{title}</RevealText>
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Column - Steps */}
          <div className="global-padding space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-8 pt-8 border-t"
              >
                <div className="flex no-wrap justify-between">
                  <p className="font-mono text-muted-foreground">
                    0{index + 1}
                  </p>
                  <step.icon size={40} className="text-ad-1" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
