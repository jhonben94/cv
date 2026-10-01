import { ArrowDown, Download, ExternalLink, Mail } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { PublicAssetImg } from "@/components/media/public-asset-img";
import { isCvDownloadEnabled } from "@/lib/cv-download";
import { siteConfig } from "@/lib/site";

export async function HeroSection() {
  const t = await getTranslations("Hero");
  const locale = await getLocale();
  const cvEnabled = isCvDownloadEnabled();
  const stats = t.raw("stats") as { value: string; label: string }[];
  const cvPdfHref = `/api/cv/pdf?lang=${locale}`;

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-secondary)_0%,_transparent_55%)] opacity-40 dark:opacity-25" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:gap-14 md:px-6 md:py-24">
        <div className="relative mx-auto shrink-0 md:mx-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-cta)] opacity-60 blur-md" />
          <PublicAssetImg
            src="/avatar.svg"
            alt=""
            width={160}
            height={160}
            priority
            className="relative rounded-full ring-4 ring-[var(--color-surface)]"
          />
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {siteConfig.personName}
          </p>
          <h1 className="font-heading text-3xl font-bold leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
            {t("role")}
          </h1>
          <p className="font-heading text-base font-medium text-[var(--color-primary)] md:text-lg">
            {t("subrole")}
          </p>
          <p className="max-w-2xl text-lg text-[var(--color-muted)] md:text-xl">
            {t("tagline")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-cta)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-md)] transition hover:opacity-90"
            >
              {t("ctaProjects")}
              <ArrowDown className="h-4 w-4" />
            </a>
            {cvEnabled ? (
              <a
                href={cvPdfHref}
                download
                data-umami-event="cv-download"
                data-umami-event-lang={locale}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-btn)] border-2 border-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/10"
              >
                <Download className="h-4 w-4" aria-hidden />
                {t("ctaCv")}
              </a>
            ) : null}
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)]"
            >
              <Mail className="h-4 w-4" />
              {t("ctaContact")}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-btn)] border border-[var(--color-border)] px-4 py-3 text-sm font-medium transition hover:border-[var(--color-primary)]"
            >
              <ExternalLink className="h-4 w-4" />
              {t("ctaGithub")}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-btn)] border border-[var(--color-border)] px-4 py-3 text-sm font-medium transition hover:border-[var(--color-primary)]"
            >
              <ExternalLink className="h-4 w-4" />
              {t("ctaLinkedin")}
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-3 pt-2 text-left lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 shadow-[var(--shadow-sm)]"
              >
                <dt className="font-heading text-sm font-bold text-[var(--color-text)]">{s.value}</dt>
                <dd className="mt-0.5 text-xs text-[var(--color-muted)]">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
