import { GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function CertificationsSection() {
  const t = await getTranslations("Certifications");

  const cards = [
    { titleKey: "card1Title" as const, hintKey: "card1Hint" as const },
    { titleKey: "card2Title" as const, hintKey: "card2Hint" as const },
  ];

  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-b border-[var(--color-border)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--color-cta)]/40 bg-[var(--color-cta)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-cta)]">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden />
            {t("badge")}
          </span>
        </div>

        <h2 className="mt-4 font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{t("subtitle")}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.titleKey}
              className="relative overflow-hidden rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 shadow-[var(--shadow-sm)]"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,var(--color-border)_8px,var(--color-border)_9px)] opacity-[0.12] dark:opacity-[0.2]"
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
                  {t(c.titleKey)}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-muted)]">{t(c.hintKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
