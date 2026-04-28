# Estrategia de conversión
**Agente:** UX & Conversion Strategist  
**Fecha:** 2026-04-27  
**Epic/Story:** E4, E5, E10, E11

---

## Objetivos de conversión por tipo de visitante

| Tipo de visitante | Objetivo principal | CTA primario | CTA secundario |
|---|---|---|---|
| Cliente buscando proyecto | Solicitar cotización | WhatsApp "Cotizar proyecto" | Formulario de proyecto |
| Cliente buscando mantenimiento | Solicitar servicio | WhatsApp "Hablar de mantenimiento" | Formulario de mantenimiento |
| Comprador de materiales | Explorar tienda / cotizar | "Ver tienda" | WhatsApp "Pedir materiales" |
| Visitante de portafolio | Inspirarse → cotizar algo similar | "Cotizar algo similar" | Ver caso de estudio |
| Lector de artículo | Profundizar → contactar | CTA en artículo según tema | WhatsApp relacionado |

---

## Jerarquía de CTAs

### Nivel 1 (alta prioridad — siempre visible)
- Botón flotante WhatsApp (`.float-wa`) — presente en todas las páginas
- Barra sticky móvil: WhatsApp / Llamar / Tienda / Cotizar (Fase 2)

### Nivel 2 (contextual — por sección)
- Hero: "Cotizar proyecto" (WA) + "Ver materiales" (→ tienda)
- Servicios: "Hablar sobre [servicio]" por card
- Portafolio: "Cotizar algo similar" + "Ver materiales usados"
- Tienda: "Cotizar por WhatsApp" por producto, "Agregar al carrito" cuando aplica

### Nivel 3 (soft — lead nurturing)
- Artículos: CTA al final relacionado con el tema del artículo
- Casos de estudio: "¿Tienes un proyecto parecido?"
- Footer: links a WhatsApp y formulario

---

## Flujos principales de conversión

### Flujo A — Cotización de proyecto
```
Visitante → Hero (CTA cotizar proyecto)
          → WhatsApp con mensaje contextual
          O
          → Formulario de cotización de proyecto
          → Email/CRM → Seguimiento
```

### Flujo B — Compra o cotización de materiales
```
Visitante → Sección tienda en home o nav
          → Landing tienda → Categoría → Ficha de producto
          → Si precio definido: carrito → checkout (Fase 6)
          → Si cotizable: WhatsApp con producto preseleccionado
          O
          → Formulario de producto
```

### Flujo C — Mantenimiento
```
Visitante → Servicio Mantenimiento
          → Formulario de mantenimiento
          O
          → WhatsApp con mensaje de mantenimiento
```

---

## Mejoras de conversión por sección

### Hero
- Problema actual: CTA único (WhatsApp genérico). Visitante que quiere materiales no tiene ruta directa.
- Mejora: CTA doble. Primario = cotizar proyecto. Secundario = ver tienda/materiales.
- Validar que el H1 comunica qué hace Paisare en 5 segundos.

### Servicios
- Problema actual: 3 cards con descripciones genéricas. WhatsApp con mismo número sin contexto.
- Mejora: 6 cards específicas. Cada CTA lleva a WhatsApp con mensaje por servicio. Cada card puede redirigir a página de servicio.

### Portafolio
- Problema actual: Grid de imágenes sin acción posterior.
- Mejora: Cada item tiene botón "Cotizar algo similar". Vista de caso de estudio con materiales usados y servicio involucrado.

### Proceso
- Problema actual: 5 pasos lineales solo para contratar servicio.
- Mejora: Separar flujo de servicio (contratar proyecto) vs. flujo de producto (comprar/cotizar material).

### Formulario de contacto
- Problema actual: Un solo formulario genérico, sin backend.
- Mejora: 3 formularios diferenciados por intención. Backend real con confirmación por email.

---

## Métricas de conversión a medir (Epic 14)

| Evento | Trigger |
|---|---|
| `wa_click_hero` | Click WA en hero |
| `wa_click_service_{nombre}` | Click WA en card de servicio |
| `wa_click_portfolio` | Click "Cotizar algo similar" en portafolio |
| `wa_click_product_{sku}` | Click WA en ficha de producto |
| `wa_click_float` | Click en botón flotante |
| `phone_click` | Click en número de teléfono |
| `form_submit_project` | Envío formulario de proyecto |
| `form_submit_store` | Envío formulario de tienda |
| `form_submit_maintenance` | Envío formulario de mantenimiento |
| `store_view_category` | Ver categoría de tienda |
| `store_view_product` | Ver ficha de producto |
| `store_add_to_cart` | Agregar al carrito |
| `checkout_start` | Inicio de checkout |
| `purchase_complete` | Compra completada |
