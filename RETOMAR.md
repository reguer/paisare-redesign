# RETOMAR — Handoff rápido del proyecto Paisare Redesign
**Última actualización:** 2026-04-28 (Lote 1B mergeado en main — PR #3 cerrado)  
**Para usar:** Leer este archivo al inicio de cualquier nueva conversación antes de hacer cualquier cambio.

---

## Estado actual del proyecto

**Fase activa:** Lote 1B mergeado. Próximo: Lote 2 (`feat/lote-2-*`) desde `main`.  
**Rama activa actual:** `main` — lista para abrir nueva rama de Lote 2  
**Preview pública (GitHub Pages):** https://reguer.github.io/paisare-redesign/ (branch: feat/lote-1b-cleanup)  
**Sitio de producción:** https://www.paisare.com/ — WordPress con tema Select 2.4.1. **NO TOCAR.**

---

## Rama activa y git

| Dato | Valor |
|---|---|
| Rama de documentación | `feat/fase-0-docs` (mergeada en main — PR #1) |
| Rama lote 1A | `feat/lote-1a-config` (mergeada en main — PR #2) |
| Rama lote 1B | `feat/lote-1b-cleanup` (mergeada en main — PR #3) |
| Branch principal | `main` |
| Siguiente rama | `feat/lote-2-*` (crear desde `main`) |
| Regla obligatoria | **Nunca commits directo a `main`. Siempre rama + PR.** |
| Repo remoto | `https://github.com/reguer/paisare-redesign.git` |

---

## Último commit relevante

- `6ac920b` — "Lote 1B completo: cleanup, SEO, brand assets, Nosotros, Testimonios" (2026-04-28) en `main`
- PR #3 mergeado — rama `feat/lote-1b-cleanup` ya en main

---

## Archivos canónicos que debes leer al retomar

| Prioridad | Archivo | Por qué |
|---|---|---|
| 1 | `RETOMAR.md` (este archivo) | Estado actual y próximos pasos |
| 2 | `docs/PENDING.md` | Preguntas bloqueantes — qué hace falta del cliente |
| 3 | `docs/DECISIONS.md` | Decisiones ya tomadas — no reabrir sin razón |
| 4 | `docs/epics/website-redesign-epics-stories.md` | Plan completo con 17 Epics |
| 5 | `CHANGELOG.md` | Qué cambió y cuándo |
| 6 | `docs/audit/risk-log.md` | Riesgos activos |
| 7 | `docs/design/current-template-map.md` | Qué hay en la plantilla actual |

---

## Qué ya está terminado

- [x] Fase 0 completa: toda la estructura `docs/` con 9 agentes documentados
- [x] Auditoría del repositorio (`docs/audit/`)
- [x] Mapa de la plantilla HTML actual (`docs/design/`)
- [x] Estrategia de conversión y WhatsApp (`docs/strategy/`)
- [x] Plan SEO y plantillas de inventario (`docs/seo/`)
- [x] Arquitectura de tienda en línea (`docs/ecommerce/`)
- [x] Plan de integración WordPress + CPTs (`docs/cms/`)
- [x] Plan de implementación frontend (`docs/frontend/`)
- [x] Checklists de QA, accesibilidad y performance (`docs/qa/`)
- [x] Mapa de agentes y prompts reutilizables (`docs/agents/`)
- [x] 17 Epics & Stories completas (`docs/epics/`)
- [x] 8 decisiones registradas (`docs/DECISIONS.md`)
- [x] 14 preguntas bloqueantes documentadas (`docs/PENDING.md`)
- [x] CHANGELOG actualizado
- [x] `EPICS_AND_STORIES.md` raíz convertido a índice/resumen
- [x] Lote 1A: `src/js/config.js` centraliza WA, email, teléfono, horario
- [x] Lote 1B: `#tweaks-panel` eliminado, favicon SVG/PNG real, OpenGraph y Schema.org con datos reales
- [x] Lote 1B+: `#nosotros` (misión, visión, quiénes somos), `#testimonios` (3 reseñas Homify reales)
- [x] Lote 1B+: Logo real en nav (favicon.svg) y footer (logo-white.svg), LinkedIn + Google Maps en footer
- [x] Lote 1B+: Schema.org `sameAs` con FB/IG/LinkedIn/Pinterest, og:image con foto real del portafolio

---

## Qué está en progreso

- Nada. Lote 1B mergeado. Próximo: acordar alcance de Lote 2 con el cliente.

---

## Qué está bloqueado

| Lote/Fase | Bloqueado por |
|---|---|
| Fase 2 (home mejorada) | Contenido real: Nosotros, Testimonios, FAQ; logos de clientes (P4) |
| Fase 0.5 (baseline WordPress) | **P11/P12 — acceso a Search Console y admin WP** |
| Fase 2 (home mejorada) | Stats (P3: ¿eliminar o reemplazar?), logos (P4: nuevos logos pendientes), contenido de Nosotros/Testimonios/FAQ por recibir |
| Fase 3 (tienda MVP) | Catálogo de productos (P9) |
| Fase 6 (checkout) | P6, P7, P8, P9, P13 — reglas comerciales completas |

---

## Qué NO debe hacerse todavía

1. **No tocar el sitio de producción** `paisare.com`
2. **No migrar WordPress** — ni hacer cambios en la BD de producción
3. **No activar checkout ni pagos** — hasta definir reglas comerciales (P6–P13)
4. **No descargar imágenes** — hasta crear el inventario (`docs/audit/image-asset-inventory.md`)
5. **No agregar Schema/OG con datos inventados** — solo con campos confirmados por el cliente
6. **No publicar artículos inventados** — solo los reales de WordPress
7. **No commitear a `main` directamente**

---

## Próximo lote recomendado: Lote 2

**Prerequisito:** ✅ Merge de Lote 1B completado.  
**Rama:** `feat/lote-2-*` (crear desde `main`)  
**Alcance sugerido (pendiente de priorizar con el cliente):**

### Opción A — Sección `#clientes` (logos reales)
- Bloqueado por P4: cliente debe entregar logos actualizados de clientes/marcas
- Rama: `feat/lote-2-clientes`

### Opción B — Portafolio mejorado
- Imágenes descargadas localmente (hoy se sirven desde paisare.com/wp-content → riesgo R02)
- Requiere inventario de imágenes primero (`docs/audit/image-asset-inventory.md`)

### Opción C — Sección FAQ
- Preguntas frecuentes reales del cliente
- Bloqueado: cliente debe dictar las preguntas y respuestas

### Opción D — Mejoras de performance/accesibilidad
- Sin bloqueo de cliente — se puede hacer ya
- Ver `docs/qa/performance-checklist.md` y `docs/qa/accessibility-checklist.md`

**No tocar diseño ni layout sin coordinar con el cliente.**

---

## Checklist de verificación al retomar

```bash
# Verificar estado del repo
git status
git branch

# Ver qué hay en docs
ls docs/

# Ver preguntas bloqueantes activas
cat docs/PENDING.md

# Ver últimos cambios
tail -50 CHANGELOG.md
```

Antes de cualquier cambio de código:
- [ ] Estás en la rama correcta (nunca en `main`)
- [ ] Leíste `docs/PENDING.md` y sabes qué está bloqueado
- [ ] Tu commit va a referenciar la Epic/Story correcta
- [ ] El cambio no rompe la vista actual en browser

---

## Stack del proyecto

| Capa | Tecnología actual | Tecnología final (Fase 5+) |
|---|---|---|
| Markup | HTML plano (monolítico) | PHP templates (tema WordPress) |
| Estilos | CSS inline embebido | Archivos CSS separados → enqueue WP |
| Scripts | JS inline embebido | Archivos JS separados → enqueue WP |
| CMS | Ninguno (prototipo estático) | WordPress moderno |
| Tienda | Ninguna | WooCommerce |
| Build | Ninguno | Opcional (sin bundler si es posible) |
| Hosting | GitHub (solo código) | Servidor con PHP + MySQL |

---

## Preguntas pendientes más urgentes

1. **P4** — Enviar nuevos logos de clientes para sección `#clientes` (bloquea Lote 2 opción A)
2. **P11** — ¿Hay acceso a Search Console y GA4? (bloquea Fase 0.5 — analytics baseline)
3. **P12** — ¿Hay acceso al admin de WordPress? (bloquea Fase 0.5)
4. **FAQ** — Preguntas frecuentes reales del cliente (bloquea Lote 2 opción C)
5. **Testimonios adicionales** — La sección tiene 3 reseñas de Homify; se pueden enriquecer con reseñas de Google/Facebook cuando estén accesibles

**Resueltos en Lote 1B:**
- ~~P3~~ — `#stats` eliminada
- ~~P5~~ — Schema con horario L–V 8:30–18:00, sábados con cita previa

Ver lista completa: [`docs/PENDING.md`](docs/PENDING.md)
