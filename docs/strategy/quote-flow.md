# Flujos de cotización
**Agente:** UX & Conversion Strategist  
**Fecha:** 2026-04-27  
**Epic/Story:** E10

---

## Flujo 1 — Cotización de proyecto

**Trigger:** Botón "Cotizar proyecto" en hero, nav, o página de servicio

**Canal A: WhatsApp directo**
1. Usuario click en CTA "Cotizar proyecto"
2. Abre WhatsApp con mensaje contextual pre-cargado
3. Paisare responde y agenda llamada o visita

**Canal B: Formulario**
1. Usuario va a `#contacto` o página `/contacto`
2. Selecciona tipo "Proyecto"
3. Completa campos: nombre, teléfono, correo, tipo de proyecto, ubicación, m² aprox., tipo de propiedad, presupuesto estimado, comentarios
4. Adjunta fotos o plano (Fase futura — requiere backend con upload)
5. Submit → confirmación por email al cliente + notificación interna
6. Equipo Paisare hace seguimiento en 24-48h

**Campos mínimos:**
- Nombre completo (requerido)
- Teléfono (requerido)
- Correo electrónico (requerido)
- Tipo de proyecto: Paisajismo / Construcción exterior / Riego / Mantenimiento / Lagos / Otro
- Ubicación / colonia (requerido)
- Metros cuadrados aproximados (opcional)
- Tipo de propiedad: Residencial / Comercial / Industrial / Condominio
- Comentarios (requerido)
- Acepto aviso de privacidad (requerido)

---

## Flujo 2 — Cotización de material / producto de tienda

**Trigger:** Botón "Cotizar por WhatsApp" en ficha de producto o sección tienda

**Canal A: WhatsApp con producto**
1. Usuario está en ficha de producto
2. Click en "Cotizar por WhatsApp"
3. Mensaje pre-cargado incluye nombre del producto
4. Paisare responde con precio, disponibilidad y opciones de entrega

**Canal B: Formulario de tienda**
1. Usuario va a formulario de tienda
2. Completa: nombre, teléfono, correo, producto de interés, cantidad aproximada, unidad, ubicación de entrega, ¿requiere instalación?, comentarios
3. Submit → notificación interna con detalle del producto

**Campos mínimos:**
- Nombre completo (requerido)
- Teléfono (requerido)
- Correo electrónico (requerido)
- Producto de interés (texto libre o selección)
- Cantidad aproximada (numérico)
- Unidad: pieza / m² / m³ / rollo / saco / kg / otro
- Ubicación de entrega (requerido)
- ¿Requiere instalación? (sí / no / no sé)
- Comentarios (opcional)

---

## Flujo 3 — Mantenimiento

**Trigger:** Servicio de Mantenimiento, formulario dedicado

**Campos mínimos:**
- Nombre completo
- Teléfono
- Correo
- Tipo de propiedad: Residencial / Comercial / Condominio
- Área aproximada (m²)
- Frecuencia deseada: Semanal / Quincenal / Mensual / A definir
- Ubicación / colonia
- Descripción del área
- Acepto aviso de privacidad

---

## Reglas generales para formularios

1. **No activar en producción sin backend real.** El formulario actual es solo visual.
2. **Validación doble:** client-side para UX + server-side para seguridad.
3. **Antispam real:** Honeypot (ya existe) + hCaptcha o Turnstile en producción.
4. **Rate limiting:** máximo 3 envíos por IP en 10 minutos.
5. **Confirmación:** El usuario debe recibir un email de confirmación de recepción.
6. **Notificación interna:** El equipo Paisare debe recibir notificación inmediata (email + WhatsApp si posible).
7. **No enviar datos sensibles en URL.** Usar POST, no GET.
8. **Aviso de privacidad** obligatorio en todos los formularios.

---

## Prioridad de canales de contacto

Para Paisare, la conversión por WhatsApp es probablemente más alta que por formulario dado el perfil del cliente en México. El orden recomendado:

1. WhatsApp (más rápido, más adoptado en México)
2. Formulario (para clientes que prefieren detallar por escrito)
3. Teléfono (pendiente P5 — confirmar número de oficina)
4. Email directo (para clientes corporativos)
