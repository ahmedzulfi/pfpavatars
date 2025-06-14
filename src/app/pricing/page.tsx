"use client";

import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import Backgroundgrad from "@/components/Backgroundgrad";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen relative flex flex-col justify-center items-center mt-10  bg-[#f5f5f5] text-background w-full font-[family-name:var(--font-geist-sans)]">
        <div className="relative z-20 w-full flex justify-center backdrop-blur-sm h-full">
          <section className="relative pt-25 w-[1270px] max-w-[90%] h-full overflow-visible">
            <div className="container mx-auto px-2 sm:px-6 lg:px-0 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10 h-full rounded-4xl">
              <div className="w-full">
                <div className="text-center mb-12">
                  <div>
                    <span className="flex items-center  justify-betweeen w-max mx-auto md:px-6 px-3 py-1.5 mb-6 text-sm font-medium rounded-full bg-[#ffedc9] bg-blur-md text-yellow-950">
                      <Sparkles className="h-4 w-4 me-2 text-yellow-700" />
                      <span> Simple, Affordable Pricing</span>
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-6xl font-bold text-dark-950 mb-4 leading-tight text-center">
                    Generate Your Perfect <br />{" "}
                    <span className="font-normal  italic font-serif">
                      Profile Picture
                    </span>
                  </h1>
                  <p className="text-sm md:text-xl  text-gray-700 max-w-3xl mx-auto mb-8">
                    Each generation takes about 60 seconds. Purchase as many as
                    you'd like.
                  </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                  {/* Single Generation */}
                  <div className="relative bg-white border-2 border-blue-200 rounded-xl p-8 flex flex-col justify-between shadow-lg">
                    {/* Popular Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>

                    <div className="text-center pb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Single Generation
                      </h3>
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-gray-900">
                          $1
                        </span>
                        <span className="text-gray-600 ml-2">/generation</span>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Generate one profile picture
                      </p>

                      <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-6">
                        Generate Now
                      </button>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          One profile picture generation
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          ~60 second generation time
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          High quality output
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Instant download</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Transparent backgrounds
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Bundle Pack */}
                  <div className="relative bg-white/30 hover:bg-white transition-all hover:shadow-lg shadow-sm rounded-xl p-8 flex flex-col justify-between border border-gray-200">
                    <div className="text-center pb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Bundle Pack
                      </h3>
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-gray-900">
                          $3
                        </span>
                        <span className="text-gray-600 ml-2">/bundle</span>
                      </div>
                      <p className="text-gray-600 mb-6">
                        5 profile pictures for the price of 3
                      </p>

                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-semibold transition-colors mb-6">
                        Coming Soon
                      </button>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          5 profile picture generations
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          ~60 second generation time each
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          High quality output
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Instant download</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Transparent backgrounds
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Save 40%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
