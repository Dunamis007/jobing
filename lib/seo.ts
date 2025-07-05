import type { Metadata } from "next"

type SeoProps = {
  title?: string
  description?: string
  image?: string
  canonicalUrl?: string
}

const defaultSEO: Metadata = {
  title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dunamistutors.com",
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    siteName: "Dunamis Tutors",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 800,
        height: 600,
        alt: "Dunamis Tutors Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    images: ["/placeholder-logo.png"],
    creator: "@dunamistutors",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "large",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://dunamistutors.com"),
  alternates: {
    canonical: "https://dunamistutors.com",
    languages: {
      "en-NG": "https://dunamistutors.com",
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
  },
}

export function generateSEO({ title, description, image, canonicalUrl }: SeoProps): Metadata {
  const seo: Metadata = {
    ...defaultSEO,
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(image ? { openGraph: { images: [{ url: image }] }, twitter: { images: [image] } } : {}),
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
  }

  // Use a template for the title
  seo.title = seo.title

  return seo
}
