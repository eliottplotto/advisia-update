import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "projet" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "projet" && slug.current == $slug][0]{
    _id,
    slug,
    client,
    coverImage {
      ...,
      asset->,
      alt
    },
    headline,
    date,
    review,
    service[]->{
      _id,
      title, 
    }
  }
`);

export const FEATURED_PROJECT_QUERY =
  defineQuery(`
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
        alt,
        excerpt,
        publishedAt
      }
    }
`);

export const LASTS_PROJECTS_QUERY =
  defineQuery(`
    *[_type == "projet" && defined(slug.current)] | order(publishedAt desc)[0..1]{
      _id,
      title,
      slug,
      coverImage {
        ...,
        asset->
      },
}`);