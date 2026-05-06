export const siteConfig = {
  personName: "Jhony Benítez",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "jhonyben.94@gmail.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/jhony-benitez",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};
