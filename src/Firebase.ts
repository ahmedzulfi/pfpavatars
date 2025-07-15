import { getApp, getApps, initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Check if we're in a build environment or if Firebase config is incomplete
const isConfigValid = firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId;

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

if (isConfigValid) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
  } catch (error) {
    console.error('Firebase initialization failed:', error);
  }
} else {
  // During build or when config is missing
  console.warn('Firebase config is incomplete, auth will be null');
}

// Helper function to safely get auth
export const getFirebaseAuth = (): Auth => {
  if (!auth) {
    throw new Error('Firebase auth is not initialized. Make sure environment variables are set correctly.');
  }
  return auth;
};

// Export auth for backward compatibility (but prefer using getFirebaseAuth)
export { auth };