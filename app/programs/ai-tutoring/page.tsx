import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Brain, Laptop, Users, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Tutoring Program | Dunamis Tutors",
  description: "Learn about our AI Tutoring program and how it can help you master artificial intelligence",
}

export default function AITutoringPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  AI Tutoring Program
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master the art and science of artificial intelligence with our comprehensive AI tutoring program
                  designed for beginners and professionals alike.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/ai-tutoring">
                    <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
                  </Link>
                  <Link href="#program-details">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-dunamis-primary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://i.ibb.co/RnSJBND/Ai-tutoring.png"
                  alt="AI Tutoring Program"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="program-details" className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">
                  About Our AI Tutoring Program
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our AI Tutoring program is designed to equip you with the skills and knowledge needed to understand
                  and work with artificial intelligence technologies. From basic concepts to advanced applications, we
                  cover all aspects of AI.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Personalized AI learning paths tailored to your goals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">One-on-one sessions with AI experts and educators</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Hands-on projects using cutting-edge AI tools</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Progress tracking and performance analytics</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">
                  Program Features
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our program is designed to give you practical skills that you can immediately apply in the real world.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Brain className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">AI Fundamentals</h3>
                      <p className="text-sm text-gray-500">Introduction to AI concepts and applications</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Laptop className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Practical Training</h3>
                      <p className="text-sm text-gray-500">Hands-on experience with AI tools</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BarChart className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Data Analysis</h3>
                      <p className="text-sm text-gray-500">Learn to work with data for AI applications</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Expert Mentors</h3>
                      <p className="text-sm text-gray-500">Learn from AI professionals</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dunamis-primary py-12">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl mb-4">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-gray-300 md:text-lg/relaxed max-w-2xl mx-auto mb-6">
              Join our AI Tutoring program today and take the first step towards mastering artificial intelligence.
            </p>
            <Link href="/register/ai-tutoring">
              <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
