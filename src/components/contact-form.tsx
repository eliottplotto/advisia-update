"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  RiCheckFill,
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validation prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";
    }

    // Validation nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation entreprise
    if (!formData.company.trim()) {
      newErrors.company = "Le nom de l'entreprise est requis";
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez saisir un email valide";
    }

    // Validation message
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

    // Effacer l'erreur du champ modifié
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    // Effacer l'erreur de soumission
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus sur le premier champ avec erreur
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
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

      if (!res.ok) throw new Error("Erreur lors de l'envoi");

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
        "Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <Alert>
          <RiCheckFill />
          <AlertTitle>Message envoyé avec succès !</AlertTitle>
          <AlertDescription>
            Nous vous répondrons dans les plus brefs délais.
          </AlertDescription>
        </Alert>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="secondary"
          className="mt-4"
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <p id="submit-help" className="text-sm text-muted-foreground">
        Tous les champs sont obligatoires.
      </p>
      {/* Prénom et Nom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium">
            Prénom
          </Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={
              errors.firstName
                ? "border-destructive focus:border-destructive"
                : ""
            }
            autoComplete="given-name"
          />
          {errors.firstName && (
            <p
              id="firstName-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium">
            Nom
          </Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={
              errors.lastName
                ? "border-destructive focus:border-destructive"
                : ""
            }
            autoComplete="family-name"
          />
          {errors.lastName && (
            <p
              id="lastName-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Entreprise */}
      <div className="space-y-2">
        <Label htmlFor="company" className="text-sm font-medium">
          Entreprise
        </Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
          className={
            errors.company ? "border-destructive focus:border-destructive" : ""
          }
          autoComplete="organization"
        />
        {errors.company && (
          <p
            id="company-error"
            className="text-sm text-destructive"
            role="alert"
          >
            {errors.company}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
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
          className={
            errors.email ? "border-destructive focus:border-destructive" : ""
          }
          autoComplete="email"
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Décrivez votre demande..."
          className={`min-h-[120px] resize-y ${errors.message ? "border-destructive focus:border-destructive" : ""}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-sm text-destructive"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Erreur de soumission */}
      {submitError && (
        <Alert variant="destructive">
          <RiErrorWarningFill className="h-4 w-4" />
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}

      {/* Bouton de soumission */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        aria-describedby="submit-help"
      >
        {isSubmitting ? (
          <>
            <RiLoader4Fill className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </Button>
    </form>
  );
}
