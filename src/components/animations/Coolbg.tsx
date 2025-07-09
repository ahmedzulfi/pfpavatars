import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
declare global {
  interface Window {
    UnicornStudio: any;
  }
}

function Coolbg({ id }: { id: string }) {
  const pathname = usePathname(); // rerun useEffect on route change
  const unicornRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const loadScript = () => {
      return new Promise<void>((resolve) => {
        if (window.UnicornStudio) return resolve();

        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.27/dist/unicornStudio.umd.js";
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    const initUnicorn = async () => {
      await loadScript();

      // Cleanup existing embed if it exists
      if (unicornRef.current) {
        unicornRef.current.innerHTML = "";
      }

      // Create new embed div
      const embed = document.createElement("div");
      embed.setAttribute("data-us-project", "rU2c01mhL2Uo3EQelrR7");
      embed.style.position = "absolute";
      embed.style.inset = "0";
      embed.style.width = "100%";
      embed.style.height = "120%";
      embed.className = "absolute z-0";

      unicornRef.current?.appendChild(embed);

      // Re-initialize UnicornStudio
      if (window.UnicornStudio) {
        window.UnicornStudio.init?.();
      }
    };

    initUnicorn();
  }, [pathname]); // Re-run on every route change
  return (
    <div
      data-us-project={id}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "120%",
      }}
      className="absolute z-0 hidden md:block"
    />
  );
}

export default Coolbg;
