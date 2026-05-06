import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ProjectGridWithFilters,
  type ProjectGridWithFiltersProps,
} from "@/components/projects/project-grid";

export async function ProjectsSection({
  initialTipo,
}: ProjectGridWithFiltersProps = {}) {
  const t = await getTranslations("Projects");
  const tNav = await getTranslations("Nav");

  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{t("subtitle")}</p>
          </div>
          <Link
            href="/proyectos"
            className="cursor-pointer shrink-0 text-sm font-semibold text-[var(--color-cta)] hover:underline"
          >
            {tNav("projectsFull")}
          </Link>
        </div>
        <div className="mt-10">
          <Suspense
            fallback={
              <div className="h-40 animate-pulse rounded-xl bg-[var(--color-border)]/40" />
            }
          >
            <ProjectGridWithFilters initialTipo={initialTipo} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
