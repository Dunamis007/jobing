import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Target, Award, ArrowRight, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "JUPEB Program | Dunamis Tutors",
  description:
    "Gain direct entry into 200 level in Nigerian universities through our comprehensive JUPEB program. In-person classes with expert tutors.",
  keywords: ["JUPEB program", "direct entry", "university admission", "Nigeria education", "A-levels equivalent"],
}

export default function JUPEBPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-dunamis-accent text-white">JUPEB Program</Badge>
                  <Badge variant="outline" className="border-white text-white">
                    <MapPin className="h-3 w-3 mr-1" />
                    In-Person Classes
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  JUPEB Program - Direct Entry to 200 Level
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Gain direct entry into 200 level in Nigerian universities through our comprehensive JUPEB program.
                  Skip JAMB and secure your university admission with our proven in-person training.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/jupeb">
                    <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                      Register Now - ₦15,000
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-dunamis-primary bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=JUPEB+Program"
                  alt="JUPEB Program"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Program Overview</h2>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Everything you need to know about our JUPEB program
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">12 months intensive program</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">In-person classes only</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Subjects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">3-4 A-level subjects</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">98% admission rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose JUPEB?</h2>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Advantages of the JUPEB program over traditional JAMB route
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Direct Entry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Skip JAMB and gain direct entry into 200 level of any Nigerian university
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Save Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Complete your degree one year earlier by starting from 200 level</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Higher Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    98% of our JUPEB students gain admission compared to 30% JAMB success rate
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Better Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">A-level standard education better prepares you for university studies</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Small Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Personalized attention with small class sizes for better learning</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Guaranteed Admission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">High probability of admission with good grades in JUPEB examinations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Subject Combinations */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subject Combinations</h2>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Choose your subjects based on your intended course of study
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Science Combination</CardTitle>
                  <CardDescription>For Medicine, Engineering, and Science courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Physics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Chemistry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Biology (Optional)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Arts Combination</CardTitle>
                  <CardDescription>For Law, Mass Communication, and Arts courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Literature in English</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Government</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Economics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>CRS/History (Optional)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commercial Combination</CardTitle>
                  <CardDescription>For Business Administration and related courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Economics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Government</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Accounting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Mathematics (Optional)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mixed Combination</CardTitle>
                  <CardDescription>For flexible course options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Economics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Government</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Physics/Chemistry</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Secure Your University Admission?
              </h2>
              <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our JUPEB program and guarantee your direct entry into 200 level of any Nigerian university.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                <p className="text-white text-sm mb-2">Registration Fee</p>
                <p className="text-3xl font-bold text-dunamis-accent">₦15,000</p>
                <p className="text-white/80 text-sm">In-person classes only</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="/register/jupeb">
                  <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                    Register Now - ₦15,000
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dunamis-primary bg-transparent"
                >
                  Contact Us: 07032090178
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
