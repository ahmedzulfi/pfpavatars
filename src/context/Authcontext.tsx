"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { getFirebaseAuth } from "../Firebase";

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
  user: User | null;
  loading: boolean;
  backendUser: BackendUser | null;
  refreshBackendUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  backendUser: null,
  refreshBackendUser: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [backendUser, setBackendUser] = useState<BackendUser | null>(null);

  const refreshBackendUser = async (firebaseUserOverride?: User | null) => {
    try {
      const auth = getFirebaseAuth();
      const currentUser = firebaseUserOverride || auth.currentUser;
      if (!currentUser) return;

      const idToken = await currentUser.getIdToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      const data = await res.json();
      setBackendUser(data.user);
      console.log("✅ Refreshed backend user:", data.user);
    } catch (err) {
      console.error("❌ Failed to fetch backend user:", err);
      setBackendUser(null);
    }
  };

  useEffect(() => {
    try {
      const auth = getFirebaseAuth();
      
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(true);

        if (firebaseUser) {
          await refreshBackendUser(firebaseUser);
        } else {
          setBackendUser(null);
        }

        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Firebase auth initialization failed:", error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, backendUser, refreshBackendUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);