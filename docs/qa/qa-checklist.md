# Checklist de QA general
**Agente:** QA & Accessibility Agent  
**Fecha:** 2026-04-27  
**Epic/Story:** E15

---

## Por fase

### Lote 1A
- [ ] Todos los botones WhatsApp abren correctamente en mobile y desktop
- [ ] No hay URLs `http://` sin resolver en imágenes
- [ ] `config.js` carga correctamente y no rompe ningún script
- [ ] No hay errores en DevTools Console

### Lote 1B
- [ ] El tweaks-panel NO aparece en la vista del sitio
- [ ] No hay errores JS relacionados con el tweaks-panel
- [ ] OpenGraph aparece en inspección de vista previa (compartir en WhatsApp, Twitter, etc.)
- [ ] Favicon visible en tab del browser

### Por sección — Home

| Sección | Desktop Chrome | Desktop Safari | Mobile iOS | Mobile Android |
|---|---|---|---|---|
| Navegación fija + scroll | | | | |
| Menú hamburger | | | | |
| Hero slider (auto y dots) | | | | |
| Servicios grid | | | | |
| Contadores stats | | | | |
| Portafolio filtros | | | | |
| Proceso | | | | |
| Artículos | | | | |
| Clientes logos | | | | |
| Formulario contacto | | | | |
| Footer | | | | |
| Botón flotante WA | | | | |

### Formulario
- [ ] Validación de campos requeridos funciona
- [ ] Validación de email funciona (formato correcto)
- [ ] Honeypot no es visible para usuarios reales
- [ ] El formulario no envía si el honeypot tiene valor
- [ ] Mensaje de éxito aparece al enviar
- [ ] El formulario no genera errores en consola

### WhatsApp
- [ ] Todos los botones WA abren WhatsApp (no URL muerta)
- [ ] Los mensajes pre-cargados son correctos por contexto
- [ ] El número no es el placeholder `524420000000` (validar P1 antes de este check)

---

## Navegadores a verificar

| Navegador | Versión | Desktop | Mobile |
|---|---|---|---|
| Chrome | Último | | |
| Safari | Último | | |
| Firefox | Último | | |
| Edge | Último | | |
| Chrome Android | Último | | |
| Safari iOS | Último | | |
