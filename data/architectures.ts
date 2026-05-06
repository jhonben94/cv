import type { ArchitectureHighlight } from "./types";

export const architectureHighlights: ArchitectureHighlight[] = [
  {
    id: "arch-1",
    slug: "crm-plataforma-modular",
    stack: ["Jakarta", "React", "Microservicios", "PostgreSQL", "API Gateway"],
    title: {
      es: "Sistema CRM modular",
      en: "Modular CRM system",
    },
    problem: {
      es: "Diseñar un CRM extensible con microservicios y frontends desacoplados.",
      en: "Design an extensible CRM with microservices and decoupled frontends.",
    },
    stackSummary: {
      es: "Backend Jakarta, React, gateway y persistencia por servicio.",
      en: "Jakarta backend, React, gateway, and per-service persistence.",
    },
    links: { readme: "https://github.com" },
  },
  {
    id: "arch-2",
    slug: "infra-docker-kubernetes",
    stack: ["Docker", "K3s", "Traefik", "Prometheus", "Grafana"],
    title: {
      es: "Infraestructura contenerizada",
      en: "Containerized infrastructure",
    },
    problem: {
      es: "Operar servicios con routing TLS, escalado y observabilidad homogénea.",
      en: "Run services with TLS routing, scaling, and consistent observability.",
    },
    stackSummary: {
      es: "Kubernetes ligero, Traefik, stack de métricas y alertas.",
      en: "Lightweight Kubernetes, Traefik, metrics and alerting stack.",
    },
  },
  {
    id: "arch-3",
    slug: "facturacion-electronica-sifen",
    stack: ["Node.js", "TypeScript", "Prisma", "XML"],
    title: {
      es: "Integración fiscal y documentos XML",
      en: "Fiscal integration and XML documents",
    },
    problem: {
      es: "Cumplir normativas SIFEN con trazabilidad y despliegues confiables.",
      en: "Meet SIFEN requirements with traceability and reliable deployments.",
    },
    stackSummary: {
      es: "Servicios Node, esquemas XML, base relacional y auditoría.",
      en: "Node services, XML schemas, relational DB, and auditing.",
    },
  },
  {
    id: "arch-4",
    slug: "pipeline-jenkins-gcp",
    stack: ["Jenkins", "GCP", "Docker", "CI/CD"],
    title: {
      es: "Pipeline CI/CD hacia cloud",
      en: "CI/CD pipeline to the cloud",
    },
    problem: {
      es: "Automatizar despliegues de microservicios con calidad de release repetible.",
      en: "Automate microservice deployments with repeatable release quality.",
    },
    stackSummary: {
      es: "Jenkins orquesta build, pruebas y despliegue a entornos en GCP.",
      en: "Jenkins orchestrates build, tests, and deploy to GCP environments.",
    },
  },
];
