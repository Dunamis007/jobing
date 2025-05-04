import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Timestamp,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from "@/lib/firebase"

// Types
export interface PastQuestion {
  id: string
  subject: string
  year: number
  question: string
  options?: string[]
  answer: string
  explanation?: string
  difficulty?: "easy" | "medium" | "hard"
  tags?: string[]
  createdAt: Timestamp
}

export interface CourseMaterial {
  id: string
  title: string
  description: string
  subject: string
  fileUrl: string
  fileType: string
  fileSize: number
  uploadedBy: string
  uploadedAt: Timestamp
  downloads: number
  tags?: string[]
}

export interface Assignment {
  id: string
  title: string
  description: string
  subject: string
  dueDate: Timestamp
  points: number
  status: "pending" | "submitted" | "graded"
  createdAt: Timestamp
  attachments?: {
    name: string
    url: string
  }[]
}

export interface Submission {
  id: string
  assignmentId: string
  userId: string
  submittedAt: Timestamp
  content?: string
  attachments?: {
    name: string
    url: string
  }[]
  grade?: number
  feedback?: string
}

export interface StudyGroup {
  id: string
  name: string
  subject: string
  description: string
  members: string[]
  createdAt: Timestamp
  createdBy: string
}

export interface Message {
  id: string
  groupId: string
  userId: string
  userName: string
  userPhotoURL?: string
  content: string
  timestamp: Timestamp
  attachments?: {
    name: string
    url: string
  }[]
}

export interface Scholarship {
  id: string
  title: string
  provider: string
  amount: string
  deadline: Timestamp
  eligibility: string
  description: string
  applicationUrl: string
  tags?: string[]
  createdAt: Timestamp
}

export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  senderPhotoURL?: string
  receiverId: string
  content: string
  timestamp: Timestamp
  read: boolean
  attachments?: {
    name: string
    url: string
  }[]
}

export interface ForumThread {
  id: string
  title: string
  content: string
  authorId: string
  authorName: string
  authorPhotoURL?: string
  createdAt: Timestamp
  updatedAt: Timestamp
  tags?: string[]
  likes: number
  views: number
  replyCount: number
}

export interface ForumReply {
  id: string
  threadId: string
  content: string
  authorId: string
  authorName: string
  authorPhotoURL?: string
  createdAt: Timestamp
  updatedAt: Timestamp
  likes: number
  parentReplyId?: string
}

export interface UserSettings {
  userId: string
  displayName: string
  email: string
  photoURL?: string
  academicLevel: string
  notificationPreferences: {
    email: boolean
    push: boolean
    sms: boolean
  }
  studyPreferences: {
    dailyGoal: number
    focusMode: boolean
    reminderTime?: string
  }
  privacySettings: {
    showOnlineStatus: boolean
    showProgress: boolean
    allowMessages: boolean
  }
  theme: "light" | "dark" | "system"
  updatedAt: Timestamp
}

// Past Questions Service
export const pastQuestionsService = {
  // Get paginated past questions by subject and year
  getPastQuestions: async (subject: string, year?: number, lastDoc?: any, pageSize = 10) => {
    try {
      let q = query(collection(db, "pastQuestions"), where("subject", "==", subject), orderBy("year", "desc"))

      if (year) {
        q = query(q, where("year", "==", year))
      }

      if (lastDoc) {
        q = query(q, startAfter(lastDoc), limit(pageSize))
      } else {
        q = query(q, limit(pageSize))
      }

      const snapshot = await getDocs(q)
      const lastVisible = snapshot.docs[snapshot.docs.length - 1]

      const questions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as PastQuestion[]

      return { questions, lastVisible }
    } catch (error) {
      console.error("Error getting past questions:", error)
      throw error
    }
  },

  // Get a single past question by ID
  getPastQuestionById: async (id: string) => {
    try {
      const docRef = doc(db, "pastQuestions", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as PastQuestion
      } else {
        throw new Error("Past question not found")
      }
    } catch (error) {
      console.error("Error getting past question:", error)
      throw error
    }
  },

  // Add a new past question
  addPastQuestion: async (question: Omit<PastQuestion, "id" | "createdAt">) => {
    try {
      const docRef = await addDoc(collection(db, "pastQuestions"), {
        ...question,
        createdAt: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error adding past question:", error)
      throw error
    }
  },

  // Update a past question
  updatePastQuestion: async (id: string, data: Partial<PastQuestion>) => {
    try {
      const docRef = doc(db, "pastQuestions", id)
      await updateDoc(docRef, data)
    } catch (error) {
      console.error("Error updating past question:", error)
      throw error
    }
  },

  // Delete a past question
  deletePastQuestion: async (id: string) => {
    try {
      const docRef = doc(db, "pastQuestions", id)
      await deleteDoc(docRef)
    } catch (error) {
      console.error("Error deleting past question:", error)
      throw error
    }
  },
}

// Course Materials Service
export const courseMaterialsService = {
  // Get paginated course materials by subject
  getCourseMaterials: async (subject?: string, lastDoc?: any, pageSize = 10) => {
    try {
      let q = query(collection(db, "courseMaterials"), orderBy("uploadedAt", "desc"))

      if (subject) {
        q = query(q, where("subject", "==", subject))
      }

      if (lastDoc) {
        q = query(q, startAfter(lastDoc), limit(pageSize))
      } else {
        q = query(q, limit(pageSize))
      }

      const snapshot = await getDocs(q)
      const lastVisible = snapshot.docs[snapshot.docs.length - 1]

      const materials = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CourseMaterial[]

      return { materials, lastVisible }
    } catch (error) {
      console.error("Error getting course materials:", error)
      throw error
    }
  },

  // Get a single course material by ID
  getCourseMaterialById: async (id: string) => {
    try {
      const docRef = doc(db, "courseMaterials", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as CourseMaterial
      } else {
        throw new Error("Course material not found")
      }
    } catch (error) {
      console.error("Error getting course material:", error)
      throw error
    }
  },

  // Upload a new course material
  uploadCourseMaterial: async (
    file: File,
    metadata: Omit<CourseMaterial, "id" | "fileUrl" | "fileSize" | "uploadedAt" | "downloads">,
  ) => {
    try {
      // Create a storage reference
      const storageRef = ref(storage, `courseMaterials/${metadata.subject}/${file.name}`)

      // Upload the file
      const snapshot = await uploadBytes(storageRef, file)

      // Get the download URL
      const fileUrl = await getDownloadURL(snapshot.ref)

      // Add metadata to Firestore
      const docRef = await addDoc(collection(db, "courseMaterials"), {
        ...metadata,
        fileUrl,
        fileSize: file.size,
        uploadedAt: serverTimestamp(),
        downloads: 0,
      })

      return docRef.id
    } catch (error) {
      console.error("Error uploading course material:", error)
      throw error
    }
  },

  // Update course material metadata
  updateCourseMaterial: async (id: string, data: Partial<CourseMaterial>) => {
    try {
      const docRef = doc(db, "courseMaterials", id)
      await updateDoc(docRef, data)
    } catch (error) {
      console.error("Error updating course material:", error)
      throw error
    }
  },

  // Delete a course material
  deleteCourseMaterial: async (id: string) => {
    try {
      // Get the material to get the file URL
      const material = await courseMaterialsService.getCourseMaterialById(id)

      // Delete from storage
      const storageRef = ref(storage, material.fileUrl)
      await deleteObject(storageRef)

      // Delete from Firestore
      const docRef = doc(db, "courseMaterials", id)
      await deleteDoc(docRef)
    } catch (error) {
      console.error("Error deleting course material:", error)
      throw error
    }
  },

  // Increment download count
  incrementDownloadCount: async (id: string) => {
    try {
      const docRef = doc(db, "courseMaterials", id)
      await updateDoc(docRef, {
        downloads: increment(1),
      })
    } catch (error) {
      console.error("Error incrementing download count:", error)
      throw error
    }
  },
}

// Assignments Service
export const assignmentsService = {
  // Get paginated assignments
  getAssignments: async (userId: string, status?: string, lastDoc?: any, pageSize = 10) => {
    try {
      let q = query(collection(db, "assignments"), orderBy("dueDate", "asc"))

      if (status) {
        q = query(q, where("status", "==", status))
      }

      if (lastDoc) {
        q = query(q, startAfter(lastDoc), limit(pageSize))
      } else {
        q = query(q, limit(pageSize))
      }

      const snapshot = await getDocs(q)
      const lastVisible = snapshot.docs[snapshot.docs.length - 1]

      const assignments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Assignment[]

      // Get submission status for each assignment
      const assignmentsWithStatus = await Promise.all(
        assignments.map(async (assignment) => {
          const submissionQuery = query(
            collection(db, "submissions"),
            where("assignmentId", "==", assignment.id),
            where("userId", "==", userId),
            limit(1),
          )

          const submissionSnapshot = await getDocs(submissionQuery)
          const hasSubmission = !submissionSnapshot.empty

          return {
            ...assignment,
            hasSubmitted: hasSubmission,
          }
        }),
      )

      return { assignments: assignmentsWithStatus, lastVisible }
    } catch (error) {
      console.error("Error getting assignments:", error)
      throw error
    }
  },

  // Get a single assignment by ID
  getAssignmentById: async (id: string) => {
    try {
      const docRef = doc(db, "assignments", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Assignment
      } else {
        throw new Error("Assignment not found")
      }
    } catch (error) {
      console.error("Error getting assignment:", error)
      throw error
    }
  },

  // Create a new assignment
  createAssignment: async (assignment: Omit<Assignment, "id" | "createdAt">) => {
    try {
      const docRef = await addDoc(collection(db, "assignments"), {
        ...assignment,
        createdAt: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error creating assignment:", error)
      throw error
    }
  },

  // Update an assignment
  updateAssignment: async (id: string, data: Partial<Assignment>) => {
    try {
      const docRef = doc(db, "assignments", id)
      await updateDoc(docRef, data)
    } catch (error) {
      console.error("Error updating assignment:", error)
      throw error
    }
  },

  // Delete an assignment
  deleteAssignment: async (id: string) => {
    try {
      const docRef = doc(db, "assignments", id)
      await deleteDoc(docRef)
    } catch (error) {
      console.error("Error deleting assignment:", error)
      throw error
    }
  },

  // Submit an assignment
  submitAssignment: async (submission: Omit<Submission, "id" | "submittedAt">) => {
    try {
      // Add submission to Firestore
      const docRef = await addDoc(collection(db, "submissions"), {
        ...submission,
        submittedAt: serverTimestamp(),
      })

      // Update assignment status
      const assignmentRef = doc(db, "assignments", submission.assignmentId)
      await updateDoc(assignmentRef, {
        status: "submitted",
      })

      return docRef.id
    } catch (error) {
      console.error("Error submitting assignment:", error)
      throw error
    }
  },

  // Get a submission by assignment ID and user ID
  getSubmission: async (assignmentId: string, userId: string) => {
    try {
      const q = query(
        collection(db, "submissions"),
        where("assignmentId", "==", assignmentId),
        where("userId", "==", userId),
        limit(1),
      )

      const snapshot = await getDocs(q)

      if (!snapshot.empty) {
        const doc = snapshot.docs[0]
        return { id: doc.id, ...doc.data() } as Submission
      } else {
        return null
      }
    } catch (error) {
      console.error("Error getting submission:", error)
      throw error
    }
  },
}

// Study Groups Service
export const studyGroupsService = {
  // Get all study groups
  getStudyGroups: async (subject?: string) => {
    try {
      let q = query(collection(db, "studyGroups"), orderBy("createdAt", "desc"))

      if (subject) {
        q = query(q, where("subject", "==", subject))
      }

      const snapshot = await getDocs(q)

      const groups = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as StudyGroup[]

      return groups
    } catch (error) {
      console.error("Error getting study groups:", error)
      throw error
    }
  },

  // Get a single study group by ID
  getStudyGroupById: async (id: string) => {
    try {
      const docRef = doc(db, "studyGroups", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as StudyGroup
      } else {
        throw new Error("Study group not found")
      }
    } catch (error) {
      console.error("Error getting study group:", error)
      throw error
    }
  },

  // Create a new study group
  createStudyGroup: async (group: Omit<StudyGroup, "id" | "createdAt">) => {
    try {
      const docRef = await addDoc(collection(db, "studyGroups"), {
        ...group,
        createdAt: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error creating study group:", error)
      throw error
    }
  },

  // Update a study group
  updateStudyGroup: async (id: string, data: Partial<StudyGroup>) => {
    try {
      const docRef = doc(db, "studyGroups", id)
      await updateDoc(docRef, data)
    } catch (error) {
      console.error("Error updating study group:", error)
      throw error
    }
  },

  // Delete a study group
  deleteStudyGroup: async (id: string) => {
    try {
      const docRef = doc(db, "studyGroups", id)
      await deleteDoc(docRef)
    } catch (error) {
      console.error("Error deleting study group:", error)
      throw error
    }
  },

  // Join a study group
  joinStudyGroup: async (groupId: string, userId: string) => {
    try {
      const docRef = doc(db, "studyGroups", groupId)
      await updateDoc(docRef, {
        members: arrayUnion(userId),
      })
    } catch (error) {
      console.error("Error joining study group:", error)
      throw error
    }
  },

  // Leave a study group
  leaveStudyGroup: async (groupId: string, userId: string) => {
    try {
      const docRef = doc(db, "studyGroups", groupId)
      await updateDoc(docRef, {
        members: arrayRemove(userId),
      })
    } catch (error) {
      console.error("Error leaving study group:", error)
      throw error
    }
  },

  // Get messages for a study group with real-time updates
  getMessages: (groupId: string, callback: (messages: Message[]) => void) => {
    try {
      const q = query(collection(db, "messages"), where("groupId", "==", groupId), orderBy("timestamp", "asc"))

      return onSnapshot(q, (snapshot) => {
        const messages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[]

        callback(messages)
      })
    } catch (error) {
      console.error("Error getting messages:", error)
      throw error
    }
  },

  // Send a message to a study group
  sendMessage: async (message: Omit<Message, "id" | "timestamp">) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        ...message,
        timestamp: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error sending message:", error)
      throw error
    }
  },
}

// Scholarships Service
export const scholarshipsService = {
  // Get paginated scholarships
  getScholarships: async (lastDoc?: any, pageSize = 10) => {
    try {
      let q = query(collection(db, "scholarships"), orderBy("deadline", "asc"))

      if (lastDoc) {
        q = query(q, startAfter(lastDoc), limit(pageSize))
      } else {
        q = query(q, limit(pageSize))
      }

      const snapshot = await getDocs(q)
      const lastVisible = snapshot.docs[snapshot.docs.length - 1]

      const scholarships = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Scholarship[]

      return { scholarships, lastVisible }
    } catch (error) {
      console.error("Error getting scholarships:", error)
      throw error
    }
  },

  // Get a single scholarship by ID
  getScholarshipById: async (id: string) => {
    try {
      const docRef = doc(db, "scholarships", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Scholarship
      } else {
        throw new Error("Scholarship not found")
      }
    } catch (error) {
      console.error("Error getting scholarship:", error)
      throw error
    }
  },

  // Add a new scholarship
  addScholarship: async (scholarship: Omit<Scholarship, "id" | "createdAt">) => {
    try {
      const docRef = await addDoc(collection(db, "scholarships"), {
        ...scholarship,
        createdAt: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error adding scholarship:", error)
      throw error
    }
  },

  // Update a scholarship
  updateScholarship: async (id: string, data: Partial<Scholarship>) => {
    try {
      const docRef = doc(db, "scholarships", id)
      await updateDoc(docRef, data)
    } catch (error) {
      console.error("Error updating scholarship:", error)
      throw error
    }
  },

  // Delete a scholarship
  deleteScholarship: async (id: string) => {
    try {
      const docRef = doc(db, "scholarships", id)
      await deleteDoc(docRef)
    } catch (error) {
      console.error("Error deleting scholarship:", error)
      throw error
    }
  },
}

// Mentor Chat Service
export const mentorChatService = {
  // Get all chats for a user
  getChats: async (userId: string) => {
    try {
      const q = query(
        collection(db, "chats"),
        where("participants", "array-contains", userId),
        orderBy("lastMessageAt", "desc"),
      )

      const snapshot = await getDocs(q)

      const chats = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      return chats
    } catch (error) {
      console.error("Error getting chats:", error)
      throw error
    }
  },

  // Get or create a chat between two users
  getOrCreateChat: async (userId1: string, userId2: string) => {
    try {
      // Check if chat already exists
      const q = query(
        collection(db, "chats"),
        where("participants", "in", [
          [userId1, userId2],
          [userId2, userId1],
        ]),
      )

      const snapshot = await getDocs(q)

      if (!snapshot.empty) {
        const doc = snapshot.docs[0]
        return { id: doc.id, ...doc.data() }
      }

      // Create new chat
      const chatRef = await addDoc(collection(db, "chats"), {
        participants: [userId1, userId2],
        createdAt: serverTimestamp(),
        lastMessageAt: serverTimestamp(),
        lastMessage: "",
      })

      return { id: chatRef.id, participants: [userId1, userId2] }
    } catch (error) {
      console.error("Error getting or creating chat:", error)
      throw error
    }
  },

  // Get messages for a chat with real-time updates
  getMessages: (chatId: string, callback: (messages: ChatMessage[]) => void) => {
    try {
      const q = query(collection(db, "chatMessages"), where("chatId", "==", chatId), orderBy("timestamp", "asc"))

      return onSnapshot(q, (snapshot) => {
        const messages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ChatMessage[]

        callback(messages)
      })
    } catch (error) {
      console.error("Error getting chat messages:", error)
      throw error
    }
  },

  // Send a message in a chat
  sendMessage: async (chatId: string, message: Omit<ChatMessage, "id" | "timestamp" | "read">) => {
    try {
      // Add message to Firestore
      const docRef = await addDoc(collection(db, "chatMessages"), {
        chatId,
        ...message,
        timestamp: serverTimestamp(),
        read: false,
      })

      // Update chat's last message and timestamp
      const chatRef = doc(db, "chats", chatId)
      await updateDoc(chatRef, {
        lastMessage: message.content,
        lastMessageAt: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error sending message:", error)
      throw error
    }
  },

  // Mark messages as read
  markMessagesAsRead: async (chatId: string, userId: string) => {
    try {
      const q = query(
        collection(db, "chatMessages"),
        where("chatId", "==", chatId),
        where("receiverId", "==", userId),
        where("read", "==", false),
      )

      const snapshot = await getDocs(q)

      const batch = writeBatch(db)

      snapshot.docs.forEach((doc) => {
        batch.update(doc.ref, { read: true })
      })

      await batch.commit()
    } catch (error) {
      console.error("Error marking messages as read:", error)
      throw error
    }
  },
}

// Forum Service
export const forumService = {
  // Get paginated forum threads
  getThreads: async (lastDoc?: any, pageSize = 10) => {
    try {
      let q = query(collection(db, "forumThreads"), orderBy("updatedAt", "desc"))

      if (lastDoc) {
        q = query(q, startAfter(lastDoc), limit(pageSize))
      } else {
        q = query(q, limit(pageSize))
      }

      const snapshot = await getDocs(q)
      const lastVisible = snapshot.docs[snapshot.docs.length - 1]

      const threads = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ForumThread[]

      return { threads, lastVisible }
    } catch (error) {
      console.error("Error getting forum threads:", error)
      throw error
    }
  },

  // Get a single thread by ID
  getThreadById: async (id: string) => {
    try {
      const docRef = doc(db, "forumThreads", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as ForumThread
      } else {
        throw new Error("Thread not found")
      }
    } catch (error) {
      console.error("Error getting thread:", error)
      throw error
    }
  },

  // Create a new thread
  createThread: async (
    thread: Omit<ForumThread, "id" | "createdAt" | "updatedAt" | "likes" | "views" | "replyCount">,
  ) => {
    try {
      const docRef = await addDoc(collection(db, "forumThreads"), {
        ...thread,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        likes: 0,
        views: 0,
        replyCount: 0,
      })

      return docRef.id
    } catch (error) {
      console.error("Error creating thread:", error)
      throw error
    }
  },

  // Update a thread
  updateThread: async (id: string, data: Partial<ForumThread>) => {
    try {
      const docRef = doc(db, "forumThreads", id)
      await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp(),
      })
    } catch (error) {
      console.error("Error updating thread:", error)
      throw error
    }
  },

  // Delete a thread
  deleteThread: async (id: string) => {
    try {
      const docRef = doc(db, "forumThreads", id)
      await deleteDoc(docRef)

      // Also delete all replies to this thread
      const repliesQuery = query(collection(db, "forumReplies"), where("threadId", "==", id))

      const repliesSnapshot = await getDocs(repliesQuery)

      const batch = writeBatch(db)
      repliesSnapshot.docs.forEach((doc) => {
        batch.delete(doc.ref)
      })

      await batch.commit()
    } catch (error) {
      console.error("Error deleting thread:", error)
      throw error
    }
  },

  // Increment thread view count
  incrementViewCount: async (id: string) => {
    try {
      const docRef = doc(db, "forumThreads", id)
      await updateDoc(docRef, {
        views: increment(1),
      })
    } catch (error) {
      console.error("Error incrementing view count:", error)
      throw error
    }
  },

  // Get replies for a thread
  getReplies: async (threadId: string, lastDoc?: any, pageSize = 20) => {
    try {
      let q = query(collection(db, "forumReplies"), where("threadId", "==", threadId), orderBy("createdAt", "asc"))

      if (lastDoc) {
        q = query(q, startAfter(lastDoc), limit(pageSize))
      } else {
        q = query(q, limit(pageSize))
      }

      const snapshot = await getDocs(q)
      const lastVisible = snapshot.docs[snapshot.docs.length - 1]

      const replies = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ForumReply[]

      return { replies, lastVisible }
    } catch (error) {
      console.error("Error getting replies:", error)
      throw error
    }
  },

  // Add a reply to a thread
  addReply: async (reply: Omit<ForumReply, "id" | "createdAt" | "updatedAt" | "likes">) => {
    try {
      // Add reply to Firestore
      const docRef = await addDoc(collection(db, "forumReplies"), {
        ...reply,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        likes: 0,
      })

      // Update thread's reply count and updated timestamp
      const threadRef = doc(db, "forumThreads", reply.threadId)
      await updateDoc(threadRef, {
        replyCount: increment(1),
        updatedAt: serverTimestamp(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error adding reply:", error)
      throw error
    }
  },

  // Update a reply
  updateReply: async (id: string, content: string) => {
    try {
      const docRef = doc(db, "forumReplies", id)
      await updateDoc(docRef, {
        content,
        updatedAt: serverTimestamp(),
      })
    } catch (error) {
      console.error("Error updating reply:", error)
      throw error
    }
  },

  // Delete a reply
  deleteReply: async (id: string, threadId: string) => {
    try {
      const docRef = doc(db, "forumReplies", id)
      await deleteDoc(docRef)

      // Update thread's reply count
      const threadRef = doc(db, "forumThreads", threadId)
      await updateDoc(threadRef, {
        replyCount: increment(-1),
      })
    } catch (error) {
      console.error("Error deleting reply:", error)
      throw error
    }
  },
}

// User Settings Service
export const userSettingsService = {
  // Get user settings
  getUserSettings: async (userId: string) => {
    try {
      const docRef = doc(db, "userSettings", userId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { userId, ...docSnap.data() } as UserSettings
      } else {
        // Return default settings if not found
        return {
          userId,
          displayName: "",
          email: "",
          academicLevel: "JAMB Candidate",
          notificationPreferences: {
            email: true,
            push: true,
            sms: false,
          },
          studyPreferences: {
            dailyGoal: 60,
            focusMode: false,
          },
          privacySettings: {
            showOnlineStatus: true,
            showProgress: true,
            allowMessages: true,
          },
          theme: "system",
          updatedAt: Timestamp.now(),
        } as UserSettings
      }
    } catch (error) {
      console.error("Error getting user settings:", error)
      throw error
    }
  },

  // Update user settings
  updateUserSettings: async (userId: string, settings: Partial<UserSettings>) => {
    try {
      const docRef = doc(db, "userSettings", userId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        // Update existing settings
        await updateDoc(docRef, {
          ...settings,
          updatedAt: serverTimestamp(),
        })
      } else {
        // Create new settings document
        await setDoc(docRef, {
          userId,
          ...settings,
          updatedAt: serverTimestamp(),
        })
      }
    } catch (error) {
      console.error("Error updating user settings:", error)
      throw error
    }
  },
}

// Helper functions
function increment(n: number) {
  return {
    __op: "increment",
    __n: n,
  }
}

function arrayUnion(...elements: any[]) {
  return {
    __op: "arrayUnion",
    __elements: elements,
  }
}

function arrayRemove(...elements: any[]) {
  return {
    __op: "arrayRemove",
    __elements: elements,
  }
}

function writeBatch(db: any) {
  const batch = {
    _operations: [] as any[],
    update(ref: any, data: any) {
      this._operations.push({ type: "update", ref, data })
    },
    delete(ref: any) {
      this._operations.push({ type: "delete", ref })
    },
    commit() {
      return Promise.resolve()
    },
  }
  return batch
}
