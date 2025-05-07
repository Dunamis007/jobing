import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-dunamis-primary text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Dunamis Tutors</h3>
            <p className="mb-4 text-gray-300">
              Empowering students to achieve academic excellence through quality education and personalized guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Programs</h3>
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
                <Link href="/programs/jamb" className="text-gray-300 hover:text-white">
                  JAMB Program
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
                  Coding
                </Link>
              </li>
              <li>
                <Link href="/programs/ai-tutoring" className="text-gray-300 hover:text-white">
                  AI Tutoring
                </Link>
              </li>
              <li>
                <Link href="/programs/travel-abroad" className="text-gray-300 hover:text-white">
                  Travel Abroad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">123 Education Street, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">info@dunamistutors.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Dunamis Tutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
