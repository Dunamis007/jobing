import Link from "next/link"
import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-bold">Dunamis Tutors</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs/ijmb" className="text-gray-500 hover:text-blue-700 transition-colors">
                  IJMB Programs
                </Link>
              </li>
              <li>
                <Link href="/programs/jupeb" className="text-gray-500 hover:text-blue-700 transition-colors">
                  JUPEB Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/digital-marketing"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/programs/coding" className="text-gray-500 hover:text-blue-700 transition-colors">
                  Coding
                </Link>
              </li>
              <li>
                <Link href="/programs/ai-tutoring" className="text-gray-500 hover:text-blue-700 transition-colors">
                  AI Tutoring
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-blue-700 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-500 hover:text-blue-700 transition-colors">
                  Study Materials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-blue-700 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-blue-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-700 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-blue-700 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-blue-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-blue-700 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dunamis Tutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
