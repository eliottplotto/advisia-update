"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  RiCheckFill,
  RiCornerDownRightLine,
  RiErrorWarningFill,
  RiLoader4Fill,
} from "@remixicon/react";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    if (!formData.company.trim()) {
      newErrors.company = "Le nom de l'entreprise est requis";
    }

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
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
            <RiCheckFill style={{ color: "var(--ad-1)" }} size={20} />
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

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <p id="submit-help" className="text-sm" style={{ color: "var(--text-muted)" }}>
        Tous les champs sont obligatoires.
      </p>

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

      {/* Entreprise */}
      <div className="space-y-2">
        <Label
          htmlFor="company"
          className="text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Entreprise
        </Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
          className={`${inputStyles} ${errors.company ? "!border-red-500 focus:!border-red-500" : ""}`}
          autoComplete="organization"
        />
        {errors.company && (
          <p id="company-error" className="text-sm text-red-400" role="alert">
            {errors.company}
          </p>
        )}
      </div>

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
          placeholder="Décrivez votre demande..."
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
          <RiErrorWarningFill className="h-4 w-4 text-red-400" />
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
            <RiLoader4Fill className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message <RiCornerDownRightLine size={16} />
          </>
        )}
      </button>
    </form>
  );
}
