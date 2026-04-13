"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface OfferFormProps {
  slug: string;
  offerName: string;
}

const SECTEURS = [
  "Industrie & Fabrication",
  "Commerce & Distribution",
  "Services aux entreprises (B2B)",
  "Santé & Médico-social",
  "Immobilier & Construction",
  "Transport & Logistique",
  "Restauration & Hôtellerie",
  "Éducation & Formation",
  "Finance & Assurance",
  "Technologies & Numérique",
  "Autre",
];

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
          firstName,
          lastName: "",
          company,
          email,
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

  const inputClass =
    "w-full px-4 py-3.5 rounded-lg text-sm outline-none transition-colors duration-150 focus:border-[#c9fe6e]/50 placeholder:text-white/30";
  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
  };
  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    colorScheme: "dark",
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-16">
        <CheckCircle size={44} style={{ color: "#c9fe6e" }} />
        <div>
          <h3
            className="text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Demande envoyée.
          </h3>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
            On vous répond sous 48h avec une première analyse personnalisée.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10 text-center">
        <p
          className="text-xs font-mono tracking-widest uppercase mb-3"
          style={{ color: "#a78bfa" }}
        >
          Démarrer
        </p>
        <h2
          className="text-3xl lg:text-4xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Démarrer avec {offerName}
        </h2>
        <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
          Réponse sous 48h · Sans engagement · Zéro jargon
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Prénom *"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <input
          type="text"
          placeholder="Nom de l'entreprise *"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
          style={inputStyle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            required
            value={secteur}
            onChange={(e) => setSecteur(e.target.value)}
            className={`${inputClass} cursor-pointer`}
            style={selectStyle}
          >
            <option value="" disabled style={{ background: "#0A0A0F" }}>
              Secteur d&apos;activité *
            </option>
            {SECTEURS.map((s) => (
              <option key={s} value={s} style={{ background: "#0A0A0F" }}>
                {s}
              </option>
            ))}
          </select>

          <select
            required
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            className={`${inputClass} cursor-pointer`}
            style={selectStyle}
          >
            <option value="" disabled style={{ background: "#0A0A0F" }}>
              Nombre de salariés *
            </option>
            <option value="1-10" style={{ background: "#0A0A0F" }}>
              1 – 10
            </option>
            <option value="10-50" style={{ background: "#0A0A0F" }}>
              10 – 50
            </option>
            <option value="50-200" style={{ background: "#0A0A0F" }}>
              50 – 200
            </option>
            <option value="200+" style={{ background: "#0A0A0F" }}>
              200+
            </option>
          </select>
        </div>

        <textarea
          placeholder="Quel problème cherchez-vous à résoudre ? (optionnel)"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />

        {status === "error" && (
          <p className="text-sm" style={{ color: "#ff6b6b" }}>
            Erreur — veuillez réessayer.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:-translate-y-[2px] hover:shadow-lg disabled:opacity-50 mt-2"
          style={{
            background: "#c9fe6e",
            color: "#0a0a0f",
            boxShadow: "0 0 0 0 rgba(201,254,110,0)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,254,110,0.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(201,254,110,0)")
          }
        >
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande →"}
        </button>
      </form>
    </div>
  );
}
