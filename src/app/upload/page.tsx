"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Upload, X, Sparkles, Coins, Loader2 } from "lucide-react";
import { useAuth } from "@/context/Authcontext";
import { ProtectedRoute } from "@/firebase/ProtectedRoute";
import img1 from "../../image/style1.png";
import img2 from "../../image/style2.png";
import img3 from "../../image/style3.png";
import img4 from "../../image/style4.png";
import Image from "next/image";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ImageComparision";

export default function GetStarted() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAvatarUrl, setGeneratedAvatarUrl] = useState<string | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const creditsRequired = 10;

  const avatarStyles = [
    {
      image: img1, // replace with correct preview
      id: "vintage-mono",
      name: "Vintage Mono Avatar",
      description: "Black & white avatar with retro cartoon charm",
    },
    {
      image: img2, // replace with correct preview
      id: "beige-noir",
      name: "Beige Noir Avatar",
      description:
        "Minimalist style with white skin, black clothes, beige background",
    },
    {
      image: img3, // replace with correct preview
      id: "vintage-pixel",
      name: "Vintage Pixel Avatar",
      description:
        "No facial features, thick outlines, colors taken from your image",
    },
    {
      image: img4, // replace with correct preview
      id: "pastel-pop",
      name: "Pastel Pop Avatar",
      description: "Soft pastel tones with friendly cartoon vibes",
    },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]?.type.startsWith("image/")) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const removeImage = () => setUploadedImage(null);
  const handleUploadClick = () => fileInputRef.current?.click();

  const handleGenerate = async () => {
    if (!uploadedImage || !selectedStyle) return;

    try {
      setIsGenerating(true);

      const formData = new FormData();
      formData.append("image", uploadedImage);
      formData.append("style", selectedStyle);

      const idToken = await user?.getIdToken();
      const res = await fetch("http://localhost:5000/avatars/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
        body: formData,
      });

      const data = await res.json();
      setGeneratedAvatarUrl(data.avatar);
      setCurrentStep(3);
    } catch (error) {
      console.error("Error generating avatar:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const stylePreviewImage = (styleName: string) =>
    avatarStyles.find((s) => s.name === styleName)?.image || img1;

  const renderComparison = () => {
    const styleImgSrc = stylePreviewImage(selectedStyle).src;
    const uploadedImgSrc = uploadedImage
      ? URL.createObjectURL(uploadedImage)
      : styleImgSrc;

    return (
      <ImageComparison className="w-full h-full" enableHover>
        <ImageComparisonImage
          src={styleImgSrc}
          alt="Style Preview"
          position="left"
        />
        <ImageComparisonImage
          src={uploadedImgSrc}
          alt="Your Image"
          position="right"
        />
        <ImageComparisonSlider className="w-2 bg-black/50 backdrop-blur-xs transition-colors hover:bg-black/80">
          <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-black" />
        </ImageComparisonSlider>
      </ImageComparison>
    );
  };

  return (
    <ProtectedRoute>
      <>
        {isGenerating && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-neutral-950 text-white rounded-2xl p-8 mx-4 max-w-md w-full text-center shadow-2xl">
              <Loader2 className="w-16 h-16 text-[#ffedc9] mx-auto animate-spin mb-6" />
              <h3 className="text-xl font-bold mb-2">Creating Your Avatars</h3>
              <p className="text-gray-400 mb-4">
                This usually takes 2-3 minutes
              </p>
              <div className="bg-neutral-800 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-[#ffedc9] to-[#ffdea6] h-2 rounded-full animate-pulse w-3/4"></div>
              </div>
              <p className="text-sm text-gray-500">Please wait…</p>
            </div>
          </div>
        )}

        <main className="h-full min-h-screen w-full bg-black text-white flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
          <section className="w-full max-w-[1270px] px-4 pt-10 sm:px-0 lg:px-0 mt-10">
            <div className="w-full bg-neutral-950/40 border border-neutral-900/30 rounded-xl p-4 sm:p-6 md:p-8 flex flex-col">
              <div className="flex-grow overflow-auto">
                {currentStep === 1 && (
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
                      {avatarStyles.map((style) => (
                        <div
                          key={style.id}
                          className={`cursor-pointer transition-all rounded-lg border shadow-sm p-4 ${
                            selectedStyle === style.name
                              ? "bg-neutral-900/50 border-neutral-900"
                              : "bg-neutral-950/30 border border-neutral-900/30 hover:bg-neutral-950/60"
                          }`}
                          onClick={() => setSelectedStyle(style.name)}
                        >
                          <div className="aspect-square bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
                            <Image
                              src={style.image}
                              alt={style.name}
                              className="rounded"
                            />
                          </div>
                          <h3 className="font-semibold mb-1 text-sm">
                            {style.name}
                          </h3>
                          <p className="text-xs text-gray-400">
                            {style.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="w-full lg:w-1/2 border border-neutral-900/30 bg-neutral-950/30 rounded-lg p-4">
                      {selectedStyle ? (
                        renderComparison()
                      ) : (
                        <p className="text-sm text-gray-400 text-center">
                          Select a style to preview.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="h-[70vh] flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/2 border-2 border-dashed border-neutral-900/40 rounded-lg flex flex-col justify-center items-center p-6">
                      {!uploadedImage ? (
                        <div
                          onClick={handleUploadClick}
                          className="cursor-pointer text-center"
                        >
                          <Upload className="w-12 h-12 text-gray-400 mb-4 mx-auto" />
                          <p className="text-sm mb-2">
                            Click to upload your image
                          </p>
                          <button className="bg-[#ffedc9] hover:bg-[#ffdea6] text-black px-4 py-2 rounded font-semibold text-sm">
                            Choose File
                          </button>
                        </div>
                      ) : (
                        <div className="relative w-full max-w-sm mx-auto">
                          <img
                            src={URL.createObjectURL(uploadedImage)}
                            alt="Uploaded"
                            className="w-full rounded-lg aspect-square object-cover"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage();
                            }}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
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

                    <div className="w-full lg:w-1/2 border border-neutral-900/30 bg-neutral-950/30 rounded-lg p-4">
                      {selectedStyle ? (
                        renderComparison()
                      ) : (
                        <p className="text-sm text-gray-400 text-center">
                          Select a style to preview.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="flex flex-col items-center justify-center min-h-[300px] gap-6 mt-10 text-center">
                    <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 w-full max-w-sm shadow-lg">
                      <h2 className="text-2xl font-bold mb-3">
                        Your Avatar is Ready!
                      </h2>
                      <p className="text-sm text-gray-400 mb-4">
                        Right-click or long-press the image below to save.
                      </p>
                      {generatedAvatarUrl ? (
                        <img
                          src={generatedAvatarUrl}
                          alt="Generated Avatar"
                          className="rounded-lg w-full aspect-square object-cover border border-neutral-800"
                        />
                      ) : (
                        <div className="h-64 flex items-center justify-center text-gray-500">
                          No avatar generated yet.
                        </div>
                      )}
                      <div className="mt-4">
                        <a
                          href={generatedAvatarUrl ?? "#"}
                          download="avatar.png"
                          className="inline-block bg-[#ffedc9] hover:bg-[#ffdea6] text-black text-sm font-semibold py-2 px-4 rounded mt-2 transition"
                        >
                          Download Avatar
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1 || isGenerating}
                  className="border border-gray-600 text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
                >
                  Previous
                </button>

                {currentStep === 1 && (
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={!selectedStyle || isGenerating}
                    className="bg-[#ffedc9] hover:bg-[#ffdea6] text-black px-4 py-2 rounded font-semibold disabled:opacity-50"
                  >
                    Continue
                  </button>
                )}

                {(currentStep === 2 || currentStep === 3) && (
                  <button
                    onClick={handleGenerate}
                    disabled={!uploadedImage || isGenerating}
                    className="bg-[#ffedc9] hover:bg-[#ffdea6] text-black px-4 py-2 rounded font-semibold disabled:opacity-50 flex items-center"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Avatar
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </section>
        </main>
      </>
    </ProtectedRoute>
  );
}
