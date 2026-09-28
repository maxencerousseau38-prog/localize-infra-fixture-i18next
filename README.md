# localize-infra-fixture-i18next

Test fixture for the Layersky continuous i18n vertical slice. Not a real product —
it exists only so the pipeline has a small, deterministic TypeScript + i18next
project to run against.

## Layout

```
locales/en/common.json     source locale
locales/fr/common.json     target locale
locales/es/common.json     target locale
locales/de/common.json     target locale
locales/ja/common.json     target locale
locales/pt-BR/common.json  target locale (region-suffixed code)
locales/ar/common.json     target locale (RTL, six plural forms)
src/i18n.ts                i18next init (loads every catalog)
src/index.ts               prints every key in every locale
```

Covers nested keys, `{{name}}` interpolation and plurals. Non-plural keys are identical
across every locale. Plural forms follow each locale's CLDR categories, so `ar` carries
all six (`_zero` `_one` `_two` `_few` `_many` `_other`) while the others carry `_one` /
`_other` — a missing form falls back to `en`, which is visible as an untranslated string.

## Run

```sh
npm install
npm run build
npm start
```
