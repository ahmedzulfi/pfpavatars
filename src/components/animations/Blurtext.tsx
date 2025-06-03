"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState, useMemo } from "react";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>;
  easing?: (t: number) => number | string;
  onAnimationComplete?: () => void;
  duration?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 0,
  className = "",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeInOut",
  onAnimationComplete,
  duration = 0.6,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(() => ({ filter: "blur(0px)", opacity: 1, y: 0 }), []);

  const from = animationFrom ?? defaultFrom;
  const to = animationTo ?? defaultTo;

  return (
    <motion.p
      ref={ref}
      className={`blur-text ${className}`}
      initial={from}
      animate={inView ? to : from}
      transition={{
        duration,
        delay: delay / 1000,
        ease: easing,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {text}
    </motion.p>
  );
};

export default BlurText;
