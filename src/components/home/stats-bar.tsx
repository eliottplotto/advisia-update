"use client";

import CountUp from "@/components/ui/count-up";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function StatsBar() {
  const stats = [
    {
      value: 20,
      prefix: "+",
      suffix: "",
      label: "Projets livrés",
    },
    {
      value: 92,
      prefix: "",
      suffix: "%",
      label: "Clients qui renouvellent",
    },
    {
      value: 4,
      prefix: "",
      suffix: " ans",
      label: "D'expertise IA appliquée",
    },
  ];

  return (
    <section
      className="relative z-[2] py-10 md:py-14 px-4 md:px-8 lg:px-12"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[900px] mx-auto">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <div
                  className="text-4xl lg:text-5xl font-bold mb-2 flex items-baseline justify-center"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.prefix && (
                    <span className="gradient-text mr-1">{stat.prefix}</span>
                  )}
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={2.5}
                    className="text-white"
                  />
                  {stat.suffix && (
                    <span className="gradient-text ml-1">{stat.suffix}</span>
                  )}
                </div>
                <div
                  className="inline-block font-mono text-[0.7rem] uppercase tracking-[0.15em] px-3 py-1 rounded-full"
                  style={{
                    color: "var(--text-muted)",
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.12)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
