# Checklist de accesibilidad
**Agente:** QA & Accessibility Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E15  
**Referencia:** WCAG 2.1 nivel AA

---

## Semántica y estructura

- [ ] `<html lang="es">` presente (ya está en v1)
- [ ] `<title>` descriptivo en todas las páginas
- [ ] Un solo `<h1>` por página
- [ ] Jerarquía de headings correcta (h1 → h2 → h3, sin saltos)
- [ ] `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>` usados correctamente
- [ ] `<section>` tienen `aria-label` o `aria-labelledby` (parcialmente en v1)

## Imágenes

- [ ] Todas las `<img>` tienen atributo `alt`
- [ ] Alt text es descriptivo (no "imagen" o nombre de archivo)
- [ ] Imágenes decorativas tienen `alt=""`
- [ ] Las imágenes `background-image` de secciones no son contenido crítico (decorativas)

## Formularios

- [ ] Cada input tiene `<label>` asociado con `for` o `aria-label`
- [ ] Campos requeridos marcados con `required` y visualmente indicados
- [ ] Mensajes de error son descriptivos y accesibles
- [ ] El formulario puede completarse solo con teclado

## Navegación

- [ ] El site puede navegarse completamente con teclado (Tab, Enter, Escape)
- [ ] El foco es visible en todos los elementos interactivos
- [ ] El menú móvil puede abrirse y cerrarse con teclado
- [ ] El botón de cerrar menú tiene `aria-label`
- [ ] El botón flotante WA tiene `aria-label="Contactar por WhatsApp"`

## Contraste de colores

- [ ] Texto sobre fondo: ratio mínimo 4.5:1 (nivel AA)
- [ ] Texto grande (>18px): ratio mínimo 3:1
- [ ] Verificar texto blanco sobre `--forest` (verde muy oscuro)
- [ ] Verificar texto sobre imágenes de hero con overlay
- [ ] Verificar texto de la sección de stats

## Carrusel / Slider

- [ ] Los dots del hero tienen `aria-label` (ej: "Ir a slide 2")
- [ ] El carrusel puede controlarse con teclado
- [ ] Hay forma de pausar la auto-rotación

## Botones y enlaces

- [ ] Todos los botones tienen texto descriptivo o `aria-label`
- [ ] Los links "leer más" o ícono-solo tienen `aria-label` con contexto
- [ ] Los enlaces de redes sociales tienen `aria-label`

## Reducción de movimiento

- [ ] Las animaciones respetan `@media (prefers-reduced-motion: reduce)`
- [ ] El slider puede desactivar auto-rotate si el usuario prefiere no movimiento
