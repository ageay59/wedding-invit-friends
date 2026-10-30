"use client";

import { useEffect, useState, type RefObject } from "react";
import { config } from "@/config/config";
import EasterEgg from "./EasterEgg";

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

type CountdownProps = {
  animationContainerRef?: RefObject<HTMLElement>;
};

export default function Countdown({ animationContainerRef }: CountdownProps) {
  const { units, easterEggLabel } = config.slides.countdown.countdown;
  // Null until mounted so server and client markup match
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(config.event.countdownTarget).getTime();
    const tick = () => setTimeLeft(computeTimeLeft(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const value = (n?: number) => n ?? "--";

  return (
    <div className="countdown">
      <div className="countdown__unit">
        <span className="countdown__value">
          {value(timeLeft?.days)}
        </span>
        <span className="countdown__label">{units.days}</span>
      </div>
      <div className="countdown__unit">
        <span className="countdown__value">
          {value(timeLeft?.hours)}
        </span>
        <span className="countdown__label">{units.hours}</span>
      </div>
      <div className="countdown__unit">
        <span className="countdown__value">
          {value(timeLeft?.minutes)}
        </span>
        <span className="countdown__label">{units.minutes}</span>
      </div>
      <div className="countdown__unit countdown__unit--accent">
        <span className="countdown__value">
          {value(timeLeft?.seconds)}
        </span>
        <span className="countdown__label">{units.seconds}</span>
      </div>
      <div className="countdown__easter-eggs">
        <EasterEgg label={easterEggLabel} containerRef={animationContainerRef} />
      </div>
    </div>
  );
}
