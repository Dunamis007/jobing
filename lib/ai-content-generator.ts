import OpenAI from "openai"

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  dangerouslyAllowBrowser: true, // Only for demo purposes
})

export async function generatePastQuestions(subject: string, examType: string, count = 5) {
  try {
    const prompt = `Generate ${count} ${examType} past questions for ${subject} with answers and explanations. Format as JSON array with structure: 
    [{ "question": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "answer": "A", "explanation": "..." }]`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    })

    const content = response.choices[0]?.message?.content || ""

    // Add additional error handling for JSON parsing
    try {
      const parsedContent = JSON.parse(content)
      // Validate the structure of the parsed content
      if (!Array.isArray(parsedContent)) {
        console.error("API did not return an array:", parsedContent)
        return {
          data: generateFallbackPastQuestions(subject, count),
          isGenerated: true,
        }
      }

      return {
        data: parsedContent,
        isGenerated: true,
      }
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError, "Content:", content)
      return {
        data: generateFallbackPastQuestions(subject, count),
        isGenerated: true,
      }
    }
  } catch (error) {
    console.error("Error generating past questions:", error)
    return {
      data: generateFallbackPastQuestions(subject, count),
      isGenerated: true,
    }
  }
}

export async function generateCourseMaterial(subject: string, classLevel: string) {
  try {
    const prompt = `Generate a comprehensive study note for ${subject} at ${classLevel} level. Include key concepts, examples, and explanations. Format as: { "title": "...", "content": "..." }`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    })

    const content = response.choices[0]?.message?.content || ""
    return {
      data: JSON.parse(content),
      isGenerated: true,
    }
  } catch (error) {
    console.error("Error generating course material:", error)
    return {
      data: generateFallbackCourseMaterial(subject, classLevel),
      isGenerated: true,
    }
  }
}

export async function generateAssignments(subject: string, count = 2) {
  try {
    const prompt = `Generate ${count} academic assignments for ${subject}. Format as JSON array with structure: 
    [{ "title": "...", "instructions": "...", "deadline": "2024-05-15" }]`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    })

    const content = response.choices[0]?.message?.content || ""
    return {
      data: JSON.parse(content),
      isGenerated: true,
    }
  } catch (error) {
    console.error("Error generating assignments:", error)
    return {
      data: generateFallbackAssignments(subject),
      isGenerated: true,
    }
  }
}

export async function generateScholarships(region: string, count = 5) {
  try {
    const prompt = `Generate ${count} scholarships for students in ${region}. Format as JSON array with structure: 
    [{ "title": "...", "country": "...", "funding_type": "...", "deadline": "2024-06-30", "description": "...", "apply_link": "https://example.com" }]`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    })

    const content = response.choices[0]?.message?.content || ""
    return {
      data: JSON.parse(content),
      isGenerated: true,
    }
  } catch (error) {
    console.error("Error generating scholarships:", error)
    return {
      data: generateFallbackScholarships(region),
      isGenerated: true,
    }
  }
}

export async function generateForumTopics(category: string, count = 5) {
  try {
    const prompt = `Generate ${count} forum discussion topics related to ${category} for an educational platform. Format as JSON array with structure: 
    [{ "topic": "...", "description": "...", "tags": ["...", "..."] }]`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    })

    const content = response.choices[0]?.message?.content || ""
    return {
      data: JSON.parse(content),
      isGenerated: true,
    }
  } catch (error) {
    console.error("Error generating forum topics:", error)
    return {
      data: generateFallbackForumTopics(category),
      isGenerated: true,
    }
  }
}

export async function generateMentorProfile(specialty: string) {
  try {
    const prompt = `Generate a profile for an academic mentor specializing in ${specialty}. Format as: 
    { "name": "...", "specialty": "${specialty}", "bio": "...", "experience": "...", "availability": ["Monday", "Wednesday", "Friday"] }`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    })

    const content = response.choices[0]?.message?.content || ""
    return {
      data: JSON.parse(content),
      isGenerated: true,
    }
  } catch (error) {
    console.error("Error generating mentor profile:", error)
    return {
      data: generateFallbackMentorProfile(specialty),
      isGenerated: true,
    }
  }
}

export async function generateStudyAbroadInfo(country: string) {
  try {
    const prompt = `Generate comprehensive information about studying abroad in ${country}. Include visa requirements, top universities, cost of living, and application process. Format as: 
    { "country": "${country}", "visa_requirements": "...", "top_universities": ["...", "..."], "cost_of_living": "...", "application_process": "...", "required_documents": ["...", "..."] }`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    })

    const content = response.choices[0]?.message?.content || ""
    return {
      data: JSON.parse(content),
      isGenerated: true,
    }
  } catch (error) {
    console.error("Error generating study abroad info:", error)
    return {
      data: generateFallbackStudyAbroadInfo(country),
      isGenerated: true,
    }
  }
}

// Fallback functions in case the API fails
function generateFallbackPastQuestions(subject: string, count = 5) {
  const questions = []

  if (subject === "Mathematics") {
    questions.push({
      question: "Solve for x: 2x + 5 = 15",
      options: ["A. x = 5", "B. x = 10", "C. x = -5", "D. x = 0"],
      answer: "A",
      explanation: "2x + 5 = 15\n2x = 15 - 5\n2x = 10\nx = 5",
    })
    questions.push({
      question: "Find the derivative of f(x) = x² + 3x + 2",
      options: ["A. f'(x) = 2x + 3", "B. f'(x) = x² + 3", "C. f'(x) = 2x", "D. f'(x) = 3"],
      answer: "A",
      explanation:
        "The derivative of x² is 2x, the derivative of 3x is 3, and the derivative of a constant is 0. So f'(x) = 2x + 3.",
    })
  } else if (subject === "Physics") {
    questions.push({
      question: "What is the SI unit of force?",
      options: ["A. Watt", "B. Joule", "C. Newton", "D. Pascal"],
      answer: "C",
      explanation:
        "The SI unit of force is the Newton (N), which is defined as the force needed to accelerate a mass of 1 kilogram by 1 meter per second squared.",
    })
    questions.push({
      question: "Which of the following is a vector quantity?",
      options: ["A. Mass", "B. Temperature", "C. Velocity", "D. Energy"],
      answer: "C",
      explanation:
        "Velocity is a vector quantity because it has both magnitude and direction. Mass, temperature, and energy are scalar quantities.",
    })
  } else {
    for (let i = 1; i <= count; i++) {
      questions.push({
        question: `Sample ${subject} question ${i}`,
        options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
        answer: "A",
        explanation: `This is a sample explanation for question ${i}.`,
      })
    }
  }

  return questions
}

function generateFallbackCourseMaterial(subject: string, classLevel: string) {
  return {
    title: `${subject} Study Notes for ${classLevel}`,
    content: `This is a sample study note for ${subject} at ${classLevel} level. It includes key concepts and explanations to help students understand the subject better.

## Key Concepts

1. First important concept in ${subject}
2. Second important concept in ${subject}
3. Third important concept in ${subject}

## Examples

Here are some examples to illustrate the concepts:

Example 1: Description of the first example
Example 2: Description of the second example

## Practice Problems

1. First practice problem
2. Second practice problem

## Summary

This study note covers the fundamental concepts of ${subject} at ${classLevel} level. Students should practice the examples and problems to reinforce their understanding.`,
  }
}

function generateFallbackAssignments(subject: string) {
  const now = new Date()
  const deadline1 = new Date(now)
  deadline1.setDate(now.getDate() + 7)

  const deadline2 = new Date(now)
  deadline2.setDate(now.getDate() + 14)

  return [
    {
      title: `${subject} Research Assignment`,
      instructions: `Research and write a 1000-word essay on a topic of your choice related to ${subject}. Include at least 5 references and follow the APA citation style.`,
      deadline: deadline1.toISOString().split("T")[0],
    },
    {
      title: `${subject} Problem Set`,
      instructions: `Complete the attached problem set covering recent topics in ${subject}. Show all your work and explain your reasoning for each solution.`,
      deadline: deadline2.toISOString().split("T")[0],
    },
  ]
}

function generateFallbackScholarships(region: string) {
  if (region === "Europe") {
    return [
      {
        title: "Erasmus Mundus Scholarship",
        country: "Multiple EU Countries",
        funding_type: "Full Scholarship",
        deadline: "2024-06-30",
        description:
          "The Erasmus Mundus Joint Master Degree (EMJMD) is a prestigious, integrated, international study program, jointly delivered by an international consortium of higher education institutions.",
        apply_link: "https://example.com/erasmus",
      },
      {
        title: "DAAD Scholarships",
        country: "Germany",
        funding_type: "Full/Partial Scholarship",
        deadline: "2024-05-15",
        description:
          "The German Academic Exchange Service (DAAD) offers scholarships for international students to study in Germany at various academic levels.",
        apply_link: "https://example.com/daad",
      },
    ]
  } else if (region === "America") {
    return [
      {
        title: "Fulbright Foreign Student Program",
        country: "United States",
        funding_type: "Full Scholarship",
        deadline: "2024-07-15",
        description:
          "The Fulbright Program provides grants for individually designed for graduate students, young professionals and artists to study in the United States.",
        apply_link: "https://example.com/fulbright",
      },
      {
        title: "Chevening Scholarship",
        country: "United Kingdom",
        funding_type: "Full Scholarship",
        deadline: "2024-06-01",
        description:
          "Chevening is the UK government's international awards program aimed at developing global leaders.",
        apply_link: "https://example.com/chevening",
      },
    ]
  } else {
    return [
      {
        title: `${region} Educational Trust Scholarship`,
        country: `Various countries in ${region}`,
        funding_type: "Partial Scholarship",
        deadline: "2024-06-30",
        description: `This scholarship supports students from ${region} pursuing higher education in various fields.`,
        apply_link: "https://example.com/scholarship1",
      },
      {
        title: `${region} Excellence Award`,
        country: `Various countries in ${region}`,
        funding_type: "Merit-based Scholarship",
        deadline: "2024-07-15",
        description: `This award recognizes academic excellence among students from ${region} and provides financial support for their education.`,
        apply_link: "https://example.com/scholarship2",
      },
    ]
  }
}

function generateFallbackForumTopics(category: string) {
  if (category === "JAMB Preparation") {
    return [
      {
        topic: "Best study schedule for JAMB preparation",
        description:
          "I'm preparing for JAMB and would like to know what study schedule works best. How many hours should I study each day? How should I divide my time between subjects?",
        tags: ["Study Schedule", "Time Management", "JAMB"],
      },
      {
        topic: "Recommended textbooks for JAMB Physics",
        description:
          "Can anyone recommend good textbooks for JAMB Physics? I'm looking for books that cover all the topics and have practice questions.",
        tags: ["Physics", "Textbooks", "JAMB"],
      },
    ]
  } else {
    return [
      {
        topic: `Tips for succeeding in ${category}`,
        description: `I'm looking for advice on how to excel in ${category}. What strategies have worked for you?`,
        tags: [category, "Study Tips", "Success Strategies"],
      },
      {
        topic: `Resources for ${category}`,
        description: `What are the best resources (books, websites, videos) for learning ${category}?`,
        tags: [category, "Resources", "Learning Materials"],
      },
    ]
  }
}

function generateFallbackMentorProfile(specialty: string) {
  return {
    name: `Dr. James ${specialty.charAt(0).toUpperCase() + specialty.slice(1)}`,
    specialty: specialty,
    bio: `Experienced educator with over 10 years of teaching experience in ${specialty}. Passionate about helping students achieve their academic goals.`,
    experience: `Ph.D. in ${specialty} from Oxford University. Has taught at various prestigious institutions and mentored numerous students who have gone on to successful careers.`,
    availability: ["Monday", "Wednesday", "Friday"],
  }
}

function generateFallbackStudyAbroadInfo(country: string) {
  return {
    country: country,
    visa_requirements: `Student visa requirements for ${country} typically include proof of acceptance from a recognized institution, financial capability to support yourself, and health insurance. The application process usually takes 4-8 weeks.`,
    top_universities: [
      `${country} National University`,
      `University of ${country}`,
      `${country} Institute of Technology`,
    ],
    cost_of_living: `The average cost of living in ${country} for international students ranges from $800 to $1,500 per month, depending on the city and lifestyle. This includes accommodation, food, transportation, and other expenses.`,
    application_process: `The application process for universities in ${country} typically starts 6-12 months before the intended start date. Most universities require online applications, academic transcripts, letters of recommendation, and proof of language proficiency.`,
    required_documents: [
      "Valid passport",
      "Acceptance letter from university",
      "Proof of financial support",
      "Health insurance",
      "Academic transcripts",
      "Language proficiency test results",
    ],
  }
}
