# Pendientes y preguntas bloqueantes
**Agente:** Change Manager  
**Actualizar:** cada vez que se resuelve o agrega un pendiente

---

## Pendientes bloqueantes (requieren respuesta del cliente)

| ID | Pregunta | Bloquea | Estado |
|---|---|---|---|
| P1 | ¿Cuál es el número real de WhatsApp de Paisare? | Lote 1A, todos los botones WA | **RESUELTO** 2026-04-27 |
| P2 | ¿El correo correcto para recibir solicitudes? | Lote 1A, formularios | **RESUELTO** 2026-04-27 |
| P3 | ¿Las métricas del sitio son correctas?: 27,060 plantas · 226 proyectos · 163 clientes | Fase 2 (sección stats) | **RESUELTO** 2026-04-27 — ver nota |
| P4 | ¿Los 7 logos de clientes tienen permiso de uso vigente? | Fase 2 (sección clientes) | **RESUELTO** 2026-04-27 — ver nota |
| P5 | ¿Dirección exacta, teléfono oficial y horario? | Lote 1B (Schema/OG), Footer | **PARCIALMENTE RESUELTO** 2026-04-27 |
| P6 | ¿IVA, facturas y métodos de pago? | Fase 6 (checkout) | **RESUELTO** 2026-04-27 — ver notas |
| P7 | ¿Hay envíos a domicilio o solo recolección en Querétaro? ¿Cuál es el costo de envío? | Fase 6 (checkout) | Abierto |
| P8 | ¿Cuál es el radio o zonas de cobertura de envíos? | Fase 6 (checkout) | Abierto |
| P9 | ¿Existe un catálogo de productos con nombres, descripciones, precios y SKUs? ¿Hay stock administrado? | Fase 3 (tienda catálogo) | Abierto |
| P10 | ¿El dominio `paisare.com` se conserva en el mismo servidor o se migra a uno nuevo? | Fase 7 (migración) | Abierto |
| P11 | ¿Hay acceso a Google Search Console y/o GA4 del sitio actual? ¿Quién tiene la cuenta? | Fase 0.5 (baseline SEO) | Abierto |
| P12 | ¿Hay acceso al admin de WordPress del sitio actual? ¿Quién tiene las credenciales? | Fase 0.5 (baseline WP) | Abierto |
| P13 | ¿Cuáles son las políticas de devolución, cambio y cancelación de la tienda? | Fase 6 (checkout) | Abierto |
| P14 | ¿Las fotos del portafolio son propiedad de Paisare o requieren crédito/permiso del fotógrafo para publicarse? | Fase 4 (portafolio) | Abierto |

---

## Pendientes técnicos (no bloquean la Fase 0, pero sí fases siguientes)

| ID | Pendiente | Bloquea |
|---|---|---|
| T1 | Inventario de assets de imágenes (`docs/audit/image-asset-inventory.md`) — hacer antes de descargar imágenes | Fase 1 (assets) |
| T2 | Crawl de `paisare.com` para inventario de URLs | Fase 0.5 |
| T3 | Verificar sitemap.xml y robots.txt de producción | Fase 0.5 |
| T4 | Definir qué pasarela de pago se usará (Conekta, Stripe MX, OpenPay, etc.) | Fase 6 |
| T5 | Definir si se usa ACF para campos personalizados o un plugin alternativo | Fase 5 |
| T6 | Definir hosting para staging (subdominio, VPS, etc.) | Fase 5 |

---

## Pendientes resueltos

| ID | Pregunta | Respuesta | Fecha |
|---|---|---|---|
| P1 | Número de WhatsApp | `524427730857` / Display: `+52 442 773 0857` | 2026-04-27 |
| P2 | Email de contacto | `contacto@paisare.com` (reemplazó a `hola@paisare.com`) | 2026-04-27 |

### Notas de resolución

**P3 — Métricas (sección #stats):**  
Las métricas actuales (27,060 plantas, 226 proyectos, 163 clientes, 1,095 tazas de café) **no son datos reales** y están desactualizadas. El cliente propone **eliminar la sección `#stats` completa del diseño** si no hay datos verídicos que reemplazarla. Pendiente confirmar: ¿se elimina definitivamente o se reemplaza con nuevas métricas reales?

**P4 — Logos de clientes:**  
Los 7 logos actuales están desactualizados. Existen nuevos logos. Pendiente: el cliente debe proveer los nuevos archivos de logos para la sección `#clientes`.

**P6 — Métodos de pago y facturación:**
- **IVA:** incluido en el precio mostrado (no se desglosa al cliente)
- **Facturas/CFDI:** disponibles si el cliente las solicita
- **Métodos de pago aceptados:**
  - Tarjeta de crédito/débito (precio incluye comisión de procesador)
  - Crypto — USDT únicamente
  - Transferencia bancaria (SPEI)
  - PayPal
- **Pendiente para Fase 6:** confirmar pasarela de pago para tarjeta (Conekta, Stripe, OpenPay u otro), datos de cuenta CLABE para SPEI, wallet USDT oficial

---

**P5 — Datos de contacto (parcial):**  
- **Dirección exacta** (para Schema.org únicamente): Hacienda el Salitre 410, Jardines de la Hacienda, Querétaro, Querétaro, México  
- **Footer / información pública**: Solo "Querétaro, México" (por seguridad — el cliente prefiere contacto digital o telefónico)  
- **Teléfono de oficina**: `4422155474` / Display: `+52 442 215 5474`  
- **Horario**: 8:30–18:00 hrs (días de la semana: pendiente confirmar si aplica L–V o incluye sábados)  
- **Falta confirmar**: ¿El horario aplica de lunes a viernes únicamente o incluye sábados?
