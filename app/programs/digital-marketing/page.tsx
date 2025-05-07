import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Laptop, BarChart, Globe, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Marketing Program | Dunamis Tutors",
  description: "Learn about our Digital Marketing program and how it can help you build a career in the digital world",
}

export default function DigitalMarketingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Digital Marketing Program
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master the art and science of digital marketing with our comprehensive program designed for beginners
                  and professionals alike.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/digital-marketing">
                    <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
                  </Link>
                  <Link href="#program-details">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-dunamis-primary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Digital Marketing Program"
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
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">
                  About Our Digital Marketing Program
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our Digital Marketing program is designed to equip you with the skills and knowledge needed to thrive
                  in the ever-evolving digital landscape. From social media marketing to SEO, content creation to
                  analytics, we cover all aspects of digital marketing.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Comprehensive curriculum covering all digital marketing channels</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Hands-on projects and real-world case studies</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Industry-recognized certification upon completion</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Career guidance and placement assistance</p>
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
                      <Laptop className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Practical Training</h3>
                      <p className="text-sm text-gray-500">Learn by doing with hands-on projects</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BarChart className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Analytics & Data</h3>
                      <p className="text-sm text-gray-500">Master the art of data-driven marketing</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Globe className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Global Perspective</h3>
                      <p className="text-sm text-gray-500">Learn strategies that work worldwide</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Industry Experts</h3>
                      <p className="text-sm text-gray-500">Learn from experienced professionals</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dunamis-primary py-12">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl mb-4">
              Ready to Launch Your Digital Marketing Career?
            </h2>
            <p className="text-gray-300 md:text-lg/relaxed max-w-2xl mx-auto mb-6">
              Join our Digital Marketing program today and take the first step towards becoming a digital marketing
              professional.
            </p>
            <Link href="/register/digital-marketing">
              <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
