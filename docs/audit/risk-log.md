# Registro de riesgos
**Agente:** Repo Auditor  
**Fecha:** 2026-04-27  
**Epic/Story:** E1-S1.3  
**Actualizar:** cada vez que se cierra o se detecta un nuevo riesgo

---

## Tabla de riesgos

### Alta prioridad

| ID | Riesgo | Descripción | Fase que lo resuelve | Estado |
|---|---|---|---|---|
| R01 | WhatsApp placeholder | `524420000000` hardcodeado en 10+ `href` en el HTML | Lote 1A | Abierto |
| R02 | Imágenes en servidor de producción | Todas las imágenes cargan desde `paisare.com/wp-content/` — si el sitio baja o cambia, el prototipo se rompe | Fase 0.5 (inventario) → Fase 1 (descarga) | Abierto |
| R03 | Formulario sin backend | El formulario simula el envío; no hay SMTP, webhook ni validación server-side | Fase 5 (producción) | Abierto |
| R04 | Sin analytics | No hay GA4 ni eventos de conversión; no se puede medir nada | Epic 14 | Abierto |
| R05 | Datos de contacto no validados | Email `hola@paisare.com`, teléfono `+52 442 000 0000` y horario son placeholders | Pendiente P1, P2, P5 | Abierto |

### Prioridad media

| ID | Riesgo | Descripción | Fase que lo resuelve | Estado |
|---|---|---|---|---|
| R06 | Tweaks panel en producción | El `#tweaks-panel` de Claude Design se incluye en el HTML principal y no debe llegar a producción | Lote 1B | Abierto |
| R07 | Sin OpenGraph ni Schema en v1 | La versión activa carece de metadatos sociales y structured data | Lote 1B (solo campos validados) | Abierto |
| R08 | URLs de imágenes con `http://` | Varias imágenes del hero usan protocolo inseguro (`http://`) | Lote 1A | Abierto |
| R09 | Métricas no verificadas | Los contadores (27,060 plantas, 226 proyectos, 163 clientes, 1,095 cafés) no han sido confirmados con el cliente | Pendiente P3 | Abierto |
| R10 | Logos de clientes sin permiso verificado | Los 7 logos de clientes pueden no tener autorización vigente | Pendiente P4, Fase 2 | Abierto |
| R11 | Artículos del blog son placeholders | Las 3 cards de artículos apuntan a `paisare.com/blog-2/` genérico, no a posts reales | Fase 5 (integración WP) | Abierto |

### Prioridad baja

| ID | Riesgo | Descripción | Fase que lo resuelve | Estado |
|---|---|---|---|---|
| R12 | Sin favicon | No hay `favicon.ico` ni link de icono en el `<head>` | Lote 1B | Abierto |
| R13 | Nombre de archivo con espacios | `Paisare Redesign.html` tiene espacios — problemático en rutas de servidor | Fase 1 (renombrar a `index.html`) | Abierto |
| R14 | Sin sitemap.xml ni robots.txt | El prototipo no tiene sitemap ni robots; el sitio de producción sí los tiene | Epic 13, Fase 7 | Abierto (aplica al nuevo sitio) |
| R15 | Sin font-display: swap | Google Fonts no tiene `display=swap` en el import | Lote 1B | Abierto |
| R16 | Inline styles esparcidos | ~20 `style="background-image:url(...)"` en el HTML | Fase 1 (modularizar CSS) | Abierto |
| R17 | Proceso de contratación de 5 pasos, sin adaptación a tienda | La sección `#proceso` describe solo contratación de servicio, no compra de producto | Fase 2/3 | Abierto |

---

## Riesgos de migración (aplican a Fase 7)

| ID | Riesgo | Descripción | Bloquea |
|---|---|---|---|
| RM01 | URLs de producción sin mapa | Cambiar URLs sin redirect 301 elimina posicionamiento | Fase 7 — requiere inventario previo (Fase 0.5) |
| RM02 | Comentarios de WordPress pueden perderse | Migración de BD sin backup previo | Fase 5 — requiere export XML antes de cualquier cambio |
| RM03 | Tema Select legacy no documentado | El tema actual usa WPBakery; el contenido puede estar acoplado al builder | Fase 5 — auditoría de contenido antes de migrar |
| RM04 | Imágenes optimizadas vs. originales | WordPress genera tamaños múltiples; el nuevo tema debe replicarlos o regenerarlos | Fase 5 |

---

## Leyenda de estado

| Estado | Descripción |
|---|---|
| Abierto | Riesgo activo, no mitigado |
| En progreso | Se está trabajando en la mitigación |
| Mitigado | Acción tomada, riesgo controlado |
| Cerrado | Riesgo eliminado completamente |
| Aceptado | Riesgo conocido, se acepta sin acción |
