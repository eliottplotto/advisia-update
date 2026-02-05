import { client } from "./client";
import type { Project } from "../../types/sanity";
import { defineQuery } from "next-sanity";

// Types pour les données déréférencées
export type Service = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  icon?: {
    asset: {
      _id: string;
      url: string;
    };
  };
};

export type Review = {
  _id: string;
  entreprise: string;
  nom: string;
  prenom: string;
  poste: string;
  citation: string;
  photo?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  logo?: {
    asset: {
      _id: string;
      url: string;
    };
  };
};

export const projectFields = `
  _id,
  _type,
  _createdAt,
  _updatedAt,
  client,
  slug,
  coverImage{
    asset->,
    alt
  },
  logo{
    asset->,
    alt
  },
  headline,
  contexte,
  contextImage{
    asset->,
    alt
  },
  impact,
  impactImage{
    asset->,
    alt
  },
  resultats,
  resultatsImage{
    asset->,
    alt
  },
  kpis[]{
    metric,
    value,
    description
  },
  date,
  review->{
    _id,
    name,
    company,
    content,
    rating
  },
  services[]->{
    _id,
    title,
    slug
  },
  seo{
    metaTitle,
    metaDescription
  }
`;

// Requête principale du projet (sans déréférencement)
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projectBySlugQuery = defineQuery(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      client,
      slug,
      coverImage {
        asset->{
          _id,
          url
        },
        alt
      },
      logo {
        asset->{
          _id,
          url
        }
      },
      headline,
      contexte,
      impact,
      resultats,
      date,
      review,
      services
    }
  `);

  try {
    const project = await client.fetch<Project>(projectBySlugQuery, { slug });
    return project;
  } catch (error) {
    console.error(`Erreur lors de la récupération du projet ${slug}:`, error);
    return null;
  }
}

// Requête pour récupérer les services par leurs références
export async function getServicesByIds(
  serviceRefs: Array<{ _ref: string }>
): Promise<Service[]> {
  if (!serviceRefs || serviceRefs.length === 0) return [];

  const serviceIds = serviceRefs.map((ref) => ref._ref);

  const servicesByIdsQuery = defineQuery(`
    *[_type == "service" && _id in $serviceIds] {
      _id,
      title,
      slug,
      icon {
        asset->{
          _id,
          url
        }
      }
    }
  `);

  try {
    const services = await client.fetch<Service[]>(servicesByIdsQuery, { serviceIds });
    return services;
  } catch (error) {
    console.error("Erreur lors de la récupération des services:", error);
    return [];
  }
}

// Requête pour récupérer un témoignage par sa référence
export async function getReviewById(reviewRef: {
  _ref: string;
}): Promise<Review | null> {
  if (!reviewRef?._ref) return null;

  const reviewByIdQuery = defineQuery(`
    *[_type == "temoignage" && _id == $reviewId][0] {
      _id,
      entreprise,
      nom,
      prenom,
      poste,
      citation,
      photo {
        asset->{
          _id,
          url
        }
      },
      logo {
        asset->{
          _id,
          url
        }
      }
    }
  `);

  try {
    const review = await client.fetch<Review>(reviewByIdQuery, {
      reviewId: reviewRef._ref,
    });
    return review;
  } catch (error) {
    console.error("Erreur lors de la récupération du témoignage:", error);
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const allProjectSlugsQuery = defineQuery(`
    *[_type == "project" && defined(slug.current)][].slug.current
  `);

  try {
    const slugs = await client.fetch<string[]>(allProjectSlugsQuery);
    return slugs;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de tous les slugs de projet:",
      error
    );
    return [];
  }
}

export const allProjectsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${projectFields}
  }
`);

export const projectQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }
`);