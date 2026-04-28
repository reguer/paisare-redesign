# Referencia del Tweaks Panel (Claude Design)
**Agente:** Frontend Implementation Agent  
**Fecha:** 2026-04-27  
**Nota:** Este panel fue REMOVIDO del HTML de producción en Lote 1B. Se documenta aquí para uso en entorno de desarrollo.

---

## Propósito

El `#tweaks-panel` es un panel de edición en tiempo real generado por Claude Design (claude.ai/design). Permite cambiar colores, fuentes y el número de WhatsApp del prototipo sin editar código directamente. Solo es útil durante el proceso de diseño con la herramienta de Claude.

---

## Cómo funcionaba

El panel se activaba cuando recibía un mensaje `postMessage` desde el frame padre de Claude Design:
```js
window.addEventListener('message', e => {
  if (e.data?.type === '__activate_edit_mode') {
    panel.classList.add('active');
  }
});
```

Controles disponibles:
- **Color acento** (`--mint`): input type="color"
- **Color primario** (`--forest`): input type="color"
- **Fuente** (`--serif`): select con opciones Cormorant Garamond, Playfair Display, Fraunces, DM Serif Display
- **WhatsApp**: input text para el número (formato `52XXXXXXXXXX`)

---

## Equivalente en producción

En producción, estos valores se controlan desde:
- **Colores y tipografía:** Variables en `src/css/variables.css`
- **Número de WhatsApp:** Constante en `src/js/config.js` → `PAISARE_CONFIG.whatsapp.number`
- **Email y horario:** Constante en `src/js/config.js` → `PAISARE_CONFIG.contact`

En WordPress (Fase 5+), estos valores se controlan desde:
- **ACF Options Page** o **Customizer** del tema

---

## Código original del panel (referencia)

El código completo del tweaks-panel fue removido del HTML de producción. Si se necesita recuperar para desarrollo, está disponible en:
- Git history: commit antes de Lote 1B en rama `feat/lote-1b-cleanup`
- Archivo original: `Paisare Redesign.html` (versión inicial, rama `main` commit `c611c4e`)
