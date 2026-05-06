import { siteConfig } from "@/lib/site";

export function JsonLdPerson() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.personName,
    email: siteConfig.email,
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    jobTitle: "Full Stack Developer, Software Architect",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
