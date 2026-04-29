# CI/CD — Paisare Web
**Última actualización:** 2026-04-28  
**Story:** 3.5 — Setup CI/CD (GitHub → Cloudflare Pages)

---

## Arquitectura

```
push a main ──► GitHub Actions ──► npm run build ──► Cloudflare Pages
pull_request ──► GitHub Actions ──► npm run build ──► Preview deploy (URL única)
```

Pipeline definido en: `.github/workflows/deploy.yml`

---

## Setup inicial (pasos manuales — solo la primera vez)

### 1. Crear proyecto en Cloudflare Pages

1. Ir a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Seleccionar el repo `reguer/paisare-redesign`
3. Configurar el build:
   - **Framework preset:** Astro
   - **Build command:** `cd astro-site && npm ci && npm run build`
   - **Build output directory:** `astro-site/dist`
   - **Root directory:** `/` (raíz del repo)
4. Nombre del proyecto: `paisare-web` (debe coincidir con `wrangler.toml`)
5. Click **Save and Deploy** — el primer deploy puede fallar sin las env vars; eso es normal

### 2. Agregar variables de entorno en Cloudflare Pages

Ir a **Pages → paisare-web → Settings → Environment variables → Add variable**

| Variable | Entorno | Dónde obtenerla |
|---|---|---|
| `PUBLIC_SANITY_PROJECT_ID` | Production + Preview | sanity.io/manage → API → Project ID |
| `PUBLIC_SANITY_DATASET` | Production + Preview | `production` (valor fijo) |
| `PUBLIC_WEB3FORMS_KEY` | Production + Preview | web3forms.com → dashboard |
| `SANITY_API_TOKEN` | Production + Preview | sanity.io/manage → API → Tokens → crear con rol "Read" |

Las variables `MP_ACCESS_TOKEN`, `MP_WEBHOOK_SECRET` y `CF_ACCESS_AUD` se agregan en Fases 5 y 6.

### 3. Obtener CF_API_TOKEN y CF_ACCOUNT_ID para GitHub Actions

**CF_ACCOUNT_ID:**  
Cloudflare dashboard → esquina superior derecha → tu cuenta → Account ID (o en la URL)

**CF_API_TOKEN:**  
Cloudflare dashboard → **My Profile** → **API Tokens** → **Create Token**  
Usar template: "Edit Cloudflare Pages" → ajustar permisos a solo `Cloudflare Pages: Edit`

### 4. Agregar secrets en GitHub

Ir a `github.com/reguer/paisare-redesign` → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Secret | Valor |
|---|---|
| `CF_API_TOKEN` | Token creado en el paso anterior |
| `CF_ACCOUNT_ID` | ID de la cuenta de Cloudflare |
| `PUBLIC_SANITY_PROJECT_ID` | Project ID de Sanity |
| `PUBLIC_WEB3FORMS_KEY` | API key de Web3Forms |
| `SANITY_API_TOKEN` | Token de Sanity con rol "Read" |

---

## Comportamiento del pipeline

| Evento | Resultado |
|---|---|
| Push a `main` | Build completo → deploy a producción en `nuevo.paisare.com` |
| Pull Request abierto | Build completo → preview deploy en URL única `<hash>.pages.dev` |
| Build falla | Deploy bloqueado, notificación en el PR de GitHub |
| Merge del PR | Preview deploy desactivado automáticamente |

---

## Tiempos esperados

- Instalación de deps: ~30s (cache activo)
- Build de Astro: ~45s–90s (sin datos en Sanity)
- Upload a CF Pages: ~15s
- **Total:** < 3 minutos desde push hasta live

---

## Desarrollo local

```bash
cd astro-site
cp ../.env.example .env
# completar .env con tus valores reales
npm install
npm run dev          # servidor en localhost:4321
npm run build        # build de producción
npm run typecheck    # verificar TypeScript
```

Para el Sanity Studio:
```bash
cd sanity-studio
cp .env.example .env   # crear este archivo con SANITY_STUDIO_PROJECT_ID
npm install
npm run dev            # studio en localhost:3333
```
