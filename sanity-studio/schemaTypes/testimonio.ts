import { defineField, defineType } from 'sanity'

export const testimonio = defineType({
  name: 'testimonio',
  title: 'Testimonio',
  type: 'document',
  fields: [
    defineField({
      name: 'texto',
      title: 'Texto del testimonio',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(500),
    }),
    defineField({
      name: 'autor',
      title: 'Nombre del cliente',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'plataforma',
      title: 'Plataforma de origen',
      type: 'string',
      options: {
        list: [
          { title: 'Homify',    value: 'homify' },
          { title: 'Google',    value: 'google' },
          { title: 'Facebook',  value: 'facebook' },
          { title: 'Directo',   value: 'directo' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
    }),
    defineField({
      name: 'visible',
      title: 'Visible en el sitio',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'autor', subtitle: 'plataforma' },
  },
})
