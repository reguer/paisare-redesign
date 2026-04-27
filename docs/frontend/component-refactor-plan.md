# Plan de refactorización de componentes
**Agente:** Frontend Implementation Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E7 (frontend), E3-S3.1

---

## Prioridad de refactorización

### Prioridad alta (Lote 1A/1B)
1. Centralizar número de WhatsApp en `config.js`
2. Eliminar tweaks-panel del HTML de producción
3. Cambiar `http://` → `https://` en imágenes

### Prioridad media (Fase 1)
4. Extraer CSS inline de `background-image` a clases CSS
5. Extraer `<style>` embebido a archivos `.css` separados
6. Extraer `<script>` embebido a archivos `.js` separados
7. Normalizar SVGs (usar CSS classes en lugar de inline style/fill)
8. Eliminar `!important` donde sea posible (salvo honeypot)
9. Renombrar `Paisare Redesign.html` → `index.html`

### Prioridad baja (Fase 1/2)
10. Agregar breakpoints explícitos para 768px y 1280px
11. Añadir `alt` descriptivo a imágenes de hero (si se convierten de background-image a `<img>`)
12. Verificar contraste de color WCAG AA en secciones clave
13. Agregar `aria-label` a carousel dots

---

## Tabla de componentes y estado de refactorización

| Componente | Archivo CSS actual | Archivo CSS target | Prioridad |
|---|---|---|---|
| Variables y tokens | `<style>` (inline) | `src/css/variables.css` | Fase 1 |
| Navegación | `<style>` (inline) | `src/css/nav.css` | Fase 1 |
| Hero | `<style>` (inline) | `src/css/hero.css` | Fase 1 |
| Servicios | `<style>` (inline) | `src/css/services.css` | Fase 1 |
| Stats | `<style>` (inline) | `src/css/stats.css` | Fase 1 |
| Portfolio | `<style>` (inline) | `src/css/portfolio.css` | Fase 1 |
| Proceso | `<style>` (inline) | `src/css/process.css` | Fase 1 |
| Artículos | `<style>` (inline) | `src/css/articles.css` | Fase 1 |
| Clientes | `<style>` (inline) | `src/css/clients.css` | Fase 1 |
| Contacto + Formulario | `<style>` (inline) | `src/css/contact.css` | Fase 1 |
| Footer | `<style>` (inline) | `src/css/footer.css` | Fase 1 |
| WA flotante | `<style>` (inline) | `src/css/whatsapp.css` | Fase 1 |

---

## Tabla de JS y estado

| Función JS | Archivo JS actual | Archivo JS target | Prioridad |
|---|---|---|---|
| Configuración central | — | `src/js/config.js` | Lote 1A |
| Links de WhatsApp | `<script>` (inline) | `src/js/whatsapp.js` | Lote 1A |
| Navegación / hamburger | `<script>` (inline) | `src/js/nav.js` | Fase 1 |
| Hero slider | `<script>` (inline) | `src/js/slider.js` | Fase 1 |
| Contadores animados | `<script>` (inline) | `src/js/counter.js` | Fase 1 |
| Filtros de portafolio | `<script>` (inline) | `src/js/filter.js` | Fase 1 |
| Formulario de contacto | `<script>` (inline) | `src/js/form.js` | Fase 1 |
| Animaciones reveal | `<script>` (inline) | `src/js/animations.js` | Fase 1 |
| Tweaks panel | `<script>` (inline) | **ELIMINAR (Lote 1B)** | Lote 1B |
