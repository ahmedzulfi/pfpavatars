"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../Firebase";

interface BackendUser {
  id: string;
  email: string;
  display_name: string;
  username: string;
  profile_picture: string;
  twitter: string;
  credits_remaining: number;
  total_avatars_generated: number;
  billing_customer_id: string | null;
  is_admin: boolean;
  auth_provider: string;
  ip_address: string | null;
  last_login: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null; // Firebase user
  loading: boolean;
  backendUser: BackendUser | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true, // ✅ set true initially
  backendUser: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // ✅ true by default

  const [backendUser, setBackendUser] = useState<BackendUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(true);

      if (firebaseUser) {
        const idToken = await firebaseUser.getIdToken();
        try {
          const res = await fetch("http://localhost:5000/auth/me", {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          });
          const data = await res.json();
          setBackendUser(data.user);
          console.log("Fetched backend user:", data);
        } catch (err) {
          console.error("Failed to fetch backend user", err);
        }
      } else {
        setBackendUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null; // ✅ prevent flicker before auth is ready

  return (
    <AuthContext.Provider value={{ user, loading, backendUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
