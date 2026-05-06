"use client";

import { useTheme } from "next-themes";
import { useEffect, useId, useRef, useState } from "react";

type Props = {
  chart: string;
  className?: string;
};

export function MermaidDiagram({ chart, className }: Props) {
  const id = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !chart.trim()) return;

    let cancelled = false;

    const run = async () => {
      const { default: mermaidApi } = await import("mermaid");
      if (cancelled || !containerRef.current) return;

      const isDark = resolvedTheme === "dark";
      mermaidApi.initialize({
        startOnLoad: false,
        theme: isDark ? "dark" : "default",
        securityLevel: "loose",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      });
      const { svg } = await mermaidApi.render(`mmd-${id}`, chart);
      if (cancelled || !containerRef.current) return;
      containerRef.current.innerHTML = svg;
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [chart, id, mounted, resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className={`mermaid-diagram overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 ${className ?? ""}`}
      role="img"
      aria-label="Diagrama de arquitectura"
    />
  );
}
