# Flujos de usuario en tienda
**Agente:** E-commerce Architect  
**Fecha:** 2026-04-27  
**Epic/Story:** E9-S9.4, E9-S9.5, E9-S9.6

---

## Flujo A — Exploración y compra directa (Fase 6)

```
Home (sección tienda)
  ↓
Landing /tienda/ → Categorías visuales
  ↓
Listado de categoría → Filtros → Cards de producto
  ↓
Ficha de producto
  → [Si precio fijo] → Agregar al carrito
      ↓
    Carrito → Checkout
      → Datos del cliente
      → Método de entrega (envío local / recolección)
      → Método de pago (tarjeta / SPEI / PayPal)
      → Facturación (CFDI si aplica)
      → Confirmación
      → Email de confirmación al cliente
```

## Flujo B — Cotización por WhatsApp (Fase 3 MVP)

```
Home (sección tienda) O Ficha de producto
  ↓
Click en "Cotizar por WhatsApp"
  ↓
WhatsApp abre con mensaje pre-cargado incluyendo nombre de producto
  ↓
Equipo Paisare responde con precio, disponibilidad, opciones de entrega
  ↓
Cliente decide y cierra venta por WhatsApp o regresa al sitio
```

## Flujo C — Calculadora de m² (Fase 3/4)

```
Ficha de producto por m² (ej: pasto, follaje, sustratos)
  ↓
Ingresa metros cuadrados del área
  ↓
Calculadora muestra cantidad necesaria (m², sacos, rollos)
  ↓
[Si precio definido] → Agregar al carrito con cantidad calculada
[Si cotizable] → "Cotizar {cantidad} m² por WhatsApp"
```

## Flujo D — Producto con instalación opcional (Fase 3/4)

```
Ficha de producto
  ↓
Selector: "¿Requieres instalación?"
  → No: agrega solo el material
  → Sí: muestra precio de instalación si es fijo,
         o botón "Cotizar instalación" si requiere diagnóstico
  ↓
Agregar al carrito (material + instalación si aplica)
O
Cotizar por WhatsApp con contexto de producto + instalación
```

---

## Diseño de la ficha de producto

### Secciones de la ficha

1. **Breadcrumb:** Tienda > Categoría > Nombre del producto
2. **Galería:** Imagen principal + miniaturas
3. **Datos básicos:** Nombre, SKU, categoría, descripción corta
4. **Precio:** Precio o "Solicitar cotización"
5. **Selector de unidad/cantidad:** m², piezas, sacos, etc.
6. **Variaciones:** Si aplica (color, especie, tamaño)
7. **Disponibilidad:** En stock / Bajo pedido / Cotizar / Agotado
8. **Instalación:** Checkbox "Agregar instalación" o link a cotización
9. **CTAs:**
   - "Agregar al carrito" (si precio definido)
   - "Cotizar por WhatsApp" (siempre visible)
   - "Solicitar asesoría" (para productos complejos)
10. **Descripción larga:** Con tabs o acordeón
11. **Especificaciones técnicas:** Tabla de atributos
12. **Preguntas frecuentes:** Acordeón FAQPage
13. **Productos relacionados:** Grid de 3-4 productos
14. **Servicios relacionados:** Cards de servicios vinculados
15. **Proyectos donde se usó:** Links a casos de estudio del portafolio

---

## Diseño de la landing de tienda

### Estructura

1. **Hero de tienda:** Imagen, título "Materiales para tu jardín", CTA "Ver todo" + CTA "Asesoría WA"
2. **Categorías destacadas:** Grid visual de 8-12 categorías con imagen e ícono
3. **Productos destacados:** Grid de 4-6 productos seleccionados
4. **Sección "Kits":** Paquetes por tipo de proyecto
5. **Relación con servicios:** "¿No sabes qué necesitas? Te asesoramos."
6. **CTA final:** WhatsApp + formulario de asesoría

---

## Reglas de diseño para tienda

1. La tienda debe verse como parte de Paisare, no como tienda genérica de ecommerce
2. Las cards de producto son diferentes visualmente a las cards de servicio (más compactas, con precio o badge "Cotizable")
3. El botón WhatsApp siempre acompaña al botón de carrito — nunca solo el carrito
4. Los productos cotizables no muestran precio de $0 ni "Consultar" genérico — usan el badge "Cotizable" y botón WA
5. Las imágenes de producto deben ser de alta calidad y consistentes (fondo blanco o contexto)
