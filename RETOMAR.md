# RETOMAR — Paisare Web Redesign
**Última actualización:** 2026-04-28 (PR #6 abierto · Fase 2 — Setup infra Astro + Sanity + CF)  
**Para usar:** Lee este archivo completo al inicio de cualquier sesión nueva antes de hacer cualquier cambio.

---

## Stack confirmado

| Capa | Tecnología |
|---|---|
| Framework | **Astro** (SSG + SSR islands) |
| CMS | **Sanity** (free tier · studio en `studio.paisare.com`) |
| Hosting + CDN | **Cloudflare Pages** |
| SSR + pagos | **Cloudflare Workers** |
| Auth cliente | **Cloudflare Access** (magic link por email, gratis ≤ 50 users) |
| Pagos tienda | **Mercado Pago** (~3.5% por transacción, sin mensualidad) |
| Formularios | **Web3Forms** o **CF Email Routing** |
| Analytics | **Cloudflare Web Analytics** (+ GA4 opcional) |
| Repo | `https://github.com/reguer/paisare-redesign` |
| Dominio | `paisare.com` — **NO TOCAR** hasta Fase 8 (DNS flip) |
| Hosting futuro | Umbrel Pro — evaluar en Fase 9 post-lanzamiento |

---

## Estado actual del proyecto (2026-04-28)

### Lo que está terminado
- [x] Fase 0 — Auditoría completa + toda la documentación base en `docs/`
- [x] Fase 1 — Prototipo HTML completo (`Paisare Redesign.html`):
  - Config centralizada (WA, email, tel) en `src/js/config.js`
  - Favicon real (SVG + PNG) + Logo real en nav y footer
  - Schema.org LocalBusiness + FAQPage + OpenGraph con datos reales
  - Sección `#nosotros` (misión, visión, quiénes somos)
  - Sección `#testimonios` (3 reseñas reales de Homify)
  - Sección `#faq` (10 preguntas autogeneradas — pendiente revisión del cliente)
  - Portafolio con modal de detalle, filtros por categoría, botón "Ver más"
  - LinkedIn + Google Maps en footer
  - Sección `#stats` eliminada (D09)
- [x] Docs actualizados para el stack Astro + Sanity + Cloudflare

### Lo que está en progreso
- **PR #6 abierto** (`feat/fase-2-astro`) — Setup completo de infraestructura:
  - `astro-site/` — proyecto Astro 5 con CF adapter, layouts, config, sanity client, GROQ queries
  - `sanity-studio/` — Studio con 9 schemas completos (proyecto, artículo, servicio, producto, paginaCliente, testimonio, faqItem, pedido, blockContent)
  - `.github/workflows/deploy.yml` — pipeline CI/CD
  - `docs/infra/` — dns-map.md y cicd.md

### Próximo paso inmediato (pasos manuales del cliente)

El código está listo. Para activar el pipeline se necesitan 4 acciones manuales:

1. **Crear cuenta Cloudflare** en cloudflare.com con `proyectos@paisare.com`  
   → Crear proyecto Pages llamado `paisare-web` conectado al repo `reguer/paisare-redesign`  
   → Obtener `CF_ACCOUNT_ID` y crear `CF_API_TOKEN` (ver `docs/infra/cicd.md`)

2. **Crear workspace Sanity** en sanity.io con `proyectos@paisare.com`  
   → Copiar el `Project ID` del dashboard  
   → Crear token con rol "Read"

3. **Agregar CNAME en websupport:**  
   `nuevo → paisare-web.pages.dev` y `studio → <projectId>.sanity.studio`

4. **Agregar secrets en GitHub** (Settings → Secrets → Actions):  
   `CF_API_TOKEN`, `CF_ACCOUNT_ID`, `PUBLIC_SANITY_PROJECT_ID`, `SANITY_API_TOKEN`

Cuando los 4 pasos estén listos: mergear PR #6 → primer deploy automático a `nuevo.paisare.com`.

---

## Reglas que nunca se rompen
1. **Nunca commits directos a `main`** — siempre rama + PR (D08)
2. **WordPress en `paisare.com` permanece vivo** hasta que el nuevo sitio esté aprobado (D04)
3. **No publicar datos no validados** en Schema, OG ni en el sitio (precios inventados, testimonios falsos, etc.)
4. **Leer este archivo y `docs/PENDING.md` antes de cualquier cambio de código**

---

## Mapa de ramas y PRs

| Rama | Descripción | Estado |
|---|---|---|
| `main` | Rama principal — solo recibe merges vía PR | Activa |
| `feat/fase-0-docs` | Documentación inicial | Mergeado (PR #1) |
| `feat/lote-1a-config` | Config centralizada | Mergeado (PR #2) |
| `feat/lote-1b-cleanup` | SEO, logos, Nosotros, Testimonios | Mergeado (PR #3) |
| `feat/lote-2-home` | FAQ, portafolio interactivo, docs stack | Mergeado (PR #4) |
| `docs/epics-detallados` | Apéndices técnicos en Epics & Stories | **Abierto (PR #5)** |
| `feat/fase-2-astro` | Setup Astro + Sanity + CF | **Abierto (PR #6)** |

---

## Archivos canónicos — leer en este orden

| Prioridad | Archivo | Contenido |
|---|---|---|
| 1 | `RETOMAR.md` (este) | Estado actual y próximos pasos |
| 2 | `docs/PENDING.md` | Qué falta del cliente para desbloquear cada fase |
| 3 | `docs/DECISIONS.md` | Decisiones tomadas — no reabrir sin razón |
| 4 | `docs/epics/website-redesign-epics-stories.md` | Plan completo con 13 Epics y fases |
| 5 | `CHANGELOG.md` | Qué cambió y cuándo |
| 6 | `Paisare Redesign.html` | Referencia visual para componentes Astro |

---

## Bloqueantes activos por fase

| Fase | Bloqueado por |
|---|---|
| **2 — Setup infra** | ✅ Código listo (PR #6) · ⏳ Pasos manuales: crear cuentas CF+Sanity, CNAME en websupport, secrets en GitHub |
| **3 — Migración contenido** | C1: export XML de WordPress · C2: lista de proyectos del portafolio |
| **4 — Blog + Portafolio** | C3: logos de clientes · C4: FAQ revisado · C5: foto de equipo (opcional) |
| **5 — Páginas de cliente** | P1: lista de proyectos/clientes · P2: correos de clientes |
| **6 — Tienda** | T1: catálogo de productos · T2: cuenta Mercado Pago · T3: políticas de envío |
| **8 — DNS flip** | Aprobación explícita del cliente |
| **9 — Umbrel Pro** | U1: evaluación técnica post-lanzamiento |

---

## Datos de contacto confirmados del cliente

```
WhatsApp:  524427730857   (display: +52 442 773 0857)
Teléfono:  4422155474     (display: +52 442 215 5474)
Email:     contacto@paisare.com
Dirección (solo Schema): Hacienda el Salitre 410, Jardines de la Hacienda, Querétaro, Qro., MX
Horario:   L–V 8:30–18:00 · Sábados con cita previa
Redes:     facebook.com/paisare · instagram.com/paisaremx
           linkedin.com/company/89912704 · pinterest.com/paisaremx
           maps.app.goo.gl/2siHuQhVPnQBU9tG8
```

---

## Checklist de verificación al retomar

```bash
git status        # verificar rama actual
git branch        # confirmar que NO estás en main
cat docs/PENDING.md  # qué está bloqueado
tail -40 CHANGELOG.md  # qué cambió recientemente
```

Antes de cualquier cambio de código:
- [ ] Estás en una rama feature (nunca en `main`)
- [ ] Leíste `docs/PENDING.md` y sabes qué está desbloqueado
- [ ] Tu cambio referencia un Epic/Story del plan

---

## PROMPT DE SESIÓN
*Copia y pega esto al inicio de una nueva conversación para retomar el proyecto:*

```
Continúa el proyecto Paisare Web Redesign desde:
h:\Unidades compartidas\Paisare - Central\Nueva web Paisare

Lee RETOMAR.md primero.

CONTEXTO RÁPIDO:
- Stack: Astro + Sanity + Cloudflare Pages/Workers/Access + Mercado Pago
- WordPress en paisare.com permanece vivo hasta Fase 8 (DNS flip zero-downtime)
- Fases 0 y 1 completadas. Prototipo HTML en Paisare Redesign.html es la referencia de diseño.
- PRs #1–#4 mergeados. PR #5 (docs/epics-detallados) abierto — puede estar mergeado al retomar.
- docs/epics/website-redesign-epics-stories.md tiene apéndices técnicos completos (Sanity schemas,
  componentes Astro, mapa de rutas, vars de entorno, estrategia de ramas)

PRÓXIMOS PASOS (en orden):
1. Mergear PR #5 si sigue abierto
2. Crear rama feat/fase-2-astro desde main
3. Inicializar proyecto Astro + conectar Sanity + deploy a Cloudflare Pages (Fase 2, Epic 3)
   - Requiere del cliente: cuenta Cloudflare, workspace Sanity, acceso DNS a paisare.com
   - Ver docs/PENDING.md items I1, I2, I3

REGLAS OBLIGATORIAS:
- Nunca commitear directo a main — siempre rama + PR
- WordPress paisare.com NO SE TOCA hasta Fase 8
- Leer docs/PENDING.md antes de cualquier cambio de código
- Datos del cliente confirmados están en docs/PENDING.md (sección "Estado P1-P14")
```
