"use client";

import { useEffect, useState } from "react";
import { config } from "@/config/config";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function computeTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

const boxClass = "p-2.5 rounded-2xl bg-black/60 border border-white/20";
const unitClass = "text-[9px] uppercase tracking-wider text-white/80";

export default function Countdown() {
  const { units } = config.slides.countdown;
  // Null until mounted so server and client markup match
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(config.event.countdownTarget).getTime();
    const tick = () => setTimeLeft(computeTimeLeft(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const value = (n?: number) => (n === undefined ? "--" : n);

  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      <div className={boxClass}>
        <span className="text-2xl sm:text-3xl font-bold font-philosopher text-white block text-glow">
          {value(timeLeft?.days)}
        </span>
        <span className={unitClass}>{units.days}</span>
      </div>
      <div className={boxClass}>
        <span className="text-2xl sm:text-3xl font-bold font-philosopher text-white block text-glow">
          {value(timeLeft?.hours)}
        </span>
        <span className={unitClass}>{units.hours}</span>
      </div>
      <div className={boxClass}>
        <span className="text-2xl sm:text-3xl font-bold font-philosopher text-white block text-glow">
          {value(timeLeft?.minutes)}
        </span>
        <span className={unitClass}>{units.minutes}</span>
      </div>
      <div className={boxClass}>
        <span className="text-2xl sm:text-3xl font-bold font-philosopher text-amberaccent block text-glow">
          {value(timeLeft?.seconds)}
        </span>
        <span className={unitClass}>{units.seconds}</span>
      </div>
    </div>
  );
}
