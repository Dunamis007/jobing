import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, GraduationCap, BookOpen } from "lucide-react"

export default function IJMBProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-dunamis-light py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-dunamis-primary/10 px-3 py-1 text-sm text-dunamis-primary">
                  IJMB Program
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-primary">
                  Direct Entry into 200 Level with IJMB
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our IJMB program provides comprehensive preparation for Interim Joint Matriculation Board examinations
                  with expert guidance and personalized study plans to help you secure direct entry into 200 level.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/ijmb">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register Now</Button>
                  </Link>
                  <Link href="#curriculum">
                    <Button variant="outline">View Curriculum</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=IJMB+Program"
                  alt="IJMB Program"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover border shadow-md"
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <GraduationCap className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Success Rate</p>
                      <p className="text-lg font-bold">95%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 bg-white" id="curriculum">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dunamis-primary/10 px-3 py-1 text-sm text-dunamis-primary">
                  Program Details
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-primary">
                  IJMB Curriculum
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive curriculum is designed to prepare you for success in your IJMB examinations.
                </p>
              </div>
            </div>

            <Tabs defaultValue="science" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="arts">Arts</TabsTrigger>
                <TabsTrigger value="social-science">Social Science</TabsTrigger>
              </TabsList>
              <TabsContent value="science" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">Mathematics</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Calculus and Coordinate Geometry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Algebra and Trigonometry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Statistics and Probability</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">Physics</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Mechanics and Properties of Matter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Electricity and Magnetism</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Waves, Optics and Modern Physics</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">Chemistry</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Physical and Inorganic Chemistry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Organic Chemistry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Practical Chemistry</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center mt-8">
                  <Link href="/register/ijmb">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                      Register for IJMB Science
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="arts" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">Literature</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Prose, Poetry and Drama</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Literary Criticism</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>African and Non-African Literature</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">History</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Nigerian History</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>African History</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>World History</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">CRK/IRK</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Religious Texts and Interpretations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Religious Ethics and Morality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Religion and Society</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center mt-8">
                  <Link href="/register/ijmb">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                      Register for IJMB Arts
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="social-science" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">Economics</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Microeconomics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Macroeconomics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Development Economics</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">Government</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Political Theory</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Nigerian Government and Politics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>International Relations</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-dunamis-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dunamis-primary">Geography</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Physical Geography</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Human Geography</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Regional Geography</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center mt-8">
                  <Link href="/register/ijmb">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                      Register for IJMB Social Science
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-dunamis-primary" id="cta">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Start Your IJMB Journey?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have achieved their academic goals with Dunamis Tutors.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register/ijmb">
                  <Button className="bg-white text-dunamis-primary hover:bg-gray-100">Register Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="text-white border-white hover:bg-dunamis-primary/20">
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
