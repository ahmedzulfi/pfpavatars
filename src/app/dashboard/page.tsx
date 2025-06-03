"use client";

import React, { useState } from "react";
import Backgroundgrad from "@/components/Backgroundgrad";
import { Upload, User } from "lucide-react";
const colors = [
  "#9a8570",
  "#377dff",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];
export default function Dashboard() {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  return (
    <main className=" min-h-screen  relative flex flex-col justify-center items-center bg-white text-background w-full font-[family-name:var(--font-geist-sans)]">
      <Backgroundgrad />
      <div className="relative z-20 w-[66%]  h-screen ">
        <section className="relative pt-30  h-[80%] overflow-visible ">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10  h-full backdrop-blur-sm bg-white/25 rounded-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your avatars, credits, and account settings
              </p>
            </div>

            {/* User Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="p-3 bg-[#d4c4a8]/20 rounded-full">
                        <User className="w-6 h-6 text-[#8b7355]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Welcome</p>
                      <h3 className="font-semibold text-gray-900">
                        Ahmed Zulfiqar{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="p-3 bg-[#d4c4a8]/20 rounded-full">
                        <div className="w-6 h-6 text-[#8b7355]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Available Credits</p>
                      <h3 className="font-semibold text-gray-900">Credits</h3>
                    </div>
                    <div className="ml-auto">
                      <div>
                        <div className="bg-[#d4c4a8] hover:bg-[#c2b394] text-gray-900">
                          Buy More
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="p-3 bg-[#d4c4a8]/20 rounded-full">
                        <div className="w-6 h-6 text-[#8b7355]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Avatars</p>
                      <h3 className="font-semibold text-gray-900">
                        72 Avatars
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <div>
                        <div className="bg-[#d4c4a8] hover:bg-[#c2b394] text-gray-900">
                          <div className="w-4 h-4 mr-1" /> New
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
