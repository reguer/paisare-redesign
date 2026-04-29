import { defineField, defineType } from 'sanity'

export const producto = defineType({
  name: 'producto',
  title: 'Producto (tienda)',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'nombre', maxLength: 96 },
      validation: Rule => Rule.required(),
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
      description: 'La primera imagen es la principal',
    }),
    defineField({
      name: 'precio',
      title: 'Precio (MXN, IVA incluido)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'rangoPrecio',
      title: '¿Precio es un rango?',
      type: 'boolean',
      initialValue: false,
      description: 'Si es true, muestra "Desde $X" y activa el campo Precio hasta',
    }),
    defineField({
      name: 'precioHasta',
      title: 'Precio hasta (MXN)',
      type: 'number',
      hidden: ({ document }) => !document?.rangoPrecio,
    }),
    defineField({
      name: 'categoriaProducto',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Plantas',     value: 'plantas' },
          { title: 'Sustratos',   value: 'sustratos' },
          { title: 'Riego',       value: 'riego' },
          { title: 'Macetas',     value: 'macetas' },
          { title: 'Materiales',  value: 'materiales' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'disponible',
      title: 'Disponible en tienda',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sku',
      title: 'SKU (código interno)',
      type: 'string',
    }),
    defineField({
      name: 'peso',
      title: 'Peso (kg)',
      type: 'number',
      description: 'Para cálculo de envío',
    }),
  ],
  preview: {
    select: { title: 'nombre', media: 'imagenes.0', subtitle: 'categoriaProducto' },
  },
})
