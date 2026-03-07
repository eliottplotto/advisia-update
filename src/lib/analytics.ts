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
