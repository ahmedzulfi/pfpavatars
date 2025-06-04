import React from "react";
import { Upload, Play, Sparkles } from "lucide-react";
import Videointro from "./Videointro";
import BlurText from "./animations/Blurtext";
const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-27 overflow-hidden">
      {/* Background with noise texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-beige-50 via-beige-100 to-beige-200"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-transparent to-transparent"></div>
      </div>

      <div className="  w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10">
        <div className=" mx-auto text-center">
          <div>
            <span className="flex items-center justify-betweeen w-max mx-auto md:px-6 px-3 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/50 bg-blur-md text-yellow-950">
              <Sparkles className="h-4 w-4 me-2 text-yellow-700" />
              <span> AI-Powered Avatar Generation</span>
            </span>
          </div>

          <h1 className="text-3xl md:text-7xl font-bold text-dark-950 mb-4 leading-tight text-center">
            <BlurText
              text="Transform Your Photos"
              delay={150}
              direction="bottom"
              className="justify-center"
            />
            <BlurText
              text="Into Perfect Avatars"
              delay={200}
              direction="bottom"
              className="bg-clip-text font-normal italic font-serif justify-center"
            />
          </h1>

          <p className="text-sm md:text-xl text-gray-600 md:mb-10 mb-7 max-w-2xl mx-auto">
            Transform your photos into stunning professional avatars with our
            advanced AI technology
          </p>

          <div className="max-w-xl mx-auto">
            <div className="md:mt-6 mt-2 text-center w-[90%] mx-auto">
              <button className="md:px-8 px-4 py-2 md:py-3 bg-gradient-to-b  from-[#fff1e480] to-[#7d6c5c]  w-full shadow-[#7d6c5c]  text-white font-medium rounded-full shadow hover:shadow-md transition-all duration-300 hover:opacity-95">
                Generate Avatars
              </button>
            </div>
          </div>

          <Videointro />

          <div className="mt-7 md:flex hidden items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>AI Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>High Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
