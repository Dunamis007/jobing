"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-dunamis-navy text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Tutors" className="h-8 w-8 rounded" />
              <span className="font-bold text-lg">Dunamis Tutors</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students with world-class education and personalized guidance to achieve their career goals.
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
          <div className="space-y-4">
            <h3 className="font-semibold text-dunamis-orange">Programs</h3>
            <div className="space-y-2 text-sm">
              <Link href="/programs/ai-tutoring" className="block text-gray-300 hover:text-white transition-colors">
                AI Tutoring
              </Link>
              <Link href="/programs/coding" className="block text-gray-300 hover:text-white transition-colors">
                Coding Bootcamp
              </Link>
              <Link
                href="/programs/digital-marketing"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Digital Marketing
              </Link>
              <Link href="/programs/ielts" className="block text-gray-300 hover:text-white transition-colors">
                IELTS Preparation
              </Link>
              <Link href="/programs/jamb" className="block text-gray-300 hover:text-white transition-colors">
                JAMB Preparation
              </Link>
              <Link href="/programs/jupeb" className="block text-gray-300 hover:text-white transition-colors">
                JUPEB Program
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-dunamis-orange">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/dashboard" className="block text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/register" className="block text-gray-300 hover:text-white transition-colors">
                Register
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-dunamis-orange">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>07032090178</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@dunamistutors.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Dunamis Tutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
