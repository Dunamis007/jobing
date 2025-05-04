"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Calendar, Info, MessageSquare, Search } from "lucide-react"

export default function NINRegistrationGuide() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedState, setSelectedState] = useState("All States")
  const [forumPosts, setForumPosts] = useState([
    {
      id: 1,
      author: "JohnD",
      title: "My NIN registration experience",
      content:
        "I registered at the NIMC office in Ikeja. The process took about 2 hours. Make sure to bring all required documents!",
      date: "2 days ago",
      replies: 12,
    },
    {
      id: 2,
      author: "Mary123",
      title: "NIN registration issues",
      content:
        "I've been trying to get my NIN for weeks now. The centers are always crowded. Any advice on the best time to go?",
      date: "1 week ago",
      replies: 8,
    },
    {
      id: 3,
      author: "Ibrahim_A",
      title: "NIN verification for JAMB",
      content: "Has anyone had issues linking their NIN to their JAMB profile? I'm getting an error message.",
      date: "3 days ago",
      replies: 15,
    },
  ])

  const registrationCenters = [
    {
      id: 1,
      name: "NIMC Office, Abuja",
      address: "Plot 11, Sokode Crescent, Wuse Zone 5, Abuja",
      state: "FCT",
      openingHours: "8:00 AM - 4:00 PM",
      phone: "080-1234-5678",
      waitTime: "High",
    },
    {
      id: 2,
      name: "NIMC Office, Lagos",
      address: "32 Awolowo Road, Ikoyi, Lagos",
      state: "Lagos",
      openingHours: "8:00 AM - 4:00 PM",
      phone: "080-9876-5432",
      waitTime: "Medium",
    },
    {
      id: 3,
      name: "NIMC Office, Kano",
      address: "10 Ibrahim Taiwo Road, Kano",
      state: "Kano",
      openingHours: "8:00 AM - 4:00 PM",
      phone: "080-5555-7777",
      waitTime: "Low",
    },
    {
      id: 4,
      name: "NIMC Office, Port Harcourt",
      address: "15 Aba Road, Port Harcourt",
      state: "Rivers",
      openingHours: "8:00 AM - 4:00 PM",
      phone: "080-3333-9999",
      waitTime: "Medium",
    },
    {
      id: 5,
      name: "NIMC Office, Enugu",
      address: "22 Ogui Road, Enugu",
      state: "Enugu",
      openingHours: "8:00 AM - 4:00 PM",
      phone: "080-7777-8888",
      waitTime: "Low",
    },
  ]

  const states = ["All States", "FCT", "Lagos", "Kano", "Rivers", "Enugu", "Oyo", "Kaduna", "Delta", "Anambra", "Borno"]

  const filteredCenters = registrationCenters.filter(
    (center) =>
      (selectedState === "All States" || center.state === selectedState) &&
      (center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.state.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to a database
    alert("Your post has been submitted and is awaiting approval.")
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold">NIN Registration Guide</h1>

      <Tabs defaultValue="guide">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="guide">Registration Guide</TabsTrigger>
          <TabsTrigger value="centers">Registration Centers</TabsTrigger>
          <TabsTrigger value="forum">Community Forum</TabsTrigger>
        </TabsList>

        <TabsContent value="guide" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>National Identification Number (NIN) Registration Guide</CardTitle>
              <CardDescription>Follow these steps to obtain your NIN for JAMB registration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-muted p-4">
                <h3 className="mb-2 text-lg font-medium">Why You Need a NIN</h3>
                <p>
                  The National Identification Number (NIN) is now mandatory for all JAMB candidates. It helps in
                  verifying your identity and preventing examination malpractice.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Required Documents</h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Birth Certificate or Age Declaration</li>
                  <li>School ID Card or Letter of Identification from your school</li>
                  <li>Passport Photograph (preferably white background)</li>
                  <li>Proof of Address (utility bill, etc.)</li>
                  <li>Any valid ID (Student ID, etc.)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Registration Process</h3>
                <ol className="ml-6 list-decimal space-y-4">
                  <li>
                    <p className="font-medium">Visit a NIMC Enrollment Center</p>
                    <p className="text-sm text-muted-foreground">
                      Locate the nearest NIMC enrollment center using the "Registration Centers" tab.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Fill the NIN Enrollment Form</p>
                    <p className="text-sm text-muted-foreground">
                      You can download and fill the form beforehand or fill it at the center.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Submit Required Documents</p>
                    <p className="text-sm text-muted-foreground">Present all required documents for verification.</p>
                  </li>
                  <li>
                    <p className="font-medium">Biometric Capture</p>
                    <p className="text-sm text-muted-foreground">
                      Your fingerprints, facial image, and signature will be captured.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Receive NIN Slip</p>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a slip with your NIN immediately or be asked to return later.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
                <h3 className="mb-2 flex items-center text-lg font-medium text-yellow-800 dark:text-yellow-200">
                  <Info className="mr-2 h-5 w-5" />
                  Important Tips
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-yellow-800 dark:text-yellow-200">
                  <li>Arrive early to avoid long queues</li>
                  <li>Double-check all your documents before going</li>
                  <li>The process is free of charge</li>
                  <li>Keep your NIN slip safe as you'll need it for JAMB registration</li>
                  <li>
                    You can also register online at{" "}
                    <a href="https://ninenroll.nimc.gov.ng" className="underline">
                      https://ninenroll.nimc.gov.ng
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => window.open("https://nimc.gov.ng", "_blank")}>Visit NIMC Official Website</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="centers" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>NIN Registration Centers</CardTitle>
              <CardDescription>Find the nearest NIMC enrollment center in your area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search by name, address, or state"
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Label htmlFor="state">Filter by State</Label>
                  <select
                    id="state"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {filteredCenters.length > 0 ? (
                  filteredCenters.map((center) => (
                    <Card key={center.id} className="overflow-hidden">
                      <div className="border-b bg-muted/50 p-4">
                        <h3 className="text-lg font-medium">{center.name}</h3>
                        <p className="text-sm text-muted-foreground">{center.state}</p>
                      </div>
                      <CardContent className="grid gap-4 p-4 sm:grid-cols-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Address</p>
                            <p className="text-sm text-muted-foreground">{center.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Contact</p>
                            <p className="text-sm text-muted-foreground">{center.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Opening Hours</p>
                            <p className="text-sm text-muted-foreground">{center.openingHours}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Wait Time</p>
                            <p
                              className={`text-sm ${
                                center.waitTime === "High"
                                  ? "text-red-500"
                                  : center.waitTime === "Medium"
                                    ? "text-yellow-500"
                                    : "text-green-500"
                              }`}
                            >
                              {center.waitTime}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="rounded-lg border border-dashed p-8 text-center">
                    <p className="text-muted-foreground">No registration centers found matching your criteria.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forum" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>NIN Registration Community Forum</CardTitle>
              <CardDescription>Share your experiences and get help from others</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="border-b bg-muted/50 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">{post.title}</h3>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Posted by {post.author}</p>
                    </div>
                    <CardContent className="p-4">
                      <p>{post.content}</p>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/30 px-4 py-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {post.replies} replies
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Share Your Experience</CardTitle>
                  <CardDescription>Help others by sharing your NIN registration experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewPost} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter a title for your post" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        placeholder="Share your experience, tips, or questions about NIN registration"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <Button type="submit">Post to Forum</Button>
                  </form>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
