import { client } from "./client";
import { Project } from "../../types/sanity";
import { defineQuery } from "next-sanity";

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = defineQuery(`
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
      review-> {
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
      },
      services[]-> {
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
    }
  `);

  try {
    const project = await client.fetch<Project>(query, { slug });
    return project;
  } catch (error) {
    console.error(`Erreur lors de la récupération du projet ${slug}:`, error);
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const query = defineQuery(`
    *[_type == "project" && defined(slug.current)][].slug.current
  `);

  try {
    const slugs = await client.fetch<string[]>(query);
    return slugs;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de tous les slugs de projet:",
      error
    );
    return [];
  }
}

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)][0...12]{
  _id, title, slug, headline,
}`);

export const FEATURED_PROJECT_QUERY = defineQuery(`
    *[_type == "settings"][0]{
      featuredProject->{
        _id,
        title,
        slug,
        client,
        coverImage{
          ...,
          asset->
        },
        logo{
          ...,
          asset->
        },
        alt,
        headline,
        publishedAt
      }
    }
`);

export const LASTS_PROJECTS_QUERY = defineQuery(`
    *[_type == "project" && defined(slug.current)] | order(publishedAt desc)[0..1]{
      _id,
      title,
      slug,
      coverImage {
        ...,
        asset->
      },
}`);
