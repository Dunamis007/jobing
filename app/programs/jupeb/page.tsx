import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GraduationCap, Award, Clock, Users, BookOpen, CheckCircle2, MapPin } from "lucide-react"
import { generateCourseSchema } from "@/lib/course-schema"

export const metadata: Metadata = {
  title: "JUPEB Program in Nigeria | Gain Direct University Admission",
  description:
    "Register for JUPEB at Dunamis Edtech and gain direct entry into your preferred university. Enjoy quality lectures and full academic support.",
  keywords: ["JUPEB program Nigeria", "direct entry admission", "JUPEB registration", "JUPEB online"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://www.dunamisedtech.com"),
  alternates: {
    canonical: "https://www.dunamisedtech.com/jupeb/",
  },
  openGraph: {
    title: "JUPEB Program Nigeria | Direct University Admission",
    description: "Enroll in the JUPEB program at Dunamis Edtech and secure your university admission with ease.",
    url: "https://www.dunamisedtech.com/jupeb/",
    type: "website",
    images: [
      {
        url: "https://www.dunamisedtech.com/images/jupeb-course.jpg",
        width: 1200,
        height: 630,
        alt: "JUPEB Program Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JUPEB Program | Direct Entry to University",
    description: "Complete your JUPEB program online and qualify for direct entry admission in Nigeria.",
    images: ["https://www.dunamisedtech.com/images/jupeb-course.jpg"],
  },
}

const courseSchema = generateCourseSchema({
  name: "JUPEB (Joint Universities Preliminary Examinations Board) Program",
  description:
    "Comprehensive JUPEB preparation program for direct entry into 200 level of Nigerian universities. A-level equivalent curriculum with intensive coaching.",
  duration: "P36W",
  level: "O'Level Graduates",
  provider: "Dunamis Edtech",
  url: "https://www.dunamisedtech.com/jupeb/",
})

const modules = [
  {
    level: "First Term",
    title: "Foundation & Core Subjects",
    duration: "12 weeks",
    topics: [
      "Mathematics A & B Fundamentals",
      "Physics: Mechanics and Waves",
      "Chemistry: Atomic Structure and Bonding",
      "English Language Skills",
      "Study Techniques and Time Management",
      "Assessment and Progress Tracking",
    ],
  },
  {
    level: "Second Term",
    title: "Advanced Concepts & Specialization",
    duration: "12 weeks",
    topics: [
      "Advanced Mathematics Applications",
      "Physics: Electricity and Modern Physics",
      "Chemistry: Organic and Physical Chemistry",
      "Subject Electives Selection",
      "Laboratory Practice and Practicals",
      "Mock Examinations and Feedback",
      "Exam Technique Development",
    ],
  },
  {
    level: "Third Term",
    title: "Mastery & Exam Readiness",
    duration: "12 weeks",
    topics: [
      "Comprehensive Subject Review",
      "Advanced Problem-Solving",
      "Past Papers and Practice",
      "Exam Strategy and Time Management",
      "Final Revision and Consolidation",
      "Mock Final Examinations",
      "University Admission Preparation",
    ],
  },
]

const outcomes = [
  "Master A-level equivalent curriculum",
  "Gain direct entry into 200 level",
  "Develop advanced academic skills",
  "Achieve university admission",
  "Build strong foundation for upper-level studies",
  "Prepare for professional careers",
]

export default function JUPEBPage() {
  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-dunamis-navy via-dunamis-blue to-dunamis-navy text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-indigo-600 text-white border-0">
                <GraduationCap className="mr-2 h-3 w-3" />
                University Admission
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                JUPEB Program: Direct University Entry
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert-led JUPEB preparation for direct admission to 200 level in Nigerian universities. Skip JAMB with
                our A-level equivalent program. 98% admission success rate with intensive on-campus training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/jupeb">
                    Enroll in JUPEB Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Get More Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3 mb-12">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Duration</CardTitle>
                  <CardDescription>9 months intensive program</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>On-Campus Only</CardTitle>
                  <CardDescription>Intensive in-person training</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Success Rate</CardTitle>
                  <CardDescription>98% university admission rate</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the JUPEB Program?</h2>
              <p className="text-gray-600 text-lg mb-6">
                The Joint Universities Preliminary Examinations Board (JUPEB) program is an A-level equivalent program
                that provides direct entry into 200 level of Nigerian universities. Unlike JAMB, JUPEB guarantees direct
                admission with good grades, helping you start your university education one year earlier.
              </p>
              <p className="text-gray-600 text-lg">
                Our expert JUPEB preparation program provides intensive coaching across all required subjects. With
                structured curriculum, expert tutors, and proven teaching methods, we've achieved a 98% university
                admission success rate for our students.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">JUPEB Program Learning Outcomes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-dunamis-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">JUPEB Training Curriculum</h2>
              <p className="text-gray-600 text-lg">
                9-month structured program covering A-level subjects with progressive complexity and depth.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {modules.map((module, index) => (
                <Card key={index} className="border-t-4 border-t-dunamis-orange">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{module.level}</Badge>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 text-dunamis-orange flex-shrink-0 mt-0.5" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Alternative University Entry Programs</h2>
            <p className="text-gray-600 text-lg mb-8">Explore other paths to university admission:</p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">JAMB Program</CardTitle>
                  <CardDescription>Traditional UTME preparation for university entry</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/jamb/">Explore JAMB</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">IJMB Program</CardTitle>
                  <CardDescription>Interim Joint Matriculation Board direct entry</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ijmb/">Explore IJMB</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Travel Abroad</CardTitle>
                  <CardDescription>International university admission assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/travel-abroad/">Explore Travel Abroad</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enrollment Options */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enroll in the JUPEB Program</h2>
              <p className="text-gray-600 text-lg">
                Our JUPEB program is offered as intensive on-campus training only for maximum effectiveness.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-dunamis-orange">
                <CardHeader>
                  <Users className="h-10 w-10 text-dunamis-orange mb-4" />
                  <CardTitle className="text-2xl">On-Campus JUPEB Training</CardTitle>
                  <CardDescription className="text-base">Intensive 9-month residential program</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Full-time in-person instruction from expert tutors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Access to science laboratories and facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Regular assessments and performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>University application and admission support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Small class sizes for personalized attention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Accommodation available (inquire for details)</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-orange hover:bg-dunamis-orange/90" size="lg">
                    <Link href="/register/jupeb/?mode=campus">
                      Start JUPEB Program Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-dunamis-navy to-dunamis-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your University Admission?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join our JUPEB program and guarantee your direct entry into 200 level of any Nigerian university. With
                our proven 98% success rate, your university dreams are within reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/jupeb">
                    Enroll in JUPEB Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Contact Admissions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
