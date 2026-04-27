# Mapa de flujos de WhatsApp
**Agente:** UX & Conversion Strategist  
**Fecha:** 2026-04-27  
**Epic/Story:** E11-S11.1

---

## Principio de diseño

Cada botón de WhatsApp debe enviar un mensaje pre-cargado que sea:
1. Contextual (indica desde dónde escribe el usuario)
2. Específico (menciona el servicio o producto)
3. Corto (no más de 2 líneas visibles en WhatsApp)
4. Accionable (facilita respuesta del equipo Paisare)

El número de WhatsApp **no debe estar hardcodeado**. Debe leerse desde `config.js` para poder cambiarse en un solo lugar.

---

## Número de WhatsApp

| Campo | Valor actual | Estado |
|---|---|---|
| Número en plantilla | `524420000000` | PLACEHOLDER — pendiente P1 |
| Formato requerido | `52` + código de área + número (sin guiones ni espacios) | — |
| Archivo de configuración | `src/js/config.js` (crear en Lote 1A) | — |

---

## Mensajes por contexto

Formato de URL: `https://wa.me/{NUMERO}?text={MENSAJE_ENCODED}`

| Contexto | ID de botón | Mensaje pre-cargado |
|---|---|---|
| Hero (general) | `hero-wa-btn` | Hola, me interesa conocer más sobre sus servicios de paisajismo. ¿Podríamos hablar? |
| Servicio: Paisajismo | `svc-pais-wa` | Hola, me gustaría cotizar un proyecto de paisajismo o diseño de jardín. |
| Servicio: Construcción exterior | `svc-arq-wa` | Hola, me interesa un proyecto de construcción exterior o arquitectura de jardín. |
| Servicio: Riego | `svc-riego-wa` | Hola, necesito un sistema de riego para mi propiedad. ¿Pueden ayudarme? |
| Servicio: Mantenimiento | `svc-mtto-wa` | Hola, me interesa un plan de mantenimiento para mis áreas verdes. |
| Servicio: Lagos y albercas | `svc-lagos-wa` | Hola, me interesa cotizar un lago, estanque o alberca natural. |
| Portafolio (CTA similar) | `pf-wa-btn` | Hola, vi un proyecto en su portafolio y me gustaría cotizar algo similar. |
| Producto (genérico) | `product-wa-btn` | Hola, me interesa uno de sus productos. ¿Pueden darme información? |
| Producto (específico) | `product-wa-{sku}` | Hola, me interesa el producto: {nombre del producto}. ¿Tienen disponibilidad? |
| Tienda (asesoría) | `store-advice-wa` | Hola, necesito asesoría para elegir materiales de jardín. |
| Proceso (CTA) | `proc-wa-btn` | Hola, me gustaría iniciar una consulta para mi proyecto. |
| Contacto (info) | `contact-wa-big` | Hola, quisiera obtener información sobre los servicios de Paisare. |
| Flotante (global) | `float-wa` | Hola, me gustaría obtener información sobre sus servicios o productos. |
| Éxito formulario | `success-wa` | Hola, acabo de enviar un mensaje por el formulario y quiero dar seguimiento. |

---

## Implementación técnica

### Estructura de config.js (Lote 1A)

```js
const PAISARE_CONFIG = {
  whatsapp: {
    number: 'TODO_PENDIENTE_P1',  // Formato: 52XXXXXXXXXX sin +
    messages: {
      hero:        'Hola, me interesa conocer más sobre sus servicios de paisajismo.',
      svcPaisajismo: 'Hola, me gustaría cotizar un proyecto de paisajismo o diseño de jardín.',
      svcArquitectura: 'Hola, me interesa un proyecto de construcción exterior.',
      svcRiego:    'Hola, necesito un sistema de riego para mi propiedad.',
      svcMtto:     'Hola, me interesa un plan de mantenimiento para mis áreas verdes.',
      svcLagos:    'Hola, me interesa cotizar un lago, estanque o alberca natural.',
      portafolio:  'Hola, vi un proyecto en su portafolio y me gustaría cotizar algo similar.',
      tienda:      'Hola, necesito asesoría para elegir materiales de jardín.',
      flotante:    'Hola, me gustaría obtener información sobre sus servicios o productos.',
    }
  },
  contact: {
    email: 'TODO_PENDIENTE_P2',   // hola@paisare.com — confirmar
    phone: 'TODO_PENDIENTE_P5',   // Teléfono de oficina — confirmar
    hours: 'TODO_PENDIENTE_P5',   // Horario — confirmar
  }
};
```

### Función de tracking (Epic 14)

Cada click en WA debe disparar evento GA4:
```js
function openWhatsApp(messageKey, extraContext = '') {
  const msg = encodeURIComponent(PAISARE_CONFIG.whatsapp.messages[messageKey] + extraContext);
  const url = `https://wa.me/${PAISARE_CONFIG.whatsapp.number}?text=${msg}`;
  // GA4 event
  gtag('event', 'wa_click', { event_category: 'whatsapp', event_label: messageKey });
  window.open(url, '_blank');
}
```

---

## Reglas de diseño para botones WhatsApp

1. Siempre usar fondo `var(--wa)` (#25D366) para botones WhatsApp primarios
2. Incluir ícono SVG de WhatsApp antes del texto
3. Texto en español, sin jerga
4. No más de 5 palabras en el botón
5. En mobile, botones WA deben ser fácilmente "tocables" (min 44px de alto)
6. El botón flotante debe tener `aria-label="Contactar por WhatsApp"`
