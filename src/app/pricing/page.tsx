"use client";

import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import Backgroundgrad from "@/components/Backgroundgrad";
import { Check, Coins, ArrowLeft, Sparkles, Zap, Crown } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const creditPackages = [
    {
      id: "starter",
      name: "Starter Pack",
      credits: 25,
      price: 9.99,
      popular: false,
      icon: Sparkles,
      features: [
        "25 Credits",
        "2-3 Avatar Generations",
        "High Quality Output",
        "Email Support",
      ],
      savings: null,
    },
    {
      id: "popular",
      name: "Popular Pack",
      credits: 75,
      price: 24.99,
      popular: true,
      icon: Zap,
      features: [
        "75 Credits",
        "7-8 Avatar Generations",
        "High Quality Output",
        "Priority Support",
        "Style Variations",
      ],
    },
    {
      id: "pro",
      name: "Pro Pack",
      credits: 200,
      price: 59.99,
      popular: false,
      icon: Crown,
      features: [
        "200 Credits",
        "20+ Avatar Generations",
        "Ultra High Quality",
        "Priority Support",
        "All Style Options",
        "Commercial License",
      ],
    },
  ];

  return (
    <PageTransitionWrapper>
    <main className=" min-h-screen  relative flex flex-col justify-center items-center bg-white text-background w-full font-[family-name:var(--font-geist-sans)]">
      <Backgroundgrad />
      <div className="relative z-20 w-full flex justify-center  backdrop-blur-sm   h-full ">
        <section className="relative pt-25 w-[1270px] max-w-[90%] h-full  overflow-visible ">
          <div className="container  mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10  h-full  rounded-4xl">
            <div className="w-full ">
              <div className="text-center mb-12">
                <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800 mb-6">
                  <Coins className="mr-1 h-3 w-3" />
                  Credit-Based Pricing
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Choose Your Credit Package
                </h1>
                <p className="text-sm md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                  Purchase credits to generate stunning AI avatars. Each
                  generation uses 10 credits and creates 20+ unique avatars.
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3  gap-8 mb-12">
                {creditPackages.map((pkg) => {
                  const IconComponent = pkg.icon;
                  return (
                    <div
                      key={pkg.id}
                      className={`relative bg-white/30 hover:bg-white transition-all hover:shadow-lg shadow-sm rounded-lg p-6 flex flex-col justify-between   `}
                    >
                      <div className="text-center pb-4">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-[#d4c4a8]/20 rounded-full inline-flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-[#8b7355]" />
                          </div>
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          {pkg.name}
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-3xl font-bold text-gray-900">
                              ${pkg.price}
                            </span>
                          </div>
                          <div className="flex items-center justify-center mt-2 text-gray-600">
                            <Coins className="w-4 h-4 mr-1" />
                            <span>{pkg.credits} Credits</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <ul className="space-y-3 mb-6">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          className={`w-full py-2 rounded font-semibold ${
                            pkg.popular
                              ? "bg-[#d4c4a8] hover:bg-[#c2b394] text-gray-900"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                          } transition-colors`}
                        >
                          Purchase Credits
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </PageTransitionWrapper>

  );
}
