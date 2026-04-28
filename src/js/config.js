/* Paisare — Configuración central
 * Único lugar para cambiar número de WhatsApp, email, teléfono y horario.
 * Actualizar aquí afecta todos los botones y links del sitio automáticamente.
 */
const PAISARE_CONFIG = {
  whatsapp: {
    number: '524427730857',  // Formato: 52 + código de área + número (sin +, sin espacios)
    display: '+52 442 773 0857',
    messages: {
      hero:            'Hola, me interesa conocer más sobre los servicios de paisajismo de Paisare.',
      svcPaisajismo:   'Hola, me gustaría cotizar un proyecto de paisajismo o diseño de jardín.',
      svcArquitectura: 'Hola, me interesa un proyecto de construcción exterior o arquitectura de jardín.',
      svcRiego:        'Hola, necesito un sistema de riego para mi propiedad. ¿Pueden ayudarme?',
      svcMtto:         'Hola, me interesa un plan de mantenimiento para mis áreas verdes.',
      svcLagos:        'Hola, me interesa cotizar un lago, estanque o alberca natural.',
      portafolio:      'Hola, vi un proyecto en su portafolio y me gustaría cotizar algo similar.',
      proceso:         'Hola, me gustaría iniciar una consulta para mi proyecto de paisajismo.',
      tienda:          'Hola, necesito asesoría para elegir materiales de jardín.',
      contacto:        'Hola, quisiera cotizar un proyecto con Paisare.',
      flotante:        'Hola Paisare, me interesa cotizar un proyecto.',
      exito:           'Hola, acabo de enviar un mensaje por el formulario y quisiera dar seguimiento.',
    }
  },
  contact: {
    email:    'contacto@paisare.com',
    phone:    '4422155474',
    phoneDisplay: '+52 442 215 5474',
    address:  'Querétaro, México',
    hours:    'Lunes a viernes 8:30–18:00 hrs · Sábados con cita previa',
  }
};

/* Inicializa todos los links de WhatsApp con el número y mensaje correctos */
function initWhatsAppLinks() {
  const n = PAISARE_CONFIG.whatsapp.number;
  const m = PAISARE_CONFIG.whatsapp.messages;
  const encode = (txt) => encodeURIComponent(txt);

  const links = {
    'hero-wa-btn':      `https://wa.me/${n}?text=${encode(m.hero)}`,
    'svc-arq-wa':       `https://wa.me/${n}?text=${encode(m.svcArquitectura)}`,
    'svc-pais-wa':      `https://wa.me/${n}?text=${encode(m.svcPaisajismo)}`,
    'svc-riego-wa':     `https://wa.me/${n}?text=${encode(m.svcRiego)}`,
    'svc-mtto-wa':      `https://wa.me/${n}?text=${encode(m.svcMtto)}`,
    'svc-lagos-wa':     `https://wa.me/${n}?text=${encode(m.svcLagos)}`,
    'pf-wa-btn':        `https://wa.me/${n}?text=${encode(m.portafolio)}`,
    'proc-wa-btn':      `https://wa.me/${n}?text=${encode(m.proceso)}`,
    'contact-wa-big':   `https://wa.me/${n}?text=${encode(m.contacto)}`,
    'success-wa':       `https://wa.me/${n}?text=${encode(m.exito)}`,
    'float-wa':         `https://wa.me/${n}?text=${encode(m.flotante)}`,
    'footer-wa':        `https://wa.me/${n}`,
  };

  Object.entries(links).forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
}

document.addEventListener('DOMContentLoaded', initWhatsAppLinks);
