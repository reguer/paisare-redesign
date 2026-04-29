export const SITE = {
  name: 'Paisare',
  tagline: 'Paisajismo y jardines en Querétaro',
  url: 'https://nuevo.paisare.com',
  email: 'contacto@paisare.com',
  phone: {
    display: '+52 442 215 5474',
    tel: '4422155474',
  },
  whatsapp: {
    display: '+52 442 773 0857',
    number: '524427730857',
    defaultMessage: 'Hola, me gustaría cotizar un proyecto de paisajismo.',
  },
  address: {
    street: 'Hacienda el Salitre 410',
    colony: 'Jardines de la Hacienda',
    city: 'Querétaro',
    state: 'Qro.',
    country: 'MX',
    full: 'Hacienda el Salitre 410, Jardines de la Hacienda, Querétaro, Qro., MX',
  },
  hours: {
    weekdays: 'L–V 8:30–18:00',
    saturday: 'Sábados con cita previa',
  },
  social: {
    facebook: 'https://facebook.com/paisare',
    instagram: 'https://instagram.com/paisaremx',
    linkedin: 'https://linkedin.com/company/89912704',
    pinterest: 'https://pinterest.com/paisaremx',
    googleMaps: 'https://maps.app.goo.gl/2siHuQhVPnQBU9tG8',
  },
} as const

export type Site = typeof SITE
