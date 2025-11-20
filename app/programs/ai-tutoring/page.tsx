import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Brain,
  Laptop,
  Users,
  BarChart,
  Download,
  Play,
  Clock,
  Globe,
  Star,
  Award,
  ExternalLink,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Tutoring Program | Dunamis Tutors",
  description: "Learn about our AI Tutoring program and how it can help you master artificial intelligence",
}

export default function AITutoringPage() {
  const cohorts = [
    {
      timezone: "Nigeria (WAT)",
      time: "6:00 PM - 8:00 PM",
      days: "Mon, Wed, Fri",
      startDate: "March 15, 2024",
      spotsLeft: 12,
    },
    {
      timezone: "UK (GMT)",
      time: "7:00 PM - 9:00 PM",
      days: "Tue, Thu, Sat",
      startDate: "March 20, 2024",
      spotsLeft: 8,
    },
    {
      timezone: "US Eastern (EST)",
      time: "8:00 PM - 10:00 PM",
      days: "Mon, Wed, Fri",
      startDate: "March 25, 2024",
      spotsLeft: 15,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      content:
        "The AI Tutoring program transformed my understanding of machine learning. The personalized approach made complex concepts easy to grasp.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "Excellent curriculum and supportive instructors. I landed my dream job in AI after completing this program.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Amara Okafor",
      role: "AI Researcher",
      content: "The hands-on projects and real-world applications made this the best AI learning experience I've had.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section with Video */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-dunamis-accent text-white">
                    <Award className="h-4 w-4 mr-1" />
                    Curriculum Completion Badge
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  AI Tutoring Program
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master the art and science of artificial intelligence with our comprehensive AI tutoring program
                  designed for beginners and professionals alike.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Join Free Track</Button>
                  <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                    Apply to Full Bootcamp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-dunamis-primary"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Syllabus
                  </Button>
                </div>
                <div className="pt-4">
                  <Link href="/ai-platform">
                    <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Learning Platform
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/design-mode/Ai-tutoring.png"
                    alt="AI Tutoring Program"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50"
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Watch Explainer Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Preview Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl mb-4">
                Google Digital Garage-Style Learning Platform
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our interactive learning platform designed with the same principles as Google Digital Garage
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-dunamis-primary to-dunamis-secondary flex items-center justify-center">
                    <div className="text-center text-white">
                      <Brain className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Interactive Learning Experience</h3>
                      <p className="mb-4">Modular curriculum • Progress tracking • Quizzes • Certification</p>
                      <Link href="/ai-platform">
                        <Button size="lg" className="bg-white text-dunamis-primary hover:bg-gray-100">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Launch Platform
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Explainer Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl mb-4">
                  Program Overview
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Watch our comprehensive program overview to understand how our AI Tutoring program can transform your
                  career.
                </p>
              </div>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-dunamis-primary mx-auto mb-4" />
                    <p className="text-gray-600">Video Explainer Coming Soon</p>
                    <p className="text-sm text-gray-500 mt-2">Learn about our AI curriculum and teaching methodology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Cohorts Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl mb-4">
                Upcoming Live Cohorts
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our live interactive sessions with expert instructors across different timezones.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cohorts.map((cohort, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-dunamis-primary" />
                        {cohort.timezone}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {cohort.spotsLeft} spots left
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {cohort.time}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Days:</strong> {cohort.days}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Start Date:</strong> {cohort.startDate}
                    </div>
                    <Button className="w-full bg-dunamis-primary hover:bg-dunamis-primary/90">Reserve Your Spot</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="program-details" className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">
                  About Our AI Tutoring Program
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our AI Tutoring program is designed to equip you with the skills and knowledge needed to understand
                  and work with artificial intelligence technologies. From basic concepts to advanced applications, we
                  cover all aspects of AI.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Personalized AI learning paths tailored to your goals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">One-on-one sessions with AI experts and educators</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Hands-on projects using cutting-edge AI tools</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Progress tracking and performance analytics</p>
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
                      <Brain className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">AI Fundamentals</h3>
                      <p className="text-sm text-gray-500">Introduction to AI concepts and applications</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Laptop className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Practical Training</h3>
                      <p className="text-sm text-gray-500">Hands-on experience with AI tools</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BarChart className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Data Analysis</h3>
                      <p className="text-sm text-gray-500">Learn to work with data for AI applications</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Expert Mentors</h3>
                      <p className="text-sm text-gray-500">Learn from AI professionals</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl mb-4">
                What Our Students Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our successful graduates who have transformed their careers through our AI Tutoring program.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-dunamis-primary">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dunamis-primary py-12">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl mb-4">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-gray-300 md:text-lg/relaxed max-w-2xl mx-auto mb-6">
              Choose your path: Start with our free track to explore AI fundamentals, or dive deep with our
              comprehensive bootcamp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Join Free Track
              </Button>
              <Button size="lg" className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">
                Apply to Full Bootcamp
              </Button>
              <Link href="/ai-platform">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Access Platform
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-dunamis-primary"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Syllabus PDF
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
