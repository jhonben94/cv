import type {
  CvEducationEntry,
  CvExperienceEntry,
  CvFeaturedProject,
  Localized,
} from "@/data/types";

/** Párrafos del resumen profesional (solo PDF / datos editoriales). */
export const cvSummary: Localized<string[]> = {
  es: [
    "Ingeniero de software senior y tech lead con foco en arquitectura, plataformas distribuidas y ownership técnico de punta a punta: APIs Java con Spring Boot (JHipster) y Quarkus, servicios Node.js/TypeScript, componentes GIS (Python/FastAPI) y frontends web (Angular) y móviles (Flutter), con SSR donde aplica.",
    "Diseño e implementación de sistemas modularizados: contratos REST explícitos, migraciones de esquema (Liquibase/Flyway), autenticación OIDC/JWT y separación clara entre servicios de dominio, integración y geometría.",
    "Lead técnico en SquareOne — ecosistema digital para federaciones de ajedrez: jugadores, clubes, transferencias, torneos e ingestión de datos de rankings externos sobre PostgreSQL y operaciones programadas.",
    "Dompir — migración de un ERP/POS Java EE forkeado por cliente a una plataforma multi-tenant (Spring Boot 4, Angular 21) con ETL idempotente y conciliación verificada: 20 de 20 conteos y 9 de 9 valores de control sin diferencias.",
    "Arquitectura del entorno Zentra — ERP y plataforma operativa políglota: núcleo Quarkus, aplicación Angular de administración, servicio Fastify para sincronización periódica de padrones públicos hacia PostgreSQL, Redis opcional para escalar lecturas y microservicio GIS con GeoPackage y geocodificación inversa.",
    "Venta Blitz — plataforma de ventas y cobranzas de campo: monolito modular JHipster con app Flutter para recorridos, geolocalización y cuadros de mando contra la misma línea API.",
    "Cultura de entrega reproducible: Docker y Docker Compose multi-servicio, comprobaciones de salud en contenedor, exportación Prometheus donde aplica, scripts de build/push coordinados entre imágenes y despliegue en infraestructura gestionada (p. ej. Dokploy/Coolify) sin sacrificar seguridad.",
  ],
  en: [
    "Senior software engineer and tech lead focused on architecture, distributed platforms, and end-to-end technical ownership: Java APIs on Spring Boot (JHipster) and Quarkus, TypeScript Node services, GIS components (Python/FastAPI), and Angular plus Flutter clients with SSR and product delivery experience.",
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
    company: { es: "Edge Mobile Ideas", en: "Edge Mobile Ideas" },
    role: {
      es: "Desarrollador de software senior",
      en: "Senior Software Developer",
    },
    period: { es: "jul 2024 \u2014 presente", en: "Jul 2024 \u2014 present" },
    highlights: {
      es: [
        "Desarrollo y evolución de soluciones full stack empresariales, integraciones y servicios backend, con participación en decisiones técnicas, despliegues y soporte en producción.",
        "Java, Spring Boot, Quarkus, Angular, APIs REST/SOAP, bases de datos y entornos containerizados para entregar componentes mantenibles.",
      ],
      en: [
        "Develop and evolve enterprise full stack solutions, integrations, and backend services, contributing to technical decisions, deployments, and production support.",
        "Apply expertise in Java, Spring Boot, Quarkus, Angular, REST/SOAP APIs, databases, and containerized environments to deliver maintainable components.",
      ],
    },
  },
  {
    company: { es: "Kahani E.A.S.", en: "Kahani E.A.S." },
    role: {
      es: "CEO y fundador / liderazgo técnico de producto",
      en: "CEO & Founder / product technical lead",
    },
    period: { es: "feb 2024 \u2014 presente", en: "Feb 2024 \u2014 present" },
    highlights: {
      es: [
        "Dirección de un negocio centrado en ajedrez (productos, servicios y experiencias): estrategia, operación comercial, selección de producto, marca, ferias y apoyo a torneos.",
        "SquareOne / Kahani Ratings: plataforma full stack para federación de ajedrez — API Quarkus (Java 21), Angular SSR, Keycloak OIDC, Flyway/PostgreSQL y jobs de rankings; endurecimiento de seguridad, sync FIDE atómico con lock distribuido, bloqueo optimista, outbox de correo y 83 tests de backend; producto público ratings.kahani.com.py.",
        "Dompir: migración Strangler Fig de un ERP/POS Java EE (8 forks por cliente) a un backend multi-tenant Spring Boot 4 + Angular 21; ETL piloto verificado (3.317 ventas, 0 diferencias, checksums idénticos en 3 corridas).",
        "Zentra (ERP modular Quarkus + Angular, sincronización DNIT con Fastify/Redis, API GIS en Python) y Venta Blitz (JHipster + app Flutter), desplegados con Docker Compose y Dokploy.",
      ],
      en: [
        "Lead an end-to-end chess-focused business spanning products, services, and experiences, including strategy, commercial operations, product selection, branding, fairs, and tournament support.",
        "SquareOne / Kahani Ratings: full-stack chess federation platform — Quarkus API (Java 21), Angular SSR, Keycloak OIDC, Flyway/PostgreSQL, and ranking jobs; security hardening, atomic FIDE sync with distributed lock, optimistic locking, email outbox, and 83 backend tests; public product at ratings.kahani.com.py.",
        "Dompir: Strangler Fig migration of a Java EE ERP/POS (8 client forks) into a Spring Boot 4 + Angular 21 multi-tenant backend; verified pilot ETL (3,317 sales, 0 differences, identical checksums across 3 runs).",
        "Zentra (modular Quarkus + Angular ERP, DNIT sync with Fastify/Redis, Python GIS API) and Venta Blitz (JHipster + Flutter app), deployed with Docker Compose and Dokploy.",
      ],
    },
  },
  {
    company: { es: "UCOM Universidad Comunera", en: "UCOM Universidad Comunera" },
    role: {
      es: "Docente universitario",
      en: "University lecturer",
    },
    period: { es: "sep 2023 \u2014 presente", en: "Sep 2023 \u2014 present" },
    highlights: {
      es: [
        "Talleres prácticos de desarrollo backend, frontend y mobile con Java, Node.js, React, Angular y Flutter.",
        "Principios de arquitectura y experiencia real de ingeniería para acercar a los estudiantes a la toma de decisiones profesional.",
      ],
      en: [
        "Teach hands-on backend, frontend, and mobile development workshops using Java, Node.js, React, Angular, and Flutter.",
        "Share architecture principles and real-world engineering experience to expose students to professional decision-making and development practices.",
      ],
    },
  },
  {
    company: { es: "Konecta Software Factory", en: "Konecta Software Factory" },
    role: {
      es: "Arquitecto de software",
      en: "Software Architect",
    },
    period: { es: "may 2023 \u2014 jul 2024", en: "May 2023 \u2014 Jul 2024" },
    highlights: {
      es: [
        "Investigación y selección de tecnologías para la arquitectura base de un CRM modular con microservicios Jakarta EE, React, API Gateway y PostgreSQL.",
        "Definición de límites de dominio, contratos de integración y estrategias de despliegue independiente para una evolución incremental.",
      ],
      en: [
        "Researched and selected technologies for the foundational architecture of a modular CRM using Jakarta EE microservices, React, an API Gateway, and PostgreSQL.",
        "Defined domain boundaries, integration contracts, and independent deployment strategies to support incremental evolution and technical autonomy.",
      ],
    },
  },
  {
    company: { es: "Fintech Innovación", en: "Fintech Innovación" },
    role: {
      es: "Líder de equipo",
      en: "Team Leader",
    },
    period: { es: "abr 2022 \u2014 abr 2023", en: "Apr 2022 \u2014 Apr 2023" },
    highlights: {
      es: [
        "Gestión del equipo como Scrum Master y liderazgo de productos de facturación electrónica (SIFEN) y pago de facturas.",
        "Soluciones con Node.js, TypeScript, Prisma, XML, React, React Native, GraphQL y PostgreSQL; notificaciones Firebase y despliegues en GCP con Jenkins.",
      ],
      en: [
        "Managed the development team as Scrum Master and led electronic invoicing (SIFEN) and bill-payment products.",
        "Designed solutions using Node.js, TypeScript, Prisma, XML, React, React Native, GraphQL, and PostgreSQL; implemented Firebase notifications and GCP deployments with Jenkins.",
      ],
    },
  },
  {
    company: { es: "Personal Paraguay", en: "Personal Paraguay" },
    role: {
      es: "Analista de desarrollo de sistemas de gestión",
      en: "Management Systems Development Analyst",
    },
    period: { es: "abr 2021 \u2014 abr 2022", en: "Apr 2021 \u2014 Apr 2022" },
    highlights: {
      es: [
        "Análisis de requerimientos, planificación de entregas y coordinación de recursos tercerizados para funcionalidades de un CRM corporativo.",
        "Mejoras con AngularJS, Java EE, MyBatis y PostgreSQL, con apoyo en el pase a producción.",
      ],
      en: [
        "Analyzed requirements, planned delivery schedules, and coordinated outsourced resources for the development and implementation of corporate CRM features.",
        "Developed enhancements with AngularJS, Java EE, MyBatis, and PostgreSQL, supporting their rollout to production.",
      ],
    },
  },
  {
    company: { es: "Konecta Software Factory", en: "Konecta Software Factory" },
    role: {
      es: "Desarrollador de software",
      en: "Software Developer",
    },
    period: { es: "ene 2017 \u2014 mar 2021", en: "Jan 2017 \u2014 Mar 2021" },
    highlights: {
      es: [
        "Desarrollo y optimización de aplicaciones CRM y servicios backend con Java EE, Spring Boot, JPA, MyBatis, AngularJS, Angular y PostgreSQL.",
        "Iniciativas de infraestructura y automatización con Docker, Rocket.Chat, Zimbra y scripts de entorno de desarrollo.",
      ],
      en: [
        "Developed and optimized CRM applications and backend services with Java EE, Spring Boot, JPA, MyBatis, AngularJS, Angular, and PostgreSQL.",
        "Contributed to infrastructure and automation initiatives using Docker, Rocket.Chat, Zimbra, and scripts for development environment setup.",
      ],
    },
  },
];

export const cvEducation: CvEducationEntry[] = [
  {
    institution: {
      es: "Universidad Nacional de Asunción",
      en: "National University of Asunción",
    },
    degree: {
      es: "Licenciatura en Ciencias de la Informática, énfasis en Análisis de Sistemas",
      en: "Bachelor's Degree in Computer Science, emphasis in Systems Analysis",
    },
    year: "2014 — 2021",
  },
  {
    institution: {
      es: "Universidad Nacional de Asunción",
      en: "National University of Asunción",
    },
    degree: {
      es: "Licenciatura en Ciencias de la Informática, énfasis en Programación",
      en: "Bachelor's Degree in Computer Science, emphasis in Computer Programming",
    },
    year: "2014 — 2021",
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
    externalUrl: "https://ratings.kahani.com.py/",
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
