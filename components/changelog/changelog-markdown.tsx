import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

type Props = {
  source: string;
};

const components: Components = {
  h1: ({ children }) => (
    <h2 className="mt-12 font-heading text-2xl font-bold text-[var(--color-text)] first:mt-0 md:text-3xl">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 border-b border-[var(--color-border)] pb-2 font-heading text-xl font-semibold text-[var(--color-primary)] md:text-2xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 font-heading text-lg font-semibold text-[var(--color-text)]">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-3 leading-relaxed text-[var(--color-muted)] first:mt-0">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-3 list-inside list-disc space-y-2 text-[var(--color-muted)] marker:text-[var(--color-primary)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-3 list-inside list-decimal space-y-2 text-[var(--color-muted)] marker:font-medium marker:text-[var(--color-primary)]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  hr: () => <hr className="my-10 border-[var(--color-border)]" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--color-text)]">{children}</strong>
  ),
  a: ({ href, children }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        className="font-medium text-[var(--color-cta)] underline-offset-2 hover:underline"
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  },
  code: ({ children }) => (
    <code className="rounded-md bg-[var(--color-border)]/35 px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--color-text)]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 font-mono text-sm text-[var(--color-text)]">
      {children}
    </pre>
  ),
};

export function ChangelogMarkdown({ source }: Props) {
  return (
    <div className="changelog-md">
      <ReactMarkdown components={components}>{source}</ReactMarkdown>
    </div>
  );
}
