"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft, Download, Home } from "lucide-react";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import image1 from "../../image/avatar1.jpg";
import image2 from "../../image/ez.jpg";
import Image from "next/image";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ImageComparision";
import { Card, CardContent } from "@/components/ui/card";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const avatarStyles = [
    {
      id: 1,
      name: "3D Cartoon",
      description: "Smooth look with soft shading and expressive features.",
      preview: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Realistic",
      description: "Professional and lifelike appearance.",
      preview: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Minimalist",
      description: "Clean lines with simple, modern aesthetic.",
      preview: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Artistic",
      description: "Creative and stylized interpretation.",
      preview: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen pt-25 bg-[#f5f5f5] text-gray-900 px-4 sm:px-6 lg:px-8 py-12">
        {/* ...rest of your component unchanged */}
      </main>
    </PageTransitionWrapper>
  );
}
