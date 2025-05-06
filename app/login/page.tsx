import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Login | Dunamis Tutors",
  description: "Login to your Dunamis Tutors account to access your personalized learning dashboard.",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32&text=DT"
              alt="Dunamis Tutors Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-md space-y-6 px-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#0e3b62]">Welcome Back</h1>
            <p className="text-gray-500">Login to your account to continue your learning journey</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-[#0e3b62] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" placeholder="Enter your password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]" asChild>
                <Link href="/dashboard">Login</Link>
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/register" className="text-[#0e3b62] hover:underline">
                  Register
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
