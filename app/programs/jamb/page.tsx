import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Target, Award, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "JAMB Preparation Program | Dunamis Tutors",
  description:
    "Excel in your UTME examinations with our comprehensive JAMB preparation program. Expert tutors, proven strategies, and guaranteed results.",
  keywords: ["JAMB preparation", "UTME", "university entrance", "Nigeria education", "exam preparation"],
}

export default function JAMBPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-dunamis-accent text-white">JAMB Preparation</Badge>
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Excel in Your JAMB UTME Examinations
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive preparation program designed to help you achieve excellent scores in your JAMB UTME and
                  secure admission into your dream university.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/jamb">
                    <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                      Register Now - ₦25,000
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
                  src="/placeholder.svg?height=400&width=400&text=JAMB+Preparation"
                  alt="JAMB Preparation Program"
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
                Everything you need to excel in your JAMB UTME examinations
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">3-6 months intensive preparation</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Class Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Small classes (15-20 students)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Subjects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">All JAMB subjects covered</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">95% pass rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Curriculum</h2>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Comprehensive coverage of all JAMB subjects
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Core Subjects</CardTitle>
                  <CardDescription>Essential subjects for all candidates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>English Language</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>General Studies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Science Subjects</CardTitle>
                  <CardDescription>For science-oriented courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
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
                      <span>Biology</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Arts Subjects</CardTitle>
                  <CardDescription>For arts and humanities courses</CardDescription>
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
                      <span>History</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commercial Subjects</CardTitle>
                  <CardDescription>For business and commercial courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Economics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Commerce</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Accounting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Our JAMB Program?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Targeted Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Focused preparation based on JAMB syllabus and past questions analysis
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Expert Tutors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn from experienced tutors with proven track records in JAMB preparation
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-dunamis-primary mb-2" />
                  <CardTitle>Practice Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regular mock exams and practice tests to simulate the actual JAMB experience
                  </p>
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
                Ready to Excel in Your JAMB?
              </h2>
              <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of successful students who achieved their university dreams with our JAMB preparation
                program.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="/register/jamb">
                  <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                    Register Now - ₦25,000
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dunamis-primary bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
