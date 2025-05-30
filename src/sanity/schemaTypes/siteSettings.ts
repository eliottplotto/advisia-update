import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", type: "string", title: "Titre du site" }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "logo", type: "image", title: "Logo" }),
  ],
});
