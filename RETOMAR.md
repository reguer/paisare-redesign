# RETOMAR — Paisare Web Redesign
**Última actualización:** 2026-04-29 (PR #6 mergeado · Fase 2 en progreso — build OK, deploy pendiente de config manual)  
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

## Estado actual del proyecto (2026-04-29)

### Lo que está terminado
- [x] Fase 0 — Auditoría completa + toda la documentación base en `docs/`
- [x] Fase 1 — Prototipo HTML completo (`Paisare Redesign.html`)
- [x] PRs #1–#6 mergeados a `main`
- [x] Fase 2 — Código completo en `main`:
  - `astro-site/` — Astro 5, output:static, layouts, Nav, Footer, index placeholder, sanityFetch, GROQ queries
  - `sanity-studio/` — 9 schemas Sanity v3 completos
  - `.github/workflows/deploy.yml` — pipeline GitHub Actions → CF Pages
  - `docs/infra/cicd.md` y `docs/infra/dns-map.md`
- [x] CF Pages proyecto `paisare-web` creado, cuenta `proyectos@paisare.com`
- [x] Build de Astro exitoso en CF Pages (output:static, 1 página, 1.11s)
- [x] Sanity workspace creado, Project ID confirmado: `qggf24bv`
- [x] CF Account ID confirmado: `190a3cddbfacb79832920ed469ba60e3`

### Lo que está pendiente — pasos manuales (Fase 2, en orden)

**PASO 1 — Arreglar CF Pages (5 min)**
- dash.cloudflare.com → Workers & Pages → `paisare-web` → **Settings → Builds & Deployments**
- Campo **"Deploy command"**: borrarlo, dejarlo vacío
- Campo **"Build output directory"**: escribir `astro-site/dist`
- Guardar → **"Retry deploy"**
- Resultado esperado: sitio live en `https://paisare-web.pages.dev`

**PASO 2 — Crear CF API Token (2 min)**
- CF dashboard → ícono de perfil (arriba derecha) → **"My Profile"** → **"API Tokens"**
- **"Create Token"** → template **"Edit Cloudflare Pages"** → "Use template" → "Create Token"
- Copiar el valor inmediatamente (solo se muestra una vez)

**PASO 3 — Agregar 4 secrets en GitHub (5 min)**
- Ir a: `github.com/reguer/paisare-redesign/settings/secrets/actions`
- **"New repository secret"** — agregar estos 4:

| Secret | Valor |
|---|---|
| `CF_API_TOKEN` | Token del Paso 2 |
| `CF_ACCOUNT_ID` | `190a3cddbfacb79832920ed469ba60e3` |
| `PUBLIC_SANITY_PROJECT_ID` | `qggf24bv` |
| `SANITY_API_TOKEN` | Valor del token creado en Sanity (empieza con `sk`) |

**PASO 4 — DNS en websupport (5 min)**
- Panel de websupport → sección DNS → "Agregar registro"
- Registro 1: Tipo `CNAME` · Nombre `nuevo` · Valor `paisare-web.pages.dev` · TTL `300`
- Registro 2: Tipo `CNAME` · Nombre `studio` · Valor `qggf24bv.sanity.studio` · TTL `300`
- Esperar 5–15 min → verificar con `ping nuevo.paisare.com`

**PASO 5 — Desplegar Sanity Studio (2 min)**
- Terminal en `sanity-studio/`: `npm install && npx sanity deploy`
- Nombre del studio cuando pregunte: `paisare`
- Quedará en `https://paisare.sanity.studio` con CNAME apuntando a `studio.paisare.com`

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
| `feat/fase-2-astro` | Setup Astro + Sanity + CF | Mergeado (PR #6) |

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
| **2 — Setup infra** | ⏳ Código en main · Pasos manuales pendientes: ver sección "Próximos pasos" arriba (Pasos 1–5) |
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

Lee RETOMAR.md primero. Luego lee docs/PENDING.md.

ESTADO AL 2026-04-29:
- PRs #1–#6 mergeados. main tiene todo el código de Fases 0, 1 y 2.
- Fase 2 código completo: astro-site/ (Astro 5 output:static) + sanity-studio/ (9 schemas)
  + .github/workflows/deploy.yml + docs/infra/
- CF Pages proyecto "paisare-web" existe, build de Astro funciona.
- Sanity workspace existe: Project ID = qggf24bv
- CF Account ID confirmado: 190a3cddbfacb79832920ed469ba60e3

PENDIENTE — PASOS MANUALES (en orden, ver sección "Próximos pasos" en RETOMAR.md):
1. CF Pages dashboard: vaciar "Deploy command" + set "Build output directory" = astro-site/dist → Retry
2. Crear CF API Token (My Profile → API Tokens → "Edit Cloudflare Pages" template)
3. Agregar 4 secrets en github.com/reguer/paisare-redesign/settings/secrets/actions
4. DNS en websupport: 2 registros CNAME (nuevo + studio)
5. Desplegar Sanity Studio: cd sanity-studio && npm install && npx sanity deploy

NO HAY RAMAS ABIERTAS — crear feat/fase-3-content cuando Fase 2 esté verificada en vivo.

REGLAS OBLIGATORIAS:
- Nunca commitear directo a main — siempre rama + PR
- WordPress paisare.com NO SE TOCA hasta Fase 8
- Leer docs/PENDING.md antes de cualquier cambio de código
```
