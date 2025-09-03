import type { Program, Feature, Testimonial, DifferencePoint } from "@/types"

export const programs: Program[] = [
  {
    id: "ai-tutoring",
    name: "AI Tutoring",
    title: "AI Tutoring",
    description: "Experience personalized learning with our AI-powered tutoring program.",
    icon: "Brain",
    href: "/programs/ai-tutoring",
    registerHref: "/register/ai-tutoring",
    featured: true,
  },
  {
    id: "coding",
    name: "Coding",
    title: "Coding",
    description: "Learn to code and build your tech career with our hands-on coding program.",
    icon: "Code",
    href: "/programs/coding",
    registerHref: "/register/coding",
    featured: true,
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    title: "Digital Marketing",
    description: "Master the art and science of digital marketing with our comprehensive program.",
    icon: "BarChart",
    href: "/programs/digital-marketing",
    registerHref: "/register/digital-marketing",
    featured: true,
  },
  {
    id: "ijmb",
    name: "IJMB Program",
    title: "IJMB Program",
    description: "Gain direct entry into 200 level in Nigerian universities through our IJMB program.",
    icon: "GraduationCap",
    href: "/programs/ijmb",
    registerHref: "/register/ijmb",
  },
  {
    id: "jupeb",
    name: "JUPEB Program",
    title: "JUPEB Program",
    description: "Prepare for direct entry into universities with our comprehensive JUPEB program.",
    icon: "BookOpen",
    href: "/programs/jupeb",
    registerHref: "/register/jupeb",
  },
  {
    id: "jamb",
    name: "JAMB Program",
    title: "JAMB Program",
    description: "Excel in your JAMB examinations with our specialized preparation program.",
    icon: "GraduationCap",
    href: "/programs/jamb",
    registerHref: "/register/jamb",
  },
  {
    id: "ielts",
    name: "IELTS Preparation",
    title: "IELTS Preparation",
    description: "Achieve your target IELTS score with our comprehensive preparation program.",
    icon: "BookOpen",
    href: "/programs/ielts",
    registerHref: "/register/ielts",
  },
  {
    id: "travel-abroad",
    name: "Travel Abroad",
    title: "Travel Abroad",
    description: "Get comprehensive guidance for studying abroad with our travel abroad program.",
    icon: "PlaneTakeoff",
    href: "/programs/travel-abroad",
    registerHref: "/register/travel-abroad",
  },
]

export const features: Feature[] = [
  {
    id: "expert-tutors",
    title: "Expert Tutors",
    description: "Learn from experienced tutors who are experts in their respective fields.",
    icon: "GraduationCap",
  },
  {
    id: "comprehensive-curriculum",
    title: "Comprehensive Curriculum",
    description: "Our programs cover all aspects of the subject matter to ensure thorough understanding.",
    icon: "BookOpen",
  },
  {
    id: "proven-results",
    title: "Proven Results",
    description: "Our students consistently achieve excellent results and gain admission to top universities.",
    icon: "CheckCircle",
  },
]

export const differencePoints: DifferencePoint[] = [
  {
    id: "ai-learning",
    title: "Personalized AI Learning",
    description:
      "Our AI-powered platform adapts to your learning style, pace, and preferences, providing personalized recommendations and real-time feedback to maximize your potential.",
    icon: "Brain",
  },
  {
    id: "self-paced",
    title: "Self-Paced Model",
    description:
      "Learn at your own speed with flexible scheduling. Whether you're a fast learner or need more time, our platform adjusts to your rhythm for optimal learning outcomes.",
    icon: "BookOpen",
  },
  {
    id: "google-curriculum",
    title: "Google Digital Garage Curriculum",
    description:
      "Our curriculum is modeled after Google Digital Garage standards, ensuring you receive world-class education that meets global industry requirements and best practices.",
    icon: "GraduationCap",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "chioma",
    name: "Chioma Okonkwo",
    role: "IJMB Student",
    content:
      "Dunamis Tutors helped me secure admission into the University of Lagos through their IJMB program. The tutors were excellent and the study materials were comprehensive.",
  },
  {
    id: "emeka",
    name: "Emeka Nwosu",
    role: "IELTS Student",
    content:
      "I achieved a band score of 7.5 in IELTS after taking the preparation course at Dunamis Tutors. The strategies and practice tests were incredibly helpful.",
  },
  {
    id: "funke",
    name: "Funke Adeyemi",
    role: "Digital Marketing Student",
    content:
      "The Digital Marketing program at Dunamis Tutors gave me the skills I needed to start my own digital marketing agency. The hands-on approach was exactly what I needed.",
  },
]
