import type { Metadata } from "next"

interface SEOConfig {
  title?: string
  description?: string
  canonicalUrl?: string
  keywords?: string[]
  ogImage?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
}

const defaultSEO = {
  title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  canonicalUrl: "https://dunamistutors.com/",
  ogImage: "/placeholder-logo.png",
  keywords: [
    "AI tutoring Nigeria",
    "coding courses online",
    "IELTS preparation",
    "JUPEB classes",
    "digital marketing training",
    "online education Nigeria",
  ],
}

export function generateSEO(config: SEOConfig = {}): Metadata {
  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    canonicalUrl = defaultSEO.canonicalUrl,
    keywords = defaultSEO.keywords,
    ogImage = defaultSEO.ogImage,
    type = "website",
    publishedTime,
    modifiedTime,
    authors,
    section,
  } = config

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(", "),
    authors: authors ? authors.map((name) => ({ name })) : [{ name: "Dunamis Tutors" }],
    creator: "Dunamis Tutors",
    publisher: "Dunamis Tutors",
    metadataBase: new URL("https://dunamistutors.com"),
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
      type: type as any,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(section && { section }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@dunamistutors",
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

  return metadata
}
