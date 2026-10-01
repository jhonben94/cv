export type SkillCategoryId = "core" | "architecture" | "platform" | "frontend";

/** Orden intencional: backend e ingeniería primero, frontend al final. */
export const skillCategories: {
  id: SkillCategoryId;
  skills: string[];
}[] = [
  {
    id: "core",
    skills: [
      "Java",
      "Spring Boot",
      "Quarkus",
      "Node.js",
      "PostgreSQL",
      "Oracle",
      "REST APIs",
      "GraphQL",
      "JPA / Hibernate",
      "Sistemas distribuidos",
    ],
  },
  {
    id: "architecture",
    skills: [
      "Microservicios",
      "Arquitectura modular",
      "API Gateway",
      "BFF",
      "Event-driven architecture",
      "OIDC / Keycloak",
      "Integraciones SOAP/REST",
      "Diseño de bases de datos",
      "Patrones de diseño",
    ],
  },
  {
    id: "platform",
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes / MicroK8s / K3s",
      "Traefik",
      "Jenkins",
      "GitLab CI/CD",
      "Prometheus",
      "Grafana",
      "Redis",
      "MinIO",
    ],
  },
  {
    id: "frontend",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "Flutter",
      "PrimeNG",
      "Tailwind CSS",
      "TypeScript",
      "UX/UI",
    ],
  },
];
