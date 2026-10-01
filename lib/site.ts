export const siteConfig = {
  personName: "Jhony Benítez",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "jhonyben.94@gmail.com",
  phone: "+595 994 683 545",
  /** Número en formato internacional sin "+" para wa.me */
  whatsappNumber: "595994683545",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/jhonben94",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/jhony-benitez",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jhonybenitez.dev",
  umamiScriptUrl: process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL,
  umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
};

export function whatsappHref(text?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
