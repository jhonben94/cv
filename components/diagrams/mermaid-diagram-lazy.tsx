"use client";

import dynamic from "next/dynamic";

/** Carga diferida de Mermaid (~gran tamaño) solo en cliente */
export const MermaidDiagramLazy = dynamic(
  () => import("./mermaid-diagram").then((m) => m.MermaidDiagram),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-56 animate-pulse rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
        aria-hidden
      />
    ),
  },
);
