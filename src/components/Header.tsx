"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Menu,
  X,
  Search,
  Package,
  Home,
  LogOut,
  CreditCard,
} from "lucide-react";
import { useAuth } from "@/context/Authcontext";
import { auth } from "@/Firebase";

import image1 from "../image/avatar1.jpg";
import PageTransitionWrapper from "./animations/PageTransitionWrapper";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { user, backendUser } = useAuth();

  const menuItems = [
    { name: "Pricing", href: "/pricing", icon: Search },
    { name: "Features", href: "/features", icon: Package },
    { name: "Reviews", href: "/reviews", icon: Package },
  ];

  const logoutHandler = async () => {
    await auth.signOut();
    router.push("/");
  };

  const renderUserPopover = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="rounded-full p-0 h-10 w-10">
          <Avatar>
            <AvatarImage
              src={backendUser?.profile_picture || "/default-avatar.png"}
              alt={backendUser?.display_name || "U"}
            />
            <AvatarFallback>
              {backendUser?.display_name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 mr-4 mt-2">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage
                src={backendUser?.profile_picture || "/default-avatar.png"}
                alt={backendUser?.display_name || "U"}
              />
              <AvatarFallback>
                {backendUser?.display_name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">
                {backendUser?.display_name}
              </p>
              <p className="text-xs text-muted-foreground">
                {backendUser?.email}
              </p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Credits:{" "}
            <span className="font-semibold text-black">
              {backendUser?.credits_remaining}
            </span>
          </div>
          <Button
            variant="outline"
            className="w-full bg-white flex items-center justify-start gap-2 text-sm"
            onClick={() => router.push("/pricing")}
          >
            <CreditCard size={16} /> Purchase Credits
          </Button>
          <Button
            className="w-full flex items-center justify-start gap-2 text-sm"
            onClick={logoutHandler}
          >
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <>
      {/* Header */}
      <header className="w-full fixed top-0 z-50 bg-white border-b border-gray-100">
        <PageTransitionWrapper>
          <div className=" max-w-[90%] w-[1250px] mx-auto  py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
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

            {/* Right-side */}
            <div className="hidden lg:block">
              {user && backendUser ? (
                renderUserPopover()
              ) : (
                <Link href="/upload">
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2.5">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} className="text-black" />
              )}
            </button>
          </div>
        </PageTransitionWrapper>
      </header>

      {/* Mobile Overlay */}
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
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-gray-500 hover:text-black"
              aria-label="Close Sidebar"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                >
                  <Icon
                    size={20}
                    className="text-gray-500 group-hover:text-gray-700"
                  />
                  <span className="text-lg font-medium">{item.name}</span>
                </Link>
              );
            })}
            <Link
              href="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <Home size={20} className="text-gray-500" />
              <span className="text-lg font-medium">Dashboard</span>
            </Link>
            {user && backendUser && (
              <div className="mt-4 space-y-2 flex w-full border-t-1 justify-between items-center">
                <div className="flex items-center space-x-3 px-4 py-5   -lg">
                  <Avatar>
                    <AvatarImage
                      src={backendUser.profile_picture || "/default-avatar.png"}
                    />
                    <AvatarFallback>
                      {backendUser.display_name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-black">
                    <p className="text-xs text-muted-foreground">
                      {backendUser.email}
                    </p>
                    <p className="text-sm font-medium">
                      Credits: {backendUser.credits_remaining}
                    </p>
                  </div>
                </div>

                <Button
                  className=" flex items-center me-4 justify-start gap-2 text-sm"
                  onClick={logoutHandler}
                >
                  <LogOut size={16} /> Logout
                </Button>
              </div>
            )}
          </nav>

          {!user && (
            <div className="p-6 border-t border-gray-100">
              <Link href="/upload" onClick={() => setSidebarOpen(false)}>
                <div className="bg-black text-white px-6 py-3 rounded-full text-center font-medium hover:bg-gray-800 transition-colors duration-200">
                  Get Started
                </div>
              </Link>
            </div>
          )}
        </PageTransitionWrapper>
      </aside>
    </>
  );
}

export default Sidebar;
