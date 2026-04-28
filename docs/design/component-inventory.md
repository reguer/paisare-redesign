# Inventario de componentes
**Agente:** Template Mapper  
**Fecha:** 2026-04-27  
**Epic/Story:** E1-S1.2, E3-S3.1

---

## Variables CSS (sistema de tokens actual)

### Colores (OKLch — espacio perceptual uniforme)

| Variable | Valor | Uso |
|---|---|---|
| `--forest` | `oklch(17% 0.055 148)` | Verde muy oscuro — fondo nav, CTAs primarios |
| `--green` | `oklch(30% 0.10 148)` | Verde medio — hover, bordes |
| `--sage` | `oklch(50% 0.09 148)` | Verde desaturado — textos secundarios |
| `--mint` | `oklch(72% 0.13 148)` | Verde brillante — acento principal |
| `--stone` | `oklch(95% 0.010 80)` | Casi blanco cálido — fondos alternativos |
| `--gold` | `oklch(68% 0.14 72)` | Dorado/ámbar — acento secundario |
| `--ink` | `oklch(22% 0.015 240)` | Casi negro azulado — textos cuerpo |
| `--wa` | `#25D366` | Verde WhatsApp — botones WA |
| `--off-white` | `#faf9f6` | Fondo de página general |

### Tipografías

| Variable | Valor | Uso |
|---|---|---|
| `--serif` | `'Cormorant Garamond'` | Títulos, headings, eyebrows |
| `--sans` | `'Outfit'` | Cuerpo, etiquetas, botones, UI |

**Pesos disponibles:**
- Cormorant Garamond: 300, 400, 600 (normal + italic)
- Outfit: 300, 400, 500, 600

---

## Componentes reutilizables identificados

### Botones

| Clase | Descripción | Uso actual |
|---|---|---|
| `.btn-wa` | Botón WhatsApp verde oscuro con icono SVG | Hero, secciones |
| `.btn-ghost` | Botón outline blanco semitransparente | Hero (secundario) |
| `.svc-cta` | Link de texto con flecha, estilo de tarjeta | Cards de servicios |
| `.btn-submit` | Botón de submit, fondo `--mint` | Formulario |

**Falta definir:** botón de carrito, botón "Cotizar", botón "Ver más" para tienda.

---

### Cards

| Clase | Descripción | Instancias |
|---|---|---|
| `.svc-card` | Card con imagen de fondo, overlay, título, lista y CTA | 3 |
| `.pf-item` | Card de portafolio con imagen, overlay y datos | 6 |
| `.art-card` | Card de artículo con imagen, categoría, título, extracto | 3 |
| `.client-logo` | Logo con filtro grayscale | 7 |

**Falta definir:** card de producto, card de categoría de tienda, card de caso de estudio.

---

### Secciones / layout

| Clase | Descripción | Uso |
|---|---|---|
| `.section-label` | Etiqueta pequeña en mayúsculas + línea decorativa | Todas las secciones |
| `.section-title` | Heading de sección en serif | Todas las secciones |
| `.section-sub` | Subtítulo de sección en sans | Varias secciones |
| `.section-wrap` | Contenedor de sección con padding consistente | Todas las secciones |

---

### Formularios

| Clase | Descripción |
|---|---|
| `.form-row` | Fila de campos (1 o 2 columnas en desktop) |
| `.form-field` | Campo individual: label + input/textarea/select |
| `.form-privacy` | Fila de checkbox de privacidad |
| `.form-success` | Mensaje de éxito (oculto por defecto, mostrado al enviar) |
| `.hp-field` | Campo honeypot (oculto con `display:none !important`) |
| `.btn-submit` | Botón de envío |

---

### Navegación y overlays

| Clase | Descripción |
|---|---|
| `.nav-logo` | Logo "Paisa`re`" con `<span>` colorizado |
| `.nav-links` | Lista de links del header |
| `.nav-wa` | Botón WhatsApp en nav desktop |
| `.hamburger` | Ícono de 3 líneas para móvil |
| `.mobile-nav` | Overlay full-screen con links |
| `.float-wa` | Botón flotante fijo bottom-right |

---

### Utilidades JS

| Clase / ID | Función |
|---|---|
| `.reveal` | Elementos con animación fade-in al entrar al viewport |
| `.reveal-delay-1/2/3` | Retardos escalonados para animaciones |
| `data-target` | En `.stat-n`: valor final para animación de contador |
| `data-cats` | En `.pf-item`: categorías para filtro de portafolio |

---

## Deuda técnica detectada

| Tipo | Descripción | Cantidad | Acción |
|---|---|---|---|
| Inline styles | `style="background-image:url(...)"` en hero, services, articles | ~15 instancias | Mover a CSS en Fase 1 |
| Inline styles | `style="color:oklch(...)"` en elementos SVG y títulos | ~5 instancias | Mover a CSS en Fase 1 |
| `!important` | Usados en `.nav-wa` y `.hp-field` | 4 instancias | Revisar especificidad en Fase 1 |
| Sin `method`/`action` | El `<form>` no tiene atributo `method` ni `action` | 1 | Agregar al conectar backend |
| SVG inconsistentes | Algunos SVGs usan `fill="none" stroke="..."`, otros `style="color:..."` | Varios | Normalizar en Fase 1 |
| Fuentes sin swap | Google Fonts sin `display=swap` en el URL de import | 1 | Lote 1B |
| Sin `alt` en hero | Imágenes de hero son `background-image`, no `<img>` — sin alt | 4 | Evaluar conversión a `<picture>` en Fase 1 |

---

## Componentes a crear para tienda (Fase 3+)

| Componente | Descripción |
|---|---|
| `.product-card` | Card de producto: imagen, nombre, precio o "Cotizable", CTA |
| `.category-card` | Card visual de categoría de tienda |
| `.product-badge` | Etiqueta: "Nuevo", "Destacado", "Cotizable", "Agotado" |
| `.price-display` | Precio en moneda MXN o etiqueta "Solicitar cotización" |
| `.cart-btn` | Botón "Agregar al carrito" |
| `.quote-btn` | Botón "Cotizar por WhatsApp" |
| `.unit-selector` | Selector de unidad (pieza/m²/rollo/saco) |
| `.product-gallery` | Galería de imágenes de producto |
| `.related-products` | Grid de productos relacionados |
| `.breadcrumb` | Ruta de navegación en páginas internas |
| `.sticky-mobile-bar` | Barra inferior sticky: WA / Llamar / Tienda / Cotizar |
