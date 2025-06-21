import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, BookOpen, CheckCircle, Trophy, Lock, Coins, FileText, Star } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Student!</h1>
        <p className="text-muted-foreground">Here's an overview of your learning journey</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Classes</CardTitle>
                <CardDescription>Your next scheduled sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Introduction to Digital Marketing</p>
                      <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">IELTS Reading Practice</p>
                      <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/schedule" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Full Schedule
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Course Progress</CardTitle>
                <CardDescription>Your active courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Digital Marketing Fundamentals</span>
                      <span className="text-primary">45%</span>
                    </div>
                    <div className="h-2 rounded-full bg-primary/20">
                      <div className="h-full w-[45%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>IELTS Preparation</span>
                      <span className="text-primary">30%</span>
                    </div>
                    <div className="h-2 rounded-full bg-primary/20">
                      <div className="h-full w-[30%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/courses" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Courses
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">EduCoins Balance</CardTitle>
                <CardDescription>Your learning currency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Coins className="h-6 w-6 text-yellow-500" />
                  <span className="text-2xl font-bold">1,250</span>
                  <span className="text-sm text-muted-foreground">EduCoins</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Earn more coins by completing assignments and attending classes
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Rewards Store
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* New Sections */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Assignments Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Assignments
                </CardTitle>
                <CardDescription>Your pending and completed assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Digital Marketing Strategy Report</p>
                      <p className="text-sm text-muted-foreground">Due: Dec 25, 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Pending</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">IELTS Writing Task 1</p>
                      <p className="text-sm text-muted-foreground">Submitted: Dec 20, 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Completed</span>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Assignments
                </Button>
              </CardFooter>
            </Card>

            {/* Achievements Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Recent Achievements
                </CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="rounded-full bg-yellow-100 p-2">
                      <Trophy className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium">First Assignment Completed</p>
                      <p className="text-sm text-muted-foreground">Earned 50 EduCoins</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="rounded-full bg-blue-100 p-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Perfect Attendance Week</p>
                      <p className="text-sm text-muted-foreground">Earned 100 EduCoins</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Achievements
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Premium Study Materials Section */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Premium Study Materials
                </CardTitle>
                <CardDescription>Unlock exclusive content with EduCoins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Advanced SEO Guide</h4>
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Comprehensive guide to advanced SEO techniques</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">200</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Unlock
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 bg-green-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">IELTS Speaking Templates</h4>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Ready-to-use templates for IELTS speaking</p>
                    <Button size="sm" className="w-full">
                      Access Now
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Marketing Case Studies</h4>
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Real-world marketing campaign analysis</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">150</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Unlock
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
                <CardDescription>Access your learning resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                    <BookOpen className="h-5 w-5" />
                    <span>Study Materials</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                    <Clock className="h-5 w-5" />
                    <span>Recorded Lessons</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                    <Calendar className="h-5 w-5" />
                    <span>Book a Session</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">My Courses</h2>
                <p className="text-muted-foreground">Track your progress across all enrolled courses</p>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">1,250 EduCoins</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="https://i.ibb.co/FLLPKtLM/digital-marketing.png"
                  alt="Digital Marketing"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Digital Marketing</CardTitle>
                <CardDescription>Master the art and science of digital marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-primary">45%</span>
                  </div>
                  <div className="h-2 rounded-full bg-primary/20">
                    <div className="h-full w-[45%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Next class: Today, 2:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span>3 achievements earned</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="https://i.ibb.co/TDkZ7TG8/travel-abroad.png"
                  alt="IELTS Preparation"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>IELTS Preparation</CardTitle>
                <CardDescription>Achieve your target band score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-primary">30%</span>
                  </div>
                  <div className="h-2 rounded-full bg-primary/20">
                    <div className="h-full w-[30%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Next class: Tomorrow, 10:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span>1 achievement earned</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-gray-400" />
              </div>
              <CardHeader>
                <CardTitle>AI Tutoring</CardTitle>
                <CardDescription>Personalized AI-powered learning experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-primary">0%</span>
                  </div>
                  <div className="h-2 rounded-full bg-primary/20">
                    <div className="h-full w-[0%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Start anytime</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span>No achievements yet</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Start Course
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="mt-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Class Schedule</h2>
            <p className="text-muted-foreground">Your upcoming classes and sessions</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Your upcoming classes and sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-medium">Today</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Digital Marketing Fundamentals</p>
                          <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</p>
                          <p className="text-xs text-muted-foreground">Room: Virtual Classroom A</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Live</span>
                        <Button size="sm">Join Class</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-medium">Tomorrow</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">IELTS Reading Practice</p>
                          <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM</p>
                          <p className="text-xs text-muted-foreground">Room: Virtual Classroom B</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Scheduled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">IELTS Speaking Practice</p>
                          <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                          <p className="text-xs text-muted-foreground">Room: Virtual Classroom C</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Scheduled
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-medium">This Week</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">AI Tutoring Session</p>
                          <p className="text-sm text-muted-foreground">Wednesday, 3:00 PM - 4:00 PM</p>
                          <p className="text-xs text-muted-foreground">One-on-one session</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
