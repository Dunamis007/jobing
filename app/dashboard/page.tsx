import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, BookOpen, CheckCircle, Bell } from "lucide-react"

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
                <CardTitle className="text-lg">Notifications</CardTitle>
                <CardDescription>Recent updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">New Assignment Posted</p>
                      <p className="text-sm text-muted-foreground">Digital Marketing - Due in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Quiz Results Available</p>
                      <p className="text-sm text-muted-foreground">IELTS Practice Test #2</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Notifications
                </Button>
              </CardFooter>
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Next class: Today, 2:00 PM</span>
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Next class: Tomorrow, 10:00 AM</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="mt-6">
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
                        </div>
                      </div>
                      <Button size="sm">Join Class</Button>
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
                        </div>
                      </div>
                      <Button size="sm">Join Class</Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">IELTS Speaking Practice</p>
                          <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                        </div>
                      </div>
                      <Button size="sm">Join Class</Button>
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
