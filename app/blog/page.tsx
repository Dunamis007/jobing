import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog – Latest Guides & Resources",
  description:
    "Stay updated with Dunamis Tutors' latest articles on tech, education and career growth. Read our in-depth guides and success tips.",
  alternates: {
    canonical: "https://dunamistutors.com/blog/",
  },
  openGraph: { type: "article" },
}

const posts = [
  {
    slug: "ultimate-guide-to-coding-for-beginners-from-scratch-to-success",
    title: "Ultimate Guide to Coding for Beginners: From Scratch to Success 🚀",
    excerpt:
      "Kick-start your programming journey with our step-by-step roadmap, video tutorial and practical projects.",
    image: "/placeholder.svg?height=350&width=700",
    tag: "Coding",
    date: "Dec 22 2024",
  },
  {
    slug: "ultimate-guide-best-free-ai-image-enhancers-online-2025",
    title: "The Ultimate Guide to the Best Free AI Image Enhancers Online in 2025",
    excerpt:
      "Transform blurry photos into 4K masterpieces. We review the top free AI image upscalers you can use right now.",
    image: "/placeholder.svg?height=350&width=700",
    tag: "AI & Technology",
    date: "Dec 20 2024",
  },
]

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Dunamis Tutors Blog</h1>

        <div className="grid gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <Badge className="mb-2">{post.tag}</Badge>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-dunamis-primary font-medium">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
