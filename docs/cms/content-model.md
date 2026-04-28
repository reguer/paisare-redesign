# Modelo de contenido — Paisare
**Agente:** CMS / WordPress Migration Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E12-S12.2, E6, E7, E8

---

## Mapa de contenido

```
paisare.com/
├── /                         Home — front-page.php
├── /servicios/               Hub de servicios — page.php con template
│   ├── /paisajismo-y-diseno/ CPT servicio — single-servicio.php
│   ├── /construccion-exterior/
│   ├── /sistemas-de-riego/
│   ├── /mantenimiento/
│   └── /lagos-estanques/
├── /portafolio/              Archivo de proyectos — archive-proyecto.php
│   └── /portafolio/{slug}/   CPT proyecto — single-proyecto.php
├── /tienda/                  WooCommerce — woocommerce/archive-product.php
│   ├── /tienda/{categoria}/  Categoría de producto
│   └── /tienda/producto/{slug}/ Ficha de producto
├── /blog/ (o /blog-2/)       Archivo de posts — archive.php
│   └── /blog/{slug}/         Post individual — single.php
├── /sobre-nosotros/          Página estática — page.php
├── /contacto/                Página estática con formularios — page.php
└── /aviso-de-privacidad/     Página legal — page.php
```

---

## Relaciones entre contenidos

```
Proyecto ←→ Servicio (many-to-many)
Proyecto ←→ Producto WooCommerce (many-to-many) 
Servicio ←→ Producto WooCommerce (many-to-many)
Artículo → Servicio (opcional, por categoría)
Artículo → Producto (opcional)
FAQ ← Servicio (los servicios pueden incluir FAQs)
Testimonio → Proyecto (opcional)
```

---

## Campos globales (opciones del tema)

Datos del sitio editables desde el admin sin tocar código:

| Campo | Descripción |
|---|---|
| Número de WhatsApp | Número completo con código de país |
| Teléfono de oficina | Para Schema y footer |
| Email de contacto | Para formularios y footer |
| Dirección | Para Schema y footer |
| Horario de atención | Para Schema y footer |
| Coordenadas GPS | Para Schema (pendiente P5) |
| Redes sociales | URLs de Facebook, Instagram, Pinterest |
| Número de proyectos | Para contadores (validar P3) |
| Número de clientes | Para contadores (validar P3) |
| Número de plantas | Para contadores (validar P3) |
| Texto de copyright | Para el footer |

Implementar con: ACF Options Page o Settings API nativo de WordPress.
