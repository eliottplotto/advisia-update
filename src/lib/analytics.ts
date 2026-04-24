export const GA_MEASUREMENT_ID = "G-7H2JPLYX21";

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const trackEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackCTAClick = (ctaName: string, page: string) => {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    label: `${ctaName} - ${page}`,
  });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent({
    action: "form_submit",
    category: "conversion",
    label: formName,
  });
};

export const trackBookingClick = () => {
  trackEvent({
    action: "booking_click",
    category: "conversion",
    label: "prendre_rendez_vous",
  });
};

/**
 * Tracke la soumission du formulaire lead magnet (l'utilisateur a laissé son email).
 * event_name: lead_magnet_request | category: conversion
 * custom params : slug, source (utm_source ou "direct")
 */
export const trackLeadMagnetRequest = (slug: string, source?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "lead_magnet_request", {
      event_category: "conversion",
      event_label: slug,
      lead_magnet_slug: slug,
      lead_magnet_source: source || "direct",
    });
  }
};

/**
 * Tracke l'ouverture effective du document après clic sur le lien email.
 * Le param nurturing_step (j0/j4/j7/j14) permet d'identifier de quel email
 * du flow vient le lead, pour construire le funnel dans GA4.
 * event_name: lead_magnet_unlock | category: conversion
 */
export const trackLeadMagnetUnlock = (slug: string, nurturingStep?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "lead_magnet_unlock", {
      event_category: "conversion",
      event_label: slug,
      lead_magnet_slug: slug,
      nurturing_step: nurturingStep || "direct",
    });
  }
};

/**
 * Tracke le téléchargement effectif (clic sur "Télécharger en PDF" une fois le document débloqué).
 * event_name: lead_magnet_download | category: conversion
 */
export const trackLeadMagnetDownload = (slug: string, nurturingStep?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "lead_magnet_download", {
      event_category: "conversion",
      event_label: slug,
      lead_magnet_slug: slug,
      nurturing_step: nurturingStep || "direct",
    });
  }
};

/**
 * Helper client-side : lit utm_content dans l'URL courante pour identifier
 * l'étape de la séquence nurturing (j0/j4/j7/j14) ou "direct" si absent.
 */
export const getNurturingStep = (): string => {
  if (typeof window === "undefined") return "direct";
  const params = new URLSearchParams(window.location.search);
  return params.get("utm_content") || "direct";
};
