"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "AI Engineer at Google",
    program: "AI Tutoring Program",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The AI Tutoring program at Dunamis Edtech completely transformed my career. The hands-on projects and expert mentorship helped me land my dream job at Google. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    program: "Coding Bootcamp",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "From zero coding experience to building full-stack applications in just 16 weeks. The curriculum is well-structured and the instructors are incredibly supportive.",
  },
  {
    name: "Aisha Okafor",
    role: "Digital Marketing Manager",
    program: "Digital Marketing Course",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The digital marketing course gave me practical skills that I immediately applied in my job. My campaigns now perform 300% better than before taking this course.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">What Our Students Say</h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our successful graduates have to say about their learning
            experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-[#FF9800]" />
              </div>

              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-[#666666] text-base leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=48&width=48&text=" + testimonial.name.charAt(0)
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-[#333333]">{testimonial.name}</h4>
                    <p className="text-sm text-[#999999]">{testimonial.role}</p>
                    <p className="text-xs text-[#FF9800] font-medium">{testimonial.program}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#666666] mb-6">Ready to join our community of successful learners?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-[#FF9800] text-[#FF9800] hover:bg-[#FF9800] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
