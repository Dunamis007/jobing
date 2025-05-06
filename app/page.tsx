import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Head from "next/head"

export const metadata = {
  title: "Dunamis Tutors - Personalized Learning for Academic Excellence | IJMB, JUPEB, IELTS",
  description:
    "AI-powered academic support for IJMB, JUPEB, digital marketing, and coding programs. Personalized learning paths tailored to your goals and learning style.",
  keywords:
    "IJMB program, JUPEB direct entry, IELTS preparation, digital marketing courses, coding bootcamp, personalized learning, AI tutoring",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* SEO Head */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content="Dunamis Tutors - Personalized Learning for Academic Excellence" />
        <meta
          property="og:description"
          content="AI-powered academic support for IJMB, JUPEB, digital marketing, and coding programs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dunamistutors.com" />
        <meta property="og:image" content="https://dunamistutors.com/og-image.jpg" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32&text=DT"
              alt="Dunamis Tutors Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/programs/ijmb"
              className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors"
            >
              IJMB
            </Link>
            <Link
              href="/programs/jupeb"
              className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors"
            >
              JUPEB
            </Link>
            <Link
              href="/programs/ielts"
              className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors"
            >
              IELTS
            </Link>
            <Link
              href="/programs/digital-marketing"
              className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors"
            >
              Digital Marketing
            </Link>
            <Link
              href="/programs/coding"
              className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors"
            >
              Coding
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="text-[#0e3b62] border-[#0e3b62]">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0e3b62] to-[#1a5c96] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Personalized Learning for Academic Excellence
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                AI-powered academic support for IJMB, JUPEB, digital marketing, and coding programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-[#0e3b62] hover:bg-white/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto bg-white rounded-lg shadow-xl p-6 lg:order-last">
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-center text-[#0e3b62]">Create your account</h2>
                <p className="text-sm text-center text-gray-500">Join Dunamis Tutors to start your learning journey</p>

                <div className="flex justify-between mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#0e3b62] text-white flex items-center justify-center">
                      1
                    </div>
                    <span className="text-xs mt-1 text-[#0e3b62]">Basic Info</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                      2
                    </div>
                    <span className="text-xs mt-1 text-gray-500">Education</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                      3
                    </div>
                    <span className="text-xs mt-1 text-gray-500">Preferences</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                      4
                    </div>
                    <span className="text-xs mt-1 text-gray-500">Confirmation</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
                  </div>
                  <div>
                    <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Continue</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0e3b62]">Key Features</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Discover how our platform can transform your academic journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0e3b62]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0e3b62]">AI-Generated Academic Plans</h3>
                <p className="text-gray-500">Personalized study paths based on your preferences, history, and goals.</p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0e3b62]"
                    >
                      <path d="M12 20v-6M6 20V10M18 20V4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0e3b62]">Progress Tracking</h3>
                <p className="text-gray-500">
                  Visual analytics to monitor progress across subjects, topics, and goals.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0e3b62]"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0e3b62]">Social Challenges</h3>
                <p className="text-gray-500">
                  Leaderboards, gamified academic tasks, and collaborative learning opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0e3b62]">
              Why Choose Dunamis Tutors?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Our platform combines cutting-edge AI technology with proven educational methodologies to deliver a
              superior learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#0e3b62] mt-0.5" />
                <p>Personalized learning paths tailored to your goals</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#0e3b62] mt-0.5" />
                <p>AI-powered tutoring available 24/7</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#0e3b62] mt-0.5" />
                <p>Comprehensive coverage of IJMB and JUPEB curricula</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#0e3b62] mt-0.5" />
                <p>Engaging, interactive learning experiences</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#0e3b62] mt-0.5" />
                <p>Community support and peer learning opportunities</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Program 1 */}
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0e3b62]"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#0e3b62]">IJMB Programs</h3>
                  </div>
                  <p className="text-sm text-gray-500">Comprehensive preparation for IJMB examinations</p>
                </CardContent>
              </Card>

              {/* Program 2 */}
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0e3b62]"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#0e3b62]">JUPEB Programs</h3>
                  </div>
                  <p className="text-sm text-gray-500">Expert guidance for JUPEB success</p>
                </CardContent>
              </Card>

              {/* Program 3 */}
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0e3b62]"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#0e3b62]">AI Tutoring</h3>
                  </div>
                  <p className="text-sm text-gray-500">Personalized assistance with difficult concepts</p>
                </CardContent>
              </Card>

              {/* Program 4 */}
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0e3b62]"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#0e3b62]">Digital Marketing</h3>
                  </div>
                  <p className="text-sm text-gray-500">Industry-relevant skills for the digital economy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0e3b62]">Our Approach to Learning</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              We combine innovative technology with proven educational methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Approach 1 */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0e3b62]"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6" />
                      <path d="M8 15h8" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold mb-2 text-[#0e3b62]">Personalized Learning</h3>
                <p className="text-sm text-gray-500">
                  Customized study plans based on your unique learning style and academic goals
                </p>
              </CardContent>
            </Card>

            {/* Approach 2 */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0e3b62]"
                    >
                      <path d="M20.2 6 3 11l-.9-2.4L18.4 3l1.8 3Z" />
                      <path d="m6.3 10.3 12 5.1-1.2 2.8-12-5.1 1.2-2.8Z" />
                      <path d="M14.9 21.9 21 6l-2.1-.8-6.1 15.9 2.1.8Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold mb-2 text-[#0e3b62]">Goal-Oriented</h3>
                <p className="text-sm text-gray-500">Clear objectives and milestones to measure academic progress</p>
              </CardContent>
            </Card>

            {/* Approach 3 */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0e3b62]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold mb-2 text-[#0e3b62]">Flexible Scheduling</h3>
                <p className="text-sm text-gray-500">Learn at your own pace with 24/7 access to resources</p>
              </CardContent>
            </Card>

            {/* Approach 4 */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0e3b62]"
                    >
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold mb-2 text-[#0e3b62]">Interactive Content</h3>
                <p className="text-sm text-gray-500">Engaging materials that make learning enjoyable and effective</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0e3b62] to-[#1a5c96] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="max-w-[700px] mx-auto text-white/80 md:text-xl mb-8">
            Join thousands of students who have accelerated their academic journey with Dunamis Tutors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0e3b62] hover:bg-white/90">
                Get Started Now
              </Button>
            </Link>
            <Link href="/programs/all">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 py-12 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32&text=DT"
                alt="Dunamis Tutors Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-medium mb-4 text-[#0e3b62]">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/programs/ijmb" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    IJMB
                  </Link>
                </li>
                <li>
                  <Link href="/programs/jupeb" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    JUPEB
                  </Link>
                </li>
                <li>
                  <Link href="/programs/ielts" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    IELTS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/digital-marketing"
                    className="text-gray-500 hover:text-[#0e3b62] transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/programs/coding" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Coding
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-[#0e3b62]">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/study-guides" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Study Guides
                  </Link>
                </li>
                <li>
                  <Link href="/resources/webinars" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-[#0e3b62]">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-[#0e3b62]">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-[#0e3b62] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Dunamis Tutors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
