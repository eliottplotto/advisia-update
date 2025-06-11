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
    }),
    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
      name: 'prenom',
      title: 'Prénom',
      type: 'string',
    }),
    defineField({
      name: 'poste',
      title: 'Poste occupé',
      type: 'string',
    }),
    defineField({
      name: 'citation',
      title: 'Citation',
      type: 'text',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
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
