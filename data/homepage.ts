import type { Program, Feature, Testimonial, Difference } from "@/types"

export const programs: Program[] = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence with personalized AI-powered learning experiences",
    icon: "Brain",
    href: "/programs/ai-tutoring",
    color: "bg-blue-500",
    features: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
    price: "₦50,000",
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Learn programming from scratch to advanced with hands-on projects",
    icon: "Code",
    href: "/programs/coding",
    color: "bg-green-500",
    features: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps"],
    price: "₦75,000",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master online marketing strategies and grow your digital presence",
    icon: "TrendingUp",
    href: "/programs/digital-marketing",
    color: "bg-purple-500",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    price: "₦40,000",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Achieve your target IELTS score with expert guidance and practice",
    icon: "Globe",
    href: "/programs/ielts",
    color: "bg-red-500",
    features: ["Speaking", "Writing", "Reading", "Listening"],
    price: "₦35,000",
  },
  {
    id: "jupeb",
    title: "JUPEB Program",
    description: "Direct entry preparation for Nigerian universities",
    icon: "GraduationCap",
    href: "/programs/jupeb",
    color: "bg-yellow-500",
    features: ["Literature", "Government", "Economics", "CRS"],
    price: "₦179,000",
  },
  {
    id: "jamb",
    title: "JAMB Preparation",
    description: "Excel in your UTME examinations with comprehensive preparation",
    icon: "BookOpen",
    href: "/programs/jamb",
    color: "bg-indigo-500",
    features: ["Mathematics", "English", "Physics", "Chemistry"],
    price: "₦25,000",
  },
]

export const features: Feature[] = [
  {
    id: "personalized-learning",
    title: "Personalized Learning",
    description: "AI-powered adaptive learning paths tailored to your pace and style",
    icon: "User",
  },
  {
    id: "expert-instructors",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
    icon: "Users",
  },
  {
    id: "flexible-schedule",
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials",
    icon: "Clock",
  },
  {
    id: "practical-projects",
    title: "Practical Projects",
    description: "Build real-world projects to showcase your skills to employers",
    icon: "Briefcase",
  },
  {
    id: "certification",
    title: "Industry Certification",
    description: "Earn recognized certificates upon successful completion",
    icon: "Award",
  },
  {
    id: "community-support",
    title: "Community Support",
    description: "Join a vibrant community of learners and mentors",
    icon: "MessageCircle",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Software Developer",
    content:
      "Dunamis Tutors transformed my career. The AI tutoring program gave me the skills I needed to land my dream job in tech.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Digital Marketing Manager",
    content:
      "The digital marketing course was comprehensive and practical. I increased my company's online revenue by 300% using what I learned.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: "aisha-ibrahim",
    name: "Aisha Ibrahim",
    role: "University Student",
    content:
      "Thanks to the JUPEB program, I gained direct entry into my dream university. The tutors were exceptional and supportive.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export const differences: Difference[] = [
  {
    id: "ai-powered",
    title: "AI-Powered Learning",
    description: "Our proprietary AI technology adapts to your learning style and pace",
    icon: "Zap",
  },
  {
    id: "industry-experts",
    title: "Industry Experts",
    description: "Learn from professionals currently working in top companies",
    icon: "Star",
  },
  {
    id: "job-guarantee",
    title: "Job Placement Support",
    description: "We help you land your first job with our extensive network",
    icon: "Target",
  },
  {
    id: "lifetime-access",
    title: "Lifetime Access",
    description: "Once enrolled, you have lifetime access to course updates",
    icon: "Infinity",
  },
]
