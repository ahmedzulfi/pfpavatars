import { useAuth } from "@/context/Authcontext";
import { Coins, Plus, User, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function Userstats() {
  const { user, loading, backendUser } = useAuth();
  return (
    <div className="md:grid hidden grid-cols-1 md:grid-cols-3 gap-6 mb-4 ">
      <div className="bg-white/60 backdrop-blur-sm shadow-xs border border-black/7 rounded-xl">
        <div className="p-6">
          <div className="flex items-center">
            <div className="mr-4">
              <div className="p-3 bg-[#d4c4a8]/20 rounded-full">
                <User className="w-6 h-6 text-[#8b7355]" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Welcome</p>
              <h3 className="font-semibold text-gray-900">
                {backendUser && backendUser.display_name}{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm shadow-xs  border border-black/7 rounded-xl">
        <div className="p-6">
          <div className="flex items-center">
            <div className="mr-4">
              <div className="p-3 bg-[#d4c4a8]/20 rounded-full">
                <Coins className="w-6 h-6 text-[#8b7355]" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Available Credits</p>
              <h3 className="font-semibold text-gray-900">
                {" "}
                {backendUser && backendUser.credits_remaining}{" "}
              </h3>
            </div>
            <div className="ml-auto">
              <Link href={"/pricing"}>
                <div className="bg-[#ffedc9] px-3 py-2 font-medium  text-xs rounded-md hover:bg-[#ffdea6] text-gray-900">
                  Buy More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm shadow-xs  border border-black/7 rounded-xl">
        <div className="p-6">
          <div className="flex items-center">
            <div className="mr-4">
              <div className="p-3 bg-[#d4c4a8]/20 rounded-full">
                <User2 className="w-6 h-6 text-[#8b7355]" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Avatars</p>
              <h3 className="font-semibold text-gray-900">
                {" "}
                {backendUser && backendUser.total_avatars_generated}{" "}
              </h3>
            </div>
            <div className="ml-auto">
              <Link href={"/pricing"}>
                <div className="bg-[#ffedc9] px-3 py-2 font-medium inline-flex  text-xs rounded-md hover:bg-[#ffdea6] text-gray-900">
                  New <Plus className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userstats;
