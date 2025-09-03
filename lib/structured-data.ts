export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Dunamis Tutors",
    description:
      "Africa's First AI-Powered Learning Platform offering expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more.",
    url: "https://dunamistutors.com",
    logo: "https://dunamistutors.com/placeholder-logo.png",
    sameAs: [
      "https://facebook.com/dunamistutors",
      "https://twitter.com/dunamistutors",
      "https://instagram.com/dunamistutors",
      "https://youtube.com/dunamistutors",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "House 1, 444 crescent citec villa gwarimpa",
      addressLocality: "Abuja",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-902-080-3096",
      contactType: "customer service",
      email: "dunamistutors@graduate.org",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "8",
      offers: [
        {
          "@type": "Course",
          name: "AI Tutoring Program",
          description: "Experience personalized learning with our AI-powered tutoring program.",
          provider: {
            "@type": "EducationalOrganization",
            name: "Dunamis Tutors",
          },
        },
      ],
    },
  }
}

export function generateWebsiteStructuredData() {
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
