#!/usr/bin/env bash
# Construye la imagen de producción para Linux y etiqueta con la versión de package.json + latest.
#
# BuildKit habilita caches de npm/apt/next en el Dockerfile (RUN --mount). Obligatorio en Docker clásico:
#   export DOCKER_BUILDKIT=1
#
# Uso:
#   ./build-image.sh              # solo build
#   ./build-image.sh --push       # build y docker push de ambas etiquetas
#   PUSH=1 ./build-image.sh       # igual que --push
#
#   REGISTRY=jhonybenitez/cv ./build-image.sh
#   PLATFORM=linux/amd64 ./build-image.sh --push   # Mac ARM → servidor AMD64
#
# Variables opcionales:
#   REGISTRY  nombre de imagen sin tag (por defecto: jhonybenitez/cv)
#   PLATFORM  p.ej. linux/amd64
#   PUSH      1 para empujar tras el build (alternativa a --push)

set -euo pipefail

export DOCKER_BUILDKIT=1

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REGISTRY="${REGISTRY:-jhonybenitez/cv}"
PLATFORM="${PLATFORM:-}"

DO_PUSH=0
for arg in "$@"; do
  if [[ "$arg" == "--push" ]]; then
    DO_PUSH=1
  fi
done
if [[ "${PUSH:-}" == "1" ]]; then
  DO_PUSH=1
fi

cd "$ROOT"

if [[ ! -f package.json ]]; then
  echo "error: no se encuentra package.json en ${ROOT}" >&2
  exit 1
fi

if command -v node >/dev/null 2>&1; then
  VERSION="$(node -p "require('./package.json').version")"
else
  VERSION="$(grep -m1 '"version"' package.json | sed -n 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')"
fi

if [[ -z "${VERSION}" ]]; then
  echo "error: no se pudo leer version de package.json" >&2
  exit 1
fi

TAG_VERSION="${REGISTRY}:${VERSION}"
TAG_LATEST="${REGISTRY}:latest"

args=(docker build -f Dockerfile -t "$TAG_VERSION" -t "$TAG_LATEST")
if [[ -n "${PLATFORM}" ]]; then
  args+=(--platform "${PLATFORM}")
fi
args+=(.)

echo "→ Registro: ${REGISTRY}"
echo "→ Versión (package.json): ${VERSION}"
echo "→ Etiquetas: ${TAG_VERSION}, ${TAG_LATEST}$([[ -n "${PLATFORM}" ]] && echo " (platform ${PLATFORM})")"
echo "→ docker build -f Dockerfile -t ${TAG_VERSION} -t ${TAG_LATEST}$([[ -n "${PLATFORM}" ]] && echo " --platform ${PLATFORM}") ."
"${args[@]}"

echo ""
echo "Build OK."
echo "Probar:  docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://tu-dominio.com ${TAG_LATEST}"

if [[ "${DO_PUSH}" -eq 1 ]]; then
  echo ""
  echo "→ docker push ${TAG_VERSION}"
  docker push "${TAG_VERSION}"
  echo "→ docker push ${TAG_LATEST}"
  docker push "${TAG_LATEST}"
  echo ""
  echo "Publicadas: ${TAG_VERSION} y ${TAG_LATEST}"
else
  echo ""
  echo "Para subir ambas etiquetas: ./build-image.sh --push   (o PUSH=1 ./build-image.sh)"
fi
