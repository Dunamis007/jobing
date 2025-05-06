import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#0e3b62] text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32&text=DT"
                alt="Dunamis Tutors Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Dunamis Tutors</span>
            </div>
            <p className="text-gray-300">
              Personalized learning experiences for academic excellence and career advancement.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/ijmb" className="text-gray-300 hover:text-white">
                  IJMB Program
                </Link>
              </li>
              <li>
                <Link href="/programs/jupeb" className="text-gray-300 hover:text-white">
                  JUPEB Program
                </Link>
              </li>
              <li>
                <Link href="/programs/ielts" className="text-gray-300 hover:text-white">
                  IELTS Preparation
                </Link>
              </li>
              <li>
                <Link href="/programs/digital-marketing" className="text-gray-300 hover:text-white">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/programs/coding" className="text-gray-300 hover:text-white">
                  Coding Program
                </Link>
              </li>
              <li>
                <Link href="/programs/travel-abroad" className="text-gray-300 hover:text-white">
                  Travel Abroad Program
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/study-materials" className="text-gray-300 hover:text-white">
                  Study Materials
                </Link>
              </li>
              <li>
                <Link href="/resources/practice-tests" className="text-gray-300 hover:text-white">
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link href="/resources/scholarships" className="text-gray-300 hover:text-white">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Education Street, Lagos, Nigeria</li>
              <li>
                <Link href="mailto:info@dunamistutors.com" className="text-gray-300 hover:text-white">
                  info@dunamistutors.com
                </Link>
              </li>
              <li>
                <Link href="tel:+2348012345678" className="text-gray-300 hover:text-white">
                  +234 801 234 5678
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Dunamis Tutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
