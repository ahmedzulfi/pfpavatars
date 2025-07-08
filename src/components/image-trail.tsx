// author: Khoa Phan <https://www.pldkhoa.dev>

"use client";

import React, {
  ElementType,
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  MouseEvent,
} from "react";
import type { DOMKeyframesDefinition, AnimationOptions } from "motion";
import { useAnimate } from "motion/react";

import { cn } from "@/lib/utils";

interface ImageTrailProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: ElementType;
  threshold?: number;
  intensity?: number;
  keyframes?: DOMKeyframesDefinition;
  keyframesOptions?: AnimationOptions;
  trailElementAnimationKeyframes?: {
    x?: AnimationOptions;
    y?: AnimationOptions;
  };
  repeatChildren?: number;
  baseZIndex?: number;
  zIndexDirection?: "new-on-top" | "old-on-top";
}

interface ImageTrailItemProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  children: React.ReactNode;
}

const MathUtils = {
  lerp: (a: number, b: number, n: number) => (1 - n) * a + n * b,
  distance: (x1: number, y1: number, x2: number, y2: number) =>
    Math.hypot(x2 - x1, y2 - y1),
};

const ImageTrail = ({
  className,
  as: ElementTag = "div",
  children,
  threshold = 100,
  intensity = 0.3,
  keyframes,
  keyframesOptions,
  repeatChildren = 3,
  trailElementAnimationKeyframes = {
    x: { duration: 1, type: "tween", ease: "easeOut" },
    y: { duration: 1, type: "tween", ease: "easeOut" },
  },
  baseZIndex = 0,
  zIndexDirection = "new-on-top",
  ...props
}: ImageTrailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const allImages = useRef<HTMLElement[]>([]);
  const currentId = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cachedMousePos = useRef({ x: 0, y: 0 });
  const [scope, animate] = useAnimate();
  const zIndices = useRef<number[]>([]);

  const clampedIntensity = useMemo(
    () => Math.max(0.0001, Math.min(1, intensity)),
    [intensity]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll<HTMLElement>(
      ".image-trail-item"
    );

    allImages.current = Array.from(items);
    zIndices.current = allImages.current.map((_, index) => index);
  }, [containerRef]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || allImages.current.length === 0) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    cachedMousePos.current.x = MathUtils.lerp(
      cachedMousePos.current.x,
      mousePos.x,
      clampedIntensity
    );
    cachedMousePos.current.y = MathUtils.lerp(
      cachedMousePos.current.y,
      mousePos.y,
      clampedIntensity
    );

    const distance = MathUtils.distance(
      mousePos.x,
      mousePos.y,
      lastMousePos.current.x,
      lastMousePos.current.y
    );

    if (distance > threshold) {
      const N = allImages.current.length;
      const current = currentId.current;

      if (zIndexDirection === "new-on-top") {
        for (let i = 0; i < N; i++) {
          if (i !== current) zIndices.current[i] -= 1;
        }
        zIndices.current[current] = N - 1;
      } else {
        for (let i = 0; i < N; i++) {
          if (i !== current) zIndices.current[i] += 1;
        }
        zIndices.current[current] = 0;
      }

      const currentEl = allImages.current[current];
      currentEl.style.display = "block";

      allImages.current.forEach((el, index) => {
        el.style.zIndex = String(zIndices.current[index] + baseZIndex);
      });

      const offsetX = currentEl.offsetWidth / 2;
      const offsetY = currentEl.offsetHeight / 2;

      animate(
        currentEl,
        {
          x: [
            cachedMousePos.current.x - offsetX,
            mousePos.x - offsetX,
          ],
          y: [
            cachedMousePos.current.y - offsetY,
            mousePos.y - offsetY,
          ],
          ...keyframes,
        },
        {
          ...trailElementAnimationKeyframes.x,
          ...trailElementAnimationKeyframes.y,
          ...keyframesOptions,
        }
      );

      currentId.current = (current + 1) % N;
      lastMousePos.current = { ...mousePos };
    }
  };

  return (
    <ElementTag
      className={cn("h-full w-full relative", className)}
      onMouseMove={handleMouseMove}
      ref={containerRef}
      {...props}
    >
      {Array.from({ length: repeatChildren }).map((_, i) => (
        <React.Fragment key={i}>{children}</React.Fragment>
      ))}
    </ElementTag>
  );
};

export const ImageTrailItem = ({
  className,
  children,
  as: ElementTag = "div",
  ...props
}: ImageTrailItemProps) => {
  return (
    <ElementTag
      {...props}
      className={cn(
        "absolute top-0 left-0 will-change-transform hidden image-trail-item",
        className
      )}
    >
      {children}
    </ElementTag>
  );
};

export default ImageTrail;
