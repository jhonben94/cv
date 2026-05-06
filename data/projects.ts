import type { ProjectEntry } from "./types";

export const projects: ProjectEntry[] = [
  {
    slug: "crm-plataforma-modular",
    type: "architecture",
    stack: [
      "Jakarta EE",
      "React",
      "Microservicios",
      "PostgreSQL",
      "API Gateway",
    ],
    image: "/placeholders/crm.svg",
    links: {
      readme: "https://github.com",
      docs: "https://github.com",
    },
    title: {
      es: "Plataforma CRM modular",
      en: "Modular CRM platform",
    },
    shortDescription: {
      es: "Investigación y arquitectura base para un CRM con microservicios, Jakarta en backend y React en frontend.",
      en: "Research and base architecture for a CRM using microservices, Jakarta on the backend and React on the frontend.",
    },
    problem: {
      es: "Unificar criterios técnicos para un ecosistema CRM extensible, con equipos heterogéneos y entregas frecuentes sin acoplamiento monolítico.",
      en: "Align technical decisions for an extensible CRM ecosystem with mixed teams and frequent delivery without monolithic coupling.",
    },
    features: {
      es: [
        "Límites de contexto por dominio (clientes, ventas, soporte)",
        "Comunicación vía APIs y eventos",
        "Despliegue independiente de módulos",
      ],
      en: [
        "Bounded contexts per domain (sales, support, customers)",
        "API and event-based communication",
        "Independent deployability of modules",
      ],
    },
    decisionSummary: {
      es: "Se priorizó un API Gateway y servicios pequeños alrededor de capacidades de negocio, con base de datos por servicio donde aplica.",
      en: "We prioritized an API gateway and small services around business capabilities, with database-per-service where appropriate.",
    },
    benefitSummary: {
      es: "Mayor autonomía de equipos, evolución incremental del stack y mejor observabilidad por frontera de servicio.",
      en: "More team autonomy, incremental stack evolution, and better observability per service boundary.",
    },
    flowSummary: {
      es: "El cliente invoca el gateway; el gateway enruta a microservicios; eventos al bus para procesos asíncronos; agregación en BFF cuando hace falta una vista unificada.",
      en: "Clients call the gateway; the gateway routes to microservices; events to the bus for async flows; BFF aggregation when a unified view is needed.",
    },
    componentsSummary: {
      es: "API Gateway, microservicios Jakarta, React SPA, bus de eventos, PostgreSQL por servicio, observabilidad centralizada.",
      en: "API gateway, Jakarta microservices, React SPA, event bus, PostgreSQL per service, centralized observability.",
    },
    architectureName: {
      es: "CRM microservicios",
      en: "Microservices CRM",
    },
    mermaid: `flowchart LR
  Client[Client / SPA] --> GW[API Gateway]
  GW --> S1[Servicio Clientes]
  GW --> S2[Servicio Ventas]
  S1 --> DB1[(PostgreSQL)]
  S2 --> DB2[(PostgreSQL)]
  S1 --> Bus[Event Bus]
  S2 --> Bus`,
  },
  {
    slug: "facturacion-electronica-sifen",
    type: "fullstack",
    stack: ["Node.js", "TypeScript", "Prisma", "XML", "PostgreSQL"],
    image: "/placeholders/invoice.svg",
    links: { github: "https://github.com" },
    title: {
      es: "Facturación electrónica (SIFEN)",
      en: "Electronic invoicing (SIFEN)",
    },
    shortDescription: {
      es: "Emisión de comprobantes electrónicos integrada con requisitos fiscales y manejo robusto de XML.",
      en: "Electronic document issuance integrated with tax requirements and robust XML handling.",
    },
    problem: {
      es: "Garantizar trazabilidad, validación de esquemas y despliegues confiables en un dominio regulado y cambiante.",
      en: "Ensure traceability, schema validation, and reliable deployments in a regulated, evolving domain.",
    },
    features: {
      es: [
        "Pipeline de generación y firma de documentos",
        "Mapeo Prisma a tablas de auditoría",
        "Reintentos y colas para integraciones",
      ],
      en: [
        "Document generation and signing pipeline",
        "Prisma mapping to audit tables",
        "Retries and queues for integrations",
      ],
    },
    decisionSummary: {
      es: "TypeScript end-to-end y Prisma para contratos de datos explícitos ante cambios normativos.",
      en: "TypeScript end-to-end with Prisma for explicit data contracts during regulatory changes.",
    },
    benefitSummary: {
      es: "Menos errores en producción al tipar integraciones y aislar la capa de persistencia.",
      en: "Fewer production errors by typing integrations and isolating the persistence layer.",
    },
    flowSummary: {
      es: "Orquestación backend → validación → firma → envío → persistencia de estado y logs.",
      en: "Backend orchestration → validation → signing → submission → state persistence and logs.",
    },
    componentsSummary: {
      es: "Servicios Node, adaptadores XML, base PostgreSQL, observabilidad de errores por correlación.",
      en: "Node services, XML adapters, PostgreSQL base, error observability with correlation IDs.",
    },
    architectureName: {
      es: "Servicios de facturación",
      en: "Invoicing services",
    },
    mermaid: `flowchart TD
  A[Pedido de documento] --> B[Validación]
  B --> C[Firma XML]
  C --> D[Envío autoridad]
  D --> E[Persistencia estado]
  E --> F[Notificación cliente]`,
  },
  {
    slug: "infra-docker-kubernetes",
    type: "devops",
    stack: ["Docker", "Kubernetes", "Traefik", "Prometheus", "Grafana"],
    image: "/placeholders/k8s.svg",
    links: { readme: "https://github.com" },
    title: {
      es: "Infraestructura Docker / Kubernetes",
      en: "Docker / Kubernetes infrastructure",
    },
    shortDescription: {
      es: "Clusters ligeros (K3s/MicroK8s), ingress con Traefik y monitoreo con Prometheus/Grafana.",
      en: "Lightweight clusters (K3s/MicroK8s), Traefik ingress, Prometheus/Grafana monitoring.",
    },
    problem: {
      es: "Operar cargas con alta disponibilidad sin sobrecargar operaciones con tooling pesado.",
      en: "Run workloads with high availability without burdening ops with heavy tooling.",
    },
    features: {
      es: [
        "Manifiestos declarativos y GitOps-ready",
        "Ruteo TLS centralizado",
        "Dashboards por namespace/servicio",
      ],
      en: [
        "Declarative manifests and GitOps-ready setup",
        "Centralized TLS routing",
        "Dashboards per namespace/service",
      ],
    },
    decisionSummary: {
      es: "Traefik como ingress único y métricas estándar para alertas homogéneas.",
      en: "Traefik as single ingress and standard metrics for uniform alerting.",
    },
    benefitSummary: {
      es: "Despliegues reproducibles y visibilidad unificada del clúster.",
      en: "Reproducible deployments and unified cluster visibility.",
    },
    flowSummary: {
      es: "Ingress → servicios → pods → métricas scrapeadas → Grafana.",
      en: "Ingress → services → pods → scraped metrics → Grafana.",
    },
    componentsSummary: {
      es: "Cluster K8s, Traefik, workloads containerizados, stack Prometheus/Grafana.",
      en: "K8s cluster, Traefik, containerized workloads, Prometheus/Grafana stack.",
    },
    architectureName: {
      es: "Cluster observado",
      en: "Observed cluster",
    },
    mermaid: `flowchart LR
  U[Usuarios] --> T[Traefik Ingress]
  T --> P1[Pod Servicio A]
  T --> P2[Pod Servicio B]
  P1 --> M[Prometheus]
  P2 --> M
  M --> G[Grafana]`,
  },
  {
    slug: "kahani-experiencias-ajedrez",
    type: "fullstack",
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    image: "/placeholders/chess.svg",
    links: { demo: "https://example.com" },
    title: {
      es: "Kahani — experiencias de ajedrez",
      en: "Kahani — chess experiences",
    },
    shortDescription: {
      es: "Emprendimiento que combina producto, eventos y operación comercial alrededor del ajedrez en Paraguay.",
      en: "A venture combining product, events, and commercial operations around chess in Paraguay.",
    },
    problem: {
      es: "Conectar oferta (artículos, servicios) con una comunidad distribuida y eventos en distintas sedes.",
      en: "Connect offer (goods, services) with a distributed community and events in multiple venues.",
    },
    features: {
      es: [
        "Canal de venta y presencia en ferias",
        "Soporte a torneos y organizadores",
        "Narrativa de marca coherente",
      ],
      en: [
        "Sales channel and fair presence",
        "Support for tournaments and organizers",
        "Coherent brand narrative",
      ],
    },
    decisionSummary: {
      es: "Stack web moderno para iteración rápida y SEO cuando aplique al canal digital.",
      en: "Modern web stack for fast iteration and SEO when relevant for the digital channel.",
    },
    benefitSummary: {
      es: "Tiempo de mercado reducido para nuevas campañas y catálogos.",
      en: "Reduced time-to-market for new campaigns and catalogs.",
    },
    flowSummary: {
      es: "Descubrimiento → catálogo → checkout/contacto → fulfillment.",
      en: "Discovery → catalog → checkout/contact → fulfillment.",
    },
    componentsSummary: {
      es: "Frontend público, CMS/catálogo, integraciones de pago/logística según canal.",
      en: "Public frontend, CMS/catalog, payment/logistics integrations per channel.",
    },
    architectureName: {
      es: "Comercio modular",
      en: "Modular commerce",
    },
  },
  {
    slug: "pipeline-jenkins-gcp",
    type: "devops",
    stack: ["Jenkins", "Docker", "GCP", "CI/CD"],
    image: "/placeholders/cicd.svg",
    links: { docs: "https://github.com" },
    title: {
      es: "Pipeline CI/CD (Jenkins + GCP)",
      en: "CI/CD pipeline (Jenkins + GCP)",
    },
    shortDescription: {
      es: "Despliegue automatizado de microservicios a entornos en la nube con calidad de release consistente.",
      en: "Automated microservice deployment to cloud environments with consistent release quality.",
    },
    problem: {
      es: "Reducir error humano y acelerar entregas sin sacrificar verificaciones mínimas.",
      en: "Reduce human error and speed delivery without skipping minimum checks.",
    },
    features: {
      es: [
        "Stages build/test/deploy",
        "Artefactos versionados",
        "Promoción entre entornos",
      ],
      en: [
        "Build/test/deploy stages",
        "Versioned artifacts",
        "Environment promotion",
      ],
    },
    decisionSummary: {
      es: "Jenkins como orquestador conocido por el equipo; GCP como destino elástico.",
      en: "Jenkins as orchestrator familiar to the team; GCP as elastic target.",
    },
    benefitSummary: {
      es: "Historial de releases y rollback más predecible.",
      en: "More predictable release history and rollback.",
    },
    flowSummary: {
      es: "Commit → pipeline → imagen → despliegue en cluster/servicio gestionado.",
      en: "Commit → pipeline → image → deploy to cluster/managed service.",
    },
    componentsSummary: {
      es: "Jenkins, registry, manifests/helm, cuentas de servicio GCP.",
      en: "Jenkins, registry, manifests/helm, GCP service accounts.",
    },
    architectureName: {
      es: "Release automatizado",
      en: "Automated release",
    },
    mermaid: `flowchart LR
  Git[Repositorio] --> J[Jenkins]
  J --> I[Imagen Docker]
  I --> R[Registry]
  R --> D[Despliegue GCP]`,
  },
  {
    slug: "push-notifications-hub",
    type: "backend",
    stack: ["Node.js", "Firebase", "REST"],
    image: "/placeholders/push.svg",
    links: {},
    title: {
      es: "Microservicio de notificaciones push",
      en: "Push notifications microservice",
    },
    shortDescription: {
      es: "Hub centralizado para notificar distintos productos usando Firebase Cloud Messaging.",
      en: "Centralized hub to notify multiple products using Firebase Cloud Messaging.",
    },
    problem: {
      es: "Evitar duplicación de integraciones FCM y estandarizar payloads entre equipos.",
      en: "Avoid duplicate FCM integrations and standardize payloads across teams.",
    },
    features: {
      es: [
        "Autenticación de clientes internos",
        "Plantillas de mensaje versionadas",
        "Métricas de entrega básicas",
      ],
      en: [
        "Internal client authentication",
        "Versioned message templates",
        "Basic delivery metrics",
      ],
    },
    decisionSummary: {
      es: "API única con contrato OpenAPI y colas internas para picos de tráfico.",
      en: "Single API with OpenAPI contract and internal queues for traffic spikes.",
    },
    benefitSummary: {
      es: "Onboarding de productos más rápido y operación unificada de notificaciones.",
      en: "Faster product onboarding and unified notification operations.",
    },
    flowSummary: {
      es: "Producto → API hub → FCM → dispositivo; feedback a logs/métricas.",
      en: "Product → hub API → FCM → device; feedback to logs/metrics.",
    },
    componentsSummary: {
      es: "Node service, FCM project, cola, almacenamiento de preferencias de usuario.",
      en: "Node service, FCM project, queue, user preference store.",
    },
    architectureName: {
      es: "Hub de push",
      en: "Push hub",
    },
  },
  {
    slug: "zentra-erp-quarkus-angular",
    type: "fullstack",
    stack: ["Quarkus", "Java", "Angular", "PostgreSQL", "Flyway", "Hibernate Panache"],
    image: "/placeholders/zentra-erp.svg",
    links: {},
    title: {
      es: "Zentra — ERP (backend + frontend)",
      en: "Zentra — ERP (backend + frontend)",
    },
    shortDescription: {
      es: "ERP extensible: API Quarkus con Panache y SPA Angular; CRUD ágil, Docker y scripts de build/push por servicio.",
      en: "Extensible ERP: Quarkus API with Panache and Angular SPA; rapid CRUD extension, Docker and per-service build/push scripts.",
    },
    problem: {
      es: "Centralizar operaciones comerciales y administrativas con un núcleo backend consistente y una UI mantenible.",
      en: "Centralize commercial and admin operations with a consistent backend core and a maintainable UI.",
    },
    features: {
      es: [
        "Recursos y repositorios genéricos para nuevas entidades",
        "Migraciones Flyway y PostgreSQL",
        "Imágenes Docker versionadas con script unificado",
      ],
      en: [
        "Generic resources and repositories for new entities",
        "Flyway migrations and PostgreSQL",
        "Versioned Docker images with a unified script",
      ],
    },
    decisionSummary: {
      es: "Quarkus por productividad JVM y Angular por equipos front maduros; repos independientes coordinados desde el monorepo de trabajo.",
      en: "Quarkus for JVM productivity and Angular for experienced front teams; independent repos coordinated from the workspace layout.",
    },
    benefitSummary: {
      es: "Base repetible para dominios de negocio sin arrastrar un monolito difícil de desplegar.",
      en: "A repeatable base for business domains without a hard-to-deploy monolith.",
    },
    flowSummary: {
      es: "SPA Angular → API Quarkus → PostgreSQL; integración con geo, clientes DNIT y ecommerce según despliegue.",
      en: "Angular SPA → Quarkus API → PostgreSQL; integration with geo, DNIT customers, and ecommerce depending on deployment.",
    },
    componentsSummary: {
      es: "Servicios Quarkus, frontend Angular, PostgreSQL, pipelines Docker; encaje con zentra-geo y customers-api.",
      en: "Quarkus services, Angular frontend, PostgreSQL, Docker pipelines; fits zentra-geo and customers-api.",
    },
    architectureName: {
      es: "ERP modular Zentra",
      en: "Modular Zentra ERP",
    },
  },
  {
    slug: "zentra-api-clientes-dnit",
    type: "backend",
    stack: ["Node.js", "Fastify", "PostgreSQL", "Redis", "TypeScript"],
    image: "/placeholders/dnit-api.svg",
    links: {},
    title: {
      es: "Zentra — API de clientes y sincronización DNIT",
      en: "Zentra — Customer API and DNIT sync",
    },
    shortDescription: {
      es: "Servicio Node que sincroniza el padrón RUC del DNIT (Paraguay), actualiza clientes en Zentra y expone búsqueda por RUC o razón social.",
      en: "Node service that syncs Paraguay DNIT RUC registry, updates Zentra customers, and exposes lookup by RUC or business name.",
    },
    problem: {
      es: "Mantener datos fiscales alineados con la fuente oficial y consultas rápidas sin sobrecargar PostgreSQL.",
      en: "Keep tax-aligned data with the official source and fast lookups without overloading PostgreSQL.",
    },
    features: {
      es: [
        "Cron de descarga y parseo de ZIP DNIT",
        "Caché Redis opcional por RUC",
        "API HTTP y GUI ligera de consulta",
      ],
      en: [
        "Cron download and parsing of DNIT ZIPs",
        "Optional Redis cache per RUC",
        "HTTP API and lightweight lookup UI",
      ],
    },
    decisionSummary: {
      es: "Fastify + pool PostgreSQL compartido con Zentra; Redis solo como acelerador de lectura.",
      en: "Fastify + PostgreSQL pool shared with Zentra; Redis only as a read accelerator.",
    },
    benefitSummary: {
      es: "Actualización batch confiable y latencia baja en consultas frecuentes.",
      en: "Reliable batch updates and low latency on frequent queries.",
    },
    flowSummary: {
      es: "DNIT → ingestión → dnit_ruc / cliente → consultas vía Redis o SQL.",
      en: "DNIT → ingestion → dnit_ruc / customer → queries via Redis or SQL.",
    },
    componentsSummary: {
      es: "Fastify, Winston, ioredis, jobs programados, misma BD que zentra-backend.",
      en: "Fastify, Winston, ioredis, scheduled jobs, same DB as zentra-backend.",
    },
    architectureName: {
      es: "Sincronización fiscal",
      en: "Tax sync service",
    },
  },
  {
    slug: "zentra-geo-ine-cartografia",
    type: "backend",
    stack: ["Python", "FastAPI", "GeoPandas", "GeoPackage", "PostgreSQL"],
    image: "/placeholders/geo-cartography.svg",
    links: {},
    title: {
      es: "Zentra Geo — cartografía y geocodificación",
      en: "Zentra Geo — cartography and geocoding",
    },
    shortDescription: {
      es: "API y herramientas para capas INE (SHP/GeoJSON), reproyección WGS84, GeoPackage y reverse geocoding alineado al modelo SET de Zentra.",
      en: "API and tooling for INE layers (SHP/GeoJSON), WGS84 reprojection, GeoPackage, and reverse geocoding aligned with Zentra SET model.",
    },
    problem: {
      es: "Unificar geometría administrativa confiable con el domicilio y reportes territoriales del ERP.",
      en: "Unify reliable administrative geometry with ERP address and territorial reporting.",
    },
    features: {
      es: [
        "Ingesta y fetch automatizable de cartografía INE",
        "Consultas espaciales y empaquetado GeoPackage",
        "Integración con despliegue Docker del ecosistema Zentra",
      ],
      en: [
        "ING-friendly ingest and automated INE cartography fetch",
        "Spatial queries and GeoPackage packaging",
        "Integration with Zentra ecosystem Docker deploy",
      ],
    },
    decisionSummary: {
      es: "Python/GeoPandas por el ecosistema geoespacial maduro; FastAPI para OpenAPI y despliegue ligero.",
      en: "Python/GeoPandas for a mature geospatial stack; FastAPI for OpenAPI and lean deployment.",
    },
    benefitSummary: {
      es: "Un solo servicio especializado para mapas y consultas lat/lon sin ensuciar el monolito ERP.",
      en: "One specialized service for maps and lat/lon queries without bloating the ERP core.",
    },
    flowSummary: {
      es: "Datos INE → procesamiento → GPKG/API → consumo desde backend Zentra y front.",
      en: "INE data → processing → GPKG/API → consumption from Zentra backend and frontend.",
    },
    componentsSummary: {
      es: "FastAPI, pyogrio/GeoPandas, volúmenes de datos .gpkg, variables para URL desde Dokploy.",
      en: "FastAPI, pyogrio/GeoPandas, .gpkg data volumes, URL env vars from Dokploy.",
    },
    architectureName: {
      es: "Servicio geoespacial",
      en: "Geospatial service",
    },
  },
  {
    slug: "zentra-e-kahanistore",
    type: "fullstack",
    stack: ["Next.js", "React", "Fastify", "TypeScript", "Tailwind CSS"],
    image: "/placeholders/storefront-bff.svg",
    links: {},
    title: {
      es: "e-kahanistore — ecommerce ajedrez + Zentra",
      en: "e-kahanistore — chess ecommerce + Zentra",
    },
    shortDescription: {
      es: "Tienda de ajedrez con storefront Next.js y BFF Fastify: el navegador no expone credenciales del ERP; pedidos integrados vía API Zentra.",
      en: "Chess storefront with Next.js and Fastify BFF: the browser never exposes ERP credentials; orders integrated via Zentra API.",
    },
    problem: {
      es: "Vender online con catálogo y checkout sin duplicar inventario ni filtrar secretos al cliente.",
      en: "Sell online with catalog and checkout without duplicating inventory or leaking secrets to the client.",
    },
    features: {
      es: [
        "BFF con idempotencia y mapeo de DTOs",
        "Storefront con SEO y proxy a /api/bff",
        "Documentación de integración con OpenAPI Zentra",
      ],
      en: [
        "BFF with idempotency and DTO mapping",
        "SEO-ready storefront with /api/bff proxy",
        "Integration docs against Zentra OpenAPI",
      ],
    },
    decisionSummary: {
      es: "Next.js App Router + Fastify en lugar de motor OSS pesado en v1; Zentra como fuente de verdad.",
      en: "Next.js App Router + Fastify instead of a heavy OSS engine in v1; Zentra as source of truth.",
    },
    benefitSummary: {
      es: "Control total del flujo de pedido y trazabilidad hacia el ERP.",
      en: "Full control of order flow and traceability into the ERP.",
    },
    flowSummary: {
      es: "Usuario → storefront → BFF → JWT técnico → Zentra → persistencia de pedido.",
      en: "User → storefront → BFF → technical JWT → Zentra → order persistence.",
    },
    componentsSummary: {
      es: "Monorepo npm (apps/bff, apps/storefront), CI GitHub Actions, variables por app.",
      en: "npm monorepo (apps/bff, apps/storefront), GitHub Actions CI, per-app env.",
    },
    architectureName: {
      es: "BFF + ERP",
      en: "BFF + ERP",
    },
  },
  {
    slug: "zentra-infra-dokploy",
    type: "devops",
    stack: ["Docker", "Docker Compose", "Dokploy"],
    image: "/placeholders/dokploy.svg",
    links: {},
    title: {
      es: "Zentra — despliegue Dokploy",
      en: "Zentra — Dokploy deployment",
    },
    shortDescription: {
      es: "Compose por servicio (backend, frontend, geo, customers-api) y stack full opcional con Postgres/Redis documentados para Dokploy.",
      en: "Per-service Compose (backend, frontend, geo, customers-api) and optional full stack with documented Postgres/Redis for Dokploy.",
    },
    problem: {
      es: "Levantar el ecosistema Zentra en hosting gestionado sin adivinar networking entre bases y APIs.",
      en: "Run the Zentra ecosystem on managed hosting without guessing networking between databases and APIs.",
    },
    features: {
      es: [
        "Separación por carpeta con .env.example",
        "Modo servicios sueltos vs stack completo",
        "Variables críticas (ZENTRA_API_URL pública, JDBC)",
      ],
      en: [
        "Per-folder split with .env.example",
        "Loose services vs full-stack mode",
        "Critical env vars (public ZENTRA_API_URL, JDBC)",
      ],
    },
    decisionSummary: {
      es: "Un compose por app Dokploy para escalar y cablear secretos sin acoplar todos los contenedores.",
      en: "One compose per Dokploy app to scale and wire secrets without coupling every container.",
    },
    benefitSummary: {
      es: "Onboarding de entornos reproducible para el equipo y proveedor.",
      en: "Reproducible environment onboarding for team and provider.",
    },
    flowSummary: {
      es: "Git → Dokploy → build imagen → variables → DNS interno/externo hacia Postgres y Redis.",
      en: "Git → Dokploy → image build → env → internal/external DNS to Postgres and Redis.",
    },
    componentsSummary: {
      es: "docker-compose en deploy/dokploy/services/* y docker-compose.full-stack.yml.",
      en: "docker-compose under deploy/dokploy/services/* and docker-compose.full-stack.yml.",
    },
    architectureName: {
      es: "Compose modular",
      en: "Modular Compose",
    },
  },
  {
    slug: "squareone-paraguay-ranking-plataforma",
    type: "fullstack",
    stack: ["Quarkus", "Angular", "Keycloak", "PostgreSQL", "Python", "FastAPI"],
    image: "/placeholders/squareone-clubs.svg",
    links: {
      demo: "https://squareone.kahani.dev/",
    },
    title: {
      es: "SquareOne — ranking oficial, jugadores y federación",
      en: "SquareOne — official rankings, players, and federation",
    },
    shortDescription: {
      es: "Portal público de rankings y exploración de jugadores (FEPARAJ · datos públicos), con backoffice para clubes, altas, transferencias, torneos e ingestión confiable de datos FIDE desde un monorepo full stack.",
      en: "Public rankings portal and player discovery (FEPARAJ · open data), backed by an operations layer for clubs, registrations, transfers, tournaments, and reliable FIDE ingestion from a full-stack monorepo.",
    },
    problem: {
      es: "Unificar la experiencia ciudadana (posiciones, ratings y estadísticas actualizadas) con trámites federativos auditables, identidad OIDC y catálogos FIDE actualizados sin depender de spreadsheets o silos.",
      en: "Unify the public experience (standings, ratings, and up-to-date statistics) with auditable federation workflows, OIDC identity, and maintained FIDE catalogs without spreadsheet silos.",
    },
    features: {
      es: [
        "Backend Quarkus 3 + Flyway sobre PostgreSQL",
        "Frontend Angular 21 con SSR, PrimeNG",
        "OIDC con Keycloak para flujos federativos protegidos",
        "Jobs y scraper Python (FastAPI) hacia PostgreSQL para datos FIDE/catalogo",
      ],
      en: [
        "Quarkus 3 backend + Flyway on PostgreSQL",
        "Angular 21 frontend with SSR and PrimeNG",
        "OIDC via Keycloak for protected federation workflows",
        "Python jobs/scraper (FastAPI) into PostgreSQL for FIDE/catalog data",
      ],
    },
    decisionSummary: {
      es: "Capa pública orientada a SEO y descubrimiento más API JVM estable para reglas de negocio federativas; Python aislado para ETL y scraping intensivo.",
      en: "Public tier for SEO and discovery plus a stable JVM API for federation rules; isolated Python for heavy ETL/scraping workloads.",
    },
    benefitSummary: {
      es: "Superficie única para visitantes (rankings/jugadores en squareone.kahani.dev) y operación interna versionada con imágenes Docker alineadas (API, web, scraper).",
      en: "One surface for visitors (rankings/players on squareone.kahani.dev) and version-aligned Docker images for backend, web, and scraper.",
    },
    flowSummary: {
      es: "Visitante → portal SSR; operador OIDC → Angular → Quarkus → PostgreSQL; jobs FIDE actualizan el esquema de ratings y clubes.",
      en: "Visitors hit the SSR portal; operators use OIDC → Angular → Quarkus → PostgreSQL; FIDE jobs refresh ratings and club aggregates.",
    },
    componentsSummary: {
      es: "backend (Quarkus), frontend (Angular SSR), fide-Scraper; Compose local para PostgreSQL y Keycloak.",
      en: "Quarkus backend, Angular SSR frontend, FIDE scraper; local Compose for Postgres and Keycloak.",
    },
    architectureName: {
      es: "Portal + plataforma federativa",
      en: "Portal + federation platform",
    },
  },
  {
    slug: "venta-blitz-jhipster",
    type: "fullstack",
    stack: ["JHipster", "Spring Boot", "Angular", "Liquibase", "Java"],
    image: "/placeholders/venta-blitz-web.svg",
    links: {},
    title: {
      es: "VentaBlitz — aplicación web (JHipster)",
      en: "VentaBlitz — web application (JHipster)",
    },
    shortDescription: {
      es: "Sistema de gestión de ventas en campo y cobranzas: entidades JHipster, API REST y SPA Angular integradas con el flujo comercial.",
      en: "Field sales and collections management: JHipster entities, REST API and Angular SPA aligned with commercial workflows.",
    },
    problem: {
      es: "Ordenar clientes, pagos, rutas y notificaciones con trazabilidad y despliegue Java estándar.",
      en: "Organize customers, payments, routes and notifications with traceability and standard Java deployment.",
    },
    features: {
      es: [
        "Modelo de dominio Liquibase (clientes, pagos, productos, rutas)",
        "Autenticación y plantillas de correo",
        "Build Maven + frontend integrado",
      ],
      en: [
        "Liquibase domain model (customers, payments, products, routes)",
        "Authentication and email templates",
        "Integrated Maven + frontend build",
      ],
    },
    decisionSummary: {
      es: "JHipster 8 para acelerar CRUD, seguridad y admin sin reinventar el stack.",
      en: "JHipster 8 to accelerate CRUD, security and admin without reinventing the stack.",
    },
    benefitSummary: {
      es: "Base enterprise lista para operaciones de fuerza de ventas.",
      en: "Enterprise-ready base for sales force operations.",
    },
    flowSummary: {
      es: "Web Angular → API Spring → base relacional; complementada por app móvil Flutter.",
      en: "Angular web → Spring API → relational DB; complemented by Flutter mobile app.",
    },
    componentsSummary: {
      es: "Proyecto venta-blitz: backend + resources REST + UI Angular generada.",
      en: "venta-blitz project: backend + REST resources + generated Angular UI.",
    },
    architectureName: {
      es: "JHipster fullstack",
      en: "JHipster fullstack",
    },
  },
  {
    slug: "venta-blitz-app-movil",
    type: "mobile",
    stack: ["Flutter", "Dart", "MobX", "JWT"],
    image: "/placeholders/mobile-sales.svg",
    links: {},
    title: {
      es: "VentaBlitz — app móvil",
      en: "VentaBlitz — mobile app",
    },
    shortDescription: {
      es: "Cliente Flutter para vendedores: dashboard, rutas, búsqueda de clientes, cuadros de mando y sincronización con la API VentaBlitz.",
      en: "Flutter client for sellers: dashboard, routes, customer search, charts and sync with the VentaBlitz API.",
    },
    problem: {
      es: "Dar continuidad operativa en terreno con mapas, permisos y experiencia táctil.",
      en: "Deliver operational continuity in the field with maps, permissions and touch UX.",
    },
    features: {
      es: [
        "MobX para estado reactivo",
        "Gráficos Syncfusion e integración scan",
        "Geolocalización y JWT",
      ],
      en: [
        "MobX for reactive state",
        "Syncfusion charts and scan integration",
        "Geolocation and JWT",
      ],
    },
    decisionSummary: {
      es: "Flutter multiplataforma para un solo código frente a Android/iOS del equipo comercial.",
      en: "Flutter cross-platform for one codebase across commercial team Android/iOS.",
    },
    benefitSummary: {
      es: "Misma lógica de negocio expuesta vía API que la web JHipster.",
      en: "Same business logic via API as the JHipster web app.",
    },
    flowSummary: {
      es: "App → REST VentaBlitz → datos en servidor; UI optimizada para recorridos y cobranza.",
      en: "App → VentaBlitz REST → server data; UI tuned for routes and collections.",
    },
    componentsSummary: {
      es: "Paquete scan local, nb_utils, charts y pantallas por rol operativo.",
      en: "Local scan package, nb_utils, charts and screens per operational role.",
    },
    architectureName: {
      es: "Cliente móvil",
      en: "Mobile client",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}
