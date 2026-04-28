# Pendientes y preguntas bloqueantes
**Agente:** Change Manager  
**Actualizar:** cada vez que se resuelve o agrega un pendiente  
**Última actualización:** 2026-04-27

---

## Pendientes bloqueantes (requieren respuesta del cliente)

| ID | Pregunta | Bloquea | Estado |
|---|---|---|---|
| P1 | ¿Número real de WhatsApp? | Lote 1A | **RESUELTO** 2026-04-27 |
| P2 | ¿Email correcto para recibir solicitudes? | Lote 1A, formularios | **RESUELTO** 2026-04-27 |
| P3 | ¿Métricas del sitio son correctas? | Fase 2 (sección stats) | **RESUELTO** 2026-04-27 — ver nota |
| P4 | ¿Logos de clientes con permiso vigente? | Fase 2 (sección clientes) | **RESUELTO** 2026-04-27 — ver nota |
| P5 | ¿Dirección, teléfono y horario oficiales? | Lote 1B (Schema/OG) | **RESUELTO** 2026-04-27 |
| P6 | ¿IVA, facturas y métodos de pago? | Fase 6 (checkout) | **RESUELTO** 2026-04-27 |
| P7 | ¿Envíos a domicilio o recolección? | Fase 6 (checkout) | **RESUELTO** 2026-04-27 |
| P8 | ¿Radio de cobertura de servicios? | Fase 6 (checkout) | **RESUELTO** 2026-04-27 |
| P9 | ¿Catálogo de productos con nombres, precios, SKUs? | Fase 3 (tienda catálogo) | **RESUELTO** 2026-04-27 — ver nota |
| P10 | ¿Dominio en mismo servidor o migra? | Fase 7 (migración) | **RESUELTO** 2026-04-27 — ver nota |
| P11 | ¿Acceso a Google Search Console y GA4? | Fase 0.5 (baseline SEO) | **RESUELTO** 2026-04-27 — ver nota |
| P12 | ¿Acceso al admin de WordPress? | Fase 0.5 (baseline WP) | **RESUELTO** 2026-04-27 |
| P13 | ¿Políticas de devolución y cancelación? | Fase 6 (checkout) | **RESUELTO** 2026-04-27 — ver nota |
| P14 | ¿Fotos del portafolio son propiedad de Paisare? | Fase 4 (portafolio) | **RESUELTO** 2026-04-27 |

---

## Pendientes técnicos (no bloquean la Fase 0, pero sí fases siguientes)

| ID | Pendiente | Bloquea |
|---|---|---|
| T1 | Inventario de assets de imágenes (`docs/audit/image-asset-inventory.md`) — hacer antes de descargar imágenes | Fase 1 (assets) |
| T2 | Crawl de `paisare.com` para inventario de URLs — **acceso WP confirmado, se puede proceder** | Fase 0.5 |
| T3 | Verificar sitemap.xml y robots.txt de producción | Fase 0.5 |
| T4 | Confirmar pasarela de pago para tarjeta (Conekta, Stripe MX, OpenPay u otro) | Fase 6 |
| T5 | Confirmar CLABE para SPEI y wallet USDT oficial | Fase 6 |
| T6 | Definir si se usa ACF para campos personalizados o un plugin alternativo | Fase 5 |
| T7 | Verificar que el acceso a Search Console sigue activo (P11 confirmado pero no verificado recientemente) | Fase 0.5 |
| T8 | Logos nuevos de clientes — cliente los proveerá (reemplazan los 7 actuales desactualizados) | Fase 2 |
| T9 | Decisión sobre sección `#stats`: ¿eliminar o reemplazar con contenido de valor? — ver opciones en P3 | Fase 2 |
| T10 | Aclarar infraestructura de hosting: ¿WordPress en hosting compartido convencional o en Google Cloud? ¿Email separado en Google Workspace? | Fase 7 |
| T11 | Evaluar viabilidad de Umbrel para producción — Umbrel es OS de autoalojamiento residencial; considerar VPS administrado como alternativa para staging y prod | Fase 7 |
| T12 | Definir catálogo inicial de productos cuando esté listo (actualmente no existe) | Fase 3 |

---

## Notas de resolución

### P3 — Métricas (sección `#stats`)
Las métricas actuales **no son reales** y están desactualizadas. El cliente confirma que si la sección no aporta, se elimina. Si puede reemplazarse con algo de valor, mejor.

**Opciones propuestas:**
- **A) Eliminar** la sección `#stats` completamente
- **B) Reemplazar** con una barra de confianza: e.g., "Cobertura nacional · 5 servicios especializados · Querétaro, México · Más de X años"
- **C) Convertirla** en una sección de diferenciadores o valores: "Proyectos llave en mano · Garantía de resultado · Asesoría sin costo · Materiales propios"

Decisión pendiente del cliente. **No publicar con datos actuales.**

---

### P4 — Logos de clientes
Los 7 logos actuales están desactualizados. El cliente tiene logos nuevos vigentes. Pendiente: proveer archivos de nuevos logos (PNG/SVG con fondo transparente, formato horizontal preferido).

---

### P5 — Datos de contacto (COMPLETAMENTE RESUELTO)
- **Dirección exacta** (solo para Schema.org): Hacienda el Salitre 410, Jardines de la Hacienda, Querétaro, Querétaro, México
- **Footer / información pública**: Solo "Querétaro, México" — por seguridad, el cliente prefiere contacto digital o telefónico
- **Teléfono de oficina**: `4422155474` / Display: `+52 442 215 5474`
- **Horario**: Lunes a viernes 8:30–18:00 hrs · Sábados con cita previa
- **WhatsApp**: `524427730857` / Display: `+52 442 773 0857`
- **Email**: `contacto@paisare.com`

---

### P6 — Métodos de pago y facturación
- **IVA**: incluido en precio mostrado (no se desglosa)
- **CFDI/Factura**: disponible si el cliente la solicita
- **Métodos de pago**: tarjeta de crédito/débito (comisión incluida en precio) · USDT crypto · Transferencia SPEI · PayPal
- **Pendiente Fase 6**: pasarela para tarjeta (Conekta/Stripe/OpenPay), CLABE SPEI, wallet USDT oficial

---

### P7 — Envíos y logística
- **Artículos ligeros**: envío a todo el país
- **Plantas grandes**: fletera externa (cliente coordina)
- **Equipos, maquinaria, instalación**: solo disponibles en Querétaro, no viajan
- **Recolección en QRO**: disponible
- **Pendiente Fase 6**: costo por peso/zona, paquetería(s) aceptadas, flujo para fletera externa

---

### P8 — Radio de cobertura
- **Servicios** (paisajismo, riego, construcción, mantenimiento): cobertura nacional, se evalúa por proyecto
- **Productos**: variable según tipo (ver P7)
- **UX implicación**: formulario de cotización debe incluir campo de ubicación/estado del cliente; no mostrar restricción geográfica fija en el sitio

---

### P9 — Catálogo de productos
No existe catálogo definido aún. Las 17 categorías de la arquitectura ecommerce son una propuesta base, no datos reales del cliente. La tienda no puede avanzar a Fase 3 hasta que exista al menos un listado parcial de productos con nombres y precios orientativos.

---

### P10 — Infraestructura y migración
- **Dominio `paisare.com`**: en hosting compartido convencional
- **Email**: posiblemente separado en Google Workspace (pendiente confirmar si el servidor de correo es Google o el mismo hosting)
- **Plan de migración eventual**: hacia Umbrel (servidor autoalojado)
- **Nota técnica**: Umbrel es una solución de autoalojamiento residencial (Raspberry Pi / mini PC). Para producción con tráfico real se recomienda evaluar si un VPS administrado (DigitalOcean, Cloudflare Pages, etc.) no sería más estable. Se debe discutir en Fase 7.

---

### P11 — Google Search Console y GA4
- **Access**: confirmado — el cliente tiene acceso
- **Acción requerida (Fase 0.5)**: verificar que el acceso sigue activo, identificar si hay GA4 o solo UA (Universal Analytics), y exportar el baseline de tráfico antes de cualquier migración

---

### P12 — Admin WordPress
- **Acceso**: confirmado — el cliente tiene las credenciales
- **Acción requerida (Fase 0.5)**: acceder y documentar: plugins activos, versión de WP, tema, posts, comentarios, media

---

### P13 — Políticas de devolución
- **Política actual**: sin devoluciones
- **Políticas futuras**: se definirán cuando exista stock definido y variarán por tipo de producto
- **Implicación legal**: antes de activar la tienda se deben redactar y publicar los Términos y Condiciones y Política de Privacidad (requerido en México por LFPDPPP y PROFECO)

---

### P14 — Derechos de fotografías del portafolio
- Las fotos son **propiedad de Paisare** — no requieren crédito ni permiso de terceros para publicarse
- Se pueden usar libremente en el sitio, redes sociales y materiales de marketing
