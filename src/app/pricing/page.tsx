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
      {" "}
      {/* RIGHT Gradient */}
    <main className="min-h-screen w-screen bg-[#040404]  text-white flex items-center justify-center">
  <section className="max-w-6xl w-full mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-snug sm:leading-tight">
              Simple & Transparent.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
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
