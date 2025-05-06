import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, BookOpen } from "lucide-react"

export default function IELTSProgramPage() {
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
                  IELTS Preparation
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-primary">
                  Achieve Your Target IELTS Score
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive IELTS preparation program is designed to help you achieve your target score with
                  personalized study plans and expert guidance.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/ielts">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">Register Now</Button>
                  </Link>
                  <Link href="#modules">
                    <Button variant="outline">View Modules</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=IELTS+Preparation"
                  alt="IELTS Preparation"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover border shadow-md"
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <BookOpen className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Average Score Improvement</p>
                      <p className="text-lg font-bold">1.5 Bands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 bg-white" id="modules">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dunamis-primary/10 px-3 py-1 text-sm text-dunamis-primary">
                  Program Details
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-primary">
                  IELTS Modules
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive curriculum covers all four IELTS modules to ensure you're fully prepared for the
                  exam.
                </p>
              </div>
            </div>

            <Tabs defaultValue="listening" className="mt-12">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="listening">Listening</TabsTrigger>
                <TabsTrigger value="reading">Reading</TabsTrigger>
                <TabsTrigger value="writing">Writing</TabsTrigger>
                <TabsTrigger value="speaking">Speaking</TabsTrigger>
              </TabsList>
              <TabsContent value="listening" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-dunamis-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dunamis-primary">Listening Module</h3>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600">
                      Our listening module preparation focuses on developing your ability to understand spoken English
                      in various contexts, including academic discussions, everyday conversations, and lectures.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-bold mb-2">What You'll Learn</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Note-taking techniques</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Identifying key information</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Understanding different accents</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Practice Activities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Full-length practice tests</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Section-specific exercises</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Targeted listening drills</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-center mt-8">
                  <Link href="/register/ielts">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                      Register for IELTS Preparation
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="reading" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-dunamis-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dunamis-primary">Reading Module</h3>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600">
                      Our reading module preparation focuses on developing your ability to understand complex texts,
                      identify key information, and answer various question types accurately and efficiently.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-bold mb-2">What You'll Learn</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Skimming and scanning techniques</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Vocabulary building strategies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Time management skills</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Practice Activities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Full-length practice tests</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Question-type specific exercises</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Academic reading passages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-center mt-8">
                  <Link href="/register/ielts">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                      Register for IELTS Preparation
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="writing" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-dunamis-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dunamis-primary">Writing Module</h3>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600">
                      Our writing module preparation focuses on developing your ability to write clear, coherent, and
                      well-structured responses for both Task 1 (data interpretation) and Task 2 (essay writing).
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-bold mb-2">What You'll Learn</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Essay structure and organization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Data interpretation techniques</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Grammar and vocabulary enhancement</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Practice Activities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Guided writing exercises</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Personalized feedback on essays</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Timed writing practice</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-center mt-8">
                  <Link href="/register/ielts">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                      Register for IELTS Preparation
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="speaking" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-dunamis-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dunamis-primary">Speaking Module</h3>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600">
                      Our speaking module preparation focuses on developing your ability to communicate effectively in
                      English, express your ideas clearly, and engage in conversation with confidence.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-bold mb-2">What You'll Learn</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Fluency and coherence strategies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Pronunciation improvement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Vocabulary expansion</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Practice Activities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Mock interviews</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Topic-based discussions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Recorded practice with feedback</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-center mt-8">
                  <Link href="/register/ielts">
                    <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                      Register for IELTS Preparation
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
                  Ready to Achieve Your Target IELTS Score?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have improved their IELTS scores with Dunamis Tutors.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register/ielts">
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
