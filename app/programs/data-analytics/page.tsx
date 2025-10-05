import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart, Database, Award, Clock, Users, BookOpen, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Analytics Program | Dunamis Edtech",
  description:
    "Master data analytics with Dunamis Edtech. Learn data visualization, statistical analysis, SQL, Python, and business intelligence. Available online and on-campus.",
  keywords:
    "data analytics course, business intelligence, data visualization, SQL training, Python for data analysis Nigeria",
}

const modules = [
  {
    level: "Beginner",
    title: "Data Analytics Fundamentals",
    duration: "4 weeks",
    topics: [
      "Introduction to Data Analytics",
      "Data Types and Data Collection",
      "Excel for Data Analysis",
      "Basic Statistics and Probability",
      "Data Cleaning and Preparation",
      "Introduction to Databases and SQL",
    ],
  },
  {
    level: "Intermediate",
    title: "Advanced Analytics & Visualization",
    duration: "5 weeks",
    topics: [
      "Python for Data Analysis (Pandas, NumPy)",
      "Data Visualization (Matplotlib, Seaborn, Plotly)",
      "SQL for Complex Queries",
      "Statistical Analysis and Hypothesis Testing",
      "Exploratory Data Analysis (EDA)",
      "Power BI and Tableau",
      "Dashboard Creation and Reporting",
    ],
  },
  {
    level: "Advanced",
    title: "Business Intelligence & Predictive Analytics",
    duration: "3 weeks",
    topics: [
      "Business Intelligence Concepts",
      "Data Warehousing Fundamentals",
      "Predictive Analytics and Machine Learning Basics",
      "Time Series Analysis and Forecasting",
      "A/B Testing and Experimentation",
      "Big Data Tools (Introduction to Spark)",
      "Analytics Project Management and Communication",
    ],
  },
]

const learningOutcomes = [
  "Collect, clean, and prepare data for analysis",
  "Perform statistical analysis and hypothesis testing",
  "Create compelling data visualizations and dashboards",
  "Write efficient SQL queries for data extraction",
  "Use Python for advanced data manipulation and analysis",
  "Build predictive models and forecasts",
  "Communicate insights effectively to stakeholders",
  "Apply analytics to solve real business problems",
]

const careerPathways = [
  {
    title: "Data Analyst",
    description: "Analyze data and provide insights to drive business decisions",
    salary: "₦2,500,000 - ₦5,500,000/year",
  },
  {
    title: "Business Intelligence Analyst",
    description: "Design and build BI solutions and reporting systems",
    salary: "₦3,500,000 - ₦7,000,000/year",
  },
  {
    title: "Data Visualization Specialist",
    description: "Create interactive dashboards and visual reports",
    salary: "₦3,000,000 - ₦6,000,000/year",
  },
  {
    title: "Marketing Analyst",
    description: "Analyze marketing campaigns and customer behavior",
    salary: "₦3,000,000 - ₦6,500,000/year",
  },
  {
    title: "Senior Data Analyst",
    description: "Lead analytics projects and mentor junior analysts",
    salary: "₦5,000,000 - ₦10,000,000/year",
  },
  {
    title: "Analytics Manager",
    description: "Manage analytics teams and strategy",
    salary: "₦7,000,000 - ₦15,000,000/year",
  },
]

export default function DataAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dunamis-navy via-dunamis-blue to-dunamis-navy text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-cyan-500 text-white border-0">
              <BarChart className="mr-1 h-3 w-3" />
              Data & Insights
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Data Analytics Program</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform raw data into actionable insights. Master data visualization, statistical analysis, SQL, Python,
              and business intelligence tools to make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                <Link href="/register/data-analytics">
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
                <CardDescription>12 weeks intensive program</CardDescription>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Data Analytics?</h2>
            <p className="text-gray-600 text-lg mb-6">
              Data analytics is the science of analyzing raw data to extract meaningful insights and inform
              decision-making. It involves collecting, processing, and performing statistical analyses on large datasets
              to discover patterns, correlations, and trends. In our program, you'll learn to transform data into
              compelling stories that drive business strategy.
            </p>
            <p className="text-gray-600 text-lg">
              With organizations increasingly relying on data-driven decision-making, skilled data analysts are in high
              demand across all industries. Our comprehensive program prepares you for this exciting field with hands-on
              training in modern analytics tools and techniques.
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
              Our comprehensive curriculum takes you from data fundamentals to advanced business intelligence and
              predictive analytics.
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
              Launch your data analytics career with opportunities in various industries and specializations.
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
                <Database className="h-10 w-10 text-dunamis-orange mb-4" />
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
                    <span>Access to analytics tools and datasets</span>
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
                  <Link href="/register/data-analytics?mode=online">Enroll Online</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-dunamis-navy">
              <CardHeader>
                <Users className="h-10 w-10 text-dunamis-navy mb-4" />
                <CardTitle className="text-2xl">On-Campus Learning</CardTitle>
                <CardDescription className="text-base">Hands-on training in our analytics lab</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                    <span>In-person instruction and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-dunamis-navy flex-shrink-0 mt-0.5" />
                    <span>Access to powerful computers and software</span>
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
                  <Link href="/register/data-analytics?mode=campus">Enroll On-Campus</Link>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Data Analytics Journey?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of students who have launched successful careers in data analytics with Dunamis Edtech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90">
                <Link href="/register/data-analytics">
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
