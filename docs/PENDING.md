# Pendientes y preguntas bloqueantes
**Agente:** Change Manager  
**Actualizar:** cada vez que se resuelve o agrega un pendiente  
**Última actualización:** 2026-04-28  
**Stack confirmado:** Astro + Sanity + Cloudflare + Mercado Pago

---

## Estado de las preguntas originales (P1–P14)

Todas resueltas durante Fase 0 (2026-04-27). Ver notas en historial si se necesita contexto. Los datos validados del cliente son:

- **WhatsApp:** `524427730857`
- **Email:** `contacto@paisare.com`
- **Teléfono:** `+52 442 215 5474`
- **Dirección (solo Schema):** Hacienda el Salitre 410, Jardines de la Hacienda, Querétaro, Qro.
- **Horario:** L–V 8:30–18:00 · Sábados con cita previa
- **Envíos:** artículos ligeros a todo México · plantas grandes por fletera · instalación solo en QRO
- **IVA:** incluido en precio · CFDI disponible si se solicita
- **Fotos del portafolio:** propiedad de Paisare, sin restricciones de uso

---

## Pendientes técnicos activos

### INFRAESTRUCTURA (bloquean Fase 2)

| ID | Pendiente | Necesita |
|---|---|---|
| I1 | Crear cuenta en Cloudflare y verificar dominio `paisare.com` | Cliente / equipo |
| I2 | Crear workspace en Sanity con correo del proyecto | Cliente / equipo |
| I3 | Acceso al DNS del dominio para apuntar subdominio `nuevo.paisare.com` a CF Pages | Cliente / equipo |
| I4 | Crear cuenta de GitHub (o confirmar repo `reguer/paisare-redesign`) como repositorio de despliegue | Confirmado — ya existe |

### CONTENIDO (bloquean Fase 3 y 4)

| ID | Pendiente | Necesita |
|---|---|---|
| C1 | Exportar artículos del blog de WordPress (XML de WP admin) para migración a Sanity | Acceso a WP admin — confirmado (P12) |
| C2 | Lista definitiva de proyectos del portafolio para crear carpetas en `assets/portfolio/` | Cliente |
| C3 | Logos de clientes en PNG/SVG con fondo transparente → subir a `assets/logos/clientes/` | Cliente |
| C4 | Revisión y ajuste de las 10 respuestas del FAQ autogenerado | Cliente |
| C5 | Foto del equipo de Paisare para página Nosotros | Cliente (opcional, pero recomendado) |

### TIENDA (bloquean Fase 6)

| ID | Pendiente | Necesita |
|---|---|---|
| T1 | Catálogo inicial de productos con: nombre, descripción, precio (o rango), categoría, fotos | Cliente |
| T2 | Cuenta de Mercado Pago Seller con API keys (producción y sandbox) | Cliente |
| T3 | Políticas de envío: costo por peso/zona, paqueterías aceptadas, flujo para fletera externa | Cliente |
| T4 | Políticas de devolución (actualmente "sin devoluciones") — definir para activar la tienda | Cliente |

### PÁGINAS PRIVADAS DE CLIENTE (bloquean Fase 5)

| ID | Pendiente | Necesita |
|---|---|---|
| P1 | Lista de primeros proyectos/clientes que usarán el portal privado | Cliente |
| P2 | Confirmar si cada cliente tiene correo electrónico para recibir el magic link de Cloudflare Access | Cliente |

### ANALYTICS (no bloquea, pero registrar antes del lanzamiento)

| ID | Pendiente | Necesita |
|---|---|---|
| A1 | Confirmar si GA4 ya tiene datos históricos de paisare.com (para exportar baseline antes del flip de DNS) | Verificar en Google Analytics |
| A2 | Decidir: ¿Cloudflare Web Analytics únicamente, o GA4 también para eventos? | Cliente |

### INFRAESTRUCTURA FUTURA

| ID | Pendiente | Necesita |
|---|---|---|
| U1 | Evaluar Umbrel Pro como hosting alternativo a Cloudflare Pages (Fase 9, post-lanzamiento) | Investigación técnica + decisión del cliente |
| U2 | Confirmar si el email `@paisare.com` está en Google Workspace o en el hosting compartido actual | Cliente |

---

## Inventario de assets pendientes

| Asset | Ubicación destino | Estado |
|---|---|---|
| Logos de clientes (PNG/SVG fondo transparente) | `assets/logos/clientes/` | Carpeta creada, esperando archivos |
| Imágenes de proyectos del portafolio | `assets/portfolio/[nombre-proyecto]/` | Carpetas pendientes de crear (espera lista de proyectos C2) |
| Imágenes generales de apoyo | `assets/portfolio/general/` | Carpeta creada |
| Foto del equipo de Paisare | `assets/equipo/` o subida directa a Sanity | Pendiente |

---

## Notas sobre el cambio de stack (2026-04-28)

Los siguientes pendientes técnicos del plan anterior ya no aplican con el nuevo stack Astro + Sanity:

- ~~T6 — Decidir si se usa ACF para campos personalizados~~ → Sanity schemas son el equivalente
- ~~T11 — Evaluar Umbrel para producción~~ → Reemplazado por U1 (evaluación en Fase 9)
- ~~Fase 0.5 (baseline WordPress)~~ → Ya no se necesita configurar WordPress nuevo. Solo se exporta el contenido para migración (C1)
