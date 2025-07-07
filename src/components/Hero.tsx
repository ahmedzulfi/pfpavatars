"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import BlurText from "./animations/Blurtext";
import CarouselVertical from "./animations/Carouselvertiocal";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen  flex items-center justify-center">
      <div className="relative z-10 grid max-w-7xl w-full mx-auto px-6 py-20 md:py-28 md:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#ffedc9] text-yellow-800 w-fit mx-auto md:mx-0">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Avatar Engine
          </div>

          {/* Headings */}
          <h1 className="text-4xl md:text-6xl font-normal leading-tight text-white">
            <span>Create Stunning Avatars </span>
            <span className="font-bold text-[#ffedc9]">From a Single Photo</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            Just upload a selfie, pick a style, and let our AI do the rest. 
            No editing, no filters , just high-quality avatars that actually look like you.
          </p>

          {/* CTA */}
          <div className="w-full flex justify-center md:justify-start">
            <button className="px-6 py-3 rounded-full bg-[#ffedc9] text-black font-semibold shadow-lg hover:brightness-95 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <CarouselVertical />
        </div>
      </div>
    </section>
  );
};

export default Hero;
