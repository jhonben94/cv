export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 space-y-3">
        <div className="h-10 max-w-sm animate-pulse rounded-lg bg-[var(--color-border)]/40" />
        <div className="h-5 max-w-2xl animate-pulse rounded bg-[var(--color-border)]/25" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] animate-pulse rounded-[var(--radius-card)] bg-[var(--color-border)]/20"
          />
        ))}
      </div>
    </div>
  );
}
