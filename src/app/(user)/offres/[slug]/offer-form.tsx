"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface OfferFormProps {
  slug: string;
  offerName: string;
}

export default function OfferForm({ slug, offerName }: OfferFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [taille, setTaille] = useState("");
  const [secteur, setSecteur] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const combinedMessage = `Demande pour ${offerName} | Entreprise: ${company} | Taille: ${taille} | Secteur: ${secteur}${message ? ` | Besoin: ${message}` : ""}`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName: "", company, email,
          message: combinedMessage,
          besoin: slug,
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

  if (status === "success") {
    return (
      <div className="rounded-xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex flex-col items-center text-center gap-4 py-6">
          <CheckCircle size={40} style={{ color: "#c9fe6e" }} />
          <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Demande envoyée !
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            On vous répond sous 48h avec une première analyse personnalisée.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <h2 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: "var(--font-display)" }}>
        Demander {offerName}
      </h2>
      <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
        On vous répond sous 48h avec une première analyse personnalisée.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text" placeholder="Prénom *" required value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={inputStyle}
          />
          <input
            type="email" placeholder="Email *" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={inputStyle}
          />
        </div>
        <input
          type="text" placeholder="Nom de l'entreprise *" required value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={inputStyle}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            required value={taille}
            onChange={(e) => setTaille(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none cursor-pointer"
            style={{ ...inputStyle, colorScheme: "dark" } as React.CSSProperties}
          >
            <option value="" disabled style={{ background: "#0A0A0F" }}>Nombre de salariés *</option>
            <option value="1-10" style={{ background: "#0A0A0F" }}>1 – 10</option>
            <option value="10-50" style={{ background: "#0A0A0F" }}>10 – 50</option>
            <option value="50-200" style={{ background: "#0A0A0F" }}>50 – 200</option>
            <option value="200+" style={{ background: "#0A0A0F" }}>200+</option>
          </select>
          <input
            type="text" placeholder="Secteur d'activité *" required value={secteur}
            onChange={(e) => setSecteur(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={inputStyle}
          />
        </div>
        <textarea
          placeholder="Quel problème cherchez-vous à résoudre ?" rows={3} value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
          style={inputStyle}
        />
        {status === "error" && (
          <p className="text-sm" style={{ color: "#ff6b6b" }}>Erreur — veuillez réessayer.</p>
        )}
        <button
          type="submit" disabled={status === "loading"}
          className="w-full py-4 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-[1px] disabled:opacity-50"
          style={{ background: "#c9fe6e", color: "#0a0a0f" }}
        >
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande →"}
        </button>
        <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
          Réponse sous 48h · Sans engagement · Zéro jargon
        </p>
      </form>
    </div>
  );
}
