import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'temoignage',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'entreprise',
      title: 'Entreprise',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'prenom',
      title: 'Prénom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'poste',
      title: 'Poste occupé',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'citation',
      title: 'Citation',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'entreprise',
      subtitle: 'nom' 
    }
  }
})
