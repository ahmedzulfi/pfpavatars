"use client";

import React, { useState } from "react";
import Backgroundgrad from "@/components/Backgroundgrad";
import {
  Clock,
  Coins,
  Plus,
  Sparkles,
  Upload,
  User,
  User2,
} from "lucide-react";
import Userstats from "@/components/Userstats";
import Link from "next/link";
import RecentAvatars from "@/components/RecentAvatars";
import Credithistory from "@/components/Credithistory";

export default function Dashboard() {
  return (
    <main className=" min-h-screen  relative flex flex-col justify-center items-center bg-white text-background w-full font-[family-name:var(--font-geist-sans)]">
      <Backgroundgrad />
      <div className="relative z-20 h-screen flex justify-center w-full  backdrop-blur-sm  ">
        <section className="relative pt-20  w-[66%]  h-[80%] overflow-visible ">
          <div className="container mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-10 pb-16 md:pb-24 relative z-10  h-full rounded-xl">
            <div className="bg-white/60 backdrop-blur-sm shadow-sm rounded-2xl p-8 text-gray-900 mb-7">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    Welcome back, Ahmed! ✨
                  </h1>
                  <p className="text-gray-700 text-lg">
                    Ready to create some amazing avatars today?
                  </p>
                </div>
                <Link href="/get-started">
                  <div className=" justify-center items-center py-3 px-5 rounded-lg  inline-flex bg-[#d4c4a8] hover:bg-[#ffedc9]  transition-all duration-305 text-gray-900 ">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Avatars
                  </div>
                </Link>
              </div>
            </div>{" "}
            <Userstats />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              <RecentAvatars />
              <Credithistory />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
