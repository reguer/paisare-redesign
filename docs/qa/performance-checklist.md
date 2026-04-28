# Checklist de performance
**Agente:** QA & Accessibility Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E15

---

## Métricas objetivo (Core Web Vitals)

| Métrica | Objetivo | Descripción |
|---|---|---|
| LCP | < 2.5s | Largest Contentful Paint — imagen o texto principal |
| INP | < 200ms | Interaction to Next Paint — respuesta a interacciones |
| CLS | < 0.1 | Cumulative Layout Shift — estabilidad visual |
| TTFB | < 800ms | Time to First Byte |
| FCP | < 1.8s | First Contentful Paint |

---

## Imágenes

- [ ] Todas las imágenes están en formato WebP (o con `<picture>` fallback)
- [ ] Imágenes tienen atributo `width` y `height` para evitar CLS
- [ ] Imágenes fuera del viewport usan `loading="lazy"`
- [ ] Imagen del hero (LCP) usa `loading="eager"` y `fetchpriority="high"`
- [ ] No hay imágenes cargadas a 2000px+ que se muestran a 400px
- [ ] `srcset` y `sizes` para imágenes responsivas

## Fuentes

- [ ] Google Fonts tiene `display=swap` (agregado en Lote 1B)
- [ ] Google Fonts usa `preconnect` (ya en v1)
- [ ] Solo se cargan los pesos de fuente realmente usados
- [ ] No hay FOUT/FOIT perceptible en conexiones lentas

## CSS y JS

- [ ] CSS no bloqueante (en Fase 1 con archivos externos: verificar que no hay render-blocking)
- [ ] JS diferido (`defer` o `async` donde aplica)
- [ ] No hay JS bloqueante en el `<head>`
- [ ] CSS y JS minificados en producción (Fase 5+, con WordPress)

## Caché y servidor (aplica Fase 5+)

- [ ] Caché de browser configurado (headers Cache-Control)
- [ ] Plugin de caché activo en WordPress (WP Super Cache o equivalente)
- [ ] CDN configurado para assets estáticos (Cloudflare o equivalente)
- [ ] GZIP o Brotli activo en servidor

## Validación

- [ ] PageSpeed Insights ≥ 90 en mobile
- [ ] PageSpeed Insights ≥ 95 en desktop
- [ ] Core Web Vitals en verde en Search Console
- [ ] WebPageTest o GTmetrix confirmado

---

## Problemas de performance actuales (prototipo v1)

| Problema | Impacto | Fase que lo resuelve |
|---|---|---|
| Imágenes remotas sin WebP | Alto (LCP) | Fase 1 (inventario + descarga + conversión) |
| Hero usa `background-image` (no LCP-optimizable) | Alto | Fase 1 (evaluar conversión a `<img>`) |
| Sin `display=swap` en Google Fonts | Medio | Lote 1B |
| Sin `width`/`height` en imágenes | Medio (CLS) | Fase 1 |
| Todo CSS/JS inline (no cacheable) | Medio | Fase 1 (extracción a archivos) |
| Sin minificación | Bajo | Fase 5 (WordPress con caché) |
