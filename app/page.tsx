import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BookOpen, GraduationCap, PlaneTakeoff, Code, BarChart, Brain } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-dunamis-primary py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Africa's First AI-Powered Learning Platform
              </h1>
              <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dunamis Tutors offers comprehensive educational programs to help you achieve your academic and career
                goals. From IJMB and JUPEB to IELTS and Digital Marketing, we've got you covered.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white">Get Started</Button>
                </Link>
                <Link href="#programs">
                  <Button
                    variant="outline"
                    className="border-white hover:bg-white hover:text-dunamis-primary text-black"
                  >
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://i.ibb.co/CpdGnRzm/personal.png"
                alt="Dunamis Tutors - Personalized Learning Experience"
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 md:py-16 bg-dunamis-light">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl md:text-4xl">
              From Coding to Campus — Learn. Build. Launch.
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-700 md:text-lg/relaxed">
              Choose from our wide range of educational programs designed to help you succeed.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Tutoring - First */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <Brain className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">AI Tutoring</h3>
                <p className="mt-2 text-gray-700">
                  Experience personalized learning with our AI-powered tutoring program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/ai-tutoring">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/ai-tutoring">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Coding - Second */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">Coding</h3>
                <p className="mt-2 text-gray-700">
                  Learn to code and build your tech career with our hands-on coding program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/coding">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/coding">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Digital Marketing - Third */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <BarChart className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">Digital Marketing</h3>
                <p className="mt-2 text-gray-700">
                  Master the art and science of digital marketing with our comprehensive program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/digital-marketing">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/digital-marketing">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">IJMB Program</h3>
                <p className="mt-2 text-gray-700">
                  Gain direct entry into 200 level in Nigerian universities through our IJMB program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/ijmb">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/ijmb">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">JUPEB Program</h3>
                <p className="mt-2 text-gray-700">
                  Prepare for direct entry into universities with our comprehensive JUPEB program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/jupeb">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/jupeb">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">JAMB Program</h3>
                <p className="mt-2 text-gray-700">
                  Excel in your JAMB examinations with our specialized preparation program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/jamb">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/jamb">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">IELTS Preparation</h3>
                <p className="mt-2 text-gray-700">
                  Achieve your target IELTS score with our comprehensive preparation program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/ielts">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/ielts">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                <PlaneTakeoff className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dunamis-primary">Travel Abroad</h3>
                <p className="mt-2 text-gray-700">
                  Get comprehensive guidance for studying abroad with our travel abroad program.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href="/programs/travel-abroad">
                    <Button
                      variant="outline"
                      className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/register/travel-abroad">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl md:text-4xl">
              Why Choose Dunamis Tutors?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-700 md:text-lg/relaxed">
              We are committed to providing quality education and personalized guidance to help you succeed.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-dunamis-primary p-3">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dunamis-primary">Expert Tutors</h3>
              <p className="mt-2 text-gray-700">
                Learn from experienced tutors who are experts in their respective fields.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-dunamis-primary p-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dunamis-primary">Comprehensive Curriculum</h3>
              <p className="mt-2 text-gray-700">
                Our programs cover all aspects of the subject matter to ensure thorough understanding.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-dunamis-primary p-3">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dunamis-primary">Proven Results</h3>
              <p className="mt-2 text-gray-700">
                Our students consistently achieve excellent results and gain admission to top universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="py-12 md:py-16 bg-dunamis-light">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl md:text-4xl">
              Our Difference
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-700 md:text-lg/relaxed">
              Experience learning like never before with our innovative approach to education.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-dunamis-primary p-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dunamis-primary mb-3">Personalized AI Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                Our AI-powered platform adapts to your learning style, pace, and preferences, providing personalized
                recommendations and real-time feedback to maximize your potential.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-dunamis-primary p-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dunamis-primary mb-3">Self-Paced Model</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn at your own speed with flexible scheduling. Whether you're a fast learner or need more time, our
                platform adjusts to your rhythm for optimal learning outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-dunamis-primary p-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dunamis-primary mb-3">Google Digital Garage Curriculum</h3>
              <p className="text-gray-700 leading-relaxed">
                Our curriculum is modeled after Google Digital Garage standards, ensuring you receive world-class
                education that meets global industry requirements and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-dunamis-primary">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl">
              What Our Students Say
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-300 md:text-lg/relaxed">
              Hear from our students about their experience with Dunamis Tutors.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-700">
                  "Dunamis Tutors helped me secure admission into the University of Lagos through their IJMB program.
                  The tutors were excellent and the study materials were comprehensive."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-dunamis-primary" />
                  <div>
                    <p className="font-bold text-dunamis-primary">Chioma Okonkwo</p>
                    <p className="text-sm text-gray-500">IJMB Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-700">
                  "I achieved a band score of 7.5 in IELTS after taking the preparation course at Dunamis Tutors. The
                  strategies and practice tests were incredibly helpful."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-dunamis-primary" />
                  <div>
                    <p className="font-bold text-dunamis-primary">Emeka Nwosu</p>
                    <p className="text-sm text-gray-500">IELTS Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-700">
                  "The Digital Marketing program at Dunamis Tutors gave me the skills I needed to start my own digital
                  marketing agency. The hands-on approach was exactly what I needed."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-dunamis-primary" />
                  <div>
                    <p className="font-bold text-dunamis-primary">Funke Adeyemi</p>
                    <p className="text-sm text-gray-500">Digital Marketing Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl md:text-4xl">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-700 md:text-lg/relaxed">
            Join Dunamis Tutors today and take the first step towards achieving your academic and career goals.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/register">
              <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Get Started</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-dunamis-primary border-dunamis-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
