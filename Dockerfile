# syntax=docker/dockerfile:1
# Requiere BuildKit (Docker 23+ o DOCKER_BUILDKIT=1) para caches en RUN --mount.
# Build:  DOCKER_BUILDKIT=1 docker build -t square10 .
# Run:    docker run -p 3000:3000 square10
# Dominio:  --build-arg NEXT_PUBLIC_SITE_URL=https://tu-dominio.com (se fija en build)

FROM node:20-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---
FROM base AS deps
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt/lists,sharing=locked \
    apt-get update -y && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# ---
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* se incrustan en el build (no basta con -e en runtime).
ARG NEXT_PUBLIC_SITE_URL=https://jhonybenitez.dev
ARG NEXT_PUBLIC_CONTACT_EMAIL
ARG NEXT_PUBLIC_GITHUB_URL
ARG NEXT_PUBLIC_LINKEDIN_URL
ARG NEXT_PUBLIC_UMAMI_SCRIPT_URL
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL \
    NEXT_PUBLIC_GITHUB_URL=$NEXT_PUBLIC_GITHUB_URL \
    NEXT_PUBLIC_LINKEDIN_URL=$NEXT_PUBLIC_LINKEDIN_URL \
    NEXT_PUBLIC_UMAMI_SCRIPT_URL=$NEXT_PUBLIC_UMAMI_SCRIPT_URL \
    NEXT_PUBLIC_UMAMI_WEBSITE_ID=$NEXT_PUBLIC_UMAMI_WEBSITE_ID
# ESLint durante build: ver next.config.ts (solo omitido si DOCKER_BUILD=1)
ENV DOCKER_BUILD=1
# Build clásico (sin --turbopack) para reproducibilidad en el contenedor
RUN --mount=type=cache,target=/app/.next/cache \
    npx next build

# ---
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
# El botón "Descargar CV" está habilitado por defecto; CV_DOWNLOAD_ENABLED=false (docker run -e) lo oculta

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# La página /changelog lee CHANGELOG.md en runtime (process.cwd()); debe existir en la imagen
COPY --from=builder --chown=nextjs:nodejs /app/CHANGELOG.md ./CHANGELOG.md

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
