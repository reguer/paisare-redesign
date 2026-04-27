# Mapa de agentes — Paisare Redesign
**Agente:** Change Manager  
**Fecha:** 2026-04-27  
**Epic/Story:** E2-S2.1

---

## Propósito

Dividir el trabajo en agentes especializados para reducir contexto repetido entre sesiones, minimizar uso de tokens y mantener salidas específicas. Cada agente tiene un scope acotado y no debe repetir el trabajo de otros.

---

## Agentes definidos

### Agente 1 — Repo Auditor
**Responsabilidad:** Inspeccionar y documentar el estado del repositorio.  
**Activa en:** Fase 0, y al inicio de cualquier nueva fase si hubo cambios estructurales.  
**Salidas:** `docs/audit/repo-audit.md`, `docs/audit/current-structure.md`, `docs/audit/risk-log.md`  
**No hace:** Modificar código ni proponer nuevas features.

### Agente 2 — Template Mapper
**Responsabilidad:** Mapear la plantilla HTML actual y el inventario de componentes.  
**Activa en:** Fase 0, y al añadir nuevas secciones o componentes.  
**Salidas:** `docs/design/current-template-map.md`, `docs/design/component-inventory.md`  
**No hace:** Proponer diseño nuevo ni tocar CSS/JS.

### Agente 3 — UX & Conversion Strategist
**Responsabilidad:** Analizar flujos de conversión, CTAs, WhatsApp y cotización.  
**Activa en:** Fase 0 (estrategia), antes de Fase 2 (home) y Fase 3 (tienda).  
**Salidas:** `docs/strategy/conversion-strategy.md`, `docs/strategy/whatsapp-flow-map.md`, `docs/strategy/quote-flow.md`  
**No hace:** Implementar código ni definir arquitectura técnica.

### Agente 4 — SEO Preservation Agent
**Responsabilidad:** Preservar posicionamiento durante el rediseño.  
**Activa en:** Fase 0 (plan), Fase 0.5 (baseline), antes de Fase 7 (migración).  
**Salidas:** `docs/seo/`  
**No hace:** Modificar código ni migrar contenido directamente.

### Agente 5 — E-commerce Architect
**Responsabilidad:** Diseñar la arquitectura de tienda en línea.  
**Activa en:** Fase 0 (arquitectura), Fase 3 (catálogo MVP), Fase 6 (checkout).  
**Salidas:** `docs/ecommerce/`  
**No hace:** Implementar WooCommerce ni definir contenido de WordPress.

### Agente 6 — CMS / WordPress Migration Agent
**Responsabilidad:** Planear la integración y migración WordPress.  
**Activa en:** Fase 0 (plan), Fase 5 (implementación), Fase 7 (migración).  
**Salidas:** `docs/cms/`  
**No hace:** Modificar el sitio de producción ni implementar la tienda.

### Agente 7 — Frontend Implementation Agent
**Responsabilidad:** Implementar cambios en HTML/CSS/JS de forma incremental.  
**Activa en:** Lotes 1A, 1B y todas las fases de implementación.  
**Salidas:** `docs/frontend/`, código en `src/`, `index.html`  
**No hace:** Modificar WordPress ni diseñar UX desde cero.

### Agente 8 — QA & Accessibility Agent
**Responsabilidad:** Verificar cada fase antes de avanzar.  
**Activa en:** Al final de cada lote o fase, antes de merge a main.  
**Salidas:** `docs/qa/`  
**No hace:** Implementar features ni migrar contenido.

### Agente 9 — Change Manager
**Responsabilidad:** Mantener trazabilidad: changelog, decisiones, pendientes, índice.  
**Activa en:** Al inicio y fin de cada sesión de trabajo.  
**Salidas:** `CHANGELOG.md`, `docs/DECISIONS.md`, `docs/PENDING.md`, `docs/README.md`  
**No hace:** Implementar código ni auditar el sitio.

---

## Regla de no duplicación

Si un agente necesita información de otro, la lee de los archivos de salida del otro agente. No repite el análisis. Ejemplo: el Agente 7 (Frontend) lee `docs/design/component-inventory.md` del Agente 2 para saber qué componentes existen, sin analizarlos de nuevo.
