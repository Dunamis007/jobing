import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
  type?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
}

export function generateSEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
}: SEOProps = {}): Metadata {
  const baseUrl = "https://dunamistutors.com"
  const defaultTitle = "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria"
  const defaultDescription =
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place"

  const seoTitle = title ? `${title} | Dunamis Tutors` : defaultTitle
  const seoDescription = description || defaultDescription
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      "online tutoring Nigeria",
      "AI courses Nigeria",
      "coding bootcamp Nigeria",
      "IELTS preparation Nigeria",
      "JUPEB classes Nigeria",
      "JAMB coaching Nigeria",
      "digital marketing courses",
      "online education Africa",
      "tech skills training",
      "university entrance exam prep",
      ...keywords,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: type as any,
      locale: "en_NG",
      url: canonicalUrl,
      siteName: "Dunamis Tutors",
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || "Dunamis Tutors - Online Learning Platform for Nigeria",
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
        section,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
      creator: "@dunamistutors",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }

  return metadata
}

// Pre-configured SEO for common pages
export const pageSEO = {
  home: generateSEO(),

  aiTutoring: generateSEO({
    title: "AI Tutoring Program - Master Artificial Intelligence",
    description:
      "Learn AI and machine learning with expert tutors. Comprehensive curriculum covering Python, TensorFlow, neural networks, and real-world AI applications.",
    keywords: ["AI tutoring", "machine learning course", "artificial intelligence Nigeria", "Python AI course"],
    canonical: "/programs/ai-tutoring",
  }),

  coding: generateSEO({
    title: "Coding Bootcamp - Full Stack Web Development",
    description:
      "Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more. Get job-ready with hands-on projects and mentorship.",
    keywords: ["coding bootcamp Nigeria", "web development course", "JavaScript training", "React course"],
    canonical: "/programs/coding",
  }),

  ielts: generateSEO({
    title: "IELTS Preparation Course - Achieve Your Target Score",
    description:
      "Comprehensive IELTS preparation with expert instructors. Practice tests, speaking sessions, and personalized feedback to achieve your target score.",
    keywords: ["IELTS preparation Nigeria", "IELTS course", "English language test", "study abroad preparation"],
    canonical: "/programs/ielts",
  }),

  jupeb: generateSEO({
    title: "JUPEB Classes - Joint Universities Preliminary Examinations Board",
    description:
      "Excel in JUPEB exams with our comprehensive preparation program. Expert tutoring in all subjects for university admission.",
    keywords: ["JUPEB classes Nigeria", "JUPEB preparation", "university entrance exam", "A-level equivalent"],
    canonical: "/programs/jupeb",
  }),

  jamb: generateSEO({
    title: "JAMB Coaching - UTME Preparation Program",
    description:
      "Ace your JAMB UTME with our expert coaching program. Comprehensive coverage of all subjects with practice tests and exam strategies.",
    keywords: ["JAMB coaching Nigeria", "UTME preparation", "university entrance exam", "JAMB CBT practice"],
    canonical: "/programs/jamb",
  }),

  digitalMarketing: generateSEO({
    title: "Digital Marketing Course - Master Online Marketing",
    description:
      "Learn digital marketing strategies including SEO, social media marketing, Google Ads, content marketing, and analytics.",
    keywords: ["digital marketing course Nigeria", "SEO training", "social media marketing", "Google Ads course"],
    canonical: "/programs/digital-marketing",
  }),

  blog: generateSEO({
    title: "Blog - Latest Insights on Tech, Education & Career Growth",
    description:
      "Stay updated with the latest trends in technology, education, and career development. Expert insights and practical tips for students and professionals.",
    keywords: ["tech blog Nigeria", "education blog", "career development", "coding tutorials"],
    canonical: "/blog",
  }),
}
