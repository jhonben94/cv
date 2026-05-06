import { Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function AiSection() {
  const t = await getTranslations("Ai");
  const highlights = t.raw("highlights") as string[];

  return (
    <section
      id="ai"
      className="scroll-mt-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]/50 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-primary)]/25 bg-[var(--color-background)] text-[var(--color-primary)] shadow-[var(--shadow-sm)]">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{t("subtitle")}</p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl space-y-6 leading-relaxed text-[var(--color-muted)]">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm leading-relaxed text-[var(--color-muted)] shadow-[var(--shadow-sm)]"
            >
              <span className="mr-2 inline-block text-[var(--color-primary)]">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
