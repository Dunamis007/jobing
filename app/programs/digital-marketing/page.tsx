import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Megaphone, Zap, Award, Clock, Users, BookOpen, CheckCircle2 } from "lucide-react"
import { generateCourseSchema } from "@/lib/course-schema"

export const metadata: Metadata = {
  title: "Digital Marketing Course in Nigeria | Learn SEO, Social Media & Ads",
  description:
    "Learn Digital Marketing, SEO, Google Ads, and Social Media Strategy with Dunamis Edtech. Gain practical marketing skills and get certified online.",
  keywords: ["digital marketing course Nigeria", "SEO training", "social media marketing", "online marketing class"],
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
    canonical: "https://www.dunamisedtech.com/digital-marketing/",
  },
  openGraph: {
    title: "Digital Marketing Training in Nigeria",
    description:
      "Join Dunamis Edtech's Digital Marketing course to master SEO, Social Media Marketing, and Google Ads.",
    url: "https://www.dunamisedtech.com/digital-marketing/",
    type: "website",
    images: [
      {
        url: "https://www.dunamisedtech.com/images/digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Course | Learn SEO & Social Media",
    description: "Get certified in Digital Marketing, SEO, and Ads Management online with Dunamis Edtech.",
    images: ["https://www.dunamisedtech.com/images/digital-marketing.jpg"],
  },
}

const courseSchema = generateCourseSchema({
  name: "Digital Marketing Masterclass",
  description:
    "Comprehensive digital marketing training covering SEO, SEM, social media marketing, email campaigns, and analytics. Learn to create data-driven marketing strategies.",
  duration: "P10W",
  level: "Beginner to Intermediate",
  provider: "Dunamis Edtech",
  url: "https://www.dunamisedtech.com/digital-marketing/",
})

const modules = [
  {
    level: "Beginner",
    title: "Digital Marketing Foundations",
    duration: "3 weeks",
    topics: [
      "Digital Marketing Overview",
      "Consumer Behavior Online",
      "Digital Channels and Platforms",
      "Content Marketing Basics",
      "Social Media Fundamentals",
      "Email Marketing Introduction",
    ],
  },
  {
    level: "Intermediate",
    title: "Advanced Strategies & Tools",
    duration: "4 weeks",
    topics: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Advertising",
      "Email Marketing Campaigns",
      "Analytics and Measurement",
      "Conversion Rate Optimization",
      "Marketing Automation Tools",
    ],
  },
  {
    level: "Advanced",
    title: "Campaign Execution & Optimization",
    duration: "3 weeks",
    topics: [
      "Integrated Marketing Campaigns",
      "Advanced Analytics and Reporting",
      "ROI Optimization",
      "A/B Testing and Experimentation",
      "Brand Building Strategies",
      "Capstone Campaign Project",
      "Professional Portfolio Development",
    ],
  },
]

const outcomes = [
  "Create effective digital marketing strategies",
  "Optimize websites for search engines (SEO)",
  "Manage paid advertising campaigns",
  "Build engaged social media communities",
  "Design and execute email campaigns",
  "Measure and analyze marketing performance",
  "Launch successful digital campaigns",
]

export default function DigitalMarketingPage() {
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
              <Badge className="mb-4 bg-purple-600 text-white border-0">
                <Megaphone className="mr-2 h-3 w-3" />
                Marketing & Growth
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Master Digital Marketing & Grow Your Brand
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert-led digital marketing training covering SEO, SEM, social media, email campaigns, and analytics.
                Learn proven strategies to build successful campaigns. 10-week intensive program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/digital-marketing">
                    Enroll in Digital Marketing
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
                  <CardDescription>10 weeks intensive program</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Expert Instructors</CardTitle>
                  <CardDescription>Learn from digital marketing professionals</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-dunamis-orange mb-2" />
                  <CardTitle>Certification</CardTitle>
                  <CardDescription>Industry-recognized certificate</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn in Digital Marketing</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our comprehensive digital marketing course teaches you to create, execute, and optimize online marketing
                campaigns. From SEO optimization to paid advertising and social media strategy, you'll gain hands-on
                experience with the tools and techniques used by top marketing professionals.
              </p>
              <p className="text-gray-600 text-lg">
                With businesses increasingly relying on digital channels, skilled digital marketers are in high demand
                across all industries. Our expert-led program prepares you to launch successful marketing careers with
                real-world project experience.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital Marketing Learning Outcomes</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Marketing Curriculum</h2>
              <p className="text-gray-600 text-lg">
                10-week structured curriculum covering all major digital marketing channels and strategies.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Boost Your Marketing Career</h2>
            <p className="text-gray-600 text-lg mb-8">Combine digital marketing with these complementary programs:</p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Coding Bootcamp</CardTitle>
                  <CardDescription>Build technical skills for marketing automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/coding/">Explore Coding</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Data Analytics</CardTitle>
                  <CardDescription>Master analytics for data-driven campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/data-analytics/">Learn Data Analytics</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">AI & Automation</CardTitle>
                  <CardDescription>Use AI to optimize your marketing campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ai/">Explore AI</Link>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enroll in Digital Marketing</h2>
              <p className="text-gray-600 text-lg">Choose flexible online learning or intensive on-campus training.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-2 border-dunamis-orange">
                <CardHeader>
                  <Zap className="h-10 w-10 text-dunamis-orange mb-4" />
                  <CardTitle className="text-2xl">Online Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Live marketing training sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Access to marketing tools and platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>Flexible scheduling for working professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                      <span>24/7 access to course materials</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-orange hover:bg-dunamis-orange/90">
                    <Link href="/register/digital-marketing/?mode=online">Start Online Training</Link>
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
                      <span>In-person instruction from marketing experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Access to marketing lab and software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Network with marketing professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                      <span>Real-world project experience</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-dunamis-navy hover:bg-dunamis-blue">
                    <Link href="/register/digital-marketing/?mode=campus">Start On-Campus Training</Link>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Master Digital Marketing?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join thousands of marketing professionals who've launched successful careers with our expert training.
                Learn proven strategies and build campaigns that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/digital-marketing">
                    Start Digital Marketing Course
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
