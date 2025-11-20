import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Zap, Award, Clock, Users, BookOpen, CheckCircle2 } from "lucide-react"
import { generateCourseSchema } from "@/lib/course-schema"

export const metadata: Metadata = {
  title: "IELTS Training in Nigeria | Online IELTS Preparation Course",
  description:
    "Prepare for IELTS online with Dunamis Edtech. Get personalized coaching, mock tests, and proven strategies to achieve your target band score.",
  keywords: ["IELTS training Nigeria", "IELTS online course", "IELTS preparation class", "IELTS coaching"],
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
    canonical: "https://www.dunamisedtech.com/ielts/",
  },
  openGraph: {
    title: "IELTS Preparation Online in Nigeria",
    description:
      "Join Dunamis Edtech for expert-led IELTS training with flexible learning options and full test prep support.",
    url: "https://www.dunamisedtech.com/ielts/",
    type: "course",
    images: [
      {
        url: "https://www.dunamisedtech.com/images/ielts-course.jpg",
        width: 1200,
        height: 630,
        alt: "IELTS Training Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IELTS Training Nigeria | Online IELTS Preparation",
    description: "Boost your IELTS score with interactive online coaching and test simulations.",
    images: ["https://www.dunamisedtech.com/images/ielts-course.jpg"],
  },
}

const courseSchema = generateCourseSchema({
  name: "IELTS Exam Preparation Course",
  description:
    "Comprehensive IELTS preparation covering all four skills: Speaking, Writing, Reading, and Listening. Intensive coaching with practice tests and expert feedback.",
  duration: "P8W",
  level: "All Levels",
  provider: "Dunamis Edtech",
  url: "https://www.dunamisedtech.com/ielts/",
})

const modules = [
  {
    level: "Beginner",
    title: "IELTS Fundamentals & Skill Building",
    duration: "2.5 weeks",
    topics: [
      "IELTS Exam Overview and Format",
      "Band Score Interpretation",
      "Reading: Skimming and Scanning",
      "Writing: Basic Essay Structure",
      "Speaking: Pronunciation and Fluency",
      "Listening: Note-Taking Techniques",
    ],
  },
  {
    level: "Intermediate",
    title: "Advanced Skills & Test Strategy",
    duration: "3 weeks",
    topics: [
      "Advanced Reading Strategies",
      "Task 1 & Task 2 Writing Mastery",
      "Speaking Part 1, 2, and 3 Techniques",
      "Listening: Complex Tasks",
      "Time Management Strategies",
      "Common Mistakes and How to Avoid Them",
      "Mock Practice Exams",
    ],
  },
  {
    level: "Advanced",
    title: "Refinement & Band Score Optimization",
    duration: "2.5 weeks",
    topics: [
      "Band 7+ Writing Strategies",
      "Advanced Speaking Fluency",
      "Critical Reading Analysis",
      "Advanced Listening Comprehension",
      "Real Exam Conditions Practice",
      "Performance Feedback and Refinement",
      "Final Exam Preparation",
    ],
  },
]

const outcomes = [
  "Achieve your target IELTS band score",
  "Master all four language skills: Speaking, Writing, Reading, Listening",
  "Develop time management for exam conditions",
  "Learn test-specific strategies and techniques",
  "Practice with authentic exam materials",
  "Receive personalized feedback and coaching",
]

export default function IELTSPage() {
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
              <Badge className="mb-4 bg-orange-600 text-white border-0">
                <Globe className="mr-2 h-3 w-3" />
                English Proficiency
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Master IELTS with Expert Preparation
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Achieve your target IELTS band score with intensive training from certified English experts.
                Comprehensive preparation covering all four skills with proven strategies and mock exams. 8-week
                expert-led program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/ielts">
                    Enroll in IELTS Course
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
                  <CardDescription>8 weeks intensive program</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Certified Trainers</CardTitle>
                  <CardDescription>Expert IELTS instructors</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Proven Results</CardTitle>
                  <CardDescription>90% achieve target scores</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn in Our IELTS Course</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our comprehensive IELTS preparation program teaches you proven strategies to excel in all four language
                skills. With expert instructors and intensive practice, you'll master exam techniques and achieve your
                target band score for university admission or immigration.
              </p>
              <p className="text-gray-600 text-lg">
                Whether preparing for academic or general training, our curriculum covers authentic exam materials and
                real-world English scenarios. Join thousands of successful students who've achieved their IELTS goals
                with Dunamis Edtech.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">IELTS Course Learning Outcomes</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IELTS Training Curriculum</h2>
              <p className="text-gray-600 text-lg">
                8-week structured curriculum progressing through all IELTS skills and strategies.
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

        {/* Related Courses */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Prepare for Your Journey Abroad</h2>
            <p className="text-gray-600 text-lg mb-8">Combine IELTS preparation with these complementary programs:</p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Travel Abroad Program</CardTitle>
                  <CardDescription>Complete guidance for studying and living overseas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/travel-abroad/">Explore Travel Abroad</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Digital Marketing</CardTitle>
                  <CardDescription>Enhance communication skills for professional growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/digital-marketing/">Explore Marketing</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Coding Bootcamp</CardTitle>
                  <CardDescription>Build tech skills alongside English proficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/coding/">Learn Coding</Link>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enroll in the IELTS Course</h2>
              <p className="text-gray-600 text-lg">Choose flexible online or intensive on-campus IELTS preparation.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-2 border-dunamis-orange">
                <CardHeader>
                  <Zap className="h-10 w-10 text-dunamis-orange mb-4" />
                  <CardTitle className="text-2xl">Online IELTS Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Live IELTS training sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Unlimited mock practice exams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Study at your own pace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>24/7 access to study materials</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-orange hover:bg-dunamis-orange/90">
                    <Link href="/register/ielts/?mode=online">Start Online IELTS Training</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-dunamis-navy">
                <CardHeader>
                  <Users className="h-10 w-10 text-dunamis-navy mb-4" />
                  <CardTitle className="text-2xl">On-Campus Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>In-person intensive sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Real exam simulation conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Direct feedback from instructors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Community of test-takers</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-navy hover:bg-dunamis-blue">
                    <Link href="/register/ielts/?mode=campus">Start On-Campus Training</Link>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Achieve Your IELTS Goals?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join thousands of successful students who've achieved their target IELTS scores with our expert
                preparation program. Start your journey today and unlock opportunities worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/ielts">
                    Start IELTS Preparation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
