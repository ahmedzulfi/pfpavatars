"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Example before/after transformations
const examples = [
  {
    id: 1,
    before:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    after:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
    style: "Anime",
  },
  {
    id: 2,
    before:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    after:
      "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=300",
    style: "Watercolor",
  },
  {
    id: 3,
    before:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
    after:
      "https://images.pexels.com/photos/2946068/pexels-photo-2946068.jpeg?auto=compress&cs=tinysrgb&w=300",
    style: "3D Character",
  },
  {
    id: 4,
    before:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    after:
      "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=300",
    style: "Neon",
  },
];

const ExampleGallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="examples" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gold-100 text-gold-950">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-6">
            See the Magic in Action
          </h2>
          <p className="text-lg text-gray-600">
            Check out these amazing transformations. Your photos could look just
            as stunning!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {examples.map((example, index) => (
            <div key={example.id} className="relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                <div className="relative w-full md:w-1/2 aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src={example.before}
                    alt="Original photo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">Original</span>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto">
                  <div>
                    <svg
                      width="40"
                      height="24"
                      viewBox="0 0 40 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z"
                        fill="#1A2A3A"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative w-full md:w-1/2 aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src={example.after}
                    alt={`${example.style} avatar`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold-950/80 via-transparent to-transparent">
                    <span className="absolute bottom-3 left-3 text-white font-medium px-3 py-1 bg-dark-950/40 rounded-full text-sm">
                      {example.style} Style
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-gold-800 to-gold-950 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300">
            Create Your Own Avatar
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExampleGallery;
