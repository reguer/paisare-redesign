# Changelog

Todos los cambios notables de este proyecto se documentan aqui.

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

