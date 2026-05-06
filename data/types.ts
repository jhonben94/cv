import type { AppLocale } from "@/i18n/routing";

export type ProjectType =
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "devops"
  | "architecture";

export type Localized<T> = Record<AppLocale, T>;

export type ProjectLinks = {
  demo?: string;
  github?: string;
  readme?: string;
  docs?: string;
  diagram?: string;
};

export type ProjectEntry = {
  slug: string;
  type: ProjectType;
  stack: string[];
  image?: string;
  links: ProjectLinks;
  title: Localized<string>;
  shortDescription: Localized<string>;
  problem: Localized<string>;
  features: Localized<string[]>;
  /** Detailed case study sections */
  decisionSummary: Localized<string>;
  benefitSummary: Localized<string>;
  flowSummary: Localized<string>;
  componentsSummary: Localized<string>;
  architectureName: Localized<string>;
  mermaid?: string;
  diagramImage?: string;
};

export type ArchitectureHighlight = {
  id: string;
  slug: string;
  stack: string[];
  links?: ProjectLinks;
  title: Localized<string>;
  problem: Localized<string>;
  stackSummary: Localized<string>;
  diagramPreview?: string;
};

/** Datos editoriales del CV PDF (independientes del listado completo de portfolio). */
export type CvExperienceEntry = {
  company: Localized<string>;
  role: Localized<string>;
  period: Localized<string>;
  highlights: Localized<string[]>;
};

export type CvEducationEntry = {
  institution: Localized<string>;
  degree: Localized<string>;
  year: string;
};

export type CvFeaturedProject = {
  title: Localized<string>;
  stackLine: Localized<string>;
  highlight: Localized<string>;
  /** Repo o demo públicos; si falta y hay portfolioSlug, el PDF usa el caso del sitio. */
  externalUrl?: string;
  portfolioSlug?: string;
  referenceYear: number;
};
