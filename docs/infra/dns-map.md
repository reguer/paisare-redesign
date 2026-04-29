# DNS Map — paisare.com
**Última actualización:** 2026-04-28  
**Story:** 3.4 — Configurar dominio y DNS en Cloudflare  
**Estado:** Pendiente de ejecución (requiere acceso al panel de websupport)

---

## Estado actual (Fases 2–7)

El DNS de `paisare.com` está controlado por **websupport** (servidor compartido).  
WordPress en `paisare.com` permanece activo hasta el flip de DNS en Fase 8.

### Registros a agregar en websupport (Fases 2–7)

| Tipo | Nombre | Valor | TTL | Propósito |
|---|---|---|---|---|
| `CNAME` | `nuevo` | `paisare-web.pages.dev` | 300 | Nuevo sitio Astro (preview) |
| `CNAME` | `studio` | `<projectId>.sanity.studio` | 300 | Sanity Studio (reemplazar `<projectId>` cuando esté disponible) |

> **Nota:** `paisare-web.pages.dev` es el dominio generado por Cloudflare Pages. Actualizar con el valor real una vez creado el proyecto en CF.

### Pasos para agregar los registros en websupport

1. Iniciar sesión en el panel de websupport (URL proporcionada por el hosting)
2. Ir a **Gestión de DNS** o equivalente
3. Agregar los dos registros CNAME de la tabla anterior
4. Esperar propagación: 5–30 minutos (TTL 300s)
5. Verificar: `curl -I https://nuevo.paisare.com` debe retornar `200 OK`

---

## Estado objetivo — Fase 8 (DNS flip)

En Fase 8 se ejecuta la migración zero-downtime:

1. **Transferir el dominio** `paisare.com` al Registrar de Cloudflare (costo de costo, sin markup)
   - Esto elimina websupport del todo
   - Proceso: ~5 días de transferencia del registrar actual
2. **Actualizar registros** para que `paisare.com` apunte a Cloudflare Pages

| Tipo | Nombre | Valor | TTL |
|---|---|---|---|
| `CNAME` | `@` (raíz) | `paisare-web.pages.dev` | Auto |
| `CNAME` | `www` | `paisare-web.pages.dev` | Auto |
| `CNAME` | `studio` | `<projectId>.sanity.studio` | Auto |

3. SSL se activa automáticamente via Cloudflare Universal SSL
4. El WordPress antiguo permanece en su servidor 30 días como fallback

---

## Subdominios activos por fase

| Subdominio | Fase de activación | Apunta a |
|---|---|---|
| `nuevo.paisare.com` | Fase 2 | Cloudflare Pages (preview del nuevo sitio) |
| `studio.paisare.com` | Fase 2 | Sanity Studio |
| `paisare.com` | **Fase 8** | Cloudflare Pages (nuevo sitio — reemplaza WordPress) |
| `www.paisare.com` | **Fase 8** | Cloudflare Pages |

---

## Notas sobre el hosting actual (websupport)

- Websupport controla actualmente el DNS y hospeda el WordPress
- No se realizan cambios al WordPress hasta Fase 8 (D04)
- En Fase 8, al transferir el dominio a Cloudflare Registrar, websupport queda completamente eliminado de la ecuación
- Evaluar si cancelar el plan de websupport después de los 30 días de monitoreo post-lanzamiento
