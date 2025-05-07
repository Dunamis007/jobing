import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function DashboardInstructionsPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Instructions</h1>
        <p className="text-muted-foreground">Learn how to navigate and use your student dashboard</p>
      </div>

      <Tabs defaultValue="after-payment">
        <TabsList>
          <TabsTrigger value="after-payment">After Payment</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard Overview</TabsTrigger>
          <TabsTrigger value="classes">Accessing Classes</TabsTrigger>
        </TabsList>

        <TabsContent value="after-payment" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Steps After Payment</CardTitle>
              <CardDescription>What to do after completing your payment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Payment Confirmation</p>
                    <p className="text-sm text-muted-foreground">
                      After successful payment, you will be automatically redirected to your dashboard. If you paid via
                      bank transfer, you'll be redirected after confirming your payment details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Complete Your Profile</p>
                    <p className="text-sm text-muted-foreground">
                      Once on your dashboard, navigate to the Profile section to complete your student profile with
                      additional details that will help personalize your learning experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Explore Your Courses</p>
                    <p className="text-sm text-muted-foreground">
                      Visit the "My Courses" section to see the courses you've enrolled in. Click on a course to access
                      its content, materials, and schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Check Your Schedule</p>
                    <p className="text-sm text-muted-foreground">
                      Go to the "Class Schedule" section to view your upcoming classes and sessions. Make note of the
                      dates and times to ensure you don't miss any classes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Overview</CardTitle>
              <CardDescription>What you'll see on your dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Dashboard Home</p>
                    <p className="text-sm text-muted-foreground">
                      The dashboard home provides an overview of your learning journey, including upcoming classes,
                      course progress, and recent notifications. You'll see a green blinking dot in your profile section
                      indicating you're online.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">My Courses</p>
                    <p className="text-sm text-muted-foreground">
                      This section displays all the courses you're enrolled in, along with your progress in each course.
                      Click on a course to access its content, materials, and assignments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Class Schedule</p>
                    <p className="text-sm text-muted-foreground">
                      View your upcoming classes and sessions, organized by day. You can join live classes directly from
                      this section by clicking the "Join Class" button when a class is about to start.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Achievements</p>
                    <p className="text-sm text-muted-foreground">
                      Track your learning progress, achievements, and compare with other learners. This gamified section
                      helps keep you motivated throughout your learning journey.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Accessing Classes and Lessons</CardTitle>
              <CardDescription>How to join classes and access learning materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Joining Live Classes</p>
                    <p className="text-sm text-muted-foreground">
                      To join a live class, go to the "Class Schedule" section and click the "Join Class" button next to
                      your scheduled class. This will open the virtual classroom where you can interact with your
                      instructor and fellow students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Accessing Recorded Lessons</p>
                    <p className="text-sm text-muted-foreground">
                      If you miss a live class, you can access the recorded version by going to the "My Courses"
                      section, selecting your course, and navigating to the "Recorded Lessons" tab. All classes are
                      recorded for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Study Materials</p>
                    <p className="text-sm text-muted-foreground">
                      Access your study materials by going to the "Learning Resources" section or by visiting the
                      specific course page. Materials include lecture notes, practice questions, and supplementary
                      resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Submitting Assignments</p>
                    <p className="text-sm text-muted-foreground">
                      To submit assignments, go to the "Assignments" section, select the assignment you want to
                      complete, and follow the submission instructions. You'll receive feedback from your instructor
                      after submission.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Getting Support</p>
                    <p className="text-sm text-muted-foreground">
                      If you need help with anything, visit the "Support" section in your dashboard. You can submit a
                      support ticket, chat with a support representative, or browse the FAQ section for answers to
                      common questions.
                    </p>
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
