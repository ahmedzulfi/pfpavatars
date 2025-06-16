import React from "react";
import { Upload, Play, Sparkles } from "lucide-react";
import Videointro from "./Videointro";
import BlurText from "./animations/Blurtext";
import AvatarGallery from "./Examples";
import Pricing from "@/app/pricing/page";
const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-27  overflow-hidden">
      <div className="  w-full mx-auto px-4 sm:px-6 lg:px-0 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10">
        <div className="w-full mx-auto text-center">
          <div>
            <span className="flex items-center  justify-betweeen w-max mx-auto md:px-6 px-3 py-1.5 mb-6 text-sm font-medium rounded-full bg-[#ffedc9] bg-blur-md text-yellow-950">
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
            <div className="md:mt-6 mt-2 text-center max-w-[90%] w-max mx-auto">
              <button className="md:px-8 px-4 py-2 md:py-3  bg-[#ffedc9]  w-full shadow-[#7d6c5c]  text-black font-medium rounded-full  hover:shadow-sm transition-all duration-300 hover:opacity-95">
                Generate Avatars
              </button>
            </div>
          </div>{" "}
          <AvatarGallery />
        </div>
      </div>
    </section>
  );
};

export default Hero;
