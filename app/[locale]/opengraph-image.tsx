import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { loadGoogleFont } from "@/lib/og/load-google-font";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export const alt = "Jhony Benítez — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const siteName = t("siteName");
  const siteDescription = t("siteDescription");
  const domain = siteConfig.siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const localeLabel = locale === "es" ? "ES" : "EN";

  const text = `${siteConfig.personName}${siteName}${siteDescription}${domain}${localeLabel}`;
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

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "9999px",
              backgroundColor: "#0f766e",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            JB
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0f766e",
            }}
          >
            {siteConfig.personName}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#134e4a",
            }}
          >
            {siteName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#5b7a75",
            }}
          >
            {siteDescription}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(15, 118, 110, 0.2)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", fontSize: "22px", color: "#0369a1", fontWeight: 700 }}>
            {domain}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              fontWeight: 700,
              color: "#ffffff",
              backgroundColor: "#0369a1",
              padding: "6px 16px",
              borderRadius: "9999px",
            }}
          >
            {localeLabel}
          </div>
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
