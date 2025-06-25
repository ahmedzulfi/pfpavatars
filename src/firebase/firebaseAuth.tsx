// lib/authFunctions.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";
import { auth } from "../Firebase";

// Signup
export const signup = async (email: string, password: string) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const idToken = await userCred.user.getIdToken();
  return idToken;
};

// Login
export const login = async (email: string, password: string) => {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  const idToken = await userCred.user.getIdToken();
  return idToken;
};
