import { Upload } from "lucide-react";
import React from "react";
import ImageUploader from "./ImageUploader";
import PhysicsBackground from "./animations/physicsbackground";
import image1 from "../image/avatar1.jpg";
function Hero() {
  return (
    <section className="min-h-screen  flex items-center justify-center bg-black overflow-hidden">
      <PhysicsBackground
        circleCount={50}
        circleColors={["#1b1b1b", "#1b1b1b"]}
        circleRadiusRange={[20, 40]}
        repelRadius={100}
        repelForce={0.00000005}
        dragEnabled={true}
        circleImages={["",image1]}
      />
      <div className="container  relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl  mx-auto">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl text-xs font-medium text-gray-200 mb-7 hover:from-white/15 hover:to-white/10 transition-all duration-500 cursor-default group">
            AI Image Generator
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-80 -z-10"></div>
          </div>
          <h1 className="text-2xl mb-4 md:text-5xl leading-[0.9] ">
            Build Perfect AI Avatars
          </h1>
          <p className="text-md text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
            Transform any photo into cool avatars
          </p>
          <ImageUploader />
        </div>
      </div>
    </section>
  );
}

export default Hero;
