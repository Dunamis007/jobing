import { generateSEO } from "@/lib/seo"
import Link from "next/link"

export const metadata = generateSEO({
  title: "Dunamis Tutors Blog | AI, Coding, Education Insights",
  description: "Explore articles on AI, coding, education, and learning strategies from Dunamis Tutors experts.",
})

const BlogIndexPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Dunamis Tutors Blog</h1>
      <p className="text-gray-600 mb-8">
        Explore articles on AI, coding, education, and learning strategies from Dunamis Tutors experts.
      </p>

      <div className="space-y-6">
        {/* First Blog Post */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">
            <Link href="/blog/ultimate-guide-to-coding-for-beginners-from-scratch-to-success">
              The Ultimate Guide to Coding for Beginners: From Scratch to Success
            </Link>
          </h2>
          <p className="text-gray-500">
            A comprehensive guide for beginners to start their coding journey, covering essential concepts, languages,
            and resources.
          </p>
        </div>

        {/* Second Blog Post */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">
            <Link href="/blog/ultimate-guide-best-free-ai-image-enhancers-online-2025">
              The Ultimate Guide to the Best Free AI Image Enhancers Online in 2025
            </Link>
          </h2>
          <p className="text-gray-500">
            Discover the best free AI image enhancers online to transform your low-resolution pictures into 4K
            masterpieces.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogIndexPage
