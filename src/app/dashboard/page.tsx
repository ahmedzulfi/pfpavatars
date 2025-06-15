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
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";

export default function Dashboard() {
  return (
    <PageTransitionWrapper>
      {" "}
      <main className=" min-h-screen  relative flex flex-col justify-center items-center bg-white text-background w-full font-[family-name:var(--font-geist-sans)]">
        <div className="relative z-20 min-h-screen flex justify-center w-full  backdrop-blur-sm  ">
          <section className="relative pt-20  w-[1270px] max-w-[90%] min-h-[80%] overflow-visible ">
            <div className="container mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-10 pb-16 md:pb-24 relative z-10  h-full rounded-xl">
              <div className="bg-white/60 backdrop-blur-sm shadow-xs rounded-2xl p-8 text-gray-900 mb-7">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                      Welcome back, Ahmed! ✨
                    </h1>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Ready to create some amazing avatars today?
                    </p>
                  </div>

                  <Link href="/get-started" className="md:w-auto w-full">
                    <div className="flex justify-center items-center w-full py-3 px-5 rounded-lg bg-[#ffedc9] hover:bg-[#ffedc9] transition-all duration-300 text-gray-900 w-full sm:w-auto">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Avatars
                    </div>
                  </Link>
                </div>
              </div>{" "}
              <Userstats />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1 gap-6">
                <RecentAvatars />
                {
                  //    <Credithistory />
                }
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
