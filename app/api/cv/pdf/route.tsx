import { renderToBuffer } from "@react-pdf/renderer";
import {
  cvEducation,
  cvExperience,
  cvFeaturedProjects,
  cvSummary,
} from "@/data/cv";
import { skillCategories } from "@/data/skills";
import { CvPdfDocument } from "@/lib/cv/cv-pdf-document";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") === "en" ? "en" : "es";

  const buffer = await renderToBuffer(
    <CvPdfDocument
      lang={lang}
      siteUrl={siteConfig.siteUrl}
      summary={cvSummary}
      experience={cvExperience}
      education={cvEducation}
      featured={cvFeaturedProjects}
      skillCategories={skillCategories}
    />,
  );

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Jhony-Benitez-CV-${lang}.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
