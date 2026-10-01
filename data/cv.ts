import type {
  CvEducationEntry,
  CvExperienceEntry,
  CvFeaturedProject,
  Localized,
} from "@/data/types";

/** Párrafos del resumen profesional (solo PDF / datos editoriales). */
export const cvSummary: Localized<string[]> = {
  es: [
    "Ingeniero full stack senior con foco en arquitectura, plataformas distribuidas y ownership de punta a punta: APIs Java con Spring Boot (JHipster) y Quarkus, servicios Node.js/TypeScript, componentes GIS (Python/FastAPI) y frontends web (Angular) y móviles (Flutter), con SSR donde aplica.",
    "Diseño e implementación de sistemas modularizados: contratos REST explícitos, migraciones de esquema (Liquibase/Flyway), autenticación OIDC/JWT y separación clara entre servicios de dominio, integración y geometría.",
    "Lead técnico en SquareOne — ecosistema digital para federaciones de ajedrez: jugadores, clubes, transferencias, torneos e ingestión de datos de rankings externos sobre PostgreSQL y operaciones programadas.",
    "Dompir — migración de un ERP/POS Java EE forkeado por cliente a una plataforma multi-tenant (Spring Boot 4, Angular 21) con ETL idempotente y conciliación verificada: 20 de 20 conteos y 9 de 9 valores de control sin diferencias.",
    "Arquitectura del entorno Zentra — ERP y plataforma operativa políglota: núcleo Quarkus, aplicación Angular de administración, servicio Fastify para sincronización periódica de padrones públicos hacia PostgreSQL, Redis opcional para escalar lecturas y microservicio GIS con GeoPackage y geocodificación inversa.",
    "Venta Blitz — plataforma de ventas y cobranzas de campo: monolito modular JHipster con app Flutter para recorridos, geolocalización y cuadros de mando contra la misma línea API.",
    "Cultura de entrega reproducible: Docker y Docker Compose multi-servicio, comprobaciones de salud en contenedor, exportación Prometheus donde aplica, scripts de build/push coordinados entre imágenes y despliegue en infraestructura gestionada (p. ej. Dokploy/Coolify) sin sacrificar seguridad.",
  ],
  en: [
    "Senior full-stack engineer focused on architecture, distributed platforms, and end-to-end ownership: Java APIs on Spring Boot (JHipster) and Quarkus, TypeScript Node services, GIS components (Python/FastAPI), and Angular plus Flutter clients with SSR and product delivery experience.",
    "I design modular systems with explicit REST contracts, schema migrations (Liquibase/Flyway), OIDC/JWT-first security, and clear boundaries between domain, integration, and geometry services.",
    "Technical lead on SquareOne — a digital ecosystem for chess federations covering players, clubs, transfers, tournaments, and ingestion of external rating data into PostgreSQL with scheduled operations.",
    "Dompir — migration of a client-forked Java EE ERP/POS into a multi-tenant platform (Spring Boot 4, Angular 21) with an idempotent ETL and verified reconciliation: 20 of 20 counts and 9 of 9 control values with no differences.",
    "I architected the Zentra environment — enterprise ERP polyglot mesh: Quarkus core, Angular admin SPA, Fastify service for periodic public-registry synchronization into Postgres, optional Redis-backed read throughput, and a dedicated GIS tier with GeoPackage storage and reverse geocoding.",
    "Venta Blitz — field sales and collections: JHipster monolith complemented by a Flutter mobile app with maps and dashboards wired to the same API surface.",
    "Repeatable delivery: multi-service Docker Compose, Kubernetes-style health probes, Prometheus export where appropriate, coordinated image versioning, and deployments on managed container hosting without leaking secrets across stacks.",
  ],
};

/** Experiencia en orden cronológico inverso (lo más reciente primero). */
export const cvExperience: CvExperienceEntry[] = [
  {
    company: {
      es: "Kahani E.A.S. / práctica independiente",
      en: "Kahani E.A.S. / independent practice",
    },
    role: {
      es: "Staff / desarrollo senior, arquitectura y producto",
      en: "Staff / senior engineer, architecture, and product",
    },
    period: {
      es: "2022 — presente",
      en: "2022 — present",
    },
    highlights: {
      es: [
        "SquareOne: plataforma full stack para federación de ajedrez — API Quarkus (Java 21), Angular SSR, Keycloak OIDC, Flyway/PG y jobs orientados a rankings y procesos federativos; producto público squareone.kahani.dev.",
        "Dompir — migración Strangler Fig de un ERP/POS Java EE (8 forks por cliente) a un backend multi-tenant Spring Boot 4 + Angular 21; ETL piloto verificado (3.317 ventas, 0 diferencias, checksums idénticos en 3 corridas).",
        "SquareOne (mejoras): autorización por objeto, sync FIDE atómico con lock distribuido, bloqueo optimista, outbox de correo, Problem Details y 83 tests backend.",
        "Zentra — ERP modular multi-servicio: Quarkus + Angular (PrimeNG), servicio Fastify para ETL/sync de registros tributarios públicos→PostgreSQL, Redis opcional, API geo Python sobre GeoPackage; compose y Dokploy como patrón de despliegue.",
        "Venta Blitz — JHipster/Spring Boot (Java 17), Liquibase y PostgreSQL con stack desplegado vía Docker Compose; cliente Flutter MobX+Dio para vendedores con mapas, JWT y métricas operativas (exportación Prometheus opcional).",
        "Lideré decisiones arquitectónicas entre monolitos modulares y servicios especializados, priorizando trazabilidad de datos, límites de contexto y operación estable en contenedor.",
        "Automatización de builds (Maven Jib/Java, pipelines npm/Python) y publicación consistente de imágenes etiquetadas con versiones declarativas en pom/package/pyproject.",
        "Docencia universitaria complementaria al delivery de producto; mentoría técnica a equipos y partners.",
      ],
      en: [
        "SquareOne — full-stack federation platform: Quarkus APIs (Java 21), SSR Angular frontend, Keycloak OIDC, Flyway-managed PostgreSQL, and scheduled federation/rating workflows; public product at squareone.kahani.dev.",
        "Dompir — Strangler Fig migration of a Java EE ERP/POS (8 client forks) into a Spring Boot 4 + Angular 21 multi-tenant backend; verified pilot ETL (3,317 sales, 0 differences, identical checksums across 3 runs).",
        "SquareOne hardening: object-level authorization, atomic FIDE sync with distributed lock, optimistic locking, email outbox, Problem Details, and 83 backend tests.",
        "Zentra — modular multi-service ERP: Quarkus plus Angular admin (PrimeNG); Fastify service for recurring public-registry ETL/sync into Postgres; optional Redis acceleration; Python GIS API on GeoPackage; Docker Compose stacks and Dokploy-oriented deployment splits.",
        "Venta Blitz — Spring Boot/JHipster core (Java 17) with Liquibase and Postgres in Compose-based production footprints; Flutter sales app (MobX, Dio, maps, JWT) wired to REST with optional Prometheus export.",
        "Led architectural trade-offs across modular monoliths vs dedicated services emphasizing data lineage, bounded contexts, and reliable container ops.",
        "Automated repeatable builds (Maven Jib, npm/TS tooling, Python packaging) so container tags stay aligned with semantic versions in manifests.",
        "University teaching complements hands-on ownership; mentorship for engineering partners.",
      ],
    },
  },
  {
    company: {
      es: "Entorno fintech (consultoría / producto)",
      en: "Fintech environment (consulting / product)",
    },
    role: {
      es: "Arquitecto de software / desarrollo senior",
      en: "Software architect / senior developer",
    },
    period: {
      es: "2019 — 2022",
      en: "2019 — 2022",
    },
    highlights: {
      es: [
        "Arquitectura de integraciones, APIs y equipos de entrega en contexto regulado.",
        "Decisiones de stack, observabilidad y pipelines de despliegue para sistemas con alta carga transaccional.",
      ],
      en: [
        "Architecture for integrations, APIs, and delivery teams operating under regulatory constraints.",
        "Stack selections, observability baselines, and deployment pipelines for transaction-heavy systems.",
      ],
    },
  },
  {
    company: {
      es: "Consultoría de software",
      en: "Software consulting",
    },
    role: {
      es: "Desarrollador full stack / arquitecto",
      en: "Full-stack developer / architect",
    },
    period: {
      es: "2018 — 2019",
      en: "2018 — 2019",
    },
    highlights: {
      es: [
        "Modelado de dominios, APIs y soluciones web para clientes corporativos.",
      ],
      en: [
        "Domain modeling, APIs, and web solutions for enterprise clients.",
      ],
    },
  },
];

export const cvEducation: CvEducationEntry[] = [
  {
    institution: {
      es: "Formación universitaria (detalle bajo solicitud)",
      en: "University education (details on request)",
    },
    degree: {
      es: "Ingeniería / sistemas — completar según CV oficial",
      en: "Engineering / systems — complete per official CV",
    },
    year: "—",
  },
];

/**
 * Proyectos destacados para el CV (subconjunto editorial).
 * externalUrl tiene prioridad sobre portfolioSlug en el PDF.
 */
export const cvFeaturedProjects: CvFeaturedProject[] = [
  {
    title: {
      es: "SquareOne — plataforma federativa de ajedrez",
      en: "SquareOne — chess federation platform",
    },
    stackLine: {
      es: "Quarkus · Angular SSR · Keycloak · PostgreSQL · Flyway",
      en: "Quarkus · Angular SSR · Keycloak · PostgreSQL · Flyway",
    },
    highlight: {
      es: "Diseñé y consolidé un ecosistema digital moderno: rankings, clubes, transferencias y torneos con identidad OIDC, persistencia relacional y sincronización con fuentes externas de ratings; endurecí seguridad, integridad (sync FIDE atómico, bloqueo optimista) y confiabilidad (outbox de correo, Problem Details).",
      en: "Architected a modern digital ecosystem for federations—rankings, clubs, transfers, and tournaments with OIDC identity, relational persistence, and ingestion from external rating sources; hardened security, integrity (atomic FIDE sync, optimistic locking), and reliability (email outbox, Problem Details).",
    },
    externalUrl: "https://squareone.kahani.dev/",
    portfolioSlug: "squareone-paraguay-ranking-plataforma",
    referenceYear: 2025,
  },
  {
    title: {
      es: "Dompir — migración ERP/POS a plataforma multi-tenant",
      en: "Dompir — ERP/POS migration to a multi-tenant platform",
    },
    stackLine: {
      es: "Spring Boot 4 · Angular 21 · MyBatis · PostgreSQL · Flyway · Docker",
      en: "Spring Boot 4 · Angular 21 · MyBatis · PostgreSQL · Flyway · Docker",
    },
    highlight: {
      es: "Consolidé 8 forks Java EE en un backend multi-tenant (Strangler Fig, 11 módulos) y verifiqué la migración: 20/20 conteos y 9/9 valores de control conciliados, 0 diferencias, ETL idempotente con datos anonimizados.",
      en: "Consolidated 8 Java EE forks into one multi-tenant backend (Strangler Fig, 11 modules) and verified the migration: 20/20 counts and 9/9 control values reconciled, 0 differences, idempotent ETL with anonymized data.",
    },
    portfolioSlug: "dompir-erp-pos-multitenant",
    referenceYear: 2026,
  },
  {
    title: {
      es: "Zentra — ERP multi-servicio con capacidades GIS",
      en: "Zentra — geo-enabled multi-service ERP",
    },
    stackLine: {
      es: "Quarkus · Angular · Fastify · Python · PostgreSQL · Redis · GeoPackage",
      en: "Quarkus · Angular · Fastify · Python · PostgreSQL · Redis · GeoPackage",
    },
    highlight: {
      es: "Plataforma empresarial modular: núcleo API Quarkus, front PrimeNG, servicio Fastify con tareas programadas sobre PostgreSQL compartido, Redis opcional como acelerador de lectura y capa GIS desacoplada (GeoPackage, geocodificación inversa).",
      en: "Enterprise modular platform: Quarkus API core, PrimeNG admin, scheduled Node integration into shared Postgres, optional Redis read acceleration, and a decoupled GIS tier for cartography and reverse geocoding.",
    },
    portfolioSlug: "zentra-erp-quarkus-angular",
    referenceYear: 2024,
  },
  {
    title: {
      es: "Venta Blitz — ventas de campo y cobranzas",
      en: "Venta Blitz — field sales and collections",
    },
    stackLine: {
      es: "JHipster · Spring Boot · Flutter · PostgreSQL · Docker",
      en: "JHipster · Spring Boot · Flutter · PostgreSQL · Docker",
    },
    highlight: {
      es: "Monolito modular Java con Liquibase y API REST; app Flutter para fuerza de ventas con mapas, JWT y reporting móvil; entrega containerizada con health checks y bases aisladas en red interna.",
      en: "Modular Java monolith with Liquibase-backed REST APIs; Flutter field app with mapping, JWT, and mobile reporting; containerized delivery with health checks and database isolation on internal networks.",
    },
    portfolioSlug: "venta-blitz-jhipster",
    referenceYear: 2024,
  },
  {
    title: {
      es: "Plataforma CRM modular",
      en: "Modular CRM platform",
    },
    stackLine: {
      es: "Jakarta EE · React · Microservicios · PostgreSQL",
      en: "Jakarta EE · React · Microservices · PostgreSQL",
    },
    highlight: {
      es: "Arquitectura base y límites de contexto para un ecosistema CRM extensible.",
      en: "Base architecture and bounded contexts for an extensible CRM ecosystem.",
    },
    portfolioSlug: "crm-plataforma-modular",
    referenceYear: 2024,
  },
  {
    title: {
      es: "Facturación electrónica (SIFEN)",
      en: "Electronic invoicing (SIFEN)",
    },
    stackLine: {
      es: "Node.js · TypeScript · Prisma · PostgreSQL · XML",
      en: "Node.js · TypeScript · Prisma · PostgreSQL · XML",
    },
    highlight: {
      es: "Emisión de comprobantes con validación y trazabilidad en dominio fiscal.",
      en: "Issuance of electronic documents with validation and traceability.",
    },
    portfolioSlug: "facturacion-electronica-sifen",
    referenceYear: 2024,
  },
  {
    title: {
      es: "Infraestructura Docker / Kubernetes",
      en: "Docker / Kubernetes infrastructure",
    },
    stackLine: {
      es: "Docker · K8s · CI/CD · observabilidad",
      en: "Docker · K8s · CI/CD · observability",
    },
    highlight: {
      es: "Patrones de despliegue y operación para servicios en contenedor.",
      en: "Deployment and operations patterns for containerized services.",
    },
    portfolioSlug: "infra-docker-kubernetes",
    referenceYear: 2023,
  },
];
