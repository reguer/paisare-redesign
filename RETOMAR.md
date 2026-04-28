# RETOMAR — Paisare Web Redesign
**Última actualización:** 2026-04-28  
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
- PR #4 abierto (`feat/lote-2-home`) — pendiente de merge. Incluye FAQ + portafolio interactivo + docs reescritos.

### Próximo paso inmediato
**Fase 2 — Setup de infraestructura.** Requiere tres cosas del cliente:
1. Cuenta en Cloudflare (o acceso para crear una)
2. Cuenta en Sanity (o acceso para crear una)
3. Acceso al DNS del dominio `paisare.com`

Sin estas tres cosas, la Fase 2 no puede comenzar.

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
| `feat/lote-2-home` | FAQ, portafolio interactivo, docs stack | **Abierto (PR #4)** |
| `feat/fase-2-astro` | Setup Astro + Sanity + CF *(crear desde main)* | Pendiente |

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
| **2 — Setup infra** | I1: cuenta Cloudflare · I2: workspace Sanity · I3: acceso DNS |
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
- Stack confirmado: Astro + Sanity + Cloudflare Pages/Workers/Access + Mercado Pago
- WordPress en paisare.com permanece vivo hasta Fase 8 (DNS flip zero-downtime)
- Fases 0 y 1 completadas. Prototipo HTML en Paisare Redesign.html es la referencia de diseño.
- PR #4 abierto (feat/lote-2-home): FAQ, portafolio interactivo, docs reescritos

PRÓXIMOS PASOS (en orden):
1. Mergear PR #4 cuando el cliente confirme
2. Crear rama feat/fase-2-astro desde main
3. Inicializar proyecto Astro + conectar Sanity + deploy a Cloudflare Pages (Fase 2)
   - Requiere del cliente: cuenta Cloudflare, workspace Sanity, acceso DNS

REGLAS OBLIGATORIAS:
- Nunca commitear directo a main — siempre rama + PR
- WordPress paisare.com NO SE TOCA hasta Fase 8
- Leer docs/PENDING.md antes de cualquier cambio de código
- Datos del cliente solo con confirmación explícita (ver docs/PENDING.md para los ya confirmados)
```
