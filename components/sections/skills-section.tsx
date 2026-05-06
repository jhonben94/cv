import { getTranslations } from "next-intl/server";
import { skillCategories } from "@/data/skills";

export async function SkillsSection() {
  const t = await getTranslations("Skills");

  return (
    <section id="skills" className="scroll-mt-24 border-b border-[var(--color-border)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{t("subtitle")}</p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--color-primary)]">
                {t(`categories.${cat.id}`)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-sm font-medium text-[var(--color-text)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
