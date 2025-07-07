"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Image from "next/image";
import { useAuth } from "../context/Authcontext";

type Avatar = {
  id: number;
  style: string;
  processed_image: string;
  created_at: string;
};

function RecentAvatars() {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const { user, loading } = useAuth();

  const downloadImage = async (url: string, filename: string) => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  useEffect(() => {
    if (!user || loading) return;

    const fetchRecentAvatars = async () => {
      try {
        const token = await user.getIdToken();
        const res = await fetch("http://localhost:5000/avatars/recent", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch avatars:", res.statusText);
          return;
        }

        const data = await res.json();
        setAvatars(data.avatars);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchRecentAvatars();
  }, [user, loading]);

  return (
    <div className="md:col-span-2 lg:col-span-4 xl:col-span-4 border border-neutral-900/60 bg-neutral-950/60 backdrop-blur-sm shadow-sm rounded-xl md:px-6 px-3 py-6">
      <div className="flex flex-row items-center justify-between mb-6">
        <div>
          <div className="text-xl pb-1 text-white">Recent Avatar Generations</div>
          <p className="text-xs text-neutral-400">Your latest AI avatar creations</p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {avatars.map((avatar) => (
            <div key={avatar.id} className="group cursor-pointer">
              <div className="relative aspect-square mb-3 overflow-hidden rounded-lg">
                <Image
                  src={avatar.processed_image}
                  alt={`${avatar.style} avatar`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 w-full h-full">
                  <div
                    className="w-full h-full flex justify-center items-center bg-black/10 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() =>
                      downloadImage(
                        avatar.processed_image,
                        `${avatar.style}-avatar-${avatar.id}.jpg`
                      )
                    }
                  >
                    <Download className="w-7 h-7 mr-1 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white text-sm">
                  {avatar.style} Avatar
                </h4>
                <p className="text-xs text-neutral-400">
                  {new Date(avatar.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentAvatars;
