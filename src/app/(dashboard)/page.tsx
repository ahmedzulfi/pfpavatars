import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-background text-foreground font-[family-name:var(--font-geist-sans)] w-[50%]">
      {/* Content */}
      <div className="relative z-20">
        <Header />
        <Hero />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-20" />
    </main>
  );
}
