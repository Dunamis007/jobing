import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { MultiStepForm } from "@/components/home/multi-step-form"
import { BookOpen, Brain, CheckCircle, GraduationCap, Trophy, Users, Lightbulb, Target, Clock, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <BookOpen className="h-6 w-6" />
            <span>Dunamis Tutors</span>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Personalized Learning for Academic Excellence
                  </h1>
                  <p className="max-w-[600px] text-blue-100 md:text-xl">
                    AI-powered academic support for IJMB, JUPEB, digital marketing, and coding programs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 bg-white text-primary hover:bg-blue-50">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MultiStepForm />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our platform can transform your academic journey
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm card-hover">
                <div className="rounded-full bg-primary/10 p-3">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Generated Academic Plans</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Personalized study paths based on your preferences, history, and goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm card-hover">
                <div className="rounded-full bg-primary/10 p-3">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Visual analytics to display progress across different subjects and disciplines.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm card-hover">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Social Challenges</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Leaderboards, gamified academic tasks, and progress sharing with peers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Why Choose Dunamis Tutors?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Our platform combines cutting-edge AI technology with proven educational methodologies to deliver a
                  superior learning experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Personalized learning paths tailored to your goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>AI-powered tutoring available 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Comprehensive coverage of IJMB and JUPEB curricula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Engaging, interactive learning experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Community support and peer learning opportunities</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-lg bg-white p-2 shadow-lg dark:bg-accent/20">
                      <div className="rounded-lg bg-primary/10 p-4 dark:bg-accent/30">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        <h3 className="mt-2 font-bold">IJMB Programs</h3>
                        <p className="text-sm text-muted-foreground">Comprehensive preparation for IJMB examinations</p>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white p-2 shadow-lg dark:bg-accent/20">
                      <div className="rounded-lg bg-primary/10 p-4 dark:bg-accent/30">
                        <Brain className="h-8 w-8 text-primary" />
                        <h3 className="mt-2 font-bold">AI Tutoring</h3>
                        <p className="text-sm text-muted-foreground">Personalized assistance with difficult concepts</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-lg bg-white p-2 shadow-lg dark:bg-accent/20">
                      <div className="rounded-lg bg-primary/10 p-4 dark:bg-accent/30">
                        <BookOpen className="h-8 w-8 text-primary" />
                        <h3 className="mt-2 font-bold">JUPEB Programs</h3>
                        <p className="text-sm text-muted-foreground">Expert guidance for JUPEB success</p>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white p-2 shadow-lg dark:bg-accent/20">
                      <div className="rounded-lg bg-primary/10 p-4 dark:bg-accent/30">
                        <Trophy className="h-8 w-8 text-primary" />
                        <h3 className="mt-2 font-bold">Digital Marketing</h3>
                        <p className="text-sm text-muted-foreground">
                          Industry-relevant skills for the digital economy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Our Approach to Learning
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  We combine innovative technology with proven educational methods
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-lg feature-gradient">
                <div className="rounded-full bg-primary/20 p-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Personalized Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Customized study plans based on your learning style and goals
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg feature-gradient">
                <div className="rounded-full bg-primary/20 p-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Goal-Oriented</h3>
                <p className="text-sm text-muted-foreground">Clear objectives and milestones to track your progress</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg feature-gradient">
                <div className="rounded-full bg-primary/20 p-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">Learn at your own pace with 24/7 access to resources</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg feature-gradient">
                <div className="rounded-full bg-primary/20 p-3 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Interactive Content</h3>
                <p className="text-sm text-muted-foreground">
                  Engaging materials that make learning enjoyable and effective
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed mb-8">
              Join thousands of students who have accelerated their academic journey with Dunamis Tutors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                Get Started Now
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-secondary/10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold text-primary">
            <BookOpen className="h-5 w-5" />
            <span>Dunamis Tutors</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dunamis Tutors. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
