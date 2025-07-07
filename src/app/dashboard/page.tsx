"use client";

import React from "react";
import {
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Userstats from "@/components/Userstats";
import RecentAvatars from "@/components/RecentAvatars";
import Credithistory from "@/components/Credithistory";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import { ProtectedRoute } from "@/firebase/ProtectedRoute";
import { useAuth } from "../../context/Authcontext";

export default function Dashboard() {
  const { user, loading, backendUser } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen relative flex flex-col justify-center items-center bg-black text-white w-full font-[family-name:var(--font-geist-sans)]">
        <div className="relative z-20 min-h-screen flex justify-center w-full backdrop-blur-sm">
          <section className="relative pt-20 w-[1270px] max-w-[90%] min-h-[80%] overflow-visible">
            <div className="container mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-10 pb-16 md:pb-24 relative z-10 h-full rounded-xl">
              <div className="bg-neutral-950/60 backdrop-blur-md border border-neutral-900/60 shadow-sm rounded-2xl p-8 mb-7">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                      Welcome back {backendUser && backendUser.display_name}!
                    </h1>
                    <p className="text-neutral-400 text-base sm:text-lg">
                      Ready to create some amazing avatars today?
                    </p>
                  </div>

                  <Link href="/upload" className="md:w-auto w-full">
                    <div className="flex justify-center items-center py-3 px-5 rounded-lg bg-[#ffedc9] hover:bg-[#ffe4a8] transition-all duration-300 text-black font-semibold w-full sm:w-auto">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Avatars
                    </div>
                  </Link>
                </div>
              </div>

              {/* Stats and Avatar History */}
              <Userstats />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                <RecentAvatars />
                <Credithistory />
              </div>
            </div>
          </section>
        </div>
      </main>
    </ProtectedRoute>
  );
}
