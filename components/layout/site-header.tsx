"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PublicAssetImg } from "@/components/media/public-asset-img";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

const navKeys = [
  { href: "/#about", labelKey: "about" as const },
  { href: "/#skills", labelKey: "skills" as const },
  { href: "/#ai", labelKey: "ai" as const },
  { href: "/#architectures", labelKey: "architectures" as const },
  { href: "/#projects", labelKey: "projects" as const },
  { href: "/changelog", labelKey: "changelog" as const },
  { href: "/#certifications", labelKey: "certifications" as const },
  { href: "/#contact", labelKey: "contact" as const },
];

export function SiteHeader() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-heading text-lg font-semibold tracking-tight text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
        >
          <PublicAssetImg
            src="/avatar.svg"
            alt=""
            width={40}
            height={40}
            className="rounded-full ring-2 ring-[var(--color-primary)]/30"
          />
          <span className="hidden sm:inline">{siteConfig.personName}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navKeys.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              className="cursor-pointer text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {t(labelKey)}
            </Link>
          ))}
          <Link
            href="/proyectos"
            className="cursor-pointer text-sm font-semibold text-[var(--color-cta)]"
          >
            {t("projectsFull")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher className="hidden sm:flex" />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--color-border)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-[var(--color-border)] md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Móvil">
          <LocaleSwitcher className="mb-2 w-fit sm:hidden" />
          {navKeys.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)]"
              onClick={() => setOpen(false)}
            >
              {t(labelKey)}
            </Link>
          ))}
          <Link
            href="/proyectos"
            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-cta)] hover:bg-[var(--color-surface)]"
            onClick={() => setOpen(false)}
          >
            {t("projectsFull")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
