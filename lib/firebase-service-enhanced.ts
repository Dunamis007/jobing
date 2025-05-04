import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/lib/firebase"
import {
  generatePastQuestions,
  generateCourseMaterial,
  generateAssignments,
  generateScholarships,
  generateMentorProfile,
  generateStudyAbroadInfo,
} from "./ai-content-generator"

// Import existing types and services from firebase-service.ts
import {
  type PastQuestion,
  type CourseMaterial,
  type Assignment,
  type StudyGroup,
  type Scholarship,
  pastQuestionsService,
  courseMaterialsService,
  assignmentsService,
  studyGroupsService,
  scholarshipsService,
  mentorChatService,
  forumService,
  userSettingsService,
} from "./firebase-service"

// New types for enhanced features
export interface EnhancedPastQuestion extends PastQuestion {
  exam_type: string
  options: string[]
  isGenerated?: boolean
}

export interface EnhancedCourseMaterial extends CourseMaterial {
  class_level: string
  content?: string
  isGenerated?: boolean
}

export interface EnhancedAssignment extends Assignment {
  submission_link?: string
  isGenerated?: boolean
}

export interface StudyGroupMember {
  uid: string
  displayName: string
  photoURL?: string
  joinedAt: Timestamp
}

export interface EnhancedStudyGroup extends StudyGroup {
  group_code: string
  members: StudyGroupMember[]
  isGenerated?: boolean
}

export interface EnhancedScholarship extends Scholarship {
  country: string
  region: string
  funding_type: string
  apply_link: string
  isGenerated?: boolean
}

export interface Mentor {
  id: string
  name: string
  specialty: string
  bio: string
  experience: string
  availability: string[]
  photoURL?: string
  uid: string
  isGenerated?: boolean
}

export interface StudyAbroadInfo {
  id: string
  country: string
  region: string
  visa_requirements: string
  top_universities: string[]
  cost_of_living: string
  application_process: string
  required_documents: string[]
  isGenerated?: boolean
}

// Enhanced Past Questions Service
export const enhancedPastQuestionsService = {
  ...pastQuestionsService,

  // Get past questions by subject and exam type
  getPastQuestionsByExamType: async (subject: string, examType: string, year?: number) => {
    try {
      let q = query(
        collection(db, "past_questions"),
        where("subject", "==", subject),
        where("exam_type", "==", examType),
      )

      if (year) {
        q = query(q, where("year", "==", year))
      }

      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        // Generate AI content if no data exists
        const generatedQuestions = await generatePastQuestions(subject, examType)

        if (!generatedQuestions || !generatedQuestions.data || !Array.isArray(generatedQuestions.data)) {
          console.error("Invalid generated questions format:", generatedQuestions)
          return {
            questions: [],
            isGenerated: true,
          }
        }

        // Store generated questions in Firestore for future use
        const storedQuestions = []

        for (const question of generatedQuestions.data) {
          try {
            // Validate question object before storing
            if (!question.question || !question.options || !question.answer) {
              console.warn("Skipping invalid question:", question)
              continue
            }

            const docRef = await addDoc(collection(db, "past_questions"), {
              subject,
              exam_type: examType,
              year: new Date().getFullYear() - 1, // Previous year
              question: question.question,
              options: question.options,
              answer: question.answer,
              explanation: question.explanation || "",
              isGenerated: true,
              createdAt: serverTimestamp(),
            })

            storedQuestions.push({
              id: docRef.id,
              subject,
              exam_type: examType,
              year: new Date().getFullYear() - 1,
              question: question.question,
              options: question.options,
              answer: question.answer,
              explanation: question.explanation || "",
              isGenerated: true,
              createdAt: Timestamp.now(),
            })
          } catch (storeError) {
            console.error("Error storing generated question:", storeError)
          }
        }

        return {
          questions:
            storedQuestions.length > 0
              ? storedQuestions
              : generatedQuestions.data.map((q: any, index: number) => ({
                  id: `generated-${index}`,
                  subject,
                  exam_type: examType,
                  year: new Date().getFullYear() - 1,
                  question: q.question || "Question unavailable",
                  options: q.options || ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
                  answer: q.answer || "A",
                  explanation: q.explanation || "",
                  isGenerated: true,
                  createdAt: Timestamp.now(),
                })),
          isGenerated: true,
        }
      }

      const questions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as EnhancedPastQuestion[]

      return { questions, isGenerated: false }
    } catch (error) {
      console.error("Error getting past questions:", error)
      // Return empty array instead of throwing
      return {
        questions: [],
        isGenerated: false,
      }
    }
  },
}

// Enhanced Course Materials Service
export const enhancedCourseMaterialsService = {
  ...courseMaterialsService,

  // Get course materials by subject and class level
  getCourseMaterialsByClassLevel: async (subject: string, classLevel: string) => {
    try {
      const q = query(
        collection(db, "course_materials"),
        where("subject", "==", subject),
        where("class_level", "==", classLevel),
      )

      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        // Generate AI content if no data exists
        const generatedMaterial = await generateCourseMaterial(subject, classLevel)

        // Store generated material in Firestore for future use
        const docRef = await addDoc(collection(db, "course_materials"), {
          title: generatedMaterial.data.title,
          description: "AI-generated study notes",
          subject,
          class_level: classLevel,
          content: generatedMaterial.data.content,
          fileType: "text",
          uploadedBy: "system",
          uploadedAt: serverTimestamp(),
          downloads: 0,
          isGenerated: true,
        })

        return {
          materials: [
            {
              id: docRef.id,
              title: generatedMaterial.data.title,
              description: "AI-generated study notes",
              subject,
              class_level: classLevel,
              content: generatedMaterial.data.content,
              fileType: "text",
              fileUrl: "",
              fileSize: 0,
              uploadedBy: "system",
              uploadedAt: Timestamp.now(),
              downloads: 0,
              isGenerated: true,
            },
          ],
          isGenerated: true,
        }
      }

      const materials = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as EnhancedCourseMaterial[]

      return { materials, isGenerated: false }
    } catch (error) {
      console.error("Error getting course materials:", error)
      throw error
    }
  },
}

// Enhanced Assignments Service
export const enhancedAssignmentsService = {
  ...assignmentsService,

  // Get assignments by subject
  getAssignmentsBySubject: async (subject: string, userId: string) => {
    try {
      const q = query(collection(db, "assignments"), where("subject", "==", subject), orderBy("dueDate", "asc"))

      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        // Generate AI content if no data exists
        const generatedAssignments = await generateAssignments(subject)

        // Store generated assignments in Firestore for future use
        const assignments = []

        for (const assignment of generatedAssignments.data) {
          const docRef = await addDoc(collection(db, "assignments"), {
            title: assignment.title,
            description: assignment.instructions,
            subject,
            dueDate: Timestamp.fromDate(new Date(assignment.deadline)),
            status: "pending",
            isGenerated: true,
            createdAt: serverTimestamp(),
            userId, // Assign to the current user
          })

          assignments.push({
            id: docRef.id,
            title: assignment.title,
            description: assignment.instructions,
            subject,
            dueDate: Timestamp.fromDate(new Date(assignment.deadline)),
            status: "pending",
            isGenerated: true,
            createdAt: Timestamp.now(),
            userId,
          })
        }

        return { assignments, isGenerated: true }
      }

      // Get submission status for each assignment
      const assignmentsWithStatus = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data()

          const submissionQuery = query(
            collection(db, "submissions"),
            where("assignmentId", "==", doc.id),
            where("userId", "==", userId),
            limit(1),
          )

          const submissionSnapshot = await getDocs(submissionQuery)
          const hasSubmission = !submissionSnapshot.empty

          return {
            id: doc.id,
            ...data,
            hasSubmitted: hasSubmission,
          }
        }),
      )

      return { assignments: assignmentsWithStatus, isGenerated: false }
    } catch (error) {
      console.error("Error getting assignments:", error)
      throw error
    }
  },

  // Submit assignment with file upload
  submitAssignmentWithFile: async (assignmentId: string, userId: string, content: string, file?: File) => {
    try {
      let fileUrl = ""

      if (file) {
        // Upload file to Firebase Storage
        const storageRef = ref(storage, `submissions/${userId}/${assignmentId}/${file.name}`)
        await uploadBytes(storageRef, file)
        fileUrl = await getDownloadURL(storageRef)
      }

      // Add submission to Firestore
      const docRef = await addDoc(collection(db, "submissions"), {
        assignmentId,
        userId,
        content,
        fileUrl,
        submittedAt: serverTimestamp(),
      })

      // Update assignment status
      const assignmentRef = doc(db, "assignments", assignmentId)
      await updateDoc(assignmentRef, {
        status: "submitted",
      })

      return docRef.id
    } catch (error) {
      console.error("Error submitting assignment:", error)
      throw error
    }
  },
}

// Enhanced Study Groups Service
export const enhancedStudyGroupsService = {
  ...studyGroupsService,

  // Create a new study group with group code
  createStudyGroupWithCode: async (group: Omit<EnhancedStudyGroup, "id" | "createdAt" | "group_code">) => {
    try {
      // Generate a random 6-character group code
      const groupCode = Math.random().toString(36).substring(2, 8).toUpperCase()

      const docRef = await addDoc(collection(db, "study_groups"), {
        ...group,
        group_code: groupCode,
        createdAt: serverTimestamp(),
      })

      return { id: docRef.id, group_code: groupCode }
    } catch (error) {
      console.error("Error creating study group:", error)
      throw error
    }
  },

  // Join a study group by code
  joinStudyGroupByCode: async (groupCode: string, user: { uid: string; displayName: string; photoURL?: string }) => {
    try {
      const q = query(collection(db, "study_groups"), where("group_code", "==", groupCode))

      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        throw new Error("Study group not found")
      }

      const groupDoc = snapshot.docs[0]
      const groupId = groupDoc.id
      const groupData = groupDoc.data()

      // Check if user is already a member
      const members = groupData.members || []
      if (members.some((member: StudyGroupMember) => member.uid === user.uid)) {
        return { id: groupId, alreadyMember: true }
      }

      // Add user to members
      const newMember: StudyGroupMember = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        joinedAt: Timestamp.now(),
      }

      await updateDoc(doc(db, "study_groups", groupId), {
        members: [...members, newMember],
      })

      return { id: groupId, alreadyMember: false }
    } catch (error) {
      console.error("Error joining study group:", error)
      throw error
    }
  },
}

// Enhanced Scholarships Service
export const enhancedScholarshipsService = {
  ...scholarshipsService,

  // Get scholarships by region
  getScholarshipsByRegion: async (region: string) => {
    try {
      const q = query(collection(db, `scholarships_${region.toLowerCase()}`), orderBy("deadline", "asc"))

      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        // Generate AI content if no data exists
        const generatedScholarships = await generateScholarships(region)

        // Store generated scholarships in Firestore for future use
        const scholarships = []

        for (const scholarship of generatedScholarships.data) {
          const docRef = await addDoc(collection(db, `scholarships_${region.toLowerCase()}`), {
            title: scholarship.title,
            country: scholarship.country,
            funding_type: scholarship.funding_type,
            deadline: Timestamp.fromDate(new Date(scholarship.deadline)),
            description: scholarship.description,
            apply_link: scholarship.apply_link,
            region: region,
            isGenerated: true,
            createdAt: serverTimestamp(),
          })

          scholarships.push({
            id: docRef.id,
            ...scholarship,
            deadline: Timestamp.fromDate(new Date(scholarship.deadline)),
            createdAt: Timestamp.now(),
            isGenerated: true,
          })
        }

        return { scholarships, isGenerated: true }
      }

      const scholarships = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as EnhancedScholarship[]

      return { scholarships, isGenerated: false }
    } catch (error) {
      console.error("Error getting scholarships:", error)
      throw error
    }
  },

  // Search scholarships across all regions
  searchScholarships: async (query: string) => {
    try {
      const regions = ["europe", "america", "africa", "asia"]
      let allScholarships: EnhancedScholarship[] = []

      for (const region of regions) {
        const snapshot = await getDocs(collection(db, `scholarships_${region}`))

        const regionScholarships = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          region,
        })) as EnhancedScholarship[]

        allScholarships = [...allScholarships, ...regionScholarships]
      }

      // Simple client-side search (in a real app, use Firestore queries or Algolia)
      const lowercaseQuery = query.toLowerCase()
      const filteredScholarships = allScholarships.filter(
        (scholarship) =>
          scholarship.title.toLowerCase().includes(lowercaseQuery) ||
          scholarship.description.toLowerCase().includes(lowercaseQuery) ||
          scholarship.country.toLowerCase().includes(lowercaseQuery) ||
          scholarship.funding_type.toLowerCase().includes(lowercaseQuery),
      )

      return filteredScholarships
    } catch (error) {
      console.error("Error searching scholarships:", error)
      throw error
    }
  },
}

// Mentor Service
export const mentorService = {
  // Get all mentors
  getMentors: async () => {
    try {
      const snapshot = await getDocs(collection(db, "mentors"))

      if (snapshot.empty) {
        // Generate some mentors if none exist
        const specialties = ["Mathematics", "Physics", "Chemistry", "Biology", "English"]
        const mentors = []

        for (const specialty of specialties) {
          const generatedMentor = await generateMentorProfile(specialty)

          const docRef = await addDoc(collection(db, "mentors"), {
            name: generatedMentor.data.name,
            specialty: generatedMentor.data.specialty,
            bio: generatedMentor.data.bio,
            experience: generatedMentor.data.experience,
            availability: generatedMentor.data.availability,
            isGenerated: true,
            createdAt: serverTimestamp(),
          })

          mentors.push({
            id: docRef.id,
            ...generatedMentor.data,
            isGenerated: true,
            createdAt: Timestamp.now(),
          })
        }

        return { mentors, isGenerated: true }
      }

      const mentors = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Mentor[]

      return { mentors, isGenerated: false }
    } catch (error) {
      console.error("Error getting mentors:", error)
      throw error
    }
  },

  // Get mentor by specialty
  getMentorsBySpecialty: async (specialty: string) => {
    try {
      const q = query(collection(db, "mentors"), where("specialty", "==", specialty))

      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        // Generate a mentor if none exists for this specialty
        const generatedMentor = await generateMentorProfile(specialty)

        const docRef = await addDoc(collection(db, "mentors"), {
          name: generatedMentor.data.name,
          specialty: generatedMentor.data.specialty,
          bio: generatedMentor.data.bio,
          experience: generatedMentor.data.experience,
          availability: generatedMentor.data.availability,
          isGenerated: true,
          createdAt: serverTimestamp(),
        })

        return {
          mentors: [
            {
              id: docRef.id,
              ...generatedMentor.data,
              isGenerated: true,
              createdAt: Timestamp.now(),
            },
          ],
          isGenerated: true,
        }
      }

      const mentors = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Mentor[]

      return { mentors, isGenerated: false }
    } catch (error) {
      console.error("Error getting mentors by specialty:", error)
      throw error
    }
  },

  // Request mentorship
  requestMentorship: async (mentorId: string, userId: string, message: string) => {
    try {
      const docRef = await addDoc(collection(db, "mentorship_requests"), {
        mentorId,
        userId,
        message,
        status: "pending",
        createdAt: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error requesting mentorship:", error)
      throw error
    }
  },
}

// Study Abroad Service
export const studyAbroadService = {
  // Get study abroad information by country
  getStudyAbroadInfo: async (country: string) => {
    try {
      const q = query(collection(db, "study_abroad"), where("country", "==", country))

      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        // Generate study abroad info if none exists
        const generatedInfo = await generateStudyAbroadInfo(country)

        const docRef = await addDoc(collection(db, "study_abroad"), {
          ...generatedInfo.data,
          isGenerated: true,
          createdAt: serverTimestamp(),
        })

        return {
          info: {
            id: docRef.id,
            ...generatedInfo.data,
            isGenerated: true,
            createdAt: Timestamp.now(),
          },
          isGenerated: true,
        }
      }

      const info = {
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data(),
      } as StudyAbroadInfo

      return { info, isGenerated: false }
    } catch (error) {
      console.error("Error getting study abroad info:", error)
      throw error
    }
  },

  // Get all available countries
  getAvailableCountries: async () => {
    try {
      const snapshot = await getDocs(collection(db, "study_abroad"))

      if (snapshot.empty) {
        // Default countries if none exist
        const defaultCountries = [
          { country: "United States", region: "America" },
          { country: "United Kingdom", region: "Europe" },
          { country: "Canada", region: "America" },
          { country: "Australia", region: "Asia-Pacific" },
          { country: "Germany", region: "Europe" },
        ]

        return defaultCountries
      }

      const countries = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          country: data.country,
          region: data.region,
        }
      })

      return countries
    } catch (error) {
      console.error("Error getting available countries:", error)
      throw error
    }
  },
}

// Export all services
export {
  pastQuestionsService,
  courseMaterialsService,
  assignmentsService,
  studyGroupsService,
  scholarshipsService,
  mentorChatService,
  forumService,
  userSettingsService,
}
