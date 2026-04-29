import { defineField, defineType } from 'sanity'

export const proyecto = defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categorias',
      title: 'Categorías',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Paisajismo',    value: 'paisajismo' },
          { title: 'Construcción',  value: 'construccion' },
          { title: 'Riego',         value: 'riego' },
          { title: 'Mantenimiento', value: 'mantenimiento' },
          { title: 'Lagos',         value: 'lagos' },
          { title: 'Tienda',        value: 'tienda' },
        ],
      },
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
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
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'servicioRelacionado',
      title: 'Servicio relacionado',
      type: 'reference',
      to: [{ type: 'servicio' }],
    }),
    defineField({
      name: 'destacado',
      title: 'Destacado en Home',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Número para ordenar manualmente (menor = primero)',
    }),
    defineField({
      name: 'cliente',
      title: 'Cliente (interno)',
      type: 'string',
      description: 'No se muestra en el sitio por defecto',
    }),
    defineField({
      name: 'fechaFinalizacion',
      title: 'Fecha de finalización',
      type: 'date',
    }),
  ],
  preview: {
    select: { title: 'titulo', media: 'imagenes.0', subtitle: 'categorias.0' },
  },
})
