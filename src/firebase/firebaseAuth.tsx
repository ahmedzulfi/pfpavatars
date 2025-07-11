"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirebaseAuth } from "../Firebase";

// Signup
export const signup = async (email: string, password: string) => {
  const auth = getFirebaseAuth();
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const idToken = await userCred.user.getIdToken();
  return idToken;
};

// Login
export const login = async (email: string, password: string) => {
  const auth = getFirebaseAuth();
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  const idToken = await userCred.user.getIdToken();
  return idToken;
};
