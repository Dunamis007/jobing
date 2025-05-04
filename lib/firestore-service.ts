import { doc as firestoreDoc, setDoc as firestoreSetDoc, getDoc as firestoreGetDoc } from "firebase/firestore"
import { db } from "./firebase"
import { mockFirestore } from "./mock-firestore"
import { authService } from "./auth-service"

// Use the same flag as auth service
const USE_MOCK_FIRESTORE = authService.isMockAuth

export const firestoreService = {
  // Create a document reference
  doc: (collection: string, id: string, ...pathSegments: string[]) => {
    if (USE_MOCK_FIRESTORE) {
      return mockFirestore.doc(collection, id, ...pathSegments)
    } else {
      if (pathSegments.length === 0) {
        return firestoreDoc(db, collection, id)
      } else {
        // Handle nested paths
        const path = [collection, id, ...pathSegments].join("/")
        return firestoreDoc(db, path)
      }
    }
  },

  // Set document data
  setDoc: async (docRef: any, data: any, options?: { merge: boolean }) => {
    if (USE_MOCK_FIRESTORE) {
      return mockFirestore.setDoc(docRef, data, options)
    } else {
      return firestoreSetDoc(docRef, data, options)
    }
  },

  // Get document data
  getDoc: async (docRef: any) => {
    if (USE_MOCK_FIRESTORE) {
      return mockFirestore.getDoc(docRef)
    } else {
      return firestoreGetDoc(docRef)
    }
  },
}
