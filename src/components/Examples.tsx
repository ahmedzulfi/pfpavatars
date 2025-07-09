"use client";
import React from "react";
import Image from "next/image";
import image1 from "../image/anime-avatar-50.jpg";
import image2 from "../image/img3.jpg";
import image3 from "../image/img4.jpg";
import image4 from "../image/img5.jpg";
import image5 from "../image/img6.jpg";
import image6 from "../image/img7.jpg";
import image7 from "../image/img9.jpg";
import image8 from "../image/anime-avatar-48.jpg";
import image9 from "../image/anime-avatar-49.jpg";

export default function AvatarGallery() {
  const avatars = [
    { id: 1, image: image1, bg: "bg-green-900" },
    { id: 2, image: image2, bg: "bg-orange-900" },
    { id: 3, image: image3, bg: "bg-purple-900" },
    { id: 4, image: image4, bg: "bg-blue-900" },
    { id: 5, image: image5, bg: "bg-sky-900" },
    { id: 6, image: image6, bg: "bg-teal-900" },
    { id: 7, image: image7, bg: "bg-pink-900" },
    { id: 8, image: image8, bg: "bg-yellow-900" },
    { id: 9, image: image9, bg: "bg-yellow-900" },
  ];

  return (
    <div className="relative w-full z-100 bg-black overflow-hidden b md:py-25 py-15">
      {/* Left & Right Gradients */}
      <div className="absolute top-0 left-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
      <div className="absolute top-0 right-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
      <div className="text-center mb-10 md:mb-20 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          See Some Cool Avatars
        </h2>
        <p className="text-zinc-400 mt-2 text-sm md:text-base">
          A sample of styles you can create. Pick your favorite!
        </p>
      </div>
      {/* Top Row - scroll left */}
      <div className="overflow-hidden w-full md:mb-12">
        <div className="flex animate-loop-left gap-6 w-max">
          {[...avatars, ...avatars, ...avatars].map((avatar, index) => (
            <div
              key={`top-${index}`}
              className={`flex-shrink-0 md:w-44 md:h-44 w-36 h-36 rounded-2xl ${avatar.bg}`}
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
      <div className="overflow-hidden w-full md:mb-12 block mt-8 md:hidden">
        <div className="flex animate-loop-right  gap-6 w-max">
          {[...avatars, ...avatars, ...avatars].map((avatar, index) => (
            <div
              key={`top-${index}`}
              className={`flex-shrink-0 md:w-44 md:h-44 w-36 h-36 rounded-2xl ${avatar.bg}`}
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
              className={`flex-shrink-0 md:w-44 md:h-44 w-28 h-28 rounded-2xl ${avatar.bg}`}
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
