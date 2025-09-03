import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, GraduationCap, Calendar, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "JUPEB Program | Dunamis Tutors",
  description: "Learn about our JUPEB program and how it can help you gain direct entry into universities",
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
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  JUPEB Program
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Joint Universities Preliminary Examinations Board (JUPEB) program is a one-year preparatory
                  program for students seeking direct entry admission into 200 level in Nigerian universities.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/jupeb-platform">
                    <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                      Access Learning Platform
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/register/jupeb">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-dunamis-primary bg-transparent"
                    >
                      Register Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://i.ibb.co/23BMrQWD/jupeb.png"
                  alt="JUPEB Program"
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
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">About JUPEB</h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  JUPEB is a national examination body approved by the Federal Government of Nigeria to serve as an
                  advanced level examination body for students seeking direct entry admission into Nigerian and foreign
                  universities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Gain direct entry into 200 level in Nigerian universities</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">One-year intensive program with comprehensive curriculum</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Taught by experienced lecturers and educators</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">High success rate for university admissions</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">
                  Program Structure
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our JUPEB program is designed to prepare students thoroughly for the JUPEB examinations through
                  intensive coursework, regular assessments, and mock examinations.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BookOpen className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Comprehensive Curriculum</h3>
                      <p className="text-sm text-gray-500">Covers all required subjects for your chosen course</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <GraduationCap className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Experienced Tutors</h3>
                      <p className="text-sm text-gray-500">Learn from subject matter experts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Calendar className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Flexible Schedule</h3>
                      <p className="text-sm text-gray-500">Choose between weekday or weekend classes</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Small Class Size</h3>
                      <p className="text-sm text-gray-500">Personalized attention for better learning</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Overview */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl mb-4">
                Core Subjects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our JUPEB program covers five essential subjects designed for Arts and Social Sciences students
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Literature-in-English", description: "Comprehensive study of prose, poetry, and drama" },
                { name: "Government", description: "Political science and governance systems" },
                { name: "Economics", description: "Micro and macroeconomic principles" },
                { name: "Christian Religious Studies", description: "Biblical studies and Christian theology" },
                { name: "General Paper", description: "Critical thinking and current affairs" },
              ].map((subject, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{subject.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl mb-4">
                Program Pricing
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the plan that best fits your learning needs and budget
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Free Trial</CardTitle>
                  <CardDescription>Get started with basic access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₦0</div>
                  <ul className="space-y-2 text-sm">
                    <li>• 2 weeks access</li>
                    <li>• Basic materials</li>
                    <li>• Community access</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-dunamis-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle>Core Program</CardTitle>
                  <CardDescription>Complete JUPEB preparation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₦179,000</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Full curriculum access</li>
                    <li>• Past questions bank</li>
                    <li>• MCQ practice tests</li>
                    <li>• WhatsApp support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Premium support & mentorship</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₦259,000</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Everything in Core</li>
                    <li>• 1-on-1 tutoring</li>
                    <li>• University guidance</li>
                    <li>• Priority support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dunamis-primary py-12">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl mb-4">
              Ready to Start Your JUPEB Journey?
            </h2>
            <p className="text-gray-300 md:text-lg/relaxed max-w-2xl mx-auto mb-6">
              Join our JUPEB program today and take the first step towards securing your university admission through
              direct entry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jupeb-platform">
                <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                  Access Learning Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register/jupeb">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dunamis-primary bg-transparent"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
