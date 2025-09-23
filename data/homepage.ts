import type { Program, Feature, Testimonial, Difference } from "@/types"

export const programs: Program[] = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence with personalized AI-powered learning experiences",
    icon: "brain",
    href: "/programs/ai-tutoring",
    color: "bg-blue-500",
    features: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
    price: "₦50,000",
    type: "flexible", // Can be online or in-person
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Learn programming from scratch to advanced with hands-on projects",
    icon: "code",
    href: "/programs/coding",
    color: "bg-green-500",
    features: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps"],
    price: "₦75,000",
    type: "flexible", // Can be online or in-person
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master online marketing strategies and grow your digital presence",
    icon: "trending-up",
    href: "/programs/digital-marketing",
    color: "bg-purple-500",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    price: "₦40,000",
    type: "flexible", // Can be online or in-person
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Achieve your target IELTS score with expert guidance and practice",
    icon: "globe",
    href: "/programs/ielts",
    color: "bg-red-500",
    features: ["Speaking", "Writing", "Reading", "Listening"],
    price: "₦35,000",
    type: "flexible", // Can be online or in-person
  },
  {
    id: "jamb",
    title: "JAMB Program",
    description: "Joint Admissions and Matriculation Board examination preparation",
    icon: "graduation-cap",
    href: "/programs/jamb",
    color: "bg-yellow-500",
    features: ["Mathematics", "English", "Physics", "Chemistry"],
    price: "₦15,000",
    type: "flexible", // Can be online or in-person
  },
  {
    id: "jupeb",
    title: "JUPEB Program",
    description: "Joint Universities Preliminary Examinations Board preparation",
    icon: "book-open",
    href: "/programs/jupeb",
    color: "bg-indigo-500",
    features: ["Core Subjects", "Electives", "Practical Labs", "Mock Exams"],
    price: "₦15,000",
    type: "flexible", // Can be online or in-person
  },
  {
    id: "ijmb",
    title: "IJMB Program",
    description: "Interim Joint Matriculation Board examination preparation",
    icon: "graduation-cap",
    href: "/programs/ijmb",
    color: "bg-yellow-500",
    features: ["University Preparation", "Subject Specialization", "Exam Success", "Direct Entry"],
    price: "₦15,000",
    type: "flexible", // Can be online or in-person
  },
  {
    id: "travel-abroad",
    title: "Travel Abroad",
    description: "Complete guidance for studying and working abroad with visa assistance",
    icon: "plane",
    href: "/programs/travel-abroad",
    color: "bg-teal-500",
    features: ["Visa Assistance", "University Applications", "Document Prep", "Interview Training"],
    price: "₦25,000",
    type: "flexible", // Can be online or in-person
  },
]

export const features: Feature[] = [
  {
    id: "personalized-learning",
    title: "Personalized Learning",
    description: "AI-powered adaptive learning paths tailored to your pace and style",
    icon: "user",
  },
  {
    id: "expert-instructors",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
    icon: "users",
  },
  {
    id: "flexible-schedule",
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials",
    icon: "clock",
  },
  {
    id: "practical-projects",
    title: "Practical Projects",
    description: "Build real-world projects to showcase your skills to employers",
    icon: "briefcase",
  },
  {
    id: "certification",
    title: "Industry Certification",
    description: "Earn recognized certificates upon successful completion",
    icon: "award",
  },
  {
    id: "community-support",
    title: "Community Support",
    description: "Join a vibrant community of learners and mentors",
    icon: "message-circle",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Software Developer",
    content:
      "Dunamis Tutors transformed my career. The AI tutoring program gave me the skills I needed to land my dream job in tech.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Digital Marketing Manager",
    content:
      "The digital marketing course was comprehensive and practical. I increased my company's online revenue by 300% using what I learned.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    id: "aisha-ibrahim",
    name: "Aisha Ibrahim",
    role: "University Student",
    content:
      "Thanks to the JUPEB program, I gained direct entry into my dream university. The tutors were exceptional and supportive.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
]

export const differencePoints: Difference[] = [
  {
    id: "ai-powered",
    title: "AI-Powered Learning",
    description: "Our proprietary AI technology adapts to your learning style and pace",
    icon: "zap",
  },
  {
    id: "industry-experts",
    title: "Industry Experts",
    description: "Learn from professionals currently working in top companies",
    icon: "star",
  },
  {
    id: "job-guarantee",
    title: "Job Placement Support",
    description: "We help you land your first job with our extensive network",
    icon: "target",
  },
  {
    id: "lifetime-access",
    title: "Lifetime Access",
    description: "Once enrolled, you have lifetime access to course updates",
    icon: "infinity",
  },
]

export const heroContent = {
  title: "Learn AI, Coding & More with Expert Tutors",
  subtitle:
    "Transform your career with our comprehensive online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and JAMB preparation.",
  primaryCTA: "Start Learning Today",
  secondaryCTA: "Watch Demo",
  heroImage: "https://i.imgur.com/yhOy5P3.jpeg",
}

export const companyInfo = {
  name: "Dunamis Tutors",
  logo: "https://i.imgur.com/dvWoOpc.jpeg",
  phone: "07032090178",
  email: "info@dunamistutors.com",
  address: "Lagos, Nigeria",
  website: "https://dunamistutors.com",
  description:
    "Leading online education platform in Nigeria. Master AI, Coding, Digital Marketing, IELTS, JUPEB, and more with expert tutors and personalized learning paths.",
}

export const stats = [
  { label: "Students", value: "10,000+" },
  { label: "Success Rate", value: "95%" },
  { label: "Expert Instructors", value: "50+" },
  { label: "Countries", value: "15+" },
]
