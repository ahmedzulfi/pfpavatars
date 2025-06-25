// firebase/ProtectedRoute.tsx
"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/Authcontext";
import { ReactNode } from "react";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div className="text-center p-6">Loading...</div>;

  if (!user) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}
