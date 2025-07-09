"use client";

import { SignupForm } from "@/components/Signupform";
import image1 from "../../image/avatar1.jpg";
import image2 from "../../image/anime-avatar-49.jpg";
import image3 from "../../image/img4.jpg";
import image4 from "../../image/img5.jpg";
import image5 from "../../image/img6.jpg";
import image6 from "../../image/img7.jpg";
import image7 from "../../image/img9.jpg";
import image8 from "../../image/anime-avatar-48.jpg";
import image9 from "../../image/anime-avatar-49.jpg";
import ImageTrail, { ImageTrailItem } from "@/components/image-trail";
import { useEffect } from "react";
import Coolbg from "@/components/animations/Coolbg";
declare global {
  interface Window {
    UnicornStudio: any;
  }
}
export default function SignupPage() {
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
  useEffect(() => {
    if (!window.UnicornStudio) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.27/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.body.appendChild(script);
    }
  }, []);
  return (
    <div className="flex w-full min-h-svh flex-col items-center bg-black justify-center p-6 md:p-10">
      {" "}
      <div className="opacity-[.5%] absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <Coolbg id="KQQjnJrWP3cJMjT2Q7UA" />
      <div className=" max-w-sm w-full relative  z-2">
        <SignupForm />
      </div>
    </div>
  );
}
