"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Download, Home } from "lucide-react";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import image1 from "../../image/avatar1.jpg";
import image2 from "../../image/ez.jpg";
import Image from "next/image";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ImageComparision";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ResultPage() {
  const router = useRouter();
  const [selectedStyle, setSelectedStyle] = useState(0);

  const avatarStyles = [
    {
      id: 1,
      name: "3D Cartoon",
      description: "Smooth look with soft shading and expressive features.",
    },
    {
      id: 2,
      name: "Realistic",
      description: "Professional and lifelike appearance.",
    },
    {
      id: 3,
      name: "Minimalist",
      description: "Clean lines with simple, modern aesthetic.",
    },
    {
      id: 4,
      name: "Artistic",
      description: "Creative and stylized interpretation.",
    },
  ];

  const avatarUrl = localStorage.getItem("generated_avatar");
  const uploadedimg = localStorage.getItem("uploaded_avatar");

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen pt-24 bg-black text-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[90%] w-full md:w-[1250px] mx-auto">
          <div className="md:col-span-2 lg:col-span-4 xl:col-span-4 bg-neutral-950/60 border border-zinc-900/60 backdrop-blur-md shadow-md rounded-xl px-4 sm:px-6 md:px-8 py-8">
            <div className="flex flex-row items-center justify-between mb-9">
              <div className="text-start">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Your Avatars Are Ready!
                </h1>
                <p className="text-sm sm:text-base text-zinc-400 mt-1">
                  Download and use your avatars anywhere — LinkedIn, X, or
                  wherever you want to stand out.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              {/* Left Panel - Style Cards */}
              <div className="grid grid-cols-2 gap-4 h-full">
                {avatarStyles.map((style, index) => (
                  <Card
                    key={style.id}
                    className={` cursor-pointer transition-all duration-300 p-0 aspect-square  hover:scale-[1.001] overflow-hidden ${
                      selectedStyle === index
                        ? " shadow-lg scale-[1.001] border border-neutral-950/30"
                        : "border border-neutral-950/30"
                    }`}
                    onClick={() => setSelectedStyle(index)}
                  >
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full">
                        <Image
                          src={avatarUrl || ""}
                          alt={style.name}
                          fill
                          className={`object-cover rounded-lg transition-transform duration-500 ${
                            selectedStyle === index
                              ? "scale-105"
                              : "group-hover:scale-110"
                          }`}
                        />
                        <div
                          className={`absolute inset-0 transition-all ${
                            selectedStyle !== index
                              ? "group-hover:bg-black/20"
                              : ""
                          }`}
                        />
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 ${
                            selectedStyle === index
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                          }`}
                        >
                          <div className="p-3">
                            <h3 className="font-medium text-sm text-center text-white">
                              {style.name}
                            </h3>
                          </div>
                        </div>
                        {selectedStyle === index && (
                          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Right Panel - Comparison */}
              <div className="flex flex-col justify-center h-full">
                <ImageComparison className="aspect-[10/10] w-full rounded-lg border border-zinc-700">
                  <ImageComparisonImage
                    src={uploadedimg || ""}
                    alt="Before"
                    position="left"
                  />
                  <ImageComparisonImage
                    src={avatarUrl || ""}
                    alt="After"
                    position="right"
                  />
                  <ImageComparisonSlider className="w-2 bg-white/40 hover:bg-white/80 transition-all">
                    <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white" />
                  </ImageComparisonSlider>
                </ImageComparison>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/"
                className="group inline-flex items-center justify-center w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white text-sm font-medium py-3 hover:bg-zinc-700 transition-all duration-200 hover:shadow-md active:scale-[0.98]"
              >
                <Home className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
                <span className="group-hover:tracking-wide">Back to Home</span>
              </Link>

              <a
                href={image2.src}
                download="avatar-after.jpg"
                className="group inline-flex items-center justify-center w-full rounded-lg border border-zinc-700 bg-[#fff] text-black text-sm font-medium py-3 hover:bg-yellow-300 transition-all duration-200 hover:shadow-md active:scale-[0.98] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <Download className="w-4 h-4 mr-2 group-hover:rotate-12 group-hover:scale-110 relative z-10" />
                <span className="relative z-10 group-hover:tracking-wide">
                  Download Avatar
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
