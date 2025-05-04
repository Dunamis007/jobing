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

class MockFirestore {
  private collections: Record<string, MockCollectionReference> = {}

  constructor() {
    this.loadFromLocalStorage()
  }

  // Load data from localStorage
  private loadFromLocalStorage() {
    try {
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
  doc(collectionPath: string, docId: string): MockDocumentReference {
    const collection = this.getCollection(collectionPath)
    if (!collection.docs[docId]) {
      collection.docs[docId] = {
        id: docId,
        path: `${collectionPath}/${docId}`,
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
