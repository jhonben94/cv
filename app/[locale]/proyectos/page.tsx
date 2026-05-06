import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { ProjectGridWithFilters } from "@/components/projects/project-grid";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tipo?: string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  const title = `${t("title")} — ${meta("siteName")}`;
  return {
    title,
    description: t("description"),
    openGraph: {
      title,
      description: t("description"),
      url: `${siteConfig.siteUrl}/${locale}/proyectos`,
    },
  };
}

export default async function ProjectsListingPage({ searchParams }: Props) {
  const t = await getTranslations("ProjectsPage");
  const sp = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10">
        <h1 className="font-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-muted)]">{t("description")}</p>
      </header>
      <Suspense
        fallback={
          <div className="h-48 animate-pulse rounded-xl bg-[var(--color-border)]/40" />
        }
      >
        <ProjectGridWithFilters initialTipo={sp.tipo} />
      </Suspense>
    </div>
  );
}
