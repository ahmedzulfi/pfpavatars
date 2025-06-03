import React from "react";
import { Sparkles, Palette, Shield, Zap, Layers, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-950" />,
    title: "AI-Powered",
    description:
      "Our advanced AI models transform your photos into stunning, high-quality avatars.",
  },
  {
    icon: <Palette className="w-6 h-6 text-yellow-950" />,
    title: "100+ Styles",
    description:
      "Choose from over 100 artistic styles, from anime to oil paintings to 3D renders.",
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-950" />,
    title: "Privacy First",
    description:
      "Your photos are processed securely and deleted immediately after avatar generation.",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-950" />,
    title: "Instant Results",
    description:
      "Get your custom avatars in seconds, not minutes. No waiting required.",
  },
  {
    icon: <Layers className="w-6 h-6 text-yellow-950" />,
    title: "Batch Processing",
    description:
      "Generate multiple variations and styles from a single photo at once.",
  },
  {
    icon: <Users className="w-6 h-6 text-yellow-950" />,
    title: "Team Access",
    description:
      "Perfect for teams who need consistent, professional avatars across platforms.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features\" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-yellow-100 text-yellow-950">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-6">
            Why Choose AvatarSnap?
          </h2>
          <p className="text-lg text-gray-600">
            Our platform offers unmatched capabilities for creating stunning,
            personalized avatars with powerful AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark-950 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default Features;
