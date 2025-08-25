import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Youtube } from "lucide-react"

/**
 * SEO -------------------------------------------------------------------------
 */
export const metadata: Metadata = {
  title: "The Ultimate Guide to Coding for Beginners – From Scratch to Success",
  description:
    "New to programming? Learn the fundamentals, pick the right language, and build real-world projects with this step-by-step coding guide for beginners.",
  alternates: {
    canonical: "https://dunamistutors.com/blog/ultimate-guide-to-coding-for-beginners-from-scratch-to-success",
  },
}

/**
 * Article Page ----------------------------------------------------------------
 */
export default function CodingBeginnersGuide() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      {/* Header */}
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
          The Ultimate Guide&nbsp;to&nbsp;Coding for Beginners – From Scratch to Success
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <Badge variant="secondary">Coding</Badge>
          <span>•</span>
          <time dateTime="2025-06-15">15&nbsp;June&nbsp;2025</time>
          <span>•</span>
          <span>12&nbsp;min read</span>
        </div>
      </header>

      <Separator className="my-8" />

      {/* Cover Image */}
      <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
        alt="Person typing code on a laptop"
        width={1200}
        height={630}
        priority
        className="rounded-lg object-cover"
      />

      {/* Body */}
      <div className="prose prose-zinc mx-auto mt-8 dark:prose-invert">
        <p>
          Learning to code can feel intimidating, but it doesn’t have to be. In this guide you’ll discover practical
          steps, curated resources, and expert tips that take you from complete novice to building your very first
          production-ready application.
        </p>

        <h2>1. Understand the Fundamentals</h2>
        <p>
          Before you install frameworks or chase the latest trends, make sure you grasp core concepts like variables,
          data types, control flow, and functions. These ideas are language-agnostic and form the backbone of every
          modern technology stack.
        </p>

        <h2>2. Choose the Right First Language</h2>
        <ul>
          <li>
            <strong>JavaScript</strong> – Perfect for immediate, visual results on the web.
          </li>
          <li>
            <strong>Python</strong> – Clean syntax and a huge ecosystem for data, AI, and automation.
          </li>
          <li>
            <strong>Go / Rust</strong> – Great if you’re interested in back-end services or systems programming.
          </li>
        </ul>

        <h2>3. Build, Break, Repeat</h2>
        <p>
          The fastest way to learn is by making real projects. Start small (a to-do list or quiz app) and gradually
          iterate. Each bug you fix cements a concept in your long-term memory.
        </p>

        <h2>4. Join a Community</h2>
        <p>
          Whether it’s&nbsp;
          <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          , StackOverflow, or our own Dunamis Tutors forum, surrounding yourself with like-minded learners accelerates
          growth and keeps you motivated.
        </p>

        {/* Embedded YouTube Video */}
        <div className="not-prose my-8 overflow-hidden rounded-lg">
          <iframe
            title="Top 10 Tips for Learning Programming Fast"
            src="https://www.youtube.com/embed/EFmxPMdBqmU"
            className="aspect-video w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <h2>5. Roadmap &amp; Next Steps</h2>
        <ol>
          <li>Finish the free JavaScript basics track on our platform.</li>
          <li>Clone the starter repo and complete the “Notes” mini-project.</li>
          <li>Share your progress in the community and request a code review.</li>
        </ol>

        <blockquote>
          “The best error message is the one that never shows up, because you thought through the problem first.” –
          Unknown
        </blockquote>

        <p>
          Ready to dive deeper? Explore our full <a href="/coding-platform">Coding Bootcamp</a> and unlock guided
          mentorship, weekly challenges, and a gamified EduCoin economy.
        </p>
      </div>

      {/* Footer Call-to-Action */}
      <footer className="mt-12 flex flex-col items-center gap-4">
        <a
          href="/register/coding"
          className="inline-flex items-center gap-2 rounded-md bg-dunamis-primary px-6 py-3 text-white hover:bg-dunamis-secondary"
        >
          <Youtube className="h-4 w-4" />
          Start Your Coding Journey
        </a>
        <p className="text-sm text-muted-foreground">© 2025 Dunamis Tutors</p>
      </footer>
    </article>
  )
}
