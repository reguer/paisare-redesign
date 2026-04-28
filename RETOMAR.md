# RETOMAR — Handoff rápido del proyecto Paisare Redesign
**Última actualización:** 2026-04-27 (Lote 1B completado — pendiente PR)  
**Para usar:** Leer este archivo al inicio de cualquier nueva conversación antes de hacer cualquier cambio.

---

## Estado actual del proyecto

**Fase activa:** Lote 1B completado. Pendiente: PR de `feat/lote-1b-cleanup` → main.  
**Rama activa actual:** `feat/lote-1b-cleanup` (lista para PR → main)  
**Sitio de producción:** https://www.paisare.com/ — WordPress con tema Select 2.4.1. **NO TOCAR.**

---

## Rama activa y git

| Dato | Valor |
|---|---|
| Rama de documentación | `feat/fase-0-docs` (mergeada en main — PR #1) |
| Rama lote 1A | `feat/lote-1a-config` (mergeada en main — PR #2) |
| Branch principal | `main` |
| Rama activa | `feat/lote-1b-cleanup` (lista para PR → main) |
| Siguiente rama | `feat/lote-2-home` (crear después de merge de 1B) |
| Regla obligatoria | **Nunca commits directo a `main`. Siempre rama + PR.** |
| Repo remoto | `https://github.com/reguer/paisare-redesign.git` |

---

## Último commit relevante

- `c611c4e` — "Initial Paisare redesign" (2026-04-27) en `main`
- Fase 0 completada en `feat/fase-0-docs` — pendiente de merge vía PR
- Lote 1A completado en `feat/lote-1a-config` — pendiente de merge vía PR

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
- [x] Lote 1B: `#tweaks-panel` eliminado, favicon SVG placeholder, OpenGraph y Schema.org mínimos

---

## Qué está en progreso

- [ ] PR de `feat/lote-1b-cleanup` → `main` — pendiente de abrir y mergear

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

## Próximo lote recomendado: Lote 2 — Home mejorada

**Prerequisito:** Merge de Lote 1B vía PR.  
**Rama:** `feat/lote-2-home` (crear desde `main` tras merge)  
**Alcance exacto (cuando el cliente entregue el contenido):**

1. Reemplazar sección `#clientes` con logos reales (bloqueado por P4)
2. Agregar sección Nosotros con contenido real del cliente
3. Agregar sección Testimonios con contenido real
4. Agregar sección FAQ con preguntas reales
5. Agregar `og:image` una vez aprobada la fotografía de portada
6. Actualizar `CHANGELOG.md` y abrir PR ligado a `[E2]`

**Pendientes del cliente que desbloquean Lote 2:**  
- Logos actualizados de clientes (P4)  
- Texto real de Nosotros / misión / historia  
- Testimonios reales (nombre + empresa + texto)  
- Fotografía de portada aprobada para OG

**No tocar diseño ni layout hasta tener el contenido.**

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

1. **P3** — ¿Eliminar sección `#stats` o reemplazar con métricas reales? (bloquea Fase 2)
2. **P4** — Enviar nuevos logos de clientes para sección `#clientes`
3. **P5 parcial** — ¿El horario aplica lunes a viernes únicamente o incluye sábados? (bloquea Schema en Lote 1B)
4. **P11** — ¿Hay acceso a Search Console y GA4? (bloquea Fase 0.5)
5. **P12** — ¿Hay acceso al admin de WordPress? (bloquea Fase 0.5)
6. **Nosotros/Testimonios/FAQ** — Contenido real del cliente para estas secciones nuevas

Ver lista completa: [`docs/PENDING.md`](docs/PENDING.md)
