import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "The Ultimate Guide to Coding for Beginners: From Scratch to Success",
  description:
    "A comprehensive guide for beginners to start their coding journey, covering essential concepts, languages, and resources.",
})

export default function CodingGuideBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Tag className="mr-1 h-3 w-3" />
                Programming
              </Badge>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar className="mr-1 h-4 w-4" />
                December 23, 2024
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="mr-1 h-4 w-4" />
                15 min read
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <User className="mr-1 h-4 w-4" />
                Dunamis Tutors
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Ultimate Guide to Coding for Beginners: From Scratch to Success 🚀
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Ready to start your coding journey? This comprehensive guide will take you from complete beginner to
              confident programmer, with practical steps and real-world advice.
            </p>
          </header>

          {/* YouTube Video Embed */}
          <div className="mb-8">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                src="https://www.youtube.com/embed/EFmxPMdBqmU?si=OS9maGLUzThB2cj2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              Watch: Animation vs. Coding - A fun introduction to programming concepts
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              In today's digital world, coding isn't just for computer scientists—it's a superpower that opens doors to
              countless opportunities. Whether you're a student, career changer, or curious learner, this guide will
              help you start your programming journey with confidence.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Why Learn to Code? 🤔</h2>

            <p className="mb-4">
              Before diving into the technical aspects, let's understand why coding is one of the most valuable skills
              you can learn:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>High Demand:</strong> Tech jobs are growing faster than any other industry
              </li>
              <li>
                <strong>Great Pay:</strong> Software developers earn competitive salaries globally
              </li>
              <li>
                <strong>Flexibility:</strong> Work remotely, freelance, or start your own company
              </li>
              <li>
                <strong>Problem Solving:</strong> Develop logical thinking and analytical skills
              </li>
              <li>
                <strong>Creativity:</strong> Build apps, websites, and solutions that impact millions
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Step 1: Choose Your First Programming Language 💻
            </h2>

            <p className="mb-4">
              The most common question beginners ask is: "Which programming language should I learn first?" Here are the
              top recommendations:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">🐍 Python - Best for Beginners</h3>
              <p className="text-blue-800 mb-2">
                Python's simple syntax makes it perfect for beginners. It's used in web development, data science, AI,
                and automation.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Career paths:</strong> Web Developer, Data Scientist, AI Engineer, Automation Specialist
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">🌐 JavaScript - For Web Development</h3>
              <p className="text-yellow-800 mb-2">
                JavaScript powers the web. Learn it to build interactive websites and web applications.
              </p>
              <p className="text-sm text-yellow-700">
                <strong>Career paths:</strong> Frontend Developer, Full-Stack Developer, Mobile App Developer
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Step 2: Set Up Your Development Environment 🛠️
            </h2>

            <p className="mb-4">Getting started is easier than you think. Here's what you need:</p>

            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li>
                <strong>Choose a Code Editor:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Visual Studio Code (Free, highly recommended)</li>
                  <li>Sublime Text</li>
                  <li>Atom</li>
                </ul>
              </li>
              <li>
                <strong>Install Python or Node.js:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Python: Download from python.org</li>
                  <li>JavaScript: Install Node.js from nodejs.org</li>
                </ul>
              </li>
              <li>
                <strong>Create Your First Project Folder</strong>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Step 3: Learn the Fundamentals 📚</h2>

            <p className="mb-4">Every programming language shares these core concepts:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">Variables & Data Types</h4>
                <p className="text-gray-600">Store and manipulate different types of information</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">Control Structures</h4>
                <p className="text-gray-600">If statements, loops, and decision-making logic</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">Functions</h4>
                <p className="text-gray-600">Reusable blocks of code that perform specific tasks</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">Data Structures</h4>
                <p className="text-gray-600">Arrays, lists, and objects to organize information</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Step 4: Build Your First Projects 🏗️</h2>

            <p className="mb-4">
              Theory is important, but practice makes perfect. Start with these beginner-friendly projects:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">1. Calculator App</h4>
                <p className="text-gray-600">Practice basic operations and user input</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">2. To-Do List</h4>
                <p className="text-gray-600">Learn about data storage and manipulation</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">3. Personal Website</h4>
                <p className="text-gray-600">Combine HTML, CSS, and JavaScript</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold">4. Weather App</h4>
                <p className="text-gray-600">Work with APIs and external data</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Step 5: Join the Community 👥</h2>

            <p className="mb-4">Programming is more fun and effective when you're part of a community:</p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>GitHub:</strong> Share your code and collaborate with others
              </li>
              <li>
                <strong>Stack Overflow:</strong> Get help when you're stuck
              </li>
              <li>
                <strong>Reddit:</strong> Join programming subreddits for discussions
              </li>
              <li>
                <strong>Local Meetups:</strong> Connect with developers in your area
              </li>
              <li>
                <strong>Discord/Slack:</strong> Join programming communities for real-time chat
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Common Beginner Mistakes to Avoid ⚠️</h2>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <div>
                    <strong>Trying to learn everything at once</strong>
                    <p className="text-red-700 text-sm">Focus on one language and master the basics first</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <div>
                    <strong>Not practicing regularly</strong>
                    <p className="text-red-700 text-sm">Code every day, even if it's just for 30 minutes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <div>
                    <strong>Giving up when stuck</strong>
                    <p className="text-red-700 text-sm">Debugging is part of programming - embrace the challenge!</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Your Learning Path Forward 🛤️</h2>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Ready to Start Your Coding Journey?</h3>
              <p className="mb-4">
                Join thousands of students who have transformed their careers through our comprehensive coding program.
              </p>
              <div className="space-y-2">
                <p>✅ Expert-led instruction</p>
                <p>✅ Hands-on projects</p>
                <p>✅ Career guidance</p>
                <p>✅ Community support</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Conclusion 🎯</h2>

            <p className="mb-4">
              Learning to code is a journey, not a destination. Start with the basics, practice consistently, and don't
              be afraid to make mistakes. Every expert programmer started exactly where you are now.
            </p>

            <p className="mb-6">
              Remember: the best time to start coding was yesterday, the second-best time is now. Take that first step,
              write your first "Hello, World!" program, and begin your transformation into a confident programmer.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-center text-gray-700 mb-4">
                <strong>Ready to turn your coding dreams into reality?</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/register/coding">Start Your Coding Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/programs/coding">Learn More About Our Program</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 mr-2">Tags:</span>
              {[
                "Coding for Beginners",
                "Programming Tutorial",
                "Learn to Code",
                "Web Development",
                "Python",
                "JavaScript",
                "Career Change",
                "Tech Skills",
              ].map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
