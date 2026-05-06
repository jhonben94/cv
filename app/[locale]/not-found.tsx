import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("Nav");

  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-heading text-4xl font-bold text-[var(--color-text)]">404</h1>
      <p className="mt-4 text-[var(--color-muted)]">Página no encontrada / Page not found</p>
      <Link
        href="/"
        className="mt-8 inline-flex cursor-pointer text-[var(--color-cta)] hover:underline"
      >
        {t("home")}
      </Link>
    </div>
  );
}
