"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft, Download, Home } from "lucide-react";
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
export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const avatarStyles = [
    {
      id: 1,
      name: "3D Cartoon",
      description: "Smooth look with soft shading and expressive features.",
      preview: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Realistic",
      description: "Professional and lifelike appearance.",
      preview: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Minimalist",
      description: "Clean lines with simple, modern aesthetic.",
      preview: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Artistic",
      description: "Creative and stylized interpretation.",
      preview: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen pt-25 bg-[#f5f5f5] text-gray-900 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[90%] w-full md:w-[1250px] mx-auto">
          <div className="md:col-span-2 sm:border border-black/7  lg:col-span-4 xl:col-span-4 sm:bg-white/80 backdrop-blur-sm shadow-xs rounded-xl md:px-8 px-3 py-8">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="text-start mb-2 - slide-in-from-left duration-500">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  Your Avatars Are Ready!
                </h1>
                <p className="text-sm sm:text-base text-gray-600 duration-700 delay-200">
                  Download and use your avatars anywhere — LinkedIn, X, or
                  anywhere you want to stand out.
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                {/* Left Panel - Style Cards */}
                <div className="grid grid-cols-2 gap-4 h-full">
                  {avatarStyles.map((style, index) => (
                    <Card
                      key={style.id}
                      className={`group cursor-pointer transition-all overflow-hidden duration-300 ease-out p-0 aspect-square transform hover:scale-[1.02] ${
                        selectedStyle === index
                          ? "ring-2 ring-black/40 shadow-lg scale-[1.02]"
                          : "hover:shadow-xl hover:ring-1 hover:ring-black/20"
                      }`}
                      onClick={() => setSelectedStyle(index)}
                    >
                      <CardContent className="p-0 h-full">
                        <div className="relative h-full overflow-hidden">
                          <Image
                            src={image1}
                            alt={style.name}
                            fill
                            className={`object-cover rounded-lg transition-transform duration-500 ease-out ${
                              selectedStyle === index
                                ? "scale-105"
                                : "group-hover:scale-110"
                            }`}
                          />

                          {/* Hover overlay */}
                          <div
                            className={`absolute inset-0 bg-black/0 transition-all duration-300 ${
                              selectedStyle !== index
                                ? "group-hover:bg-black/10"
                                : ""
                            }`}
                          />

                          {/* Style name overlay */}
                          <div
                            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent transition-all duration-300 ${
                              selectedStyle === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                            }`}
                          >
                            <div className="p-3">
                              <h3 className="font-medium text-sm text-center text-white transform transition-transform duration-300">
                                {style.name}
                              </h3>
                            </div>
                          </div>

                          {/* Selection indicator */}
                          {selectedStyle === index && (
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1  fade-in zoom-in duration-200">
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
                  <ImageComparison
                    className="aspect-[10/10] w-full rounded-lg border border-zinc-200"
                  >
                    <ImageComparisonImage
                      src={image1.src}
                      alt="Before"
                      position="left"
                    />
                    <ImageComparisonImage
                      src={image2.src}
                      alt="After"
                      position="right"
                    />
                    <ImageComparisonSlider className="w-2 bg-white/50 backdrop-blur-xs transition-colors hover:bg-white/80">
                      <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white" />
                    </ImageComparisonSlider>
                  </ImageComparison>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => router.push("/")}
                  className="group inline-flex items-center justify-center w-full rounded-lg border border-black/10 bg-gray-100/50 text-black text-sm font-medium py-3 hover:bg-gray-100 transition-all duration-200 hover:border-black/20 hover:shadow-md active:scale-[0.98]"
                >
                  <Home className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  <span className="transition-all duration-200 group-hover:tracking-wide">
                    Back to Home
                  </span>
                </button>
                <a
                  href={image2.src}
                  download="avatar-after.jpg"
                  className="group inline-flex items-center justify-center w-full rounded-lg border border-black/10 bg-black text-white text-sm font-medium py-3 hover:bg-black/90 transition-all duration-200 hover:shadow-lg hover:shadow-black/20 active:scale-[0.98] relative overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  <Download className="w-4 h-4 mr-2 transition-all duration-200 group-hover:rotate-12 group-hover:scale-110 relative z-10" />
                  <span className="transition-all duration-200 group-hover:tracking-wide relative z-10">
                    Download Avatar
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
