import Image from "next/image";
import React from "react";
import image1 from '../image/ez.jpg'
function Backgroundgrad() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0  inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      <Image
        src={image1}
        alt="Background"
        className="w-full h-full object-cover opacity-30"
        priority
      />

      {/* Gradient overlay (top, bottom, left, right) */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        style={{
          background: `
              linear-gradient(to top, white, transparent 15%),
              linear-gradient(to bottom, white, transparent 0%),
              linear-gradient(to left, white, transparent 15%),
              linear-gradient(to right, white, transparent 10%)
            `,
          mixBlendMode: "lighten",
        }}
      />
    </div>
  );
}

export default Backgroundgrad;
