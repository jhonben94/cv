# Changelog

Todos los cambios notables de **square10** (portfolio de Jhony Benítez) se documentan aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado a [SemVer](https://semver.org/lang/es/). La versión publicada debe coincidir con `version` en `package.json` al etiquetar en Git.

## [Unreleased]

### Añadido
- (vacío)

### Cambiado
- (vacío)

---

## [0.2.1] - 2026-05-05

Publicación de consolidación editorial: trazabilidad pública de cambios y actualización del contenido del CV para posicionamiento senior internacional.

### Añadido

- Página pública **Changelog** en `/[locale]/changelog` que renderiza `CHANGELOG.md` y facilita seguimiento de releases desde el sitio.

### Cambiado

- **CV (datos editoriales)** en `data/cv.ts`: resumen profesional y experiencia reescritos con enfoque **Senior/Lead** basado en proyectos reales del workspace (SquareOne, Zentra, Venta Blitz), manteniendo redacción sin exponer información sensible.
- **Proyectos destacados del CV**: incorporación y priorización de SquareOne, Zentra y Venta Blitz con stack técnico actualizado y enlace público de producto para SquareOne.

## [0.1.0] - 2026-04-28

Primera versión publicable del sitio: portfolio técnico con i18n, casos de estudio y despliegue listo para contenedor.

### Añadido

- **Stack base**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4.
- **Internacionalización**: `next-intl` con rutas localizadas `es` y `en` (middleware, mensajes en `messages/`).
- **Páginas**: inicio (hero, sobre mí, skills, arquitecturas, proyectos con filtro), listado y detalle de proyectos con metadatos Open Graph.
- **Proyectos**: datos estructurados en `data/projects.ts` (stack, arquitectura, diagramas, enlaces).
- **Diagramas**: Mermaid en ficha de proyecto; imágenes y placeholders en `public/placeholders/`.
- **Tema**: `next-themes` (claro / oscuro) y diseño con tokens en `app/globals.css`.
- **CV en PDF**: endpoint `GET /api/cv/pdf?lang=es|en` con `@react-pdf/renderer`, referencias de portfolio en **estilo Harvard** (autor–año, enlace, fecha de consulta). El botón “Descargar CV” en el hero apunta a este recurso.
- **SEO**: `JsonLdPerson`, `sitemap.xml`, `robots.txt`, `metadataBase` según `NEXT_PUBLIC_SITE_URL`.
- **Producción**: `output: "standalone"` en Next para imagen **Docker** mínima (Dokploy / Node).
- **Changelog**: este archivo para trazabilidad al publicar en GitHub.

### Cambiado

- **Rendimiento**: carga diferida de Mermaid (import dinámico + componente cliente `MermaidDiagramLazy`); `experimental.optimizePackageImports` para `lucide-react`; menos pesos de fuente IBM Plex Sans; JetBrains Mono sin preload prioritario; secciones bajo el hero envueltas en `Suspense` con skeletons; rutas `loading.tsx` bajo `app/[locale]/` para feedback al navegar.

### Notas para GitHub

1. Tras crear el repositorio, sustituye `OWNER` y `REPO` en los enlaces del pie (o elimínalos hasta el primer tag).
2. Etiqueta esta versión alinearla con el changelog:
   ```bash
   git tag -a v0.2.1 -m "Release 0.2.1 — changelog público y CV senior"
   git push origin v0.2.1
   ```
3. Opcional: en **GitHub → Releases**, crea una release desde el tag `v0.2.1` y pega el bloque de `[0.2.1]` como notas.

[Unreleased]: https://github.com/OWNER/REPO/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/OWNER/REPO/releases/tag/v0.2.1
[0.1.0]: https://github.com/OWNER/REPO/releases/tag/v0.1.0
