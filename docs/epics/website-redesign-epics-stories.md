# Epics & Stories — Paisare Web · Astro + Sanity + Cloudflare
**Stack confirmado:** Astro · Sanity CMS · Cloudflare Pages/Workers/Access · Mercado Pago  
**Fecha de decisión:** 2026-04-28  
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
**Objetivo:** Tener el pipeline completo funcionando antes de migrar contenido.

### Story 3.1 — Inicializar proyecto Astro
**Criterios:**
- `npm create astro@latest` con TypeScript y modo SSG
- Estructura de carpetas: `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`
- Deploy inicial a Cloudflare Pages desde GitHub (CI/CD automático al hacer push a main)
- Subdominio de preview: `nuevo.paisare.com` o rama separada en CF Pages

### Story 3.2 — Crear workspace de Sanity + schemas iniciales
**Criterios:**
- Workspace en `sanity.io` bajo el correo del proyecto
- Schemas definidos: `proyecto` · `articulo` · `servicio` · `producto` · `paginaCliente` · `testimonio` · `faqItem`
- Sanity Studio desplegado en `studio.paisare.com` (Cloudflare Pages o sanity.io/manage)
- Validaciones básicas en schemas (campos requeridos, tipos de imagen)

### Story 3.3 — Conectar Astro con Sanity (GROQ queries)
**Criterios:**
- `@sanity/client` configurado con project ID y dataset
- Helpers en `src/lib/sanity.ts` para queries reutilizables
- Variables de entorno en `.env` y en Cloudflare Pages dashboard
- Build en CI/CD verifica que queries no fallen si Sanity está vacío

### Story 3.4 — Configurar dominio y DNS en Cloudflare
**Criterios:**
- Dominio `paisare.com` en Cloudflare DNS (WordPress sigue activo en el subdominio temporal o en el mismo host)
- `nuevo.paisare.com` apunta al Cloudflare Pages del nuevo sitio
- `studio.paisare.com` apunta al Sanity Studio
- SSL automático para todos los subdominios

### Story 3.5 — Setup CI/CD (GitHub → Cloudflare Pages)
**Criterios:**
- Push a `main` dispara deploy automático
- Variables de entorno de Sanity disponibles en el build
- Preview deploys para cada PR (Cloudflare Pages lo hace nativamente)

**Bloqueantes:**
- [ ] Crear cuenta en Cloudflare (si no existe)
- [ ] Crear workspace en Sanity
- [ ] Acceso al DNS del dominio `paisare.com`

---

## Epic 4 — Migración de contenido desde WordPress
**Estado: PENDIENTE** (depende de Epic 3)

### Story 4.1 — Exportar artículos del blog de WordPress a Sanity
**Criterios:**
- Script de migración: WP export XML → Sanity documents (vía `sanity-import` o script Node.js)
- Preservar: título, slug, fecha, contenido (Portable Text), imagen destacada, categorías
- URLs idénticas a las actuales (`/blog/slug-del-articulo`) para no perder SEO
- Artículos importados visibles en Sanity Studio antes de pasar a Fase 3

### Story 4.2 — Inventario de URLs de WordPress
**Criterios:**
- Archivo `docs/audit/url-inventory.md` con todas las URLs públicas actuales
- Identificar URLs que cambiarán y crear mapa de redirecciones 301
- Redirecciones implementadas en `_redirects` (Cloudflare Pages) o Cloudflare Worker

### Story 4.3 — Migrar portafolio existente a Sanity
**Criterios:**
- 6 proyectos actuales del prototipo HTML creados como documentos en Sanity
- Imágenes descargadas localmente (o subidas a Sanity Assets) — no servidas desde `paisare.com/wp-content`
- Datos: nombre, slug, categorías, descripción, array de imágenes, servicios relacionados

### Story 4.4 — Migrar testimonios a Sanity
**Criterios:**
- 3 testimonios de Homify creados como documentos `testimonio` en Sanity
- Listos para agregar más (Google, Facebook) sin cambios de código

**Bloqueantes:**
- [ ] Acceso al panel de administración WordPress (para exportar XML)
- [ ] Inventario de imágenes completado (D11)

---

## Epic 5 — Conversión del prototipo HTML a componentes Astro
**Estado: PENDIENTE** (depende de Epic 3)  
**Referencia:** `Paisare Redesign.html` es el diseño base — se modulariza, no se rediseña.

### Story 5.1 — Layout base (nav + footer + head SEO)
**Criterios:**
- Componente `BaseLayout.astro` con: meta tags dinámicos, OG, Schema.org por página, favicon
- Nav con links activos según la ruta actual
- Footer con datos de contacto reales (de `src/lib/config.ts`, equivalente al `config.js` actual)
- Mobile nav funcional (hamburger)

### Story 5.2 — Página Home (`/`)
**Criterios:**
- Hero con slider (imágenes desde Sanity o assets locales)
- Sección Servicios (6 cards: Paisajismo · Construcción · Riego · Mantenimiento · Lagos · Tienda)
- Sección Nosotros (datos de Sanity o hardcoded si no cambia)
- Portafolio preview: grid de 4-6 proyectos recientes de Sanity + botón "Ver todos"
- Testimonios: últimos 3 de Sanity
- FAQ: primeros 5-6 items de Sanity
- Proceso (pasos fijos, no necesita Sanity)
- Preview de últimos 3 artículos del blog (de Sanity)
- Sección Clientes (logos de Sanity o assets locales)
- Contacto con formulario funcional (Web3Forms)

### Story 5.3 — Portafolio (`/portafolio/` + `/portafolio/[slug]`)
**Criterios:**
- Grid con filtros por categoría (data de Sanity)
- Página de detalle por proyecto: galería lightbox, descripción, servicios relacionados, CTA WA
- Botón "Ver más proyectos" (paginación o load more)
- Schema `CreativeWork` por proyecto para SEO

### Story 5.4 — Blog (`/blog/` + `/blog/[slug]`)
**Criterios:**
- Listado paginado (12 por página) ordenado por fecha
- Página de artículo: contenido Portable Text renderizado, imagen destacada, fecha, categorías
- Schema `Article` para SEO
- Links a artículos relacionados (por categoría)
- Feed RSS en `/blog/rss.xml`

### Story 5.5 — Servicios (`/servicios/` + `/servicios/[slug]`)
**Criterios:**
- Hub de servicios con las 5-6 categorías
- Página individual por servicio: descripción detallada, galería, proyectos relacionados del portafolio, CTA
- Schema `Service`

### Story 5.6 — FAQ completo
**Criterios:**
- Datos de Sanity (tipo `faqItem`): pregunta, respuesta, orden
- Accordion animado (CSS nativo `<details>`, igual que en el prototipo)
- Schema `FAQPage` dinámico desde los datos de Sanity

### Story 5.7 — Página Nosotros (`/nosotros/`)
**Criterios:**
- Misión, visión, historia, equipo (con foto si el cliente la provee)
- CTA a WhatsApp o formulario de contacto
- Schema `Organization`

### Story 5.8 — Contacto y cotización (`/contacto/`)
**Criterios:**
- Formulario funcional via Web3Forms o CF Worker
- WhatsApp contextual
- Datos de contacto reales
- Honeypot antispam

---

## Epic 6 — Páginas privadas de cliente
**Estado: PENDIENTE** (depende de Epic 5)

### Story 6.1 — Schema "Proyecto de cliente" en Sanity
**Criterios:**
- Tipo `paginaCliente` en Sanity con: nombre del cliente, email (para Cloudflare Access), slug único, array de actualizaciones (fecha + texto + fotos), documentos adjuntos, estado del proyecto
- Solo visible para el equipo de Paisare en Studio — el cliente ve una vista de solo lectura

### Story 6.2 — Ruta protegida en Astro + Cloudflare Workers
**Criterios:**
- Ruta `/cliente/[slug]` servida por Cloudflare Worker (SSR, no estática)
- Worker verifica el token de Cloudflare Access antes de servir el contenido
- Si no hay token válido → redirect a la pantalla de login de Cloudflare Access

### Story 6.3 — Configurar Cloudflare Access para `/cliente/*`
**Criterios:**
- Zero Trust application creada para `paisare.com/cliente/*`
- Policy: "Emails que terminan en @..." o lista de correos específicos por proyecto
- One-time PIN via email (magic link) — sin contraseñas
- Gratuito hasta 50 usuarios activos

### Story 6.4 — UI de página de cliente
**Criterios:**
- Nombre del proyecto, estado actual (etapa, % avance)
- Timeline de actualizaciones (fecha + texto + fotos de avance)
- Sección de documentos descargables (planos, cotizaciones aprobadas)
- Botón de contacto directo con el encargado del proyecto

### Story 6.5 — Flujo para que Paisare cargue actualizaciones
**Criterios:**
- Paisare entra a Sanity Studio, encuentra el proyecto del cliente, agrega una actualización con fotos y texto
- Al guardar en Sanity, se hace disponible de inmediato (SSR, no requiere rebuild)
- No se notifica automáticamente al cliente (notificación manual por ahora, automatizar después)

**Bloqueantes:**
- [ ] Lista de primeros clientes que usarán este feature (para crear los documentos en Sanity)
- [ ] Cloudflare Zero Trust configurado (Story 3.4)

---

## Epic 7 — Tienda (Mercado Pago, sin costo fijo)
**Estado: PENDIENTE** (depende de Epic 5 + catálogo de productos)

### Story 7.1 — Catálogo de productos en Sanity
**Criterios:**
- Tipo `producto` con: nombre, slug, descripción, fotos, precio (o rango), categoría, disponibilidad, SKU opcional
- Categorías: plantas, sustratos, riego (accesorios), macetas, materiales pétreos
- Datos reales del cliente (sin precios inventados)

### Story 7.2 — Páginas de tienda (`/tienda/` + `/tienda/[slug]`)
**Criterios:**
- Listado con filtros por categoría
- Ficha de producto: fotos, descripción, precio, botón "Comprar"
- Schema `Product` para SEO

### Story 7.3 — Checkout con Mercado Pago
**Criterios:**
- Cloudflare Worker crea una sesión de Mercado Pago Checkout Pro
- Usuario redirigido a página de pago de Mercado Pago (alojada por ellos)
- Webhook de confirmación procesado por Worker → marcar pedido como pagado en Sanity
- Página de confirmación en `/tienda/confirmacion`
- Sin costo mensual fijo, solo ~3.5% por transacción exitosa

### Story 7.4 — Gestión de pedidos
**Criterios:**
- Documento `pedido` en Sanity creado al recibir webhook de Mercado Pago
- Vista en Sanity Studio para que el equipo vea pedidos pendientes
- Notificación por correo al equipo de Paisare (via CF Worker → email)

**Bloqueantes:**
- [ ] Catálogo de productos con nombres, categorías y precios (el cliente debe proveer)
- [ ] Cuenta de Mercado Pago Seller con API keys
- [ ] Políticas de devolución y envío definidas (antes de activar)

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
