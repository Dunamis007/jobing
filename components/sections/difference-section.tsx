"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Briefcase, Infinity } from "lucide-react"

const differences = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Advanced algorithms adapt to your learning style and provide personalized recommendations.",
    color: "text-[#FF9800]",
  },
  {
    icon: Users,
    title: "Industry Experts",
    description: "Learn directly from professionals currently working in top tech companies worldwide.",
    color: "text-[#FF9800]",
  },
  {
    icon: Briefcase,
    title: "Job Placement Support",
    description: "Comprehensive career services including resume review, interview prep, and job matching.",
    color: "text-[#FF9800]",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "Once enrolled, enjoy unlimited access to course materials and future updates forever.",
    color: "text-[#FF9800]",
  },
]

export default function DifferenceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">The Dunamis Difference</h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            What sets us apart from other online learning platforms and makes us the preferred choice for ambitious
            learners.
          </p>
        </div>

        {/* Differences Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((difference, index) => {
            const IconComponent = difference.icon
            return (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF9800]/10 to-[#FF9800]/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${difference.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#333333] mb-4">{difference.title}</h3>

                  {/* Description */}
                  <p className="text-[#666666] text-sm leading-relaxed">{difference.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
