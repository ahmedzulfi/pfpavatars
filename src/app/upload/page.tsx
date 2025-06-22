"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Upload,
  X,
  Sparkles,
  Check,
  Coins,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import Backgroundgrad from "@/components/Backgroundgrad";

export default function GetStarted() {
  // Change state from array to single file or null
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const creditsRequired = 10;
  const router = useRouter();
  const avatarStyles = [
    {
      id: "professional",
      name: "Professional",
      description: "Clean, business-ready avatars",
    },
    {
      id: "artistic",
      name: "Artistic",
      description: "Creative and stylized portraits",
    },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setUploadedImage(file);
      }
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    // Simulate API call - replace with your actual generation logic
    try {
      // Your avatar generation API call would go here
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulated delay

      router.push("/result");
    } catch (error) {
      console.error("Generation failed:", error);
      // Handle error appropriately
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {" "}
      {isGenerating && (
        <div className="fixed inset-0 w-screen h-screen top-0 left-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 mx-4 max-w-md w-full text-center shadow-2xl">
            <div className="mb-6">
              <Loader2 className="w-16 h-16 text-[#ffedc9] mx-auto animate-spin" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Creating Your Avatars
            </h3>
            <p className="text-gray-600 mb-4">
              Our AI is working its magic to generate 20+ unique avatars for
              you.
            </p>
            <div className="bg-gray-100 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-[#ffedc9] to-[#ffdea6] h-2 rounded-full animate-pulse w-3/4"></div>
            </div>
            <p className="text-sm text-gray-500">
              This usually takes 2-3 minutes
            </p>
          </div>
        </div>
      )}
      <PageTransitionWrapper>
        <main className="min-h-screen relative flex flex-col justify-center items-center text-background w-full font-[family-name:var(--font-geist-sans)]">
          <div className="relative z-20 min-h-screen flex justify-center w-full backdrop-blur-sm">
            <section className="relative pt-12 sm:pt-16 md:pt-20 w-full max-w-[1270px] px-4 sm:px-6 lg:px-8 xl:px-0 min-h-[80%] overflow-visible">
              <div className="container mx-auto pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-24 relative z-10 h-full rounded-xl">
                <div className="backdrop-blur-sm shadow-xs rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-gray-900 mb-4 sm:mb-6 md:mb-7">
                  {/* Progress Steps */}
                  <div className="px-2 sm:px-4 py-4 lg:px-8">
                    <div className="mx-auto">
                      <div className="text-center mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 px-2">
                          {currentStep === 1 && "Upload Your Photo"}
                          {currentStep === 2 && "Choose Your Style"}
                          {currentStep === 3 &&
                            !isGenerating &&
                            "Generate Avatars"}
                          {currentStep === 3 &&
                            isGenerating &&
                            "Generating Your Avatars"}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 px-2">
                          {currentStep === 1 &&
                            "Upload a high-quality photo of yourself for best results"}
                          {currentStep === 2 &&
                            "Select the avatar style that matches your preference"}
                          {currentStep === 3 &&
                            !isGenerating &&
                            "Review your selections and generate your avatars"}
                          {currentStep === 3 &&
                            isGenerating &&
                            "Please wait while we create your personalized avatars..."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Loading Overlay */}

                  {/* Main Content */}
                  <main className="px-2 sm:px-4 pb-8 sm:pb-12 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                      {/* Step 1: Upload Photo */}
                      {currentStep === 1 && (
                        <div className="space-y-4 sm:space-y-6">
                          <div className="rounded-lg shadow-sm  border-2 border-dashed border-gray-500/20 bg-white/80">
                            <div className="p-4 sm:p-6 md:p-8">
                              {!uploadedImage ? (
                                <div
                                  className={` rounded-lg p-6 sm:p-8 text-center transition-colors cursor-pointer`}
                                  onClick={handleUploadClick}
                                >
                                  <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                    Drag and drop your photo here
                                  </h3>
                                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                    or click to browse your files
                                  </p>
                                  <button
                                    type="button"
                                    className="bg-[#ffedc9] hover:bg-[#ffdea6] text-gray-900 px-4 py-2 rounded font-semibold text-sm sm:text-base"
                                  >
                                    Choose File
                                  </button>
                                </div>
                              ) : (
                                <div
                                  className="relative  rounded-lg p-3 sm:p-4 cursor-pointer  transition-colors bg-[#d4c4a8]/5"
                                  onClick={handleUploadClick}
                                >
                                  <img
                                    src={URL.createObjectURL(uploadedImage)}
                                    alt="Uploaded"
                                    className="w-full aspect-square object-cover rounded-lg max-w-sm mx-auto"
                                  />
                                  <div className="absolute inset-0 bg-black/0 transition-colors rounded-lg flex items-center justify-center">
                                    <div className="opacity-0 hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2"></div>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeImage();
                                    }}
                                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 shadow-lg"
                                  >
                                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                                  </button>
                                </div>
                              )}

                              <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="hidden"
                              />
                            </div>
                          </div>

                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                            <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">
                              Tips for best results:
                            </h4>
                            <ul className="text-xs sm:text-sm text-amber-700 space-y-1 list-disc list-inside">
                              <li>
                                Use a high-resolution photo (at least 512x512
                                pixels)
                              </li>
                              <li>
                                Include different angles and expressions if
                                possible
                              </li>
                              <li>
                                Ensure good lighting and clear facial features
                              </li>
                              <li>Avoid sunglasses or face coverings</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Choose Style */}
                      {currentStep === 2 && (
                        <div className="space-y-4 sm:space-y-6">
                          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {avatarStyles.map((style) => (
                              <div
                                key={style.id}
                                className={`cursor-pointer transition-all rounded-lg border shadow-sm p-4 sm:p-6 ${
                                  selectedStyle === style.id
                                    ? "ring-2 ring-[#ffedc9] bg-[#d4c4a8]/10 border-[#ffdea6]"
                                    : "bg-white/80 border border-gray-200 hover:bg-white"
                                }`}
                                onClick={() => setSelectedStyle(style.id)}
                              >
                                <div className="aspect-square bg-gray-100 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                                  {style.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                  {style.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Generate */}
                      {currentStep === 3 && (
                        <div className="space-y-4 sm:space-y-6">
                          <div className="rounded-lg shadow-sm border border-[#d4c4a8] bg-white/80">
                            <div className="p-4 sm:p-6 md:p-8">
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Review Your Selection
                              </h3>

                              <div className="space-y-3 sm:space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                                    Photo
                                  </h4>
                                  {uploadedImage ? (
                                    <img
                                      src={URL.createObjectURL(uploadedImage)}
                                      alt="Preview"
                                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                                    />
                                  ) : (
                                    <p className="text-sm sm:text-base">
                                      No photo uploaded
                                    </p>
                                  )}
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                                    Style
                                  </h4>
                                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-[#ffedc9] text-gray-900">
                                    {
                                      avatarStyles.find(
                                        (s) => s.id === selectedStyle
                                      )?.name
                                    }
                                  </span>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                                    Cost
                                  </h4>
                                  <div className="flex items-center space-x-2">
                                    <Coins className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                                    <span className="text-gray-900 text-sm sm:text-base">
                                      {creditsRequired} Credits
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 rounded-lg">
                                <p className="text-xs sm:text-sm text-blue-800 flex items-start sm:items-center">
                                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 mt-0.5 sm:mt-0 flex-shrink-0" />
                                  <span>
                                    Your avatars will be generated in about 2-3
                                    minutes. You'll receive 20+ unique avatars
                                    in high resolution.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8">
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentStep(Math.max(1, currentStep - 1))
                          }
                          disabled={isGenerating}
                          className="order-2 sm:order-1 border border-gray-300 px-4 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                          Previous
                        </button>

                        {currentStep < 3 ? (
                          <button
                            type="button"
                            onClick={() => setCurrentStep(currentStep + 1)}
                            disabled={isGenerating}
                            className="order-1 sm:order-2 bg-[#ffedc9] hover:bg-[#ffdea6] text-gray-900 px-4 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                          >
                            Continue
                          </button>
                        ) : (
                          <button
                            type="button"
                            disabled={isGenerating}
                            onClick={handleGenerate}
                            className="order-1 sm:order-2 bg-[#ffedc9] hover:bg-[#ffdea6] disabled:bg-gray-300 disabled:text-gray-500 text-gray-900 px-4 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                          >
                            {isGenerating ? (
                              <>
                                <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
                                <span>Generating...</span>
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:block hidden" />
                                <span>
                                  Generate Avatars ({creditsRequired} Credits)
                                </span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </section>
          </div>
        </main>
      </PageTransitionWrapper>
    </>
  );
}
