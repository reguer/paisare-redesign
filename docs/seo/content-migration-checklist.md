# Checklist de migración de contenido
**Agente:** SEO Preservation Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E13, E8

---

## Pre-migración (completar antes de tocar producción)

### Backup
- [ ] Backup completo de la base de datos de WordPress
- [ ] Backup de todos los archivos del servidor (wp-content/)
- [ ] Backup guardado en ubicación externa (no solo en el mismo servidor)
- [ ] Backup verificado (restaurar en entorno de prueba)

### Inventario
- [ ] Exportar XML completo desde WordPress (Herramientas → Exportar → Todo el contenido)
- [ ] Inventario de posts: slug, título, fecha, categorías, tags, estado, comentarios
- [ ] Inventario de páginas: slug, título, template, estado
- [ ] Inventario de portfolio: slug, título, categoría, imágenes
- [ ] Inventario de comentarios: cantidad, estado (aprobado/spam/pendiente), post relacionado
- [ ] Inventario de categorías y tags: slug, nombre, descripción, posts asociados
- [ ] Inventario de imágenes: URL, tamaño, alt text, uso (post/página/portfolio)
- [ ] Inventario de plugins activos y configuración
- [ ] Inventario de usuarios y roles

---

## Posts / artículos

- [ ] Todos los slugs identificados y listados
- [ ] Decisión por cada post: conservar / redirigir / fusionar / despublicar
- [ ] Metadatos SEO exportados (Yoast o RankMath)
- [ ] Fechas de publicación y modificación documentadas
- [ ] Autores documentados
- [ ] Imágenes descargadas y catalogadas
- [ ] Categorías y tags mapeados a nueva estructura

---

## Comentarios

- [ ] Exportar comentarios aprobados
- [ ] Verificar que comentarios spam no se importan
- [ ] Configurar Akismet o equivalente en nuevo sitio antes de importar
- [ ] Probar formulario de comentarios en staging

---

## Imágenes

- [ ] Descargar todas las imágenes de `wp-content/uploads/`
- [ ] Organizar por año/mes (estructura de WordPress)
- [ ] Verificar alt text de cada imagen
- [ ] Regenerar thumbnails en nuevo tema
- [ ] Actualizar URLs en base de datos si el dominio o path cambia (`wp-cli search-replace`)

---

## Páginas y plantillas

- [ ] Inventario de todas las páginas activas
- [ ] Identificar qué páginas usan WPBakery (contenido puede estar serializado)
- [ ] Limpiar contenido serializado de WPBakery en nuevo tema
- [ ] Verificar que cada página tiene title y description en nuevo tema

---

## Lanzamiento

- [ ] Staging verificado por cliente
- [ ] Mapa de redirecciones probado en staging
- [ ] Google Search Console lista para reindexar
- [ ] Sitemap.xml del nuevo sitio verificado
- [ ] Robots.txt del nuevo sitio verificado
- [ ] Herramienta de inspección de URLs en Search Console lista
- [ ] DNS listo para apuntar al nuevo servidor
- [ ] Certificado SSL listo en nuevo servidor
- [ ] Monitoreo de errores 404 activo post-lanzamiento (Search Console → Cobertura)
