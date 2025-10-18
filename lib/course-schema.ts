export interface CourseSchemaProps {
  name: string
  description: string
  duration: string
  level: string
  provider: string
  url: string
  image?: string
}

export function generateCourseSchema(props: CourseSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: props.name,
    description: props.description,
    provider: {
      "@type": "Organization",
      name: props.provider,
      url: "https://www.dunamisedtech.com",
      logo: "https://i.imgur.com/dvWoOpc.jpeg",
      sameAs: [
        "https://www.facebook.com/dunamisedtech",
        "https://www.twitter.com/dunamisedtech",
        "https://www.instagram.com/dunamisedtech",
        "https://www.linkedin.com/company/dunamisedtech",
      ],
    },
    url: props.url,
    image: props.image || "https://i.imgur.com/dvWoOpc.jpeg",
    duration: props.duration,
    educationLevel: props.level,
    coursePrerequisites: "Basic computer literacy",
    offers: [
      {
        "@type": "Offer",
        category: "Online Course",
        priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        category: "In-Person Course",
        priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
      },
    ],
  }
}
