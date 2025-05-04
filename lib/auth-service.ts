import {
  createUserWithEmailAndPassword as firebaseCreateUser,
  signInWithEmailAndPassword as firebaseSignIn,
  signInWithPopup as firebaseSignInPopup,
  updateProfile as firebaseUpdateProfile,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  type User,
} from "firebase/auth"
import { auth, googleProvider } from "./firebase"
import { mockAuth, mockGoogleProvider, type MockUser } from "./mock-auth"

// Flag to determine which auth system to use
// Set this to false to use Firebase Auth
const USE_MOCK_AUTH = true

// Helper to convert between Firebase User and MockUser if needed
function convertUser(user: User | MockUser | null): User | MockUser | null {
  return user // Both types are compatible for our purposes
}

// Unified auth service with same API regardless of which system is used
export const authService = {
  // Create user with email and password
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    if (USE_MOCK_AUTH) {
      return mockAuth.createUserWithEmailAndPassword(email, password)
    } else {
      return firebaseCreateUser(auth, email, password)
    }
  },

  // Sign in with email and password
  signInWithEmailAndPassword: async (email: string, password: string) => {
    if (USE_MOCK_AUTH) {
      return mockAuth.signInWithEmailAndPassword(email, password)
    } else {
      return firebaseSignIn(auth, email, password)
    }
  },

  // Sign in with Google
  signInWithPopup: async () => {
    if (USE_MOCK_AUTH) {
      return mockAuth.signInWithPopup(mockGoogleProvider)
    } else {
      return firebaseSignInPopup(auth, googleProvider)
    }
  },

  // Update user profile
  updateProfile: async (user: User | MockUser, profile: { displayName?: string; photoURL?: string }) => {
    if (USE_MOCK_AUTH) {
      return mockAuth.updateProfile(user as MockUser, profile)
    } else {
      return firebaseUpdateProfile(user as User, profile)
    }
  },

  // Sign out
  signOut: async () => {
    if (USE_MOCK_AUTH) {
      return mockAuth.signOut()
    } else {
      return firebaseSignOut(auth)
    }
  },

  // Listen for auth state changes
  onAuthStateChanged: (callback: (user: User | MockUser | null) => void) => {
    if (USE_MOCK_AUTH) {
      return mockAuth.onAuthStateChanged(callback)
    } else {
      return firebaseOnAuthStateChanged(auth, callback)
    }
  },

  // Get current auth object (for advanced usage)
  getAuth: () => {
    return USE_MOCK_AUTH ? mockAuth : auth
  },

  // Flag to check which system is being used
  isMockAuth: USE_MOCK_AUTH,
}
