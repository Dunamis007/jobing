import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "Ultimate Guide to Coding for Beginners: From Scratch to Success 🚀",
    excerpt:
      "Are you curious about coding but not sure where to start? Whether you're a student, a parent looking for coding for kids, or someone asking 'coding kaise sikhe?', this guide is for you. At Dunamis Tutors, we make learning coding for beginners simple, fun, and practical — no prior experience needed!",
    author: "Dunamis Tutors Team",
    date: "December 22, 2024",
    readTime: "12 min read",
    category: "Coding",
    image: "/placeholder.svg?height=400&width=600",
    fullContent: `
🧠 What is Coding? (Coding Kya Hai)
Coding is the process of writing instructions that a computer can understand. These instructions are written in programming languages like Python, HTML, and JavaScript. You use coding to create websites, apps, games, and even music!

🎯 Why Learn Coding in 2025?
• High demand for developers in AI, tech, and even healthcare (think medical coding and medical billing and coding jobs).
• You can build your own coding websites or even work remotely.
• Coding salary packages are competitive globally and growing locally in Nigeria.

🧒 Coding for Kids
Coding is no longer just for adults. Platforms like Scratch coding and vibe coding allow kids to build games while learning logic. At Dunamis Tutors, we offer structured coding courses for kids to make learning playful and productive.

🧩 Coding Decoding Reasoning: Trick for Exam Prep
Preparing for government or competitive exams? We also cover coding decoding reasoning tricks and questions to help with aptitude tests. These techniques are commonly used in logic-based exams like SSC, Bank PO, and other government job prep.

If you're following guides like Coding Decoding by Piyush Varshney, we simplify it even further in our lessons.

🎵 Coding Music & Creativity
Did you know you can make music with code? Tools like Sonic Pi and live-coding platforms allow students to mix creativity with programming. It's one of the most fun ways to fall in love with Python coding.

📚 Popular Coding Languages You Can Learn
Here are some beginner-friendly options we offer:
• Python – Great for data science, AI, and automation
• HTML/CSS – Core for websites
• JavaScript – Web interactivity
• Scratch – Best for kids and new learners
• SQL – Databases and data management

📱 Coding Apps & Websites to Try
Alongside our full coding bootcamp, here are some tools and apps to get started:
• Scratch
• Code.org
• dp coding school
• Coding Ninjas
• Replit for real-time collaboration

👩‍⚕️ What About Medical Coding?
Medical coding is different from programming. It involves translating healthcare procedures into codes for billing. You can explore our medical coding course, learn about medical billing and coding salaries, and explore medical coding jobs globally.

📅 How Many Hours Does Coding Take?
We suggest starting with 1–2 hours daily. Our courses are structured with clear modules, exercises, and real projects. Even with limited coding hours, you can make progress quickly — especially with the support of our instructors.

🧭 How to Get Started – Coding Kaise Sikhe?
Whether you're searching for "coding kaise sikhe in Hindi" or prefer English, we have beginner modules for every language background. Start small, stay consistent, and choose a clear path (like web development or AI).

🧑‍💻 Ready to Begin Your Journey?
From coding AI, games, and apps to medical coding, the future is built by those who code. Join our beginner-friendly coding course today and unlock a world of opportunity.

👉 Join Dunamis Tutors Coding Bootcamp Now!
👉 Download our Syllabus (PDF)
  `,
  }

  const blogPosts = [
    {
      title: "The Ultimate Guide to the Best Free AI Image Enhancers Online in 2025",
      excerpt:
        "Discover the top AI image enhancers that can transform your low-resolution pictures into 4K masterpieces. From Vance AI to Leonardo AI, explore the best free tools available online.",
      author: "Dunamis Tutors Team",
      date: "December 20, 2024",
      readTime: "10 min read",
      category: "AI & Technology",
      image: "/placeholder.svg?height=200&width=300",
      slug: "ultimate-guide-best-free-ai-image-enhancers-online-2025",
    },
    {
      title: "5 Essential Study Tips for JAMB Success",
      excerpt:
        "Master these proven strategies to excel in your JAMB examinations and secure admission to your dream university.",
      author: "Prof. Kemi Adeyemi",
      date: "December 12, 2024",
      readTime: "5 min read",
      category: "JAMB Prep",
      image: "/placeholder.svg?height=200&width=300",
      slug: "5-essential-study-tips-jamb-success",
    },
    {
      title: "Digital Marketing Trends in Nigeria for 2025",
      excerpt:
        "Stay ahead of the curve with the latest digital marketing trends shaping the Nigerian business landscape.",
      author: "Emeka Nwosu",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=200&width=300",
      slug: "digital-marketing-trends-nigeria-2025",
    },
    {
      title: "IELTS Speaking Test: Common Mistakes to Avoid",
      excerpt:
        "Learn from the most common IELTS speaking mistakes and how to avoid them to achieve your target band score.",
      author: "Sarah Johnson",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "IELTS",
      image: "/placeholder.svg?height=200&width=300",
      slug: "ielts-speaking-test-common-mistakes-avoid",
    },
    {
      title: "Coding Bootcamp vs University: Which Path is Right for You?",
      excerpt:
        "Compare the benefits and drawbacks of coding bootcamps versus traditional university computer science programs.",
      author: "Michael Chen",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Coding",
      image: "/placeholder.svg?height=200&width=300",
      slug: "coding-bootcamp-vs-university-which-path-right",
    },
    {
      title: "Study Abroad Guide: Top Universities in Canada for Nigerian Students",
      excerpt:
        "Everything you need to know about studying in Canada, from application processes to scholarship opportunities.",
      author: "Funmi Adebayo",
      date: "December 3, 2024",
      readTime: "12 min read",
      category: "Study Abroad",
      image: "/placeholder.svg?height=200&width=300",
      slug: "study-abroad-guide-top-universities-canada",
    },
    {
      title: "IJMB vs JUPEB: Which Direct Entry Program Should You Choose?",
      excerpt:
        "A comprehensive comparison of IJMB and JUPEB programs to help you make the best choice for your academic future.",
      author: "Dr. Chinedu Okoro",
      date: "December 1, 2024",
      readTime: "8 min read",
      category: "Direct Entry",
      image: "/placeholder.svg?height=200&width=300",
      slug: "ijmb-vs-jupeb-which-direct-entry-program",
    },
  ]

  const categories = [
    "All",
    "AI & Education",
    "JAMB Prep",
    "Digital Marketing",
    "IELTS",
    "Coding",
    "Study Abroad",
    "Direct Entry",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-dunamis-primary py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Dunamis Tutors Blog
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-300 md:text-xl/relaxed">
              Stay updated with the latest insights, tips, and trends in education, technology, and career development.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        {/* Featured Post */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dunamis-primary mb-6">Featured Post</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-dunamis-primary">{featuredPost.category}</Badge>
                <h3 className="text-2xl font-bold text-dunamis-primary mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-dunamis-primary hover:bg-dunamis-secondary">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-dunamis-primary hover:bg-dunamis-secondary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-dunamis-primary">{post.category}</Badge>
                  <CardTitle className="text-lg text-dunamis-primary hover:text-dunamis-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-dunamis-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest educational insights, study tips, and career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white" />
            <Button variant="secondary" className="bg-dunamis-accent hover:bg-dunamis-accent/90">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
