"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../image/avatar1.jpg";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import PageTransitionWrapper from "./animations/PageTransitionWrapper";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-[1270px] max-w-[90%] flex justify-center md:absolute fixed top-0 z-50 pt-7 shadow-none">
      <PageTransitionWrapper>
        {" "}
        <div className="w-full mx-auto md:flex flex-col justify-between px-5 rounded-xl bg-white/60 backdrop-blur-sm shadow-xs items-center py-3 text-black">
          <div className="flex w-full justify-between items-center">
            <Link href={"/"}>
              <h1 className="text-xl font-bold uppercase w-[50%] flex items-center">
                <Image
                  src={image1}
                  alt="Profile"
                  width={42}
                  height={42}
                  className="rounded-full mr-3 border"
                />
                AvatarSnap
              </h1>
            </Link>
            <div className="md:flex hidden items-center space-x-4">
              <Link href={"/pricing"}>
                <span className="text-sm font-medium text-gray-700">
                  Pricing
                </span>
              </Link>
              <Link href={"/dashboard"}>
                <span className="text-sm font-medium text-gray-700">
                  Dashboard
                </span>
              </Link>
              <Link href="/upload">
                <div className="bg-gradient-to-b from-[#fce0c8] to-[#7d6c5c] hover:bg-[#c2b394] text-white px-6 py-2 rounded-md font-medium shadow-sm hover:shadow-lg transition-all cursor-pointer">
                  Login
                </div>
              </Link>
            </div>
            <div
              className="md:hidden flex items-center cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>

          {/* Mobile menu - toggle visibility */}
          {menuOpen && (
            <div className="flex flex-col  w-full justify-between items-center py-4 pb-1 md:hidden">
              <Link href={"/pricing"}>
                <div className="text-md font-medium text-gray-700 mb-2 cursor-pointer">
                  Pricing
                </div>
              </Link>
              <Link href={"/dashboard"}>
                <div className="text-md font-medium text-gray-700 mb-2 cursor-pointer">
                  Dashboard
                </div>
              </Link>
              <Link href="/upload" className="w-full">
                <div className="bg-gradient-to-b from-[#fce0c8] to-[#7d6c5c] mt-1 hover:bg-[#c2b394] text-white  w-full px-6 py-2 text-center rounded-md font-medium shadow-sm hover:shadow-lg transition-all cursor-pointer">
                  Get Started
                </div>
              </Link>
            </div>
          )}
        </div>{" "}
      </PageTransitionWrapper>
    </header>
  );
}

export default Header;
