import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Award, Clock, Users, BookOpen, CheckCircle2 } from "lucide-react"
import { generateCourseSchema } from "@/lib/course-schema"

export const metadata: Metadata = {
  title: "Coding Bootcamp in Nigeria | Learn Web & App Development Online",
  description:
    "Learn to code from scratch with Dunamis Edtech. Build websites and apps using HTML, CSS, JavaScript, and Python in our online Coding Bootcamp.",
  keywords: ["coding bootcamp Nigeria", "web development course", "learn coding online", "programming course"],
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
    canonical: "https://www.dunamisedtech.com/coding/",
  },
  openGraph: {
    title: "Coding Bootcamp Nigeria | Learn to Code Online",
    description:
      "Join Dunamis Edtech and become a web developer. Learn coding, front-end, and back-end development online.",
    url: "https://www.dunamisedtech.com/coding/",
    type: "course",
    images: [
      {
        url: "https://www.dunamisedtech.com/images/coding-course.jpg",
        width: 1200,
        height: 630,
        alt: "Coding Bootcamp Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding Course in Nigeria | Web Development Bootcamp",
    description: "Master coding and web development with hands-on online training at Dunamis Edtech.",
    images: ["https://www.dunamisedtech.com/images/coding-course.jpg"],
  },
}

const courseSchema = generateCourseSchema({
  name: "Web Development & Full-Stack Coding Bootcamp",
  description:
    "Intensive full-stack web development bootcamp covering frontend, backend, databases, and deployment. Build real-world projects with modern frameworks and tools.",
  duration: "P16W",
  level: "Beginner to Advanced",
  provider: "Dunamis Edtech",
  url: "https://www.dunamisedtech.com/coding/",
})

const modules = [
  {
    level: "Beginner",
    title: "Web Fundamentals & Frontend Basics",
    duration: "5 weeks",
    topics: [
      "HTML5 and Semantic Web",
      "CSS3 and Responsive Design",
      "JavaScript Fundamentals",
      "DOM Manipulation",
      "Version Control with Git",
      "Introduction to React",
    ],
  },
  {
    level: "Intermediate",
    title: "Advanced Frontend & Backend Development",
    duration: "6 weeks",
    topics: [
      "React Advanced Concepts",
      "State Management (Redux)",
      "API Integration and REST",
      "Node.js and Express",
      "Database Design (SQL & NoSQL)",
      "Authentication and Security",
      "Full-Stack Project Development",
    ],
  },
  {
    level: "Advanced",
    title: "Deployment & Professional Development",
    duration: "5 weeks",
    topics: [
      "Cloud Deployment (AWS, Heroku)",
      "DevOps Fundamentals",
      "Testing and Quality Assurance",
      "Performance Optimization",
      "Microservices Architecture",
      "Advanced Project Management",
      "Portfolio and Job Preparation",
    ],
  },
]

const outcomes = [
  "Build responsive, modern web applications",
  "Master frontend frameworks and libraries",
  "Develop robust backend systems",
  "Design and manage databases",
  "Deploy applications to production",
  "Work with modern development tools",
]

export default function CodingPage() {
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
              <Badge className="mb-4 bg-green-600 text-white border-0">
                <Code className="mr-2 h-3 w-3" />
                Web Development
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Master Web Development & Full-Stack Coding
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert-led coding bootcamp teaching modern web development with React, Node.js, and cloud deployment.
                Build real-world projects and launch a development career. 16-week intensive program with hands-on
                mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/coding">
                    Enroll in Coding Bootcamp
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
                  <CardDescription>16 weeks intensive bootcamp</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Expert Mentors</CardTitle>
                  <CardDescription>Learn from seasoned web developers</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Job Ready</CardTitle>
                  <CardDescription>Portfolio-ready projects included</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn in Our Coding Bootcamp</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our intensive coding bootcamp teaches full-stack web development with industry-standard technologies.
                From responsive frontend design to scalable backend systems, you'll gain practical experience building
                real applications deployed to production.
              </p>
              <p className="text-gray-600 text-lg">
                With Nigeria's growing tech industry, skilled full-stack developers are in high demand. Our hands-on
                bootcamp prepares you for immediate entry into web development roles with top tech companies.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coding Bootcamp Learning Outcomes</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coding Bootcamp Curriculum</h2>
              <p className="text-gray-600 text-lg">
                Comprehensive 16-week curriculum covering frontend, backend, databases, and deployment best practices.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Enhance Your Dev Skills</h2>
            <p className="text-gray-600 text-lg mb-8">Combine coding with these complementary programs:</p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Cybersecurity</CardTitle>
                  <CardDescription>Build secure applications with security best practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/cybersecurity/">Learn Cybersecurity</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">AI & Machine Learning</CardTitle>
                  <CardDescription>Add AI capabilities to your web applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ai/">Explore AI Training</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Digital Marketing</CardTitle>
                  <CardDescription>Market your applications and digital products</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/digital-marketing/">Explore Marketing</Link>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enroll in the Coding Bootcamp</h2>
              <p className="text-gray-600 text-lg">
                Choose flexible online learning or intensive on-campus training for web development.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-2 border-dunamis-orange">
                <CardHeader>
                  <Zap className="h-10 w-10 text-dunamis-orange mb-4" />
                  <CardTitle className="text-2xl">Online Bootcamp</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Live coding sessions with instructors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Access to development environments and tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Work at your own pace with flexible timing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Unlimited access to course materials and code</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-orange hover:bg-dunamis-orange/90">
                    <Link href="/register/coding/?mode=online">Start Online Bootcamp</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-dunamis-navy">
                <CardHeader>
                  <Users className="h-10 w-10 text-dunamis-navy mb-4" />
                  <CardTitle className="text-2xl">On-Campus Bootcamp</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>In-person instruction from experienced developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Access to computer lab with modern setups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Collaborate with fellow developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Daily mentorship and pair programming</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-navy hover:bg-dunamis-blue">
                    <Link href="/register/coding/?mode=campus">Start On-Campus Bootcamp</Link>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Web Development Career?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join thousands of developers who've launched successful careers with our intensive coding bootcamp.
                Learn modern technologies and build your portfolio today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/coding">
                    Enroll in Coding Bootcamp
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
