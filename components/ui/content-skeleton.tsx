/** Placeholders para streaming y rutas con datos asíncronos */
export function SectionSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`min-h-[200px] animate-pulse rounded-xl bg-[var(--color-border)]/25 md:min-h-[240px] ${className ?? ""}`}
      aria-hidden
    />
  );
}

export function ProjectDetailPageSkeleton() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8 h-4 w-36 animate-pulse rounded bg-[var(--color-border)]/45" />
      <div className="relative mb-10 aspect-[16/9] animate-pulse rounded-[var(--radius-card)] bg-[var(--color-border)]/30" />
      <div className="h-9 max-w-xl animate-pulse rounded-lg bg-[var(--color-border)]/40" />
      <div className="mt-4 h-5 max-w-2xl animate-pulse rounded bg-[var(--color-border)]/25" />
      <div className="mt-12 space-y-8">
        <div className="h-28 animate-pulse rounded-lg bg-[var(--color-border)]/20" />
        <div className="h-28 animate-pulse rounded-lg bg-[var(--color-border)]/20" />
        <div className="h-40 animate-pulse rounded-lg bg-[var(--color-border)]/20" />
      </div>
    </article>
  );
}
