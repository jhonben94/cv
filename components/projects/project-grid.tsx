"use client";

import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import type { ProjectType } from "@/data/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

const FILTERS: Array<"all" | ProjectType> = [
  "all",
  "frontend",
  "backend",
  "fullstack",
  "mobile",
  "devops",
  "architecture",
];

function parseTipoParam(
  raw: string | string[] | null | undefined,
): "all" | ProjectType {
  const s = Array.isArray(raw) ? raw[0] : raw;
  if (s == null || s === "") return "all";
  return FILTERS.includes(s as "all" | ProjectType) ? (s as "all" | ProjectType) : "all";
}

export type ProjectGridWithFiltersProps = {
  /** Desde `searchParams` en el Server Component (evita `useSearchParams` y fallos de hidratación). */
  initialTipo?: string | string[] | null;
};

export function ProjectGridWithFilters({ initialTipo }: ProjectGridWithFiltersProps = {}) {
  const t = useTranslations("Projects");
  const router = useRouter();
  const pathname = usePathname();
  const [tipo, setTipo] = useState<"all" | ProjectType>(() => parseTipoParam(initialTipo));

  useEffect(() => {
    setTipo(parseTipoParam(initialTipo));
  }, [initialTipo]);

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const next = parseTipoParam(params.get("tipo"));
      setTipo(next);
    };
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const filtered = useMemo(() => {
    if (tipo === "all") return projects;
    return projects.filter((p) => p.type === tipo);
  }, [tipo]);

  const setFilter = useCallback(
    (next: "all" | ProjectType) => {
      setTipo(next);
      const query = next === "all" ? "" : `?tipo=${encodeURIComponent(next)}`;
      router.replace((pathname + query) as Parameters<typeof router.replace>[0]);
    },
    [pathname, router],
  );

  const typeLabel = (type: ProjectType) => t(`types.${type}`);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "cursor-pointer rounded-full border px-3 py-1.5 text-sm font-medium transition",
              tipo === f
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/50",
            )}
          >
            {f === "all" ? t("filterAll") : t(`types.${f}`)}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            problemLabel={t("problemLabel")}
            stackLabel={t("stackLabel")}
            viewDetail={t("viewDetail")}
            typeLabel={typeLabel}
          />
        ))}
      </div>
    </div>
  );
}
