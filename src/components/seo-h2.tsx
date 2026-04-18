/**
 * H2 sémantique invisible visuellement, lu par Google/moteurs IA.
 * Usage : juste après le H1 du hero, pour renforcer les mots-clés cibles
 * sans alourdir la typographie visible.
 *
 * Class `sr-only` = accessible aux lecteurs d'écran et aux crawlers,
 * exclue du flow visuel. Standard WCAG + bonne pratique SEO.
 */
export default function SeoH2({ children }: { children: React.ReactNode }) {
  return <h2 className="sr-only">{children}</h2>;
}
