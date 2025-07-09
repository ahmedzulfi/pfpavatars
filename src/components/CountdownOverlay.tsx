import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

function CountdownOverlay() {
  const totalTime = 29;
  const [secondsLeft, setSecondsLeft] = useState(totalTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (secondsLeft / totalTime) * circumference;

  return (
    <div className="bg-neutral-950 text-white rounded-2xl p-8 mx-4 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
      {/* Animated sparkles */}
      <Sparkles className="absolute top-2 left-2 text-[#ffedc9] animate-pulse opacity-10 w-20 h-20 rotate-45" />
      <Sparkles className="absolute bottom-4 right-3 text-[#ffedc9] animate-ping opacity-5 w-14 h-14" />

      <div className="relative mx-auto mb-6 w-24 h-24">
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#2e2e2e"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#ffedc9"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-black bg-[#ffedc9] rounded-full">
          {secondsLeft}s
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">Creating your avatar...</h3>
      <p className="text-sm text-gray-400 mb-1">Estimated time: {totalTime}s</p>
      <p className="text-xs text-neutral-500">Sit tight, magic is happening.</p>
    </div>
  );
}

export default CountdownOverlay;
