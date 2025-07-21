"use client";

// Extend the Window interface to include UnicornStudio
declare global {
  interface Window {
    UnicornStudio: any;
  }
}

import React, { useEffect } from "react";
import { Sparkles } from "lucide-react";
import ImageTrail, { ImageTrailItem } from "./image-trail";
import image1 from "../image/anime-avatar-50.jpg";
import image2 from "../image/img3.jpg";
import image3 from "../image/img4.jpg";
import image4 from "../image/img5.jpg";
import image5 from "../image/img6.jpg";
import image6 from "../image/img7.jpg";
import image7 from "../image/img9.jpg";
import image8 from "../image/anime-avatar-48.jpg";
import image9 from "../image/anime-avatar-49.jpg";
import CarouselVertical from "./animations/Carouselvertiocal";
import { useRouter } from "next/navigation";
import Coolbg from "./animations/Coolbg";
import Link from "next/link";

const Hero: React.FC = () => {
  const avatars = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
  ];

  return (
    <section className="relative w-full min-h-[95vh]  flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="opacity-[1%] z-1 absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <Coolbg id="rU2c01mhL2Uo3EQelrR7" />
      {
        //KQQjnJrWP3cJMjT2Q7UA
      }
      <div className="absolute top-0 left-0 w-[140px] h-[50px] rounded-full bg-gradient-to-tr from-[#ffedc9]/90 to-transparent blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[140px] h-[50px] rounded-full bg-gradient-to-bl from-[#ffedc9] via-[#facc15]/30 to-transparent blur-3xl z-0" />

      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,_#000000f5_30%,_#0000007a_50%,_transparent_60%)] z-1" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 z-5 text-[#000000f5] max-w-7xl w-full  h-full mx-auto relative  px-6  pointer-events-none">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center gap-4 relative  h-full">
          <span className=" inline-flex justify-center items-center w-max px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium rounded-full bg-yellow-100/3 text-[#ffedc9]">
            <Sparkles className="w-4 h-4 me-2" /> ValidMVps
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white/85">
            <span>Create Cool Avatars With </span>
            <span className="text-[#ffedc9]">PfpAvatars</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-xl">
            Just upload a selfie, pick a style, and let our AI do the rest. No
            editing, no filters just high quality avatars that actually look
            like you.
          </p>
          <div className="mt-4">
            <Link
              href={"/upload"}
              className="px-6   pointer-events-auto py-3 rounded-full bg-[#ffedc9] text-black font-semibold shadow-lg hover:brightness-95 transition"
            >
              Create Avatar
            </Link>
          </div>
        </div>

        {/* Right Image / Animation */}
        <div className="mt-12 md:mt-0 flex justify-center md:justify-end"></div>
      </div>

      {/* Avatar Trail - stays behind the content */}
    </section>
  );
};

export default Hero;
