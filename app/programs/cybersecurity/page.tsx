import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Network, Award, Clock, Users, BookOpen, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Cybersecurity Program | Dunamis Edtech",
  description:
    "Master cybersecurity with Dunamis Edtech. Learn network security, ethical hacking, threat analysis, and security operations. Available online and on-campus.",
  keywords:
    "cybersecurity course, ethical hacking, network security, cyber threat analysis, information security Nigeria",
}

const modules = [
  {
    level: "Beginner",
    title: "Cybersecurity Fundamentals",
    duration: "4 weeks",
    topics: [
      "Introduction to Cybersecurity",
      "CIA Triad: Confidentiality, Integrity, Availability",
      "Common Cyber Threats and Vulnerabilities",
      "Security Policies and Procedures",
      "Basic Cryptography",
      "Network Basics and Protocols",
    ],
  },
  {
    level: "Intermediate",
    title: "Security Operations & Ethical Hacking",
    duration: "6 weeks",
    topics: [
      "Network Security Architecture",
      "Firewalls and Intrusion Detection Systems",
      "Penetration Testing Fundamentals",
      "Ethical Hacking Tools (Kali Linux, Metasploit)",
      "Vulnerability Assessment and Management",
      "Security Information and Event Management (SIEM)",
      "Incident Response and Handling",
    ],
  },
  {
    level: "Advanced",
    title: "Advanced Security & Threat Intelligence",
    duration: "4 weeks",
    topics: [
      "Advanced Persistent Threats (APT)",
      "Malware Analysis and Reverse Engineering",
      "Cloud Security (AWS, Azure, GCP)",
      "Application Security and Secure Coding",
      "Digital Forensics and Investigation",
      "Threat Hunting and Intelligence",
      "Security Compliance (ISO 27001, NIST)",
    ],
  },
]

const learningOutcomes = [
  "Understand fundamental cybersecurity concepts and principles",
  "Identify and analyze security threats and vulnerabilities",
  "Implement security controls and defensive measures",
  "Conduct ethical hacking and penetration testing",
  "Respond to and investigate security incidents",
  "Design and implement secure network architectures",
  "Prepare for industry certifications (CompTIA Security+, CEH)",
]

const careerPathways = [
  {
    title: "Security Analyst",
    description: "Monitor and protect organizational systems from security threats",
    salary: "₦3,000,000 - ₦6,000,000/year",
  },
  {
    title: "Penetration Tester",
    description: "Test systems and networks for vulnerabilities through ethical hacking",
    salary: "₦4,000,000 - ₦8,000,000/year",
  },
  {
    title: "Security Engineer",
    description: "Design and implement security solutions and infrastructure",
    salary: "₦5,000,000 - ₦10,000,000/year",
  },
  {
    title: "Incident Response Specialist",
    description: "Investigate and respond to security breaches and cyber attacks",
    salary: "₦4,500,000 - ₦9,000,000/year",
  },
  {
    title: "Chief Information Security Officer (CISO)",
    description: "Lead organizational security strategy and operations",
    salary: "₦10,000,000 - ₦25,000,000/year",
  },
]

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dunamis-navy via-dunamis-blue to-dunamis-navy text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-red-600 text-white border-0">
              <Shield className="mr-1 h-3 w-3" />
              Security & Protection
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Cybersecurity Program</h1>
            <p className="text-xl text-gray-200 mb-8">
              Become a cybersecurity professional and protect organizations from digital threats. Learn network
              security, ethical hacking, threat analysis, and security operations from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                <Link href="/register/cybersecurity">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-dunamis-orange mb-2" />
                <CardTitle>Duration</CardTitle>
                <CardDescription>14 weeks intensive program</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-dunamis-orange mb-2" />
                <CardTitle>Class Size</CardTitle>
                <CardDescription>Small cohorts for personalized attention</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-dunamis-orange mb-2" />
                <CardTitle>Certification</CardTitle>
                <CardDescription>Industry-recognized certificate upon completion</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Cybersecurity?</h2>
            <p className="text-gray-600 text-lg mb-6">
              Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These
              cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting
              money from users, or interrupting normal business processes. In our program, you'll learn comprehensive
              security strategies, from basic concepts to advanced threat detection and response.
            </p>
            <p className="text-gray-600 text-lg">
              With cybercrime damages projected to reach trillions of dollars globally, skilled cybersecurity
              professionals are in high demand. Our program prepares you for this exciting and critical field with
              hands-on training in both defensive and offensive security techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Outcomes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-dunamis-orange flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive curriculum takes you from cybersecurity fundamentals to advanced threat hunting and
              incident response.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {modules.map((module, index) => (
              <Card key={index} className="border-t-4 border-t-dunamis-orange">
                <CardHeader>
                  <Badge className="w-fit mb-2">{module.level}</Badge>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 text-dunamis-orange flex-shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Pathways</h2>
            <p className="text-gray-600 text-lg">
              Launch your cybersecurity career with opportunities in various specialized roles across industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPathways.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{career.title}</CardTitle>
                  <CardDescription className="text-sm">{career.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-dunamis-orange">{career.salary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Options */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enrollment Options</h2>
            <p className="text-gray-600 text-lg">Choose the learning format that works best for you.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-2 border-dunamis-orange">
              <CardHeader>
                <Network className="h-10 w-10 text-dunamis-orange mb-4" />
                <CardTitle className="text-2xl">Online Learning</CardTitle>
                <CardDescription className="text-base">Study from anywhere with live virtual classes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                    <span>Live interactive sessions with instructors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                    <span>Access to virtual labs and security tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-orange flex-shrink-0 mt-0.5" />
                    <span>24/7 access to course materials</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-dunamis-orange hover:bg-dunamis-orange/90">
                  <Link href="/register/cybersecurity?mode=online">Enroll Online</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-dunamis-navy">
              <CardHeader>
                <Users className="h-10 w-10 text-dunamis-navy mb-4" />
                <CardTitle className="text-2xl">On-Campus Learning</CardTitle>
                <CardDescription className="text-base">
                  Hands-on training in our state-of-the-art facilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                    <span>In-person instruction and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                    <span>Access to physical security lab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                    <span>Networking with peers and industry professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                    <span>Structured learning environment</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-dunamis-navy hover:bg-dunamis-blue">
                  <Link href="/register/cybersecurity?mode=campus">Enroll On-Campus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dunamis-navy to-dunamis-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of students who have launched successful careers in cybersecurity with Dunamis Edtech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                <Link href="/register/cybersecurity">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
