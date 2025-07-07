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
  const { user, loading } = useAuth(); // adjust based on your auth hook

  useEffect(() => {
    if (!user || loading) return;

    const fetchRecentAvatars = async () => {
      try {
        const token = await user.getIdToken(); // Firebase user
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
    <div className="md:col-span-2 border border-black/7 lg:col-span-4 xl:col-span-4 bg-white/60 backdrop-blur-sm shadow-xs rounded-xl md:px-6 px-3 py-6">
      <div className="flex flex-row items-center justify-between mb-6">
        <div>
          <div className="text-xl pb-1">Recent Avatar Generations</div>
          <p className="text-xs text-gray-500">
            Your latest AI avatar creations
          </p>
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
                <div className="absolute bottom-0 left-0 top-0 right-0 w-full h-full">
                  <div className="w-full h-full flex justify-center items-center bg-black/10 hover:bg-black/50 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-7 h-7 mr-1 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">
                  {avatar.style} Avatar
                </h4>
                <p className="text-xs text-gray-500">
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
