import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Titre du site"
    }),
    defineField({
      name: "description",
      type: "text", title:
      "Description"
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo"
    }),
    defineField({
      name: "featuredProject",
      type: "reference",
      title: "Étude de cas à la une",
      to: [{ type: 'projet' }]
    }),
  ],
});
