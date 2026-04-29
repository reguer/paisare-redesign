import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Variables de entorno: crear .env en este directorio con:
//   SANITY_STUDIO_PROJECT_ID=<tu-project-id>
//   SANITY_STUDIO_DATASET=production
// Obtener el Project ID en: sanity.io/manage → proyecto → Settings → API

export default defineConfig({
  name: 'paisare-studio',
  title: 'Paisare CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'PENDING',
  dataset:   process.env.SANITY_STUDIO_DATASET   ?? 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
