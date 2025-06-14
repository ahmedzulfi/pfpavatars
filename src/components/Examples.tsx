"use client";

import React from "react";
import Image from "next/image";
import image1 from "../image/avatar1.jpg";

export default function AvatarGallery(): JSX.Element {
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

  const duplicatedAvatars = [...avatars, ...avatars,...avatars, ...avatars];

  return (
    <div className="relative w-full mt-15">
      <div className="relative w-full">
        {/* LEFT GRADIENT */}
        <div className="absolute top-0 left-0 h-full w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        {/* RIGHT GRADIENT */}
        <div className="absolute top-0 right-0 h-full w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        {/* First Row - Scroll Right */}
        <div className="overflow-hidden mb-8 w-full">
          <div className="flex animate-scroll-right space-x-6 w-max">
            {duplicatedAvatars.map((avatar, index) => (
              <div
                key={`row1-${index}`}
                className={`flex-shrink-0 w-48 h-48 rounded-2xl p-10 ${avatar.bg} transition-transform`}
              >
                <Image
                  src={avatar.image}
                  width={200}
                  height={200}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Left */}
        <div className="overflow-hidden w-full">
          <div className="md:flex hidden animate-scroll-left space-x-6 w-max">
            {duplicatedAvatars.map((avatar, index) => (
              <div
                key={`row2-${index}`}
                className={`flex-shrink-0 w-48 h-48 p-10 rounded-2xl ${avatar.bg} transition-transform`}
              >
                <Image
                  src={avatar.image}
                  width={200}
                  height={200}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 180s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 180s linear infinite;
        }
      `}</style>
    </div>
  );
}
