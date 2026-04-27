# Arquitectura de tienda en línea
**Agente:** E-commerce Architect  
**Fecha:** 2026-04-27  
**Epic/Story:** E9-S9.1

---

## Principio rector

La tienda no se activa como módulo completo de pago hasta que estén definidos y aprobados: precios, inventario, IVA/CFDI, métodos de pago, envíos, cobertura, políticas y términos. La primera iteración es un **catálogo cotizable compatible con WooCommerce**.

---

## Fases de la tienda

### Fase 3 — Catálogo cotizable MVP
**Sin checkout real. Sin procesamiento de pagos.**

Contenido:
- Landing de tienda (`/tienda/`)
- Categorías visuales (grid de imágenes)
- Fichas de producto con: imagen, nombre, descripción, precio o "Solicitar cotización"
- CTA por producto: "Cotizar por WhatsApp"
- Buscador básico
- Filtros por categoría

Tecnología:
- HTML estático con estructura de URLs compatible con WooCommerce
- Datos de productos en JSON o PHP array (preparado para importar a WooCommerce)

### Fase 6 — Tienda completa con checkout
**Activar solo cuando estén aprobadas las reglas comerciales.**

Contenido adicional:
- Carrito
- Checkout
- Métodos de pago: tarjeta, SPEI, PayPal (pendiente P6)
- Envíos y recolección (pendiente P7, P8)
- Facturación / CFDI (pendiente P6)
- Inventario real (pendiente P9)
- Políticas legales (pendiente P13)

Tecnología:
- WooCommerce (integrado en WordPress)
- Pasarela de pago: Stripe MX, OpenPay, Conekta o equivalente (pendiente P6)

---

## Reglas comerciales pendientes de definir (todas bloqueantes para Fase 6)

| # | Pregunta | Pendiente |
|---|---|---|
| P5 | Moneda: MXN únicamente o USD también | P6 |
| P6 | IVA: incluido o desglosado. ¿Se emite CFDI? | P6 |
| P6 | Métodos de pago: tarjeta, SPEI, PayPal, efectivo | P6 |
| P7 | ¿Hay envíos a domicilio? ¿Solo recolección en Querétaro? | P7 |
| P8 | Radio de cobertura de envíos. Costo por km o zona | P8 |
| P9 | ¿Existe catálogo de productos con precios? ¿Hay stock? | P9 |
| P13 | Políticas de devolución, cambio y cancelación | P13 |

---

## Categorías de productos (17 iniciales — pendiente validación P9)

| # | Categoría | Tipo de producto dominante | Unidades comunes |
|---|---|---|---|
| 1 | Pasto natural | Comprable / m² | m², rollo |
| 2 | Pasto sintético | Comprable / m² | m², rollo |
| 3 | Follaje sintético | Comprable / m² | m², pieza |
| 4 | Plantas | Comprable | pieza, bolsa |
| 5 | Árboles y arbustos | Comprable / cotizable | pieza |
| 6 | Tierra, sustratos y composta | Comprable | saco, m³ |
| 7 | Grava, piedra, tezontle y agregados | Comprable | saco, m³, kg |
| 8 | Material de riego (general) | Comprable / cotizable | pieza, lote |
| 9 | Aspersores | Comprable | pieza |
| 10 | Tubería, conectores y válvulas | Comprable | pieza, metro |
| 11 | Controladores de riego | Comprable / cotizable | pieza |
| 12 | Bombas y accesorios hidráulicos | Cotizable | pieza |
| 13 | Macetas y jardineras | Comprable | pieza |
| 14 | Iluminación exterior | Comprable | pieza, kit |
| 15 | Kits de jardín | Comprable / cotizable | kit |
| 16 | Paquetes por metro cuadrado | Cotizable | m² |
| 17 | Servicios con instalación | Cotizable | servicio |

---

## Tipos de producto

| Tipo | Descripción | CTA principal |
|---|---|---|
| Comprable directo | Precio fijo, sin instalación | Agregar al carrito |
| Cotizable | Sin precio fijo, requiere diagnóstico o cálculo | Cotizar por WhatsApp |
| Variable | Tiene variaciones (color, tamaño, especie) | Seleccionar variante → carrito o cotizar |
| Por m² | Se compra por área. Requiere calculadora | Calcular cantidad → cotizar o carrito |
| Con instalación opcional | Precio de material + precio de instalación separado | Agregar material / Cotizar instalación |
| Solo recolección | No tiene envío, solo recolección en punto físico | Agregar al carrito + seleccionar recolección |
| Solo envío local | Cobertura limitada a zona definida | Agregar al carrito + validar CP |
| Sujeto a disponibilidad | Stock variable o bajo demanda | Consultar disponibilidad |
| Kit armado | Conjunto de productos | Cotizar kit completo o agregar al carrito |
| Servicio asociado | Servicio vinculado a un producto | Cotizar servicio |
