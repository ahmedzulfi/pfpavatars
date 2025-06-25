import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Backgroundgrad from "@/components/Backgroundgrad";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import ExampleGallery from "@/components/ExampleGallery";
import BeforeAfterGallery from "@/components/Examples";
import AvatarGallery from "@/components/Examples";
import Pricing from "./pricing/page";
import Testimonials from "@/components/Testimonial";
import Videointro from "@/components/Videointro";
import Features from "./features/page";
import { AuthProvider } from "@/context/Authcontext";

export default function Home() {
  return (
  
      <PageTransitionWrapper>
        <main className="min-h-screen relative flex flex-col justify-between items-center bg-[#fff] text-background w-full font-[family-name:var(--font-geist-sans)]">
          <div className="relative z-20 w-full h-full overflow-hidden">
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
          </div>
        </main>
      </PageTransitionWrapper>

  );
}
