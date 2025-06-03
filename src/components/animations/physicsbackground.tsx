"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

// Type for Next.js StaticImageData
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

interface FallingCirclesProps {
  circleCount?: number;
  circleColors?: string[];
  circleImages?: (string | StaticImageData)[];
  circleRadiusRange?: [number, number];
  repelRadius?: number;
  repelForce?: number;
  dragEnabled?: boolean;
}

export default function FallingCircles({
  circleCount = 30,
  circleColors = ["#ffffff"],
  circleImages = [],
  circleRadiusRange = [15, 30],
  repelRadius = 100,
  repelForce = 0.0002,
  dragEnabled = true,
}: FallingCirclesProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Composite,
      Bodies,
      Mouse,
      MouseConstraint,
      Vector,
      Body,
    } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    // Get dimensions from the parent container instead of window
    const parentElement = sceneRef.current.parentElement;
    if (!parentElement) return;

    const width = parentElement.offsetWidth;
    const height = parentElement.offsetHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Walls
    const floor = Bodies.rectangle(width / 2, height + 50, width, 100, {
      isStatic: true,
    });
 const leftWall = Bodies.rectangle(-50, height / 2, 100, height, {
  isStatic: true,
  render: { visible: false },
});
const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, {
  isStatic: true,
  render: { visible: false },
});

    Composite.add(world, [floor, leftWall, rightWall]);

    // Preload images if provided
    const loadedImages: { [key: string]: HTMLImageElement } = {};
    const imagePromises = circleImages.map((imageSource) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        // Handle both string URLs and StaticImageData objects
        const imageSrc =
          typeof imageSource === "string" ? imageSource : imageSource.src;

        img.onload = () => {
          loadedImages[imageSrc] = img;
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${imageSrc}`);
          resolve(); // Continue even if image fails to load
        };
        img.src = imageSrc;
      });
    });

    // Wait for images to load, then create circles
    Promise.all(imagePromises).then(() => {
      const [minRadius, maxRadius] = circleRadiusRange;
      const circles: Matter.Body[] = [];

      for (let i = 0; i < circleCount; i++) {
        const radius = minRadius + Math.random() * (maxRadius - minRadius);

        let renderOptions: any;

        if (circleImages.length > 0) {
          // Use image if available
          const imageSource =
            circleImages[Math.floor(Math.random() * circleImages.length)];
          const imageSrc =
            typeof imageSource === "string" ? imageSource : imageSource.src;
          const img = loadedImages[imageSrc];

          if (img) {
            // Create canvas for circular image
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const size = radius * 2;

            if (ctx) {
              canvas.width = size;
              canvas.height = size;

              // Create circular clipping path
              ctx.beginPath();
              ctx.arc(radius, radius, radius, 0, Math.PI * 2);
              ctx.clip();

              // Draw image centered and scaled to fit
              const scale = Math.min(size / img.width, size / img.height);
              const scaledWidth = img.width * scale;
              const scaledHeight = img.height * scale;
              const x = (size - scaledWidth) / 2;
              const y = (size - scaledHeight) / 2;

              ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

              renderOptions = {
                sprite: {
                  texture: canvas.toDataURL(),
                  xScale: 1,
                  strokeStyle: "transparent",
                  yScale: 1,
                },
              };
            } else {
              // Fallback to color if canvas context fails
              const color =
                circleColors[Math.floor(Math.random() * circleColors.length)];
              renderOptions = { fillStyle: color };
            }
          } else {
            // Fallback to color if image failed to load
            const color =
              circleColors[Math.floor(Math.random() * circleColors.length)];
            renderOptions = { fillStyle: color };
          }
        } else {
          // Use color if no images provided
          const color =
            circleColors[Math.floor(Math.random() * circleColors.length)];
          renderOptions = { fillStyle: color };
        }

        const circle = Bodies.circle(
          Math.random() * width,
          Math.random() * -height,
          radius,
          {
            restitution: 0.8,
            friction: 0.01,
            render: renderOptions,
          }
        );

        circles.push(circle);
      }

      Composite.add(world, circles);

      // Mouse + drag
      const mouse = Mouse.create(render.canvas);
      if (dragEnabled) {
        const mouseConstraint = MouseConstraint.create(engine, {
          mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: false },
          },
        });
        Composite.add(world, mouseConstraint);
      }
      render.mouse = mouse;

      // Repel on hover
      Matter.Events.on(engine, "beforeUpdate", () => {
        for (const circle of circles) {
          const dist = Vector.magnitude(
            Vector.sub(circle.position, mouse.position)
          );
          if (dist < repelRadius) {
            const forceDir = Vector.normalise(
              Vector.sub(circle.position, mouse.position)
            );
            const forceMag = repelForce * (1 - dist / repelRadius);
            Body.applyForce(
              circle,
              circle.position,
              Vector.mult(forceDir, forceMag)
            );
          }
        }
      });
    });

    // Handle resize to keep it responsive
    const handleResize = () => {
      if (!parentElement) return;

      const newWidth = parentElement.offsetWidth;
      const newHeight = parentElement.offsetHeight;

      if (render.canvas) {
        render.canvas.width = newWidth;
        render.canvas.height = newHeight;
        render.options.width = newWidth;
        render.options.height = newHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      if (render.canvas && render.canvas.remove) {
        render.canvas.remove();
      }
      render.textures = {};
    };
  }, [
    circleCount,
    circleColors,
    circleImages,
    circleRadiusRange,
    repelRadius,
    repelForce,
    dragEnabled,
  ]);

  return (
    <div
      ref={sceneRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
