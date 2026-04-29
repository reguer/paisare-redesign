import { defineField, defineType } from 'sanity'

// Este tipo es creado automáticamente por el webhook de Mercado Pago (Story 7.3).
// No se crea manualmente desde Studio — solo se consulta.
export const pedido = defineType({
  name: 'pedido',
  title: 'Pedido',
  type: 'document',
  fields: [
    defineField({
      name: 'productoRef',
      title: 'Producto',
      type: 'reference',
      to: [{ type: 'producto' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'nombreProducto',
      title: 'Nombre del producto (snapshot)',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Copia del nombre al momento de la compra',
    }),
    defineField({
      name: 'cantidad',
      title: 'Cantidad',
      type: 'number',
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'montoTotal',
      title: 'Monto total (MXN)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'mpPaymentId',
      title: 'ID de pago (Mercado Pago)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'estado',
      title: 'Estado del pedido',
      type: 'string',
      options: {
        list: [
          { title: 'Pendiente',   value: 'pendiente' },
          { title: 'Pagado',      value: 'pagado' },
          { title: 'Enviado',     value: 'enviado' },
          { title: 'Cancelado',   value: 'cancelado' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
      initialValue: 'pendiente',
    }),
    defineField({
      name: 'emailComprador',
      title: 'Email del comprador',
      type: 'string',
    }),
    defineField({
      name: 'fechaPago',
      title: 'Fecha de pago',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'notasEnvio',
      title: 'Notas de envío (interno)',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'nombreProducto', subtitle: 'estado' },
  },
})
