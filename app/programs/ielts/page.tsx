import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BookOpen, GraduationCap, Calendar, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "IELTS Program | Dunamis Tutors",
  description: "Learn about our IELTS program and how it can help you achieve your target band score",
}

export default function IELTSPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  IELTS Preparation
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive IELTS preparation program is designed to help you achieve your target band score and
                  open doors to international opportunities.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/ielts">
                    <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
                  </Link>
                  <Link href="/ielts-platform">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Access Platform</Button>
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
                  src="/placeholder.svg?height=400&width=400"
                  alt="IELTS Program"
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
                  About Our IELTS Program
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our IELTS preparation program offers intensive coaching and practice to help students excel in their
                  IELTS examinations and achieve their target band scores for academic or immigration purposes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Comprehensive coverage of all four IELTS skills</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Regular mock examinations under exam conditions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Personalized feedback and improvement strategies</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Expert guidance on exam techniques and time management</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">
                  Program Features
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our program is designed to give you the best preparation for your IELTS examination through a
                  combination of expert teaching and practical exercises.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BookOpen className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Comprehensive Study Materials</h3>
                      <p className="text-sm text-gray-500">Access to up-to-date IELTS resources</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <GraduationCap className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Expert Tutors</h3>
                      <p className="text-sm text-gray-500">Learn from experienced IELTS instructors</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Calendar className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Flexible Schedule</h3>
                      <p className="text-sm text-gray-500">Weekend and weekday classes available</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Small Class Size</h3>
                      <p className="text-sm text-gray-500">Personalized attention for better results</p>
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
              Ready to Achieve Your Target IELTS Score?
            </h2>
            <p className="text-gray-300 md:text-lg/relaxed max-w-2xl mx-auto mb-6">
              Join our IELTS preparation program today and take the first step towards achieving your academic or
              immigration goals.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/register/ielts">
                <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
              </Link>
              <Link href="/ielts-platform">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dunamis-primary">
                  Access Platform
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
