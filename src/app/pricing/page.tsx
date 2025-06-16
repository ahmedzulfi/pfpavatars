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
      <main className="min-h-screen bg-[#f5f5f5] text-background w-full font-[family-name:var(--font-geist-sans)]">
        <section className="max-w-[90%] w-full md:w-[1250px] mx-auto px-4 pt-16 md:pt-24 pb-16">
          <div className="text-center mb-12">
            <span className="flex items-center justify-center w-max mx-auto px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium rounded-full bg-[#ffedc9] text-yellow-950">
              <Sparkles className="h-4 w-4 me-2 text-yellow-700" />
              Simple, Affordable Pricing
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-dark-950 mb-4 leading-snug sm:leading-tight">
              Generate Your Perfect <br />
              <span className="font-normal italic font-serif">
                Profile Picture
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Each generation takes about 60 seconds. Purchase as many as you'd
              like.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pricingOptions.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </section>
      </main>
    </PageTransitionWrapper>
  );
}
