/** Shell rápido en navegaciones del segmento [locale] hasta resolver la página */
export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
        <div className="mx-auto h-40 w-40 shrink-0 animate-pulse rounded-full bg-[var(--color-border)]/35 md:mx-0" />
        <div className="flex-1 space-y-5 text-center md:text-left">
          <div className="mx-auto h-5 w-44 animate-pulse rounded md:mx-0" />
          <div className="mx-auto h-10 max-w-xl animate-pulse rounded-lg bg-[var(--color-border)]/40 md:mx-0" />
          <div className="mx-auto h-24 max-w-2xl animate-pulse rounded-lg bg-[var(--color-border)]/20 md:mx-0" />
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-11 w-28 animate-pulse rounded-[var(--radius-btn)] bg-[var(--color-border)]/30" />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24 space-y-6">
        <div className="h-9 max-w-xs animate-pulse rounded-lg bg-[var(--color-border)]/35" />
        <div className="h-36 animate-pulse rounded-xl bg-[var(--color-border)]/20" />
      </div>
    </div>
  );
}
