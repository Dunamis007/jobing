/**
 * Global SEO defaults and helper.
 *
 * Usage in a page or layout:
 * export const metadata = generateSEO({ title: "Custom page title", description: "…" })
 */
import type { Metadata } from "next"

/* ----------  GLOBAL DEFAULTS  ---------- */
const SITE_URL = "https://dunamistutors.com"

const defaultMetadata: Metadata = {
  title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Flexible learning, mentorship & certification.",
    url: SITE_URL,
    siteName: "Dunamis Tutors",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Flexible learning, mentorship & certification.",
  },
}

/* ----------  HELPER  ---------- */
export function generateSEO(overrides: Metadata = {}): Metadata {
  // Deep-merge two metadata objects (shallow merge is good enough for most keys)
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
    },
    alternates: {
      ...defaultMetadata.alternates,
      ...overrides.alternates,
    },
  }
}

/* Make defaults available for import in special cases */
export { defaultMetadata }
