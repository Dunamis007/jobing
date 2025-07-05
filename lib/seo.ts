import type { Metadata } from "next"

/**
 * Global SEO defaults for Dunamis Tutors.
 */
const BASE_URL = "https://dunamistutors.com"

const defaultMeta: Metadata = {
  title: {
    default: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    template: "%s | Dunamis Tutors",
  },
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place.",
  applicationName: "Dunamis Tutors",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Expert-led online programs in AI, Coding, IELTS, Digital Marketing, JUPEB, and more. Flexible learning, mentorship & certification.",
    siteName: "Dunamis Tutors",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dunamistutors",
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Flexible learning, mentorship & certification.",
  },
}

/**
 * Helper that merges page-specific SEO with the global defaults.
 * Supply `canonical` as a path (e.g. `/blog/post`) and it will be
 * expanded to the full domain automatically.
 */
export function generateSEO(partial: Partial<Metadata> & { canonical?: string }): Metadata {
  const pageCanonical =
    partial.canonical && partial.canonical.startsWith("/")
      ? BASE_URL + partial.canonical
      : (partial.canonical ?? defaultMeta.alternates?.canonical)

  return {
    ...defaultMeta,
    ...partial,
    alternates: {
      ...defaultMeta.alternates,
      canonical: pageCanonical,
    },
    openGraph: {
      ...defaultMeta.openGraph,
      ...partial.openGraph,
      url: pageCanonical ?? defaultMeta.openGraph?.url,
      title: partial.openGraph?.title ?? partial.title ?? defaultMeta.openGraph?.title,
      description:
        partial.openGraph?.description ??
        (typeof partial.description === "string" ? partial.description : defaultMeta.openGraph?.description),
    },
    twitter: {
      ...defaultMeta.twitter,
      ...partial.twitter,
      title: partial.twitter?.title ?? partial.title ?? defaultMeta.twitter?.title,
      description:
        partial.twitter?.description ??
        (typeof partial.description === "string" ? partial.description : defaultMeta.twitter?.description),
    },
  }
}
