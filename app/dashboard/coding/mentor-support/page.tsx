"use client"

import { useState } from "react"
import { Search, Star, Calendar, MessageSquare, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Mock data for mentors
const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Frontend Developer",
    company: "Google",
    bio: "10+ years of experience in frontend development with React, Angular, and Vue. Passionate about mentoring junior developers.",
    expertise: ["React", "JavaScript", "CSS", "Web Performance"],
    rating: 4.9,
    reviews: 124,
    hourlyRate: "$40",
    availability: "Evenings & Weekends",
    languages: ["English", "Spanish"],
    image: "/placeholder.svg?height=150&width=150",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Backend Engineer",
    company: "Amazon",
    bio: "Backend developer specializing in scalable systems. Experience with Node.js, Python, and cloud infrastructure.",
    expertise: ["Node.js", "Python", "AWS", "Microservices"],
    rating: 4.8,
    reviews: 98,
    hourlyRate: "$45",
    availability: "Weekends",
    languages: ["English", "Mandarin"],
    image: "/placeholder.svg?height=150&width=150",
    verified: true,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Full Stack Developer",
    company: "Microsoft",
    bio: "Full stack developer with expertise in React, Node.js, and database design. Loves teaching and helping others grow.",
    expertise: ["React", "Node.js", "MongoDB", "TypeScript"],
    rating: 4.7,
    reviews: 87,
    hourlyRate: "$35",
    availability: "Flexible",
    languages: ["English", "Hindi"],
    image: "/placeholder.svg?height=150&width=150",
    verified: true,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Mobile Developer",
    company: "Uber",
    bio: "Mobile developer with experience in React Native, Flutter, and native iOS/Android development.",
    expertise: ["React Native", "Flutter", "iOS", "Android"],
    rating: 4.6,
    reviews: 76,
    hourlyRate: "$50",
    availability: "Evenings",
    languages: ["English"],
    image: "/placeholder.svg?height=150&width=150",
    verified: true,
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Data Scientist",
    company: "Netflix",
    bio: "Data scientist with expertise in machine learning, Python, and data visualization. Passionate about teaching data science concepts.",
    expertise: ["Python", "Machine Learning", "Data Visualization", "SQL"],
    rating: 4.9,
    reviews: 112,
    hourlyRate: "$55",
    availability: "Weekends",
    languages: ["English", "Portuguese"],
    image: "/placeholder.svg?height=150&width=150",
    verified: true,
  },
  {
    id: 6,
    name: "James Kim",
    role: "DevOps Engineer",
    company: "Spotify",
    bio: "DevOps engineer with expertise in CI/CD, Docker, Kubernetes, and cloud infrastructure.",
    expertise: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    rating: 4.7,
    reviews: 92,
    hourlyRate: "$45",
    availability: "Flexible",
    languages: ["English", "Korean"],
    image: "/placeholder.svg?height=150&width=150",
    verified: true,
  },
]

// Mock data for community groups
const communityGroups = [
  {
    id: 1,
    name: "React Developers",
    description: "A community of React developers sharing knowledge and helping each other.",
    members: 1245,
    topics: ["React", "JavaScript", "Frontend"],
    image: "/placeholder.svg?height=100&width=100",
    activity: "Very Active",
  },
  {
    id: 2,
    name: "Python Enthusiasts",
    description: "Learn Python together through projects, challenges, and discussions.",
    members: 987,
    topics: ["Python", "Data Science", "Backend"],
    image: "/placeholder.svg?height=100&width=100",
    activity: "Active",
  },
  {
    id: 3,
    name: "Mobile App Developers",
    description: "Community for mobile app developers using React Native, Flutter, and native technologies.",
    members: 765,
    topics: ["React Native", "Flutter", "Mobile"],
    image: "/placeholder.svg?height=100&width=100",
    activity: "Moderate",
  },
  {
    id: 4,
    name: "DevOps Practitioners",
    description: "Share best practices, tools, and experiences in DevOps and cloud infrastructure.",
    members: 543,
    topics: ["DevOps", "Cloud", "CI/CD"],
    image: "/placeholder.svg?height=100&width=100",
    activity: "Active",
  },
]

export default function MentorSupport() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expertiseFilter, setExpertiseFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")
  const [selectedMentor, setSelectedMentor] = useState<(typeof mentors)[0] | null>(null)
  const [messageText, setMessageText] = useState("")
  const { toast } = useToast()

  const handleScheduleSession = (mentor: (typeof mentors)[0]) => {
    toast({
      title: "Session Requested",
      description: `Your session request with ${mentor.name} has been sent. You'll receive a confirmation soon.`,
    })
  }

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedMentor) return

    toast({
      title: "Message Sent",
      description: `Your message to ${selectedMentor.name} has been sent.`,
    })

    setMessageText("")
  }

  const handleJoinGroup = (groupId: number, groupName: string) => {
    toast({
      title: "Group Joined",
      description: `You have joined the ${groupName} community group.`,
    })
  }

  const filterMentors = () => {
    return mentors.filter((mentor) => {
      const matchesSearch =
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesExpertise =
        expertiseFilter === "all" ||
        mentor.expertise.some((skill) => skill.toLowerCase() === expertiseFilter.toLowerCase())

      const matchesAvailability =
        availabilityFilter === "all" || mentor.availability.toLowerCase().includes(availabilityFilter.toLowerCase())

      return matchesSearch && matchesExpertise && matchesAvailability
    })
  }

  const filteredMentors = filterMentors()

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Mentor & Community Support</h1>
        <p className="text-muted-foreground">Connect with experienced mentors and join supportive community groups</p>
      </div>

      <Tabs defaultValue="mentors" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="community">Community Groups</TabsTrigger>
        </TabsList>

        <TabsContent value="mentors" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search mentors by name, expertise, or bio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={expertiseFilter} onValueChange={setExpertiseFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Expertise</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="node.js">Node.js</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="machine learning">Machine Learning</SelectItem>
                </SelectContent>
              </Select>
              <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Availability</SelectItem>
                  <SelectItem value="evenings">Evenings</SelectItem>
                  <SelectItem value="weekends">Weekends</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredMentors.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No mentors found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 border">
                        <AvatarImage src={mentor.image} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{mentor.name}</CardTitle>
                          {mentor.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {mentor.role} at {mentor.company}
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{mentor.rating}</span>
                          <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="line-clamp-3 mb-3">{mentor.bio}</CardDescription>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Rate</p>
                        <p className="font-medium">{mentor.hourlyRate}/hour</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Availability</p>
                        <p className="font-medium">{mentor.availability}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Languages</p>
                        <p className="font-medium">{mentor.languages.join(", ")}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="default" className="flex-1" onClick={() => handleScheduleSession(mentor)}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedMentor(mentor)}>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Message {selectedMentor?.name}</DialogTitle>
                          <DialogDescription>Send a message to introduce yourself and ask questions.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Textarea
                            placeholder="Type your message here..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            className="min-h-[120px]"
                          />
                        </div>
                        <DialogFooter>
                          <Button type="submit" onClick={handleSendMessage}>
                            Send Message
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityGroups.map((group) => (
              <Card key={group.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16 border">
                      <AvatarImage src={group.image} alt={group.name} />
                      <AvatarFallback>{group.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{group.members} members</span>
                        <span className="mx-1">•</span>
                        <span>{group.activity}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="mb-3">{group.description}</CardDescription>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {group.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="default" className="flex-1" onClick={() => handleJoinGroup(group.id, group.name)}>
                    <Users className="h-4 w-4 mr-2" />
                    Join Group
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
