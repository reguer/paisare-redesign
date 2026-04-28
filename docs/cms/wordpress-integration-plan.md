# Plan de integración WordPress
**Agente:** CMS / WordPress Migration Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E12-S12.1

---

## Arquitectura final recomendada

**WordPress tradicional moderno + WooCommerce + tema propio ligero**

- WordPress como CMS principal
- WooCommerce como motor de tienda
- Tema PHP propio (sin page builder) basado en la plantilla HTML de este repositorio
- Plugins mínimos y auditados
- Sin WPBakery (eliminar en la migración)
- Headless solo como alternativa futura si se justifica por escala o performance

---

## Comparativa de enfoques

| Criterio | WordPress clásico + tema propio | Headless WP + Astro/Next | Plataforma SaaS |
|---|---|---|---|
| Preservación de contenido | Total | Total (API) | Requiere migración completa |
| Curva de desarrollo | Media | Alta | Baja |
| Control de diseño | Total | Total | Parcial |
| WooCommerce | Nativo | REST API (complejo) | No aplica |
| Performance | Buena con caché | Excelente | Buena |
| Administración por cliente | Familiar (WP admin) | Menos familiar | Interfaz dedicada |
| Costo de mantenimiento | Bajo-medio | Alto | Fijo mensual |

**Decisión:** WordPress clásico con tema propio. Headless queda como opción documentada para escalar en el futuro.

---

## Pasos de integración

### Paso 1 — Preparar staging (Fase 5)
- Crear entorno de staging idéntico a producción
- Instalar WordPress limpio + WooCommerce
- No tocar producción hasta que staging esté aprobado

### Paso 2 — Crear tema base (Fase 5)
- Crear estructura de tema WordPress mínima:
  - `style.css` con encabezado del tema
  - `functions.php` (enqueue CSS/JS, soporte de thumbnails, menús)
  - `index.php`, `header.php`, `footer.php`
  - `front-page.php` (home)
  - `page.php` (páginas genéricas)
  - `single.php` (posts individuales)
  - `archive.php` (categorías/tags)
  - `404.php`
- Convertir HTML de la plantilla en templates PHP

### Paso 3 — Registrar CPTs y campos (Fase 5)
Ver [custom-post-types.md](custom-post-types.md)

### Paso 4 — Migrar contenido (Fase 7)
- Backup completo
- Importar XML de WordPress
- Verificar posts, páginas, portafolio, comentarios
- Actualizar URLs de imágenes
- Probar en staging

### Paso 5 — Configurar WooCommerce (Fase 6)
- Instalar WooCommerce
- Configurar moneda, impuestos, envíos
- Configurar pasarela de pago
- Importar productos del catálogo
- Probar checkout completo

### Paso 6 — QA y lanzamiento (Fase 7)
Ver [docs/qa/pre-launch-checklist.md](../qa/pre-launch-checklist.md)

---

## Plugins a evaluar

| Categoría | Plugin | Estado |
|---|---|---|
| SEO | Yoast SEO o RankMath | Elegir uno |
| Antispam | Akismet | Activar desde el inicio |
| Caché | WP Super Cache o W3 Total Cache | Elegir uno |
| Imágenes | Smush o ShortPixel | Elegir uno |
| Seguridad | Wordfence o iThemes Security | Elegir uno |
| Backups | UpdraftPlus | Configurar antes de lanzar |
| CPTs y campos | Advanced Custom Fields (ACF) | Para portafolio, servicios |
| WooCommerce base | WooCommerce | Tienda |
| Cotización | YITH Request a Quote | Productos cotizables |
| CFDI | Facturapi o Comprobante.mx | Si se emite factura |

**Regla:** Cada plugin debe tener justificación. No instalar "por si acaso".
