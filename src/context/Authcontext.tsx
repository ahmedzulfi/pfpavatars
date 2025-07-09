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
  refreshBackendUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  backendUser: null,
  refreshBackendUser: async () => {}, // default no-op
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [backendUser, setBackendUser] = useState<BackendUser | null>(null);

  const refreshBackendUser = async (firebaseUserOverride?: User | null) => {
    const currentUser = firebaseUserOverride || auth.currentUser;
    if (!currentUser) return;

    try {
      const idToken = await currentUser.getIdToken();
      const res = await fetch("http://localhost:5000/auth/me", {
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
  }, []);

  if (loading) return null; // prevent rendering app until auth is ready

  return (
    <AuthContext.Provider
      value={{ user, loading, backendUser, refreshBackendUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
