"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  SearchCheck,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Building2,
} from "lucide-react";
import { useDrawer } from "@/lib/drawer-store";
import OfferDetailLink from "@/components/offer-detail-link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  SearchCheck,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Building2,
};

interface Diagnostic {
  badge: string;
  icon: string;
  title: string;
  description: string;
  price: string;
  delay: string;
  livrables: string[];
  slug: string;
  pourQui?: string;
}

export default function DiagnosticsGrid({ diagnostics }: { diagnostics: Diagnostic[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openDrawer } = useDrawer();

  return (
    <div>
      <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
        Cliquez sur ce qui vous concerne — on vous montre le détail.
      </p>
      <div className="flex flex-col gap-2">
        {diagnostics.map((d, i) => {
          const isOpen = openIndex === i;
          const Icon = iconMap[d.icon] || SearchCheck;
          return (
            <div
              key={i}
              className="rounded-xl transition-all duration-300 overflow-hidden"
              style={{
                background: isOpen ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
                border: isOpen ? "1px solid #c9fe6e" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Ligne cliquable */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center gap-5 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <Icon
                  size={18}
                  className="flex-shrink-0"
                  style={{ color: isOpen ? "#c9fe6e" : "rgba(255,255,255,0.55)" }}
                />
                <h3
                  className="text-base font-bold flex-shrink-0 lg:w-[38%] min-w-0"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.title}
                </h3>
                {d.pourQui && (
                  <p
                    className="hidden lg:block text-sm italic flex-1 leading-snug"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {d.pourQui}
                  </p>
                )}
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider flex-shrink-0 whitespace-nowrap transition-colors duration-200"
                  style={{ color: isOpen ? "#c9fe6e" : "rgba(255,255,255,0.55)" }}
                >
                  {isOpen ? "Réduire" : "En savoir plus →"}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs flex-shrink-0 ml-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  ▼
                </motion.span>
              </button>

              {/* Détail */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6">
                        {/* Gauche — description + livrables */}
                        <div>
                          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                            {d.description}
                          </p>
                          <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                            Livrables
                          </p>
                          <ul className="space-y-1.5">
                            {d.livrables.map((l, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#c9fe6e" }} />
                                {l}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Droite — prix + délai + CTA */}
                        <div className="flex flex-col justify-between md:min-w-[220px] md:border-l md:pl-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                          <div className="mb-4 space-y-3">
                            <div>
                              <p className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>Prix</p>
                              <p className="text-xl font-bold" style={{ color: "#c9fe6e" }}>{d.price}</p>
                            </div>
                            <div>
                              <p className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>Délai</p>
                              <p className="text-sm font-semibold">{d.delay}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => openDrawer(d.slug)}
                            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:-translate-y-[1px]"
                            style={{ background: "#c9fe6e", color: "#000" }}
                          >
                            Demander ce diagnostic <ArrowUpRight size={14} />
                          </button>
                          <OfferDetailLink slug={d.slug} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
