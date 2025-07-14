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
import { getFirebaseAuth } from "@/Firebase";

import image1 from "../image/avatar1.jpg";
import PageTransitionWrapper from "./animations/PageTransitionWrapper";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import logo from "../image/PFP AVATARS.png";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { user, backendUser } = useAuth();

  const menuItems = [
    { name: "Pricing", href: "/pricing", icon: Search },
    { name: "gallery", href: "/gallery", icon: Package },
    { name: "Reviews", href: "#reviews", icon: Package },
  ];
  const auth = getFirebaseAuth();
  const logoutHandler = async () => {
    await auth.signOut();
    router.push("/");
  };

  const renderUserPopover = () => (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          className="rounded-full p-0 h-8 w-8"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          <Avatar className="bg-neutral-900 text-white focus-visible:ring-0">
            {backendUser?.profile_picture ? (
              <AvatarImage
                src={backendUser.profile_picture}
                alt={backendUser.display_name || "U"}
              />
            ) : null}
            <AvatarFallback className="bg-neutral-950/30 text-white">
              {backendUser?.display_name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-72 mt-4 bg-[#000]/80 backdrop-blur-xl border border-neutral-900/30 text-white shadow-xl rounded-xl">
        <div className="flex flex-col space-y-5">
          {/* User Info */}
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <Avatar>
              {backendUser?.profile_picture ? (
                <AvatarImage src={backendUser.profile_picture} />
              ) : null}
              <AvatarFallback className="bg-neutral-950/30 text-white">
                {backendUser?.display_name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">
                {backendUser?.display_name}
              </p>
              <p className="text-xs text-zinc-400">{backendUser?.email}</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col space-y-2 text-sm">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:text-white hover:bg-neutral-950"
              onClick={() => {
                router.push("/dashboard");
                setIsPopoverOpen(false);
              }}
            >
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white text-white hover:text-white hover:bg-neutral-950"
              onClick={() => {
                router.push("/mygallery");
                setIsPopoverOpen(false);
              }}
            >
              My Gallery
            </Button>
         
          </div>

          {/* Purchase Credits */}
          <Button
            variant="outline"
            className="w-full border-neutral-900/30 bg-neutral-950/30 hover:bg-neutral-950 text-white  hover:text-white text-sm flex items-center justify-start gap-2"
            onClick={() => {
              router.push("/pricing");
              setIsPopoverOpen(false);
            }}
          >
            <CreditCard size={16} /> Buy Credits
          </Button>

          {/* Logout */}
          <Button
            className="w-full bg-red-600 hover:bg-red-700  text-white hover:text-white text-sm flex items-center justify-start gap-2"
            onClick={async () => {
              await logoutHandler();
              setIsPopoverOpen(false);
            }}
          >
            <LogOut size={16} /> Logout
          </Button>

          {/* Links */}
          <div className="border-t border-neutral-800 pt-3 text-xs text-neutral-400 flex justify-between">
            <Link
              href="/help"
              onClick={() => setIsPopoverOpen(false)}
              className="hover:text-white"
            >
              Help Center
            </Link>
            <Link
              href="/terms"
              onClick={() => setIsPopoverOpen(false)}
              className="hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <>
      {/* Header */}
      <header className="w-full fixed top-0 z-50 backdrop-blur-lg bg-[#000000cc] border-b border-neutral-900/30">
        <PageTransitionWrapper>
          <div className="max-w-[90%] w-[1250px] mx-auto py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <Image src={logo} alt="Logo" className="w-9 h-9 rounded-2xl" />
              <span className="font-medium"> PFP AVATARS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-300 hover:text-white font-mono transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/dashboard"
                className="text-neutral-300 hover:text-white font-mono  transition-colors"
              >
                Dashboard
              </Link>
            </nav>

            {/* Right-side */}
            <div className="hidden lg:flex justify-between gap-4">
              {user && backendUser ? (
                <>
                  <Button
                    variant="outline"
                    className="w- border-[#ffedc9]/30 rounded-full bg-neutral-950/30 hover:bg-neutral-950/30 text-white hover:text-white text-sm flex items-center justify-start gap-2"
                    onClick={() => router.push("/pricing")}
                  >
                    Credits{" "}
                    <span className="text-[#ffedc9]">
                      {backendUser?.credits_remaining}
                    </span>
                  </Button>
                  {renderUserPopover()}
                </>
              ) : (
                <Link href="/upload">
                  <Button className="bg-white text-black hover:bg-neutral-300 rounded-full px-6 py-2.5">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </PageTransitionWrapper>
      </header>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <PageTransitionWrapper>
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
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
              <span className="text-xl font-bold text-white">AvatarSnap</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-neutral-400 hover:text-white"
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
                  className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-neutral-800 rounded-lg transition-colors duration-200 group"
                >
                  <Icon
                    size={20}
                    className="text-neutral-400 group-hover:text-white"
                  />
                  <span className="text-lg font-medium">{item.name}</span>
                </Link>
              );
            })}
            <Link
              href="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-neutral-800 rounded-lg transition-colors duration-200"
            >
              <Home size={20} className="text-neutral-400" />
              <span className="text-lg font-medium">Dashboard</span>
            </Link>

            {user && backendUser && (
              <div className="mt-4 space-y-2 flex w-full border-t border-neutral-800 justify-between items-center">
                <div className="flex items-center space-x-3 px-4 py-5">
                  <Avatar>
                    <AvatarImage
                      src={backendUser.profile_picture || "/default-avatar.png"}
                    />
                    <AvatarFallback className="bg-neutral-950/30 text-white">
                      {backendUser.display_name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-xs text-neutral-400">
                      {backendUser.email}
                    </p>
                    <p className="text-sm font-medium">
                      Credits: {backendUser.credits_remaining}
                    </p>
                  </div>
                </div>
                <Button
                  className="flex items-center me-4 justify-start gap-2 text-sm bg-neutral-800 text-white hover:bg-neutral-700"
                  onClick={logoutHandler}
                >
                  <LogOut size={16} /> Logout
                </Button>
              </div>
            )}
          </nav>

          {!user && (
            <div className="p-6 border-t border-neutral-800">
              <Link href="/upload" onClick={() => setSidebarOpen(false)}>
                <div className="bg-white text-black px-6 py-3 rounded-full text-center font-medium hover:bg-neutral-200 transition-colors duration-200">
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
