import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/data/projects";
import { siteConfig } from "@/lib/site";

const locales = ["es", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
    entries.push({
      url: `${base}/${locale}/proyectos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    entries.push({
      url: `${base}/${locale}/changelog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    });
    for (const slug of getAllProjectSlugs()) {
      entries.push({
        url: `${base}/${locale}/proyectos/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
