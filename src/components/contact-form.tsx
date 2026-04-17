"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  CornerDownRight,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";


const BESOIN_LABELS: Record<string, string> = {
  "diagnostic-digital-ia": "Diagnostic Digital & IA — 490 €",
  "audit-securite": "Audit Sécurité — 490 €",
  "audit-visibilite": "Audit Visibilité & Référencement — 490 €",
  "audit-e-reputation": "Audit E-réputation & Sémantique — 990 €",
  "audit-maturite-cession": "Audit Maturité Digitale Cession — 990 €",
  "automatisation-documentaire": "Automatisation documentaire — à partir de 390 €",
  "automatisation-commerciale": "Automatisation commerciale — à partir de 1 990 €",
  "automatisation-reporting": "Automatisation reporting — à partir de 1 990 €",
  "assistant-ia": "Assistant IA — à partir de 1 990 €",
  "site-refonte": "Refonte de site web — à partir de 1 990 €",
  "site-zero": "Site vitrine sur mesure — à partir de 1 990 €",
  "site-app": "Application sur mesure — sur devis",
  "workshop-ia": "Workshop IA Dirigeants — 490 €",
  "formation-equipes": "Formation Équipes — à partir de 990 €",
  "partenariat": "Partenariat mensuel — à partir de 490 €/mois",
  // Quiz slugs
  "automatiser-saisie": "Automatisation documentaire — à partir de 390 €",
  "automatiser-relances": "Automatisation commerciale — à partir de 1 990 €",
  "automatiser-reporting": "Automatisation du reporting — à partir de 1 990 €",
  "automatiser-qualification": "Assistant IA service client — à partir de 1 990 €",
  "visibilite-trafic": "Audit Visibilité SEO — 490 €",
  "visibilite-conversion": "Optimisation de conversion — 490 €",
  "visibilite-sais-pas": "Audit Visibilité complet — 490 €",
  "cession-cedant": "Audit Maturité Digitale cédant — 990 €",
  "cession-repreneur": "Diagnostic pré-acquisition — 990 €",
  "formation-dirigeant": "Workshop IA Dirigeants — 490 €",
  "formation-deux": "Pack Formation complet — à partir de 1 490 €",
  "je-ne-sais-pas-taches": "Diagnostic Digital et IA — 490 €",
  "je-ne-sais-pas-visibilite": "Audit Visibilité — 490 €",
  "je-ne-sais-pas-cession": "Accompagnement Cession Reprise",
  "je-ne-sais-pas-explorer": "Diagnostic Digital et IA — 490 €",
  "pack-audit-general": "Pack Audit General — 1 990 €",
  "pack-audit-correction": "Pack Audit + Correction — 3 490 €",
  "partenariat-essentiel": "Partenaire Essentiel — 490 €/mois",
  "partenariat-business": "Partenaire Business — 990 €/mois",
  "partenariat-strategique": "Partenaire Stratégique — 1 990 €/mois",
  // Pages service
  "automatisation-ia": "IA et Automatisation — à partir de 390 €",
  "site-web": "Création de site web — à partir de 690 €",
  "product-design": "Design d'Interface — à partir de 1 990 €",
  "marketing-digital": "Marketing Digital — à partir de 490 €",
  // Slugs tarifs accordéon
  "auto-unitaire": "Automatisation Unitaire — 390 – 990 €",
  "pack-auto": "Pack Automatisation — 1 990 – 3 500 €",
  "assistant-ia-standard": "Assistant IA Standard — 1 990 – 4 990 €",
  "assistant-ia-avance": "Assistant IA Avancé — 5 000 – 15 000 €",
  "projet-ia": "Projet IA Structurant — sur devis",
  "landing-page": "Landing Page — 690 – 1 490 €",
  "site-vitrine": "Site Vitrine — 1 990 – 4 990 €",
  "site-ecommerce": "Site E-commerce — 4 990 – 12 000 €",
  "app-sur-mesure": "Application Sur Mesure — sur devis",
  "audit-cession": "Audit Maturité Cession & Reprise — 990 €",
  "pack-modernisation": "Pack Modernisation Express — 3 500 – 6 000 €",
  "pack-transformation": "Pack Transformation Post-Reprise — 8 000 – 15 000 €",
  "pack-ia-metier": "Pack Transformation + IA Métier — 18 000 – 35 000 €",
  // Packs cession
  "cession-pack-essentiel": "Modernisation Express — 3 500 à 6 000 €",
  "cession-pack-transformation": "Transformation Post-Reprise — 8 000 à 15 000 €",
  "cession-pack-complet": "Transformation + IA Métier — 18 000 à 35 000 €",
};

const TYPES_BESOIN = [
  { value: "", label: "Sélectionnez…" },
  { value: "automatisation-ia", label: "Automatisation & IA" },
  { value: "site-web", label: "Site web / application" },
  { value: "marketing-digital", label: "Marketing digital (SEO, Ads)" },
  { value: "product-design", label: "Design d'interface (UX/UI)" },
  { value: "cession-reprise", label: "Cession / reprise d'entreprise" },
  { value: "diagnostic", label: "Diagnostic / audit" },
  { value: "autre", label: "Autre / pas sûr" },
];

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  typeBesoin: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  typeBesoin?: string;
  message?: string;
}

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [besoinParam, setBesoinParam] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    typeBesoin: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    const besoin = searchParams.get("besoin");
    setBesoinParam(besoin);
  }, [searchParams]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Le nom doit contenir au moins 2 caractères";
    }

    // Entreprise : optionnelle (les indépendants et repreneurs n'en ont pas)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez saisir un email valide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    if (submitError) {
      setSubmitError(null);
    }
  };

  const focusFirstErrorField = () => {
    setTimeout(() => {
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField && mounted) {
        const element = document.getElementById(firstErrorField);
        element?.focus();
      }
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      focusFirstErrorField();
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Besoin : soit via URL param (?besoin=...), soit via le select du form
      const besoinValue = besoinParam || formData.typeBesoin || undefined;
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        email: formData.email,
        message: formData.message,
        ...(besoinValue ? { besoin: besoinValue } : {}),
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      trackFormSubmission("contact");
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        typeBesoin: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
      );
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "!bg-[rgba(255,255,255,0.05)] !border-[var(--border)] !text-white placeholder:!text-[var(--text-muted)] focus:!border-[var(--violet)] focus:!ring-[var(--violet-dim)]";

  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div
            className="h-4 rounded w-3/4 mb-4"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div
              className="h-10 rounded"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <div
              className="h-10 rounded"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
          <div
            className="h-10 rounded mb-4"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <div
            className="h-10 rounded mb-4"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <div
            className="h-24 rounded mb-4"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <div
            className="h-10 rounded w-32"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div>
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Check style={{ color: "var(--ad-1)" }} size={20} />
            <p className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Message envoyé avec succès !
            </p>
          </div>
          <p style={{ color: "var(--text-secondary)" }}>
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-[rgba(124,58,237,0.15)]"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
            color: "var(--text-primary)",
          }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const besoinLabel = besoinParam ? (BESOIN_LABELS[besoinParam] ?? null) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <p id="submit-help" className="text-sm" style={{ color: "var(--text-muted)" }}>
        {besoinLabel
          ? "Complétez vos coordonnées — on revient vers vous sous 48h."
          : "Prénom, nom, email et message sont obligatoires. Le reste est optionnel."}
      </p>

      {/* Sujet pré-rempli */}
      {besoinLabel && (
        <div className="space-y-2">
          <Label
            htmlFor="sujet"
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Votre demande
          </Label>
          <div
            className="rounded-md px-3 py-2 text-sm font-medium flex items-center gap-2"
            style={{ background: "rgba(201,254,110,0.06)", border: "1px solid rgba(201,254,110,0.2)" }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#c9fe6e" }} />
            <span style={{ color: "#c9fe6e" }}>{besoinLabel}</span>
          </div>
        </div>
      )}

      {/* Prénom et Nom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="firstName"
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Prénom
          </Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={`${inputStyles} ${errors.firstName ? "!border-red-500 focus:!border-red-500" : ""}`}
            autoComplete="given-name"
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-sm text-red-400" role="alert">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="lastName"
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Nom
          </Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={`${inputStyles} ${errors.lastName ? "!border-red-500 focus:!border-red-500" : ""}`}
            autoComplete="family-name"
          />
          {errors.lastName && (
            <p id="lastName-error" className="text-sm text-red-400" role="alert">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Entreprise (optionnelle) */}
      <div className="space-y-2">
        <Label
          htmlFor="company"
          className="text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Entreprise{" "}
          <span className="lowercase" style={{ color: "var(--text-muted)" }}>
            (optionnel)
          </span>
        </Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className={inputStyles}
          autoComplete="organization"
        />
      </div>

      {/* Type de besoin (si pas pré-rempli par ?besoin=...) */}
      {!besoinLabel && (
        <div className="space-y-2">
          <Label
            htmlFor="typeBesoin"
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Type de projet{" "}
            <span className="lowercase" style={{ color: "var(--text-muted)" }}>
              (optionnel)
            </span>
          </Label>
          <select
            id="typeBesoin"
            value={formData.typeBesoin}
            onChange={(e) => handleInputChange("typeBesoin", e.target.value)}
            className={`w-full rounded-md px-3 py-2 text-sm ${inputStyles}`}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderWidth: 1,
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            {TYPES_BESOIN.map((t) => (
              <option key={t.value} value={t.value} style={{ background: "#0a0a0f" }}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Email */}
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="email@exemple.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputStyles} ${errors.email ? "!border-red-500 focus:!border-red-500" : ""}`}
          autoComplete="email"
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder={besoinParam ? "Précisez votre situation ou vos contraintes particulières..." : "Décrivez votre demande..."}
          className={`min-h-[120px] resize-y ${inputStyles} ${errors.message ? "!border-red-500 focus:!border-red-500" : ""}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Erreur de soumission */}
      {submitError && (
        <div
          className="rounded-lg p-4 flex items-center gap-3"
          style={{
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
          }}
        >
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <p className="text-sm text-red-400">{submitError}</p>
        </div>
      )}

      {/* Bouton de soumission */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-describedby="submit-help"
        className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] rounded-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_40px_var(--accent-glow)] disabled:opacity-50 w-full sm:w-fit"
        style={{
          background: "var(--ad-1)",
          color: "#000",
          boxShadow: "0 0 20px var(--accent-dim)",
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message <CornerDownRight size={16} />
          </>
        )}
      </button>
      <p className="text-sm text-center sm:text-left font-medium" style={{ color: "var(--text-secondary)" }}>
        ✓ Réponse garantie sous 48h · Zéro engagement
      </p>
    </form>
  );
}
