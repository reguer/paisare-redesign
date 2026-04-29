import { defineField, defineType } from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'Pregunta frecuente (FAQ)',
  type: 'document',
  fields: [
    defineField({
      name: 'pregunta',
      title: 'Pregunta',
      type: 'string',
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'respuesta',
      title: 'Respuesta',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'visible',
      title: 'Visible en el sitio',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'General',        value: 'general' },
          { title: 'Proyectos',      value: 'proyectos' },
          { title: 'Tienda',         value: 'tienda' },
          { title: 'Mantenimiento',  value: 'mantenimiento' },
        ],
      },
    }),
  ],
  orderings: [
    { title: 'Orden de aparición', name: 'ordenAsc', by: [{ field: 'orden', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'pregunta', subtitle: 'categoria' },
  },
})
