import type { Metadata } from "next"
import { CalendarDays, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "The Ultimate Guide to the Best Free AI Image Enhancers Online in 2025",
  description: "Compare Vance AI, Canva, Picsart, Krea, Leonardo AI and more. Includes a walkthrough video.",
}

export default function AiImageEnhancerPost() {
  return (
    <article className="container prose prose-gray lg:prose-xl mx-auto py-12">
      <header className="mb-8">
        <h1 className="!mb-2">The Ultimate Guide to the Best Free AI Image Enhancers Online in 2025</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" /> Dunamis Tutors Team
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" /> December&nbsp;20,&nbsp;2024
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 10&nbsp;min&nbsp;read
          </span>
          <Badge className="bg-dunamis-primary">AI & Technology</Badge>
        </div>
      </header>

      {/* ----------  YOUTUBE VIDEO  ---------- */}
      <div className="w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/KaxP4to5szQ"
          title="AI Image Enhancer – Dunamis Tutors"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ----------  ARTICLE BODY  ---------- */}
      <p>
        In today’s digital world, high-quality images are more than just visuals — they&#39;re a language. Whether
        you&#39;re a content creator, designer, marketer, or student, having access to a powerful{" "}
        <strong>AI image enhancer online&nbsp;free</strong> can instantly transform your low-resolution pictures into 4K
        masterpieces. If you&#39;re searching for the best free AI image enhancer, you’ve come to the right place.
      </p>

      {/* … (the rest of your detailed AI Image Enhancer content goes here) … */}

      <div className="not-prose mt-10 flex gap-4">
        <Button className="bg-dunamis-primary hover:bg-dunamis-secondary">Try Dunamis AI Tools</Button>
      </div>
    </article>
  )
}
