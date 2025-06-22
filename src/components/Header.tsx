"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../image/avatar1.jpg";
import Link from "next/link";
import { Menu, X, Search, Home, Package, Building, Users } from "lucide-react";
import PageTransitionWrapper from "./animations/PageTransitionWrapper";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Pricing", href: "/pricing", icon: Search },
    { name: "Features", href: "/features", icon: Package },
  ];

  return (
    <>
      {/* Header */}
      <header className="w-full fixed top-0 z-50 bg-white border-b border-gray-100">
        <PageTransitionWrapper>
          <div className="w-[1270px] max-w-[90%] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={image1}
                  alt="AvatarSnap"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold text-black">AvatarSnap</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-black font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-black font-medium transition-colors"
                >
                  Dashboard
                </Link>
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Link href="/upload">
                  <div className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                    Get Started
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center p-2 rounded-md"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle Sidebar"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} className="text-black" />}
              </button>
            </div>
          </div>
        </PageTransitionWrapper>
      </header>

      {/* Mobile Overlay (click to close) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <PageTransitionWrapper>
          {/* Logo Section with Close Button */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center space-x-3"
            >
              <Image
                src={image1}
                alt="AvatarSnap"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-black">AvatarSnap</span>
            </Link>
            {/* 🔴 Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-gray-500 hover:text-black"
              aria-label="Close Sidebar"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                    >
                      <IconComponent
                        size={20}
                        className="text-gray-500 group-hover:text-gray-700"
                      />
                      <span className="text-lg font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Links */}
          <div className="p-6 border-t border-gray-100">
            <Link
              href="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className="block w-full mb-3"
            >
              <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <Home size={20} className="text-gray-500" />
                <span className="text-lg font-medium">Dashboard</span>
              </div>
            </Link>

            <Link href="/upload" onClick={() => setSidebarOpen(false)}>
              <div className="bg-black text-white px-6 py-3 rounded-full text-center font-medium hover:bg-gray-800 transition-colors duration-200">
                Get Started
              </div>
            </Link>
          </div>
        </PageTransitionWrapper>
      </aside>
    </>
  );
}

export default Sidebar;
