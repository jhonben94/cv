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
    links: {},
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
    links: {},
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
    caseStudy: {
      constraints: {
        es: [
          "Dominio regulado y cambiante: esquemas XML y reglas fiscales que pueden modificarse.",
          "Integración con una autoridad externa que puede fallar o responder tarde.",
          "Trazabilidad y auditoría de cada documento emitido.",
        ],
        en: [
          "A regulated, evolving domain: XML schemas and tax rules that can change.",
          "Integration with an external authority that can fail or respond late.",
          "Traceability and auditing of every issued document.",
        ],
      },
      keyDecisions: {
        es: [
          "TypeScript de punta a punta y Prisma para contratos de datos explícitos ante cambios normativos.",
          "Persistencia desacoplada de las integraciones, para absorber cambios regulatorios sin tocar el modelo.",
          "Reintentos y colas en el envío, con correlación de errores para diagnosticar fallos.",
          "Pipeline de generación, validación, firma digital y envío de XML con registro de estado y auditoría.",
        ],
        en: [
          "End-to-end TypeScript with Prisma for explicit data contracts during regulatory changes.",
          "Persistence decoupled from integrations, so regulatory changes do not touch the data model.",
          "Retries and queues on submission, with error correlation to diagnose failures.",
          "XML generation, validation, digital signing, and submission pipeline with state tracking and auditing.",
        ],
      },
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
    links: {},
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
    caseStudy: {
      constraints: {
        es: [
          "Alta disponibilidad razonable sin sobrecargar la operación con tooling pesado.",
          "Recursos acotados: clústeres ligeros en lugar de plataformas gestionadas completas.",
          "Visibilidad homogénea entre servicios distintos.",
        ],
        en: [
          "Reasonable high availability without burdening operations with heavy tooling.",
          "Limited resources: lightweight clusters instead of full managed platforms.",
          "Uniform visibility across different services.",
        ],
      },
      keyDecisions: {
        es: [
          "K3s/MicroK8s como orquestador liviano cuando existe necesidad real de orquestación; Docker Compose para despliegues pequeños.",
          "Traefik como ingress único con ruteo TLS centralizado.",
          "Manifiestos declarativos, listos para GitOps.",
          "Métricas estándar con Prometheus y dashboards en Grafana por namespace/servicio, para alertas homogéneas.",
          "CI/CD con Jenkins o GitLab CI/CD que construye, prueba y despliega imágenes versionadas.",
        ],
        en: [
          "K3s/MicroK8s as a lightweight orchestrator when orchestration is truly needed; Docker Compose for small deployments.",
          "Traefik as a single ingress with centralized TLS routing.",
          "Declarative, GitOps-ready manifests.",
          "Standard metrics with Prometheus and Grafana dashboards per namespace/service, for uniform alerting.",
          "CI/CD with Jenkins or GitLab CI/CD building, testing, and deploying versioned images.",
        ],
      },
    },
    mermaid: `flowchart LR
  CI[Jenkins / GitLab CI] --> IMG[Imagenes versionadas]
  IMG --> K
  U[Usuarios] --> T[Traefik Ingress TLS]
  subgraph K[Cluster K3s / MicroK8s]
    T --> P1[Pod Servicio A]
    T --> P2[Pod Servicio B]
  end
  P1 --> M[Prometheus]
  P2 --> M
  M --> G[Grafana]`,
  },
  {
    slug: "kahani-experiencias-ajedrez",
    type: "fullstack",
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    image: "/placeholders/chess.svg",
    links: {},
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
    links: {},
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
      es: "Base repetible para nuevos dominios de negocio sin un monolito difícil de desplegar; datos fiscales y geográficos consultables sin acoplar el núcleo a la fuente externa.",
      en: "A repeatable base for new business domains without a hard-to-deploy monolith; tax and geographic data queryable without coupling the core to the external source.",
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
    caseStudy: {
      constraints: {
        es: [
          "Varios dominios de negocio sobre una misma base repetible, sin arrastrar un monolito difícil de desplegar.",
          "Datos fiscales (DNIT) y geográficos que vienen de fuentes externas y deben consultarse con baja latencia.",
          "Despliegue por componente en hosting gestionado (Docker Compose / Dokploy).",
        ],
        en: [
          "Several business domains on one repeatable base, without dragging along a hard-to-deploy monolith.",
          "Tax (DNIT) and geographic data from external sources that must be queried with low latency.",
          "Per-component deployment on managed hosting (Docker Compose / Dokploy).",
        ],
      },
      keyDecisions: {
        es: [
          "Quarkus por productividad JVM y Angular (PrimeNG) para la SPA de administración, en repositorios independientes.",
          "Recursos y repositorios genéricos para sumar entidades sin duplicar código.",
          "Migraciones Flyway versionadas sobre PostgreSQL.",
          "Servicios especializados desacoplados del núcleo: sincronización DNIT (Fastify) y GIS (Python sobre GeoPackage); Redis solo como acelerador de lectura.",
          "Imágenes Docker versionadas con un script unificado de build/push por servicio.",
        ],
        en: [
          "Quarkus for JVM productivity and Angular (PrimeNG) for the admin SPA, in independent repositories.",
          "Generic resources and repositories to add entities without duplicating code.",
          "Versioned Flyway migrations on PostgreSQL.",
          "Specialized services decoupled from the core: DNIT sync (Fastify) and GIS (Python on GeoPackage); Redis only as a read accelerator.",
          "Versioned Docker images with a unified per-service build/push script.",
        ],
      },
    },
    mermaid: `flowchart LR
  U[Usuario] --> A[Angular SPA]
  A --> Q[Quarkus API]
  Q --> P[(PostgreSQL)]
  Q --> G[API GIS Python]
  G --> GP[(GeoPackage)]
  F[Fastify sync DNIT] --> P
  F -.cache.-> R[(Redis)]
  D[DNIT] --> F`,
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
      demo: "https://ratings.kahani.com.py/",
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
      es: "Unificar lo que consume el público (rankings vigentes, ratings FIDE y estadísticas actualizadas) con trámites federativos auditables, identidad OIDC y datos FIDE confiables, sin depender de hojas de cálculo dispersas.",
      en: "Unify the public experience (standings, ratings, and up-to-date statistics) with auditable federation workflows, OIDC identity, and maintained FIDE catalogs without spreadsheet silos.",
    },
    features: {
      es: [
        "Backend Quarkus 3 + Flyway sobre PostgreSQL",
        "Frontend Angular 21 con SSR, PrimeNG",
        "OIDC con Keycloak para flujos federativos protegidos",
        "Jobs y scraper Python (FastAPI) hacia PostgreSQL para datos FIDE/catálogo",
        "Sincronización FIDE atómica con lock distribuido, bloqueo optimista (If-Match) y outbox transaccional de correo",
        "Autorización por objeto, redacción de datos personales por rol y errores RFC 9457 con X-Request-ID",
      ],
      en: [
        "Quarkus 3 backend + Flyway on PostgreSQL",
        "Angular 21 frontend with SSR and PrimeNG",
        "OIDC via Keycloak for protected federation workflows",
        "Python jobs/scraper (FastAPI) into PostgreSQL for FIDE/catalog data",
        "Atomic FIDE sync with distributed lock, optimistic locking (If-Match), and transactional email outbox",
        "Object-level authorization, role-based PII redaction, and RFC 9457 errors with X-Request-ID",
      ],
    },
    decisionSummary: {
      es: "Capa pública orientada a SEO y descubrimiento más API JVM estable para reglas de negocio federativas; Python aislado para ETL y scraping intensivo.",
      en: "Public tier for SEO and discovery plus a stable JVM API for federation rules; isolated Python for heavy ETL/scraping workloads.",
    },
    benefitSummary: {
      es: "Superficie única para visitantes (rankings/jugadores en ratings.kahani.com.py) y operación interna, con 83 pruebas de backend, 35 migraciones Flyway aplicables desde cero e imágenes Docker alineadas (API, web, scraper).",
      en: "One surface for visitors (rankings/players on ratings.kahani.com.py) and internal operations, with 83 backend tests, 35 Flyway migrations applicable from scratch, and version-aligned Docker images (API, web, scraper).",
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
    caseStudy: {
      constraints: {
        es: [
          "Experiencia pública indexable (SEO) y trámites federativos protegidos en un mismo producto.",
          "Datos FIDE externos que cambian y deben ingerirse sin corromper el estado ni con ejecuciones concurrentes.",
          "Datos personales de jugadores con visibilidad distinta según el rol (federación, club, árbitro, jugador).",
        ],
        en: [
          "A public, indexable (SEO) experience and protected federation workflows in a single product.",
          "External FIDE data that changes and must be ingested without corrupting state, even with concurrent runs.",
          "Player personal data with different visibility per role (federation, club, arbiter, player).",
        ],
      },
      keyDecisions: {
        es: [
          "Capa pública SSR separada de la API JVM con las reglas federativas; Python aislado para ETL y scraping.",
          "Identidad con Keycloak (OIDC + PKCE) y autorización por objeto según rol y alcance del club.",
          "Publicación FIDE atómica (staging, un solo commit, rollback con registro FAILED) protegida por un lock distribuido con lease, heartbeat y fencing.",
          "Bloqueo optimista con If-Match (409/412/428) en jugadores, transferencias, afiliaciones, invitaciones e inscripciones.",
          "Outbox transaccional de correo con reintento exponencial e idempotencia; errores RFC 9457 con X-Request-ID y DTO por audiencia para minimizar datos personales.",
        ],
        en: [
          "SSR public tier separated from the JVM API holding the federation rules; Python isolated for ETL and scraping.",
          "Identity with Keycloak (OIDC + PKCE) and object-level authorization by role and club scope.",
          "Atomic FIDE publication (staging, single commit, rollback with a FAILED record) guarded by a distributed lock with lease, heartbeat, and fencing.",
          "Optimistic locking with If-Match (409/412/428) on players, transfers, affiliations, invitations, and enrollments.",
          "Transactional email outbox with exponential retry and idempotency; RFC 9457 errors with X-Request-ID and per-audience DTOs to minimize personal data.",
        ],
      },
    },
    mermaid: `flowchart LR
  V[Visitante] --> W[Angular SSR]
  O[Operador] --> K[Keycloak OIDC]
  K --> W
  W --> Q[Quarkus API]
  Q --> P[(PostgreSQL)]
  S[fide-Scraper Python] --> P
  FIDE[Listas FIDE] --> S
  Q --> M[Outbox de correo]`,
  },
  {
    slug: "dompir-erp-pos-multitenant",
    type: "architecture",
    stack: ["Spring Boot", "Angular", "MyBatis", "PostgreSQL", "Flyway", "Docker"],
    image: "/placeholders/crm.svg",
    links: {},
    title: {
      es: "Dompir — migración de ERP/POS legado a plataforma multi-tenant",
      en: "Dompir — legacy ERP/POS migration to a multi-tenant platform",
    },
    shortDescription: {
      es: "Migración de un ERP/POS Java EE forkeado por cliente (8 proyectos y un Angular 8 sin autenticación real) a un único backend multi-tenant con Spring Boot 4 y un frontend Angular 21, con migración de datos verificable.",
      en: "Migration of a client-forked Java EE ERP/POS (8 projects plus an Angular 8 app with no real authentication) into a single multi-tenant Spring Boot 4 backend and an Angular 21 frontend, with verifiable data migration.",
    },
    problem: {
      es: "El legado vivía en forks por cliente, sin control de versiones ni autenticación real. Había que consolidarlo sin congelar la operación y demostrar que los datos migrados coinciden con el origen.",
      en: "The legacy lived in per-client forks with no version control or real authentication. It had to be consolidated without freezing operations, and the migrated data had to be proven to match the source.",
    },
    features: {
      es: [
        "Estrategia Strangler Fig por módulos: 11 módulos de backend (cliente, producto, inventario, venta, cobranza, facturación, comisiones, egresos, recibo, entre otros)",
        "Multi-tenencia con JWT y cabecera X-Tenant-Id, Flyway, feature flags (Unleash) y observabilidad con Micrometer, Prometheus y OpenTelemetry",
        "Dinero calculado solo en el backend (BigDecimal); el frontend únicamente presenta",
        "ETL piloto idempotente sobre un dump real, con datos personales anonimizados y ejecución en PostgreSQL descartable",
        "Conciliación de solo lectura sobre 5 dumps de clientes y matriz de paridad legado vs. nuevo",
      ],
      en: [
        "Strangler Fig strategy per module: 11 backend modules (customers, products, inventory, sales, collections, invoicing, commissions, expenses, receipts, among others)",
        "Multi-tenancy with JWT and X-Tenant-Id header, Flyway, feature flags (Unleash), and Micrometer, Prometheus, and OpenTelemetry observability",
        "Money calculated only in the backend (BigDecimal); the frontend only presents",
        "Idempotent pilot ETL over a real dump, with personal data anonymized and run in a disposable PostgreSQL",
        "Read-only reconciliation across 5 client dumps plus a legacy-vs-new parity matrix",
      ],
    },
    decisionSummary: {
      es: "Un solo binario multi-tenant diferenciado por tenant, configuración y feature flags en lugar de forks; MyBatis para conservar control explícito del SQL heredado.",
      en: "A single multi-tenant binary differentiated by tenant, configuration, and feature flags instead of forks; MyBatis to keep explicit control over the inherited SQL.",
    },
    benefitSummary: {
      es: "Migración verificada: 20 de 20 conteos y 9 de 9 valores de control conciliados (3.317 ventas, 3.286 cobros, 11.807 líneas, 12.009 movimientos), 0 diferencias y checksums MD5 idénticos en 3 corridas.",
      en: "Verified migration: 20 of 20 counts and 9 of 9 control values reconciled (3,317 sales, 3,286 payments, 11,807 lines, 12,009 movements), 0 differences, and identical MD5 checksums across 3 runs.",
    },
    flowSummary: {
      es: "Dump legado → ETL en contenedor descartable (anonimizado) → esquema nuevo → informe de validación con conteos, sumas y checksums.",
      en: "Legacy dump → ETL in a disposable container (anonymized) → new schema → validation report with counts, sums, and checksums.",
    },
    componentsSummary: {
      es: "backend-core (Spring Boot 4, Java 21), frontend (Angular 21), PostgreSQL 16, Unleash, Docker Compose y scripts de seed/ETL.",
      en: "backend-core (Spring Boot 4, Java 21), frontend (Angular 21), PostgreSQL 16, Unleash, Docker Compose, and seed/ETL scripts.",
    },
    architectureName: {
      es: "Strangler Fig multi-tenant",
      en: "Multi-tenant Strangler Fig",
    },
    caseStudy: {
      constraints: {
        es: [
          "El legado no tenía autenticación real ni control de versiones y vivía en forks por cliente.",
          "La migración no podía congelar la operación: módulo por módulo, con paridad medible.",
          "Datos reales de clientes que no pueden entrar al repositorio ni usarse sin anonimizar.",
        ],
        en: [
          "The legacy had no real authentication or version control and lived in per-client forks.",
          "The migration could not freeze operations: module by module, with measurable parity.",
          "Real client data that cannot enter the repository or be used without anonymization.",
        ],
      },
      keyDecisions: {
        es: [
          "Strangler Fig por módulos, con un único backend multi-tenant diferenciado por tenant, configuración y feature flags.",
          "Autenticación JWT real, aislamiento por X-Tenant-Id y errores uniformes.",
          "MyBatis para conservar control explícito sobre el SQL heredado; dinero siempre en BigDecimal y calculado solo en el backend.",
          "ETL idempotente en un PostgreSQL descartable, con datos personales anonimizados y abortando ante códigos sin mapeo.",
          "Conciliación por conteos, sumas y checksums, más una matriz de paridad legado vs. nuevo.",
        ],
        en: [
          "Strangler Fig per module, with a single multi-tenant backend differentiated by tenant, configuration, and feature flags.",
          "Real JWT authentication, isolation via X-Tenant-Id, and uniform errors.",
          "MyBatis to keep explicit control over the inherited SQL; money always BigDecimal and calculated only in the backend.",
          "Idempotent ETL in a disposable PostgreSQL, with personal data anonymized and aborting on unmapped codes.",
          "Reconciliation via counts, sums, and checksums, plus a legacy-vs-new parity matrix.",
        ],
      },
    },
    mermaid: `flowchart LR
  L[Legado Java EE + dump] --> E[ETL anonimizado]
  E --> D[(PostgreSQL 16)]
  D --> B[backend-core Spring Boot]
  B --> F[Angular 21]
  E --> V[Informe de validacion]`,
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
      es: "Base sólida tipo producto empresarial, orientada a la operación de fuerza de ventas en campo.",
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
