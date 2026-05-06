import type { ReactNode } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type { SkillCategoryId } from "@/data/skills";
import type {
  CvEducationEntry,
  CvExperienceEntry,
  CvFeaturedProject,
  Localized,
} from "@/data/types";
import { siteConfig } from "@/lib/site";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 44,
    paddingBottom: 44,
    paddingHorizontal: 48,
    lineHeight: 1.45,
    color: "#111",
  },
  h1: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    color: "#444",
    marginBottom: 10,
  },
  h2: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginTop: 12,
    marginBottom: 5,
    color: "#1a1a1a",
  },
  body: {
    fontSize: 10,
    textAlign: "justify",
    marginBottom: 4,
  },
  contactLine: {
    fontSize: 10,
    marginBottom: 2,
  },
  link: {
    color: "#0b57d0",
  },
  skillsBlock: {
    fontSize: 9.5,
    marginBottom: 3,
  },
  jobCompany: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginTop: 6,
    color: "#134E4A",
  },
  jobMeta: {
    fontSize: 9.5,
    color: "#444",
    marginBottom: 3,
  },
  bullet: {
    fontSize: 9.5,
    marginLeft: 10,
    marginBottom: 2,
    paddingLeft: 6,
    textIndent: -6,
    color: "#333",
  },
  eduLine: {
    fontSize: 9.5,
    marginBottom: 3,
    color: "#333",
  },
  projectTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginTop: 6,
    color: "#111",
  },
  projectMeta: {
    fontSize: 9,
    color: "#555",
    marginBottom: 2,
  },
  refBlock: {
    marginBottom: 7,
  },
  refHanging: {
    paddingLeft: 16,
    textIndent: -16,
    fontSize: 8.8,
    lineHeight: 1.35,
    color: "#222",
  },
  footNote: {
    fontSize: 8,
    color: "#666",
    marginTop: 14,
  },
});

type Lang = "es" | "en";

const copy: Record<
  Lang,
  {
    docTitle: string;
    contact: string;
    summary: string;
    experience: string;
    education: string;
    skills: string;
    featured: string;
    appendixTitle: string;
    appendixNote: string;
  }
> = {
  es: {
    docTitle: "Curriculum vitae",
    contact: "Contacto",
    summary: "Resumen",
    experience: "Experiencia profesional",
    education: "Formación",
    skills: "Competencias técnicas",
    featured: "Proyectos destacados",
    appendixTitle: "Referencias del portfolio (estilo Harvard)",
    appendixNote:
      "Referencias breves alineadas al sitio; año según publicación del caso.",
  },
  en: {
    docTitle: "Curriculum vitae",
    contact: "Contact",
    summary: "Summary",
    experience: "Professional experience",
    education: "Education",
    skills: "Technical skills",
    featured: "Selected projects",
    appendixTitle: "Portfolio references (Harvard style)",
    appendixNote:
      "Short references aligned with the site; year reflects case publication.",
  },
};

const skillLabels: Record<Lang, Record<SkillCategoryId, string>> = {
  es: {
    frontend: "Frontend",
    backend: "Backend",
    architecture: "Arquitectura",
    devops: "DevOps / Infraestructura",
  },
  en: {
    frontend: "Frontend",
    backend: "Backend",
    architecture: "Architecture",
    devops: "DevOps / Infrastructure",
  },
};

function authorHarvardSurname(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return name;
  const surname = parts[parts.length - 1] ?? name;
  const first = parts[0]?.[0] ?? "";
  return `${surname}, ${first}.`;
}

function formatAccessedDate(lang: Lang): string {
  const d = new Date();
  const day = d.getDate();
  const year = d.getFullYear();
  if (lang === "es") {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    return `${day} de ${months[d.getMonth()]} de ${year}`;
  }
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${day} ${months[d.getMonth()]} ${year}`;
}

/** Oculta https://github.com sin usuario/repo (placeholder típico de .env). */
function isPlaceholderGithub(url: string): boolean {
  try {
    const u = new URL(url);
    return (
      u.hostname === "github.com" &&
      (u.pathname === "/" || u.pathname === "")
    );
  } catch {
    return true;
  }
}

function resolveFeaturedLink(
  siteUrl: string,
  lang: Lang,
  p: CvFeaturedProject,
): string | undefined {
  const base = siteUrl.replace(/\/$/, "");
  if (p.externalUrl?.trim()) return p.externalUrl.trim();
  if (p.portfolioSlug?.trim()) {
    return `${base}/${lang}/proyectos/${p.portfolioSlug.trim()}`;
  }
  return undefined;
}

function buildHarvardAppendixLine(
  p: CvFeaturedProject,
  lang: Lang,
  author: string,
  accessed: string,
  linkUrl: string | undefined,
): { key: string; children: ReactNode } {
  const title = p.title[lang];
  const year = p.referenceYear;
  const key = `${title}-${year}`;

  if (!linkUrl) {
    return {
      key,
      children: (
        <Text>
          {author} ({year}) &lsquo;{title}&rsquo;{" "}
          {lang === "es" ? "[caso en portfolio / sin URL pública]." : "[portfolio case / no public URL]."}
        </Text>
      ),
    };
  }

  if (lang === "es") {
    return {
      key,
      children: (
        <Text>
          {author} ({year}) &lsquo;{title}&rsquo; [En línea]. Disponible en:{" "}
          <Link src={linkUrl} style={styles.link}>
            {linkUrl}
          </Link>{" "}
          (Consulta: {accessed}).
        </Text>
      ),
    };
  }

  return {
    key,
    children: (
      <Text>
        {author} ({year}) &lsquo;{title}&rsquo; [Online]. Available at:{" "}
        <Link src={linkUrl} style={styles.link}>
          {linkUrl}
        </Link>{" "}
        (Accessed: {accessed}).
      </Text>
    ),
  };
}

type SkillCat = { id: SkillCategoryId; skills: string[] };

type Props = {
  lang: Lang;
  siteUrl: string;
  summary: Localized<string[]>;
  experience: CvExperienceEntry[];
  education: CvEducationEntry[];
  featured: CvFeaturedProject[];
  skillCategories: SkillCat[];
};

export function CvPdfDocument({
  lang,
  siteUrl,
  summary,
  experience,
  education,
  featured,
  skillCategories,
}: Props) {
  const c = copy[lang];
  const author = authorHarvardSurname(siteConfig.personName);
  const accessed = formatAccessedDate(lang);
  const gh = siteConfig.github;
  const showGithub = gh && !isPlaceholderGithub(gh);

  return (
    <Document
      title={`${siteConfig.personName} — CV`}
      author={siteConfig.personName}
      subject={c.docTitle}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>{siteConfig.personName}</Text>
        <Text style={styles.subtitle}>
          {lang === "es"
            ? "Full Stack Developer · Software Architect · DevOps"
            : "Full Stack Developer · Software Architect · DevOps"}
        </Text>

        <Text style={styles.h2}>{c.contact}</Text>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.contactLine}>{siteConfig.email}</Text>
          <Link
            src={siteConfig.linkedin}
            style={{ ...styles.contactLine, ...styles.link }}
          >
            {siteConfig.linkedin}
          </Link>
          {showGithub ? (
            <Link src={gh} style={{ ...styles.contactLine, ...styles.link }}>
              {gh}
            </Link>
          ) : null}
        </View>

        <Text style={styles.h2}>{c.summary}</Text>
        {summary[lang].map((p, i) => (
          <Text key={i} style={styles.body}>
            {p}
          </Text>
        ))}

        <Text style={styles.h2}>{c.experience}</Text>
        {experience.map((job, i) => (
          <View key={i} wrap={false}>
            <Text style={styles.jobCompany}>{job.company[lang]}</Text>
            <Text style={styles.jobMeta}>
              {job.role[lang]} · {job.period[lang]}
            </Text>
            {job.highlights[lang].map((line) => (
              <Text key={line} style={styles.bullet}>
                • {line}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.h2}>{c.education}</Text>
        {education.map((ed, i) => (
          <View key={i} wrap={false}>
            <Text style={styles.eduLine}>
              <Text style={{ fontFamily: "Helvetica-Bold" }}>
                {ed.institution[lang]}
              </Text>
              {" — "}
              {ed.degree[lang]}
              {ed.year !== "—" ? ` (${ed.year})` : ""}
            </Text>
          </View>
        ))}

        <Text style={styles.h2}>{c.skills}</Text>
        {skillCategories.map((cat) => (
          <Text key={cat.id} style={styles.skillsBlock}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              {skillLabels[lang][cat.id]}:{" "}
            </Text>
            {cat.skills.join(", ")}
          </Text>
        ))}

        <Text style={styles.footNote} fixed>
          {c.docTitle} — {siteConfig.personName}
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.h2}>{c.featured}</Text>
        {featured.map((p, i) => {
          const href = resolveFeaturedLink(siteUrl, lang, p);
          return (
            <View key={i} style={{ marginBottom: 8 }} wrap={false}>
              <Text style={styles.projectTitle}>{p.title[lang]}</Text>
              <Text style={styles.projectMeta}>{p.stackLine[lang]}</Text>
              <Text style={styles.body}>{p.highlight[lang]}</Text>
              {href ? (
                <Link src={href} style={{ ...styles.body, ...styles.link }}>
                  {href}
                </Link>
              ) : (
                <Text style={{ ...styles.body, color: "#666", fontSize: 9 }}>
                  {lang === "es"
                    ? "Enlace: completar externalUrl o portfolioSlug en data/cv.ts"
                    : "Link: set externalUrl or portfolioSlug in data/cv.ts"}
                </Text>
              )}
            </View>
          );
        })}

        <Text style={styles.h2}>{c.appendixTitle}</Text>
        <Text style={{ ...styles.body, fontSize: 9, marginBottom: 6 }}>
          {c.appendixNote}
        </Text>
        {featured.map((p) => {
          const href = resolveFeaturedLink(siteUrl, lang, p);
          const line = buildHarvardAppendixLine(p, lang, author, accessed, href);
          return (
            <View key={line.key} style={styles.refBlock}>
              <Text style={styles.refHanging}>{line.children}</Text>
            </View>
          );
        })}

        <Text style={styles.footNote} fixed>
          {c.docTitle} — {siteConfig.personName}
        </Text>
      </Page>
    </Document>
  );
}
