import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Laptop, Users, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Coding Program | Dunamis Tutors",
  description: "Learn about our Coding program and how it can help you build a career in technology",
}

export default function CodingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Coding Program
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn to code and build real-world applications with our comprehensive coding program designed for
                  beginners and intermediate developers.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/coding">
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
                  src="https://i.ibb.co/4r3ghzG/coding.png"
                  alt="Coding Program"
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
                  About Our Coding Program
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our Coding program is designed to equip you with the skills and knowledge needed to become a
                  proficient developer. From web development to mobile apps, we cover a wide range of programming
                  disciplines.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Hands-on coding projects with real-world applications</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Mentorship from industry professionals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Portfolio development to showcase your skills</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Job-ready skills and career guidance</p>
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
                      <Code className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Web Development</h3>
                      <p className="text-sm text-gray-500">HTML, CSS, JavaScript, and modern frameworks</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Laptop className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Mobile Development</h3>
                      <p className="text-sm text-gray-500">React Native and Flutter for cross-platform apps</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BarChart className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Data Science</h3>
                      <p className="text-sm text-gray-500">Python programming and data analysis</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Collaborative Learning</h3>
                      <p className="text-sm text-gray-500">Work on team projects with other students</p>
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
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-gray-300 md:text-lg/relaxed max-w-2xl mx-auto mb-6">
              Join our Coding program today and take the first step towards becoming a skilled developer.
            </p>
            <Link href="/register/coding">
              <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
