import React from "react";
import { Sparkles, Palette, Shield, Zap, Layers, Users } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-[#FFEDC9]" />,
    title: "AI-Powered",
    description:
      "Our advanced AI models transform your photos into stunning, high-quality avatars.",
  },
  {
    icon: <Palette className="w-6 h-6 text-[#FFEDC9]" />,
    title: "100+ Styles",
    description:
      "Choose from over 100 artistic styles, from anime to oil paintings to 3D renders.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#FFEDC9]" />,
    title: "Privacy First",
    description:
      "Your photos are processed securely and deleted immediately after avatar generation.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-12 md:py-20 relative">
      <div className="container max-w-[90%] w-full md:w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
            style={{ backgroundColor: "#FFEDC9", color: "#3D2A0D" }}
          >
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-5">
            Why Choose AvatarSnap?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our platform offers unmatched capabilities for creating stunning,
            personalized avatars with powerful AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-5"
                style={{ backgroundColor: "#FFEDC9" }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-dark-950 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
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
  );
};

export default Features;
