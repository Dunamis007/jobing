"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const programs = [
  { name: "AI Tutoring", href: "/programs/ai-tutoring" },
  { name: "Coding Bootcamp", href: "/programs/coding" },
  { name: "Digital Marketing", href: "/programs/digital-marketing" },
  { name: "IELTS Preparation", href: "/programs/ielts" },
  { name: "IJMB Program", href: "/programs/ijmb" },
  { name: "JUPEB Program", href: "/programs/jupeb" },
  { name: "Travel Abroad", href: "/programs/travel-abroad" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "FAQs", href: "/faqs" },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="https://i.imgur.com/ayuLxTm.jpeg"
                alt="Dunamis Edtech"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold">Dunamis Edtech</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Empowering students to achieve their dreams through world-class education and personalized guidance. Your
              gateway to a successful tech career.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#FF9800] transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FF9800] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FF9800] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FF9800] transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link href={program.href} className="text-gray-300 hover:text-[#FF9800] transition-colors">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#FF9800] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF9800]" />
                <span className="text-gray-300">07032090178</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF9800]" />
                <span className="text-gray-300">info@dunamistutors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#FF9800]" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">© 2025 Dunamis Edtech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
