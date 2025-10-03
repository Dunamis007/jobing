import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Join thousands of successful students who have advanced their careers with Dunamis Edtech. Start your
            learning journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0">
              <Link href="/register">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/programs/ai-tutoring">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
