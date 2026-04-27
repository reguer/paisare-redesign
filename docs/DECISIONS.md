# Decisiones del proyecto
**Agente:** Change Manager  
**Actualizar:** cada vez que se toma una decisión importante

---

## D01 — Stack final: WordPress tradicional + WooCommerce + tema propio
**Fecha:** 2026-04-27  
**Decisión:** El stack final será WordPress tradicional moderno + WooCommerce + tema PHP propio y ligero, sin page builder.  
**Por qué:** Preserva todo el contenido existente sin migración de datos, WooCommerce es el estándar para tiendas WordPress, y la plantilla HTML se convierte directamente en templates PHP. Headless queda como alternativa futura documentada.  
**Alternativa descartada:** Headless (Next.js/Astro + WordPress API) — mayor complejidad sin beneficio proporcional en esta etapa.

---

## D02 — Archivo canónico de Epics en docs/epics/
**Fecha:** 2026-04-27  
**Decisión:** El archivo canónico de Epics & Stories es `docs/epics/website-redesign-epics-stories.md`. El archivo raíz `EPICS_AND_STORIES.md` es solo un índice/resumen con link al canónico.  
**Por qué:** Mantener una sola fuente de verdad. El archivo raíz facilita encontrar el doc rápidamente, pero el contenido completo vive en `docs/`.

---

## D03 — Tweaks panel removido de producción
**Fecha:** 2026-04-27  
**Decisión:** El `#tweaks-panel` se remueve del HTML de producción en Lote 1B. Se documenta en `docs/frontend/tweaks-panel-reference.md`.  
**Por qué:** El panel es una herramienta de Claude Design que no tiene función en producción. Su código de postMessage es overhead innecesario.

---

## D04 — Schema/OG solo con datos validados
**Fecha:** 2026-04-27  
**Decisión:** No agregar OpenGraph ni Schema.org con campos no validados. Los campos pendientes de confirmar con el cliente van como comentarios `<!-- TODO: validar P5 -->`.  
**Por qué:** Publicar Schema con datos incorrectos (teléfono, dirección, horario) es peor que no tenerlo — puede confundir a Google y a los clientes.

---

## D05 — Tienda: catálogo cotizable antes de checkout
**Fecha:** 2026-04-27  
**Decisión:** La primera iteración de la tienda es un catálogo visual con productos cotizables (sin checkout). El checkout real se activa solo cuando estén definidos precios, inventario, IVA/CFDI, métodos de pago, envíos, cobertura, políticas y términos.  
**Por qué:** Evitar riesgos operativos de lanzar una tienda incompleta. El catálogo cotizable genera leads sin comprometer la experiencia.

---

## D06 — No tocar main directamente
**Fecha:** 2026-04-27  
**Decisión:** Todo desarrollo en ramas feature. No commits directos a main. PR obligatorio para merge.  
**Por qué:** Proteger la estabilidad del código principal y mantener trazabilidad de cambios.

---

## D07 — Inventario de assets antes de descargar imágenes
**Fecha:** 2026-04-27  
**Decisión:** Antes de descargar cualquier imagen del servidor de producción al repo, se crea el inventario en `docs/audit/image-asset-inventory.md` con URL original, nombre local, uso, alt text, tamaño y estado de optimización. La descarga ocurre solo después de aprobar el inventario.  
**Por qué:** Evitar descargar imágenes incorrectas, mantener trazabilidad y asegurar optimización (WebP, lazy load) desde el inicio.

---

## D08 — Formulario actual no es productivo
**Fecha:** 2026-04-27  
**Decisión:** El formulario de contacto actual (`#contact-form`) es solo visual y no debe usarse en producción. Para producción se requiere: endpoint real, validación server-side, antispam real, rate limiting y confirmación por email.  
**Por qué:** El formulario actual simula el envío sin enviarlo realmente. Publicarlo así generaría expectativas falsas en el cliente y no capturaría ningún lead real.
