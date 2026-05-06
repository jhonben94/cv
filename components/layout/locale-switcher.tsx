"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { AppLocale } from "@/i18n/routing";

const locales: AppLocale[] = ["es", "en"];

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5",
        className,
      )}
      role="group"
      aria-label="Idioma"
    >
      {locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            className={cn(
              "cursor-pointer rounded-md px-2.5 py-1 text-sm font-medium transition",
              active
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]",
            )}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
