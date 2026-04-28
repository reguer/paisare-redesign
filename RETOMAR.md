# RETOMAR — Handoff rápido del proyecto Paisare Redesign
**Última actualización:** 2026-04-27  
**Para usar:** Leer este archivo al inicio de cualquier nueva conversación antes de hacer cualquier cambio.

---

## Estado actual del proyecto

**Fase activa:** Fase 0 completada. Listo para Lote 1A (primer cambio de código).  
**Rama activa recomendada:** Crear `feat/lote-1a-config` desde `main` después de merge de `feat/fase-0-docs`.  
**Sitio de producción:** https://www.paisare.com/ — WordPress con tema Select 2.4.1. **NO TOCAR.**

---

## Rama activa y git

| Dato | Valor |
|---|---|
| Rama de documentación | `feat/fase-0-docs` (en PR, pendiente merge) |
| Branch principal | `main` |
| Siguiente rama | `feat/lote-1a-config` (crear después del merge) |
| Regla obligatoria | **Nunca commits directo a `main`. Siempre rama + PR.** |
| Repo remoto | `https://github.com/reguer/paisare-redesign.git` |

---

## Último commit relevante

- `c611c4e` — "Initial Paisare redesign" (2026-04-27) en `main`
- Fase 0 está en `feat/fase-0-docs` — pendiente de merge vía PR

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

---

## Qué está en progreso

- [ ] PR de `feat/fase-0-docs` → `main` — pendiente de revisión y merge

---

## Qué está bloqueado

| Lote/Fase | Bloqueado por |
|---|---|
| Lote 1A (centralizar WA, http→https) | **P1 — número real de WhatsApp** |
| Lote 1B (Schema/OG, favicon) | **P5 — dirección, teléfono, horario validados** |
| Fase 0.5 (baseline WordPress) | **P11/P12 — acceso a Search Console y admin WP** |
| Fase 2 (home mejorada) | Stats (P3), logos (P4) |
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

## Próximo lote recomendado: Lote 1A

**Prerequisito:** Tener el número real de WhatsApp (P1).  
**Rama:** `feat/lote-1a-config`  
**Alcance exacto:**

1. Crear `src/js/config.js` con número WA, email y horario (como TODO hasta confirmar)
2. Refactorizar todos los `wa.me/524420000000` del HTML para leer de `config.js`
3. Cambiar todas las URLs de imágenes de `http://` a `https://`
4. Actualizar `CHANGELOG.md`
5. Abrir PR ligado a `[E1-S1.3]` y `[E11-S11.1]`

**No tocar diseño ni layout. Solo configuración y limpieza técnica.**

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

1. **P1** — ¿Cuál es el número real de WhatsApp? (bloquea Lote 1A)
2. **P2** — ¿El email `hola@paisare.com` está activo?
3. **P11** — ¿Hay acceso a Search Console y GA4?
4. **P12** — ¿Hay acceso al admin de WordPress?
5. **P5** — Dirección, teléfono de oficina y horario verificados (bloquea Schema/OG)

Ver lista completa: [`docs/PENDING.md`](docs/PENDING.md)
