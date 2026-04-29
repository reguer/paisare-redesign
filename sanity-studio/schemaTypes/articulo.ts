import { defineField, defineType } from 'sanity'

export const articulo = defineType({
  name: 'articulo',
  title: 'Artículo del blog',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: Rule => Rule.required(),
      description: 'Preservar el slug original de WordPress al migrar',
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300),
      description: 'Usado en SEO description y cards. Máx 300 caracteres.',
    }),
    defineField({
      name: 'cuerpo',
      title: 'Cuerpo del artículo',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imagenDestacada',
      title: 'Imagen destacada',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Texto alternativo', validation: Rule => Rule.required() }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categorias',
      title: 'Categorías',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de publicación',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'string',
      initialValue: 'Equipo Paisare',
    }),
    defineField({
      name: 'publicado',
      title: 'Publicado',
      type: 'boolean',
      initialValue: false,
      description: 'Solo los artículos publicados aparecen en el sitio',
    }),
  ],
  orderings: [
    { title: 'Fecha (más reciente)', name: 'fechaDesc', by: [{ field: 'fechaPublicacion', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'titulo', media: 'imagenDestacada', subtitle: 'fechaPublicacion' },
  },
})
