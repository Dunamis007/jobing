"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Megaphone, Clock, Users, Star } from "lucide-react"

const programs = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence and machine learning with hands-on projects and expert guidance.",
    price: "₦150,000",
    duration: "12 weeks",
    students: "2,500+",
    rating: "4.9",
    icon: Brain,
    features: ["Python Programming", "Machine Learning", "Deep Learning", "AI Projects"],
    badge: "Most Popular",
    badgeColor: "bg-[#FF9800]",
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Learn full-stack development from scratch with modern technologies and frameworks.",
    price: "₦120,000",
    duration: "16 weeks",
    students: "3,200+",
    rating: "4.8",
    icon: Code,
    features: ["HTML/CSS/JS", "React/Node.js", "Database Design", "Portfolio Projects"],
    badge: "Best Value",
    badgeColor: "bg-green-500",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master digital marketing strategies, social media, SEO, and online advertising.",
    price: "₦80,000",
    duration: "8 weeks",
    students: "1,800+",
    rating: "4.7",
    icon: Megaphone,
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    badge: "Quick Start",
    badgeColor: "bg-blue-500",
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Our Featured Programs</h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            Choose from our expertly designed programs that combine theoretical knowledge with practical skills to
            prepare you for success in today's digital world.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <Card
                key={program.id}
                className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden group"
              >
                {/* Badge */}
                {program.badge && (
                  <div
                    className={`absolute top-4 right-4 ${program.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}
                  >
                    {program.badge}
                  </div>
                )}

                <CardHeader className="pb-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002B5B] to-[#1E3A8A] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl font-bold text-[#333333] mb-2">{program.title}</CardTitle>

                  <CardDescription className="text-[#666666] text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-[#666666]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{program.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#333333] text-sm">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-[#F5F7FA] text-[#666666] hover:bg-[#FF9800] hover:text-white transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-[#FF9800]">{program.price}</span>
                        <span className="text-[#999999] text-sm ml-2">one-time</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      <Link href={`/programs/${program.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Programs CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#FF9800] text-[#FF9800] hover:bg-[#FF9800] hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 bg-transparent"
          >
            <Link href="/register">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
