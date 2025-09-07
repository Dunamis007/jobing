"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PersonStanding, GraduationCap, Clock } from "lucide-react"

const features = [
  {
    icon: PersonStanding,
    title: "Personalized Learning",
    description:
      "AI-powered learning paths tailored to your pace, learning style, and career goals for maximum effectiveness.",
    color: "from-[#FF9800] to-[#F57C00]",
  },
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience and proven track records.",
    color: "from-[#002B5B] to-[#1E3A8A]",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials, live sessions, and recorded lectures.",
    color: "from-[#1E3A8A] to-[#002B5B]",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Why Choose Us?</h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the best learning experience with innovative teaching methods and comprehensive
            support systems.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden group"
              >
                <CardHeader className="text-center pb-4">
                  {/* Icon with Gradient Background */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <CardTitle className="text-2xl font-bold text-[#333333] mb-4">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <CardDescription className="text-[#666666] text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
