"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  className?: string;
}

export function NewsletterForm({
  title = "Inscrivez-vous à notre newsletter",
  description = "Recevez nos dernières actualités et offres exclusives",
  className = "",
}: NewsletterFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.email.trim()) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "Inscription réussie ! Vous avez été ajouté à notre newsletter avec succès."
        );
        setFormData({ firstName: "", email: "" });
      } else {
        toast.error(
          result.error || "Une erreur est survenue lors de l'inscription"
        );
      }
    } catch (error) {
      toast.error(
        "Impossible de vous inscrire pour le moment. Veuillez réessayer."
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl md:text-4xl mb-3">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="flex items-center gap-2">
            Prénom
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Votre prénom"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            disabled={isLoading}
            required
          />
        </div>

        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Inscription en cours...
            </>
          ) : (
            "S'inscrire à la newsletter"
          )}
        </Button>
      </form>
    </div>
  );
}
