import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Award, ArrowRight } from "lucide-react"

export default function IJMBPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-dunamis-primary">IJMB Program</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master the Interim Joint Matriculation Board examination and secure direct entry admission into 200 level in
          Nigerian universities
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <Image
            src="/images/design-mode/Ijmb.png"
            alt="IJMB Program"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About IJMB Program</h2>
            <p className="text-gray-700 mb-4">
              The Interim Joint Matriculation Board (IJMB) program is a 9-month intensive program designed to prepare
              students for direct entry admission into 200 level in Nigerian universities. It is a nationally recognized
              program and accepted by most universities in Nigeria.
            </p>
            <p className="text-gray-700 mb-4">
              During the program, students will study a combination of subjects relevant to their desired course of
              study in the university. The IJMB examination is conducted annually, and successful candidates are awarded
              IJMB certificates, which they can use to gain admission into 200 level in Nigerian universities.
            </p>
            <p className="text-gray-700">
              This program provides an excellent alternative route to university education for students who may not have
              performed well in UTME or who are seeking admission into competitive courses.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-dunamis-primary" />
              <span className="text-sm">9-month program</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-dunamis-primary" />
              <span className="text-sm">Small class sizes</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-dunamis-primary" />
              <span className="text-sm">5 core subjects</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-dunamis-primary" />
              <span className="text-sm">Direct entry admission</span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Core Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Use of English</li>
              <li>• Mathematics</li>
              <li>• Biology</li>
              <li>• Chemistry</li>
              <li>• Physics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Program Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Foundation: Weeks 1-4</li>
              <li>• Core Subjects: Weeks 5-8</li>
              <li>• Mock Exams: Weeks 9-10</li>
              <li>• Final Prep: Weeks 11-12</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Skip JAMB requirements</li>
              <li>• Direct 200 level entry</li>
              <li>• University recognition</li>
              <li>• Career advancement</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Program Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <CardDescription>Complete IJMB preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">₦199,000</div>
              <ul className="space-y-2 text-sm">
                <li>• Full curriculum access</li>
                <li>• Past questions bank</li>
                <li>• Mock examinations</li>
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
              <div className="text-3xl font-bold mb-4">₦299,000</div>
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

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your IJMB Journey?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of students who have successfully gained university admission through our IJMB program
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/ijmb-platform">
            <Button size="lg" className="bg-dunamis-primary hover:bg-dunamis-dark">
              Access Learning Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/register/ijmb">
            <Button variant="outline" size="lg">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
