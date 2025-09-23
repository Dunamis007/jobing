import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-dunamis-navy text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Tutors" className="h-8 w-8 rounded" />
              <span className="text-xl font-bold">Dunamis Tutors</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students with cutting-edge education in AI, coding, digital marketing, and more. Your gateway
              to a successful tech career.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs/ai-tutoring" className="text-gray-300 hover:text-dunamis-orange">
                  AI Tutoring
                </Link>
              </li>
              <li>
                <Link href="/programs/coding" className="text-gray-300 hover:text-dunamis-orange">
                  Coding
                </Link>
              </li>
              <li>
                <Link href="/programs/digital-marketing" className="text-gray-300 hover:text-dunamis-orange">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/programs/ielts" className="text-gray-300 hover:text-dunamis-orange">
                  IELTS
                </Link>
              </li>
              <li>
                <Link href="/programs/travel-abroad" className="text-gray-300 hover:text-dunamis-orange">
                  Travel Abroad
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs/jamb" className="text-gray-300 hover:text-dunamis-orange">
                  JAMB
                </Link>
              </li>
              <li>
                <Link href="/programs/jupeb" className="text-gray-300 hover:text-dunamis-orange">
                  JUPEB
                </Link>
              </li>
              <li>
                <Link href="/programs/ijmb" className="text-gray-300 hover:text-dunamis-orange">
                  IJMB
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-dunamis-orange">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-dunamis-orange">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">info@dunamistutors.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">07032090178</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-dunamis-blue pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-300">© 2025 Dunamis Tutors. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-dunamis-orange">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-dunamis-orange">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-dunamis-orange">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
