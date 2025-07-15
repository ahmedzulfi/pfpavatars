// components/HomeSection.tsx
"use client";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <main className="flex flex-col items-center justify-start gap-4 h-[900px] min-h-[800px] w-full max-w-[1920px] overflow-hidden relative px-0">
      {/* Navigation (Recreate your <Nav /> manually here) */}
      <div className="w-full mix-blend-difference z-40">
        {/* Example Nav */}
        <nav className="flex justify-between items-center px-6 py-4">
          <span className="text-white font-bold text-lg">Ahmed Zulfiqar</span>
          <span className="text-gray-300 text-sm">Design & Art Director</span>
        </nav>
      </div>

      {/* Title Section */}
      <motion.div
        className="absolute top-[90px] left-4 right-4 flex flex-col items-center justify-center gap-6 min-h-[60px] z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          damping: 80,
          stiffness: 400,
          mass: 1,
          type: "spring",
        }}
      >
        <h1 className="text-5xl font-bold text-center">Nolan Carter</h1>
      </motion.div>

      {/* Header Section (Recreate your <Header /> manually here) */}
      <div className="w-full flex-1 z-20 mt-[92px]">
        {/* Example Header */}
        <section className="px-6 py-10 w-full h-full bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Hello, I’m Ahmed</h2>
            <p className="text-lg text-gray-600">
              Building amazing interfaces and MVPs at scale.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
