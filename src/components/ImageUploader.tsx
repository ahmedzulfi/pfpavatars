import { Upload } from "lucide-react";
import React from "react";

function ImageUploader() {
  return (
    <div className="max-w-sm mx-auto">
      <input type="file" accept="image/*" className="hidden" />

      <div
        className={`border-2 border-dashed rounded-3xl px-0 py-8 transition-all duration-500 cursor-pointer bg-[#fefaf6]/40 group relative overflow-hidden border-[#d6cfc7] hover:border-[#c9bfb3]`}
      >
        {/* Subtle beige gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e7ddd0]/20 via-[#f2ebe2]/10 to-[#f9f5f0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

        <div className="text-center relative z-10">
          {/* Icon container with soft beige tone */}
          <div className="w-10 h-10 bg-gradient-to-br from-[#f0e9df]/70 to-[#e2d9ce]/50 backdrop-blur-md border border-[#d6cfc7]/50 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-500">
            <Upload className="w-4 h-4 text-[#6f6256] transition-colors duration-500" />
          </div>

          <p className="text-[#4a4038] text-xl font-semibold mb-2">
            Upload your photo
          </p>
          <p className="text-[#6f6256] text-base">or click to browse</p>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
