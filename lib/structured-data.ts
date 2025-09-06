import { companyInfo } from "@/data/homepage"

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: companyInfo.name,
    description: companyInfo.description,
    url: "https://dunamistutors.com",
    logo: companyInfo.logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      contactType: "customer service",
      email: companyInfo.email,
      areaServed: "NG",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressLocality: "Lagos",
    },
    sameAs: [
      "https://facebook.com/dunamistutors",
      "https://twitter.com/dunamistutors",
      "https://instagram.com/dunamistutors",
      "https://linkedin.com/company/dunamistutors",
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: "https://dunamistutors.com",
    description: companyInfo.description,
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dunamistutors.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateEducationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: companyInfo.name,
    description: companyInfo.description,
    url: "https://dunamistutors.com",
    logo: companyInfo.logo,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressLocality: "Lagos",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "AI Tutoring Program",
          description: "Master artificial intelligence and machine learning",
          provider: {
            "@type": "Organization",
            name: companyInfo.name,
          },
        },
        {
          "@type": "Course",
          name: "Coding Bootcamp",
          description: "Learn full-stack web development",
          provider: {
            "@type": "Organization",
            name: companyInfo.name,
          },
        },
        {
          "@type": "Course",
          name: "Digital Marketing",
          description: "Master digital marketing strategies",
          provider: {
            "@type": "Organization",
            name: companyInfo.name,
          },
        },
      ],
    },
  }
}

export function generateStructuredData() {
  return [generateOrganizationSchema(), generateWebsiteSchema(), generateEducationalOrganizationSchema()]
}
