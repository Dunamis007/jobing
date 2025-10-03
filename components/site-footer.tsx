import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-dunamis-navy text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Edtech" className="h-10 w-10 rounded" />
              <span className="font-bold text-lg">Dunamis Edtech</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering learners worldwide with cutting-edge technology and personalized guidance.
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

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/programs/ai-tutoring" className="hover:text-dunamis-orange transition-colors">
                  AI Tutoring
                </Link>
              </li>
              <li>
                <Link href="/programs/coding" className="hover:text-dunamis-orange transition-colors">
                  Coding Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/programs/digital-marketing" className="hover:text-dunamis-orange transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/programs/ielts" className="hover:text-dunamis-orange transition-colors">
                  IELTS Preparation
                </Link>
              </li>
              <li>
                <Link href="/programs/jamb" className="hover:text-dunamis-orange transition-colors">
                  JAMB Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/" className="hover:text-dunamis-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-dunamis-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-dunamis-orange transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-dunamis-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-dunamis-orange transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Email: info@dunamisedtech.com</li>
              <li>Phone: 07032090178</li>
              <li>Address: Lagos, Nigeria</li>
              <li className="pt-2">
                <span className="font-medium">Business Hours:</span>
                <br />
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 10:00 AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Dunamis Edtech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
