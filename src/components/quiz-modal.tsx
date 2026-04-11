"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Zap,
  Globe,
  TrendingUp,
  ArrowLeftRight,
  HeartHandshake,
  Search,
  FileText,
  Mail,
  BarChart2,
  Users,
  RefreshCw,
  Plus,
  Cpu,
  EyeOff,
  MousePointerClick,
  HelpCircle,
  Building2,
  User,
  UsersRound,
  Clock,
  Eye,
  Lightbulb,
  CheckCircle,
  X,
} from "lucide-react";
import { RESULTS } from "@/data/quiz-results";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step1Choice =
  | "automatiser"
  | "site"
  | "visibilite"
  | "cession"
  | "formation"
  | "je-ne-sais-pas";

const STEP1_OPTIONS: { id: Step1Choice; icon: React.ElementType; label: string }[] = [
  { id: "automatiser", icon: Zap, label: "Automatiser des tâches répétitives" },
  { id: "site", icon: Globe, label: "Créer ou refondre un site / une app" },
  { id: "visibilite", icon: TrendingUp, label: "Être plus visible sur Google" },
  { id: "cession", icon: ArrowLeftRight, label: "Céder ou reprendre une entreprise" },
  { id: "formation", icon: HeartHandshake, label: "Former mes équipes à l'IA" },
  { id: "je-ne-sais-pas", icon: Search, label: "Je ne sais pas encore" },
];

const STEP2_CONFIG: Record<
  Step1Choice,
  { title: string; options: { id: string; icon: React.ElementType; label: string }[] }
> = {
  automatiser: {
    title: "C'est quoi la tâche qui vous prend le plus de temps ?",
    options: [
      { id: "saisie", icon: FileText, label: "Saisie de données, devis, factures" },
      { id: "relances", icon: Mail, label: "Relances clients, suivi commercial" },
      { id: "reporting", icon: BarChart2, label: "Reporting, tableaux de bord" },
      { id: "qualification", icon: Users, label: "Qualification demandes entrantes" },
    ],
  },
  site: {
    title: "Vous avez déjà un site ?",
    options: [
      { id: "refonte", icon: RefreshCw, label: "Oui, refondre / améliorer" },
      { id: "zero", icon: Plus, label: "Non, partir de zéro" },
      { id: "app", icon: Cpu, label: "Application métier sur mesure" },
    ],
  },
  visibilite: {
    title: "Votre problème principal ?",
    options: [
      { id: "trafic", icon: EyeOff, label: "Pas assez de trafic" },
      { id: "conversion", icon: MousePointerClick, label: "Trafic mais personne ne contacte" },
      { id: "sais-pas", icon: HelpCircle, label: "Je ne sais pas" },
    ],
  },
  cession: {
    title: "Vous êtes plutôt ?",
    options: [
      { id: "cedant", icon: TrendingUp, label: "Cédant, valoriser avant de vendre" },
      { id: "repreneur", icon: Building2, label: "Repreneur, évaluer avant d'acheter" },
    ],
  },
  formation: {
    title: "Pour qui ?",
    options: [
      { id: "dirigeant", icon: User, label: "Pour moi, dirigeant" },
      { id: "equipes", icon: Users, label: "Pour mes équipes" },
      { id: "deux", icon: UsersRound, label: "Pour les deux" },
    ],
  },
  "je-ne-sais-pas": {
    title: "Ce qui vous préoccupe le plus ?",
    options: [
      { id: "taches", icon: Clock, label: "Tâches manuelles" },
      { id: "visibilite", icon: Eye, label: "Manque de visibilité" },
      { id: "cession", icon: ArrowLeftRight, label: "Cession / reprise" },
      { id: "explorer", icon: Lightbulb, label: "Explorer l'IA" },
    ],
  },
};

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [step1, setStep1] = useState<Step1Choice | null>(null);
  const [step2, setStep2] = useState<string | null>(null);

  const resultKey = step === 3 && step1 && step2 ? `${step1}-${step2}` : null;
  const recommendation = resultKey ? (RESULTS[resultKey] ?? null) : null;

  const handleReset = () => {
    setStep(1);
    setStep1(null);
    setStep2(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(handleReset, 400);
  };

  const handleStep1 = (choice: Step1Choice) => {
    setStep1(choice);
    setStep(2);
  };

  const handleStep2 = (choice: string) => {
    setStep2(choice);
    setStep(3);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="quiz-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(8px)" }}
          onClick={handleClose}
        >
          <motion.div
            key="quiz-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-[640px] rounded-2xl p-10 max-sm:p-6"
            style={{
              background: "#0A0A0F",
              border: "1px solid rgba(255,255,255,0.10)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white/40 hover:text-white/80 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Progress bar */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className="h-1 flex-1 rounded-full transition-all duration-500"
                  style={{ background: step >= s ? "#c9fe6e" : "rgba(255,255,255,0.10)" }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                >
                  <h2
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Quel est votre besoin principal ?
                  </h2>
                  <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Choisissez ce qui correspond le mieux.
                  </p>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
                    {STEP1_OPTIONS.map(({ id, icon: Icon, label }) => (
                      <button
                        key={id}
                        onClick={() => handleStep1(id)}
                        className="flex items-start gap-3 rounded-lg p-4 text-left transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = "#c9fe6e";
                          el.style.background = "rgba(255,255,255,0.10)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = "rgba(255,255,255,0.10)";
                          el.style.background = "rgba(255,255,255,0.05)";
                        }}
                      >
                        <Icon
                          size={24}
                          style={{ color: "#c9fe6e", flexShrink: 0, marginTop: 1 }}
                        />
                        <span className="text-sm font-medium text-white leading-snug">
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && step1 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                >
                  <h2
                    className="text-2xl font-bold text-white mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {STEP2_CONFIG[step1].title}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {STEP2_CONFIG[step1].options.map(({ id, icon: Icon, label }) => (
                      <button
                        key={id}
                        onClick={() => handleStep2(id)}
                        className="flex items-center gap-3 rounded-lg p-4 text-left transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = "#c9fe6e";
                          el.style.background = "rgba(255,255,255,0.10)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = "rgba(255,255,255,0.10)";
                          el.style.background = "rgba(255,255,255,0.05)";
                        }}
                      >
                        <Icon size={24} style={{ color: "#c9fe6e", flexShrink: 0 }} />
                        <span className="text-sm font-medium text-white">{label}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-5 text-xs transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "rgba(255,255,255,0.7)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    ← Retour
                  </button>
                </motion.div>
              )}

              {/* RESULT — mini-page complète */}
              {step === 3 && recommendation && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-5"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <CheckCircle size={28} style={{ color: "#c9fe6e", flexShrink: 0 }} />
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                      {recommendation.title}
                    </h2>
                  </div>

                  {/* Problème identifié */}
                  <div className="rounded-lg p-4" style={{ background: "rgba(239,68,68,0.06)", borderLeft: "2px solid rgba(239,68,68,0.4)" }}>
                    <p className="text-[11px] uppercase tracking-widest font-mono mb-1" style={{ color: "rgba(239,68,68,0.7)" }}>Le problème</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{recommendation.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="rounded-lg p-4" style={{ background: "rgba(201,254,110,0.04)", borderLeft: "2px solid #c9fe6e" }}>
                    <p className="text-[11px] uppercase tracking-widest font-mono mb-1" style={{ color: "rgba(201,254,110,0.7)" }}>Ce qu&apos;on fait pour vous</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{recommendation.solution}</p>
                  </div>

                  {/* Ce qui est inclus */}
                  <div>
                    <p className="text-[11px] uppercase tracking-widest font-mono mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Inclus</p>
                    <ul className="space-y-1.5">
                      {recommendation.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                          <CheckCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#c9fe6e" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prix + Délai */}
                  <div className="flex items-center gap-6 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-mono mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>Prix</p>
                      <p className="text-lg font-bold" style={{ color: "#c9fe6e" }}>{recommendation.price}</p>
                    </div>
                    <div className="border-l pl-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      <p className="text-[11px] uppercase tracking-widest font-mono mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>Délai</p>
                      <p className="text-sm font-medium text-white">{recommendation.delay}</p>
                    </div>
                  </div>

                  {/* Témoignage */}
                  {recommendation.testimonial && (
                    <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <p className="text-sm italic leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                        &laquo;&nbsp;{recommendation.testimonial.quote}&nbsp;&raquo;
                      </p>
                      <p className="text-xs font-medium" style={{ color: "rgba(201,254,110,0.7)" }}>{recommendation.testimonial.author}</p>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 pt-2">
                    <button
                      onClick={() => { handleClose(); router.push(`/resultat?q=${resultKey}`); }}
                      className="w-full rounded-full py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02]"
                      style={{ background: "#c9fe6e" }}
                    >
                      {recommendation.cta1Label}
                    </button>
                    <button
                      onClick={() => { handleClose(); router.push(recommendation.cta2Href); }}
                      className="w-full rounded-full py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                      style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                    >
                      {recommendation.cta2Label}
                    </button>
                  </div>

                  {/* Recommencer */}
                  <div className="text-center">
                    <button
                      onClick={handleReset}
                      className="text-xs transition-colors"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)")}
                    >
                      Recommencer
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
