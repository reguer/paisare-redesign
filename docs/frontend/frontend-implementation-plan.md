# Plan de implementación frontend
**Agente:** Frontend Implementation Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E7 (frontend), E3

---

## Principio

No romper la vista actual. Toda refactorización se hace de forma incremental y verificable en browser antes de hacer commit. El HTML principal (`Paisare Redesign.html`) es la base, no se reemplaza — se evoluciona.

---

## Lote 1A — Centralizar configuración (sin cambiar diseño)

Archivos a crear:
- `src/js/config.js` — número WA, email, horario (todos como TODO hasta validación)

Cambios en HTML:
- Reemplazar todos los `wa.me/524420000000` para que lean de `config.js`
- Cambiar URLs `http://` de imágenes a `https://`
- No tocar ningún elemento visual

Verificación: Abrir en browser → todos los botones WA deben funcionar igual. No debe haber rotura visual.

---

## Lote 1B — Limpieza técnica (sin cambiar diseño)

Archivos a crear:
- `docs/frontend/tweaks-panel-reference.md` — documentar tweaks-panel antes de eliminarlo
- `favicon.ico` o link a placeholder

Cambios en HTML:
- Eliminar bloque `#tweaks-panel` y su JS asociado
- Eliminar el listener `window.addEventListener('message', ...)` del tweaks-panel
- Agregar `<link rel="icon" ...>` al `<head>`
- Agregar `display=swap` al import de Google Fonts
- Agregar OpenGraph mínimo con solo campos confirmados (los demás como `<!-- TODO -->`)
- Agregar Schema.org LocalBusiness mínimo con campos confirmados

Verificación: Abrir en browser → no debe haber cambio visual. Verificar en DevTools que no hay errores JS.

---

## Fase 1 — Modularizar HTML/CSS/JS

### Estructura de carpetas
```
src/
├── css/
│   ├── variables.css      Variables y tokens
│   ├── base.css           Reset, tipografía global, utilidades
│   ├── nav.css            Header y mobile-nav
│   ├── hero.css           Hero y slider
│   ├── sections.css       Estilos compartidos de secciones
│   ├── services.css       Tarjetas de servicios
│   ├── stats.css          Contadores
│   ├── portfolio.css      Portafolio y filtros
│   ├── process.css        Proceso de contratación
│   ├── articles.css       Cards de artículos
│   ├── clients.css        Logos de clientes
│   ├── contact.css        Contacto y formularios
│   ├── footer.css         Footer
│   └── whatsapp.css       Botón flotante WA
├── js/
│   ├── config.js          Configuración centralizada
│   ├── nav.js             Toggle nav + hamburger + scroll
│   ├── slider.js          Hero slider + dots
│   ├── counter.js         Animación de estadísticas
│   ├── filter.js          Filtros de portafolio
│   ├── form.js            Validación y envío de formulario
│   ├── whatsapp.js        Función openWhatsApp + links
│   └── animations.js      IntersectionObserver para reveal
└── assets/
    └── images/            Descargar solo después de inventario aprobado
```

### Proceso de extracción
1. Copiar `Paisare Redesign.html` a `index.html` (no eliminar el original hasta que index.html funcione igual)
2. Extraer `<style>` a archivos CSS individuales por sección
3. Extraer `<script>` a archivos JS individuales por función
4. Reemplazar bloques inline por `<link>` y `<script src="">` en el HTML
5. Verificar en browser que la vista es idéntica antes de borrar cualquier línea inline

---

## Fase 2+ — Componentes para tienda

Nuevos archivos CSS a agregar:
- `src/css/store.css` — Landing de tienda, categorías
- `src/css/product-card.css` — Cards de producto
- `src/css/product-detail.css` — Ficha de producto
- `src/css/cart.css` — Carrito y checkout
- `src/css/sticky-bar.css` — Barra sticky móvil

---

## Reglas de CSS a seguir

1. Usar las variables CSS existentes (`--forest`, `--mint`, `--serif`, etc.)
2. No agregar nuevas dependencias externas sin justificación
3. No usar `!important` salvo para el honeypot (`display:none !important`)
4. Mobile-first: estilos base para móvil, media queries para desktop
5. Usar `clamp()` para tamaños de fuente fluidos (ya establecido en v1)
6. Todas las imágenes de fondo deben migrar de inline style a CSS class

---

## Mejoras de responsive pendientes

| Breakpoint | Mejora requerida |
|---|---|
| 360px | Verificar hero en pantallas pequeñas |
| 768px | Agregar breakpoint tablet explícito |
| 1024px | Verificar nav con más items |
| 1280px | Verificar portafolio en pantalla grande |
| Sticky bar móvil | Agregar en Fase 2 (nueva — no existe en v1) |
