"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PublicAssetImg } from "@/components/media/public-asset-img";
import type { ProjectEntry } from "@/data/types";
import { cn } from "@/lib/utils";

type Props = {
  project: ProjectEntry;
  problemLabel: string;
  stackLabel: string;
  viewDetail: string;
  typeLabel: (type: ProjectEntry["type"]) => string;
};

export function ProjectCard({
  project,
  problemLabel,
  stackLabel,
  viewDetail,
  typeLabel,
}: Props) {
  const locale = useLocale() as "es" | "en";
  const title = project.title[locale];
  const desc = project.shortDescription[locale];
  const problem = project.problem[locale];

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] transition duration-200",
        "hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]",
      )}
    >
      <div className="relative aspect-[16/10] bg-[var(--color-background)]">
        {project.image ? (
          <PublicAssetImg
            src={project.image}
            alt=""
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : null}
        <span className="absolute left-3 top-3 rounded-full bg-[var(--color-primary)] px-2.5 py-0.5 text-xs font-semibold text-white">
          {typeLabel(project.type)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-muted)]">{desc}</p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            {problemLabel}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text)]">{problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            {stackLabel}
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {project.stack.join(" · ")}
          </p>
        </div>
        <Link
          href={`/proyectos/${project.slug}`}
          className="mt-auto inline-flex cursor-pointer items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-cta)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {viewDetail}
        </Link>
      </div>
    </article>
  );
}
