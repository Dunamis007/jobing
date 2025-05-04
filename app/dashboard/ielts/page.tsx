import type { Metadata } from "next"
import { DuolingoStyleModule } from "@/components/ielts/duolingo-style-module"
import { ClassSchedule } from "@/components/ielts/class-schedule"
import { EduCoinWallet } from "@/components/dashboard/educoin-wallet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Headphones, Mic, PenTool, Trophy, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "IELTS Preparation | Dunamis Tutors",
  description: "Interactive IELTS preparation with Duolingo-style learning, live classes, and AI tutoring",
  keywords: "IELTS, English test preparation, Duolingo-style learning, interactive IELTS, EduCoins, AI tutoring",
}

export default function IELTSPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">IELTS Preparation</h1>
        <p className="text-muted-foreground">
          Interactive learning, live classes, and AI tutoring to help you achieve your target IELTS score
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Reading</CardTitle>
            <CardDescription>Improve your reading comprehension</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Level</p>
                  <p className="font-medium">Intermediate</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Target Score</p>
                <p className="font-medium">7.0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Listening</CardTitle>
            <CardDescription>Enhance your listening skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Level</p>
                  <p className="font-medium">Intermediate</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Target Score</p>
                <p className="font-medium">6.5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Speaking</CardTitle>
            <CardDescription>Build your speaking confidence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mic className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Level</p>
                  <p className="font-medium">Intermediate</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Target Score</p>
                <p className="font-medium">7.0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Writing</CardTitle>
            <CardDescription>Develop your writing skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <PenTool className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Level</p>
                  <p className="font-medium">Intermediate</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Target Score</p>
                <p className="font-medium">6.5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Overall Progress</CardTitle>
            <CardDescription>Your IELTS journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Score</p>
                  <p className="font-medium">6.5</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Target Score</p>
                <p className="font-medium">7.0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Next Test</CardTitle>
            <CardDescription>Your upcoming IELTS test</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Test Date</p>
                  <p className="font-medium">June 15, 2023</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Days Left</p>
                <p className="font-medium">42</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="practice">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="practice">Interactive Practice</TabsTrigger>
          <TabsTrigger value="classes">Live Classes</TabsTrigger>
          <TabsTrigger value="wallet">EduCoin Wallet</TabsTrigger>
        </TabsList>
        <TabsContent value="practice" className="mt-6">
          <DuolingoStyleModule />
        </TabsContent>
        <TabsContent value="classes" className="mt-6">
          <ClassSchedule />
        </TabsContent>
        <TabsContent value="wallet" className="mt-6">
          <EduCoinWallet />
        </TabsContent>
      </Tabs>
    </div>
  )
}
