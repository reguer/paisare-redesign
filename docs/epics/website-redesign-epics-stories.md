# Epics & Stories — Paisare Web · Astro + Sanity + Cloudflare
**Stack confirmado:** Astro · Sanity CMS · Cloudflare Pages/Workers/Access · Mercado Pago  
**Fecha de decisión:** 2026-04-28  
**Última actualización:** 2026-04-28  
**Archivo canónico.** Ver `docs/DECISIONS.md` para el razonamiento de cada decisión de stack.

---

## 1. Objetivo

Reemplazar el sitio WordPress actual de Paisare con un sitio moderno, rápido, fácil de actualizar por personas no técnicas, con blog, portafolio gestionado desde CMS, tienda básica (Mercado Pago, sin costo fijo), y páginas privadas por cliente. La migración es zero-downtime: el WordPress permanece vivo hasta que el nuevo sitio esté aprobado.

---

## 2. Alcance funcional

**Sitio institucional:** Home · Servicios (hub + páginas individuales) · Portafolio (grid + detalle) · Blog · Nosotros · Testimonios · FAQ · Contacto · Cotización  
**Tienda:** Catálogo de productos → Mercado Pago Checkout → Confirmación  
**Clientes:** Páginas privadas por proyecto (Cloudflare Access, magic link por email)  
**CMS:** Sanity Studio — editable por cualquier persona sin conocimientos técnicos

---

## 3. Stack y costos

| Capa | Tecnología | Costo |
|---|---|---|
| Framework | Astro (SSG + SSR islands) | $0 |
| CMS | Sanity (free tier) | $0 |
| Hosting + CDN | Cloudflare Pages | $0 |
| SSR / lógica dinámica | Cloudflare Workers | $0 (free tier) |
| Auth cliente | Cloudflare Access (hasta 50 users) | $0 |
| Pagos | Mercado Pago | ~3.5% por transacción |
| Formularios | Web3Forms o CF Email Routing | $0 |
| Analytics | Cloudflare Web Analytics | $0 |
| Dominio | Mantener actual | ~$12/año |
| **Futuro** | Umbrel Pro como hosting alternativo | Pendiente evaluación (D03b) |
| **Total fijo** | | **~$1/mes** |

---

## Epic 1 — Auditoría y documentación base
**Estado: COMPLETADO** (2026-04-27)

### Story 1.1 — Inspeccionar repositorio existente
**Estado:** Completado · Archivos: `docs/audit/repo-audit.md`, `docs/audit/current-structure.md`

### Story 1.2 — Mapear plantilla HTML actual
**Estado:** Completado · Archivos: `docs/design/current-template-map.md`, `docs/design/component-inventory.md`

### Story 1.3 — Detectar riesgos y pendientes
**Estado:** Completado · Archivos: `docs/audit/risk-log.md`, `docs/PENDING.md`

---

## Epic 2 — Prototipo HTML (referencia de diseño)
**Estado: COMPLETADO** (Lotes 1A · 1B · 2 — 2026-04-27/28)  
**Propósito:** El archivo `Paisare Redesign.html` es la referencia visual y de contenido para construir los componentes Astro. No es el sitio de producción.

### Story 2.1 — Configuración centralizada (WA, email, teléfono)
**Estado:** Completado (Lote 1A) · Archivo: `src/js/config.js`

### Story 2.2 — SEO técnico del prototipo (OG, Schema.org LocalBusiness + FAQPage)
**Estado:** Completado (Lote 1B) · En: `<head>` de `Paisare Redesign.html`

### Story 2.3 — Sección Nosotros (misión, visión, quiénes somos)
**Estado:** Completado (Lote 1B)

### Story 2.4 — Sección Testimonios (3 reseñas reales de Homify)
**Estado:** Completado (Lote 1B)

### Story 2.5 — Logo real en nav y footer · LinkedIn + Google Maps en footer
**Estado:** Completado (Lote 1B) · Assets: `src/img/favicon.svg`, `src/img/logo-white.svg`

### Story 2.6 — Sección FAQ (10 preguntas autogeneradas + Schema FAQPage)
**Estado:** Completado borrador (Lote 2) · Pendiente: cliente revise respuestas

### Story 2.7 — Portafolio interactivo (modal de detalle, "Ver más", filtros)
**Estado:** Completado (Lote 2)

---

## Epic 3 — Setup de infraestructura (Astro + Sanity + Cloudflare)
**Estado: PENDIENTE — próximo a ejecutar**  
**Rama de trabajo:** `feat/fase-2-astro`

### Story 3.1 — Inicializar proyecto Astro

**Objetivo:** Crear el proyecto Astro con TypeScript, estructura de carpetas correcta, y primer deploy funcional en Cloudflare Pages.

**Entregables:**
- `astro-site/` (carpeta raíz del proyecto Astro dentro del repo)
- `astro-site/astro.config.mjs` — integración `@astrojs/cloudflare`, TypeScript strict
- `astro-site/tsconfig.json` — strict mode, path aliases `@components`, `@layouts`, `@lib`
- `astro-site/src/pages/index.astro` — placeholder "Hola desde Astro"
- `astro-site/package.json` — dependencias: `astro`, `@astrojs/cloudflare`
- `.github/workflows/deploy.yml` — build + deploy a Cloudflare Pages en push a main

**Criterios de aceptación:**
- [ ] `npm run build` completa sin errores desde `astro-site/`
- [ ] Push a `main` dispara GitHub Action automáticamente
- [ ] Sitio placeholder visible en `https://<proyecto>.pages.dev`
- [ ] Preview deploys activos para cada PR (Cloudflare Pages lo hace nativamente)
- [ ] TypeScript strictmode activo: `tsc --noEmit` pasa limpio

**Talla:** M  
**Rama:** `feat/fase-2-astro`  
**Bloqueantes:** I1 (cuenta Cloudflare) · I2 (workspace Sanity) · I3 (acceso DNS)

---

### Story 3.2 — Crear workspace de Sanity + schemas iniciales

**Objetivo:** Definir todos los tipos de documento en Sanity Studio con validaciones, desplegado en `studio.paisare.com`.

**Entregables:**
- `astro-site/sanity/` (studio embebido en el repo o repo separado — decidir en setup)
- `astro-site/sanity/schemaTypes/proyecto.ts`
- `astro-site/sanity/schemaTypes/articulo.ts`
- `astro-site/sanity/schemaTypes/servicio.ts`
- `astro-site/sanity/schemaTypes/producto.ts`
- `astro-site/sanity/schemaTypes/paginaCliente.ts`
- `astro-site/sanity/schemaTypes/testimonio.ts`
- `astro-site/sanity/schemaTypes/faqItem.ts`
- `astro-site/sanity/schemaTypes/index.ts` — exporta todos los schemas
- `astro-site/sanity/sanity.config.ts` — workspace config

Ver **Apéndice A** para definición campo por campo de cada schema.

**Criterios de aceptación:**
- [ ] Sanity Studio arranca con `npx sanity dev` sin errores TypeScript
- [ ] Los 7 tipos de documento aparecen en el panel de Studio
- [ ] Se puede crear un documento de cada tipo desde Studio sin errores de validación
- [ ] Studio desplegado y accesible en `studio.paisare.com` (o subdominio temporal de preview)
- [ ] Campos required rechazan documentos incompletos al publicar

**Talla:** M  
**Rama:** `feat/fase-2-astro`  
**Bloqueantes:** I2 (workspace Sanity creado)

---

### Story 3.3 — Conectar Astro con Sanity (GROQ queries)

**Objetivo:** Astro puede consultar datos de Sanity en tiempo de build y en runtime (SSR), con helpers reutilizables.

**Entregables:**
- `astro-site/src/lib/sanity.ts` — cliente configurado + helpers de query
- `astro-site/src/lib/queries.ts` — constantes GROQ para cada tipo de documento
- `astro-site/.env.example` — template con todas las variables requeridas (sin valores reales)
- `astro-site/.env` — valores reales (en `.gitignore`, nunca commitear)
- Variables cargadas en Cloudflare Pages dashboard (Settings → Environment variables)

Ver **Apéndice D** para lista completa de variables de entorno.

**Criterios de aceptación:**
- [ ] `src/lib/sanity.ts` exporta función `sanityFetch<T>(query, params?)` tipada
- [ ] `src/lib/queries.ts` tiene queries para: proyectos, artículos, servicios, faqItems, testimonios
- [ ] Build no falla si Sanity dataset está vacío (queries retornan `[]`, no crash)
- [ ] Variables de entorno disponibles en build de Cloudflare Pages (verificar en CF dashboard)
- [ ] `PUBLIC_` vars accesibles desde componentes de cliente (Astro islands)
- [ ] `.env` está en `.gitignore` y no aparece en `git status`

**Talla:** S  
**Rama:** `feat/fase-2-astro`  
**Bloqueantes:** Story 3.2 completada

---

### Story 3.4 — Configurar dominio y DNS en Cloudflare

**Objetivo:** El nuevo sitio es accesible en `nuevo.paisare.com` sin tocar el WordPress en `paisare.com`.

**Entregables:**
- Registro DNS CNAME: `nuevo.paisare.com` → `<proyecto>.pages.dev`
- Registro DNS CNAME: `studio.paisare.com` → Sanity Studio deploy
- SSL automático activado para ambos subdominios (Cloudflare lo hace nativamente)
- Documento `docs/infra/dns-map.md` con snapshot del estado DNS

**Criterios de aceptación:**
- [ ] `https://nuevo.paisare.com` carga el sitio Astro (sin errores SSL)
- [ ] `https://studio.paisare.com` carga Sanity Studio (sin errores SSL)
- [ ] `https://paisare.com` sigue mostrando el WordPress actual sin cambios
- [ ] HTTP redirige a HTTPS en ambos subdominios
- [ ] `docs/infra/dns-map.md` creado con la tabla de registros actuales

**Talla:** S  
**Rama:** `feat/fase-2-astro`  
**Bloqueantes:** I1 (cuenta Cloudflare) · I3 (acceso DNS `paisare.com`)

---

### Story 3.5 — Setup CI/CD (GitHub → Cloudflare Pages)

**Objetivo:** Pipeline automático: push a `main` → build → deploy en < 3 minutos.

**Entregables:**
- `.github/workflows/deploy.yml` — build Astro + Wrangler deploy a CF Pages
- `wrangler.toml` — configuración del proyecto CF Pages
- Documentación en `docs/infra/cicd.md`: variables a configurar en CF dashboard

**Criterios de aceptación:**
- [ ] Push a `main` dispara deploy automático y completa sin errores
- [ ] Tiempo de build < 3 minutos desde push hasta live
- [ ] PR abierto genera preview deploy en URL única (`<hash>.pages.dev`)
- [ ] Fallo en build → deploy bloqueado, notificación en GitHub PR
- [ ] Variables de entorno no se exponen en logs del CI

**Talla:** S  
**Rama:** `feat/fase-2-astro`  
**Bloqueantes:** Story 3.1 + Story 3.4 completadas

---

## Epic 4 — Migración de contenido desde WordPress
**Estado: PENDIENTE** (depende de Epic 3)  
**Rama de trabajo:** `feat/fase-3-content`

### Story 4.1 — Exportar artículos del blog de WordPress a Sanity

**Objetivo:** Todos los artículos del blog de WordPress existen como documentos en Sanity, con contenido y URLs preservados.

**Entregables:**
- `scripts/wp-to-sanity/` — carpeta con script de migración
- `scripts/wp-to-sanity/migrate.ts` — script Node.js que lee XML de WP y crea documentos Sanity via API
- `scripts/wp-to-sanity/README.md` — instrucciones de uso
- Documento `docs/audit/url-inventory.md` — URLs de blog actuales vs nuevas

**Criterios de aceptación:**
- [ ] Script corre sin errores con el XML de export de WordPress
- [ ] Cada artículo preserva: slug original, título, fecha, cuerpo (Portable Text), imagen destacada, categorías
- [ ] URLs mantienen formato `/blog/slug-del-articulo` (sin cambios de SEO)
- [ ] Artículos importados aparecen en Sanity Studio listos para publicar
- [ ] `docs/audit/url-inventory.md` lista todas las URLs que cambiarán (si las hay)

**Talla:** M  
**Rama:** `feat/fase-3-content`  
**Bloqueantes:** C1 (XML de WordPress) · Story 3.2 completada

---

### Story 4.2 — Mapa de redirecciones 301

**Objetivo:** Ninguna URL de WordPress activa genera 404 en el nuevo sitio.

**Entregables:**
- `astro-site/public/_redirects` — formato Cloudflare Pages
- `docs/audit/url-inventory.md` — actualizado con columna "nueva URL" y status

**Criterios de aceptación:**
- [ ] Todas las URLs del inventory tienen entrada en `_redirects` o se confirma que la nueva URL es idéntica
- [ ] Redirección 301 (no 302) verificada con `curl -I <url-antigua>`
- [ ] No hay loops de redirección
- [ ] Verificado con Google Search Console Inspect URL post-lanzamiento (pendiente al momento del flip DNS)

**Talla:** S  
**Rama:** `feat/fase-3-content`  
**Bloqueantes:** Story 4.1 completada

---

### Story 4.3 — Migrar portafolio existente a Sanity

**Objetivo:** Los 6 proyectos del prototipo HTML existen como documentos en Sanity, con imágenes alojadas en Sanity Assets (no en `paisare.com/wp-content`).

**Entregables:**
- 6 documentos `proyecto` creados en Sanity Studio
- Imágenes descargadas y subidas a Sanity Assets (no referencias externas a WordPress)
- `docs/content/portfolio-migration-log.md` — registro de qué se migró y qué queda pendiente

**Criterios de aceptación:**
- [ ] Los 6 proyectos del prototipo HTML aparecen en Sanity Studio con: nombre, slug, categoría, descripción, mínimo 2 imágenes
- [ ] Imágenes sirven desde CDN de Sanity (`cdn.sanity.io`), no desde `paisare.com`
- [ ] Query GROQ `*[_type == "proyecto"]` retorna los 6 documentos
- [ ] Slugs coinciden con los `data-id` del prototipo HTML (p.ej. `vista-real`, `parque-puerta-navarra`)

**Talla:** S  
**Rama:** `feat/fase-3-content`  
**Bloqueantes:** C2 (lista definitiva de proyectos) · Story 3.2 completada

---

### Story 4.4 — Migrar testimonios a Sanity

**Objetivo:** Los testimonios de Homify existen en Sanity y el sistema permite agregar más sin cambios de código.

**Entregables:**
- 3 documentos `testimonio` creados en Sanity Studio con datos reales de Homify

**Criterios de aceptación:**
- [ ] Los 3 testimonios del prototipo HTML están en Sanity: texto, autor, plataforma='homify', fecha, visible=true
- [ ] Query GROQ `*[_type == "testimonio" && visible == true]` retorna los 3
- [ ] Se puede agregar un cuarto testimonio desde Studio sin cambios de código

**Talla:** S  
**Rama:** `feat/fase-3-content`  
**Bloqueantes:** Story 3.2 completada

---

## Epic 5 — Conversión del prototipo HTML a componentes Astro
**Estado: PENDIENTE** (depende de Epic 3)  
**Referencia:** `Paisare Redesign.html` es el diseño base — se modulariza, no se rediseña.  
**Rama de trabajo:** `feat/fase-4-components`

Ver **Apéndice B** para inventario completo de archivos `.astro` con props tipadas.

### Story 5.1 — Layout base (nav + footer + head SEO)

**Objetivo:** `BaseLayout.astro` envuelve todas las páginas con meta tags dinámicos, nav responsive y footer con datos reales.

**Entregables:**
- `src/layouts/BaseLayout.astro`
- `src/components/Nav.astro`
- `src/components/Footer.astro`
- `src/lib/config.ts` — equivalente tipado del `src/js/config.js` del prototipo
- `src/styles/global.css` — CSS base portado del prototipo HTML

**Criterios de aceptación:**
- [ ] `BaseLayout.astro` acepta props: `title`, `description`, `ogImage?`, `schema?`, `activeRoute?`
- [ ] `<title>` y `<meta description>` son únicos por página (no hardcoded)
- [ ] Schema.org JSON-LD se serializa correctamente en `<script type="application/ld+json">`
- [ ] Nav activa la clase `.active` en el link correcto según `activeRoute`
- [ ] Nav hamburger funcional en mobile (≤ 768px) — sin JS de terceros
- [ ] Footer muestra datos reales: WhatsApp, email, teléfono, dirección, redes sociales
- [ ] `tsc --noEmit` pasa sin errores en todos los archivos del layout

**Talla:** M  
**Rama:** `feat/fase-4-components`  
**Bloqueantes:** Story 3.3 completada

---

### Story 5.2 — Página Home (`/`)

**Objetivo:** La página de inicio carga datos de Sanity, replica el diseño del prototipo HTML, y pasa Lighthouse ≥ 90 en mobile.

**Entregables:**
- `src/pages/index.astro`
- `src/components/Hero.astro`
- `src/components/ServiceCard.astro`
- `src/components/PortfolioGrid.astro`
- `src/components/PortfolioModal.astro` (Astro island — client:load)
- `src/components/TestimonialCard.astro`
- `src/components/FAQAccordion.astro`
- `src/components/BlogCard.astro`
- `src/components/ContactForm.astro` (Astro island — client:load)

**Criterios de aceptación:**
- [ ] Home carga en `nuevo.paisare.com/` sin errores de consola
- [ ] Sección Hero renderiza (imágenes desde Sanity o assets locales)
- [ ] Grid de portafolio muestra últimos 4-6 proyectos de Sanity con filtros funcionales
- [ ] Modal de detalle de portafolio abre y cierra con datos correctos
- [ ] Testimonios cargados desde Sanity (mínimo 3)
- [ ] FAQ cargado desde Sanity con Schema FAQPage
- [ ] Últimos 3 artículos del blog cargados desde Sanity
- [ ] Formulario de contacto funciona: envía email a `contacto@paisare.com` via Web3Forms
- [ ] Lighthouse Performance ≥ 90 en mobile (Chrome DevTools, throttling 4G)
- [ ] No hay imágenes sin `alt` attribute

**Talla:** L  
**Rama:** `feat/fase-4-components`  
**Bloqueantes:** Epics 3 y 4 completados

---

### Story 5.3 — Portafolio (`/portafolio/` + `/portafolio/[slug]`)

**Objetivo:** Galería completa del portafolio con páginas de detalle individuales indexables por buscadores.

**Entregables:**
- `src/pages/portafolio/index.astro`
- `src/pages/portafolio/[slug].astro`

**Criterios de aceptación:**
- [ ] `/portafolio/` muestra todos los proyectos de Sanity con filtros por categoría
- [ ] Filtros funcionan sin recarga de página (Astro island)
- [ ] Cada proyecto tiene página en `/portafolio/[slug]` generada en build (SSG)
- [ ] Galería de imágenes funcional en página de detalle (lightbox o slider)
- [ ] Schema `CreativeWork` correcto (validado en Rich Results Test)
- [ ] `getStaticPaths()` genera rutas para todos los proyectos en Sanity
- [ ] Página 404 si slug no existe

**Talla:** M  
**Rama:** `feat/fase-4-components`  
**Bloqueantes:** Story 5.1 + Historia 4.3 completadas

---

### Story 5.4 — Blog (`/blog/` + `/blog/[slug]`)

**Objetivo:** Blog completo con artículos de Sanity, paginado, con feed RSS y Schema Article.

**Entregables:**
- `src/pages/blog/index.astro` (y `src/pages/blog/[page].astro` para paginación)
- `src/pages/blog/[slug].astro`
- `src/pages/blog/rss.xml.ts`
- `src/layouts/BlogLayout.astro`

**Criterios de aceptación:**
- [ ] `/blog/` muestra artículos paginados (12 por página), ordenados por fecha descendente
- [ ] Cada artículo tiene página individual en `/blog/[slug]`
- [ ] Portable Text renderiza correctamente (títulos, listas, links, imágenes inline)
- [ ] Schema `Article` correcto (validado en Rich Results Test)
- [ ] `/blog/rss.xml` retorna XML válido con los últimos 20 artículos
- [ ] Links a artículos relacionados (misma categoría)
- [ ] Imágenes tienen lazy loading y width/height para evitar CLS

**Talla:** M  
**Rama:** `feat/fase-4-components`  
**Bloqueantes:** Story 5.1 + Story 4.1 completadas

---

### Story 5.5 — Servicios (`/servicios/` + `/servicios/[slug]`)

**Objetivo:** Hub de servicios con páginas individuales optimizadas para SEO local.

**Entregables:**
- `src/pages/servicios/index.astro`
- `src/pages/servicios/[slug].astro`

**Criterios de aceptación:**
- [ ] `/servicios/` muestra las 6 categorías de servicio con card + descripción corta
- [ ] Cada servicio tiene página individual en `/servicios/[slug]`
- [ ] Página de servicio muestra: descripción larga (Portable Text), galería, proyectos relacionados del portafolio, CTA WhatsApp
- [ ] Schema `Service` correcto
- [ ] `getStaticPaths()` genera todas las rutas de Sanity

**Talla:** M  
**Rama:** `feat/fase-4-components`  
**Bloqueantes:** Story 5.1 + servicios creados en Sanity

---

### Story 5.6 — FAQ completo (`/faq/`)

**Objetivo:** Página de FAQ con datos de Sanity, accordion animado, Schema FAQPage completo.

**Entregables:**
- `src/pages/faq/index.astro`

**Criterios de aceptación:**
- [ ] FAQ carga todos los `faqItem` de Sanity con `visible == true`, ordenados por `orden`
- [ ] Accordion usa `<details>`/`<summary>` nativo (sin JS, igual que prototipo)
- [ ] Schema `FAQPage` dinámico generado desde datos de Sanity
- [ ] Validado en Google Rich Results Test

**Talla:** S  
**Rama:** `feat/fase-4-components`  
**Bloqueantes:** Story 5.1 + faqItems en Sanity + C4 (FAQ revisado por cliente)

---

### Story 5.7 — Nosotros y Contacto

**Objetivo:** Páginas estáticas con datos reales del cliente y formulario funcional.

**Entregables:**
- `src/pages/nosotros.astro`
- `src/pages/contacto.astro`

**Criterios de aceptación:**
- [ ] `/nosotros/` muestra: misión, visión, historia, foto del equipo (si C5 disponible), Schema `Organization`
- [ ] `/contacto/` muestra: formulario (Web3Forms), WhatsApp, dirección, horario
- [ ] Formulario de contacto entrega correo a `contacto@paisare.com` (verificar en email real)
- [ ] Honeypot antispam activo en el formulario
- [ ] Datos de contacto coinciden con `src/lib/config.ts`

**Talla:** S  
**Rama:** `feat/fase-4-components`  
**Bloqueantes:** Story 5.1

---

## Epic 6 — Páginas privadas de cliente
**Estado: PENDIENTE** (depende de Epic 5)  
**Rama de trabajo:** `feat/fase-5-clientes`

### Story 6.1 — Schema "paginaCliente" y UI de página de cliente

**Objetivo:** Cada proyecto de cliente tiene una página privada con timeline de actualizaciones y documentos descargables.

**Entregables:**
- `src/pages/cliente/[slug].astro` — ruta SSR (no SSG)
- `src/components/ClienteTimeline.astro`
- Schema `paginaCliente` en Sanity (incluido en Story 3.2, verificar completitud)

**Criterios de aceptación:**
- [ ] `/cliente/[slug]` es SSR — no se pre-genera en build, se sirve en runtime por Cloudflare Worker
- [ ] Worker verifica el token de Cloudflare Access en cada request
- [ ] Sin token válido → redirect a pantalla de login de Cloudflare Access
- [ ] Con token válido → muestra: nombre del proyecto, estado, timeline de actualizaciones, documentos
- [ ] Timeline ordena actualizaciones del más reciente al más antiguo
- [ ] Documentos se pueden descargar (links directos a Sanity Assets)

**Talla:** M  
**Rama:** `feat/fase-5-clientes`  
**Bloqueantes:** Story 3.4 (CF Zero Trust configurado) · P1 (lista de clientes) · P2 (emails de clientes)

---

### Story 6.2 — Configurar Cloudflare Access para `/cliente/*`

**Objetivo:** Solo las personas con email autorizado pueden ver `/cliente/*`, sin contraseñas.

**Entregables:**
- Zero Trust Application creada en Cloudflare dashboard para `paisare.com/cliente/*`
- Policy configurada: lista de emails autorizados por proyecto
- Variable `CF_ACCESS_AUD` registrada en `astro-site/.env.example`
- Documento `docs/infra/cloudflare-access.md` — instrucciones para agregar nuevos clientes

**Criterios de aceptación:**
- [ ] Acceder a `/cliente/*` sin email autorizado → pantalla de login de CF Access
- [ ] Ingresar email autorizado → recibir magic link por email → acceso concedido
- [ ] Token de CF Access se verifica en el Worker antes de servir contenido
- [ ] `CF_ACCESS_AUD` configurado en Cloudflare Pages env vars
- [ ] `docs/infra/cloudflare-access.md` documenta cómo agregar o revocar un email de cliente

**Talla:** M  
**Rama:** `feat/fase-5-clientes`  
**Bloqueantes:** I1 (cuenta Cloudflare) · P1 + P2

---

### Story 6.3 — Flujo editorial en Sanity Studio para actualizaciones de cliente

**Objetivo:** El equipo de Paisare puede agregar actualizaciones de proyecto desde Sanity Studio sin tocar código.

**Entregables:**
- Sanity Studio configurado con vista custom o GROQ filter para ver solo `paginaCliente`
- Instrucciones en `docs/guides/sanity-editor-guide.md` (sección "Actualizar proyecto de cliente")

**Criterios de aceptación:**
- [ ] Cualquier editor en Sanity Studio puede: encontrar un proyecto de cliente, agregar una actualización con texto + fotos, publicar
- [ ] La actualización aparece en `/cliente/[slug]` sin necesidad de rebuild (SSR)
- [ ] Guía de usuario explica el flujo en < 5 pasos con capturas o GIF

**Talla:** S  
**Rama:** `feat/fase-5-clientes`  
**Bloqueantes:** Story 6.1 completada

---

## Epic 7 — Tienda (Mercado Pago, sin costo fijo)
**Estado: PENDIENTE** (depende de Epic 5 + catálogo de productos)  
**Rama de trabajo:** `feat/fase-6-tienda`

### Story 7.1 — Catálogo de productos en Sanity y páginas de tienda

**Objetivo:** Todos los productos del catálogo están en Sanity y tienen páginas individuales con Schema Product.

**Entregables:**
- `src/pages/tienda/index.astro`
- `src/pages/tienda/[slug].astro`
- `src/pages/tienda/confirmacion.astro`

**Criterios de aceptación:**
- [ ] `/tienda/` muestra todos los productos `disponible == true` con filtros por categoría
- [ ] Cada producto tiene página en `/tienda/[slug]` con: fotos, descripción, precio, botón "Comprar"
- [ ] Schema `Product` correcto (validado en Rich Results Test)
- [ ] Si `rangoPrecio == true`, muestra "Desde $X" en lugar de precio fijo
- [ ] Productos no disponibles (`disponible == false`) no aparecen en listado ni en rutas SSG

**Talla:** M  
**Rama:** `feat/fase-6-tienda`  
**Bloqueantes:** T1 (catálogo de productos del cliente) · Story 5.1 completada

---

### Story 7.2 — Checkout con Mercado Pago (Cloudflare Worker)

**Objetivo:** El botón "Comprar" crea una sesión de pago en Mercado Pago y redirige al usuario sin exponer las credenciales en el frontend.

**Entregables:**
- `workers/checkout/index.ts` — Cloudflare Worker que crea Preference de Mercado Pago
- `workers/checkout/wrangler.toml`
- `src/pages/tienda/confirmacion.astro` — página de éxito/error post-pago
- Variable `MP_ACCESS_TOKEN` y `MP_WEBHOOK_SECRET` documentadas en `.env.example`

**Criterios de aceptación:**
- [ ] `POST /api/checkout` con `{ slug, quantity }` retorna `{ init_point: "https://www.mercadopago.com.mx/..." }`
- [ ] `MP_ACCESS_TOKEN` nunca aparece en el bundle del cliente (solo en el Worker)
- [ ] Pago de prueba en sandbox completa sin errores
- [ ] Página de confirmación muestra mensaje de éxito o error según query params de Mercado Pago
- [ ] Webhook de Mercado Pago (`POST /api/mp-webhook`) verifica firma con `MP_WEBHOOK_SECRET`

**Talla:** L  
**Rama:** `feat/fase-6-tienda`  
**Bloqueantes:** T2 (cuenta Mercado Pago Seller + API keys) · T3 (políticas de envío)

---

### Story 7.3 — Gestión de pedidos en Sanity

**Objetivo:** Cada pago exitoso crea un documento `pedido` en Sanity, visible para el equipo en Studio.

**Entregables:**
- `astro-site/sanity/schemaTypes/pedido.ts` — nuevo schema
- Webhook handler actualizado en `workers/checkout/index.ts`
- `docs/guides/sanity-editor-guide.md` — sección "Ver pedidos"

**Criterios de aceptación:**
- [ ] Webhook de Mercado Pago `status == approved` → documento `pedido` creado en Sanity con: producto, cantidad, monto, fecha, estado='pendiente'
- [ ] Documento `pedido` visible en Sanity Studio
- [ ] Notificación por correo enviada al equipo de Paisare (via Worker → CF Email Routing)
- [ ] Webhook rechaza requests sin firma válida (seguridad)

**Talla:** M  
**Rama:** `feat/fase-6-tienda`  
**Bloqueantes:** Story 7.2 completada · T4 (políticas de devolución)

---

## Epic 8 — SEO técnico
**Estado: PENDIENTE** (depende de Epic 5)

### Story 8.1 — Sitemap dinámico (`/sitemap.xml`)
Generado por Astro integrando todas las rutas estáticas + artículos + proyectos de Sanity.

### Story 8.2 — robots.txt
Reglas correctas: indexar marketing + blog + portafolio, bloquear `/cliente/*` y `/studio/*`.

### Story 8.3 — Schema.org completo por tipo de página
`LocalBusiness` (home) · `FAQPage` (FAQ) · `Article` (blog) · `CreativeWork` (portafolio) · `Service` (servicios) · `Product` (tienda) · `BreadcrumbList` (todas)

### Story 8.4 — Open Graph dinámico por página
Título, descripción e imagen únicos por página, generados desde Sanity.

### Story 8.5 — Redirecciones 301 desde URLs de WordPress
Archivo `_redirects` en Cloudflare Pages cubriendo todas las URLs que cambien.

### Story 8.6 — Verificar y mantener Google Search Console
Verificar propiedad en Search Console para el nuevo sitio, monitorear indexación post-lanzamiento.

---

## Epic 9 — Analytics y medición
**Estado: PENDIENTE** (depende de Epic 3)

### Story 9.1 — Cloudflare Web Analytics (sin cookies, gratis)
Métricas básicas: visitas, páginas más vistas, países, dispositivos.

### Story 9.2 — Eventos de conversión (GA4 opcional)
Si el cliente necesita embudos: agregar GA4 solo para eventos clave (formulario enviado, WhatsApp click, producto visitado, checkout iniciado).

---

## Epic 10 — Performance y accesibilidad
**Estado: PENDIENTE — ejecutar en Fase 7, después de estructura y contenido definidos (D10)**

### Story 10.1 — Imágenes optimizadas
WebP automático via `<Image>` de Astro o Cloudflare Images. Lazy loading nativo.

### Story 10.2 — Core Web Vitals
LCP < 2.5s · FID < 100ms · CLS < 0.1. Medir con Lighthouse en mobile 4G.

### Story 10.3 — WCAG AA
Contraste de color · alt texts en todas las imágenes · navegación por teclado · focus visible · aria-labels.

### Story 10.4 — Lighthouse score objetivo
Score > 90 en Performance, Accessibility, Best Practices, SEO en mobile.

---

## Epic 11 — Migración zero-downtime
**Estado: PENDIENTE — es la Fase 8 del proyecto**

### Story 11.1 — Preview en `nuevo.paisare.com`
El nuevo sitio es accesible y revisable por el cliente en el subdominio antes del flip.

### Story 11.2 — Checklist de QA pre-lanzamiento
- [ ] Todos los artículos migrados y verificados
- [ ] Todas las URLs con redirección correcta
- [ ] Formularios funcionando (recibir correo real)
- [ ] Checkout de Mercado Pago probado en sandbox
- [ ] Páginas de cliente funcionando con Cloudflare Access
- [ ] Core Web Vitals > 90 en mobile
- [ ] Schema.org validado en Rich Results Test
- [ ] Revisión en iOS Safari + Android Chrome

### Story 11.3 — Aprobación explícita del cliente
Firma (o confirmación escrita) del cliente de que el nuevo sitio está listo para reemplazar al actual.

### Story 11.4 — Flip de DNS
Apuntar `paisare.com` de WordPress a Cloudflare Pages. Tiempo de downtime real: < 5 minutos (propagación DNS).

### Story 11.5 — Monitoreo post-lanzamiento (30 días)
- WordPress se mantiene activo como fallback durante 30 días
- Monitorear Search Console para errores de indexación
- Monitorear Cloudflare Analytics para anomalías de tráfico
- Responder a cualquier reporte de link roto o funcionalidad faltante

### Story 11.6 — Descomisionar WordPress
Después de 30 días sin incidentes: decisión sobre qué hacer con el WordPress actual (mantener como archivo, cancelar hosting, o migrar a Umbrel Pro si ya está evaluado).

---

## Epic 12 — Infraestructura, CI/CD y hosting futuro
**Estado: PENDIENTE**

### Story 12.1 — CI/CD con GitHub Actions
Deploy automático a Cloudflare Pages al hacer push a `main`. Preview deploy por PR.

### Story 12.2 — Evaluación de Umbrel Pro (Fase 9)
**Criterios de evaluación:**
- Uptime garantizable (Umbrel en servidor dedicado vs residencial)
- Ancho de banda suficiente para el tráfico proyectado
- Plan de DDoS y seguridad (puede coexistir con Cloudflare como proxy)
- Costo real (hardware + internet + mantenimiento) vs Cloudflare Pages gratis
- Si se adopta: Cloudflare como CDN/proxy al frente, Umbrel como origen

**Pendiente:** No tomar esta decisión antes de lanzar el nuevo sitio. Evaluar cuando el sitio ya esté estable en producción.

---

## Epic 13 — Operaciones y mantenimiento post-lanzamiento
**Estado: PENDIENTE**

### Story 13.1 — Guía de uso de Sanity para editores
Documento en `docs/guides/sanity-editor-guide.md` explicando cómo: publicar artículo, agregar proyecto al portafolio, actualizar página de cliente, agregar producto.

### Story 13.2 — Automatización del portafolio (Fase futura)
GitHub Action que: detecta nueva carpeta en `assets/portfolio/[proyecto]/`, lee la presentación PDF/PPT, llama a Claude API para generar nombre/descripción/categorías, crea o actualiza el documento en Sanity. **A definir con el cliente cuando la estructura manual esté probada.**

### Story 13.3 — Backups de Sanity dataset
Exportar el dataset de Sanity con `sanity dataset export` periódicamente (mensual como mínimo). Guardar en Google Drive o repositorio privado.

---

## Fases de implementación

> Las Fases 0 y 1 están completas. El trabajo de código activo empieza en Fase 2.

| Fase | Nombre | Epics | Estado |
|---|---|---|---|
| 0 | Auditoría y documentación | 1 | ✅ Completado (2026-04-27) |
| 1 | Prototipo HTML (referencia de diseño) | 2 | ✅ Completado (2026-04-28) |
| 2 | Setup infraestructura (Astro + Sanity + CF) | 3 | ⏳ Próximo — sin bloqueantes técnicos |
| 3 | Migración de contenido WP + componentes Astro | 4, 5 | ⏳ Depende de Fase 2 |
| 4 | Blog + Portafolio completo con Sanity | 5.3, 5.4, 13.2 | ⏳ Depende de Fase 3 |
| 5 | Páginas privadas de cliente | 6 | ⏳ Depende de Fase 3 |
| 6 | Tienda Mercado Pago | 7 | ⏳ Depende de catálogo de productos |
| 7 | SEO técnico + Performance + Analytics | 8, 9, 10 | ⏳ Depende de Fase 4 |
| 8 | QA completo + DNS flip (zero-downtime) | 11 | ⏳ Depende de Fase 7 |
| 9 | Post-lanzamiento + evaluación Umbrel Pro | 12, 13 | ⏳ Depende de Fase 8 |

---

## Archivos de referencia archivados

Los siguientes documentos se generaron cuando el stack era WordPress. Se conservan como referencia para la migración de contenido, no como plan de implementación:

| Archivo | Uso actual |
|---|---|
| `docs/cms/wordpress-integration-plan.md` | Referencia para migrar artículos y entender la estructura WP |
| `docs/cms/custom-post-types.md` | Base para definir schemas equivalentes en Sanity |
| `docs/cms/content-model.md` | Base para el content model de Sanity |
| `docs/ecommerce/woocommerce-fit-analysis.md` | Archivado — reemplazado por Mercado Pago |
| `docs/ecommerce/ecommerce-architecture.md` | Referencia de categorías de productos para Sanity schema |
| `docs/frontend/tweaks-panel-reference.md` | Archivado — panel ya eliminado |

---

---

# APÉNDICES TÉCNICOS

---

## Apéndice A — Schemas de Sanity (campo por campo)

> Convención de tipos: `string` = texto corto · `text` = texto largo sin formato · `blockContent` = Portable Text (rich text) · `image` = imagen con metadatos · `file` = documento descargable · `reference` = relación entre documentos · `slug` = URL-friendly string · `date` = fecha ISO · `number` = número · `boolean` = true/false · `array` = lista de ítems

---

### `proyecto`

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'proyecto'` | auto | — |
| `titulo` | `string` | `string` | ✅ | max 100 chars |
| `slug` | `slug` | `{ current: string }` | ✅ | auto-generated desde título · URL-safe |
| `categorias` | `array of string` | `string[]` | ✅ | options: `'paisajismo'` · `'construccion'` · `'riego'` · `'mantenimiento'` · `'lagos'` · `'tienda'` |
| `descripcion` | `blockContent` | `PortableTextBlock[]` | ✅ | Portable Text — descripción del proyecto |
| `imagenes` | `array of image` | `SanityImage[]` | ✅ | min 1 · cada imagen tiene `alt` requerido |
| `servicioRelacionado` | `reference → servicio` | `SanityRef` | — | opcional |
| `destacado` | `boolean` | `boolean` | — | default `false` · si `true`, aparece en Home |
| `orden` | `number` | `number` | — | para ordenar manualmente en listados |
| `cliente` | `string` | `string` | — | nombre del cliente (no se muestra público por defecto) |
| `fechaFinalizacion` | `date` | `string` | — | ISO date |

---

### `articulo`

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'articulo'` | auto | — |
| `titulo` | `string` | `string` | ✅ | max 120 chars |
| `slug` | `slug` | `{ current: string }` | ✅ | preservar slug original de WordPress |
| `resumen` | `text` | `string` | ✅ | max 300 chars · usado en SEO description y cards |
| `cuerpo` | `blockContent` | `PortableTextBlock[]` | ✅ | Portable Text |
| `imagenDestacada` | `image` | `SanityImage` | ✅ | `alt` requerido |
| `categorias` | `array of string` | `string[]` | — | taxonomía libre |
| `fechaPublicacion` | `date` | `string` | ✅ | ISO date |
| `autor` | `string` | `string` | — | default: `'Equipo Paisare'` |
| `publicado` | `boolean` | `boolean` | — | default `false` · flag de visibilidad |

---

### `servicio`

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'servicio'` | auto | — |
| `nombre` | `string` | `string` | ✅ | max 80 chars |
| `slug` | `slug` | `{ current: string }` | ✅ | — |
| `icono` | `string` | `string` | — | nombre del icono SVG en `assets/icons/` |
| `descripcionCorta` | `string` | `string` | ✅ | max 200 chars · usado en cards del Home |
| `descripcionLarga` | `blockContent` | `PortableTextBlock[]` | ✅ | Portable Text · página individual |
| `imagenes` | `array of image` | `SanityImage[]` | — | galería de la página del servicio |
| `proyectosRelacionados` | `array of reference → proyecto` | `SanityRef[]` | — | máx 6 |
| `orden` | `number` | `number` | — | para controlar el orden en el Hub |

---

### `producto`

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'producto'` | auto | — |
| `nombre` | `string` | `string` | ✅ | max 120 chars |
| `slug` | `slug` | `{ current: string }` | ✅ | — |
| `descripcion` | `blockContent` | `PortableTextBlock[]` | ✅ | Portable Text |
| `imagenes` | `array of image` | `SanityImage[]` | ✅ | min 1 · primera imagen es la principal |
| `precio` | `number` | `number` | ✅ | en MXN · IVA incluido |
| `rangoPrecio` | `boolean` | `boolean` | — | default `false` · si `true`, mostrar `precioHasta` |
| `precioHasta` | `number` | `number \| undefined` | — | visible solo si `rangoPrecio == true` |
| `categoriaProducto` | `string` | `string` | ✅ | options: `'plantas'` · `'sustratos'` · `'riego'` · `'macetas'` · `'materiales'` |
| `disponible` | `boolean` | `boolean` | — | default `true` · si `false`, no aparece en tienda |
| `sku` | `string` | `string` | — | código interno opcional |
| `peso` | `number` | `number` | — | en kg · para cálculo de envío |

---

### `paginaCliente`

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'paginaCliente'` | auto | — |
| `nombreProyecto` | `string` | `string` | ✅ | nombre visible en la página del cliente |
| `slug` | `slug` | `{ current: string }` | ✅ | define la URL `/cliente/[slug]` |
| `emailCliente` | `string` | `string` | ✅ | validación de formato email · usado en Cloudflare Access policy |
| `estado` | `string` | `'en_proceso' \| 'en_revision' \| 'entregado' \| 'pausado'` | ✅ | opciones predefinidas |
| `actualizaciones` | `array of object` | `Actualizacion[]` | — | ver sub-campos abajo |
| `actualizaciones[].fecha` | `date` | `string` | ✅ | dentro de cada actualización |
| `actualizaciones[].texto` | `text` | `string` | ✅ | descripción del avance |
| `actualizaciones[].imagenes` | `array of image` | `SanityImage[]` | — | fotos del avance |
| `documentos` | `array of file` | `SanityFile[]` | — | planos, cotizaciones, contratos |
| `documentos[].nombre` | `string` | `string` | ✅ | nombre legible del archivo |
| `encargado` | `string` | `string` | — | nombre del responsable del proyecto en Paisare |
| `fechaInicio` | `date` | `string` | — | ISO date |
| `fechaEntregaEstimada` | `date` | `string` | — | ISO date |

---

### `testimonio`

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'testimonio'` | auto | — |
| `texto` | `text` | `string` | ✅ | max 500 chars |
| `autor` | `string` | `string` | ✅ | nombre del cliente |
| `plataforma` | `string` | `'homify' \| 'google' \| 'facebook' \| 'directo'` | ✅ | opciones predefinidas |
| `fecha` | `date` | `string` | — | ISO date |
| `visible` | `boolean` | `boolean` | — | default `true` |
| `orden` | `number` | `number` | — | para controlar el orden en Home |

---

### `faqItem`

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'faqItem'` | auto | — |
| `pregunta` | `string` | `string` | ✅ | max 200 chars |
| `respuesta` | `blockContent` | `PortableTextBlock[]` | ✅ | Portable Text — permite listas y links |
| `orden` | `number` | `number` | ✅ | entero positivo · define el orden visual |
| `visible` | `boolean` | `boolean` | — | default `true` |
| `categoria` | `string` | `'general' \| 'proyectos' \| 'tienda' \| 'mantenimiento'` | — | para filtrar en el futuro |

---

### `pedido` *(creado automáticamente por el webhook — no editable manualmente)*

| Campo | Tipo Sanity | TypeScript | Required | Validaciones / Notas |
|---|---|---|---|---|
| `_type` | — | `'pedido'` | auto | — |
| `productoRef` | `reference → producto` | `SanityRef` | ✅ | — |
| `nombreProducto` | `string` | `string` | ✅ | snapshot en el momento de la compra |
| `cantidad` | `number` | `number` | ✅ | — |
| `montoTotal` | `number` | `number` | ✅ | en MXN |
| `mpPaymentId` | `string` | `string` | ✅ | ID de pago de Mercado Pago |
| `estado` | `string` | `'pendiente' \| 'pagado' \| 'enviado' \| 'cancelado'` | ✅ | — |
| `emailComprador` | `string` | `string` | — | si Mercado Pago lo provee |
| `fechaPago` | `date` | `string` | ✅ | ISO date |
| `notasEnvio` | `text` | `string` | — | para el equipo de Paisare |

---

## Apéndice B — Inventario de componentes Astro

> Convención: `Props` = interface TypeScript de las props del componente. `SanityImage` = `{ asset: { url: string }, alt: string }`. `SanityRef` = `{ _ref: string }`. `PortableTextBlock[]` = tipo de `@portabletext/react`.

### Layouts

```typescript
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
  ogImage?: string;          // URL absoluta o relativa desde /public
  schema?: Record<string, unknown>; // JSON-LD — serializado en <script type="application/ld+json">
  activeRoute?: string;      // p.ej. '/blog/' para activar link en nav
}
```

```typescript
// src/layouts/BlogLayout.astro
interface Props {
  articulo: {
    titulo: string;
    resumen: string;
    imagenDestacada: SanityImage;
    fechaPublicacion: string;   // ISO date
    categorias?: string[];
    slug: { current: string };
    autor?: string;
  };
}
```

---

### Componentes globales

```typescript
// src/components/Nav.astro
interface Props {
  activeRoute?: string;  // ruta activa para aplicar clase .active
}
```

```typescript
// src/components/Footer.astro
// Sin props — consume src/lib/config.ts
```

---

### Componentes de secciones / Home

```typescript
// src/components/Hero.astro
interface Props {
  slides: Array<{
    image: SanityImage | string;  // SanityImage o ruta local
    title: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
  }>;
}
```

```typescript
// src/components/ServiceCard.astro
interface Props {
  servicio: {
    nombre: string;
    slug: { current: string };
    descripcionCorta: string;
    icono?: string;
    imagenes?: SanityImage[];
  };
}
```

```typescript
// src/components/PortfolioGrid.astro
// client:load (Astro island) — maneja filtros y modal en el cliente
interface Props {
  proyectos: Array<{
    _id: string;
    titulo: string;
    slug: { current: string };
    categorias: string[];
    imagenes: SanityImage[];
    descripcion: PortableTextBlock[];
  }>;
  mostrarFiltros?: boolean;  // default true
  limite?: number;           // cuántos mostrar inicialmente (default 6)
}
```

```typescript
// src/components/PortfolioModal.astro
// Usado internamente por PortfolioGrid
interface Props {
  proyecto: {
    titulo: string;
    categorias: string[];
    descripcion: PortableTextBlock[];
    imagenes: SanityImage[];
  } | null;
  open: boolean;
}
```

```typescript
// src/components/BlogCard.astro
interface Props {
  articulo: {
    titulo: string;
    slug: { current: string };
    resumen: string;
    imagenDestacada: SanityImage;
    fechaPublicacion: string;
    categorias?: string[];
  };
}
```

```typescript
// src/components/TestimonialCard.astro
interface Props {
  testimonio: {
    texto: string;
    autor: string;
    plataforma: 'homify' | 'google' | 'facebook' | 'directo';
    fecha?: string;
  };
}
```

```typescript
// src/components/FAQAccordion.astro
interface Props {
  items: Array<{
    pregunta: string;
    respuesta: PortableTextBlock[];
    orden: number;
  }>;
  generarSchema?: boolean;  // si true, incluye <script type="application/ld+json"> con FAQPage
}
```

```typescript
// src/components/ContactForm.astro
// client:load (Astro island)
interface Props {
  web3formsKey: string;      // desde import.meta.env.PUBLIC_WEB3FORMS_KEY
  destinationEmail: string;  // contacto@paisare.com
}
```

```typescript
// src/components/ClienteTimeline.astro
interface Props {
  actualizaciones: Array<{
    fecha: string;
    texto: string;
    imagenes?: SanityImage[];
  }>;
}
```

---

### Pages

```
src/pages/
├── index.astro                   → /
├── nosotros.astro                → /nosotros/
├── contacto.astro                → /contacto/
├── faq/
│   └── index.astro               → /faq/
├── portafolio/
│   ├── index.astro               → /portafolio/
│   └── [slug].astro              → /portafolio/[slug]  (SSG, getStaticPaths)
├── blog/
│   ├── index.astro               → /blog/  (página 1)
│   ├── [page].astro              → /blog/[page]  (paginación, SSG)
│   ├── [slug].astro              → /blog/[slug]  (SSG, getStaticPaths)
│   └── rss.xml.ts                → /blog/rss.xml
├── servicios/
│   ├── index.astro               → /servicios/
│   └── [slug].astro              → /servicios/[slug]  (SSG, getStaticPaths)
├── tienda/
│   ├── index.astro               → /tienda/
│   ├── [slug].astro              → /tienda/[slug]  (SSG, getStaticPaths)
│   └── confirmacion.astro        → /tienda/confirmacion
└── cliente/
    └── [slug].astro              → /cliente/[slug]  (SSR — output: 'server')
```

---

## Apéndice C — Mapa de rutas completo

| URL | Tipo | Fuente de datos | Schema.org | Indexable |
|---|---|---|---|---|
| `/` | Static | Sanity: proyectos, testimonios, articulos, faqItems, servicios | `LocalBusiness` + `FAQPage` | ✅ |
| `/nosotros/` | Static | `src/lib/config.ts` + Sanity (opcional) | `Organization` | ✅ |
| `/contacto/` | Static | `src/lib/config.ts` | `LocalBusiness` | ✅ |
| `/faq/` | Static | Sanity: `faqItem[]` | `FAQPage` | ✅ |
| `/portafolio/` | Static | Sanity: `proyecto[]` + categorías | `ItemList` | ✅ |
| `/portafolio/[slug]` | Dynamic SSG | Sanity: `proyecto` by slug | `CreativeWork` + `BreadcrumbList` | ✅ |
| `/blog/` | Static | Sanity: `articulo[]` (paginado, page 1) | `Blog` | ✅ |
| `/blog/[page]` | Dynamic SSG | Sanity: `articulo[]` (paginado) | `Blog` | ✅ |
| `/blog/[slug]` | Dynamic SSG | Sanity: `articulo` by slug | `Article` + `BreadcrumbList` | ✅ |
| `/blog/rss.xml` | Static | Sanity: últimos 20 `articulo` | RSS Feed | ✅ |
| `/servicios/` | Static | Sanity: `servicio[]` | `ItemList` | ✅ |
| `/servicios/[slug]` | Dynamic SSG | Sanity: `servicio` by slug | `Service` + `BreadcrumbList` | ✅ |
| `/tienda/` | Static | Sanity: `producto[]` disponibles | `ItemList` | ✅ |
| `/tienda/[slug]` | Dynamic SSG | Sanity: `producto` by slug | `Product` + `BreadcrumbList` | ✅ |
| `/tienda/confirmacion` | Static | Query params de Mercado Pago | ninguno | ❌ (`noindex`) |
| `/cliente/[slug]` | **SSR (Worker)** | Sanity: `paginaCliente` by slug + CF Access token | ninguno | ❌ (bloqueado por `robots.txt` + CF Access) |
| `/sitemap.xml` | Static | Todas las rutas indexables | — | ✅ |
| `/robots.txt` | Static | Hardcoded | — | ✅ |
| `/api/checkout` | Worker (POST) | Body: `{ slug, quantity }` | — | ❌ |
| `/api/mp-webhook` | Worker (POST) | Mercado Pago webhook payload | — | ❌ |

**Rutas bloqueadas en `robots.txt`:**
```
Disallow: /cliente/
Disallow: /studio/
Disallow: /tienda/confirmacion
Disallow: /api/
```

---

## Apéndice D — Variables de entorno

| Variable | Prefijo | Fuente | Dónde se usa | Required |
|---|---|---|---|---|
| `PUBLIC_SANITY_PROJECT_ID` | `PUBLIC_` | Sanity dashboard → API → Project ID | Astro (client + server) · Workers | ✅ |
| `PUBLIC_SANITY_DATASET` | `PUBLIC_` | `'production'` (default de Sanity) | Astro (client + server) | ✅ |
| `PUBLIC_WEB3FORMS_KEY` | `PUBLIC_` | web3forms.com → dashboard → API key | `ContactForm.astro` (island) | ✅ |
| `SANITY_API_TOKEN` | privada | Sanity dashboard → API → Tokens → crear token con rol "Read" | `src/lib/sanity.ts` (solo server-side en SSR y Workers) | ✅ |
| `MP_ACCESS_TOKEN` | privada | Mercado Pago developers → Mis credenciales → Access token (producción) | `workers/checkout/index.ts` | Requerida para Fase 6 |
| `MP_WEBHOOK_SECRET` | privada | Mercado Pago → Notificaciones → IPN → secret | `workers/checkout/index.ts` (validar firma) | Requerida para Fase 6 |
| `CF_ACCESS_AUD` | privada | Cloudflare Zero Trust → Applications → Application Audience Tag | `pages/cliente/[slug].astro` (verificar JWT) | Requerida para Fase 5 |

**Dónde configurarlas:**
- Desarrollo local: `astro-site/.env` (nunca commitear — en `.gitignore`)
- Cloudflare Pages: Settings → Environment variables → Production + Preview
- Cloudflare Workers: `wrangler.toml` → `[vars]` para variables no sensibles; secrets via `wrangler secret put`

**Template `.env.example` (commitear este archivo):**
```env
# Sanity — obtener en sanity.io/manage → Project API
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=production

# Web3Forms — obtener en web3forms.com
PUBLIC_WEB3FORMS_KEY=

# Sanity API Token (privado — con rol "Read")
SANITY_API_TOKEN=

# Mercado Pago — obtener en developers.mercadopago.com
MP_ACCESS_TOKEN=
MP_WEBHOOK_SECRET=

# Cloudflare Access — obtener en Zero Trust dashboard
CF_ACCESS_AUD=
```

---

## Apéndice E — Estrategia de ramas git por fase

| Fase | Rama | PR esperado | Criterio de merge | Aprueba |
|---|---|---|---|---|
| 1 (completado) | `feat/lote-1a-config` | #2 ✅ | — | — |
| 1 (completado) | `feat/lote-1b-cleanup` | #3 ✅ | — | — |
| 1 (completado) | `feat/lote-2-home` | #4 ✅ | — | — |
| docs (completado) | `docs/epics-detallados` | #5 | Apéndices completos + stories mejoradas | Eduardo |
| 2 — Setup infra | `feat/fase-2-astro` | #6 | CI verde · preview deploy en `nuevo.paisare.com` · TypeScript sin errores | Eduardo |
| 3 — Migración contenido | `feat/fase-3-content` | #7 | Artículos + proyectos visibles en Sanity Studio · redirecciones 301 verificadas | Eduardo |
| 4 — Componentes Astro | `feat/fase-4-components` | #8 | Todas las páginas renderizan · Lighthouse ≥ 85 mobile · formulario de contacto entrega correo | Eduardo |
| 5 — Páginas cliente | `feat/fase-5-clientes` | #9 | `/cliente/test` funciona con CF Access · emails no autorizados bloqueados | Eduardo |
| 6 — Tienda | `feat/fase-6-tienda` | #10 | Checkout Mercado Pago completa en sandbox · webhook crea `pedido` en Sanity | Eduardo |
| 7 — SEO + Performance | `feat/fase-7-seo` | #11 | Lighthouse ≥ 90 mobile · sitemap.xml válido · Schema.org pasa Rich Results Test | Eduardo |
| 8 — Launch | `feat/fase-8-launch` | #12 | Checklist QA Story 11.2 completo · aprobación escrita del cliente | Eduardo + Cliente |
| 9 — Post-launch | `feat/fase-9-ops` | #13 | Guías de editor completas · evaluación Umbrel Pro documentada | Eduardo |

**Reglas permanentes:**
- Nunca commit directo a `main` — siempre rama + PR
- Naming de ramas de fix: `fix/descripcion-corta`
- Naming de ramas de docs: `docs/descripcion-corta`
- Preview deploy activo en cada PR (Cloudflare Pages nativo)
- Un PR por fase (no mezclar features de fases distintas)
- Mergear solo cuando CI verde y preview deploy funcional
