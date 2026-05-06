import { getTranslations } from "next-intl/server";

export async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="scroll-mt-24 border-b border-[var(--color-border)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-8 max-w-3xl space-y-6 text-[var(--color-muted)] leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>
    </section>
  );
}
