"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CountUp from "@/components/ui/count-up";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import { RiArrowRightUpLine } from "@remixicon/react";
import {
  Compass,
  Calculator,
  Rocket,
  HandHeart,
  Target,
  Sprout,
  Wrench,
  Zap,
  Lightbulb,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Hero reveal (above-the-fold) — uses useEffect+setTimeout to guarantee animation
 * triggers client-side, immune to Framer hydration edge cases.
 */
function useMounted(delayMs = 0): boolean {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);
  return visible;
}

function HeroReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const visible = useMounted(delay);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────
export function AgenceHero() {
  return (
    <section className="relative pt-[120px] lg:pt-[150px] pb-20 lg:pb-32 overflow-hidden">
      {/* Ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 15% 15%, rgba(201,254,110,0.07), transparent 60%), radial-gradient(ellipse 70% 50% at 85% 75%, rgba(124,58,237,0.08), transparent 60%)",
        }}
      />

      {/* Watermark "~" decorative element */}
      <div
        aria-hidden
        className="absolute right-[-5%] top-[15%] pointer-events-none hidden lg:block select-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "28rem",
          fontWeight: 900,
          lineHeight: 0.7,
          color: "rgba(201,254,110,0.025)",
          transform: "rotate(-12deg)",
        }}
      >
        ~
      </div>

      <div className="container-md global-padding-x relative">
        <HeroReveal delay={60} className="mb-8">
          <div style={{ color: "rgba(255,255,255,0.5)" }}>
            <BulletHeadline as="p">À propos d&apos;Advisia</BulletHeadline>
          </div>
        </HeroReveal>

        <HeroReveal delay={180}>
          <h1
            className="text-[2.4rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-black leading-[1] tracking-[-0.03em] mb-10 max-w-[1100px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            L&apos;IA crée de la valeur pour les{" "}
            <span style={{ color: "#c9fe6e" }}>PME françaises.</span>
          </h1>
        </HeroReveal>

        <HeroReveal delay={340}>
          <p
            className="text-[1.35rem] sm:text-2xl lg:text-[1.85rem] font-light italic leading-[1.25] mb-10 max-w-3xl"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-display)",
            }}
          >
            À condition de savoir quoi automatiser, dans quel ordre, et pour quel
            résultat.
          </p>
        </HeroReveal>

        <HeroReveal delay={500}>
          <div className="flex items-start gap-6 max-w-3xl">
            <div
              className="flex-shrink-0 mt-[0.6rem] h-[1px]"
              style={{
                width: 48,
                background:
                  "linear-gradient(to right, #c9fe6e, rgba(201,254,110,0))",
              }}
            />
            <p
              className="text-base lg:text-lg leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Advisia construit l&apos;infrastructure IA et digitale des
              dirigeants de PME qui veulent des résultats mesurables —{" "}
              <span style={{ color: "rgba(255,255,255,0.95)" }}>
                pas des présentations, pas du jargon, pas des projets sans ROI
                défini.
              </span>
            </p>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}

/** Below-the-fold reveal using motion/react whileInView */
function ScrollFadeUp({
  children,
  delay = 0,
  amount = 0.25,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── MANIFESTO BLOCK ─────────────────────────────────────────
export function EditorialBlock() {
  return (
    <section
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container-md global-padding-x relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Giant number */}
          <ScrollFadeUp className="col-span-12 lg:col-span-3">
            <div className="relative">
              <p
                className="font-black leading-[0.85]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(6rem, 14vw, 11rem)",
                  color: "#c9fe6e",
                }}
              >
                01
              </p>
              <p
                className="font-mono text-xs uppercase tracking-[0.2em] mt-2"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                / manifesto
              </p>
            </div>
          </ScrollFadeUp>

          {/* Editorial copy with staggered paragraphs */}
          <div className="col-span-12 lg:col-span-9 space-y-6 lg:space-y-8">
            <ScrollFadeUp delay={0.05}>
              <p
                className="text-2xl lg:text-3xl xl:text-[2.2rem] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Advisia ne vend pas des outils IA.
              </p>
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.12}>
              <p
                className="text-lg lg:text-xl leading-[1.65] max-w-3xl"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                On construit ce qui fait tourner votre business différemment :
                les{" "}
                <span style={{ color: "#c9fe6e", fontWeight: 500 }}>
                  automatisations
                </span>{" "}
                qui éliminent les tâches répétitives, les{" "}
                <span style={{ color: "#c9fe6e", fontWeight: 500 }}>
                  systèmes
                </span>{" "}
                qui font remonter la bonne information au bon moment, les{" "}
                <span style={{ color: "#c9fe6e", fontWeight: 500 }}>
                  dashboards
                </span>{" "}
                qui permettent de décider sur des données fraîches.
              </p>
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.18}>
              <p
                className="text-xl lg:text-2xl font-light italic leading-[1.4] max-w-2xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#c9fe6e",
                }}
              >
                Chaque mission commence par une question simple : quel résultat
                mesurable, en combien de temps ?
              </p>
            </ScrollFadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APPROCHE EN 4 TEMPS ─────────────────────────────────────
const ETAPES = [
  {
    Icon: Compass,
    num: "01",
    title: "L'Audit Flash",
    sub: "Gratuit · 30 min",
    text: "On comprend avant de proposer. Votre activité, vos outils, vos points de friction. On arrive avec des premières recommandations dès cet appel. Pas de questionnaire. Un échange direct.",
    spin: "12s",
  },
  {
    Icon: Calculator,
    num: "02",
    title: "Cadrage & chiffrage",
    sub: "ROI avant fonctionnalités",
    text: "On ne code pas une ligne avant que le périmètre soit clair. Chaque recommandation est chiffrée en impact business : temps gagné, coût évité, conversion améliorée. Vous validez tout avant qu'on démarre.",
    spin: "18s",
  },
  {
    Icon: Rocket,
    num: "03",
    title: "Livraison en sprints",
    sub: "Itérations de 2 semaines",
    text: "On construit par étapes courtes. Vous testez et validez à chaque sprint. Pas de livraison surprise au bout de 3 mois. Pas de fonctionnalité développée sans validation préalable.",
    spin: "15s",
  },
  {
    Icon: HandHeart,
    num: "04",
    title: "Après la livraison",
    sub: "On ne disparaît pas",
    text: "Formation, documentation, support continu. Et si vos besoins évoluent — ils évoluent toujours — on est là pour faire évoluer les outils avec vous.",
    spin: "20s",
  },
];

export function ApprocheSection() {
  return (
    <section
      className="py-24 lg:py-32 relative"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div className="container-md global-padding-x">
        <ScrollFadeUp className="max-w-4xl mb-16 lg:mb-20">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
            style={{ color: "rgba(201,254,110,0.65)" }}
          >
            / 02 — notre méthode
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-[4rem] font-black leading-[1.02] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comment on travaille.
          </h2>
        </ScrollFadeUp>

        {/* Grid 2x2 avec cards riches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {ETAPES.map((e, i) => (
            <ScrollFadeUp key={i} delay={i * 0.08} amount={0.15}>
              <EtapeCard etape={e} />
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function EtapeCard({ etape }: { etape: (typeof ETAPES)[number] }) {
  const { Icon, num, title, sub, text, spin } = etape;
  return (
    <div
      className="group relative rounded-2xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Accent line that grows on hover */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-700 group-hover:w-full"
        style={{
          width: 48,
          background: "#c9fe6e",
        }}
      />

      {/* Giant number in background */}
      <p
        aria-hidden
        className="absolute -right-2 -bottom-8 font-black leading-[0.85] select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.07]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10rem",
          color: "rgba(201,254,110,0.04)",
        }}
      >
        {num}
      </p>

      <div className="relative flex items-start justify-between mb-8">
        {/* Rotating icon */}
        <div
          className="relative w-14 h-14 flex items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-[rgba(201,254,110,0.1)]"
          style={{
            background: "rgba(201,254,110,0.06)",
            border: "1px solid rgba(201,254,110,0.18)",
          }}
        >
          <div
            style={{
              animation: `spin-slow ${spin} linear infinite`,
            }}
          >
            <Icon size={26} style={{ color: "#c9fe6e" }} />
          </div>
        </div>

        <span
          className="font-mono text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          — {num}
        </span>
      </div>

      <div className="relative">
        <p
          className="font-mono text-[11px] uppercase tracking-[0.15em] mb-2"
          style={{ color: "rgba(201,254,110,0.75)" }}
        >
          {sub}
        </p>
        <h3
          className="text-2xl lg:text-[1.75rem] font-bold leading-[1.15] mb-5 transition-colors duration-300"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(255,255,255,0.95)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-[0.95rem] leading-[1.7]"
          style={{ color: "rgba(255,255,255,0.58)" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

// ─── CONVICTIONS ──────────────────────────────────────────────
const CONVICTIONS = [
  {
    Icon: Target,
    short: "ROI d'abord",
    title: "L'IA sans ROI défini en amont, ça ne vaut rien.",
    explain:
      "On refuse de démarrer une mission sans savoir ce qu'on va mesurer à la fin. Temps, argent, conversion. S'il n'y a pas d'indicateur, le projet n'est pas prêt.",
    spin: "18s",
  },
  {
    Icon: Sprout,
    short: "Jusqu'à l'usage",
    title: "Un outil livré et abandonné, c'est un investissement raté.",
    explain:
      "La technologie ne change rien si personne ne l'utilise. Formation, documentation et accompagnement font partie de chaque livraison.",
    spin: "22s",
  },
  {
    Icon: Wrench,
    short: "On livre ce qu'on dit",
    title: "On ne recommande pas ce qu'on ne saurait pas livrer nous-mêmes.",
    explain:
      "Pas de revendeurs, pas de solutions packagées achetées ailleurs et revendues. Ce qu'on propose, on sait le construire.",
    spin: "14s",
  },
  {
    Icon: Zap,
    short: "Résultats, pas jargon",
    title:
      "La complexité technique n'impressionne pas un dirigeant. Les résultats, si.",
    explain:
      "On traduit tout en bénéfices business. Agent IA, pipeline N8N, architecture Supabase — ça reste dans le livrable, pas dans la présentation.",
    spin: "20s",
  },
  {
    Icon: Lightbulb,
    short: "Honnêteté",
    title: "Le meilleur projet, c'est celui qu'on n'aurait pas dû faire.",
    explain:
      "Si un problème a une solution plus simple que ce qu'on propose, on le dit. Même si ça signifie une mission moins importante.",
    spin: "16s",
  },
];

export function ConvictionsSection() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 40%, rgba(124,58,237,0.05), transparent 70%)",
        }}
      />

      <div className="container-md global-padding-x relative">
        <ScrollFadeUp className="max-w-4xl mb-16 lg:mb-20">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
            style={{ color: "rgba(201,254,110,0.65)" }}
          >
            / 03 — ce qui nous fait avancer
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-[4rem] font-black leading-[1.02] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ce en quoi on croit.
          </h2>
        </ScrollFadeUp>

        {/* Asymétrique : grande card en premier + 4 plus petites en grille */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
          <ScrollFadeUp className="md:col-span-6" amount={0.15}>
            <ConvictionHero conv={CONVICTIONS[0]} />
          </ScrollFadeUp>

          {CONVICTIONS.slice(1).map((c, i) => (
            <ScrollFadeUp
              key={i}
              delay={i * 0.06}
              className="md:col-span-3"
              amount={0.15}
            >
              <ConvictionCard conv={c} />
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConvictionHero({ conv }: { conv: (typeof CONVICTIONS)[number] }) {
  const { Icon, short, title, explain, spin } = conv;
  return (
    <div
      className="group relative rounded-3xl p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(135deg, rgba(201,254,110,0.04), rgba(124,58,237,0.03))",
        border: "1px solid rgba(201,254,110,0.15)",
      }}
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
        <div className="col-span-12 lg:col-span-2 flex lg:justify-start justify-start">
          <div
            className="relative w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl"
            style={{
              background: "rgba(201,254,110,0.08)",
              border: "1px solid rgba(201,254,110,0.25)",
            }}
          >
            <div
              style={{ animation: `spin-slow ${spin} linear infinite` }}
            >
              <Icon size={38} style={{ color: "#c9fe6e" }} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-10">
          <p
            className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(201,254,110,0.85)" }}
          >
            / 01 — {short}
          </p>
          <p
            className="text-2xl lg:text-3xl xl:text-[2.4rem] font-bold leading-[1.15] tracking-[-0.01em] mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "rgba(255,255,255,0.98)",
            }}
          >
            {title}
          </p>
          <p
            className="text-base lg:text-lg leading-[1.65] max-w-3xl"
            style={{ color: "rgba(255,255,255,0.62)" }}
          >
            {explain}
          </p>
        </div>
      </div>
    </div>
  );
}

function ConvictionCard({ conv }: { conv: (typeof CONVICTIONS)[number] }) {
  const { Icon, short, title, explain, spin } = conv;
  return (
    <div
      className="group relative rounded-2xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(201,254,110,0.3)]"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className="relative w-12 h-12 flex items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-[rgba(201,254,110,0.1)]"
          style={{
            background: "rgba(201,254,110,0.06)",
            border: "1px solid rgba(201,254,110,0.18)",
          }}
        >
          <div style={{ animation: `spin-slow ${spin} linear infinite` }}>
            <Icon size={20} style={{ color: "#c9fe6e" }} />
          </div>
        </div>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.15em]"
          style={{ color: "rgba(201,254,110,0.75)" }}
        >
          / {short}
        </span>
      </div>

      <p
        className="text-xl lg:text-2xl font-bold leading-[1.2] tracking-[-0.01em] mb-4"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgba(255,255,255,0.95)",
        }}
      >
        {title}
      </p>
      <p
        className="text-sm lg:text-[0.95rem] leading-[1.65]"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {explain}
      </p>
    </div>
  );
}

// ─── POUR QUI ─────────────────────────────────────────────────
export function PourQuiSection() {
  return (
    <section
      className="py-24 lg:py-32 relative"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div className="container-md global-padding-x">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          <ScrollFadeUp className="col-span-12 lg:col-span-4">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(201,254,110,0.65)" }}
            >
              / 04 — nos clients
            </p>
            <h2
              className="text-4xl lg:text-5xl xl:text-[3.5rem] font-black leading-[1.02] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pour qui on travaille.
            </h2>
          </ScrollFadeUp>

          <div className="col-span-12 lg:col-span-8 space-y-7">
            <ScrollFadeUp delay={0.05}>
              <p
                className="text-lg lg:text-xl leading-[1.75]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                On accompagne des dirigeants de PME françaises de 5 à 200
                salariés qui ont compris que l&apos;IA peut changer leur façon
                de travailler — mais qui n&apos;ont pas le temps ni les
                ressources pour expérimenter sans garantie de résultat.
              </p>
            </ScrollFadeUp>

            <ScrollFadeUp delay={0.1}>
              <p
                className="text-lg lg:text-xl leading-[1.75]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Commerce, industrie, services B2B, santé, logistique,
                e-commerce, transmission d&apos;entreprise : le secteur importe
                moins que la question que se pose le dirigeant.
              </p>
            </ScrollFadeUp>

            <div className="pt-6 space-y-5">
              <ScrollFadeUp delay={0.15}>
                <QuestionBubble text="Comment je fais plus avec la même équipe ?" />
              </ScrollFadeUp>
              <ScrollFadeUp delay={0.2}>
                <QuestionBubble text="Comment je prépare mon entreprise à ce qui vient ?" />
              </ScrollFadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestionBubble({ text }: { text: string }) {
  return (
    <div
      className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(201,254,110,0.08), rgba(201,254,110,0.02))",
        border: "1px solid rgba(201,254,110,0.2)",
      }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ background: "#c9fe6e" }}
      />
      <p
        className="text-lg lg:text-xl font-light italic"
        style={{
          color: "#c9fe6e",
          fontFamily: "var(--font-display)",
        }}
      >
        {text}
      </p>
    </div>
  );
}

// ─── CHIFFRES ─────────────────────────────────────────────────
export function ChiffresSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div className="container-md global-padding-x">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          <Chiffre
            value={
              <>
                <span>+</span>
                <CountUp to={50} duration={2} />
              </>
            }
            label="automatisations déployées"
            delay={0}
            visible={isInView}
          />
          <Chiffre
            value={
              <>
                <CountUp to={4} duration={1.6} />
                <span className="text-[0.5em] ml-2 font-light">ans</span>
              </>
            }
            label="d'expertise IA appliquée aux PME"
            delay={0.15}
            visible={isInView}
          />
          <Chiffre
            value={
              <>
                <CountUp to={83} duration={2.2} />
                <span>%</span>
              </>
            }
            label="de clients qui renouvellent ou recommandent"
            delay={0.3}
            visible={isInView}
          />
        </div>
      </div>
    </section>
  );
}

function Chiffre({
  value,
  label,
  delay,
  visible,
}: {
  value: React.ReactNode;
  label: string;
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className="flex flex-col items-center text-center px-6 py-10 sm:py-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.6s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <p
        className="text-5xl lg:text-6xl xl:text-7xl font-black mb-4 leading-[0.9] tabular-nums"
        style={{
          color: "#c9fe6e",
          fontFamily: "var(--font-display)",
        }}
      >
        {value}
      </p>
      <p
        className="text-sm lg:text-base leading-[1.55] max-w-[240px]"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {label}
      </p>
    </div>
  );
}

// ─── CTA FINAL ────────────────────────────────────────────────
export function CtaFinal() {
  return (
    <section
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,254,110,0.1), transparent 70%)",
        }}
      />

      <ScrollFadeUp className="relative container-md global-padding-x max-w-3xl mx-auto text-center">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-6"
          style={{ color: "rgba(201,254,110,0.75)" }}
        >
          / 06 — premier contact
        </p>
        <h2
          className="text-4xl lg:text-5xl xl:text-[4rem] font-black leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          On commence toujours par{" "}
          <span style={{ color: "#c9fe6e" }}>30 minutes.</span>
        </h2>
        <p
          className="text-base lg:text-lg mb-12 italic"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-display)",
          }}
        >
          Gratuites. Sans PowerPoint. Sans commercial.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/prendre-rendez-vous"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,254,110,0.3)] hover:-translate-y-0.5"
            style={{ background: "#c9fe6e", color: "#0a0a0f" }}
          >
            Réserver mon Audit Flash
            <RiArrowRightUpLine
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Voir nos offres
          </Link>
        </div>
      </ScrollFadeUp>
    </section>
  );
}
