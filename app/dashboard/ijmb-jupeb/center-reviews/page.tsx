"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Star, Search, Filter, MapPin, Plus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"

export default function CenterReviews() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("ijmb")
  const [centers, setCenters] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterLocation, setFilterLocation] = useState("all")
  const [loading, setLoading] = useState(true)
  const [reviewFormOpen, setReviewFormOpen] = useState(false)
  const [selectedCenter, setSelectedCenter] = useState<any>(null)
  const [reviewForm, setReviewForm] = useState({
    rating: "5",
    comment: "",
    pros: "",
    cons: "",
  })

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const centersRef = collection(db, `${activeTab}-centers`)
        let q = query(centersRef)

        if (filterLocation !== "all") {
          q = query(q, where("state", "==", filterLocation))
        }

        q = query(q, orderBy("rating", "desc"))

        const snapshot = await getDocs(q)

        if (!snapshot.empty) {
          const centersData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setCenters(centersData)
        } else {
          // Fallback to AI-generated content if no data
          setCenters(generateFallbackCenters())
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching centers:", error)
        // Fallback to AI-generated content on error
        setCenters(generateFallbackCenters())
        setLoading(false)
      }
    }

    fetchCenters()
  }, [activeTab, filterLocation])

  const generateFallbackCenters = () => {
    const states = ["Lagos", "Abuja", "Kano", "Rivers", "Kaduna", "Enugu"]
    const centerTypes =
      activeTab === "ijmb"
        ? ["ABU Affiliated", "UNIJOS Affiliated", "BUK Affiliated"]
        : ["UNILAG Affiliated", "UI Affiliated", "OAU Affiliated"]

    return Array(8)
      .fill(0)
      .map((_, i) => ({
        id: `center-${i + 1}`,
        name: `${activeTab.toUpperCase()} Study Center ${i + 1}`,
        location: `${states[i % states.length]}, Nigeria`,
        state: states[i % states.length],
        type: centerTypes[i % centerTypes.length],
        rating: (4 + Math.random() * 1).toFixed(1),
        reviewCount: Math.floor(Math.random() * 50) + 10,
        facilities: ["Library", "Computer Lab", "Study Rooms", "Cafeteria"].slice(0, Math.floor(Math.random() * 4) + 1),
        tuitionRange: `₦${(150 + Math.floor(Math.random() * 150)).toLocaleString()},000 - ₦${(250 + Math.floor(Math.random() * 150)).toLocaleString()},000`,
        reviews: Array(Math.floor(Math.random() * 5) + 3)
          .fill(0)
          .map((_, j) => ({
            id: `review-${i}-${j}`,
            author: `Student ${j + 1}`,
            rating: Math.floor(Math.random() * 5) + 1,
            comment: `This is a ${["great", "good", "decent", "average", "poor"][Math.floor(Math.random() * 5)]} study center with ${["excellent", "good", "average", "poor"][Math.floor(Math.random() * 4)]} facilities.`,
            pros: `${["Good teachers", "Nice environment", "Well-equipped library", "Affordable fees"][Math.floor(Math.random() * 4)]}`,
            cons: `${["Limited parking", "Crowded classrooms", "Outdated materials", "Expensive"][Math.floor(Math.random() * 4)]}`,
            date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
            helpfulCount: Math.floor(Math.random() * 15),
          })),
      }))
  }

  const filteredCenters = centers.filter(
    (center) =>
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedCenter) return

    try {
      // In a real app, you would add this to Firestore
      // For now, we'll just show a success message

      toast({
        title: "Review Submitted",
        description: "Thank you for sharing your experience!",
      })

      setReviewFormOpen(false)
      setReviewForm({
        rating: "5",
        comment: "",
        pros: "",
        cons: "",
      })
    } catch (error) {
      console.error("Error submitting review:", error)
      toast({
        title: "Error",
        description: "There was a problem submitting your review. Please try again.",
        variant: "destructive",
      })
    }
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
        />
      ))
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Center Reviews</h1>
          <p className="text-muted-foreground">Find and review IJMB & JUPEB study centers across Nigeria</p>
        </div>
        <Button
          onClick={() => {
            setSelectedCenter(null)
            setReviewFormOpen(true)
          }}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add New Center
        </Button>
      </div>

      <Tabs defaultValue="ijmb" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ijmb">IJMB Centers</TabsTrigger>
          <TabsTrigger value="jupeb">JUPEB Centers</TabsTrigger>
        </TabsList>

        <TabsContent value="ijmb" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search centers..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="filter-location" className="sr-only">
                Filter by location
              </Label>
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger id="filter-location" className="w-[180px]">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Lagos">Lagos</SelectItem>
                  <SelectItem value="Abuja">Abuja</SelectItem>
                  <SelectItem value="Kano">Kano</SelectItem>
                  <SelectItem value="Rivers">Rivers</SelectItem>
                  <SelectItem value="Kaduna">Kaduna</SelectItem>
                  <SelectItem value="Enugu">Enugu</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCenters.map((center) => (
              <Card key={center.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle>{center.name}</CardTitle>
                    <Badge variant="outline">{center.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {center.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(Number.parseFloat(center.rating))}</div>
                    <span className="font-medium">{center.rating}</span>
                    <span className="text-sm text-muted-foreground">({center.reviewCount} reviews)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs font-medium">Facilities</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {center.facilities.map((facility: string, i: number) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium">Tuition Range</p>
                      <p className="text-sm mt-1">{center.tuitionRange}</p>
                    </div>
                  </div>

                  {center.reviews && center.reviews.length > 0 && (
                    <div>
                      <p className="text-xs font-medium mb-2">Recent Review</p>
                      <div className="bg-muted p-2 rounded-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <div className="flex">{renderStars(center.reviews[0].rating)}</div>
                            <span className="text-xs">{center.reviews[0].author}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {new Date(center.reviews[0].date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-xs mt-1">{center.reviews[0].comment}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCenter(center)
                      setReviewFormOpen(true)
                    }}
                  >
                    Write a Review
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      // View all reviews
                    }}
                  >
                    View All Reviews
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="jupeb" className="space-y-6">
          {/* Same structure as IJMB tab, data will be loaded based on activeTab */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search centers..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="filter-location-jupeb" className="sr-only">
                Filter by location
              </Label>
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger id="filter-location-jupeb" className="w-[180px]">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Lagos">Lagos</SelectItem>
                  <SelectItem value="Abuja">Abuja</SelectItem>
                  <SelectItem value="Kano">Kano</SelectItem>
                  <SelectItem value="Rivers">Rivers</SelectItem>
                  <SelectItem value="Kaduna">Kaduna</SelectItem>
                  <SelectItem value="Enugu">Enugu</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCenters.map((center) => (
              <Card key={center.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle>{center.name}</CardTitle>
                    <Badge variant="outline">{center.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {center.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(Number.parseFloat(center.rating))}</div>
                    <span className="font-medium">{center.rating}</span>
                    <span className="text-sm text-muted-foreground">({center.reviewCount} reviews)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs font-medium">Facilities</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {center.facilities.map((facility: string, i: number) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium">Tuition Range</p>
                      <p className="text-sm mt-1">{center.tuitionRange}</p>
                    </div>
                  </div>

                  {center.reviews && center.reviews.length > 0 && (
                    <div>
                      <p className="text-xs font-medium mb-2">Recent Review</p>
                      <div className="bg-muted p-2 rounded-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <div className="flex">{renderStars(center.reviews[0].rating)}</div>
                            <span className="text-xs">{center.reviews[0].author}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {new Date(center.reviews[0].date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-xs mt-1">{center.reviews[0].comment}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCenter(center)
                      setReviewFormOpen(true)
                    }}
                  >
                    Write a Review
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      // View all reviews
                    }}
                  >
                    View All Reviews
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={reviewFormOpen} onOpenChange={setReviewFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{selectedCenter ? `Review ${selectedCenter.name}` : "Add New Study Center"}</DialogTitle>
            <DialogDescription>
              {selectedCenter
                ? "Share your experience with this study center to help other students."
                : "Add a new study center that is not listed in our database."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitReview} className="space-y-4">
            {!selectedCenter && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="center-name">Center Name</Label>
                  <Input id="center-name" placeholder="Enter the center name" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="center-type">Center Type</Label>
                    <Select defaultValue="ijmb">
                      <SelectTrigger id="center-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ijmb">IJMB</SelectItem>
                        <SelectItem value="jupeb">JUPEB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="center-location">Location</Label>
                    <Select defaultValue="Lagos">
                      <SelectTrigger id="center-location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Lagos">Lagos</SelectItem>
                        <SelectItem value="Abuja">Abuja</SelectItem>
                        <SelectItem value="Kano">Kano</SelectItem>
                        <SelectItem value="Rivers">Rivers</SelectItem>
                        <SelectItem value="Kaduna">Kaduna</SelectItem>
                        <SelectItem value="Enugu">Enugu</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <Select
                value={reviewForm.rating}
                onValueChange={(value) => setReviewForm({ ...reviewForm, rating: value })}
              >
                <SelectTrigger id="rating">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Stars - Excellent</SelectItem>
                  <SelectItem value="4">4 Stars - Very Good</SelectItem>
                  <SelectItem value="3">3 Stars - Good</SelectItem>
                  <SelectItem value="2">2 Stars - Fair</SelectItem>
                  <SelectItem value="1">1 Star - Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Your Review</Label>
              <Textarea
                id="comment"
                placeholder="Share your experience with this center..."
                value={reviewForm.comment}
                onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pros">Pros</Label>
                <Textarea
                  id="pros"
                  placeholder="What did you like about this center?"
                  value={reviewForm.pros}
                  onChange={(e) => setReviewForm({ ...reviewForm, pros: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cons">Cons</Label>
                <Textarea
                  id="cons"
                  placeholder="What could be improved?"
                  value={reviewForm.cons}
                  onChange={(e) => setReviewForm({ ...reviewForm, cons: e.target.value })}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Submit Review</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
