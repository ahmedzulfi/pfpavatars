"use client";

import { Check } from "lucide-react";
import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  buttonText: string;
  onClick?: () => void;
  highlight?: boolean;
  disabled?: boolean;
}

export default function PricingCard({
  title,
  price,
  unit,
  description,
  features,
  buttonText,
  onClick,
  highlight = false,
  disabled = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-neutral-950    transition-all rounded-xl 
      p-5 sm:p-8 flex flex-col justify-between 
      min-h-[390px] sm:min-h-[490px] w-full max-w-md mx-auto shadow-md`}
    >
      <div className="text-center pb-5 sm:pb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
          {title}
        </h3>
        <div className="mb-3 sm:mb-4">
          <span className="text-4xl sm:text-5xl font-bold text-white">
            {price}
          </span>
          <span className="text-neutral-400 ml-1 sm:ml-2">{unit}</span>
        </div>

        <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">
          {description}
        </p>

        <button
          className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors mb-0 sm:mb-0 ${
            highlight
              ? "bg-[#ffedc9] text-black hover:bg-[#ffe5a1]"
              : "bg-neutral-800 text-white hover:bg-neutral-700"
          }`}
          onClick={onClick}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>

      <ul className="space-y-2 sm:space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm sm:text-base">
            <Check
              className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 ${
                highlight ? "text-yellow-900" : "text-green-400"
              }`}
            />
            <span className="text-neutral-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
