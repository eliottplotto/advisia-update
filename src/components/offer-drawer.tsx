"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { offersContent } from "@/lib/offers-drawer-content";

interface OfferDrawerProps {
  isOpen: boolean;
  offerId: string | null;
  onClose: () => void;
}

export default function OfferDrawer({ isOpen, offerId, onClose }: OfferDrawerProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [taille, setTaille] = useState("");
  const [secteur, setSecteur] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const content = offerId ? offersContent[offerId] : null;

  useEffect(() => {
    setFirstName("");
    setEmail("");
    setCompany("");
    setTaille("");
    setSecteur("");
    setMessage("");
    setStatus("idle");
  }, [offerId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) onClose(); },
    [isOpen, onClose]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const combinedMessage = `Demande pour ${content?.offerName || ""} | Entreprise: ${company} | Taille: ${taille} | Secteur: ${secteur}${message ? ` | Besoin: ${message}` : ""}`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName: "", company, email,
          message: combinedMessage,
          besoin: offerId ?? "",
          taille,
          secteur,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
  } as React.CSSProperties;

  return (
    <AnimatePresence>
      {isOpen && content && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full z-50 overflow-y-auto"
            style={{
              width: "min(440px, 100vw)",
              background: "#0A0A0F",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <X size={16} />
            </button>

            <div className="p-6 pt-12">
              {/* En-tête compact */}
              <div className="mb-5">
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "#fff" }}>
                  {content.offerName}
                </h2>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(201,254,110,0.12)", color: "#c9fe6e", border: "1px solid rgba(201,254,110,0.3)" }}>
                    {content.offerPrice}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Clock size={10} /> {content.offerDelay}
                  </span>
                </div>
              </div>

              {/* Formulaire */}
              <div className="rounded-xl p-5 mb-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {status === "success" ? (
                  <div className="py-4 text-center">
                    <CheckCircle size={28} className="mx-auto mb-3" style={{ color: "#c9fe6e" }} />
                    <p className="font-semibold mb-1 text-white">Demande envoyée !</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>On vous répond sous 48h.</p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <p className="text-sm font-medium mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                        Recevez une réponse personnalisée sous 48h
                      </p>
                      <input
                        type="text" placeholder="Prénom *" required value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                        style={inputStyle}
                      />
                      <input
                        type="email" placeholder="Email *" required value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                        style={inputStyle}
                      />
                      <input
                        type="text" placeholder="Nom de l'entreprise *" required value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                        style={inputStyle}
                      />
                      <select
                        required value={taille}
                        onChange={(e) => setTaille(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none cursor-pointer"
                        style={{ ...inputStyle, colorScheme: "dark" } as React.CSSProperties}
                      >
                        <option value="" disabled style={{ background: "#0A0A0F" }}>Nombre de salariés *</option>
                        <option value="1-10" style={{ background: "#0A0A0F" }}>1 – 10</option>
                        <option value="10-50" style={{ background: "#0A0A0F" }}>10 – 50</option>
                        <option value="50-200" style={{ background: "#0A0A0F" }}>50 – 200</option>
                        <option value="200+" style={{ background: "#0A0A0F" }}>200+</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Secteur d'activité * (ex : Commerce, Industrie, Services…)"
                        required value={secteur}
                        onChange={(e) => setSecteur(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                        style={inputStyle}
                      />
                      <textarea
                        placeholder="Quel problème cherchez-vous à résoudre ?" rows={3} value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none"
                        style={inputStyle}
                      />
                      {status === "error" && (
                        <p className="text-xs" style={{ color: "#ff6b6b" }}>Erreur — veuillez réessayer.</p>
                      )}
                      <button
                        type="submit" disabled={status === "loading"}
                        className="w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] disabled:opacity-50"
                        style={{ background: "#c9fe6e", color: "#0a0a0f" }}
                      >
                        {status === "loading" ? "Envoi…" : "Envoyer ma demande →"}
                      </button>
                    </form>

                    {offerId && (
                      <Link
                        href={`/offres/${offerId}`}
                        className="flex items-center justify-between mt-4 p-3 rounded-lg transition-all duration-200 border border-white/10 hover:border-[#c9fe6e]"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      >
                        <div>
                          <p className="font-medium text-sm text-white">Pas encore décidé ?</p>
                          <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                            Découvrez le détail complet de cette offre
                          </p>
                        </div>
                        <ArrowRight size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
                      </Link>
                    )}
                  </>
                )}
              </div>

              {/* Réassurance compacte */}
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                {[
                  { icon: <Clock size={10} />, text: "Réponse 48h" },
                  { icon: <Shield size={10} />, text: "Sans engagement" },
                  { icon: <CheckCircle size={10} />, text: "Devis ferme" },
                ].map(({ icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1 text-xs" style={{ color: "rgba(201,254,110,0.7)" }}>
                    {icon} {text}
                  </span>
                ))}
              </div>

              {/* Ce qui se passe ensuite */}
              <div className="text-xs space-y-2 mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
                <p className="font-mono uppercase tracking-wider text-[10px] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Ensuite</p>
                <p>01 — Eliott ou Julien vous répond sous 48h</p>
                <p>02 — On planifie un appel gratuit de 30 min</p>
                <p>03 — Vous recevez un devis ferme et définitif</p>
              </div>

              {/* Témoignage compact si disponible */}
              {content.testimonial && (
                <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &laquo;&nbsp;{content.testimonial}&nbsp;&raquo;
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
