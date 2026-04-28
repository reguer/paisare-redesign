# Decisiones del proyecto
**Agente:** Change Manager  
**Actualizar:** cada vez que se toma una decisión importante  
**Última actualización:** 2026-04-28

---

## D01 — Stack final: Astro + Sanity + Cloudflare *(reemplaza decisión anterior de WordPress)*
**Fecha:** 2026-04-28  
**Decisión:** El stack de producción es **Astro** (framework) + **Sanity** (CMS headless) + **Cloudflare Pages/Workers/Access** (hosting, SSR, auth). El plan anterior de WordPress + WooCommerce + tema PHP propio queda descartado para el sitio nuevo.  
**Por qué:**
- Astro genera HTML estático — Core Web Vitals excelentes sin esfuerzo, mejor SEO orgánico.
- Sanity permite a editores no técnicos (cliente, community manager) publicar blog y portafolio desde un Studio visual, sin tocar código.
- Cloudflare Pages es gratis indefinidamente para el volumen de Paisare. CDN con nodos en LATAM → más rápido para usuarios en México que hosting compartido en EUA.
- El sitio de WordPress actual **permanece vivo** hasta que el nuevo esté aprobado en producción (D04).
- No se instalará ni configurará WordPress nuevo — la migración es de contenido (artículos, portafolio), no de plataforma.  
**Alternativa descartada:** WordPress + WooCommerce + tema PHP propio — mayor superficie de ataque, mantenimiento de plugins, performance limitada sin capa de caché adicional.

---

## D02 — CMS: Sanity (free tier) es suficiente para la escala de Paisare
**Fecha:** 2026-04-28  
**Decisión:** Se usa Sanity en su free tier indefinidamente a menos que se superen los límites (2 editores, 10 GB CDN, 500 K API requests/mes).  
**Por qué:** El volumen de contenido de Paisare (blog mensual, proyectos del portafolio, productos de tienda) no alcanzará esos límites en años. Si se supera, el plan Growth de Sanity cuesta $15/mes — techo realista de costo CMS.

---

## D03 — Hosting: Cloudflare Pages + Workers (con evaluación futura de Umbrel Pro)
**Fecha:** 2026-04-28  
**Decisión:** El hosting principal es Cloudflare Pages (estático) + Cloudflare Workers (SSR para auth y pagos). Esto reemplaza el servidor compartido actual donde corre el WordPress de producción.  
**Pendiente — D03b:** Evaluar Umbrel Pro como hosting autoalojado en una fase futura (Fase 9). Umbrel Pro es una opción de servidor propio que potencialmente reduce costos a largo plazo, pero requiere evaluar uptime, ancho de banda, seguridad y soporte antes de usarlo en producción. Si se adopta, Cloudflare puede seguir siendo la capa CDN/proxy al frente, reduciendo el riesgo de autoalojamiento.  
**Acción:** No migrar al servidor compartido actual. Abrir cuenta en Cloudflare y desplegar desde GitHub.

---

## D04 — Migración zero-downtime: WordPress vive hasta que el nuevo sitio esté aprobado
**Fecha:** 2026-04-28  
**Decisión:** `paisare.com` permanece apuntando al WordPress actual durante todo el desarrollo del nuevo sitio. El nuevo sitio se construye y prueba en un subdominio (`nuevo.paisare.com` o en GitHub Pages). El flip de DNS ocurre solo después de aprobación explícita del cliente.  
**Por qué:** Nunca se mata un sitio en producción sin un reemplazo funcional y aprobado. El WordPress tiene tráfico orgánico, artículos indexados y backlinks. Perder eso sería un daño SEO irreversible.  
**Proceso:** Ver Epic 15 — Migración zero-downtime.

---

## D05 — Tienda: Mercado Pago (sin costo fijo, por transacción)
**Fecha:** 2026-04-28  
**Decisión:** La tienda usa **Mercado Pago Checkout** como procesador de pagos. Sin costo mensual fijo. Se paga ~3.5% + IVA por transacción ejecutada. Acepta tarjeta (crédito/débito), SPEI, OXXO y Mercado Crédito.  
**Por qué:** El volumen de ventas será bajo. Pagar $30-80/mes por Shopify cuando hay meses sin ventas no tiene sentido. Mercado Pago domina México en familiaridad de usuario, especialmente por SPEI y OXXO.  
**Proceso de pago:** Cloudflare Worker crea la sesión de Mercado Pago → usuario paga en página alojada por Mercado Pago → regresa a `paisare.com/tienda/confirmacion`.  
**Alternativa si en el futuro necesitan más funcionalidad:** Snipcart ($20/mes) — se puede agregar sin cambiar la arquitectura.

---

## D06 — Páginas privadas de cliente: Cloudflare Access (email magic link)
**Fecha:** 2026-04-28  
**Decisión:** Las páginas `/cliente/[slug]` están protegidas por **Cloudflare Access** con autenticación por email (one-time code). El cliente recibe un correo, introduce el código, y ve su página de proyecto.  
**Por qué:** Zero Trust free tier de Cloudflare es gratuito para hasta 50 usuarios activos. No requiere código de autenticación propio, no hay contraseñas que gestionar, y la seguridad es robusta (nivel empresarial).  
**Contenido de la página de cliente:** fotos de avance, cronograma, documentos, notas del equipo. Todo gestionado desde Sanity Studio por el equipo de Paisare.

---

## D07 — Formularios de contacto: Web3Forms o Cloudflare Email Routing
**Fecha:** 2026-04-28  
**Decisión:** Sin backend propio para formularios. Se usa Web3Forms (free tier: 250 envíos/mes) o Cloudflare Email Routing (Worker que procesa el formulario y manda correo). Ambos son gratuitos para el volumen de Paisare.  
**Por qué:** Un servidor Node/PHP solo para procesar formularios es overhead innecesario. Estas soluciones son robustas, gratuitas y no añaden complejidad de infraestructura.

---

## D08 — No commits directos a `main`. Siempre rama + PR.
**Fecha:** 2026-04-27  
**Decisión:** Todo desarrollo en ramas feature/docs/fix. PR obligatorio para merge a main.  
**Por qué:** Protege la estabilidad y mantiene trazabilidad de cambios.

---

## D09 — Sección `#stats` eliminada definitivamente
**Fecha:** 2026-04-28  
**Decisión:** La sección de métricas no se incluye en el nuevo sitio con datos no verificados. Si en el futuro el cliente provee métricas reales y verificables, se puede agregar como una sección de "confianza" con diferenciadores.

---

## D10 — Performance y accesibilidad: después de estructura y contenido
**Fecha:** 2026-04-28  
**Decisión:** Las optimizaciones de performance (WebP, lazy loading, minificación) y accesibilidad (WCAG AA) se ejecutan en Fase 7, después de que la estructura, imágenes y contenido estén definidos.  
**Por qué:** Optimizar antes de tener la estructura final genera trabajo que se puede deshacer.

---

## D11 — Inventario de assets antes de descargar imágenes
**Fecha:** 2026-04-27  
**Decisión:** Antes de descargar cualquier imagen de `paisare.com` al repo, se crea el inventario en `docs/audit/image-asset-inventory.md` con URL original, nombre local, alt text, uso y tamaño.

---

## D12 — Formulario de contacto actual no es productivo
**Fecha:** 2026-04-27  
**Decisión:** El formulario del prototipo HTML simula el envío sin enviarlo. No publicar en producción sin integración real (Web3Forms o CF Worker).

---

## D13 — Prototipo HTML es referencia de diseño, no el producto final
**Fecha:** 2026-04-28  
**Decisión:** El archivo `Paisare Redesign.html` y el `index.html` son la referencia visual y de contenido para construir los componentes Astro. No son el sitio de producción. Se conservan en el repo como documentación.

---

## D14 — Analytics: Cloudflare Web Analytics (sin cookies) preferido sobre GA4
**Fecha:** 2026-04-28  
**Decisión:** Usar Cloudflare Web Analytics como primera opción — es gratuito, sin cookies, compatible con LGPD/privacidad. Si el cliente necesita eventos granulares o embudos de conversión, agregar GA4 en paralelo.  
**Por qué:** Cloudflare Web Analytics está integrado nativamente en el hosting, no requiere script externo para métricas básicas.
