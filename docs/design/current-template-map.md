# Mapa de la plantilla actual
**Agente:** Template Mapper  
**Fecha:** 2026-04-27  
**Epic/Story:** E1-S1.2  
**Archivo fuente:** `Paisare Redesign.html`

---

## Resumen

La plantilla v1 es un archivo HTML monolítico con 13 secciones principales. Todo el CSS y JS están embebidos. El diseño es mobile-first con 3 breakpoints. El lenguaje del documento es `lang="es"`.

---

## Mapa de secciones

### 1. `<nav>` — Navegación principal

| Campo | Valor |
|---|---|
| Selector | `nav` (elemento), `.scrolled` (modificador) |
| Posición | Fixed, z-index alto |
| Estado | Conservar — ampliar con más items |
| Comportamiento | Cambia a fondo verde oscuro al hacer scroll (>60px) |
| Links actuales | Servicios, Portafolio, Cómo contratarnos, Artículos, WhatsApp |
| Links propuestos | + Tienda, + Nosotros, + Contacto, + CTA "Cotizar" |
| Hardcoded | Número de WhatsApp en botón `.nav-wa` |
| Riesgo | R01 (WA placeholder) |

---

### 2. `#mobile-nav` — Menú móvil

| Campo | Valor |
|---|---|
| Selector | `#mobile-nav`, `.mobile-nav`, `.open` |
| Tipo | Overlay full-screen (fondo oscuro) |
| Estado | Conservar — ampliar con Tienda, Nosotros, Contacto |
| Botón apertura | `.hamburger` (≥700px oculto, <700px visible) |
| Botón cierre | `#close-nav` (texto "✕") |
| Riesgo | Ninguno crítico |

---

### 3. `#hero` — Hero / banner principal

| Campo | Valor |
|---|---|
| Selector | `#hero`, `.hero-slides`, `.hero-slide`, `.hero-dots` |
| Tipo | Slider de 4 imágenes con auto-rotate (5s) y dots |
| H1 | "Recuperando el contacto con la naturaleza" |
| Eyebrow | "Paisajismo · Arquitectura · Riego · Querétaro" |
| Subtítulo | Texto secundario sobre experiencia y proyectos |
| CTAs | `.btn-wa` (WhatsApp) y link a `#portafolio` |
| Imágenes | 4 `background-image` inline desde `paisare.com` (3x `http://`, 1x `https://`) |
| Hardcoded | Número WA en `.btn-wa`, imágenes remotas |
| Estado | Conservar slider — reforzar copy, validar imágenes, agregar CTA tienda |
| Riesgo | R01, R02, R08 |

**Copy de H1 actual:** genérico, emocional. Debe mantener espíritu pero agregar claridad comercial (servicio + tienda).  
**Nota:** El slider puede afectar CLS/LCP. Evaluar en Fase 1 si conviene o si se optimiza.

---

### 4. `#servicios` — Servicios

| Campo | Valor |
|---|---|
| Selector | `#servicios`, `.services-grid`, `.svc-card` |
| Tipo | Grid de 3 cards con imagen de fondo, descripción y CTA |
| Cards actuales | Arquitectura y Paisajismo, Diseño Jardín y Riego, Parques / Casas / Industrias |
| CTA por card | Botón WhatsApp con mensaje por servicio |
| Imágenes | Background-image inline desde `paisare.com` |
| Estado | Ampliar a 6 cards en Fase 2 |
| Propuesta | Paisajismo, Construcción exterior, Riego, Mantenimiento, Lagos, Tienda |
| Hardcoded | Número WA, textos descriptivos, imágenes |
| Riesgo | R01, R02 |

---

### 5. `#stats` — Estadísticas / métricas

| Campo | Valor |
|---|---|
| Selector | `#stats`, `.stat-n`, `.stat-plus`, `.stat-lbl` |
| Tipo | 4 contadores animados (JS IntersectionObserver) |
| Datos actuales | 27,060 plantas · 226 proyectos · 163 clientes · 1,095 cafés |
| Animación | Cuenta desde 0 hasta target en 2,000ms con `toLocaleString('es-MX')` |
| Estado | Conservar funcionalidad — **validar datos con cliente antes de publicar** |
| Riesgo | R09 — métricas no verificadas |

**Nota:** "Tazas de café" es un dato de marca que puede mantenerse, pero no como métrica comercial principal. Pendiente validación (P3).

---

### 6. `#portafolio` — Portafolio

| Campo | Valor |
|---|---|
| Selector | `#portafolio`, `.pf-grid`, `.pf-item`, `.pf-filters`, `.pf-btn` |
| Tipo | Grid filtrable por categoría (JS toggle de clases) |
| Filtros actuales | Todos, Paisajismo, Arquitectura, Riego |
| Items | 6 proyectos con imagen, nombre, categoría, overlay |
| Imágenes | `<img>` con `alt`, `loading="lazy"` — desde `paisare.com` |
| Estado | Conservar — ampliar categorías, mejorar cards en Fase 4 |
| Propuesta | Agregar Case Study CTA, "Cotizar algo similar", "Ver materiales usados" |
| Riesgo | R02 (imágenes remotas), R14 (sin verificación de permisos de imágenes) |

---

### 7. `#proceso` — Proceso de contratación

| Campo | Valor |
|---|---|
| Selector | `#proceso`, `.process-grid`, `.proc-step`, `.proc-num` |
| Tipo | Grid de 5 pasos numerados |
| Pasos | 01 Consulta → 02 Diagnóstico → 03 Propuesta → 04 Proyecto → 05 Mantenimiento |
| Estado | Conservar base — dividir en 2 flujos en Fase 2 |
| Propuesta | Flujo A: contratar proyecto/servicio · Flujo B: comprar material/kit |
| Hardcoded | Textos descriptivos de cada paso |

---

### 8. `#articulos` — Blog / artículos

| Campo | Valor |
|---|---|
| Selector | `#articulos`, `.blog-grid`, `.art-card` |
| Tipo | Grid de 3 cards de artículo |
| Contenido | Imagen (background-image), categoría, título, extracto, fecha |
| Links | Todos apuntan a `https://www.paisare.com/blog-2/` (genérico) |
| Estado | Conservar estructura — conectar a posts reales de WordPress en Fase 5 |
| Riesgo | R11 (contenido placeholder), R02 (imágenes remotas) |

**Importante:** No agregar artículos inventados. Los actuales son contenido de demostración. En producción deben venir de WordPress.

---

### 9. `#clientes` — Logos de clientes

| Campo | Valor |
|---|---|
| Selector | `#clientes`, `.clients-logos`, `.client-logo` |
| Tipo | Grid de logos con filtro `grayscale(1)` |
| Items | 7 logos con `alt` y `loading="lazy"` |
| Imágenes | `<img src="...paisare.com/wp-content/...">` |
| Estado | Conservar — **validar permisos de uso de cada logo** |
| Riesgo | R10 (logos sin autorización verificada), R02 (imágenes remotas) |

---

### 10. `#contacto` — Contacto

| Campo | Valor |
|---|---|
| Selector | `#contacto`, `.contact-grid`, `.contact-form` |
| Tipo | Dos columnas: info de contacto + formulario |
| Info | Ubicación: Santiago de Querétaro · Email: hola@paisare.com · Horario: L-V 9–18h, S con cita · WhatsApp |
| Formulario | Nombre, teléfono, email, servicio (dropdown), mensaje, checkbox privacidad |
| Honeypot | `#website` (hidden, `display: none !important`) |
| Validación | Solo client-side: email regex + campos requeridos + honeypot |
| Backend | **Ninguno** — simula envío ocultando el form |
| Estado | Conservar — **ampliar a 3 formularios en Fase 3/5** y conectar backend |
| Riesgo | R03 (sin backend), R05 (datos placeholder) |

**Los 3 formularios propuestos:**
1. Cotización de proyecto (nombre, teléfono, correo, tipo, ubicación, m², tipo de propiedad, fotos, comentarios)
2. Tienda/producto (nombre, teléfono, correo, producto, cantidad, unidad, ¿instalación?, comentarios)
3. Mantenimiento (tipo de propiedad, área, frecuencia, ubicación, fotos, comentarios)

---

### 11. `<footer>` — Pie de página

| Campo | Valor |
|---|---|
| Selector | `footer`, `.footer-grid`, `.footer-col`, `.footer-bottom` |
| Tipo | Grid de 4 columnas: marca · servicios · empresa · contacto |
| Social | Facebook, Instagram, Pinterest |
| Copyright | "© 2026 Paisare" |
| Legal | Link "Aviso de privacidad" (href vacío) |
| Estado | Conservar — actualizar datos y agregar links legales reales en Fase 5 |
| Hardcoded | Número WA, email, dirección, año copyright |

---

### 12. `#float-wa` — Botón flotante de WhatsApp

| Campo | Valor |
|---|---|
| Selector | `#float-wa`, `.float-wa` |
| Tipo | Fixed bottom-right, animación `wa-pulse` |
| Tooltip | "¿Hablamos de tu proyecto?" |
| Link | `wa.me/524420000000` |
| Estado | Conservar — centralizar número en `config.js` (Lote 1A) |
| Riesgo | R01 |

---

### 13. `#tweaks-panel` — Panel de tweaks (Claude Design)

| Campo | Valor |
|---|---|
| Selector | `#tweaks-panel`, `.tweaks-panel` |
| Propósito | Panel de edición en tiempo real para Claude Design (colores, fuente, WA) |
| Activación | `postMessage` desde parent frame con `__activate_edit_mode` |
| Controles | Color accent (--mint), color primario (--forest), selector de fuente, campo WA |
| Estado | **REMOVER del HTML de producción** — documentar en `docs/frontend/tweaks-panel-reference.md` |
| Riesgo | R06 |

---

## Breakpoints CSS

| Punto | Ancho | Cambios |
|---|---|---|
| Escritorio | > 900px | Layout completo, nav con todos los links |
| Tablet | ≤ 900px | Grid de proceso a 2 cols, contacto a 1 col, footer a 2 cols |
| Móvil grande | ≤ 700px | Nav oculto, hamburger visible, footer a 1 col |
| Móvil pequeño | ≤ 500px | Portfolio a 1 col |

**Nota:** No hay breakpoint dedicado para tablets en landscape ni para 1280px. Agregar en Fase 1.

---

## Estado general de cada sección

| Sección | Estado recomendado |
|---|---|
| nav | Conservar, ampliar links y CTA |
| mobile-nav | Conservar, ampliar, agregar sticky bar |
| hero | Conservar slider, mejorar copy, validar imágenes |
| servicios | Ampliar a 6 cards |
| stats | Conservar, validar datos |
| portafolio | Conservar, ampliar, mejorar cards |
| proceso | Dividir en 2 flujos |
| articulos | Conservar, conectar a WP real |
| clientes | Conservar, validar permisos |
| contacto | Ampliar a 3 formularios, conectar backend |
| footer | Conservar, actualizar datos |
| float-wa | Conservar, centralizar número |
| tweaks-panel | Remover de prod, documentar |
