import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Backgroundgrad from "@/components/Backgroundgrad";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import ExampleGallery from "@/components/ExampleGallery";
import BeforeAfterGallery from "@/components/Examples";

export default function Home() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen relative flex flex-col justify-between items-center bg-[#fff] text-background w-full font-[family-name:var(--font-geist-sans)]">
        <div className="relative z-20 w-full h-full overflow-hidden">
          <Hero />
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
