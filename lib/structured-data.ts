export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dunamis Tutors",
    description:
      "Expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place.",
    url: "https://dunamistutors.com",
    logo: "https://dunamistutors.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://facebook.com/dunamistutors",
      "https://twitter.com/dunamistutors",
      "https://linkedin.com/company/dunamistutors",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
    },
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dunamis Tutors",
    url: "https://dunamistutors.com",
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
    name: "Dunamis Tutors",
    description:
      "Online learning platform offering courses in AI, Coding, Digital Marketing, IELTS, JUPEB, and JAMB preparation",
    url: "https://dunamistutors.com",
    hasCredential: "Certified Online Education Provider",
    offers: [
      {
        "@type": "Course",
        name: "AI Tutoring Program",
        description: "Master artificial intelligence with personalized AI-powered learning experiences",
        provider: {
          "@type": "Organization",
          name: "Dunamis Tutors",
        },
      },
      {
        "@type": "Course",
        name: "Coding Bootcamp",
        description: "Learn programming from scratch to advanced with hands-on projects",
        provider: {
          "@type": "Organization",
          name: "Dunamis Tutors",
        },
      },
    ],
  }
}
