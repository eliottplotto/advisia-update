import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projet',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Texte Alternatif',
      validation: rule => rule.custom((value, context) => {
        const parent = context?.parent as {asset?: {_ref?: string}}

        return !value && parent?.asset?._ref ? 'Alt texte est requis si une image est définie' : true
      }),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
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
