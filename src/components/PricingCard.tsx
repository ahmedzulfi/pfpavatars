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
      className={`relative ${
        highlight
          ? "bg-[#fffdf7] border-2 border-[#ffedc9]"
          : "bg-white/30 border border-gray-200"
      } hover:bg-white transition-all hover:shadow-lg shadow-sm rounded-xl p-8 flex flex-col justify-between min-h-[490px]`}
    >
      <div className="text-center pb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="mb-4">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">{unit}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>

        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-6 ${
            highlight
              ? "bg-[#ffedc9] text-black hover:bg-[#ffe5a1]"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
          onClick={onClick}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>

      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check
              className={`w-5 h-5 mr-3 flex-shrink-0 ${
                highlight ? "text-yellow-800" : "text-green-600"
              }`}
            />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
