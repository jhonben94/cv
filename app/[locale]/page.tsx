import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { AiSection } from "@/components/sections/ai-section";
import { ArchitecturesSection } from "@/components/sections/architectures-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { JsonLdPerson } from "@/components/seo/json-ld-person";
import { SectionSkeleton } from "@/components/ui/content-skeleton";
import { siteConfig } from "@/lib/site";

/** Hero lee `CV_DOWNLOAD_ENABLED` en cada petición (Dokploy / Docker) */
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tipo?: string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("siteName");
  const description = t("siteDescription");
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === "es" ? "es_PY" : "en_US",
      type: "website",
      url: `${siteConfig.siteUrl}/${locale}`,
    },
  };
}

export default async function HomePage({ searchParams }: Props) {
  const sp = await searchParams;
  return (
    <>
      <JsonLdPerson />
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <AiSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ArchitecturesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection initialTipo={sp.tipo} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CertificationsSection />
      </Suspense>
    </>
  );
}
