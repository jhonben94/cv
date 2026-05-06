import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-heading text-lg font-semibold text-[var(--color-text)]">
            {siteConfig.personName}
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            <a
              href={`mailto:${siteConfig.email}`}
              className="cursor-pointer underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-4 text-xs text-[var(--color-muted)]">
            © {year} {siteConfig.personName}. {t("rights")}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-medium text-[var(--color-cta)] hover:underline"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-medium text-[var(--color-cta)] hover:underline"
          >
            LinkedIn
          </a>
          <Link
            href="/proyectos"
            className="cursor-pointer font-medium text-[var(--color-cta)] hover:underline"
          >
            {tNav("projectsFull")}
          </Link>
          <Link
            href="/changelog"
            className="cursor-pointer font-medium text-[var(--color-cta)] hover:underline"
          >
            {tNav("changelog")}
          </Link>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] py-4 text-center text-xs text-[var(--color-muted)]">
        {t("builtWith")}
      </div>
    </footer>
  );
}
