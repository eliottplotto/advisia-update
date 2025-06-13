import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: "Titre de l'étude de cas",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contexte',
      title: 'Le contexte',
      description: "Détaillez le contexte du projet, les enjeux, les objectifs, le client...",
      type: 'text',
    }),
    defineField({
      name: 'impact',
      title: 'Notre impact',
      description: "Détaillez notre impact sur le projet : ce que nous avons réalisé et comment nous l'avons réalisé.",
      type: 'text',
    }),
    defineField({
      name: 'resultats',
      title: 'Les résultats',
      description: "Démontrez notre réussite sur le projet avec des KPIs si possible.",
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'review',
      title: 'Témoignage',
      type: 'reference',
      to: [{type: 'temoignage' }]
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})
