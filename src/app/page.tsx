import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Backgroundgrad from "@/components/Backgroundgrad";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";

export default function Home() {
  return (
    <PageTransitionWrapper><main className="min-h-screen relative flex flex-col justify-between items-center bg-white text-background w-full font-[family-name:var(--font-geist-sans)]">
      <Backgroundgrad />
      <div className="relative z-20 w-[1270px] max-w-[90%]  h-full">
        <Hero />
      </div>
    </main></PageTransitionWrapper>
  );
}
