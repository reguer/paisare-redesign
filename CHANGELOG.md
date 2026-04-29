# Changelog

Todos los cambios notables de este proyecto se documentan aqui.

## 2026-04-29 — Fase 2: diagnóstico CF Pages + valores de infra confirmados

**Rama:** `main` (fixes directos al workflow)  
**Tipo:** Fix de configuración

### Confirmado durante setup manual
- CF Account ID: `190a3cddbfacb79832920ed469ba60e3`
- Sanity Project ID: `qggf24bv`
- Build de Astro exitoso en CF Pages (output:static, 1 página en 1.11s)
- Error diagnosticado: "Deploy command" con Wrangler falla dentro del ambiente nativo de CF Pages
  (CF Pages ya hace el deploy automáticamente — el comando es redundante y causa auth error 10000)

### Fix aplicado
- `astro.config.mjs` → `output: 'static'`, removido adaptador `@astrojs/cloudflare` (se vuelve a agregar en Fase 5)
- `package.json` → removido `@astrojs/cloudflare` de dependencies
- `.github/workflows/deploy.yml` → `npm install` en lugar de `npm ci`

### Pendiente (pasos manuales — no ejecutados en esta sesión)
- Vaciar "Deploy command" en CF Pages dashboard + set "Build output directory" = `astro-site/dist`
- Crear CF API Token → agregar 4 secrets en GitHub
- 2 registros CNAME en websupport
- `npx sanity deploy` en `sanity-studio/`

---

## 2026-04-28 — Fase 2: Setup infraestructura Astro + Sanity + Cloudflare (PR #6)

**Rama:** `feat/fase-2-astro`  
**Type:** Feature — Epic 3, Stories 3.1–3.5

### Añadido — `astro-site/`
- `package.json` — Astro 5, @astrojs/cloudflare, @sanity/client
- `astro.config.mjs` — output hybrid, CF adapter (directory mode), path aliases
- `tsconfig.json` — strict mode, path aliases @lib @components @layouts @styles
- `wrangler.toml` — configuración Cloudflare Pages
- `.env.example` — template con todas las variables (Apéndice D)
- `src/lib/config.ts` — datos de contacto confirmados del cliente
- `src/lib/sanity.ts` — cliente tipado con `sanityFetch<T>()`, seguro sin credenciales
- `src/lib/queries.ts` — constantes GROQ para proyectos, artículos, servicios, FAQ, testimonios, productos, paginaCliente
- `src/layouts/BaseLayout.astro` — layout con OG, Schema JSON-LD, Nav, Footer
- `src/components/Nav.astro` — nav sticky responsive con hamburger nativo
- `src/components/Footer.astro` — footer completo con datos reales
- `src/pages/index.astro` — placeholder funcional con Schema LocalBusiness
- `src/styles/global.css` — variables de diseño, reset, utilidades

### Añadido — `sanity-studio/`
- `sanity.config.ts` — workspace config (projectId desde env)
- `schemaTypes/blockContent.ts` — Portable Text con links, imágenes y estilos
- `schemaTypes/proyecto.ts` — 11 campos, validaciones, 6 categorías
- `schemaTypes/articulo.ts` — 10 campos, publicado flag, orderings
- `schemaTypes/servicio.ts` — 9 campos, proyectos relacionados
- `schemaTypes/producto.ts` — 13 campos, rango de precio, hidden condicional
- `schemaTypes/paginaCliente.ts` — actualizaciones array, documentos descargables
- `schemaTypes/testimonio.ts` — 6 campos, plataformas, visible flag
- `schemaTypes/faqItem.ts` — 5 campos, orden, categorías
- `schemaTypes/pedido.ts` — creado por webhook MP, solo consulta
- `schemaTypes/index.ts` — exporta los 9 tipos

### Añadido — CI/CD e infraestructura
- `.github/workflows/deploy.yml` — build Astro → deploy CF Pages en push a main + preview por PR
- `docs/infra/cicd.md` — instrucciones completas de setup (secrets, env vars, CF dashboard)
- `docs/infra/dns-map.md` — mapa DNS Fases 2–7 y plan de flip en Fase 8

### Actualizado
- `docs/PENDING.md` — I1, I2, I3 confirmados; nota sobre CF Pages como failover de Umbrel

---

## 2026-04-28 — Merge PR #4 + Epics & Stories con apéndices técnicos completos

**Rama:** `docs/epics-detallados` (PR #5 abierto)  
**Tipo:** Documentación técnica

### Mergeado
- PR #4 (`feat/lote-2-home`) mergeado a `main` — incluye FAQ, portafolio interactivo, docs stack

### Añadido a `docs/epics/website-redesign-epics-stories.md`
- **Apéndice A — Schemas de Sanity** (campo por campo): `proyecto`, `articulo`, `servicio`, `producto`, `paginaCliente`, `testimonio`, `faqItem`, `pedido` — con tipos Sanity, tipos TypeScript, flags required y validaciones
- **Apéndice B — Inventario de componentes Astro**: todos los archivos `.astro` a crear con TypeScript interfaces de props; estructura completa de `src/pages/`, `src/components/`, `src/layouts/`
- **Apéndice C — Mapa de rutas**: tabla URL → tipo (Static/Dynamic SSG/SSR Worker) → fuente de datos → Schema.org → indexable
- **Apéndice D — Variables de entorno**: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_WEB3FORMS_KEY`, `SANITY_API_TOKEN`, `MP_ACCESS_TOKEN`, `MP_WEBHOOK_SECRET`, `CF_ACCESS_AUD` — con fuente y scope
- **Apéndice E — Estrategia de ramas git**: tabla fase → rama → PR esperado → criterio de merge → quién aprueba
- **Stories de Epics 3–7 mejoradas**: formato uniforme con Objetivo · Entregables (archivos concretos) · Criterios de aceptación (checklist testable) · Talla (S/M/L) · Rama · Bloqueantes

### Actualizado
- `RETOMAR.md` — estado post-merge PR #4, PR #5 como activo, prompt de sesión actualizado
- `CHANGELOG.md` — esta entrada

---

## 2026-04-28 — Decisión de stack: Astro + Sanity + Cloudflare + Mercado Pago (reescritura completa de docs)

**Rama:** `feat/lote-2-home`  
**Tipo:** Decisión de arquitectura + reescritura de documentación de planificación

### Decisión
Stack de producción confirmado: **Astro + Sanity + Cloudflare Pages/Workers/Access + Mercado Pago**.
WordPress descartado como plataforma destino. El sitio WordPress actual permanece vivo (zero-downtime) hasta Fase 8.

### Documentos reescritos desde cero
- `docs/DECISIONS.md` — 14 decisiones técnicas del proyecto, incluyendo:
  - D01: Stack Astro + Sanity + Cloudflare (supersede WordPress + WooCommerce)
  - D03: Cloudflare Pages como hosting + evaluación futura de Umbrel Pro (D03b)
  - D04: Zero-downtime migration — WordPress permanece vivo hasta aprobación
  - D05: Mercado Pago para la tienda (sin costo fijo, ~3.5% por transacción)
  - D06: Cloudflare Access para páginas privadas de cliente (magic link por email)
- `docs/epics/website-redesign-epics-stories.md` — 13 Epics reescritos para el stack real, 9 fases de implementación
- `docs/PENDING.md` — Pendientes reorganizados por categoría (infraestructura, contenido, tienda, cliente, analytics, futuro)
- `RETOMAR.md` — Reescrito con estado actual, mapa de ramas, bloqueantes activos y **prompt de sesión** para reanudar en cualquier conversación futura

### Qué NO cambió
- El prototipo HTML (`Paisare Redesign.html`) — sigue siendo la referencia visual para los componentes Astro
- Los assets en `src/img/` — se reutilizarán en Astro
- Las secciones de diseño en `docs/design/`, `docs/strategy/`, `docs/qa/` — siguen siendo válidas

---

## 2026-04-28 — Lote 2 inicial: FAQ, portafolio interactivo, carpetas de assets, decisiones de arquitectura

**Rama:** `feat/lote-2-home`  
**Epic/Story:** E5-S5.6 (FAQ), E7-S7.1 (portafolio interactivo), E16 (decisiones), E17 (fases)

### Creado

- `assets/logos/clientes/` — carpeta para logos nuevos del cliente (PNG/SVG fondo transparente)
- `assets/portfolio/general/` — carpeta para imágenes generales de apoyo (no de un proyecto específico)
- Sección `#faq` con 10 preguntas/respuestas autogeneradas sobre paisajismo y construcción
- Schema `FAQPage` JSON-LD en el `<head>` para SEO enriquecido
- Modal de detalle del portafolio: al hacer clic en un proyecto se abre panel con galería, descripción y CTA de WhatsApp

### Modificado en `Paisare Redesign.html`

- Portfolio: cada ítem tiene `data-id` y es interactivo (role="button", tabindex, aria-label)
- Portfolio: botón "Ver más proyectos →" que respeta el filtro activo (muestra 4 inicialmente, expande al clic)
- Portfolio: motor de datos JS `pfProjects` con nombre, categoría, descripción y array de imágenes por proyecto

### Modificado en `docs/`

- `docs/DECISIONS.md`: agregadas D09 (#stats eliminada), D10 (performance diferida), D11 (apertura a Astro+Sanity)
- `docs/epics/website-redesign-epics-stories.md`: Story 5.4/5.5 marcadas Completado, Story 5.6 marcada Completado borrador, Epic 17 tabla actualizada con estados reales y nota de secuencia (0.5 y 1 no bloquean Fase 2), Story 13.3 parcialmente completada

### Confirmado / aclarado

- `#stats` eliminada en Lote 1B — no existía en el HTML actual (D09)
- Fase 0.5 (baseline WP) y Fase 1 (modularización) no bloquean Fase 2 del prototipo
- Performance/accesibilidad se ejecuta al final, después de estructura + imágenes (D10)

---

## 2026-04-27 — Lote 1B (ampliado): Logo real, Nosotros, Testimonios y redes sociales

**Rama:** `feat/lote-1b-cleanup`  
**Epic/Story:** E2-S2.1 (Nosotros), E3-S3.1 (SEO/Schema), E5-S5.1 (brand assets)

### Creado

- `src/img/favicon.svg` — recreación SVG del ícono geométrico oficial de Paisare (hoja con patrón tejido, cuadrantes NW/SE en mint, NE/SW en forest, diamante central, alas)
- `src/img/logo-icon.svg` — mismo ícono como asset independiente para nav/footer

### Modificado en `Paisare Redesign.html`

**Brand / Logo:**
- Nav: logo texto reemplazado por ícono SVG + "PAISARE" con letter-spacing de marca
- Footer: mismo tratamiento — ícono + wordmark PAISA·RE con "RE" en mint
- CSS `.nav-logo` y `.footer-brand-name` actualizados para layout flex con imagen

**SEO / Head:**
- `og:image` actualizado: `SLIDER-ATTENUATA2-1.jpg` (Agave attenuata, foto real del portafolio WP)
- `og:image:alt` agregado
- Schema.org `sameAs` agregado con Facebook, Instagram, LinkedIn, Pinterest

**Sección `#nosotros` (nueva — entre #servicios y #portafolio):**
- Quiénes somos (texto confirmado por cliente)
- Misión: "Regresarle al hombre el derecho a la convivencia con el entorno natural..."
- Visión: "Ser referencia de arquitectura y paisajismo en Latinoamérica..."
- Datos clave: Fundación 2014 · Querétaro México · 360° servicio

**Sección `#testimonios` (nueva — entre #portafolio y #proceso):**
- 3 reseñas reales de Homify (Manola, María Fernanda Vergara, Ricardo Jiménez)
- Links a Google Maps, Facebook e Instagram para más reseñas
- Estructura preparada para agregar reseñas de Google/Facebook cuando se puedan extraer

**Nav y Mobile nav:**
- Nav desktop: añadido `#nosotros` · "Proceso" (antes "Cómo contratarnos")
- Mobile nav: añadidos `#nosotros` y `#testimonios`

**Footer social icons:**
- Agregados: LinkedIn (`/company/89912704/`) y Google Maps (con pin para dejar reseña)
- Mantenidos: Facebook, Instagram, Pinterest

**Footer links:**
- "Nosotros" apunta a `#nosotros` en vez del sitio WordPress

**Hero sub:**
- Removida referencia a métricas no reales (ya sin `#stats`)

---

## 2026-04-27 — Lote 1B (completo): Cleanup, favicon y metadatos SEO

**Rama:** `feat/lote-1b-cleanup`  
**Epic/Story:** E3-S3.1 (SEO técnico mínimo), E5-S5.0 (cleanup)

### Creado

- `src/img/favicon.svg` — favicon SVG placeholder (fondo forest, "P" en mint) hasta que el cliente entregue el definitivo

### Modificado en `Paisare Redesign.html`

- **`<meta name="description">`** — eliminada la referencia a métricas no reales ("+226 proyectos, 163 clientes")
- **Favicon** — `<link rel="icon" href="src/img/favicon.svg" type="image/svg+xml">` agregado al `<head>`
- **OpenGraph** — agregados: `og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:url`; `og:image` marcado como TODO (pendiente foto de portada aprobada)
- **Schema.org JSON-LD** — `LocalBusiness + LandscapeArchitect` con todos los campos confirmados: nombre, URL, teléfono, email, dirección completa, horario L–V 8:30–18:00 y sábados con cita previa
- **`#tweaks-panel`** — eliminado completamente: bloque CSS (14 líneas), bloque HTML (31 líneas), bloque JS (38 líneas incluyendo `updateWaLinks` y sus 4 listeners)

### Datos usados en Schema/OG (confirmados por cliente)

- Nombre: Paisare
- URL: https://www.paisare.com/
- Teléfono oficina: +52 442 215 5474
- WhatsApp: +52 442 773 0857
- Email: contacto@paisare.com
- Dirección: Hacienda el Salitre 410, Jardines de la Hacienda, Querétaro, Qro., México
- Horario: L–V 8:30–18:00 · Sábados con cita previa

---

## 2026-04-27 — Lote 1B (parcial): Eliminar sección #stats

**Rama:** `feat/lote-1b-cleanup`  
**Epic/Story:** E5-S5.0 (cleanup previo a Fase 2)

### Eliminado de `Paisare Redesign.html`

- Sección HTML `#stats` (contadores animados con métricas no reales)
- Bloque CSS `/* STATS */` (10 líneas: `#stats`, `.stats-inner`, `.stat-n`, `.stat-plus`, `.stat-lbl`)
- Bloque JS `// COUNTER ANIMATION` (20 líneas: `IntersectionObserver` + `setInterval` de contadores)

**Motivo:** Las métricas (27,060 plantas · 226 proyectos · 163 clientes · 1,095 cafés) no son datos reales. El cliente decidió eliminar la sección. Se puede agregar en Fase 2 una sección de diferenciadores o trust bar con contenido real.

---

## 2026-04-27 — Lote 1A: Centralizar configuración y corregir protocolos

**Rama:** `feat/lote-1a-config`  
**Epic/Story:** E1-S1.3, E11-S11.1

### Creado

- `src/js/config.js` — fuente única de verdad para WhatsApp, email, teléfono y horario
  - Número real: `524427730857` (+52 442 773 0857)
  - Email: `contacto@paisare.com`
  - Teléfono oficina: `4422155474` (+52 442 215 5474)
  - Función `initWhatsAppLinks()` que inicializa todos los botones WA en DOMContentLoaded

### Modificado en `Paisare Redesign.html`

- `<script src="src/js/config.js">` agregado al `<head>` (después de Google Fonts)
- **19 URLs** cambiadas de `http://www.paisare.com/` → `https://www.paisare.com/` (imágenes)
- **10+ links** de WhatsApp actualizados: `524420000000` → `524427730857`
- **2 instancias** de `hola@paisare.com` → `contacto@paisare.com`
- Bloque de teléfono (+52 442 215 5474 con `tel:` link) agregado en sección `#contacto`
- Link `tel:` del teléfono agregado en footer
- `id="footer-wa"` agregado al link de WhatsApp en footer (para `initWhatsAppLinks`)

### Modificado en `docs/PENDING.md`

- P1 → RESUELTO: WhatsApp `524427730857`
- P2 → RESUELTO: `contacto@paisare.com`
- P3 → RESUELTO (con decisión pendiente): métricas no son datos reales; propuesta de eliminar `#stats`
- P4 → RESUELTO (con acción pendiente): logos desactualizados; nuevos logos por recibir del cliente
- P5 → PARCIALMENTE RESUELTO: dirección confirmada para Schema.org (no para footer por seguridad), teléfono y horario confirmados

### Riesgos cerrados

| ID | Riesgo | Estado |
|---|---|---|
| R01 | WhatsApp placeholder `524420000000` | ✅ Cerrado |
| R05 | Datos de contacto no validados | ✅ Parcialmente cerrado (falta: días horario, logos nuevos) |

### Actualizaciones de documentación adicionales (misma sesión)

- `docs/PENDING.md` — P3 resuelto: métricas no reales → decisión pendiente (¿eliminar o reemplazar `#stats`?)
- `docs/PENDING.md` — P4 resuelto: logos desactualizados → nuevos logos por recibir del cliente
- `docs/PENDING.md` — P5 parcialmente resuelto: dirección para Schema / ciudad solo para footer, horario 8:30–18:00 hrs, días pendientes
- `docs/PENDING.md` — P6 resuelto: IVA incluido, CFDI disponible, métodos: tarjeta + USDT + SPEI + PayPal
- `docs/design/current-template-map.md` — `#stats` marcado ⚠️ con decisión pendiente
- `docs/design/current-template-map.md` — `#clientes` marcado ⚠️ logos desactualizados
- `docs/design/current-template-map.md` — Nuevas secciones planificadas: `#nosotros`, `#testimonios`, `#faq`
- `docs/epics/website-redesign-epics-stories.md` — Stories E5-S5.4, E5-S5.5, E5-S5.6 agregadas
- `src/js/config.js` — Horario actualizado a `8:30–18:00 hrs` (días pendientes de confirmar)
- `RETOMAR.md` — Estado actualizado a Lote 1A completado, próximo Lote 1B documentado

### Pendiente inmediato (antes de Lote 1B)

- Confirmar si sección `#stats` se elimina o se reemplaza con nuevas métricas
- Recibir nuevos logos de clientes para reemplazar sección `#clientes`
- Confirmar días del horario de atención (¿L–V únicamente o incluye sábados?)
- Confirmar pasarela de tarjeta, CLABE SPEI y wallet USDT para Fase 6

---

## 2026-04-27 — Fase 0: Auditoría y documentación

**Rama:** `feat/fase-0-docs`  
**Epic/Story:** E1, E2, E9-S9.1, E9-S9.3, E11-S11.1, E12-S12.1, E12-S12.2, E13, E15, E16

### Creado

**Estructura documental completa (`docs/`):**
- `docs/README.md` — índice de toda la documentación
- `docs/DECISIONS.md` — 8 decisiones técnicas registradas (D01–D08)
- `docs/PENDING.md` — 14 preguntas bloqueantes + 6 pendientes técnicos

**Agente 1 — Repo Auditor:**
- `docs/audit/repo-audit.md`
- `docs/audit/current-structure.md`
- `docs/audit/risk-log.md` — 17 riesgos clasificados (5 altos, 8 medios, 4 bajos)

**Agente 2 — Template Mapper:**
- `docs/design/current-template-map.md` — 13 secciones mapeadas
- `docs/design/component-inventory.md` — tokens CSS, componentes reutilizables, deuda técnica

**Agente 3 — UX & Conversion Strategist:**
- `docs/strategy/conversion-strategy.md`
- `docs/strategy/whatsapp-flow-map.md`
- `docs/strategy/quote-flow.md`

**Agente 4 — SEO Preservation Agent:**
- `docs/seo/seo-preservation-plan.md`
- `docs/seo/url-inventory-template.csv`
- `docs/seo/redirect-map-template.csv`
- `docs/seo/content-migration-checklist.md`

**Agente 5 — E-commerce Architect:**
- `docs/ecommerce/ecommerce-architecture.md`
- `docs/ecommerce/product-catalog-model.md`
- `docs/ecommerce/storefront-user-flow.md`
- `docs/ecommerce/woocommerce-fit-analysis.md`

**Agente 6 — CMS / WordPress Migration Agent:**
- `docs/cms/wordpress-integration-plan.md`
- `docs/cms/content-model.md`
- `docs/cms/custom-post-types.md`
- `docs/cms/migration-phases.md`

**Agente 7 — Frontend Implementation Agent:**
- `docs/frontend/frontend-implementation-plan.md`
- `docs/frontend/component-refactor-plan.md`
- `docs/frontend/tweaks-panel-reference.md`

**Agente 8 — QA & Accessibility Agent:**
- `docs/qa/qa-checklist.md`
- `docs/qa/accessibility-checklist.md`
- `docs/qa/performance-checklist.md`
- `docs/qa/pre-launch-checklist.md`

**Agente 9 — Change Manager:**
- `docs/agents/agents-map.md`
- `docs/agents/agent-prompts.md`
- `docs/epics/website-redesign-epics-stories.md` — **ARCHIVO CANÓNICO** con 17 Epics

### Modificado

- `EPICS_AND_STORIES.md` — convertido a índice/resumen; versión original en git history (`c611c4e`)
- `CHANGELOG.md` — esta entrada

### Nuevo

- `RETOMAR.md` — handoff rápido para nuevas conversaciones

### Riesgos identificados (top 5)

| ID | Riesgo | Severidad |
|---|---|---|
| R01 | WhatsApp placeholder `524420000000` | Alta |
| R02 | Imágenes remotas desde producción | Alta |
| R03 | Formulario sin backend | Alta |
| R04 | Sin analytics | Alta |
| R05 | Datos de contacto no validados | Alta |

### Sin cambios en código

La Fase 0 es exclusivamente documentación. El archivo `Paisare Redesign.html` no fue modificado.

## 2026-04-27

### Agregado

- Implementacion inicial de `Paisare Redesign.html` desde el handoff de diseno.
- Documentacion base del proyecto:
  - `README.md`
  - `SCRATCHPAD.md`
  - `EPICS_AND_STORIES.md`
  - `ESTADO_ACTUAL.md`
- Registro del enfoque de trabajo: usar datos de la web actual de WordPress y cambiar principalmente la plantilla.

### Contexto

- La web actual de referencia es https://www.paisare.com/
- El contenido base identificado incluye servicios, metricas, portafolio, proceso de contratacion, equipo, articulos, clientes y redes sociales.
- El prototipo actual usa imagenes remotas del sitio existente y enlaces de WhatsApp con numero placeholder.

### Pendiente

- Sustituir el telefono placeholder `524420000000` por el numero real de Paisare.
- Definir si el HTML se integrara como plantilla WordPress, tema custom, sitio estatico o frontend separado.
- Optimizar imagenes, fuentes y scripts antes de publicar.

