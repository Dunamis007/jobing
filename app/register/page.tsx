import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Register for Personalized Learning | Dunamis Tutors",
  description: "Choose your program and start your personalized learning journey with Dunamis Tutors.",
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-700" />
              <span className="text-xl font-bold">Dunamis Tutors</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Already have an account? Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container py-12">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold">Choose Your Program</h1>
            <p className="text-gray-500">
              Select the program you're interested in to begin your personalized learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* IJMB Program */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">IJMB Program</h2>
                  <p className="text-sm text-gray-500">Direct entry into 200 level</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Comprehensive preparation for Interim Joint Matriculation Board examinations with expert guidance and
                personalized study plans.
              </p>
              <Link href="/register/ijmb">
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  Select IJMB Program
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* JUPEB Program */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">JUPEB Program</h2>
                  <p className="text-sm text-gray-500">Fast-track university admission</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Comprehensive preparation for Joint Universities Preliminary Examinations Board with structured learning
                paths and practice tests.
              </p>
              <Link href="/register/jupeb">
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  Select JUPEB Program
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Digital Marketing</h2>
                  <p className="text-sm text-gray-500">Industry-relevant skills</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Learn in-demand digital marketing skills with hands-on projects, industry certifications, and
                personalized coaching.
              </p>
              <Link href="/register/digital-marketing">
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  Select Digital Marketing
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Coding Program */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Coding Program</h2>
                  <p className="text-sm text-gray-500">Build tech skills</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Learn programming fundamentals and advanced concepts with project-based learning and mentor support.
              </p>
              <Link href="/register/coding">
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  Select Coding Program
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* AI Tutoring */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">AI Tutoring</h2>
                  <p className="text-sm text-gray-500">Personalized assistance</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Get personalized help with difficult concepts through our AI-powered tutoring system available 24/7.
              </p>
              <Link href="/register/ai-tutoring">
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  Select AI Tutoring
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container px-4 py-6 md:px-6 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Dunamis Tutors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
