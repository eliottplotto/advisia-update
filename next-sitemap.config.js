/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://advisia.agency",
  generateRobotsTxt: true,
  // Exclure les ressources non-HTML du sitemap
  exclude: [
    "/robots.txt",
    "/sitemap.xml",
    "/apple-icon*",
    "/icon*",
    "/manifest.json",
    "/studio/*",
    "/resultat",
    "/contact",
    "/prendre-rendez-vous",
  ],
  // Priorités & fréquences calibrées par type de page
  transform: async (config, path) => {
    let priority = 0.5;
    let changefreq = "monthly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (
      path === "/services/automatisations-ia" ||
      path === "/services/agence-web" ||
      path === "/services/marketing-digital" ||
      path === "/services/product-design" ||
      path === "/diagnostics" ||
      path === "/cession-reprise" ||
      path === "/accompagnement"
    ) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (
      path.startsWith("/services/marketing-digital/") ||
      path === "/tarifs" ||
      path === "/agence" ||
      path === "/insights" ||
      path === "/projets"
    ) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (
      path.startsWith("/offres/") ||
      path.startsWith("/automatisations/")
    ) {
      priority = 0.75;
      changefreq = "monthly";
    } else if (path.startsWith("/insights/")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.startsWith("/projets/")) {
      priority = 0.7;
      changefreq = "monthly";
    } else if (
      path === "/mentions-legales" ||
      path === "/politique-de-confidentialite"
    ) {
      priority = 0.3;
      changefreq = "yearly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api", "/resultat"],
      },
    ],
  },
};
