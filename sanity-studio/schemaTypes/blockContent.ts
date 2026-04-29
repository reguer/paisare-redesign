import { defineArrayMember, defineField, defineType } from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Contenido de texto enriquecido',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Encabezado 2', value: 'h2' },
        { title: 'Encabezado 3', value: 'h3' },
        { title: 'Encabezado 4', value: 'h4' },
      ],
      lists: [
        { title: 'Viñetas', value: 'bullet' },
        { title: 'Numerada', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Negrita', value: 'strong' },
          { title: 'Cursiva', value: 'em' },
        ],
        annotations: [
          defineArrayMember({
            type: 'object',
            name: 'link',
            title: 'Enlace',
            fields: [
              defineField({
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: Rule =>
                  Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
              }),
              defineField({
                name: 'blank',
                type: 'boolean',
                title: 'Abrir en nueva pestaña',
                initialValue: false,
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Texto alternativo', validation: Rule => Rule.required() }),
        defineField({ name: 'caption', type: 'string', title: 'Pie de foto' }),
      ],
    }),
  ],
})
