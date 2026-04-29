import { defineArrayMember, defineField, defineType } from 'sanity'

export const paginaCliente = defineType({
  name: 'paginaCliente',
  title: 'Página de cliente',
  type: 'document',
  fields: [
    defineField({
      name: 'nombreProyecto',
      title: 'Nombre del proyecto',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL: /cliente/[slug])',
      type: 'slug',
      options: { source: 'nombreProyecto', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'emailCliente',
      title: 'Email del cliente',
      type: 'string',
      validation: Rule =>
        Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { name: 'email', invert: false }),
      description: 'Email usado en la política de Cloudflare Access para dar acceso',
    }),
    defineField({
      name: 'estado',
      title: 'Estado del proyecto',
      type: 'string',
      options: {
        list: [
          { title: 'En proceso',   value: 'en_proceso' },
          { title: 'En revisión',  value: 'en_revision' },
          { title: 'Entregado',    value: 'entregado' },
          { title: 'Pausado',      value: 'pausado' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
      initialValue: 'en_proceso',
    }),
    defineField({
      name: 'actualizaciones',
      title: 'Actualizaciones del proyecto',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'fecha',   type: 'date',   title: 'Fecha',       validation: Rule => Rule.required() }),
            defineField({ name: 'texto',   type: 'text',   title: 'Descripción', validation: Rule => Rule.required(), rows: 4 }),
            defineField({
              name: 'imagenes',
              title: 'Fotos del avance',
              type: 'array',
              of: [{
                type: 'image',
                options: { hotspot: true },
                fields: [defineField({ name: 'alt', type: 'string', title: 'Descripción de la imagen' })],
              }],
            }),
          ],
          preview: {
            select: { title: 'fecha', subtitle: 'texto' },
          },
        }),
      ],
    }),
    defineField({
      name: 'documentos',
      title: 'Documentos descargables',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'nombre',  type: 'string', title: 'Nombre del archivo', validation: Rule => Rule.required() }),
            defineField({ name: 'archivo', type: 'file',   title: 'Archivo',            validation: Rule => Rule.required() }),
          ],
          preview: { select: { title: 'nombre' } },
        }),
      ],
    }),
    defineField({ name: 'encargado',            title: 'Encargado (Paisare)',        type: 'string' }),
    defineField({ name: 'fechaInicio',           title: 'Fecha de inicio',            type: 'date' }),
    defineField({ name: 'fechaEntregaEstimada',  title: 'Fecha de entrega estimada',  type: 'date' }),
  ],
  preview: {
    select: { title: 'nombreProyecto', subtitle: 'estado' },
  },
})
