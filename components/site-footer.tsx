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
              <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Edtech" className="h-8 w-8 rounded" />
              <span className="text-xl font-bold">Dunamis Edtech</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students with cutting-edge education in AI, coding, digital marketing, and more. Your gateway
              to a successful tech career.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Online Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Online Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programs/ai-tutoring"
                  className="text-gray-300 hover:text-dunamis-orange transition-colors"
                >
                  AI Tutoring
                </Link>
              </li>
              <li>
                <Link href="/programs/coding" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                  Coding
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/digital-marketing"
                  className="text-gray-300 hover:text-dunamis-orange transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/programs/ielts" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                  IELTS
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/travel-abroad"
                  className="text-gray-300 hover:text-dunamis-orange transition-colors"
                >
                  Travel Abroad
                </Link>
              </li>
            </ul>
          </div>

          {/* In-Person Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">In-Person Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs/jamb" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                  JAMB
                </Link>
              </li>
              <li>
                <Link href="/programs/jupeb" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                  JUPEB
                </Link>
              </li>
              <li>
                <Link href="/programs/ijmb" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                  IJMB
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
                <span className="text-gray-300">info@dunamisedtech.com</span>
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

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-300">© 2025 Dunamis Edtech. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-dunamis-orange transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
