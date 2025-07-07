"use client";
import React from "react";
import Image from "next/image";
import image2 from "../../image/example.png";
import image1 from "../../image/anime-avatar-50.jpg";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "../ImageComparision";

export default function CarouselVertical() {
  return (
    <div className="relative w-full H-FULL">
      <div className="flex flex-col">
        <div
          className={`w-full aspect-[10/10] rounded-lg border overflow-hidden `}
        >
          <ImageComparison className="w-full h-full">
            <ImageComparisonImage
              src={image1.src}
              alt="Before"
              position="left"
            />
            <ImageComparisonImage
              src={image1.src}
              alt="After"
              position="right"
            />
            <ImageComparisonSlider className="w-2 bg-black/50 backdrop-blur-xs transition-colors hover:bg-black/80">
              <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-black" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
      </div>
    </div>
  );
}
