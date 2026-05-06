import fs from "node:fs";
import path from "node:path";

const FILE = "CHANGELOG.md";

function readFile(): string {
  const filePath = path.join(process.cwd(), FILE);
  return fs.readFileSync(filePath, "utf8");
}

/** Contenido bruto de `CHANGELOG.md` (lectura en build / request en Node). */
export function getChangelogSource(): string {
  return readFile();
}

/**
 * Cuerpo para la vista web: quita el H1 duplicado si el título de página ya dice "Changelog".
 * Si el archivo no existe (p. ej. imagen Docker sin copiar `CHANGELOG.md`), evita 500 con un aviso.
 */
export function getChangelogBodyForPage(): string {
  let raw: string;
  try {
    raw = readFile();
  } catch {
    return [
      "_No se encontró `CHANGELOG.md` en el servidor._",
      "",
      "Si desplegás con Docker: permití el archivo en `.dockerignore` (`!CHANGELOG.md`) y copialo en la imagen (véase el `Dockerfile` del proyecto).",
    ].join("\n");
  }
  return raw.replace(/^#\s+Changelog\s*\n+/im, "");
}
