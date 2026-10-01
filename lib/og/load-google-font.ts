/**
 * Descarga un subset de una Google Font limitado a los caracteres realmente
 * usados (evita tofu boxes en tildes/ñ dentro de ImageResponse). Si la red
 * no está disponible en build/runtime, devuelve `null` y el caller cae al
 * font por defecto de Satori en vez de romper la generación de la imagen.
 */
export async function loadGoogleFont(
  font: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      font,
    )}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}
