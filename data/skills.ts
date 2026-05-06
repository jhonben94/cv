export type SkillCategoryId = "frontend" | "backend" | "architecture" | "devops";

export const skillCategories: {
  id: SkillCategoryId;
  skills: string[];
}[] = [
  {
    id: "frontend",
    skills: [
      "Angular",
      "React",
      "Flutter",
      "PrimeNG",
      "Tailwind CSS",
      "TypeScript",
      "UX/UI",
    ],
  },
  {
    id: "backend",
    skills: [
      "Java",
      "Spring Boot",
      "Quarkus",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "JPA / Hibernate",
    ],
  },
  {
    id: "architecture",
    skills: [
      "Microservicios",
      "Arquitectura modular",
      "Event-driven architecture",
      "API Gateway",
      "Integraciones SOAP/REST",
      "Diseño de bases de datos",
      "Patrones de diseño",
    ],
  },
  {
    id: "devops",
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes / MicroK8s / K3s",
      "Traefik",
      "Jenkins",
      "GitLab CI/CD",
      "PostgreSQL",
      "Oracle",
      "Redis",
      "MinIO",
      "Prometheus",
      "Grafana",
    ],
  },
];
