import { defineField, defineType } from 'sanity'

export const servicio = defineType({
  name: 'servicio',
  title: 'Servicio',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'nombre', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icono',
      title: 'Icono',
      type: 'string',
      description: 'Nombre del icono SVG en assets/icons/ (ej: "paisajismo")',
    }),
    defineField({
      name: 'descripcionCorta',
      title: 'Descripción corta',
      type: 'string',
      validation: Rule => Rule.required().max(200),
      description: 'Usada en las cards del Home. Máx 200 caracteres.',
    }),
    defineField({
      name: 'descripcionLarga',
      title: 'Descripción completa',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imagenes',
      title: 'Imágenes',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          defineField({ name: 'alt', type: 'string', title: 'Texto alternativo', validation: Rule => Rule.required() }),
        ],
      }],
    }),
    defineField({
      name: 'proyectosRelacionados',
      title: 'Proyectos relacionados',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'proyecto' }] }],
      validation: Rule => Rule.max(6),
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Controla el orden en el hub de servicios',
    }),
  ],
  preview: {
    select: { title: 'nombre', media: 'imagenes.0', subtitle: 'descripcionCorta' },
  },
})
