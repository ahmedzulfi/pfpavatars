"use client";

import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import LenisProvider from "@/components/animations/Lenisprovider";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/context/Authcontext";



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
            className={` antialiased flex flex-col w-full items-center justify-center`}
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
