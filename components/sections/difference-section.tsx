import { Sparkles, Users, Award, Headphones } from "lucide-react"

const differences = [
  {
    title: "AI-Powered Learning",
    description:
      "Our proprietary AI technology adapts to your learning style and pace, ensuring you get the most out of every session.",
    icon: Sparkles,
  },
  {
    title: "Industry Experts",
    description: "Learn from professionals actively working in top tech companies and leading institutions worldwide.",
    icon: Users,
  },
  {
    title: "Job-Assured Support",
    description:
      "We help you land your dream job with our hands-on support in resume building, interview prep, and placement assistance.",
    icon: Award,
  },
  {
    title: "Lifetime Access",
    description:
      "Once you enroll, you gain lifetime access to our materials, community, and continuous updates to the curriculum.",
    icon: Headphones,
  },
]

export function DifferenceSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-dunamis-navy text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Dunamis Difference</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            What sets us apart from other online learning platforms
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differences.map((difference) => {
            const Icon = difference.icon
            return (
              <div key={difference.title} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-dunamis-orange p-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{difference.title}</h3>
                <p className="text-gray-300">{difference.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
