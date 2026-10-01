/**
 * Botón de descarga de CV en el hero.
 * Habilitado por defecto. Para ocultar la descarga sin redeploy de código:
 * CV_DOWNLOAD_ENABLED=false (también "0" o "no").
 *
 * Requiere render dinámico en el hero para que el valor se respete en runtime
 * (Docker, Dokploy, etc.).
 */
export function isCvDownloadEnabled(): boolean {
  const v = process.env.CV_DOWNLOAD_ENABLED?.toLowerCase().trim();
  return !(v === "false" || v === "0" || v === "no");
}
