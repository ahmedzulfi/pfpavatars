"use client";
import React from "react";
import Image from "next/image";
import image1 from "../image/avatar1.jpg";

export default function AvatarGallery() {
  const avatars = [
    { id: 1, image: image1, bg: "bg-green-200" },
    { id: 2, image: image1, bg: "bg-orange-200" },
    { id: 3, image: image1, bg: "bg-purple-200" },
    { id: 4, image: image1, bg: "bg-blue-200" },
    { id: 5, image: image1, bg: "bg-sky-200" },
    { id: 6, image: image1, bg: "bg-teal-200" },
    { id: 7, image: image1, bg: "bg-pink-200" },
    { id: 8, image: image1, bg: "bg-yellow-200" },
  ];

  return (
    <div className="relative w-full mt-15 overflow-hidden">
      {/* Left & Right Gradients */}
      <div className="absolute top-0 left-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute top-0 right-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      {/* Top Row - scroll left */}
      <div className="overflow-hidden w-full md:mb-12">
        <div className="flex animate-loop-left gap-6 w-max">
          {[...avatars, ...avatars, ...avatars].map((avatar, index) => (
            <div
              key={`top-${index}`}
              className={`flex-shrink-0 md:w-45 md:h-45 w-35 h-35  p-4 rounded-2xl ${avatar.bg}`}
            >
              <Image
                src={avatar.image}
                alt="Avatar"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - scroll right */}
      <div className="overflow-hidden w-full hidden md:block">
        <div className="flex animate-loop-right gap-6 w-max">
          {[...avatars, ...avatars, ...avatars].map((avatar, index) => (
            <div
              key={`bottom-${index}`}
              className={`flex-shrink-0 md:w-45 md:h-45 w-25 h-25 p-4 rounded-2xl ${avatar.bg}`}
            >
              <Image
                src={avatar.image}
                alt="Avatar"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes loop-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes loop-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-loop-left {
          animation: loop-left 60s linear infinite;
        }
        .animate-loop-right {
          animation: loop-right 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
