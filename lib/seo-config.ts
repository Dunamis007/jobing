// Centralized SEO and metadata configuration
export const siteConfig = {
  name: "Dunamis Edtech",
  description:
    "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  siteUrl: "https://dunamistutors.com",
  logo: "https://i.imgur.com/dvWoOpc.jpeg",
  social: {
    twitter: "@dunamisedtech",
    linkedin: "dunamis-edtech",
    facebook: "dunamisedtech",
  },
  contact: {
    email: "info@dunamistutors.com",
    phone: "+234 (0) 800-XXX-XXXX",
  },
}

export const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: siteConfig.logo,
  description: siteConfig.description,
  sameAs: [
    `https://twitter.com/${siteConfig.social.twitter}`,
    `https://www.facebook.com/${siteConfig.social.facebook}`,
    `https://www.linkedin.com/company/${siteConfig.social.linkedin}`,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
}

export const schemaBreadcrumb = (breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.siteUrl}${item.url}`,
  })),
})
