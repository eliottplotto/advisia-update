"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-7H2JPLYX21";
const STORAGE_KEY = "advisia-cookie-consent-v1";

type ConsentDetails = {
  state: "accepted" | "rejected" | "customized" | null;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

/**
 * GA4 avec Consent Mode v2 (RGPD).
 * - `analytics_storage` = granted/denied selon le choix utilisateur
 * - Par défaut : tout en "denied" tant que pas de consentement explicite (RGPD strict)
 */
export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentDetails | null>(null);

  useEffect(() => {
    const read = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setConsent(JSON.parse(stored) as ConsentDetails);
      } catch {
        // noop
      }
    };
    read();

    const onUpdate = (e: Event) => {
      const detail = (e as CustomEvent<ConsentDetails>).detail;
      if (detail) setConsent(detail);
    };
    window.addEventListener("advisia:consent-updated", onUpdate);
    return () =>
      window.removeEventListener("advisia:consent-updated", onUpdate);
  }, []);

  // Propage le consent à gtag quand il change
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag !== "function") return;
    w.gtag("consent", "update", {
      analytics_storage: consent?.analytics ? "granted" : "denied",
      ad_storage: consent?.marketing ? "granted" : "denied",
      ad_user_data: consent?.marketing ? "granted" : "denied",
      ad_personalization: consent?.marketing ? "granted" : "denied",
    });
  }, [consent]);

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          // Consent Mode v2 : denied par défaut
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}
