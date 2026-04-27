# Fases de migración WordPress
**Agente:** CMS / WordPress Migration Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E12, E13, E17

---

## Regla base

**No tocar el sitio de producción hasta que el staging esté aprobado por el cliente.**

Cada fase debe completarse y aprobarse antes de iniciar la siguiente.

---

## Fase 5A — Preparar staging

1. Contratar hosting de staging (puede ser el mismo proveedor con subdominio: `staging.paisare.com`)
2. Instalar WordPress limpio (versión LTS más reciente)
3. Instalar WooCommerce (sin activar checkout todavía)
4. Instalar plugins mínimos de la lista aprobada
5. Importar XML de WordPress de producción (posts, páginas, portafolio, comentarios)
6. Verificar que todos los posts y páginas importaron correctamente
7. Configurar Akismet en staging

---

## Fase 5B — Crear tema propio

1. Crear estructura base del tema en `wp-content/themes/paisare/`
2. Convertir `Paisare Redesign.html` (o `index.html` en Fase 1) en templates PHP:
   - `front-page.php` — home
   - `page.php` — páginas genéricas
   - `single.php` — posts individuales
   - `archive.php` — listados de categorías y blog
   - `header.php` + `footer.php`
   - `single-proyecto.php` — caso de estudio
   - `archive-proyecto.php` — portafolio
   - `single-servicio.php` — página de servicio
   - `page-contacto.php` — contacto con formularios
3. Registrar menús, CPTs, taxonomías y campos en `functions.php`
4. Enqueue CSS/JS correctamente (sin embeds inline)
5. Activar tema en staging

---

## Fase 5C — Verificar contenido migrado

- [ ] Home funciona correctamente con tema nuevo
- [ ] Todos los posts están publicados con slugs correctos
- [ ] Todas las páginas están en su URL correcta
- [ ] Portafolio importado y visible
- [ ] Comentarios aprobados visibles en posts correspondientes
- [ ] Imágenes cargan correctamente (actualizar URLs si cambia el dominio)
- [ ] Menús de navegación funcionan
- [ ] Formularios de contacto funcionan con backend real
- [ ] Antispam activo

---

## Fase 7 — Migración a producción

### Pre-lanzamiento
1. Staging aprobado por cliente (diseño + contenido + funcionalidad)
2. Backup de producción actual (BD + archivos)
3. Mapa de redirecciones probado en staging
4. DNS preparado (TTL reducido 24h antes)
5. Certificado SSL listo en nuevo servidor

### Día de lanzamiento
1. Poner WordPress de producción en modo mantenimiento
2. Exportar BD de producción (snapshot final)
3. Importar snapshot final en nuevo servidor/staging
4. Actualizar URLs en BD (`wp-cli search-replace`)
5. Apuntar DNS al nuevo servidor
6. Verificar SSL activo
7. Desactivar modo mantenimiento
8. Verificar sitemap.xml y robots.txt
9. Enviar sitemap a Google Search Console
10. Verificar que páginas críticas indexan correctamente

### Post-lanzamiento (primeras 48h)
- Monitorear errores 404 en Search Console
- Monitorear Analytics para detectar caídas anómalas de tráfico
- Verificar formularios en producción real
- Verificar checkout si está activo
- Verificar WhatsApp en todos los botones

---

## Checkpoints de aprobación requeridos

| Checkpoint | Quién aprueba | Estado |
|---|---|---|
| Diseño aprobado en staging | Cliente | Pendiente |
| Contenido aprobado (posts, páginas, portafolio) | Cliente | Pendiente |
| Formularios funcionando | QA | Pendiente |
| Mapa de redirecciones aprobado | Cliente + QA | Pendiente |
| Tienda configurada (si aplica) | Cliente | Pendiente |
| Go/no-go de lanzamiento | Cliente + Equipo Paisare | Pendiente |
