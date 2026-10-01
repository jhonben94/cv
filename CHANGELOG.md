# Changelog

Todos los cambios notables de **square10** (portfolio de Jhony Benítez) se documentan aquí.

**Repositorio público:** [github.com/jhonben94/cv](https://github.com/jhonben94/cv).

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado a [SemVer](https://semver.org/lang/es/). La versión publicada debe coincidir con `version` en `package.json` al etiquetar en Git.

## [Unreleased]

### Añadido
- (vacío)

### Cambiado
- (vacío)

---

## [0.3.0] - 2026-09-30

Reposicionamiento senior/lead del portfolio: casos de estudio, sección de decisiones técnicas y CV descargable con datos reales.

### Añadido
- Ancla `#arquitectura` en la ficha de proyecto (`/[locale]/proyectos/[slug]`), para enlazar directo a la sección de arquitectura.
- **Casos de estudio** con estructura Problema → Restricciones → Arquitectura → Decisiones clave → Resultado (`caseStudy` en `data/types.ts`) para Zentra, SquareOne, SIFEN, Infraestructura y Dompir; insignia "Caso de estudio" y orden prioritario en el listado. Diagramas nuevos en Zentra y SquareOne, y de despliegue (CI/CD → clúster → Prometheus/Grafana) en Infraestructura.
- Sección **"Cómo tomo decisiones técnicas"** (microservicios vs. monolito modular, Kubernetes vs. Compose, construir vs. adoptar).
- Indicadores en el hero (años, ownership, especialización backend, platform engineering) y subtítulo de posicionamiento.

### Cambiado
- **Posicionamiento**: hero, descripción del sitio, JSON-LD y "Sobre mí" pasan a *Senior Software Engineer · Technical Lead · Software Architect*, con énfasis en ownership técnico de punta a punta y 9+ años.
- **Competencias**: orden Ingeniería (core) → Arquitectura → Plataforma y operación → Frontend y mobile (backend primero); añadidos BFF, OIDC/Keycloak, Next.js y sistemas distribuidos.
- **IA**: la sección pasa a *AI-Augmented Software Engineering*, con el flujo Requisitos → specs → Claude → Codex/OpenCode → pruebas → revisión humana → CI/CD.
- **Docker**: `NEXT_PUBLIC_*` (dominio, contacto, Umami) se reciben como `ARG` en el build, con `https://jhonybenitez.dev` por defecto; `build-image.sh` los pasa como `--build-arg`. Antes el sitio salía con `localhost:3000` incrustado.
- **Botón "Descargar CV"** habilitado por defecto; `CV_DOWNLOAD_ENABLED=false` lo oculta (antes había que activarlo con `true`).
- **CV en PDF** (`data/cv.ts`): experiencia y educación reemplazadas por los datos reales (antes eran texto de relleno) e inclusión de Dompir y de las mejoras de SquareOne.
- **SquareOne / Kahani Ratings**: el enlace público pasa de `squareone.kahani.dev` a **https://ratings.kahani.com.py/** en `data/cv.ts` y `data/projects.ts` (enlaces y textos).
- **Proyectos privados** (sin demo pública): en el CV en PDF apuntan a la ficha del proyecto en el sitio, directo a su sección de arquitectura (`…/proyectos/<slug>#arquitectura`).

### Eliminado
- Sección **Certificaciones** (estaba vacía, "próximamente") y su entrada de navegación; el estado "Próximamente" del botón de CV.
- Enlaces de relleno (`github.com`, `example.com`) en proyectos privados de `data/projects.ts`; ya no se muestra la sección de enlaces donde no hay URL real.

---

## [0.2.3] - 2026-09-30

Nuevo caso **Dompir**, mejoras de SquareOne en el CV y portfolio, analítica opcional y tarjetas Open Graph dinámicas.

### Añadido

- **Caso Dompir** (`dompir-erp-pos-multitenant`) en `data/projects.ts` (ES/EN, con diagrama Mermaid): migración Strangler Fig de un ERP/POS Java EE forkeado por cliente a una plataforma multi-tenant (Spring Boot 4, Angular 21). Incluye migración verificada: 20/20 conteos y 9/9 valores de control conciliados, 0 diferencias y checksums idénticos en 3 corridas del ETL.
- **Dompir en el CV** (`data/cv.ts`): párrafo de resumen, viñeta de experiencia y primer proyecto destacado.
- **Analítica opcional con Umami**: el script se carga solo si existen `NEXT_PUBLIC_UMAMI_SCRIPT_URL` y `NEXT_PUBLIC_UMAMI_WEBSITE_ID`; eventos `project-link-click` (con `slug` y `kind`) en los enlaces de la ficha de proyecto.
- **Imágenes Open Graph dinámicas** para la home y para cada proyecto (`opengraph-image.tsx`), con fuente de Google acotada a los caracteres usados y *fallback* a la fuente por defecto si no hay red (`lib/og/load-google-font.ts`).

### Cambiado

- **SquareOne** (`data/projects.ts` y `data/cv.ts`): se documentan las mejoras de seguridad (autorización por objeto, redacción de datos personales por rol), integridad (sync FIDE atómico con lock distribuido, bloqueo optimista con `If-Match`) y confiabilidad (outbox transaccional de correo, errores RFC 9457).
- **Copy en español** pulido en `messages/es.json`, `data/cv.ts` y `data/projects.ts` (SquareOne: problema y catálogo; Venta Blitz: beneficio).
- `package.json` sube a **0.2.3**.

## [0.2.2] - 2026-05-06

Revisión editorial del contenido en **español**: coherencia terminológica, registro uniforme y menos anglicismos sueltos en párrafos largos.

### Cambiado

- **`messages/es.json`**: navegación y encabezados (p. ej. competencias técnicas, historial de cambios), textos de proyectos y de la ficha de detalle (**Características principales** en lugar de “Features”).
- **`data/cv.ts`**: pulido del resumen y bullets en español (Stack Venta Blitz/Docker Compose, fintech sin “transaction-heavy”, Zentra con GIS y PostgreSQL descritos de forma natural).
- **`data/projects.ts`**: copy del caso **SquareOne** y beneficio **Venta Blitz** en español más preciso y ortografía (**catálogo**).

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

1. El remoto del proyecto es `https://github.com/jhonben94/cv.git` (rama por defecto según configuración del repo; suele ser `master` o `main`).
2. Etiqueta esta versión alinearla con el changelog:
   ```bash
   git tag -a v0.3.0 -m "Release 0.3.0 — casos de estudio y posicionamiento senior"
   git push origin v0.3.0
   ```
3. Opcional: en **GitHub → Releases**, crea una release desde el tag `v0.3.0` y pega el bloque de `[0.3.0]` como notas.

[Unreleased]: https://github.com/jhonben94/cv/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/jhonben94/cv/releases/tag/v0.3.0
[0.2.3]: https://github.com/jhonben94/cv/releases/tag/v0.2.3
[0.2.2]: https://github.com/jhonben94/cv/releases/tag/v0.2.2
[0.2.1]: https://github.com/jhonben94/cv/releases/tag/v0.2.1
[0.1.0]: https://github.com/jhonben94/cv/releases/tag/v0.1.0
