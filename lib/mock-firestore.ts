// Simple mock of Firestore functionality for local development

interface MockDocumentData {
  [key: string]: any
}

interface MockDocumentReference {
  id: string
  path: string
  data: MockDocumentData | null
}

interface MockCollectionReference {
  path: string
  docs: Record<string, MockDocumentReference>
}

// Check if localStorage is available (will be false on server)
const isLocalStorageAvailable = () => {
  if (typeof window === "undefined") return false
  try {
    window.localStorage.setItem("test", "test")
    window.localStorage.removeItem("test")
    return true
  } catch (e) {
    return false
  }
}

class MockFirestore {
  private collections: Record<string, MockCollectionReference> = {}

  constructor() {
    this.loadFromLocalStorage()
  }

  // Load data from localStorage
  private loadFromLocalStorage() {
    try {
      if (!isLocalStorageAvailable()) return

      const savedData = localStorage.getItem("mock_firestore_data")
      if (savedData) {
        this.collections = JSON.parse(savedData)
      }
    } catch (error) {
      console.error("Error loading mock firestore data:", error)
    }
  }

  // Save data to localStorage
  private saveToLocalStorage() {
    try {
      if (!isLocalStorageAvailable()) return

      localStorage.setItem("mock_firestore_data", JSON.stringify(this.collections))
    } catch (error) {
      console.error("Error saving mock firestore data:", error)
    }
  }

  // Get or create a collection
  private getCollection(collectionPath: string): MockCollectionReference {
    if (!this.collections[collectionPath]) {
      this.collections[collectionPath] = {
        path: collectionPath,
        docs: {},
      }
    }
    return this.collections[collectionPath]
  }

  // Get a document reference
  doc(collectionPath: string, docId: string, ...pathSegments: string[]) {
    const path = [collectionPath, docId, ...pathSegments].join("/")
    const collection = this.getCollection(collectionPath)

    if (!collection.docs[docId]) {
      collection.docs[docId] = {
        id: docId,
        path: path,
        data: null,
      }
    }

    return collection.docs[docId]
  }

  // Set document data
  async setDoc(docRef: MockDocumentReference, data: MockDocumentData, options?: { merge: boolean }): Promise<void> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const collection = this.getCollection(docRef.path.split("/")[0])

    if (options?.merge && docRef.data) {
      // Merge with existing data
      docRef.data = { ...docRef.data, ...data }
    } else {
      // Replace data
      docRef.data = { ...data }
    }

    collection.docs[docRef.id] = docRef
    this.saveToLocalStorage()
  }

  // Get document data
  async getDoc(docRef: MockDocumentReference): Promise<{ exists: () => boolean; data: () => MockDocumentData | null }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return {
      exists: () => docRef.data !== null,
      data: () => docRef.data,
    }
  }

  // Delete document
  async deleteDoc(docRef: MockDocumentReference): Promise<void> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const collection = this.getCollection(docRef.path.split("/")[0])
    delete collection.docs[docRef.id]
    this.saveToLocalStorage()
  }

  // Query documents (simplified)
  async getDocs(collectionPath: string): Promise<{ docs: Array<{ id: string; data: () => MockDocumentData | null }> }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const collection = this.getCollection(collectionPath)

    const docs = Object.values(collection.docs).map((doc) => ({
      id: doc.id,
      data: () => doc.data,
    }))

    return { docs }
  }
}

export const mockFirestore = new MockFirestore()
