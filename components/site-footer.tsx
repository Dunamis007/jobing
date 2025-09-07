"use client"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
  programs: [
    { name: "AI Tutoring", href: "/programs/ai-tutoring" },
    { name: "Coding Bootcamp", href: "/programs/coding" },
    { name: "Digital Marketing", href: "/programs/digital-marketing" },
    { name: "IELTS Preparation", href: "/programs/ielts" },
    { name: "JAMB/JUPEB", href: "/programs/jamb" },
  ],
  quickLinks: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Register", href: "/register" },
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Student Portal", href: "/portal" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refund" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "YouTube", href: "#", icon: Youtube },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.imgur.com/ayuLxTm.jpeg"
                alt="Dunamis Edtech"
                className="h-12 w-12 rounded-lg object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=48&width=48&text=DE"
                }}
              />
              <div>
                <h3 className="text-2xl font-bold">Dunamis Edtech</h3>
                <p className="text-gray-300 text-sm">Transforming Education</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Empowering learners worldwide with cutting-edge technology and expert instruction. Your success is our
              mission.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF9800]" />
                <span className="text-gray-300">info@dunamistutors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF9800]" />
                <span className="text-gray-300">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FF9800]" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#FF9800] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#FF9800] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-white mb-2">Office Hours</h5>
                <p className="text-gray-300 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h5 className="font-medium text-white mb-2">Support</h5>
                <p className="text-gray-300 text-sm">
                  24/7 Online Support Available
                  <br />
                  Response within 2 hours
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="font-medium text-white mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 hover:bg-[#FF9800] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">© 2024 Dunamis Edtech. All rights reserved.</div>

            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[#FF9800] text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
