"use client";

import { Play, Pause } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import image1 from '../image/ez.jpg'
function Videointro() {
  const [isPlaying, setIsPlaying] = useState(false); // Start paused
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }
      `}</style>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="relative group animate-fade-in-up">
            
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 cursor-pointer">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-2xl"
              preload="metadata"
              loop
              onClick={togglePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/media/videoplayback.mp4" type="video/mp4" />
            </video>

            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300"
                onClick={togglePlayPause}
              >
                <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105">
                  <Play className="w-8 h-8 ml-1" />
                </button>
              </div>
            )}

            <div className="absolute bottom-4 right-4 z-10">
              <button
                onClick={togglePlayPause}
                className="bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all duration-300 hover:scale-105"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
            </div>
          </div> 
        


          {/* Video Caption */}
          <p className="mt-12 text-sm text-gray-500 max-w-2xl mx-auto">
            Watch how our AI transforms ordinary photos into professional
            avatars in seconds
          </p>
        </div>
      </div>
    </>
  );
}

export default Videointro;
