import { defineConfig } from 'astro/config'

// output: 'static' para Fase 2 — solo páginas SSG, sin Workers.
// Cambiar a 'hybrid' + @astrojs/cloudflare en Fase 5 cuando se agreguen
// las páginas privadas de cliente (SSR con Cloudflare Access).
export default defineConfig({
  output: 'static',
  site: 'https://nuevo.paisare.com',
})
