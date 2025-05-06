import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  LineChart,
  Code,
  PlaneTakeoff,
  Brain,
  CheckCircle,
  Users,
  Trophy,
  Zap,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#0e3b62]/10 px-3 py-1 text-sm text-[#0e3b62]">
                  Personalized Learning Experience
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e3b62]">
                  Unlock Your Academic Potential with Dunamis Tutors
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our NeuroPulse™ system adapts to your learning style, academic goals, and personal preferences to
                  create a truly personalized educational journey.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button className="bg-[#0e3b62] hover:bg-[#1a5c96]">Get Started Today</Button>
                  </Link>
                  <Link href="/programs">
                    <Button variant="outline">Explore Programs</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Student+Dashboard"
                  alt="Dunamis Tutors Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover border shadow-md"
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Trophy className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">EduCoins Earned</p>
                      <p className="text-lg font-bold">2,450</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-white" id="programs">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0e3b62]/10 px-3 py-1 text-sm text-[#0e3b62]">
                  Our Programs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e3b62]">
                  Comprehensive Learning Programs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our wide range of programs designed to help you achieve your academic and career goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-gray-200 hover:border-[#0e3b62] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-[#0e3b62]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e3b62]">IJMB Program</h3>
                      <p className="text-sm text-gray-500">Direct entry into 200 level</p>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Comprehensive preparation for Interim Joint Matriculation Board examinations with expert guidance
                    and personalized study plans.
                  </p>
                  <Link href="/register/ijmb">
                    <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 hover:border-[#0e3b62] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-[#0e3b62]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e3b62]">JUPEB Program</h3>
                      <p className="text-sm text-gray-500">Fast-track university admission</p>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Comprehensive preparation for Joint Universities Preliminary Examinations Board with structured
                    learning paths and practice tests.
                  </p>
                  <Link href="/register/jupeb">
                    <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 hover:border-[#0e3b62] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-[#0e3b62]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e3b62]">IELTS Preparation</h3>
                      <p className="text-sm text-gray-500">Achieve your target score</p>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Comprehensive preparation for IELTS examinations with personalized study plans and practice tests.
                  </p>
                  <Link href="/register/ielts">
                    <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 hover:border-[#0e3b62] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-[#0e3b62]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e3b62]">Coding Program</h3>
                      <p className="text-sm text-gray-500">Build tech skills</p>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Learn programming fundamentals and advanced concepts with project-based learning and mentor support.
                  </p>
                  <Link href="/register/coding">
                    <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 hover:border-[#0e3b62] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-[#0e3b62]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e3b62]">Digital Marketing</h3>
                      <p className="text-sm text-gray-500">Industry-relevant skills</p>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Learn in-demand digital marketing skills with hands-on projects, industry certifications, and
                    personalized coaching.
                  </p>
                  <Link href="/register/digital-marketing">
                    <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#0e3b62] shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <PlaneTakeoff className="h-6 w-6 text-[#0e3b62]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e3b62]">Travel Abroad Program</h3>
                      <p className="text-sm text-gray-500">Study abroad opportunities</p>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Comprehensive guidance for studying abroad, including university selection, application assistance,
                    and visa support.
                  </p>
                  <Link href="/register/travel-abroad">
                    <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50" id="how-it-works">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0e3b62]/10 px-3 py-1 text-sm text-[#0e3b62]">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e3b62]">
                  Your Learning Journey
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our simple 4-step process to get you started on your personalized learning path.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0e3b62] text-white">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Register</h3>
                <p className="mt-2 text-gray-500">
                  Create your account and complete your profile with your academic background and learning preferences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0e3b62] text-white">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Assessment</h3>
                <p className="mt-2 text-gray-500">
                  Take our comprehensive assessment to help us understand your learning style and current knowledge
                  level.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0e3b62] text-white">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Personalized Plan</h3>
                <p className="mt-2 text-gray-500">
                  Receive your customized learning plan tailored to your goals, learning style, and schedule.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0e3b62] text-white">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Start Learning</h3>
                <p className="mt-2 text-gray-500">
                  Begin your learning journey with interactive lessons, quizzes, and real-time feedback from tutors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NeuroPulse Section */}
        <section className="py-16 bg-white" id="neuropulse">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#0e3b62]/10 px-3 py-1 text-sm text-[#0e3b62]">
                  NeuroPulse™ Technology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e3b62]">
                  Adaptive Learning for Better Results
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our proprietary NeuroPulse™ system adapts to your unique learning style, preferences, and goals to
                  create a truly personalized educational experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Personalized learning paths based on your cognitive profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Adaptive content that adjusts to your progress and performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Real-time feedback and progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Gamified learning experience with EduCoins and challenges</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/neuropulse">
                    <Button className="bg-[#0e3b62] hover:bg-[#1a5c96]">Learn More About NeuroPulse</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=NeuroPulse+Dashboard"
                  alt="NeuroPulse Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover border shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0e3b62]/10 px-3 py-1 text-sm text-[#0e3b62]">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e3b62]">
                  Why Choose Dunamis Tutors
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the unique features that make our platform the ideal choice for your educational journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-[#0e3b62]/10 p-3">
                  <Brain className="h-8 w-8 text-[#0e3b62]" />
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Personalized Learning</h3>
                <p className="mt-2 text-gray-500">
                  Tailored learning experiences based on your unique cognitive profile and learning style.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-[#0e3b62]/10 p-3">
                  <Users className="h-8 w-8 text-[#0e3b62]" />
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Study Clans</h3>
                <p className="mt-2 text-gray-500">
                  Join collaborative learning groups to study with peers who share similar goals and interests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-[#0e3b62]/10 p-3">
                  <Trophy className="h-8 w-8 text-[#0e3b62]" />
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Gamified Learning</h3>
                <p className="mt-2 text-gray-500">
                  Earn EduCoins, complete challenges, and track your progress on our interactive leaderboards.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-[#0e3b62]/10 p-3">
                  <GraduationCap className="h-8 w-8 text-[#0e3b62]" />
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Expert Tutors</h3>
                <p className="mt-2 text-gray-500">
                  Learn from experienced tutors who provide personalized guidance and support throughout your journey.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-[#0e3b62]/10 p-3">
                  <PlaneTakeoff className="h-8 w-8 text-[#0e3b62]" />
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Study Abroad Support</h3>
                <p className="mt-2 text-gray-500">
                  Comprehensive guidance for international education opportunities, from application to visa assistance.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-[#0e3b62]/10 p-3">
                  <Zap className="h-8 w-8 text-[#0e3b62]" />
                </div>
                <h3 className="text-xl font-bold text-[#0e3b62]">Adaptive Assessments</h3>
                <p className="mt-2 text-gray-500">
                  Regular assessments that adapt to your progress, identifying strengths and areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0e3b62]/10 px-3 py-1 text-sm text-[#0e3b62]">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e3b62]">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our students who have transformed their learning experience with Dunamis Tutors.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="ijmb" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                  <TabsTrigger value="ijmb">IJMB</TabsTrigger>
                  <TabsTrigger value="jupeb">JUPEB</TabsTrigger>
                  <TabsTrigger value="ielts">IELTS</TabsTrigger>
                  <TabsTrigger value="coding">Coding</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="abroad">Study Abroad</TabsTrigger>
                </TabsList>
                <TabsContent value="ijmb" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">AO</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Adebayo Ogunlesi</h3>
                              <p className="text-sm text-gray-500">IJMB Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The personalized learning approach of Dunamis Tutors helped me secure direct entry into 200
                            level at my dream university. The NeuroPulse system adapted to my learning style perfectly."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">FI</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Fatima Ibrahim</h3>
                              <p className="text-sm text-gray-500">IJMB Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "I struggled with traditional learning methods, but the gamified approach and study clans at
                            Dunamis Tutors made learning enjoyable. I earned enough EduCoins to get a scholarship!"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="jupeb" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">CO</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Chioma Okafor</h3>
                              <p className="text-sm text-gray-500">JUPEB Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The JUPEB program at Dunamis Tutors is exceptional. The structured learning paths and
                            practice tests helped me score high marks and secure admission to study Medicine."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">TE</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Tunde Ekwueme</h3>
                              <p className="text-sm text-gray-500">JUPEB Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The adaptive assessments and personalized feedback from tutors helped me identify my weak
                            areas and improve significantly. I'm now confidently preparing for university."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="ielts" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">JA</span>
                            </div>
                            <div>
                              <h3 className="font-bold">John Adewale</h3>
                              <p className="text-sm text-gray-500">IELTS Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "I achieved a band score of 8.0 in IELTS after just 3 months of preparation with Dunamis
                            Tutors. The personalized study plan and practice tests were incredibly helpful."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">MK</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Mary Kalu</h3>
                              <p className="text-sm text-gray-500">IELTS Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The speaking practice sessions and writing feedback were invaluable. I improved my IELTS
                            score from 6.0 to 7.5 and secured admission to a UK university."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="coding" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">DO</span>
                            </div>
                            <div>
                              <h3 className="font-bold">David Okonkwo</h3>
                              <p className="text-sm text-gray-500">Coding Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The project-based learning approach in the coding program helped me build a strong
                            portfolio. I landed a junior developer role within 6 months of starting the program."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">SA</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Sarah Adeyemi</h3>
                              <p className="text-sm text-gray-500">Coding Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "As someone with no prior coding experience, I was amazed at how quickly I progressed. The
                            mentor support and interactive lessons made learning to code accessible and fun."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="marketing" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">BI</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Blessing Igwe</h3>
                              <p className="text-sm text-gray-500">Digital Marketing Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The digital marketing program provided practical skills that I immediately applied to my
                            small business. My online presence has grown significantly, and sales have increased by
                            70%."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">KA</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Kingsley Abiola</h3>
                              <p className="text-sm text-gray-500">Digital Marketing Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The industry certifications and hands-on projects in the digital marketing program helped
                            me transition from a traditional marketing role to a digital marketing specialist position."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="abroad" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">NU</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Ngozi Uzoma</h3>
                              <p className="text-sm text-gray-500">Study Abroad Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The comprehensive guidance from university selection to visa application made my study
                            abroad journey smooth. I'm now studying at a top university in Canada thanks to Dunamis
                            Tutors."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-[#0e3b62]">YM</span>
                            </div>
                            <div>
                              <h3 className="font-bold">Yusuf Mohammed</h3>
                              <p className="text-sm text-gray-500">Study Abroad Student</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            "The scholarship guidance and application support helped me secure a fully funded
                            scholarship to study in the UK. The travel abroad program is truly life-changing."
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0e3b62]" id="cta">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Learning Experience?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have achieved their academic goals with Dunamis Tutors.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button className="bg-white text-[#0e3b62] hover:bg-gray-100">Get Started Today</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="text-white border-white hover:bg-[#0e3b62]/20">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
