# Plan de preservación SEO
**Agente:** SEO Preservation Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E13

---

## Principio rector

No se modifica ninguna URL de producción sin mapa de redirecciones 301 aprobado. No se lanza el nuevo sitio sin haber verificado que Google Search Console sigue indexando las páginas importantes. El SEO del sitio actual es un activo que debe preservarse durante toda la transición.

---

## Estado SEO actual (pendiente de validar en Fase 0.5)

| Elemento | Estado | Acción requerida |
|---|---|---|
| Sitemap.xml | Desconocido — verificar en paisare.com/sitemap.xml | Fase 0.5 |
| Robots.txt | Desconocido — verificar en paisare.com/robots.txt | Fase 0.5 |
| Search Console | Desconocido — verificar acceso (P11) | Fase 0.5 |
| GA4 / Analytics | Desconocido — verificar (P11) | Fase 0.5 |
| Canonicals | Desconocido — auditar con crawl | Fase 0.5 |
| OpenGraph / Schema | Parcial en sitio actual | v2/v3 tienen Schema, v1 no |

---

## Checklist de auditoría SEO de producción (Fase 0.5)

### Crawl básico
- [ ] Crawl completo de `paisare.com` con Screaming Frog, Ahrefs o Google Search Console
- [ ] Exportar todas las URLs indexadas (páginas, posts, categorías, tags, portafolio)
- [ ] Identificar páginas con tráfico orgánico (Search Console → Performance)
- [ ] Identificar páginas con backlinks (Ahrefs o Search Console → Links)
- [ ] Verificar errores 404 existentes
- [ ] Verificar redirecciones actuales
- [ ] Verificar URLs canónicas

### Metadatos
- [ ] Exportar title y meta description de cada página
- [ ] Identificar páginas sin title o description
- [ ] Identificar duplicados de title/description
- [ ] Verificar H1 por página

### Técnico
- [ ] Verificar robots.txt (`paisare.com/robots.txt`)
- [ ] Verificar sitemap.xml (`paisare.com/sitemap.xml`)
- [ ] Verificar PageSpeed Insights del sitio actual
- [ ] Verificar Core Web Vitals en Search Console
- [ ] Verificar mobile-friendliness en Search Console
- [ ] Verificar HTTPS en todas las páginas

---

## URLs que deben preservarse (a confirmar en Fase 0.5)

Las siguientes URLs son conocidas y probablemente tienen tráfico o backlinks:

| URL probable | Tipo | Decisión tentativa |
|---|---|---|
| `paisare.com/` | Home | Conservar URL, nuevo contenido |
| `paisare.com/servicios/` | Servicios | Conservar o redirigir a hub de servicios |
| `paisare.com/portafolio/` | Portfolio | Conservar URL |
| `paisare.com/blog-2/` | Blog | Conservar URL o redirigir a `/blog/` (revisar) |
| `paisare.com/sobre-nosotros/` | Nosotros | Conservar URL |
| `paisare.com/contacto/` | Contacto | Conservar URL |
| `paisare.com/blog-2/[slug]/` | Posts | Conservar todos los slugs |

**Nota:** Esta tabla es tentativa. La lista definitiva se genera en Fase 0.5 con el crawl real.

---

## Estrategia de redirecciones

### Reglas
1. Todo cambio de URL requiere redirect 301 (permanente), no 302.
2. No crear cadenas de redirecciones (A → B → C). Deben ser directas (A → C).
3. No crear loops.
4. Probar en staging antes de aplicar en producción.
5. Registrar en `docs/seo/redirect-map.csv`.

### Casos de uso
- URL renombrada: redirect 301 de URL vieja a nueva
- Página eliminada con contenido valioso: fusionar contenido y 301 a página destino
- Página sin tráfico y sin backlinks: puede eliminarse con 410 o dejarla
- Slug de post cambiado: 301 del slug antiguo al nuevo

---

## Schema.org requerido

| Tipo | Aplica a | Estado |
|---|---|---|
| `Organization` | Sitio global | Pendiente validación de datos (P5) |
| `LocalBusiness` + `LandscapeService` | Home y Servicios | Pendiente validación (P5) |
| `Service` | Cada página de servicio | Fase 4 |
| `Product` | Cada ficha de producto | Fase 3 |
| `Article` | Cada post del blog | Fase 5 |
| `BreadcrumbList` | Páginas internas | Fase 4/5 |
| `FAQPage` | Páginas de servicio y tienda | Fase 4 |

**Regla:** Ningún campo de Schema se agrega con datos no confirmados. Los campos pendientes de validación van como comentarios `<!-- TODO: validar P5 -->`.

---

## Preservación de contenido

### Posts / artículos
- Conservar todos los slugs exactamente iguales
- Conservar fechas de publicación
- Conservar autores
- Conservar categorías y tags (mapearlos si cambian de slug)
- Conservar imágenes (descargar a media library del nuevo tema)
- Conservar metadatos SEO (Yoast/RankMath → migrar a equivalente en nuevo tema)

### Comentarios
- Exportar desde WordPress como XML
- Importar en nuevo tema/instalación
- Solo comentarios aprobados deben ser visibles
- Mantener antispam activo (Akismet o equivalente)

### Imágenes del blog
- Conservar todas las imágenes de posts
- Actualizar URLs si cambia el dominio o estructura de uploads
- Regenerar thumbnails en nuevo tema si es necesario

---

## Archivos SEO de soporte

| Archivo | Propósito | Estado |
|---|---|---|
| `docs/seo/url-inventory-template.csv` | Plantilla para inventario de URLs | Creado (Fase 0) |
| `docs/seo/url-inventory.csv` | Inventario real (crawl) | Fase 0.5 |
| `docs/seo/redirect-map-template.csv` | Plantilla para mapa de redirecciones | Creado (Fase 0) |
| `docs/seo/redirect-map.csv` | Mapa real de redirecciones | Fase 7 |
| `docs/seo/content-migration-checklist.md` | Checklist de migración de contenido | Creado (Fase 0) |
