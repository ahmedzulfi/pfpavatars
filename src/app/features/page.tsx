import React from "react";
import { Sparkles, Palette, Shield, Zap, Layers, Users } from "lucide-react";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import image1 from "../../image/avatar1.jpg";
import Image from "next/image";
const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-700" />,
    title: "AI-Powered",
    description:
      "Our advanced AI models transform your photos into stunning, high-quality avatars.",
  },
  {
    icon: <Palette className="w-6 h-6 text-yellow-700" />,
    title: "100+ Styles",
    description:
      "Choose from over 100 artistic styles, from anime to oil paintings to 3D renders.",
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-700" />,
    title: "Privacy First",
    description:
      "Your photos are processed securely and deleted immediately after avatar generation.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-700" />,
    title: "AI-Powered",
    description:
      "Our advanced AI models transform your photos into stunning, high-quality avatars.",
  },
  {
    icon: <Palette className="w-6 h-6 text-yellow-700" />,
    title: "100+ Styles",
    description:
      "Choose from over 100 artistic styles, from anime to oil paintings to 3D renders.",
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-700" />,
    title: "Privacy First",
    description:
      "Your photos are processed securely and deleted immediately after avatar generation.",
  },
];

const Features: React.FC = () => {
  return (
    <PageTransitionWrapper>
      <section id="features" className="py-12 md:py-20 relative min-h-screen">
        <div className="container max-w-[90%] w-full md:w-[1250px] mx-auto px-0 sm:px-0 lg:px-0">
          <div className=" mx-auto text-center mb-10 sm:mb-10 sm:mt-15 mt-15">
            <span
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
              style={{ backgroundColor: "#FFEDC9", color: "#3D2A0D" }}
            >
              Why AvatarSnap?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-dark-950 mb-5 text-gray-950">
              Why Choose AvatarSnap?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Our platform offers unmatched capabilities for creating stunning,
              personalized avatars with powerful AI technology.
            </p>
          </div>

          <div className="bg-white min-h-screen p-8">
            <div className="mx-auto space-y-12">
              {/* Step 1: Upload selfie */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">1.</span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Upload selfie
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Select your favorite selfies (necessary selfie work), no
                    blurry needed.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-2xl  h-60 md:h-110  border border-gray-200"></div>
              </div>

              {/* Step 2: AI generates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-100 rounded-2xl  h-60 md:h-110 border border-gray-200 flex items-center justify-center order-2 md:order-1">
                  <div className="w-full h-full bg-gray-300 rounded-full">
                    <Image
                      alt=""
                      src={image1}
                      className="- w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 md:order-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">2.</span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      AI generates
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Magic headshots created in seconds. Explore unique,
                    high-quality styles.
                  </p>
                </div>
              </div>

              {/* Step 3: Download */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">3.</span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Download
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Choose your favorites, download instantly, and use anywhere.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-2xl h-60 md:h-110 border border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background blobs */}
        <div
          className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-30 blur-3xl -translate-y-1/2 -translate-x-1/2"
          style={{ backgroundColor: "#FFEDC9" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: "#FFEDC9" }}
        ></div>
      </section>
    </PageTransitionWrapper>
  );
};

export default Features;
