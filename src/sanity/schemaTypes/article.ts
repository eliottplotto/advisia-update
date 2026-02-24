import { defineType, defineField } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required().min(10).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .slice(0, 96),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Extrait",
      description: "Résumé court affiché sur les cards (max 200 caractères)",
      type: "text",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Guide pratique", value: "guide" },
          { title: "Veille IA", value: "veille" },
          { title: "Étude de cas", value: "etude-de-cas" },
        ],
        layout: "radio",
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
      name: "body",
      title: "Contenu",
      type: "blockContent",
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      options: {
        list: [
          { title: "Eliott", value: "Eliott" },
          { title: "Julien", value: "Julien" },
        ],
      },
    }),
    defineField({
      name: "readTime",
      title: "Temps de lecture (minutes)",
      type: "number",
      validation: (rule) => rule.min(1).max(60),
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
      title: "title",
      category: "category",
      media: "coverImage",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { title, category, media, publishedAt } = selection;
      const categoryLabels: Record<string, string> = {
        guide: "Guide",
        veille: "Veille IA",
        "etude-de-cas": "Étude de cas",
      };
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString("fr-FR")
        : "Non publié";
      return {
        title,
        subtitle: `${categoryLabels[category] || category} — ${date}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date (récent en premier)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Date (ancien en premier)",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
});
