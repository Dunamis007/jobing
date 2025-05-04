// Zodiac sign determination and traits

interface ZodiacSign {
  name: string
  startMonth: number
  startDay: number
  endMonth: number
  endDay: number
  traits: string[]
  learningTraits: string[]
  compatibleSubjects: string[]
}

const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    traits: ["Energetic", "Confident", "Impulsive", "Leader", "Competitive"],
    learningTraits: ["Quick learner", "Prefers challenges", "Gets bored easily", "Likes competition"],
    compatibleSubjects: ["Mathematics", "Sports", "Leadership", "Entrepreneurship", "Debate"],
  },
  {
    name: "Taurus",
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    traits: ["Patient", "Reliable", "Stubborn", "Practical", "Determined"],
    learningTraits: ["Methodical", "Prefers structure", "Needs practical applications", "Persistent"],
    compatibleSubjects: ["Economics", "Agriculture", "Art", "Music", "Cooking"],
  },
  {
    name: "Gemini",
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    traits: ["Adaptable", "Curious", "Communicative", "Indecisive", "Versatile"],
    learningTraits: ["Learns through conversation", "Needs variety", "Good at multitasking", "Enjoys debates"],
    compatibleSubjects: ["Languages", "Communication", "Journalism", "Social Media", "Literature"],
  },
  {
    name: "Cancer",
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    traits: ["Emotional", "Intuitive", "Protective", "Nurturing", "Sensitive"],
    learningTraits: ["Emotional connection to material", "Good memory", "Needs safe environment", "Empathetic"],
    compatibleSubjects: ["Psychology", "History", "Nursing", "Counseling", "Culinary Arts"],
  },
  {
    name: "Leo",
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    traits: ["Confident", "Creative", "Dominant", "Generous", "Loyal"],
    learningTraits: ["Learns through performance", "Likes recognition", "Natural leader", "Creative thinker"],
    compatibleSubjects: ["Drama", "Politics", "Management", "Public Speaking", "Creative Writing"],
  },
  {
    name: "Virgo",
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    traits: ["Analytical", "Practical", "Diligent", "Critical", "Modest"],
    learningTraits: ["Detail-oriented", "Organized", "Analytical", "Perfectionist"],
    compatibleSubjects: ["Sciences", "Mathematics", "Engineering", "Medicine", "Research"],
  },
  {
    name: "Libra",
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    traits: ["Diplomatic", "Fair", "Social", "Cooperative", "Indecisive"],
    learningTraits: ["Learns through discussion", "Values fairness", "Needs harmony", "Good at mediation"],
    compatibleSubjects: ["Law", "Design", "Ethics", "Diplomacy", "Social Sciences"],
  },
  {
    name: "Scorpio",
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    traits: ["Passionate", "Resourceful", "Brave", "Secretive", "Determined"],
    learningTraits: ["Deep researcher", "Intense focus", "Investigative", "Persistent"],
    compatibleSubjects: ["Psychology", "Investigation", "Research", "Occult Studies", "Surgery"],
  },
  {
    name: "Sagittarius",
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    traits: ["Optimistic", "Adventurous", "Independent", "Honest", "Philosophical"],
    learningTraits: ["Loves learning", "Philosophical", "Needs freedom", "Big picture thinker"],
    compatibleSubjects: ["Philosophy", "Travel", "Religion", "Higher Education", "Foreign Languages"],
  },
  {
    name: "Capricorn",
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    traits: ["Disciplined", "Responsible", "Practical", "Ambitious", "Patient"],
    learningTraits: ["Goal-oriented", "Structured", "Disciplined", "Traditional"],
    compatibleSubjects: ["Business", "Management", "Economics", "Government", "Architecture"],
  },
  {
    name: "Aquarius",
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    traits: ["Progressive", "Original", "Independent", "Humanitarian", "Intellectual"],
    learningTraits: ["Innovative thinker", "Needs intellectual stimulation", "Collaborative", "Forward-thinking"],
    compatibleSubjects: ["Technology", "Science", "Sociology", "Astronomy", "Humanitarian Studies"],
  },
  {
    name: "Pisces",
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    traits: ["Intuitive", "Compassionate", "Artistic", "Gentle", "Dreamy"],
    learningTraits: ["Creative", "Intuitive learning", "Emotional connection", "Visual learner"],
    compatibleSubjects: ["Arts", "Music", "Poetry", "Psychology", "Spirituality"],
  },
]

export const zodiac = {
  getZodiacSign: (month: number, day: number): string => {
    const sign = zodiacSigns.find((sign) => {
      // Handle zodiac signs that span across year boundary (e.g., Capricorn)
      if (sign.startMonth > sign.endMonth) {
        return (
          (month === sign.startMonth && day >= sign.startDay) ||
          (month === sign.endMonth && day <= sign.endDay) ||
          (month > sign.startMonth && month < 13) ||
          (month < sign.endMonth && month > 0)
        )
      }

      // Handle regular zodiac signs
      return (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay) ||
        (month > sign.startMonth && month < sign.endMonth)
      )
    })

    return sign ? sign.name : "Unknown"
  },

  getZodiacTraits: (signName: string): string[] => {
    const sign = zodiacSigns.find((s) => s.name === signName)
    return sign ? sign.traits : []
  },

  getLearningTraits: (signName: string): string[] => {
    const sign = zodiacSigns.find((s) => s.name === signName)
    return sign ? sign.learningTraits : []
  },

  getCompatibleSubjects: (signName: string): string[] => {
    const sign = zodiacSigns.find((s) => s.name === signName)
    return sign ? sign.compatibleSubjects : []
  },

  getAllSigns: (): string[] => {
    return zodiacSigns.map((sign) => sign.name)
  },
}
