"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import LenisProvider from "@/components/animations/Lenisprovider";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/context/Authcontext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <AnimatePresence>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-full items-center justify-center`}
          >
            <AuthProvider>
              <Header />
              {children} {/* ✅ Now inside AuthProvider */}
            </AuthProvider>
          </body>
        </AnimatePresence>
      </LenisProvider>
    </html>
  );
}
