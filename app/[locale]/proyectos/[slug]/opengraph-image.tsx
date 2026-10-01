import { ImageResponse } from "next/og";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { loadGoogleFont } from "@/lib/og/load-google-font";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export const alt = "Case study — Jhony Benítez";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  const out: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of slugs) out.push({ locale, slug });
  }
  return out;
}

const MAX_CHIPS = 5;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  const loc = locale === "es" ? "es" : "en";

  const title = project?.title[loc] ?? siteConfig.personName;
  const description = project?.shortDescription[loc] ?? "";
  const stack = project?.stack ?? [];
  const visibleChips = stack.slice(0, MAX_CHIPS);
  const extraCount = stack.length - visibleChips.length;

  const text = `${title}${description}${stack.join("")}${siteConfig.personName}`;
  const [regular, bold] = await Promise.all([
    loadGoogleFont("IBM Plex Sans", 400, text),
    loadGoogleFont("IBM Plex Sans", 700, text),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "14px",
            backgroundColor: "#0f766e",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#0369a1",
          }}
        >
          {loc === "es" ? "Caso de estudio" : "Case study"} · {siteConfig.personName}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: "24px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "54px",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#134e4a",
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: 1.4,
                color: "#5b7a75",
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {visibleChips.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "#0f766e",
                padding: "8px 18px",
                borderRadius: "9999px",
              }}
            >
              {item}
            </div>
          ))}
          {extraCount > 0 ? (
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: 700,
                color: "#0f766e",
                border: "2px solid #0f766e",
                padding: "8px 18px",
                borderRadius: "9999px",
              }}
            >
              +{extraCount}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      ...size,
      fonts:
        regular && bold
          ? [
              { name: "IBM Plex Sans", data: regular, weight: 400, style: "normal" },
              { name: "IBM Plex Sans", data: bold, weight: 700, style: "normal" },
            ]
          : undefined,
    },
  );
}
