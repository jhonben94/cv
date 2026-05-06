import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { architectureHighlights } from "@/data/architectures";

export async function ArchitecturesSection() {
  const t = await getTranslations("Architectures");
  const locale = await getLocale();

  return (
    <section
      id="architectures"
      className="scroll-mt-24 border-b border-[var(--color-border)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{t("subtitle")}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {architectureHighlights.map((item) => {
            const title = item.title[locale as "es" | "en"];
            const problem = item.problem[locale as "es" | "en"];
            const stackSummary = item.stackSummary[locale as "es" | "en"];
            return (
              <article
                key={item.id}
                className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-md)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-primary)]">
                    {t("problemLabel")}:{" "}
                  </span>
                  {problem}
                </p>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-primary)]">
                    {t("stackLabel")}:{" "}
                  </span>
                  {stackSummary}
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  {item.stack.join(" · ")}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/proyectos/${item.slug}`}
                    className="cursor-pointer text-sm font-semibold text-[var(--color-cta)] hover:underline"
                  >
                    {t("viewProject")}
                  </Link>
                  {item.links?.readme ? (
                    <a
                      href={item.links.readme}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)]"
                    >
                      {t("viewDocs")}
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
