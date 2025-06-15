import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import PricingCard from "@/components/PricingCard";
import { Sparkles } from "lucide-react";

export default function Pricing() {
  const pricingOptions = [
    {
      title: "Starter Pack",
      price: "$2",
      unit: "/starter",
      description: "2 profile picture generations",
      features: [
        "2 AI generations",
        "Fast 60-second generation",
        "High quality output",
        "Instant download",
        "Transparent background",
        "Lifetime access",
      ],
      buttonText: "Generate Now",
    },
    {
      title: "Single Generation",
      price: "$1",
      unit: "/generation",
      description: "Generate one profile picture",
      features: [
        "One profile picture",
        "~60 second generation time",
        "High quality output",
        "Instant download",
        "Transparent background",
        "No watermark",
      ],
      buttonText: "Generate Now",
      highlight: true,
    },
    {
      title: "Creator Bundle",
      price: "$5",
      unit: "/bundle",
      description: "10 profile picture generations",
      features: [
        "10 AI generations",
        "High quality export",
        "Instant download",
        "Transparent background",
        "Great for content creators",
        "Best value",
      ],
      buttonText: "Generate Now",
    },
  ];

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen relative flex flex-col justify-center items-center mt-10 bg-[#f5f5f5] text-background w-full font-[family-name:var(--font-geist-sans)]">
        <div className="relative z-20 w-full flex justify-center backdrop-blur-sm h-full">
          <section className="relative pt-25 max-w-[90%] w-[1250px] h-full overflow-visible">
            <div className="container mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10 h-full rounded-4xl">
              <div className="text-center mb-18">
                <span className="flex items-center justify-center w-max mx-auto md:px-6 px-3 py-1.5 mb-6 text-sm font-medium rounded-full bg-[#ffedc9] text-yellow-950">
                  <Sparkles className="h-4 w-4 me-2 text-yellow-700" />
                  Simple, Affordable Pricing
                </span>
                <h1 className="text-3xl md:text-6xl font-bold text-dark-950 mb-4 leading-tight">
                  Generate Your Perfect <br />
                  <span className="font-normal italic font-serif">
                    Profile Picture
                  </span>
                </h1>
                <p className="text-sm md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                  Each generation takes about 60 seconds. Purchase as many as
                  you'd like.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12 mx-auto">
                {pricingOptions.map((plan, index) => (
                  <PricingCard key={index} {...plan} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
