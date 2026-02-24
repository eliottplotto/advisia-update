"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealText } from "@/components/reveal-text";
import { RiDoubleQuotesL, RiArrowRightLine } from "@remixicon/react";
import CountUp from "@/components/ui/count-up";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import InteractiveGrid from "@/components/ui/interactive-grid";

export default function Team() {
  const team = [
    {
      name: "Eliott Plotto",
      role: "Co-fondateur & Tech",
      image: "/eliott-plotto.jpeg",
    },
    {
      name: "Julien C.",
      role: "Co-fondateur & Marketing",
      image: "/julien.jpeg",
    },
  ];

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
      className="relative group overflow-hidden"
      style={{
        borderTop: "1px solid var(--border)",
        background: "rgba(10,10,15,0.85)",
      }}
    >
      {/* Interactive grid background */}
      <InteractiveGrid />

      <div className="relative z-10 max-w-[1400px] mx-auto py-12 md:py-16 px-4 md:px-8 lg:px-12 text-white">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="section-label mb-6">● Vos Interlocuteurs</div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[600px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <RevealText>
              Vos experts. Du premier call à la mise en prod.
            </RevealText>
          </h2>
        </div>

        {/* Team Members */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="rounded-[20px] p-8 text-center transition-all duration-500 w-[240px] backdrop-blur-xl"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div
                  className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-4 transition-colors duration-300"
                  style={{ border: "2px solid rgba(124,58,237,0.3)" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </div>
                <div
                  className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mt-1"
                  style={{ color: "var(--violet-light)" }}
                >
                  {member.role}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <Button
            asChild
            className="!bg-ad-1 !text-black hover:!bg-[#b0da60] rounded-md text-base py-6 px-8 font-mono tracking-wide border-none transition-transform hover:scale-105 shadow-[0_0_20px_rgba(198,244,113,0.4)]"
          >
            <Link
              href="/prendre-rendez-vous"
              className="flex items-center gap-2 font-bold"
            >
              CONTACTER UN EXPERT IA
              <RiArrowRightLine size={20} />
            </Link>
          </Button>
        </div>

        {/* Quote */}
        <ScrollReveal>
          <div className="max-w-[750px] mx-auto text-center">
            <RiDoubleQuotesL
              className="mx-auto mb-4 opacity-60"
              size={48}
              style={{ color: "var(--violet)" }}
            />
            <p
              className="text-lg md:text-xl leading-relaxed italic"
              style={{ color: "var(--text-primary)" }}
            >
              Les gens qui vous conseillent sont ceux qui codent. Pas de
              commercial, pas de sous-traitance, pas de mauvaise surprise.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[900px] mx-auto mt-12 pt-12"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <div
                  className="text-5xl lg:text-6xl font-bold mb-2 flex items-baseline justify-center"
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
