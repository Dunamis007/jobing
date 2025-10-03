import { Users, Award, Clock } from "lucide-react"

const features = [
  {
    title: "Personalized Learning",
    description: "AI-powered platform providing a learning experience tailored to your unique goals and pace.",
    icon: Users,
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals and educators with years of real-world experience.",
    icon: Award,
  },
  {
    title: "Flexible Schedule",
    description: "Study at your own convenience with 24/7 access to our platform and recorded sessions.",
    icon: Clock,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Why Choose Dunamis Edtech?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide world-class education with cutting-edge technology and personalized support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-dunamis-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
