/**
 * Feature flag del botón de descarga de CV en el hero.
 * Variable: CV_DOWNLOAD_ENABLED — "true" | "1" | "yes" habilita el enlace al PDF.
 * Por defecto (sin definir o valor distinto): modo "próximamente".
 *
 * Requiere render dinámico en el hero (p. ej. `headers()` en el componente) para
 * que el valor se respete en runtime (Docker, Dokploy, etc.).
 */
export function isCvDownloadEnabled(): boolean {
  const v = process.env.CV_DOWNLOAD_ENABLED?.toLowerCase().trim();
  return v === "true" || v === "1" || v === "yes";
}
