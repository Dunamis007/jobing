import type { Metadata } from "next"
import { CalendarDays, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Ultimate Guide to Coding for Beginners: From Scratch to Success 🚀",
  description: "A complete beginner-friendly roadmap to learn coding in 2025, plus a 12-minute explainer video.",
}

export default function CodingGuidePost() {
  return (
    <article className="container prose prose-gray lg:prose-xl mx-auto py-12">
      <header className="mb-8">
        <h1 className="!mb-2">Ultimate Guide to Coding for Beginners: From Scratch to Success 🚀</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" /> Dunamis Tutors Team
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" /> December&nbsp;22,&nbsp;2024
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 12&nbsp;min&nbsp;read
          </span>
          <Badge className="bg-dunamis-primary">Coding</Badge>
        </div>
      </header>

      {/* ----------  YOUTUBE VIDEO  ---------- */}
      <div className="w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/EFmxPMdBqmU"
          title="Animation vs Coding – Dunamis Tutors"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ----------  ARTICLE BODY  ---------- */}
      <p>
        Are you curious about coding but not sure where to start? Whether you&#39;re a student, a parent looking for
        coding for kids, or someone asking &quot;coding kaise sikhe?&quot; this guide is for you. At Dunamis Tutors, we
        make learning coding for beginners simple, fun, and practical — no prior experience needed!
      </p>

      {/* … (the full text that was previously in featuredPost.fullContent can go here) … */}

      <div className="not-prose mt-10 flex gap-4">
        <Button className="bg-dunamis-primary hover:bg-dunamis-secondary">Join Coding Bootcamp</Button>
        <Button variant="outline">Download Syllabus (PDF)</Button>
      </div>
    </article>
  )
}
