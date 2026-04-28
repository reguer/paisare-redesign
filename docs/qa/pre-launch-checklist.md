# Checklist pre-lanzamiento
**Agente:** QA & Accessibility Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E15, E17

---

## Contenido

- [ ] Número de WhatsApp real y verificado (pendiente P1)
- [ ] Email de contacto real y verificado (pendiente P2)
- [ ] Teléfono de oficina real (pendiente P5)
- [ ] Dirección real y correcta (pendiente P5)
- [ ] Horario de atención verificado (pendiente P5)
- [ ] Métricas (plantas, proyectos, clientes) verificadas con cliente (pendiente P3)
- [ ] Logos de clientes con permiso de uso confirmado (pendiente P4)
- [ ] Artículos del blog son reales (no placeholders)
- [ ] Imágenes del portafolio con permiso de publicación (pendiente P14)
- [ ] No hay textos en inglés ni contenido de demostración
- [ ] Copyright con año correcto

## Legal

- [ ] Aviso de privacidad publicado y enlazado
- [ ] Términos y condiciones (si aplica — especialmente para tienda)
- [ ] Política de devoluciones (si aplica — tienda)
- [ ] Política de cookies / RGPD si se usa analytics

## Formularios

- [ ] Backend real conectado (no simulado)
- [ ] Validación server-side activa
- [ ] Antispam real (no solo honeypot)
- [ ] Rate limiting activo
- [ ] Confirmación por email al usuario funcionando
- [ ] Notificación interna al equipo Paisare funcionando
- [ ] Formulario de cotización de proyecto
- [ ] Formulario de tienda/producto
- [ ] Formulario de mantenimiento

## SEO

- [ ] Title y meta description en todas las páginas
- [ ] H1 único por página
- [ ] Canonical URLs configuradas
- [ ] Sitemap.xml accesible y enviado a Search Console
- [ ] Robots.txt correcto
- [ ] Schema.org validado con Rich Results Test
- [ ] Sin errores en Search Console
- [ ] URLs antiguas con redirect 301 probados

## Analytics

- [ ] GA4 activo y verificado
- [ ] Eventos de conversión configurados (WhatsApp, formularios, tienda)
- [ ] No hay tráfico de prueba contaminando datos (usar filtros de IPs del equipo)

## Seguridad

- [ ] HTTPS activo (certificado SSL vigente)
- [ ] WordPress actualizado a versión más reciente
- [ ] Plugins actualizados
- [ ] Contraseña del admin de WordPress es segura (no "admin"/"admin")
- [ ] Akismet activo
- [ ] Plugin de seguridad activo (Wordfence o equivalente)

## Performance

- [ ] PageSpeed Insights ≥ 90 en mobile
- [ ] Core Web Vitals en verde
- [ ] Plugin de caché activo

## QA funcional

- [ ] Navegación completa en desktop y mobile
- [ ] Hero slider funciona
- [ ] Filtros de portafolio funcionan
- [ ] Todos los botones WhatsApp funcionan
- [ ] Formularios funcionan end-to-end
- [ ] Tienda funcional (si está activa)
- [ ] Comentarios funcionan en blog
- [ ] Sin errores 404 en páginas internas

## Backup

- [ ] Backup completo antes del lanzamiento
- [ ] Backup guardado en ubicación externa
- [ ] Plan de rollback documentado (cómo revertir si algo falla)
