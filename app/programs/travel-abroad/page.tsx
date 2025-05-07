import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, PlaneTakeoff, GraduationCap, Globe, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Travel Abroad Program | Dunamis Tutors",
  description: "Learn about our Travel Abroad program and how it can help you study in foreign universities",
}

export default function TravelAbroadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-dunamis-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Travel Abroad Program
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get comprehensive guidance for studying abroad with our travel abroad program designed to help you
                  navigate the complex process of international education.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/travel-abroad">
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
                  src="https://i.ibb.co/TDkZ7TG8/travel-abroad.png"
                  alt="Travel Abroad Program"
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
                  About Our Travel Abroad Program
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our Travel Abroad program offers comprehensive guidance and support for students looking to study in
                  foreign universities. We help you navigate the complex process of university selection, application,
                  visa processing, and pre-departure preparation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Personalized guidance for university selection and application</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Visa application assistance and documentation support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Scholarship and funding guidance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dunamis-accent mt-0.5" />
                    <p className="text-gray-700">Pre-departure orientation and cultural preparation</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl">
                  Program Features
                </h2>
                <p className="text-gray-700 md:text-lg/relaxed">
                  Our program is designed to give you comprehensive support throughout your journey to studying abroad.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Globe className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Global University Network</h3>
                      <p className="text-sm text-gray-500">Access to universities worldwide</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <GraduationCap className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Academic Counseling</h3>
                      <p className="text-sm text-gray-500">Expert guidance on course selection</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <PlaneTakeoff className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Travel Assistance</h3>
                      <p className="text-sm text-gray-500">Help with accommodation and travel arrangements</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-dunamis-primary mb-2" />
                      <h3 className="font-bold">Alumni Network</h3>
                      <p className="text-sm text-gray-500">Connect with students already studying abroad</p>
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
              Ready to Start Your International Education Journey?
            </h2>
            <p className="text-gray-300 md:text-lg/relaxed max-w-2xl mx-auto mb-6">
              Join our Travel Abroad program today and take the first step towards studying in a foreign university.
            </p>
            <Link href="/register/travel-abroad">
              <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Register Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
