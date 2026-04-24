import type { MetadataRoute } from "next";
import { getAllProjectSlugs, getAllArticleSlugs } from "@/sanity/lib/queries";
import { LEAD_MAGNETS } from "@/lib/lead-magnets/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://advisia.agency";
  const now = new Date().toISOString();

  // Fetch dynamic slugs from Sanity
  const [projectSlugs, articleSlugs] = await Promise.all([
    getAllProjectSlugs(),
    getAllArticleSlugs(),
  ]);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/automatisations-ia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/agence-web`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/product-design`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/marketing-digital`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/identite-de-marque`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/agence`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/prendre-rendez-vous`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cession-reprise`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diagnostics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/accompagnement`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ressources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  // Dynamic project pages from Sanity
  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projets/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dynamic article pages from Sanity
  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Lead magnet resource pages
  const resourcePages: MetadataRoute.Sitemap = LEAD_MAGNETS.map((m) => ({
    url: `${baseUrl}/ressources/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...articlePages, ...resourcePages];
}
