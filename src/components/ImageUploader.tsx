import { Upload } from "lucide-react";
import React from "react";

function ImageUploader() {
  return (
    <div className="max-w-sm mx-auto">
      <input type="file" accept="image/*" className="hidden" />

      <div
        className={`border-2 border-dashed rounded-3xl px-0 py-8 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-md  group relative overflow-hidden ${"border-white/10 hover:border-white/20"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br blue-500/10 via-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

        <div className="text-center relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:scale-103  transition-all duration-500">
            <Upload className="w-4 h-4 text-white transition-colors duration-500" />
          </div>
          <p className="text-gray-200 text-xl font-semibold mb-2">
            Upload your photo
          </p>
          <p className="text-gray-400 text-base">or click to browse</p>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
