/**
 * Construit une URL de lead magnet avec token + UTMs cohérents pour GA4.
 *
 * Convention utilisée dans tous les emails de la séquence nurturing :
 *   utm_source=email
 *   utm_medium=email
 *   utm_campaign=nurturing_{slug}      (ex: nurturing_checklist-seo-local)
 *   utm_content={step}                 (j0 | j4 | j7 | j14)
 *
 * Le step permet de voir dans GA4 de quel email du flow vient le lead.
 */
export type NurturingStep = "j0" | "j4" | "j7" | "j14";

export function buildUnlockUrl(
  baseUrl: string,
  slug: string,
  token: string,
  step: NurturingStep
): string {
  const url = new URL(`${baseUrl}/ressources/${slug}`);
  url.searchParams.set("t", token);
  url.searchParams.set("utm_source", "email");
  url.searchParams.set("utm_medium", "email");
  url.searchParams.set("utm_campaign", `nurturing_${slug}`);
  url.searchParams.set("utm_content", step);
  return url.toString();
}

/**
 * Construit une URL vers une autre page du site avec UTMs cohérents.
 * Utilisé pour les liens "prendre rendez-vous" et "advisia.agency" dans les emails.
 */
export function buildTrackingUrl(
  targetUrl: string,
  slug: string,
  step: NurturingStep
): string {
  const url = new URL(targetUrl);
  url.searchParams.set("utm_source", "email");
  url.searchParams.set("utm_medium", "email");
  url.searchParams.set("utm_campaign", `nurturing_${slug}`);
  url.searchParams.set("utm_content", step);
  return url.toString();
}
