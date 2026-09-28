# localize-infra-fixture-i18next

Test fixture for the Layersky continuous i18n vertical slice. Not a real product —
it exists only so the pipeline has a small, deterministic TypeScript + i18next
project to run against.

## Layout

```
locales/en/common.json   source locale
locales/fr/common.json   target locale
locales/es/common.json   target locale
src/i18n.ts              i18next init (loads every catalog)
src/index.ts             prints every key in every locale
```

Covers flat keys, nested keys, `{{name}}` interpolation and `_one` / `_other` plurals.

## Run

```sh
npm install
npm run build
npm start
```
