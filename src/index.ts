import { initI18n, LOCALES } from "./i18n";

async function main(): Promise<void> {
  const t = await initI18n();

  for (const locale of LOCALES) {
    await t.changeLanguage(locale);

    console.log(`[${locale}]`);
    console.log(`  ${t.t("app.title")} - ${t.t("app.tagline")}`);
    console.log(`  ${t.t("auth.greeting", { name: "Ada" })}`);
    console.log(`  ${t.t("projects.count", { count: 1 })}`);
    console.log(`  ${t.t("projects.count", { count: 4 })}`);
    console.log(`  ${t.t("errors.notFound")}`);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
