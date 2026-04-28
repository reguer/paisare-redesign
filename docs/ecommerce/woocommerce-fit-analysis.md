# Análisis de fit: WooCommerce para Paisare
**Agente:** E-commerce Architect  
**Fecha:** 2026-04-27  
**Epic/Story:** E9-S9.1, E12-S12.1

---

## Recomendación

**WooCommerce es la opción recomendada.** Se integra directamente con WordPress que ya tiene el contenido del sitio. Evita duplicar la gestión de contenido en dos sistemas y es el estándar de tiendas en línea para WordPress con mayor ecosistema de plugins y pasarelas de pago en México.

---

## Por qué WooCommerce

| Factor | WooCommerce | Alternativa headless | Alternativa SaaS (Shopify) |
|---|---|---|---|
| Integración con WordPress | Nativa | Requiere API bridge | No integra |
| Preservación de contenido | Total (misma BD) | Parcial (doble gestión) | Migración completa |
| Pasarelas MX (Conekta, Stripe, OpenPay) | Plugins nativos | Custom + REST | Plugins nativos |
| Facturación CFDI | Plugins (Facturapi, etc.) | Custom | Plugins limitados |
| Costo inicial | Bajo (open source) | Alto (desarrollo custom) | Mensualidad fija |
| Curva de aprendizaje del cliente | Media | Alta | Baja |
| Control total del diseño | Total | Total | Limitado |
| SEO en mismo dominio | Sí | Sí (subdomain riesgo) | No (dominio Shopify) |

---

## Casos de uso que WooCommerce cubre bien

- Productos simples con precio fijo
- Productos con variaciones (color, tamaño, especie)
- Productos por cantidad (con plugin de precio por unidad)
- Carrito y checkout
- Cupones y descuentos
- Gestión de inventario
- Órdenes y seguimiento
- Notificaciones por email
- Informes de ventas

---

## Casos de uso que requieren personalización

| Caso | Solución |
|---|---|
| Productos cotizables (sin precio visible) | Plugin "YITH WooCommerce Request a Quote" o lógica custom |
| Calculadora de m² | Plugin "WooCommerce Unit Quantity" o shortcode custom |
| Instalación como add-on cotizable | Producto virtual + nota en orden, o plugin de add-ons |
| WhatsApp por producto en lugar de carrito | Botón personalizado en template de producto |
| Catálogo sin checkout (fase MVP) | Ocultar carrito/checkout con CSS/PHP hasta activar |
| Relación producto ↔ proyecto portafolio | ACF + CPT custom |
| Catálogo de servicios cotizables | CPT "Servicio" + formulario de cotización |

---

## Plugins mínimos recomendados para tienda

| Plugin | Propósito | Costo |
|---|---|---|
| WooCommerce | Motor de tienda | Gratis |
| YITH Request a Quote | Productos cotizables | Free/Pro |
| WooCommerce Stripe / Conekta | Pasarela de pago | Gratis + % comisión |
| WooCommerce Shipping | Gestión de envíos | Gratis |
| Facturapi / Comprobante.mx | CFDI | SaaS mensual |
| Akismet | Antispam comentarios | Gratis / Pro |

**Nota:** Lista mínima. No instalar plugins adicionales sin evaluar impacto en performance. Cada plugin activo es deuda técnica potencial.

---

## Lo que NO debe hacerse con WooCommerce

- No activar checkout sin configurar pasarela de pago real
- No mostrar precios de $0 para productos cotizables
- No instalar WooCommerce en la misma instalación de WordPress que está en producción sin staging previo
- No usar el tema WooCommerce Storefront — usar el tema propio de Paisare
