// Structured data components for SEO
interface SchemaMarkupProps {
  schema: Record<string, unknown>
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function FAQSchema() {
  const faqs = [
    {
      question: "What courses does Dunamis Edtech offer?",
      answer:
        "We offer comprehensive programs in AI, Coding, Cybersecurity, Data Analytics, Digital Marketing, IELTS, JUPEB, JAMB, IJMB, and Travel Abroad guidance.",
    },
    {
      question: "Are the courses accessible worldwide?",
      answer: "Yes, all our courses are available online and accessible from anywhere in the world.",
    },
    {
      question: "What is the average course duration?",
      answer: "Course durations vary from 6 weeks to 9 months depending on the program.",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <SchemaMarkup schema={schema} />
}
