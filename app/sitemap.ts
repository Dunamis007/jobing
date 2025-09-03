import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dunamistutors.com"

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/register",
    "/login",
    "/dashboard",
    "/programs/ai-tutoring",
    "/programs/coding",
    "/programs/digital-marketing",
    "/programs/ijmb",
    "/programs/jupeb",
    "/programs/jamb",
    "/programs/ielts",
    "/programs/travel-abroad",
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : ("weekly" as const),
    priority: path === "" ? 1 : 0.8,
  }))
}
