"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/Authcontext";
import { ReactNode, useEffect } from "react";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="text-center p-6">Loading...</div>;
  }

  return <>{children}</>;
}
