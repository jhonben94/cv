import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ChangelogMarkdown } from "@/components/changelog/changelog-markdown";
import { Link } from "@/i18n/navigation";
import { getChangelogBodyForPage } from "@/lib/changelog";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Changelog" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  const title = `${t("metaTitle")} — ${meta("siteName")}`;
  const description = t("metaDescription");
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/${locale}/changelog`,
    },
  };
}

export default async function ChangelogPage() {
  const t = await getTranslations("Changelog");
  const body = getChangelogBodyForPage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex cursor-pointer text-sm font-medium text-[var(--color-cta)] hover:underline"
      >
        ← {t("back")}
      </Link>

      <header className="mb-10">
        <h1 className="font-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 text-[var(--color-muted)]">{t("subtitle")}</p>
      </header>

      <article className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] md:p-8">
        <ChangelogMarkdown source={body} />
      </article>
    </div>
  );
}
