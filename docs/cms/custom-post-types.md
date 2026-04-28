# Custom Post Types — Paisare
**Agente:** CMS / WordPress Migration Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E12-S12.2

---

## CPTs propuestos

### 1. `proyecto` — Portafolio

| Campo | Tipo | Descripción |
|---|---|---|
| Título | text | Nombre del proyecto |
| Imágenes | gallery | Fotos del proyecto |
| Tipo de servicio | taxonomy | Paisajismo / Construcción / Riego / Mantenimiento / Lagos |
| Cliente | text | Nombre o descripción del cliente |
| Ubicación | text | Ciudad / colonia |
| Año | number | Año de ejecución |
| Área | number | m² del proyecto |
| Descripción | wysiwyg | Texto libre del caso de estudio |
| Problema / reto | textarea | Descripción del problema inicial |
| Solución | textarea | Cómo se resolvió |
| Materiales usados | relationship | Relación con productos de WooCommerce |
| Servicios relacionados | relationship | Relación con CPT `servicio` |
| CTA WhatsApp | text | Mensaje contextual para WA |
| Slug | auto | `/portafolio/{slug}` |

---

### 2. `servicio` — Servicios de Paisare

| Campo | Tipo | Descripción |
|---|---|---|
| Título | text | Nombre del servicio |
| Imagen principal | image | Hero de la página de servicio |
| Descripción corta | textarea | Para listados y cards |
| Descripción larga | wysiwyg | Contenido de la página |
| Icono | image/svg | Ícono del servicio para cards |
| FAQs | repeater | Preguntas frecuentes |
| Proyectos relacionados | relationship | Relación con CPT `proyecto` |
| Productos relacionados | relationship | Relación con WooCommerce products |
| CTA principal | text + url | Texto y destino |
| CTA WhatsApp | text | Mensaje contextual para WA |
| Orden en menú | number | Para ordenar en listado |
| Slug | auto | `/servicios/{slug}` |

**Servicios iniciales:**
1. paisajismo-y-diseno-de-jardines
2. proyecto-ejecutivo-y-construccion-exterior
3. sistemas-de-riego
4. mantenimiento-de-areas-verdes
5. lagos-estanques-y-albercas-naturales

---

### 3. `testimonio` — Testimonios

| Campo | Tipo | Descripción |
|---|---|---|
| Nombre del cliente | text | |
| Empresa / propiedad | text | Opcional |
| Texto del testimonio | textarea | |
| Calificación | number (1-5) | Opcional |
| Foto del cliente | image | Opcional |
| Proyecto relacionado | relationship | |
| Activo | boolean | Mostrar o no en el sitio |

---

### 4. `faq` — Preguntas frecuentes

| Campo | Tipo | Descripción |
|---|---|---|
| Pregunta | text | Texto de la pregunta |
| Respuesta | wysiwyg | Texto de la respuesta |
| Categoría | taxonomy | Servicios / Tienda / General / Riego / etc. |
| Orden | number | Orden de aparición |

---

## Lo que NO necesita CPT

| Contenido | Solución |
|---|---|
| Posts / artículos | Post type nativo de WordPress |
| Páginas | Page type nativo de WordPress |
| Productos | WooCommerce (CPT `product` incluido) |
| Categorías de producto | Taxonomía nativa de WooCommerce |
| Comentarios | Sistema nativo de WordPress |
| Usuarios | Sistema nativo de WordPress |

---

## Taxonomías personalizadas

| Taxonomía | Aplica a | Términos iniciales |
|---|---|---|
| `tipo_servicio` | `proyecto`, `servicio` | Paisajismo / Construcción / Riego / Mantenimiento / Lagos |
| `tipo_propiedad` | `proyecto` | Residencial / Comercial / Industrial / Condominio |
| `faq_categoria` | `faq` | Servicios / Tienda / General / Riego |
