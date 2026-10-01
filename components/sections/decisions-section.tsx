import { Scale } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function DecisionsSection() {
  const t = await getTranslations("Decisions");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section
      id="decisions"
      className="scroll-mt-24 border-b border-[var(--color-border)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-primary)]/25 bg-[var(--color-surface)] text-[var(--color-primary)] shadow-[var(--shadow-sm)]">
            <Scale className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{t("subtitle")}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
