import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { MermaidDiagramLazy } from "@/components/diagrams/mermaid-diagram-lazy";
import { PublicAssetImg } from "@/components/media/public-asset-img";
import { Link } from "@/i18n/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import type { ProjectLinks } from "@/data/types";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  const locales = ["es", "en"] as const;
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      out.push({ locale, slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const title = project.title[locale as "es" | "en"];
  const description = project.shortDescription[locale as "es" | "en"];
  const meta = await getTranslations({ locale, namespace: "meta" });
  return {
    title: `${title} — ${meta("siteName")}`,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/${locale}/proyectos/${slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("ProjectDetail");
  const loc = (await getLocale()) as "es" | "en";

  const title = project.title[loc];
  const problem = project.problem[loc];
  const features = project.features[loc];
  const decision = project.decisionSummary[loc];
  const benefits = project.benefitSummary[loc];
  const flow = project.flowSummary[loc];
  const components = project.componentsSummary[loc];
  const archName = project.architectureName[loc];

  const linkCandidates: {
    key: keyof ProjectLinks;
    href: string | undefined;
    label: string;
  }[] = [
    { key: "demo", href: project.links.demo, label: t("linkDemo") },
    { key: "github", href: project.links.github, label: t("linkGithub") },
    { key: "readme", href: project.links.readme, label: t("linkReadme") },
    { key: "docs", href: project.links.docs, label: t("linkDocs") },
    { key: "diagram", href: project.links.diagram, label: t("linkDiagram") },
  ];
  const linkRows = linkCandidates.filter(
    (row): row is { key: keyof ProjectLinks; href: string; label: string } =>
      Boolean(row.href),
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Link
        href="/proyectos"
        className="mb-8 inline-flex cursor-pointer text-sm font-medium text-[var(--color-cta)] hover:underline"
      >
        ← {t("back")}
      </Link>

      {project.image ? (
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)]">
          <PublicAssetImg
            src={project.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      ) : null}

      <header>
        <h1 className="font-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-lg text-[var(--color-muted)]">
          {project.shortDescription[loc]}
        </p>
      </header>

      <div className="mt-10 space-y-10 text-[var(--color-text)]">
        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("problem")}
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{problem}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("stack")}
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">{project.stack.join(" · ")}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("architecture")}: {archName}
          </h2>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("features")}
          </h2>
          <ul className="mt-2 list-inside list-disc text-[var(--color-muted)]">
            {features.map((f) => (
              <li key={f} className="mt-1">
                {f}
              </li>
            ))}
          </ul>
        </section>

        {project.mermaid ? (
          <section>
            <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
              {t("diagram")}
            </h2>
            <div className="mt-4">
              <MermaidDiagramLazy chart={project.mermaid} />
            </div>
          </section>
        ) : null}

        {project.diagramImage ? (
          <section>
            <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
              {t("diagram")}
            </h2>
            <div className="relative mt-4 aspect-video overflow-hidden rounded-xl border border-[var(--color-border)]">
              <PublicAssetImg
                src={project.diagramImage}
                alt=""
                fill
                className="object-contain bg-[var(--color-surface)]"
              />
            </div>
          </section>
        ) : null}

        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("components")}
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{components}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("flow")}
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{flow}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("decisions")}
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{decision}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
            {t("benefits")}
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{benefits}</p>
        </section>

        {linkRows.length > 0 ? (
          <section>
            <h2 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
              {t("links")}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-4">
              {linkRows.map((row) => (
                <li key={row.key}>
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-medium text-[var(--color-cta)] hover:underline"
                  >
                    {row.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}
