import { initI18n, LOCALES } from "./i18n";

// One count per CLDR plural category used across the locales:
// zero, one, two, few, many, other.
const DEMO_COUNTS = [0, 1, 2, 4, 11, 1_000_000];

async function main(): Promise<void> {
  const t = await initI18n();

  for (const locale of LOCALES) {
    await t.changeLanguage(locale);

    console.log(`[${locale}]`);
    console.log(`  ${t.t("app.title")} - ${t.t("app.tagline")}`);
    console.log(`  ${t.t("auth.greeting", { name: "Ada" })}`);
    for (const count of DEMO_COUNTS) {
      console.log(`  ${t.t("projects.count", { count })}`);
    }
    console.log(`  ${t.t("errors.notFound")}`);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
