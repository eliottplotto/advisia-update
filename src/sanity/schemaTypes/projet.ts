import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projet',
  title: 'Projet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Texte Alternatif',
      validation: rule => rule.custom((value, context) => {
        const parent = context?.parent as {asset?: {_ref?: string}}

        return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
      }),
    }),
    defineField({
      name: 'excerpt',
      title: 'Résumé',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
    }),
  ],
})
