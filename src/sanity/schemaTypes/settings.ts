import { RiSettings5Fill } from "@remixicon/react";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Paramètres du site",
  description: "Paramètres globaux du site Advisia.",
  type: "document",
  preview: {
    select: {
      title: "siteTitle",
    },
    prepare({title}) {
      return {
        title,
        media: RiSettings5Fill,
      }
    },
  },
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Titre du site",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title:"Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      description: "Logo principal. Sera visible dans la barre de navigation et le pide de page.",
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte Alternatif',
        }
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name:"socialMediaLinks",
      title:"Liens des réseaux sociaux",
      type:"array",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Plateforme",
              type: "string",
              options: {
                list: [
                  {title: "LinkedIn", value: "linkedin",},
                  {title: "Instagram", value: "instagram"},
                  {title: "Facebook", value: "facebook"},
                ]
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              description: "URL complète du profil sur le réseau social",
              validation: (rule) => rule.required(),
            }),
          ]
        })
      ]
    }),
    defineField({
      name: "featuredProject",
      type: "reference",
      title: "Étude de cas à la une",
      to: [{ type: 'project' }]
    }),
  ],
});
