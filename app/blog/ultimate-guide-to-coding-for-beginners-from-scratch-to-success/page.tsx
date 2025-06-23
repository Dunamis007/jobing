import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User, ArrowLeft, ExternalLink } from "lucide-react"

export default function CodingGuideBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-dunamis-primary py-8">
        <div className="container px-4 md:px-6">
          <Link href="/blog" className="inline-flex items-center text-white hover:text-gray-300 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-dunamis-accent">Coding</Badge>
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl mb-4">
              Ultimate Guide to Coding for Beginners: From Scratch to Success 🚀
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Dunamis Tutors Team
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                December 22, 2024
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                12 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Coding for Beginners"
              fill
              className="object-cover"
            />
          </div>

          {/* YouTube Video Embed */}
          <div className="mb-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/EFmxPMdBqmU"
                title="Animation vs. Coding - Ultimate Guide to Coding for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Are you curious about coding but not sure where to start? Whether you're a student, a parent looking for
              coding for kids, or someone asking "coding kaise sikhe?", this guide is for you. At Dunamis Tutors, we
              make learning coding for beginners simple, fun, and practical — no prior experience needed!
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">🧠 What is Coding? (Coding Kya Hai)</h2>
            <p className="mb-6">
              Coding is the process of writing instructions that a computer can understand. These instructions are
              written in programming languages like Python, HTML, and JavaScript. You use coding to create websites,
              apps, games, and even music!
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">🎯 Why Learn Coding in 2025?</h2>
            <ul className="mb-6 space-y-2">
              <li>
                High demand for developers in AI, tech, and even healthcare (think medical coding and medical billing
                and coding jobs).
              </li>
              <li>You can build your own coding websites or even work remotely.</li>
              <li>Coding salary packages are competitive globally and growing locally in Nigeria.</li>
            </ul>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">🧒 Coding for Kids</h2>
            <p className="mb-6">
              Coding is no longer just for adults. Platforms like Scratch coding and vibe coding allow kids to build
              games while learning logic. At Dunamis Tutors, we offer structured coding courses for kids to make
              learning playful and productive.
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">
              🧩 Coding Decoding Reasoning: Trick for Exam Prep
            </h2>
            <p className="mb-6">
              Preparing for government or competitive exams? We also cover coding decoding reasoning tricks and
              questions to help with aptitude tests. These techniques are commonly used in logic-based exams like SSC,
              Bank PO, and other government job prep.
            </p>
            <p className="mb-6">
              If you're following guides like Coding Decoding by Piyush Varshney, we simplify it even further in our
              lessons.
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">🎵 Coding Music & Creativity</h2>
            <p className="mb-6">
              Did you know you can make music with code? Tools like Sonic Pi and live-coding platforms allow students to
              mix creativity with programming. It's one of the most fun ways to fall in love with Python coding.
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">📚 Popular Coding Languages You Can Learn</h2>
            <p className="mb-4">Here are some beginner-friendly options we offer:</p>
            <ul className="mb-6 space-y-2">
              <li>
                <strong>Python</strong> – Great for data science, AI, and automation
              </li>
              <li>
                <strong>HTML/CSS</strong> – Core for websites
              </li>
              <li>
                <strong>JavaScript</strong> – Web interactivity
              </li>
              <li>
                <strong>Scratch</strong> – Best for kids and new learners
              </li>
              <li>
                <strong>SQL</strong> – Databases and data management
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">📱 Coding Apps & Websites to Try</h2>
            <p className="mb-4">Alongside our full coding bootcamp, here are some tools and apps to get started:</p>
            <ul className="mb-6 space-y-2">
              <li>Scratch</li>
              <li>Code.org</li>
              <li>dp coding school</li>
              <li>Coding Ninjas</li>
              <li>Replit for real-time collaboration</li>
            </ul>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">👩‍⚕️ What About Medical Coding?</h2>
            <p className="mb-6">
              Medical coding is different from programming. It involves translating healthcare procedures into codes for
              billing. You can explore our medical coding course, learn about medical billing and coding salaries, and
              explore medical coding jobs globally.
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">📅 How Many Hours Does Coding Take?</h2>
            <p className="mb-6">
              We suggest starting with 1–2 hours daily. Our courses are structured with clear modules, exercises, and
              real projects. Even with limited coding hours, you can make progress quickly — especially with the support
              of our instructors.
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">
              🧭 How to Get Started – Coding Kaise Sikhe?
            </h2>
            <p className="mb-6">
              Whether you're searching for "coding kaise sikhe in Hindi" or prefer English, we have beginner modules for
              every language background. Start small, stay consistent, and choose a clear path (like web development or
              AI).
            </p>

            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">🧑‍💻 Ready to Begin Your Journey?</h2>
            <p className="mb-8">
              From coding AI, games, and apps to medical coding, the future is built by those who code. Join our
              beginner-friendly coding course today and unlock a world of opportunity.
            </p>

            <div className="bg-dunamis-primary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start Your Coding Journey Today!</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register/coding">
                  <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-dunamis-primary font-semibold">
                    Join Dunamis Tutors Coding Bootcamp Now!
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dunamis-primary">
                  Download Syllabus (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
