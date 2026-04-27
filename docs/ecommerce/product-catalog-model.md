# Modelo de catálogo de productos
**Agente:** E-commerce Architect  
**Fecha:** 2026-04-27  
**Epic/Story:** E9-S9.2, E9-S9.3

---

## Campos del modelo de producto

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `sku` | string | Sí | Identificador único. Ej: `PASTO-NAT-001` |
| `nombre` | string | Sí | Nombre visible al cliente |
| `categoria` | string | Sí | Una de las 17 categorías definidas |
| `subcategoria` | string | No | Subcategoría opcional |
| `descripcion_corta` | string | Sí | 1-2 oraciones para listados y cards |
| `descripcion_larga` | string | Sí | Descripción completa con características, usos, cuidados |
| `imagen_principal` | url | Sí | Imagen destacada del producto |
| `galeria` | array[url] | No | Imágenes adicionales |
| `precio` | number\|null | Condicional | `null` si es cotizable |
| `precio_cotizable` | boolean | Sí | `true` si no tiene precio fijo |
| `unidad` | enum | Sí | pieza / m² / m³ / rollo / saco / kg / metro / kit / servicio |
| `precio_unidad` | string | No | Ej: "por m²", "por saco de 20 kg" |
| `variaciones` | array | No | Lista de variantes (color, tamaño, especie) |
| `stock_disponible` | boolean\|null | No | `null` si no se gestiona stock en línea |
| `stock_cantidad` | number\|null | No | Cantidad disponible si se gestiona |
| `envio_disponible` | boolean | Sí | Si tiene envío a domicilio |
| `recoleccion_disponible` | boolean | Sí | Si se puede recoger en punto físico |
| `instalacion_disponible` | boolean | Sí | Si se puede contratar instalación |
| `instalacion_cotizable` | boolean | No | Si la instalación requiere cotización |
| `servicios_relacionados` | array[id] | No | IDs de servicios de Paisare relacionados |
| `productos_relacionados` | array[sku] | No | SKUs de productos relacionados |
| `proyectos_relacionados` | array[id] | No | IDs de proyectos del portafolio donde se usó |
| `faqs` | array | No | Preguntas frecuentes del producto |
| `meta_title` | string | No | Title para SEO (max 60 chars) |
| `meta_description` | string | No | Meta description para SEO (max 160 chars) |
| `tags` | array[string] | No | Etiquetas para búsqueda y filtros |
| `estado` | enum | Sí | activo / borrador / agotado / descontinuado |

---

## Ejemplos de productos por categoría

### Producto simple — Saco de tezontle rojo

```json
{
  "sku": "AGRE-TEZ-001",
  "nombre": "Tezontle rojo 20 kg",
  "categoria": "Grava, piedra, tezontle y agregados",
  "descripcion_corta": "Tezontle volcánico rojo de origen natural. Ideal para jardines decorativos y sustratos.",
  "descripcion_larga": "El tezontle rojo es un agregado volcánico de alta porosidad, ideal para mejorar el drenaje del suelo, crear caminos decorativos o como sustrato de cactáceas y suculentas. Presentación en saco de 20 kg.",
  "imagen_principal": "TODO_pendiente_descarga",
  "precio": null,
  "precio_cotizable": true,
  "unidad": "saco",
  "precio_unidad": "por saco de 20 kg",
  "stock_disponible": null,
  "envio_disponible": false,
  "recoleccion_disponible": true,
  "instalacion_disponible": false,
  "estado": "borrador"
}
```

### Producto variable — Pasto San Agustín

```json
{
  "sku": "PASTO-NAT-001",
  "nombre": "Pasto San Agustín",
  "categoria": "Pasto natural",
  "descripcion_corta": "Pasto de alto tráfico, ideal para jardines residenciales y comerciales en clima templado.",
  "unidad": "m²",
  "precio_cotizable": true,
  "variaciones": [
    {"nombre": "Por rollo", "unidad": "rollo"},
    {"nombre": "Por metro cuadrado", "unidad": "m²"}
  ],
  "instalacion_disponible": true,
  "instalacion_cotizable": true,
  "estado": "borrador"
}
```

---

## Notas para implementación en WooCommerce

- Los productos cotizables se crean como productos WooCommerce sin precio, con botón personalizado "Cotizar por WhatsApp"
- Los productos por m² usan el plugin "WooCommerce Unit Quantity" o lógica personalizada
- Las variaciones usan el tipo de producto "Variable" nativo de WooCommerce
- Los servicios relacionados pueden ser productos de tipo "Virtual" en WooCommerce
- El campo `proyectos_relacionados` requiere CPT personalizado o ACF para hacer la relación
