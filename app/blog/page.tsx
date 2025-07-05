import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Blog | Dunamis Tutors - Latest Updates on AI, Coding & Education",
  description:
    "Stay updated with the latest insights on AI, coding, IELTS preparation, and educational technology from Dunamis Tutors experts.",
  canonicalUrl: "https://dunamistutors.com/blog/",
})

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Coding for Beginners: From Scratch to Success",
    description:
      "Learn how to start your coding journey with our comprehensive guide covering programming fundamentals, best practices, and career paths.",
    slug: "ultimate-guide-to-coding-for-beginners-from-scratch-to-success",
    category: "Coding",
    readTime: "15 min read",
    publishedAt: "2024-12-15",
    featured: true,
    tags: ["Coding", "Beginners", "Programming", "Career"],
  },
  {
    id: 2,
    title: "Ultimate Guide: Best Free AI Image Enhancers Online 2025",
    description:
      "Discover the top free AI-powered image enhancement tools that can transform your photos with cutting-edge artificial intelligence technology.",
    slug: "ultimate-guide-best-free-ai-image-enhancers-online-2025",
    category: "AI",
    readTime: "12 min read",
    publishedAt: "2024-12-10",
    featured: false,
    tags: ["AI", "Image Enhancement", "Tools", "Free Software"],
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Dunamis Tutors Blog</h1>
          <p className="text-xl text-muted-foreground">Latest insights on AI, coding, education, and technology</p>
        </div>

        {featuredPost && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Featured Post</Badge>
            </div>
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                </div>
                <CardTitle className="text-2xl">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                    {featuredPost.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">{featuredPost.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Published on {new Date(featuredPost.publishedAt).toLocaleDateString()}
                  </span>
                  <Link href={`/blog/${featuredPost.slug}`} className="text-primary hover:underline font-medium">
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {otherPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium">
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
