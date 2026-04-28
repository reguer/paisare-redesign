# Epics & Stories — Paisare Redesign + Tienda en línea + Migración WordPress segura
**Archivo canónico**  
**Fecha:** 2026-04-27  
**Fuente:** Documento aprobado por el cliente, adaptado al estado del repositorio

---

## 1. Objetivo general

Evolucionar la plantilla base existente de Paisare hacia un sitio completo, profesional, mobile-first, orientado a conversión y preparado para tienda en línea, sin romper el contenido ni el posicionamiento del sitio actual en WordPress.

El proyecto se ejecuta por fases, con revisión parcial antes de cualquier migración real.

La plantilla actual ya contiene una base visual funcional con hero, servicios, estadísticas, portafolio, proceso, artículos, clientes, contacto, formulario, WhatsApp flotante y diseño responsivo. El trabajo consiste en auditar, modularizar, mejorar, extender y preparar esa base para integrarse con un CMS y con una tienda en línea.

---

## 2. Alcance funcional

### 2.1 Sitio institucional
Inicio · Servicios · Páginas individuales de servicios · Portafolio · Casos de estudio · Artículos · Comentarios · Nosotros · Contacto · Cotización · WhatsApp contextual · Formularios protegidos · SEO técnico · Schema · Analytics · Migración controlada desde WordPress.

### 2.2 Tienda en línea
Página principal · Categorías · Listado · Ficha de producto · Productos variables · Productos cotizables · Productos por m² · Productos con instalación opcional · Carrito · Checkout · Solicitud por WA · Cotización sin precio fijo · Inventario · Envíos/recolección · Métodos de pago · Políticas legales · Integración WooCommerce.

---

## 3. Principio rector

La plantilla actual es el punto de partida visual y técnico. No se reemplaza sin diagnóstico. Los cambios se organizan como:

Inspección → Documentación → Mapeo → Modularización → Mejora visual → Mejora de conversión → Extensión hacia tienda → Preparación CMS → Preparación SEO → Migración controlada → Lanzamiento.

---

## Epic 1 — Auditoría del repositorio existente

### Story 1.1 — Inspeccionar estructura del repositorio
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos generados:** `docs/audit/repo-audit.md`, `docs/audit/current-structure.md`, `docs/audit/risk-log.md`

### Story 1.2 — Mapear plantilla actual
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos generados:** `docs/design/current-template-map.md`, `docs/design/component-inventory.md`

### Story 1.3 — Detectar riesgos inmediatos
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos generados:** `docs/audit/risk-log.md`, `docs/PENDING.md`

---

## Epic 2 — Agentes de trabajo y reducción de tokens

### Story 2.1 — Crear esquema de agentes
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos generados:** `docs/agents/agents-map.md`

### Story 2.2 — Crear prompts internos para agentes
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos generados:** `docs/agents/agent-prompts.md`

---

## Epic 3 — Sistema de diseño sobre plantilla actual

### Story 3.1 — Documentar sistema visual actual
**Estado:** Completado parcialmente (Fase 0) — inventario en `docs/design/component-inventory.md`  
**Pendiente:** `docs/design/design-system-current.md` (Fase 1)

### Story 3.2 — Definir sistema visual extendido
**Estado:** Pendiente (Fase 1+)  
**Archivos esperados:** `docs/design/design-system-extended.md`, `docs/design/ecommerce-ui-components.md`

---

## Epic 4 — Navegación y arquitectura de información

### Story 4.1 — Redefinir navegación desktop
**Estado:** Pendiente (Fase 2)  
**Archivos esperados:** `docs/ia/navigation-model.md`  
**Propuesta:** Inicio · Servicios (dropdown) · Portafolio · Tienda · Artículos · Nosotros · Contacto · CTA "Cotizar"

### Story 4.2 — Redefinir navegación mobile
**Estado:** Pendiente (Fase 2)  
**Archivos esperados:** `docs/ia/mobile-navigation-model.md`  
**Propuesta:** Menú hamburger + sticky bar inferior: WA / Llamar / Tienda / Cotizar

---

## Epic 5 — Home evolutiva

### Story 5.1 — Mejorar hero actual
**Estado:** Pendiente (Fase 2)  
**Archivos esperados:** `docs/home/hero-redesign.md`  
**Criterios:** H1 claro en 5 segundos · CTA doble: cotizar proyecto + tienda · Sin datos no validados

### Story 5.2 — Reestructurar servicios en home
**Estado:** Pendiente (Fase 2)  
**Archivos esperados:** `docs/home/services-section-plan.md`  
**Propuesta:** 6 cards: Paisajismo · Construcción · Riego · Mantenimiento · Lagos · Tienda

### Story 5.3 — Agregar bloque de tienda en home
**Estado:** Pendiente (Fase 2/3)  
**Archivos esperados:** `docs/home/store-section-plan.md`  
**Criterios:** Sin precios falsos · Productos marcados pendientes si no hay datos reales

### Story 5.4 — Sección Nosotros
**Estado:** Completado (Lote 1B+, 2026-04-28) — misión, visión, quiénes somos con contenido real  
**Pendiente Fase 4:** Foto real del equipo · Página interior `/nosotros/` en WordPress  
**Implementación actual:** Sección estática en prototipo HTML

### Story 5.5 — Sección Testimonios
**Estado:** Completado (Lote 1B+, 2026-04-28) — 3 reseñas reales de Homify  
**Pendiente Fase 4:** Más testimonios (Google, Facebook) · CPT `testimonio` en WordPress

### Story 5.6 — Sección FAQ
**Estado:** Completado borrador (Lote 2, 2026-04-28) — 10 preguntas autogeneradas con Schema FAQPage  
**Pendiente:** Cliente revise y afine respuestas · CPT `faq` en WordPress (Fase 5)

---

## Epic 6 — Servicios

### Story 6.1 — Crear hub de servicios
**Estado:** Pendiente (Fase 4)

### Story 6.2 — Servicio: Paisajismo y diseño de jardines
**Estado:** Pendiente (Fase 4)  
**Productos relacionados:** Plantas · Pasto · Sustratos · Piedra · Macetas · Iluminación

### Story 6.3 — Servicio: Sistemas de riego
**Estado:** Pendiente (Fase 4)  
**Productos relacionados:** Aspersores · Tubería · Conectores · Válvulas · Controladores · Bombas

### Story 6.4 — Servicio: Mantenimiento
**Estado:** Pendiente (Fase 4)  
**Productos relacionados:** Tierra · Pasto de reposición · Refacciones de riego

### Story 6.5 — Servicio: Lagos, estanques y albercas naturales
**Estado:** Pendiente (Fase 4)  
**Productos relacionados:** Bombas · Filtros · Tuberías · Plantas acuáticas · Piedra

---

## Epic 7 — Portafolio y casos de estudio

### Story 7.1 — Mejorar grid de portafolio
**Estado:** Pendiente (Fase 4)  
**Criterios:** No perder proyectos · Conectar con servicios y productos

### Story 7.2 — Crear plantilla de caso de estudio
**Estado:** Pendiente (Fase 4)  
**Estructura:** Problema · Solución · Materiales · Riego · Resultado · Galería · Productos · Servicios

---

## Epic 8 — Artículos, comentarios y antispam

### Story 8.1 — Preservar artículos existentes
**Estado:** Pendiente (Fase 5)  
**Criterios:** Ningún post perdido · Slugs conservados · Sin artículos inventados publicados como reales

### Story 8.2 — Preservar comentarios
**Estado:** Pendiente (Fase 5)  
**Criterios:** Solo comentarios aprobados · Antispam activo · Formulario funcional

### Story 8.3 — Mejorar plantilla de artículo
**Estado:** Pendiente (Fase 5)  
**Propuesta:** Tabla de contenidos · Fecha de actualización · CTA contextual · Productos relacionados

---

## Epic 9 — Tienda en línea

### Story 9.1 — Definir arquitectura ecommerce
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos:** `docs/ecommerce/ecommerce-architecture.md`, `docs/ecommerce/woocommerce-fit-analysis.md`

### Story 9.2 — Definir categorías de productos
**Estado:** Borrador (Fase 0) — 17 categorías definidas en `docs/ecommerce/ecommerce-architecture.md`  
**Pendiente:** Validación con cliente (P9)

### Story 9.3 — Definir modelo de producto
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos:** `docs/ecommerce/product-catalog-model.md`

### Story 9.4 — Diseñar ficha de producto
**Estado:** Pendiente (Fase 3)  
**Archivos:** `docs/ecommerce/storefront-user-flow.md` tiene estructura base

### Story 9.5 — Carrito y checkout
**Estado:** Pendiente (Fase 6) — bloqueado por P6, P7, P8, P9, P13

### Story 9.6 — Tienda MVP (catálogo cotizable)
**Estado:** Pendiente (Fase 3)  
**Criterios:** Catálogo visual · WA por producto · Sin checkout hasta definir reglas comerciales

---

## Epic 10 — Formularios y flujos de contacto

### Story 10.1 — Formulario de cotización de proyecto
**Estado:** Pendiente (Fase 3/5) — bloqueado por P1, P2 y backend real

### Story 10.2 — Formulario de producto/tienda
**Estado:** Pendiente (Fase 3) — bloqueado por P1, P2 y backend real

### Story 10.3 — Formulario de mantenimiento
**Estado:** Pendiente (Fase 4) — bloqueado por P1, P2 y backend real

---

## Epic 11 — WhatsApp contextual

### Story 11.1 — Crear mapa de mensajes WhatsApp
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos:** `docs/strategy/whatsapp-flow-map.md`  
**Pendiente:** Número real (P1)

---

## Epic 12 — WordPress, WooCommerce y CMS

### Story 12.1 — Evaluar WordPress moderno + WooCommerce
**Estado:** Completado (Fase 0, 2026-04-27)  
**Decisión:** WordPress tradicional + WooCommerce + tema propio ligero (D01)  
**Archivos:** `docs/cms/wordpress-integration-plan.md`, `docs/ecommerce/woocommerce-fit-analysis.md`

### Story 12.2 — Definir Custom Post Types
**Estado:** Completado (Fase 0, 2026-04-27)  
**Archivos:** `docs/cms/custom-post-types.md`, `docs/cms/content-model.md`

---

## Epic 13 — SEO técnico y migración

### Story 13.1 — Inventario de URLs
**Estado:** Plantilla creada (Fase 0) — inventario real pendiente (Fase 0.5, bloqueado por P11, P12)

### Story 13.2 — Mapa de redirecciones
**Estado:** Plantilla creada (Fase 0) — mapa real pendiente (Fase 7)

### Story 13.3 — Schema.org
**Estado:** Parcialmente completado (Lote 1B, 2026-04-28) — LocalBusiness + FAQPage implementados con datos reales  
**Types pendientes (Fase 4/5):** Service · Product · Article · BreadcrumbList

---

## Epic 14 — Analytics y medición

**Estado:** Pendiente (Fase 2+)  
**Bloqueado por:** Acceso a GA4 (P11)  
**Eventos a medir:** Ver `docs/strategy/conversion-strategy.md`

---

## Epic 15 — QA y performance

**Estado:** Checklists creados (Fase 0)  
**Archivos:** `docs/qa/`  
**QA activo desde:** Lote 1A en adelante

---

## Epic 16 — Changelog, decisiones y pendientes

**Estado:** Activo  
**Archivos:** `CHANGELOG.md` · `docs/DECISIONS.md` · `docs/PENDING.md` · `docs/README.md`

---

## Epic 17 — Fases recomendadas

> **Nota de secuencia:** Las fases 0.5 y 1 (Modularización) NO bloquean la Fase 2 del prototipo HTML.
> Se pueden ejecutar en paralelo. Fase 0.5 solo se requiere antes de iniciar Fase 5 (staging WP).
> Fase 1 (Modularización) se puede diferir hasta que la estructura de Fase 2 esté aprobada.
> Performance (Epic 15) se ejecuta al final, después de estructura + imágenes + contenido definidos (D10).

| Fase | Nombre | Estado |
|---|---|---|
| 0 | Auditoría y documentación | **Completado** (2026-04-27) |
| 0.5 | Baseline real de producción WordPress | Pendiente — acceso WP/SC confirmado (P11, P12 resueltos). **No bloquea Fase 2.** |
| 1A | Centralizar WA/config | **Completado** (Lote 1A, 2026-04-27) |
| 1B | Limpiar tweaks-panel, OG/Schema, Nosotros, Testimonios, Logo real | **Completado** (Lote 1B, 2026-04-28) |
| 1 | Modularizar HTML/CSS/JS en archivos separados | Pendiente. **No bloquea Fase 2** del prototipo. Ejecutar antes de Fase 5. |
| 2 | Home mejorada: FAQ ✓ · portafolio interactivo ✓ · logos clientes · #stats eliminado ✓ · hero/nav | **En progreso** (Lote 2, 2026-04-28) |
| 3 | Tienda catálogo cotizable MVP | Pendiente (bloqueado T12: catálogo real de productos) |
| 4 | Servicios, portafolio detallado y casos de estudio | Pendiente (bloqueado T1: inventario de assets) |
| 5 | CMS / WordPress / WooCommerce (staging) | Pendiente — revisar D11: posible cambio de stack a Astro + Sanity |
| 6 | Checkout y pagos | Pendiente (bloqueado T4, T5: pasarela y CLABE) |
| 7 | Migración real a producción | Pendiente |
