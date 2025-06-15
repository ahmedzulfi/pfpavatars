"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Upload, X, Sparkles, Check, Coins, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import Backgroundgrad from "@/components/Backgroundgrad";

export default function GetStarted() {
  // Change state from array to single file or null
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const creditsRequired = 10;

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

  const canProceed = () => {
    if (currentStep === 1) return uploadedImage !== null;
    if (currentStep === 2) return selectedStyle !== "";
    return true;
  };

  // Fixed click handler to prevent double opening
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Dummy handlers used in your code for completeness
  const hasEnoughCredits = true;
  const handleGenerate = () => {
    // Your generate handler logic here
  };

  return (
    <>
      <PageTransitionWrapper>
        <main className=" min-h-screen  relative flex flex-col justify-center items-center bg-white text-background w-full font-[family-name:var(--font-geist-sans)]">
          <div className="relative z-20 min-h-screen flex justify-center w-full  backdrop-blur-sm  ">
            <section className="relative pt-20  w-[1270px] max-w-[90%] min-h-[80%] overflow-visible ">
              <div className="container mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-10 pb-16 md:pb-24 relative z-10  h-full rounded-xl">
                <div className="bg-white/60 backdrop-blur-sm shadow-xs rounded-2xl p-8 text-gray-900 mb-7">
                  {/* Progress Steps */}
                  <div className="px-4 py-4 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                      <div className="flex items-center justify-center space-x-8 mb-8">
                        {[1, 2, 3].map((step) => (
                          <div key={step} className="flex items-center">
                            <div
                              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                                currentStep >= step
                                  ? "bg-[#d4c4a8] border-[#d4c4a8] text-gray-900"
                                  : "border-gray-300 text-gray-400"
                              }`}
                            >
                              {currentStep > step ? (
                                <Check className="w-5 h-5" />
                              ) : (
                                step
                              )}
                            </div>
                            {step < 3 && (
                              <div
                                className={`w-16 h-0.5 ml-4 ${
                                  currentStep > step
                                    ? "bg-[#d4c4a8]"
                                    : "bg-gray-300"
                                }`}
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                          {currentStep === 1 && "Upload Your Photo"}
                          {currentStep === 2 && "Choose Your Style"}
                          {currentStep === 3 && "Generate Avatars"}
                        </h1>
                        <p className="text-gray-600">
                          {currentStep === 1 &&
                            "Upload a high-quality photo of yourself for best results"}
                          {currentStep === 2 &&
                            "Select the avatar style that matches your preference"}
                          {currentStep === 3 &&
                            "Review your selections and generate your avatars"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <main className="px-4 pb-12 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                      {/* Step 1: Upload Photo */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div className="rounded-lg shadow-sm border border-[#d4c4a8] bg-white/80">
                            <div className="p-8">
                              {!uploadedImage ? (
                                <div
                                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                                    isDragging
                                      ? "border-[#d4c4a8] bg-[#d4c4a8]/10"
                                      : "border-gray-300 hover:border-[#d4c4a8]"
                                  }`}
                                  onClick={handleUploadClick}
                                >
                                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Drag and drop your photo here
                                  </h3>
                                  <p className="text-gray-600 mb-4">
                                    or click to browse your files
                                  </p>
                                  <button
                                    type="button"
                                    className="bg-[#d4c4a8] hover:bg-[#c2b394] text-gray-900 px-4 py-2 rounded font-semibold"
                                  >
                                    Choose File
                                  </button>
                                </div>
                              ) : (
                                <div
                                  className="relative border-2 border-dashed border-[#d4c4a8] rounded-lg p-4 cursor-pointer hover:border-[#c2b394] transition-colors bg-[#d4c4a8]/5"
                                  onClick={handleUploadClick}
                                >
                                  <img
                                    src={URL.createObjectURL(uploadedImage)}
                                    alt="Uploaded"
                                    className="w-full aspect-square object-cover rounded-lg"
                                  />
                                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                                    <div className="opacity-0 hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                                      <p className="text-sm font-medium text-gray-900">
                                        Click to change image
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeImage();
                                    }}
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 shadow-lg"
                                  >
                                    <X className="w-4 h-4" />
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

                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <h4 className="font-semibold text-amber-800 mb-2">
                              Tips for best results:
                            </h4>
                            <ul className="text-sm text-amber-700 space-y-1 list-disc list-inside">
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
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {avatarStyles.map((style) => (
                              <div
                                key={style.id}
                                className={`cursor-pointer transition-all rounded-lg border shadow-sm p-6 ${
                                  selectedStyle === style.id
                                    ? "ring-2 ring-[#d4c4a8] bg-[#d4c4a8]/10 border-[#d4c4a8]"
                                    : "bg-white/80 border border-gray-200 hover:bg-white"
                                }`}
                                onClick={() => setSelectedStyle(style.id)}
                              >
                                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                  <Sparkles className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                  {style.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {style.description}
                                </p>
                                {selectedStyle === style.id && (
                                  <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold rounded bg-[#d4c4a8] text-gray-900">
                                    Selected
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Generate */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div className="rounded-lg shadow-sm border border-[#d4c4a8] bg-white/80">
                            <div className="p-8">
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Review Your Selection
                              </h3>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Photo
                                  </h4>
                                  {uploadedImage ? (
                                    <img
                                      src={URL.createObjectURL(uploadedImage)}
                                      alt="Preview"
                                      className="w-16 h-16 object-cover rounded-lg"
                                    />
                                  ) : (
                                    <p>No photo uploaded</p>
                                  )}
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Style
                                  </h4>
                                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-[#d4c4a8] text-gray-900">
                                    {
                                      avatarStyles.find(
                                        (s) => s.id === selectedStyle
                                      )?.name
                                    }
                                  </span>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Cost
                                  </h4>
                                  <div className="flex items-center space-x-2">
                                    <Coins className="w-4 h-4 text-amber-600" />
                                    <span className="text-gray-900">
                                      {creditsRequired} Credits
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-800 flex items-center">
                                  <Sparkles className="w-4 h-4 mr-1" />
                                  Your avatars will be generated in about 2-3
                                  minutes. You'll receive 20+ unique avatars in
                                  high resolution.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentStep(Math.max(1, currentStep - 1))
                          }
                          disabled={currentStep === 1}
                          className="border border-gray-300 px-4 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>

                        {currentStep < 3 ? (
                          <button
                            type="button"
                            onClick={() => setCurrentStep(currentStep + 1)}
                            disabled={!canProceed()}
                            className="bg-[#d4c4a8] hover:bg-[#c2b394] text-gray-900 px-4 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continue
                          </button>
                        ) : (
                          <button
                            type="button"
                            disabled={!canProceed() || !hasEnoughCredits}
                            onClick={handleGenerate}
                            className="bg-[#d4c4a8] hover:bg-[#c2b394] text-gray-900 px-4 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate Avatars ({creditsRequired} Credits)
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
