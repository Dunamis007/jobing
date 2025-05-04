import { EventEmitter } from "events"

// Types to match Firebase Auth
export interface MockUser {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
  createdAt: string
}

export interface MockUserCredential {
  user: MockUser
}

export interface MockAuthError {
  code: string
  message: string
}

// Mock Auth Provider (similar to GoogleAuthProvider)
export class MockGoogleProvider {
  providerId = "google.com"
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

// Main Mock Auth class
class MockAuth extends EventEmitter {
  private currentUser: MockUser | null = null
  private users: Record<string, { user: MockUser; password: string }> = {}
  private initialized = false

  constructor() {
    super()
    this.loadFromLocalStorage()
  }

  // Load saved users and auth state from localStorage
  private loadFromLocalStorage() {
    try {
      if (!isLocalStorageAvailable()) return

      const savedUsers = localStorage.getItem("mock_auth_users")
      if (savedUsers) {
        this.users = JSON.parse(savedUsers)
      }

      const savedUser = localStorage.getItem("mock_auth_current_user")
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser)
        this.emit("authStateChanged", this.currentUser)
      }

      this.initialized = true
    } catch (error) {
      console.error("Error loading mock auth data:", error)
    }
  }

  // Save current state to localStorage
  private saveToLocalStorage() {
    try {
      if (!isLocalStorageAvailable()) return

      localStorage.setItem("mock_auth_users", JSON.stringify(this.users))
      localStorage.setItem("mock_auth_current_user", this.currentUser ? JSON.stringify(this.currentUser) : "")
    } catch (error) {
      console.error("Error saving mock auth data:", error)
    }
  }

  // Generate a unique ID (simplified version)
  private generateUid(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  // Sign in with email and password
  async signInWithEmailAndPassword(email: string, password: string): Promise<MockUserCredential> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find user with matching email
    const userEntry = Object.values(this.users).find((entry) => entry.user.email?.toLowerCase() === email.toLowerCase())

    if (!userEntry) {
      throw { code: "auth/user-not-found", message: "No user found with this email" }
    }

    if (userEntry.password !== password) {
      throw { code: "auth/wrong-password", message: "Incorrect password" }
    }

    // Set as current user
    this.currentUser = userEntry.user
    this.saveToLocalStorage()
    this.emit("authStateChanged", this.currentUser)

    return { user: this.currentUser }
  }

  // Create a new user with email and password
  async createUserWithEmailAndPassword(email: string, password: string): Promise<MockUserCredential> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if email already exists
    const existingUser = Object.values(this.users).find(
      (entry) => entry.user.email?.toLowerCase() === email.toLowerCase(),
    )

    if (existingUser) {
      throw { code: "auth/email-already-in-use", message: "Email already in use" }
    }

    // Validate password
    if (password.length < 6) {
      throw { code: "auth/weak-password", message: "Password should be at least 6 characters" }
    }

    // Create new user
    const uid = this.generateUid()
    const newUser: MockUser = {
      uid,
      email,
      displayName: null,
      photoURL: null,
      emailVerified: false,
      createdAt: new Date().toISOString(),
    }

    this.users[uid] = { user: newUser, password }
    this.currentUser = newUser
    this.saveToLocalStorage()
    this.emit("authStateChanged", this.currentUser)

    return { user: newUser }
  }

  // Sign in with popup (Google)
  async signInWithPopup(provider: MockGoogleProvider): Promise<MockUserCredential> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Simulate Google sign-in by creating a random name
    const randomName = `User${Math.floor(Math.random() * 10000)}`
    const email = `${randomName.toLowerCase()}@gmail.com`

    // Check if this Google user already exists
    const existingUser = Object.values(this.users).find(
      (entry) => entry.user.email?.toLowerCase() === email.toLowerCase(),
    )

    if (existingUser) {
      // If exists, just log them in
      this.currentUser = existingUser.user
      this.saveToLocalStorage()
      this.emit("authStateChanged", this.currentUser)
      return { user: existingUser.user }
    }

    // Create new Google user
    const uid = this.generateUid()
    const newUser: MockUser = {
      uid,
      email,
      displayName: randomName,
      photoURL: `https://ui-avatars.com/api/?name=${randomName}&background=random`,
      emailVerified: true,
      createdAt: new Date().toISOString(),
    }

    // Store with a random password (not needed for Google users)
    this.users[uid] = { user: newUser, password: this.generateUid() }
    this.currentUser = newUser
    this.saveToLocalStorage()
    this.emit("authStateChanged", this.currentUser)

    return { user: newUser }
  }

  // Update user profile
  async updateProfile(user: MockUser, profile: { displayName?: string; photoURL?: string }) {
    if (!user || !this.users[user.uid]) {
      throw { code: "auth/user-not-found", message: "User not found" }
    }

    // Update user properties
    if (profile.displayName !== undefined) {
      this.users[user.uid].user.displayName = profile.displayName
    }
    if (profile.photoURL !== undefined) {
      this.users[user.uid].user.photoURL = profile.photoURL
    }

    // If this is the current user, update current user too
    if (this.currentUser && this.currentUser.uid === user.uid) {
      this.currentUser = { ...this.currentUser, ...profile }
    }

    this.saveToLocalStorage()
    return user
  }

  // Sign out
  async signOut() {
    this.currentUser = null
    this.saveToLocalStorage()
    this.emit("authStateChanged", null)
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser
  }

  // Listen for auth state changes (similar to onAuthStateChanged)
  onAuthStateChanged(callback: (user: MockUser | null) => void) {
    // Call immediately with current state
    if (this.initialized) {
      callback(this.currentUser)
    }

    // Set up listener for future changes
    this.on("authStateChanged", callback)

    // Return unsubscribe function
    return () => {
      this.off("authStateChanged", callback)
    }
  }
}

// Create singleton instance
export const mockAuth = new MockAuth()
export const mockGoogleProvider = new MockGoogleProvider()
