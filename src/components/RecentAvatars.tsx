import { Download, Search } from "lucide-react";
import React from "react";
import image1 from "../image/avatar1.jpg";
import image2 from "../image/bg-clouds.webp";
import image3 from "../image/brrr.png";
import image4 from "../image/ez.jpg";
import Image from "next/image";
function RecentAvatars() {
  const recentGenerations = [
    {
      id: 1,
      date: "June 2, 2025",
      style: "Professional",
      count: 24,
      thumbnail: image1,
    },
    {
      id: 2,
      date: "May 28, 2025",
      style: "Artistic",
      count: 24,
      thumbnail: image2,
    },
    {
      id: 3,
      date: "May 15, 2025",
      style: "Cartoon",
      count: 24,
      thumbnail: image3,
    },
    {
      id: 4,
      date: "May 10, 2025",
      style: "Realistic",
      count: 24,
      thumbnail: image4,
    },
    {
      id: 5,
      date: "June 2, 2025",
      style: "Professional",
      count: 24,
      thumbnail: image4,
    },
    {
      id: 6,
      date: "May 28, 2025",
      style: "Artistic",
      count: 24,
      thumbnail: image3,
    },
  ];
  return (
    <div className="md:col-span-2 lg:col-span-4 xl:col-span-4 bg-white/60 backdrop-blur-sm shadow-xs border-black/7 rounded-xl md:px-6 px-3 py-6">
      <div className="flex flex-row items-center justify-between mb-6">
        <div>
          <div className="text-xl pb-1">Recent Avatar Generations</div>
          <p className="text-xs text-gray-500">
            Your latest AI avatar creations
          </p>
        </div>
   
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {recentGenerations.map((generation) => (
            <div key={generation.id} className="group cursor-pointer">
              <div className="relative aspect-square mb-3 overflow-hidden rounded-lg">
                <Image
                  src={generation.thumbnail}
                  alt={`avatars`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                <div className="absolute bottom-0 left-0 top-0 right-0 w-full h-full">
                  <div className="w-full h-full flex justify-center items-center bg-black/10 hover:bg-black/50 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-7 h-7 mr-1 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">
                  {generation.style} Avatars
                </h4>
                <p className="text-xs text-gray-500">{generation.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentAvatars;
