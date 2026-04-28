# Estructura actual del repositorio
**Agente:** Repo Auditor  
**Fecha:** 2026-04-27  
**Epic/Story:** E1-S1.1

---

## Árbol de archivos (al inicio de Fase 0)

```
paisare-redesign/
├── .git/                                       Git internals
├── .gitignore                                  Excluye _handoff_*/ y *.zip
├── README.md                                   Resumen del proyecto
├── CHANGELOG.md                                Registro de cambios
├── EPICS_AND_STORIES.md                        Índice/resumen (→ ver docs/epics/ para canónico)
├── ESTADO_ACTUAL.md                            Estado funcional del prototipo
├── SCRATCHPAD.md                               Notas de trabajo
├── Paisare Redesign.html                       ← ENTRADA PRINCIPAL (v1)
├── Revovación Paisare-handoff (v1).zip         Ignorado por git
└── _handoff_revovacion_paisare_v1/             Ignorado por git
    └── revovaci-n-paisare/
        ├── README.md
        └── project/
            ├── Paisare Redesign.html           Copia v1
            ├── Paisare v2.html                 Alternativa (diferente tipografía y layout)
            └── Paisare v3.html                 Alternativa (Playfair + schema más completo)
```

---

## Estructura propuesta para Fase 1+

```
paisare-redesign/
├── .git/
├── .gitignore
├── index.html                                  Renombrar desde "Paisare Redesign.html"
├── README.md
├── CHANGELOG.md
├── EPICS_AND_STORIES.md                        Solo índice/resumen → docs/epics/ para canónico
├── docs/                                       ← Creada en Fase 0
│   ├── README.md
│   ├── DECISIONS.md
│   ├── PENDING.md
│   ├── agents/
│   │   ├── agents-map.md
│   │   └── agent-prompts.md
│   ├── audit/
│   │   ├── repo-audit.md
│   │   ├── current-structure.md
│   │   ├── risk-log.md
│   │   └── image-asset-inventory.md            Crear antes de descargar assets
│   ├── design/
│   │   ├── current-template-map.md
│   │   ├── component-inventory.md
│   │   ├── design-system-current.md
│   │   └── design-system-extended.md           Fase 1+
│   ├── strategy/
│   │   ├── conversion-strategy.md
│   │   ├── whatsapp-flow-map.md
│   │   └── quote-flow.md
│   ├── seo/
│   │   ├── seo-preservation-plan.md
│   │   ├── url-inventory-template.csv
│   │   ├── redirect-map-template.csv
│   │   └── content-migration-checklist.md
│   ├── ecommerce/
│   │   ├── ecommerce-architecture.md
│   │   ├── product-catalog-model.md
│   │   ├── storefront-user-flow.md
│   │   └── woocommerce-fit-analysis.md
│   ├── cms/
│   │   ├── wordpress-integration-plan.md
│   │   ├── content-model.md
│   │   ├── custom-post-types.md
│   │   └── migration-phases.md
│   ├── frontend/
│   │   ├── frontend-implementation-plan.md
│   │   ├── component-refactor-plan.md
│   │   └── tweaks-panel-reference.md
│   ├── ia/
│   │   ├── navigation-model.md
│   │   └── mobile-navigation-model.md
│   ├── home/
│   │   ├── hero-redesign.md
│   │   ├── services-section-plan.md
│   │   └── store-section-plan.md
│   ├── epics/
│   │   └── website-redesign-epics-stories.md   ← ARCHIVO CANÓNICO (17 Epics)
│   └── qa/
│       ├── qa-checklist.md
│       ├── accessibility-checklist.md
│       ├── performance-checklist.md
│       └── pre-launch-checklist.md
└── src/                                        ← Crear en Fase 1
    ├── css/
    │   ├── variables.css
    │   ├── base.css
    │   ├── nav.css
    │   ├── hero.css
    │   ├── sections.css
    │   ├── portfolio.css
    │   ├── form.css
    │   └── footer.css
    ├── js/
    │   ├── config.js                           Single source of truth: WA, email, horario
    │   ├── whatsapp.js
    │   ├── slider.js
    │   ├── nav.js
    │   ├── counter.js
    │   ├── filter.js
    │   └── form.js
    └── assets/
        └── images/                             Descargar solo después de inventario aprobado
```

---

## Notas sobre nomenclatura

- El archivo principal tiene espacios en el nombre (`Paisare Redesign.html`). Renombrar a `index.html` en Fase 1.
- La carpeta `_handoff_revovacion_paisare_v1/` tiene tildes en el path — no editar nada dentro de ella; es referencia estática.
