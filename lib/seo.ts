import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  keywords?: string[]
  ogImage?: string
}

export function generateSEO({
  title = "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description = "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  canonicalUrl = "https://dunamistutors.com/",
  keywords = ["AI tutoring", "coding courses", "IELTS preparation", "JUPEB", "online learning", "Nigeria education"],
  ogImage = "/placeholder.jpg",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Dunamis Tutors" }],
    creator: "Dunamis Tutors",
    publisher: "Dunamis Tutors",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Dunamis Tutors",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
