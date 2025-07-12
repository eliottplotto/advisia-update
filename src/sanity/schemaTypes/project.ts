import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      validation: (rule) => rule.required().min(2).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "headline", // Changé de "title" à "headline" car c'est le champ qui existe
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .slice(0, 96)
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (rule) => rule.required().min(10).max(120),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo du client",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (rule) => rule.required().min(5).max(80),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Titre principal",
      type: "string",
      description: "Titre accrocheur de l'étude de cas",
      validation: (rule) => rule.required().min(10).max(120),
    }),
    defineField({
      name: "contexte",
      title: "Le contexte",
      description: "Détaillez le contexte du projet, les enjeux, les objectifs, le client...",
      type: "text",
      validation: (rule) => rule.required().min(100).max(1000),
    }),
    defineField({
      name: "contextImage",
      title: "Image de contexte",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (rule) => rule.required().min(10).max(120),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "impact",
      title: "Notre impact",
      description: "Détaillez notre impact sur le projet : ce que nous avons réalisé et comment nous l'avons réalisé.",
      type: "text",
      validation: (rule) => rule.required().min(100).max(1000),
    }),
    defineField({
      name: "impactImage",
      title: "Image d'impact",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (rule) => rule.required().min(10).max(120),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "resultats",
      title: "Les résultats",
      description: "Démontrez notre réussite sur le projet avec des KPIs si possible.",
      type: "text",
      validation: (rule) => rule.required().min(100).max(1000),
    }),
    defineField({
      name: "resultatsImage",
      title: "Image de résultats",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (rule) => rule.required().min(10).max(120),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kpis",
      title: "KPIs & Métriques",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "metric",
              title: "Métrique",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "value",
              title: "Valeur",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "date",
      title: "Date du projet",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "review",
      title: "Témoignage client",
      type: "reference",
      to: [{ type: "temoignage" }],
    }),
    defineField({
      name: "services",
      title: "Services fournis",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Titre SEO",
          type: "string",
          validation: (rule) => rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Description SEO",
          type: "text",
          validation: (rule) => rule.max(160),
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "headline",
      client: "client",
      media: "coverImage",
      date: "date",
    },
    prepare(selection) {
      const { title, client, media, date } = selection;
      return {
        title: title,
        subtitle: `${client} - ${date}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Date (récent en premier)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Date (ancien en premier)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
    {
      title: "Client A-Z",
      name: "clientAsc",
      by: [{ field: "client", direction: "asc" }],
    },
  ],
});