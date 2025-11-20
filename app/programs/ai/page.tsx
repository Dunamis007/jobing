import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Zap, Award, Clock, Users, BookOpen, CheckCircle2 } from "lucide-react"
import { generateCourseSchema } from "@/lib/course-schema"

export const metadata: Metadata = {
  title: "Artificial Intelligence (AI) Course in Nigeria | Learn AI & Machine Learning",
  description:
    "Master Artificial Intelligence and Machine Learning online in Nigeria. Learn Python, data analysis, and model building with expert instructors at Dunamis Edtech.",
  keywords: [
    "AI training Nigeria",
    "artificial intelligence course online",
    "machine learning course Nigeria",
    "learn AI",
  ],
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
    canonical: "https://www.dunamisedtech.com/ai/",
  },
  openGraph: {
    title: "Learn AI & Machine Learning Online in Nigeria",
    description: "Join Dunamis Edtech to master AI and Machine Learning through hands-on training and mentorship.",
    url: "https://www.dunamisedtech.com/ai/",
    type: "website", // Changed from "course" to valid "website" type
    images: [
      {
        url: "https://www.dunamisedtech.com/images/ai-course.jpg",
        width: 1200,
        height: 630,
        alt: "AI and Machine Learning Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Course in Nigeria | Machine Learning Training Online",
    description: "Learn AI and Machine Learning with real projects and expert guidance at Dunamis Edtech.",
    images: ["https://www.dunamisedtech.com/images/ai-course.jpg"],
  },
}

const courseSchema = generateCourseSchema({
  name: "Artificial Intelligence & Machine Learning Course",
  description:
    "Master artificial intelligence and machine learning with hands-on projects, expert instruction, and industry-standard tools. Learn neural networks, deep learning, and AI ethics with practical applications.",
  duration: "P12W",
  level: "Beginner to Advanced",
  provider: "Dunamis Edtech",
  url: "https://www.dunamisedtech.com/ai/",
})

const modules = [
  {
    level: "Beginner",
    title: "AI Fundamentals & Python Essentials",
    duration: "4 weeks",
    topics: [
      "Introduction to AI and Machine Learning",
      "Python for Data Science",
      "Statistics and Probability",
      "Data Collection and Preprocessing",
      "Introduction to Neural Networks",
      "Basic Classification and Regression",
    ],
  },
  {
    level: "Intermediate",
    title: "Advanced Machine Learning",
    duration: "4 weeks",
    topics: [
      "Deep Learning and Neural Networks",
      "Supervised Learning Algorithms",
      "Unsupervised Learning Techniques",
      "Natural Language Processing (NLP)",
      "Computer Vision Basics",
      "Model Evaluation and Optimization",
      "TensorFlow and PyTorch Libraries",
    ],
  },
  {
    level: "Advanced",
    title: "Specialization & Real-World Applications",
    duration: "4 weeks",
    topics: [
      "Advanced Neural Network Architectures",
      "Reinforcement Learning",
      "Generative AI and GPT Models",
      "AI Ethics and Responsible AI",
      "Production Machine Learning",
      "Capstone Project Development",
      "Career Preparation and Job Placement",
    ],
  },
]

const outcomes = [
  "Build and train neural networks from scratch",
  "Apply machine learning algorithms to real-world problems",
  "Develop NLP and computer vision applications",
  "Work with industry-standard AI frameworks",
  "Implement ethical AI practices",
  "Deploy ML models to production",
]

export default function AIPage() {
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
              <Badge className="mb-4 bg-blue-600 text-white border-0">
                <Brain className="mr-2 h-3 w-3" />
                Artificial Intelligence
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Master Artificial Intelligence & Machine Learning
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert-led AI training covering neural networks, deep learning, and real-world applications. Build
                intelligent systems that solve complex problems. 12-week intensive program with hands-on projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/ai">
                    Enroll in AI Course
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
                  <CardDescription>12 weeks intensive program</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Expert Instruction</CardTitle>
                  <CardDescription>Learn from AI industry professionals</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Certification</CardTitle>
                  <CardDescription>Industry-recognized AI certificate</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn in Our AI Course</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our comprehensive AI training program teaches you to build intelligent systems that learn from data and
                make predictions. From fundamental concepts to cutting-edge neural networks, you'll gain hands-on
                experience with the tools and techniques used by leading AI professionals worldwide.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're transitioning to AI or advancing your tech career, our expert-led course provides the
                practical skills needed for high-demand AI roles in Nigeria and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Course Learning Outcomes</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Training Curriculum</h2>
              <p className="text-gray-600 text-lg">
                Structured curriculum progressing from AI fundamentals to advanced deep learning and real-world
                applications.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Complementary Technical Courses</h2>
            <p className="text-gray-600 text-lg mb-8">Enhance your AI skills with these related technical programs:</p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Data Analytics</CardTitle>
                  <CardDescription>
                    Master data preparation and visualization skills essential for AI projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/data-analytics/">Explore Data Analytics</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Coding Bootcamp</CardTitle>
                  <CardDescription>Build strong programming foundations needed for AI development</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/coding/">Explore Coding</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Cybersecurity</CardTitle>
                  <CardDescription>Learn to secure AI systems and protect sensitive data</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/cybersecurity/">Explore Cybersecurity</Link>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Enroll in the AI Course</h2>
              <p className="text-gray-600 text-lg">
                Choose between flexible online learning or hands-on on-campus training.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-2 border-dunamis-orange">
                <CardHeader>
                  <Zap className="h-10 w-10 text-dunamis-orange mb-4" />
                  <CardTitle className="text-2xl">Online AI Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Live interactive AI training sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Access to AI tools and development environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Flexible schedule to study at your pace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>24/7 access to course materials and resources</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-orange hover:bg-dunamis-orange/90">
                    <Link href="/register/ai/?mode=online">Start Online AI Course</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-dunamis-navy">
                <CardHeader>
                  <Users className="h-10 w-10 text-dunamis-navy mb-4" />
                  <CardTitle className="text-2xl">On-Campus AI Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>In-person instruction from AI experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Access to AI lab with high-performance computers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Network with peers and industry professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Immediate hands-on practice and mentorship</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-navy hover:bg-dunamis-blue">
                    <Link href="/register/ai/?mode=campus">Start On-Campus AI Course</Link>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Master Artificial Intelligence?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join thousands of students launching AI careers with expert-led training from Dunamis Edtech. Enroll
                today and start building intelligent systems tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/ai">
                    Enroll in AI Course Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Contact Us for More Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
