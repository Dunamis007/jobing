"use client"

import { Calendar } from "@/components/ui/calendar"

import { useState } from "react"
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Building,
  ExternalLink,
  BookmarkPlus,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

// Mock data for job listings
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Lagos, Nigeria",
    locationType: "Remote",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description:
      "We're looking for a Frontend Developer with experience in React, TypeScript, and modern CSS frameworks to join our team.",
    requirements: [
      "3+ years of experience with React",
      "Strong knowledge of TypeScript",
      "Experience with CSS frameworks like Tailwind or Bootstrap",
      "Understanding of responsive design principles",
      "Experience with state management libraries (Redux, Context API)",
    ],
    benefits: ["Flexible working hours", "Health insurance", "Professional development budget", "Remote work options"],
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "Responsive Design"],
    postedDate: "2024-03-15",
    applicationDeadline: "2024-04-15",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "DataSystems",
    location: "Abuja, Nigeria",
    locationType: "Hybrid",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "We are seeking a Backend Developer to design and implement server-side applications using Node.js and Express.",
    requirements: [
      "4+ years of experience with Node.js",
      "Experience with Express or similar frameworks",
      "Strong knowledge of database design and optimization",
      "Experience with RESTful API design",
      "Understanding of authentication and authorization",
    ],
    benefits: ["Competitive salary", "Health and dental insurance", "401(k) matching", "Flexible work arrangements"],
    skills: ["Node.js", "Express", "MongoDB", "REST API", "Authentication"],
    postedDate: "2024-03-10",
    applicationDeadline: "2024-04-10",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "Port Harcourt, Nigeria",
    locationType: "On-site",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    description:
      "Join our team as a Full Stack Developer to work on exciting projects using React, Node.js, and MongoDB.",
    requirements: [
      "5+ years of experience in full stack development",
      "Strong knowledge of React and Node.js",
      "Experience with MongoDB or similar NoSQL databases",
      "Understanding of CI/CD pipelines",
      "Experience with cloud platforms (AWS, Azure, GCP)",
    ],
    benefits: ["Competitive salary", "Health insurance", "Stock options", "Professional development opportunities"],
    skills: ["React", "Node.js", "MongoDB", "AWS", "CI/CD"],
    postedDate: "2024-03-05",
    applicationDeadline: "2024-04-05",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Kano, Nigeria",
    locationType: "Remote",
    type: "Contract",
    salary: "$50 - $70 per hour",
    description:
      "We're looking for a Mobile Developer with experience in React Native to join our team on a contract basis.",
    requirements: [
      "3+ years of experience with React Native",
      "Experience with native modules",
      "Understanding of mobile app architecture",
      "Experience with app store deployment",
      "Knowledge of mobile UI/UX principles",
    ],
    benefits: ["Flexible hours", "Remote work", "Contract-to-hire potential", "Collaborative team environment"],
    skills: ["React Native", "JavaScript", "iOS", "Android", "Mobile UI/UX"],
    postedDate: "2024-03-20",
    applicationDeadline: "2024-04-20",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Enugu, Nigeria",
    locationType: "Hybrid",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description:
      "Join our team as a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
    requirements: [
      "4+ years of experience in DevOps",
      "Strong knowledge of AWS or Azure",
      "Experience with Docker and Kubernetes",
      "Understanding of CI/CD principles",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work options", "Professional development budget"],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    postedDate: "2024-03-12",
    applicationDeadline: "2024-04-12",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "DataInsights",
    location: "Ibadan, Nigeria",
    locationType: "Remote",
    type: "Full-time",
    salary: "$85,000 - $105,000",
    description:
      "We're looking for a Data Scientist to help us analyze and interpret complex data to drive business decisions.",
    requirements: [
      "3+ years of experience in data science",
      "Strong knowledge of Python and data science libraries",
      "Experience with machine learning algorithms",
      "Understanding of statistical analysis",
      "Experience with data visualization tools",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible work arrangements",
      "Professional development opportunities",
    ],
    skills: ["Python", "Machine Learning", "Statistical Analysis", "Data Visualization", "SQL"],
    postedDate: "2024-03-18",
    applicationDeadline: "2024-04-18",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
]

// Mock data for networking events
const networkingEvents = [
  {
    id: 1,
    title: "Lagos Tech Meetup",
    organizer: "Lagos Tech Community",
    date: "2024-04-15",
    time: "6:00 PM - 8:00 PM",
    location: "Lagos, Nigeria",
    locationType: "In-person",
    description:
      "Join us for an evening of networking, tech talks, and refreshments. Meet other developers and tech professionals in Lagos.",
    topics: ["Web Development", "Mobile Development", "Career Growth"],
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Virtual Coding Workshop",
    organizer: "CodeNation",
    date: "2024-04-20",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    locationType: "Virtual",
    description: "Learn how to build a full-stack application with React and Node.js in this hands-on workshop.",
    topics: ["React", "Node.js", "Full Stack Development"],
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Tech Career Fair",
    organizer: "TechTalent Nigeria",
    date: "2024-04-25",
    time: "9:00 AM - 4:00 PM",
    location: "Abuja, Nigeria",
    locationType: "In-person",
    description:
      "Connect with top tech companies in Nigeria and explore job opportunities in software development, data science, and more.",
    topics: ["Job Search", "Career Development", "Networking"],
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    title: "Women in Tech Panel Discussion",
    organizer: "WomenTechAfrica",
    date: "2024-04-30",
    time: "5:00 PM - 7:00 PM",
    location: "Online",
    locationType: "Virtual",
    description:
      "Join our panel discussion with successful women in tech as they share their experiences and advice for navigating the tech industry.",
    topics: ["Women in Tech", "Career Growth", "Mentorship"],
    image: "/placeholder.svg?height=100&width=200",
  },
]

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [jobTypeFilter, setJobTypeFilter] = useState("all")
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null)
  const { toast } = useToast()

  const handleSaveJob = (jobId: number, jobTitle: string) => {
    toast({
      title: "Job Saved",
      description: `${jobTitle} has been saved to your bookmarks.`,
    })
  }

  const handleShareJob = (jobId: number, jobTitle: string) => {
    // In a real app, this would open a share dialog or copy a link to clipboard
    toast({
      title: "Link Copied",
      description: `Link to ${jobTitle} has been copied to your clipboard.`,
    })
  }

  const handleApplyJob = () => {
    if (!selectedJob) return

    toast({
      title: "Application Submitted",
      description: `Your application for ${selectedJob.title} at ${selectedJob.company} has been submitted.`,
    })
  }

  const handleRegisterEvent = (eventId: number, eventTitle: string) => {
    toast({
      title: "Registration Successful",
      description: `You have registered for ${eventTitle}. You'll receive a confirmation email shortly.`,
    })
  }

  const filterJobs = () => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesLocation =
        locationFilter === "all" || job.locationType.toLowerCase() === locationFilter.toLowerCase()

      const matchesJobType = jobTypeFilter === "all" || job.type.toLowerCase() === jobTypeFilter.toLowerCase()

      return matchesSearch && matchesLocation && matchesJobType
    })
  }

  const filteredJobs = filterJobs()

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Job Board & Networking</h1>
        <p className="text-muted-foreground">Find job opportunities and connect with other professionals</p>
      </div>

      <Tabs defaultValue="jobs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="jobs">Job Listings</TabsTrigger>
          <TabsTrigger value="networking">Networking Events</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search jobs by title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Location Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="on-site">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
              <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No jobs found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-muted rounded flex items-center justify-center overflow-hidden">
                          <img
                            src={job.companyLogo || "/placeholder.svg"}
                            alt={job.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span>{job.company}</span>
                            <span className="mx-1">•</span>
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleSaveJob(job.id, job.title)}>
                          <BookmarkPlus className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleShareJob(job.id, job.title)}>
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.locationType}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {job.salary}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Posted {job.postedDate}
                      </Badge>
                    </div>
                    <CardDescription className="mb-3">{job.description}</CardDescription>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">Apply by: {job.applicationDeadline}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default" onClick={() => setSelectedJob(job)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      {selectedJob && (
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>{selectedJob.title}</DialogTitle>
                            <DialogDescription>
                              {selectedJob.company} • {selectedJob.location}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Briefcase className="h-3 w-3" />
                                {selectedJob.type}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {selectedJob.locationType}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />
                                {selectedJob.salary}
                              </Badge>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Description</h4>
                              <p className="text-sm">{selectedJob.description}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Requirements</h4>
                              <ul className="text-sm list-disc pl-5 space-y-1">
                                {selectedJob.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Benefits</h4>
                              <ul className="text-sm list-disc pl-5 space-y-1">
                                {selectedJob.benefits.map((benefit, index) => (
                                  <li key={index}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Skills</h4>
                              <div className="flex flex-wrap gap-1">
                                {selectedJob.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <DialogFooter className="flex gap-2">
                            <Button variant="outline">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Visit Company
                            </Button>
                            <Button type="submit" onClick={handleApplyJob}>
                              Apply Now
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      )}
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="networking" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="h-[100px] bg-muted">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{event.organizer}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.locationType}
                    </Badge>
                  </div>
                  <CardDescription className="mb-3">{event.description}</CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {event.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => handleRegisterEvent(event.id, event.title)}
                  >
                    Register
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
