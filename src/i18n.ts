import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import i18next, { type i18n } from "i18next";

export const LOCALES = ["en", "fr", "es", "de", "ja", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const NAMESPACE = "common";

const LOCALES_DIR = resolve(__dirname, "..", "locales");

function loadCatalog(locale: Locale): Record<string, unknown> {
  const file = resolve(LOCALES_DIR, locale, `${NAMESPACE}.json`);
  return JSON.parse(readFileSync(file, "utf8")) as Record<string, unknown>;
}

export async function initI18n(locale: Locale = DEFAULT_LOCALE): Promise<i18n> {
  await i18next.init({
    lng: locale,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: [...LOCALES],
    defaultNS: NAMESPACE,
    ns: [NAMESPACE],
    resources: Object.fromEntries(
      LOCALES.map((lng) => [lng, { [NAMESPACE]: loadCatalog(lng) }]),
    ),
    interpolation: { escapeValue: false },
  });

  return i18next;
}
