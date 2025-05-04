"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Gift, ShoppingCart, Award, Zap, BookOpen, Trophy, ArrowRight } from "lucide-react"

interface EduCoinOverviewProps {
  onContinue: () => void
  onBack: () => void
}

export function EduCoinOverview({ onContinue, onBack }: EduCoinOverviewProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div className="space-y-6" variants={fadeIn} initial="hidden" animate="visible">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Coins className="h-6 w-6 text-primary" />
            <CardTitle>EduCoin System</CardTitle>
          </div>
          <CardDescription>Learn how our virtual currency works and the benefits it provides</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Welcome Bonus</h3>
            </div>
            <p className="text-sm">
              You've received <span className="font-bold">500 EduCoins</span> as a welcome bonus! These coins can be
              used immediately to access premium content and features.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              How to Use EduCoins
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Premium Content</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unlock exclusive study materials, practice tests, and video tutorials.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">AI Tutor Sessions</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get personalized help from our AI tutors for difficult subjects.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Certificates</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Purchase completion certificates to showcase your achievements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Challenges</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enter competitive challenges with other students to win more coins.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium flex items-center gap-2">
              <Coins className="h-5 w-5 text-primary" />
              Earning More EduCoins
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  <strong>Daily Logins:</strong> Earn 10 coins for each consecutive day you log in
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  <strong>Completing Lessons:</strong> Earn 20-50 coins for each completed lesson
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  <strong>Passing Tests:</strong> Earn 100 coins for each test you pass with 80% or higher
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  <strong>Referring Friends:</strong> Earn 200 coins for each friend who joins
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  <strong>Purchasing:</strong> Buy coin packages starting from ₦1,000 for 500 coins
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">Payment & Subscription</h3>
            <p className="text-sm text-muted-foreground mb-3">
              After your 1-day free trial, you can choose from our subscription plans:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Basic Plan (Monthly)</span>
                <span className="font-medium">₦2,500/month</span>
              </li>
              <li className="flex justify-between">
                <span>Standard Plan (Monthly)</span>
                <span className="font-medium">₦5,000/month</span>
              </li>
              <li className="flex justify-between">
                <span>Premium Plan (Monthly)</span>
                <span className="font-medium">₦10,000/month</span>
              </li>
              <li className="flex justify-between text-primary">
                <span>Annual Plans</span>
                <span className="font-medium">Save 20%</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-2">
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button onClick={onContinue}>
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
