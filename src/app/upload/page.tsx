"use client";

import React, { useState } from "react";
import Backgroundgrad from "@/components/Backgroundgrad";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
const colors = [
  "#9a8570",
  "#377dff",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];
export default function UploadPage() {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  return (
    <PageTransitionWrapper>
      <main className=" min-h-screen  relative flex flex-col justify-center items-center bg-white text-background w-full font-[family-name:var(--font-geist-sans)]">
        <Backgroundgrad />
        <div className="relative z-20 w-full flex justify-center  backdrop-blur-sm h-screen ">
          <section className="relative pt-20 w-[1270px] max-w-[90%]   overflow-visible ">
            <div className="container mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10  h-full  rounded-4xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Credits", value: 5 },
                  { label: "Generated", value: 12 },
                  { label: "This Month", value: 8 },
                  { label: "Plan", value: "Pro" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/60 backdrop-blur-sm p-4 rounded-xl text-center shadow-sm"
                  >
                    <div className="text-xl font-semibold">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-dashed border-gray-300 text-center flex flex-col justify-center items-center">
                  <Upload className="w-10 h-10 text-[#9a8570] mb-4" />
                  <p className="text-sm font-medium text-[#9a8570] mb-2">
                    Drop your image here
                  </p>
                  <label className="text-xs text-gray-500 cursor-pointer mb-4">
                    or click to browse files
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <button className="bg-[#f6eee3] text-sm px-4 py-2 rounded-md shadow-sm hover:bg-[#efe7db]">
                    Browse Files
                  </button>
                </div>

                {/* Color Picker */}
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow">
                  <h3 className="font-medium text-gray-700 mb-4">
                    Background Color
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-full h-15 rounded-md transition ${
                          selectedColor === color ? "ring-2 ring-white" : ""
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <button
                    disabled={!imageFile}
                    className={`w-full px-4 py-2 text-white rounded-full font-medium transition ${
                      imageFile
                        ? "bg-[#9a8570] hover:opacity-90"
                        : "bg-[#ccc] cursor-not-allowed"
                    }`}
                  >
                    Generate Avatar (1 Credit)
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
