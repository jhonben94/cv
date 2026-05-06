import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/es/proyectos/chessync-gestion-clubes-ajedrez",
        destination: "/es/proyectos/squareone-paraguay-ranking-plataforma",
        permanent: true,
      },
      {
        source: "/en/proyectos/chessync-gestion-clubes-ajedrez",
        destination: "/en/proyectos/squareone-paraguay-ranking-plataforma",
        permanent: true,
      },
    ];
  },
  // Imagen Docker mínima (Dokploy / Node en contenedor)
  output: "standalone",
  // Dockerfile establece DOCKER_BUILD=1 solo en la etapa builder (build más rápido).
  eslint: {
    ignoreDuringBuilds: process.env.DOCKER_BUILD === "1",
  },
  experimental: {
    // Importaciones por ícono en lugar del bundle completo de lucide-react
    optimizePackageImports: ["lucide-react"],
  },
};

export default withNextIntl(nextConfig);
